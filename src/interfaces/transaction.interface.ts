import { ICreditPartyInfo, ICreditPartyVerification } from "./creditParty.interface";
import { IUser } from "./user.interface";

export interface ITransaction {
  id: number
	status: string
	statusMessage: string
	externalId: string
	transactionType: string
  creationDate: string 
  expirationDate: string 
}

export interface ITransactionType {
    C2C?: ITransactionTypeInfo
    B2C?: ITransactionTypeInfo
    B2B?: ITransactionTypeInfo
    C2B?: ITransactionTypeInfo
}

export interface ITransactionTypeInfo {
    minimum_transaction_amount?: number
    maximum_transaction_amount?: number
    credit_party_identifiers_accepted?: string[][]
    required_sending_entity_fields?: string[][]
    required_receiving_entity_fields?: string[][]
    required_documents?: string[][]
    credit_party_information?: ICreditPartyInfo
    credit_party_verification?: ICreditPartyVerification
}


export interface ICreateTransactionParams {
  external_id: string
  credit_party_identifier: {
    msisdn?: string
  }
  sender: IUser
  beneficiary: IUser
}

export interface ITransactionStatus {
  id: number
  status: string
  statusMessage: string
}