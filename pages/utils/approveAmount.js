
import { ethers } from "ethers";
import {makePaymentTokenInstance} from "./BitsaveInstance"
import BS_CONSTANTS from "./constants/BitsaveConstants";

export default async function approveAmount(
    signer,
    amount
) {
    try {
        if(!signer || !amount) return alert("Invalid details");
        // todo: should throw instead
        const PaymentToken = makePaymentTokenInstance(signer);

        const parsedAmount = ethers.utils.parseEther(
            amount.toString()
        )
        console.log("Amount--", parsedAmount)

        await PaymentToken.approve(
            BS_CONSTANTS.BITSAVE_ADDRESS,
            parsedAmount
        )

        console.log("No error for approval")

        return parsedAmount
    }catch(error) {
        console.log(error)
    }
}
