import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  ForeignKey,
} from "sequelize-typescript";
import Tag from "../tags/Tag";
import { Optional } from "sequelize";

export type PromotionAttributes = {
  id: number;
  name: string;
  discount: number;
  tagId: number;
  startDate: Date;
  endDate: Date;
};

export type PromotionCreationAttributes = Optional<PromotionAttributes, "id">;

@Table
export class Promotion extends Model<
  PromotionAttributes,
  PromotionCreationAttributes
> {
  @AutoIncrement
  @AllowNull(false)
  @PrimaryKey
  @Column
  declare id: number;

  @Column
  declare name: string;

  @AllowNull(false)
  @Column
  declare discount: number;

  @AllowNull(false)
  @ForeignKey(() => Tag)
  @Column
  declare tagId: number;

  @AllowNull(false)
  @Column
  declare startDate: Date;

  @AllowNull(false)
  @Column
  declare endDate: Date;
}

export default Promotion;
