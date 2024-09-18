import OrderRepository from "../../repositories/orders/OrderRepository";
import OrderItemRepository from "../../repositories/orders/OrderItemRepository";
import ProductRepository from "../../repositories/products/ProductRepository";
import TagRepository from "../../repositories/tags/TagRepository";
import PromotionRepository from "../../repositories/promotions/PromotionRepository";

class OrderService {
  async getAll() {
    return OrderRepository.getAll();
  }

  async getById(id: number) {
    return OrderRepository.getById(id);
  }

  async create(orderData: any) {
    const { userId, items } = orderData;

    const newOrder = await OrderRepository.create({
      userId,
      totalPrice: 0,
      createdAt: new Date(),
    });

    let totalPrice = 0;
    for (const item of items) {
      const product = await ProductRepository.getById(item.productId);
      if (!product)
        throw new Error(`Product with id ${item.productId} not found`);

      const tags = await TagRepository.getTagsByProductId(item.productId);

      let maxDiscount = 0;
      for (const tag of tags) {
        const promotions = await PromotionRepository.getActivePromotionsForTag(
          tag.id
        );
        const discount = promotions.reduce(
          (acc, promo) => Math.max(acc, promo.discount),
          0
        );
        maxDiscount = Math.max(maxDiscount, discount);
      }

      const price = product.price * (1 - maxDiscount / 100);
      const itemTotalPrice = price * item.quantity;
      totalPrice += itemTotalPrice;

      await OrderItemRepository.create({
        orderId: newOrder.id,
        productId: item.productId,
        quantity: item.quantity,
        price: itemTotalPrice,
      });
    }

    await OrderRepository.update(newOrder.id, {
      totalPrice,
    });

    const order = await OrderRepository.getById(newOrder.id);
    if (!order) {
      throw new Error(`Order with id ${newOrder.id} not found`);
    }
    const orderItems = await OrderItemRepository.getByOrderId(newOrder.id);

    return {
      ...order.toJSON(),
      items: orderItems,
    };
  }

  async update(id: number, orderData: any) {
    return OrderRepository.update(id, orderData);
  }

  async delete(id: number) {
    return OrderRepository.delete(id);
  }
}

export default new OrderService();
