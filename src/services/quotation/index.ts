import 'axios'
import Axios from 'axios'
import { ICreateQuotationParams, IQuotation } from '../../interfaces/quotation.interface';

const createQuotation = async (params:ICreateQuotationParams) => {
    const { data } = await Axios.post<IQuotation>("http://localhost:8080/api/quotation", params)
    return data;
}

export { createQuotation }