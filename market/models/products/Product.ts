import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  BelongsToMany,
} from "sequelize-typescript";
import { Optional } from "sequelize";
import ProductTag from "../productTags/ProductTag";
import Tag from "../tags/Tag";

export type ProductAttributes = {
  id: number;
  name: string;
  price: number;
};

export type ProductCreationAttributes = Optional<ProductAttributes, "id">;

@Table
export class Product extends Model<
  ProductAttributes,
  ProductCreationAttributes
> {
  @AutoIncrement
  @AllowNull(false)
  @PrimaryKey
  @Column
  declare id: number;

  @AllowNull(false)
  @Column
  declare name: string;

  @AllowNull(false)
  @Column
  declare price: number;

  @BelongsToMany(() => Tag, () => ProductTag)
  tags: Tag[];
}

export default Product;
