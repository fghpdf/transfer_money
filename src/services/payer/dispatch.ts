import { IPayer } from "../../interfaces/payer.interface";
import { CHOOSE_PAYER, PayerAction } from "../../store/payer/types";

export function choosePayer(payer:IPayer): PayerAction {
    return {
        type: CHOOSE_PAYER,
        payer
    }
}