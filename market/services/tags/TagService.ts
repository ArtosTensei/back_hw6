import TagRepository from "../../repositories/tags/TagRepository";

class TagService {
  async getAll() {
    return TagRepository.getAll();
  }

  async getById(id: number) {
    return TagRepository.getById(id);
  }

  async create(tagData: any) {
    return TagRepository.create(tagData);
  }

  async update(id: number, tagData: any) {
    return TagRepository.update(id, tagData);
  }

  async delete(id: number) {
    return TagRepository.delete(id);
  }
}

export default new TagService();
