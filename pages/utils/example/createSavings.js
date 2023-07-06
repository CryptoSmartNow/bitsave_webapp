import makeBitsaveInstance from "../BitsaveInstance";
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
        const savingsResult = await BitsaveInstance
        .onCrossChainCall( // this is the function that will be called for all interactions
            savingsTokenAddress,
            amountToSave,
            getSavingParams(
                nameOfSaving,
                endTime,
                startTime,
                penalty,
                isSafeMode
            )
        )

        console.log(savingsResult)
        return savingsResul
    } catch (error) {
        console.log(error)
    }
}
