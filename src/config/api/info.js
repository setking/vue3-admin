import { post, get } from '../request'

export default class Info {
  static async login(data) {
    return post('/api/login', data)
  }
  static async getInfo(data) {
    return get('/api/getUsers', data)
  }
}
