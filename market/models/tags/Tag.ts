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
import ProductTag from "../productTags/ProductTag";

export type TagAttributes = {
  id: number;
  name: string;
};

export type TagCreationAttributes = Optional<TagAttributes, "id">;

@Table
export class Tag extends Model<TagAttributes, TagCreationAttributes> {
  @AutoIncrement
  @AllowNull(false)
  @PrimaryKey
  @Column
  declare id: number;

  @AllowNull(false)
  @Column
  declare name: string;

  @HasMany(() => ProductTag)
  productTags: ProductTag[];
}

export default Tag;
