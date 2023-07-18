
import { ethers } from "ethers";
import makeBitsaveInstance from "../BitsaveInstance";
import {getJoinParams} from "../params";
import BS_CONSTANTS from "../constants/BitsaveConstants";
import approveAmount from "../approveAmount";

export async function joinBitsave(
    signer, // this is the signer you get from the user's wallet
) {

    const BitsaveInstance = makeBitsaveInstance(signer)
    const parsedJoiningFee = await approveAmount(
        signer,
        BS_CONSTANTS.JOINING_FEE
    )

    try {
        const joiningResult = await BitsaveInstance
        .onCrossChainCall( // this is the function that will be called for all interactions
            BS_CONSTANTS.BITSAVE_ADDRESS,
            parsedJoiningFee,
            getJoinParams()
        )

        console.log(joiningResult)
        return {
            joiningResult,

        }
    } catch (error) {
        console.log(error)
    }
}
