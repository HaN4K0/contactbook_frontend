import createApiClient from "./api.service";

class ContactService {
  constructor(baseURL = "/api/contacts") {
    this.api = createApiClient(baseURL);
  }
  async getAllContacts() {
    return (await this.api.get("/")).data;
  }
  async create(data) {
    return (await this.api.post("/", data)).data;
  }

  async deleteAll() {
    return (await this.api.delete("/")).data;
  }

  async getContactById(id) {
    return (await this.api.get(`/${id}`)).data;
  }

  async updateContact(id, data) {
    return (await this.api.put(`/${id}`, data)).data;
  }

  async deleteContact(id) {
    return (await this.api.delete(`/${id}`)).data;
  }
}

export default new ContactService;
