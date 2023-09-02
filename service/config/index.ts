import axios from "axios"

const http = axios.create({
  baseURL: `http://localhost:5000/`,                                           //Adicionar Base URL
  headers: {
    "Accept": "application/json",
    "Content": "application/json"
  }
})



export { http}
