import { User, UserAttributes } from "../../models/users/User";

class UserRepository {
  async findById(id: number): Promise<User | null> {
    return await User.findByPk(id);
  }

  async findAll(): Promise<User[]> {
    return await User.findAll();
  }

  async update(
    user: UserAttributes,
    data: Partial<UserAttributes>
  ): Promise<[number, User[]]> {
    return await User.update(data, {
      where: { id: user.id },
      returning: true,
    });
  }

  async delete(user: UserAttributes): Promise<number> {
    return await User.destroy({
      where: { id: user.id },
    });
  }
}

export default UserRepository;
