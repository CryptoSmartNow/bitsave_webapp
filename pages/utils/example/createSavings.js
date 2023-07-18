import makeBitsaveInstance from "../BitsaveInstance";
import approveAmount from "../approveAmount";
import {getSavingParams} from "../params";

export async function createSavings(
    signer, // this is the signer you get from the user's wallet
    savingsTokenAddress, // this is the token the user wants to save it gotten from zetaChain
    nameOfSaving,
    amountToSave,
    endTime,
    startTime,
    penalty,
    isSafeMode
) {

    const BitsaveInstance = makeBitsaveInstance(signer)

    try {
        const parsedAmount = await approveAmount(
            signer,
            amountToSave
        )
        const savingsResult = await BitsaveInstance
        .onCrossChainCall( // this is the function that will be called for all interactions
            savingsTokenAddress,
            parsedAmount,
            getSavingParams(
                nameOfSaving,
                endTime,
                startTime,
                penalty,
                isSafeMode
            )
        )

        console.log(savingsResult)
        return savingsResult
    } catch (error) {
        console.log(error)
    }
}
