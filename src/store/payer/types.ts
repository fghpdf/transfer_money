import { IPayer } from "../../interfaces/payer.interface";

export const CHOOSE_PAYER = "CHOOSE_PAYER"

interface ChoosePayerAction {
    type: typeof CHOOSE_PAYER
    payer: IPayer
}

export type PayerAction = ChoosePayerAction