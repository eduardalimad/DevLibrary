import { http } from '../service/config/index'


export default {
  listBooks: async () => {
    return await http.get(`/books`)
  },
  newBook: async (data:any) => {
    return await http.post(`/books`, data)
  }
}