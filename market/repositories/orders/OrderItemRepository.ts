import { OrderItem } from "../../models/orders/OrderItem";

class OrderItemRepository {
  async getAll() {
    return OrderItem.findAll();
  }

  async getById(id: number) {
    return OrderItem.findByPk(id);
  }

  async create(orderItemData: any) {
    return OrderItem.create(orderItemData);
  }

  async update(id: number, orderItemData: any) {
    const orderItem = await OrderItem.findByPk(id);
    if (orderItem) {
      return orderItem.update(orderItemData);
    }
    return null;
  }

  async delete(id: number) {
    const orderItem = await OrderItem.findByPk(id);
    if (orderItem) {
      return orderItem.destroy();
    }
    return null;
  }

  async getByOrderId(orderId: number) {
    return OrderItem.findAll({ where: { orderId } });
  }
}

export default new OrderItemRepository();
