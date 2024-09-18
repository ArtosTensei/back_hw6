import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  ForeignKey,
} from "sequelize-typescript";
import { Optional } from "sequelize";
import Order from "./Order";
import Product from "../products/Product";

export type OrderItemAttributes = {
  id: number;
  orderId: number;
  productId: number;
  quantity: number;
  price: number;
};

export type OrderItemCreationAttributes = Optional<OrderItemAttributes, "id">;

@Table
export class OrderItem extends Model<
  OrderItemAttributes,
  OrderItemCreationAttributes
> {
  @AutoIncrement
  @AllowNull(false)
  @PrimaryKey
  @Column
  declare id: number;

  @AllowNull(false)
  @ForeignKey(() => Order)
  @Column
  declare orderId: number;

  @AllowNull(false)
  @ForeignKey(() => Product)
  @Column
  declare productId: number;

  @AllowNull(false)
  @Column
  declare quantity: number;

  @AllowNull(false)
  @Column
  declare price: number;
}

export default OrderItem;
