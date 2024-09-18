import { User, UserAttributes } from "../../models/users/User";
import checkPassword from "../../utils/checkPassword";
import hashPassword from "../../utils/hashPassword";
import UserRepository from "../../repositories/users/UserRepository";

class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async getById(id: number): Promise<User> {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new Error("Not Found");
    }
    return user;
  }

  async getAll(): Promise<User[]> {
    return await this.userRepository.findAll();
  }

  async update(
    user: UserAttributes,
    userData: Pick<UserAttributes, "email" | "name" | "phone" | "adress">
  ): Promise<User> {
    const [updatedRowsCount, updatedUser] = await this.userRepository.update(
      user,
      {
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        adress: userData.adress,
      }
    );

    if (updatedRowsCount === 0) {
      throw new Error("User not found");
    }
    return updatedUser[0];
  }

  async changePassword<
    Body extends { oldPassword: string; newPassword: string }
  >(user: UserAttributes, userData: Body): Promise<User> {
    if (!checkPassword(user, userData.oldPassword)) {
      throw new Error("Password is not correct");
    }

    const [updatedRowsCount, updatedUser] = await this.userRepository.update(
      user,
      {
        password: await hashPassword(userData.newPassword),
      }
    );

    if (updatedRowsCount === 0) {
      throw new Error("User not found");
    }
    return updatedUser[0];
  }

  async delete(user: UserAttributes): Promise<number> {
    const deletedRowsCount = await this.userRepository.delete(user);
    if (deletedRowsCount === 0) {
      throw new Error("User not found");
    }
    return deletedRowsCount;
  }
}

export default UserService;
