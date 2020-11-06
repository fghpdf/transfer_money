import 'axios'
import Axios from 'axios'
import { ICreateQuotationParams, IQuotation } from '../../interfaces/quotation.interface';
import { ICreateTransactionParams, ITransaction } from '../../interfaces/transaction.interface';
import { thunesBaseRequest } from '../common';

const createQuotation = async (params:ICreateQuotationParams) => {
    const { data } = await Axios.post<IQuotation>("/api/quotation", params, thunesBaseRequest)
    return data;
}

const createTransaction = async (quotationId: number, params: ICreateTransactionParams) => {
    const { data } = await Axios.post<ITransaction>(`/api/quotations/${quotationId}/transactions`, params, thunesBaseRequest)
    return data;
}

const confirmTransaction = async (id: number) => {
    const { data } = await Axios.post<ITransaction>(`/api/transactions/${id}/confirm`, null, thunesBaseRequest)
    return data;
}

const refreshTransactionStatus = async (id: number) => {
    const { data } = await Axios.get<ITransaction>(`/api/transactions/${id}`, thunesBaseRequest);
    return data;
}

export { createQuotation, createTransaction, refreshTransactionStatus, confirmTransaction }