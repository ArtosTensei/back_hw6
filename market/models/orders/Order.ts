import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  HasMany,
} from "sequelize-typescript";
import { Optional } from "sequelize";
import OrderItem from "./OrderItem";

export type OrderAttributes = {
  id: number;
  userId: number;
  totalPrice: number;
  createdAt: Date;
};

export type OrderCreationAttributes = Optional<OrderAttributes, "id">;

@Table
export class Order extends Model<OrderAttributes, OrderCreationAttributes> {
  @AutoIncrement
  @AllowNull(false)
  @PrimaryKey
  @Column
  declare id: number;

  @AllowNull(false)
  @Column
  declare userId: number;

  @AllowNull(false)
  @Column
  declare totalPrice: number;

  @AllowNull(false)
  @Column
  declare createdAt: Date;

  @HasMany(() => OrderItem)
  items: OrderItem[];
}

export default Order;
