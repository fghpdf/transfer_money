import { ITransactionType } from "./transaction.interface";

export interface IPayer {
    id: number
    name: string
    currency: string
    country_iso_code: number
    transaction_types: ITransactionType
};

export interface IPayerReduerState {
    payer?: IPayer
}
