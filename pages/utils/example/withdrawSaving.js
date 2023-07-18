import makeBitsaveInstance from "../BitsaveInstance";
import {getWithdrawParams} from "../params";
import BS_CONSTANTS from "../constants/BitsaveConstants";

export async function withdrawSaving(
    signer, // this is the signer you get from the user's wallet
    nameOfSaving,
) {

    const BitsaveInstance = makeBitsaveInstance(signer)

    try {
        const withdrawResult = await BitsaveInstance
        .onCrossChainCall( // this is the function that will be called for all interactions
            BS_CONSTANTS.BITSAVE_ADDRESS,
            0,
            getWithdrawParams(
                nameOfSaving,
            )
        )

        console.log(withdrawResult)
        return withdrawResult
    } catch (error) {
        console.log(error)
    }
}
