import 'axios'
import Axios from 'axios'
import { IPayer } from '../../interfaces/payer.interface'
import { thunesBaseRequest } from '../common'

const listPayers = async () => {
    const { data } = await Axios.get<Array<IPayer>>("/api/payers", thunesBaseRequest)
    return data;
}

export { listPayers }