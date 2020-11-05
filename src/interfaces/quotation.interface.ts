export interface IQuotation {
  creation_date: string
  destination: {
    amount: number
    currency: string
  }
  expiration_date: string
  external_id: string
  fee: {
    amount: number
    currency: string
  }
  id: number
  mode: string
  payer: {
    country_iso_code: string
    currency: string
    id: number
    name: string
    service: {
      id: number
      name: string
    }
  }
  sent_amount: {
    amount: number
    currency: string
  }
  source: {
    amount: number
    country_iso_code: string
    currency: string
  }
  transaction_type: string
  wholesale_fx_rate: number
}

export interface ICreateQuotationParams {
  external_id: string
  payer_id: number
  mode: string
  transaction_type: string
  source: {
    amount?: number
    country_iso_code: string
    currency: string
  }
  destination: {
    amount?: number
    currency: string
  }
}