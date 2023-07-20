
import { ethers } from "ethers";
import {makePaymentTokenInstance} from "./BitsaveInstance"
import BS_CONSTANTS from "./constants/BitsaveConstants";

export default async function approveAmount(
    signer,
    amount
) {
    try {
        const PaymentToken = makePaymentTokenInstance(signer);

        const parsedAmount = ethers.utils.parseUnits(
            amount?.toString()
        )

        await PaymentToken.approve(
            BS_CONSTANTS.BITSAVE_ADDRESS,
            parsedAmount
        )

        return parsedAmount
    }catch(error) {
        console.log(error)
    }
}
