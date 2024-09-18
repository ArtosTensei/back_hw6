import {
  Table,
  Column,
  Model,
  PrimaryKey,
  ForeignKey,
  AllowNull,
  AutoIncrement,
} from "sequelize-typescript";
import { Optional } from "sequelize";
import Product from "../products/Product";
import Tag from "../tags/Tag";

export type ProductTagAttributes = {
  id: number;
  productId: number;
  tagId: number;
};

export type ProductTagCreationAttributes = Optional<ProductTagAttributes, "id">;

@Table
export class ProductTag extends Model<
  ProductTagAttributes,
  ProductTagCreationAttributes
> {
  @AutoIncrement
  @AllowNull(false)
  @PrimaryKey
  @Column
  declare id: number;

  @AllowNull(false)
  @ForeignKey(() => Product)
  @Column
  declare productId: number;

  @AllowNull(false)
  @ForeignKey(() => Tag)
  @Column
  declare tagId: number;
}

export default ProductTag;
