import { post, get } from "../request";

export default class User {
  /**
   *
   * @param {*} data
   * @returns
   */
  static async register(data) {
    return post("/user/register", data);
  }

  static async getUserInfo() {
    return get("/user/info");
  }
}
