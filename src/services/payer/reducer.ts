import { CHOOSE_PAYER, PayerAction } from "../../store/payer/types";

export default function payerReducer(previousState = undefined, aciton: PayerAction) {
    switch (aciton.type) {
        case CHOOSE_PAYER: {
            return aciton.payer;
        }
    }

    return null
}