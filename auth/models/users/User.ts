import hashPassword from "../../utils/hashPassword";
import {
  Table,
  Column,
  Model,
  Unique,
  AllowNull,
  BeforeCreate,
  BeforeUpdate,
  PrimaryKey,
  AutoIncrement,
  HasMany,
} from "sequelize-typescript";
import { Optional } from "sequelize";

export type UserAttributes = {
  id: Number;
  name: string;
  email: string;
  password: string;
  phone: string;
  adress: string;
};

export type UserCreationAttributes = Optional<UserAttributes, "id">;

@Table
export class User extends Model<UserAttributes, UserCreationAttributes> {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: Number;

  @Column
  name: string;

  @Column
  phone: string;

  @Column
  adress: string;

  @Unique
  @Column
  email: string;

  @AllowNull(false)
  @Column
  password: string;

  @BeforeCreate
  @BeforeUpdate
  static async generatePasswordHash(instance: User) {
    const { password } = instance;
    if (instance.changed("password")) {
      instance.password = await hashPassword(password);
    }
  }
}

export default User;
