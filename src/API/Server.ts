import axios from "axios"
import { IProduct } from "../types/types"

export default class Server {
    static async getProducts() {
        const response = await axios.get<IProduct[]>('./products.json')
        return response.data
    }
} 
