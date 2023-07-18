import makeBitsaveInstance from "../BitsaveInstance";
import approveAmount from "../approveAmount";
import {getIncrementParams} from "../params";

export async function increaseSaving(
    signer, // this is the signer you get from the user's wallet
    savingsTokenAddress, // this is the token the user wants to save it gotten from zetaChain
    nameOfSaving,
    amountToIncrement,
) {

    const BitsaveInstance = makeBitsaveInstance(signer)

    try {
        const parsedAmount = await approveAmount(
            signer,
            amountToIncrement
        )
        const savingsIncResult = await BitsaveInstance
        .onCrossChainCall( // this is the function that will be called for all interactions
            savingsTokenAddress,
            parsedAmount,
            getIncrementParams(nameOfSaving)
        )

        console.log(savingsIncResult)
        return savingsIncResult
    } catch (error) {
        console.log(error)
    }
}
