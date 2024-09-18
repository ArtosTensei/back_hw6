import { Order } from "../../models/orders/Order";

class OrderRepository {
  async getAll() {
    return Order.findAll();
  }

  async getById(id: number) {
    return Order.findByPk(id);
  }

  async create(orderData: any) {
    return Order.create(orderData);
  }

  async update(id: number, orderData: any) {
    const order = await Order.findByPk(id);
    if (order) {
      return order.update(orderData);
    }
    return null;
  }

  async delete(id: number) {
    const order = await Order.findByPk(id);
    if (order) {
      return order.destroy();
    }
    return null;
  }
}

export default new OrderRepository();
