import 'axios'
import Axios from 'axios'
import { ICreateQuotationParams, IQuotation } from '../../interfaces/quotation.interface';
import { ICreateTransactionParams, ITransaction, ITransactionStatus } from '../../interfaces/transaction.interface';

const createQuotation = async (params:ICreateQuotationParams) => {
    const { data } = await Axios.post<IQuotation>("http://localhost:8080/api/quotation", params)
    return data;
}

const createTransaction = async (quotationId: number, params: ICreateTransactionParams) => {
    const { data } = await Axios.post<ITransaction>(`http://localhost:8080/api/quotations/${quotationId}/transactions`, params)
    return data;
}

const setTransactionList = (transactionId: number, status = "90401", statusMessage = "UNKNOWN") => {
    const insert: ITransactionStatus = {
        id: transactionId,
        status,
        statusMessage
    };

    const oldDataStr = window.localStorage.getItem('transactions_status');
    if (!oldDataStr) {
        window.localStorage.setItem('transactions_status', JSON.stringify([insert]));
        return;
    }

    const oldData: Set<ITransactionStatus> = new Set(JSON.parse(oldDataStr));
    oldData.add(insert)

    window.localStorage.setItem('transactions_status', JSON.stringify(Array.from(oldData)));
    return;
}

const getTransactionList = () => {
    const oldDataStr = window.localStorage.getItem('transactions_status');
    if (!oldDataStr) {
        return [];
    }

    const oldData: Array<ITransactionStatus> = JSON.parse(oldDataStr);

    return oldData;
}

const refreshTransactionStatus = async (id: number) => {
    const { data } = await Axios.post<ITransaction>(`http://localhost:8080/api/transactions/${id}/confirm`);
    return data;
}

export { createQuotation, createTransaction, setTransactionList, getTransactionList, refreshTransactionStatus }