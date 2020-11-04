import 'axios'
import Axios from 'axios'
import { IPayer } from '../../interfaces/payer.interface'

const listPayers = async () => {
    const { data } = await Axios.get<Array<IPayer>>("http://localhost:8080/api/payers")
    return data;
}

export { listPayers }