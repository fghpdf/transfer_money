export interface ICreditPartyInfo {
    credit_party_identifiers_accepted?: string[][]
    required_receiving_entity_fields?: string[][]
}

export interface ICreditPartyVerification {
    credit_party_identifiers_accepted?: string[]
    required_receiving_entity_fields?: string[]
}