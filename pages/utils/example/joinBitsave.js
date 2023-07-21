
import { ethers } from "ethers";
import makeBitsaveInstance from "../BitsaveInstance";
import {getJoinParams} from "../params";
import BS_CONSTANTS from "../constants/BitsaveConstants";
import approveAmount from "../approveAmount";

export async function joinBitsave(
    signer, // this is the signer you get from the user's wallet
) {

    const BitsaveInstance = makeBitsaveInstance(signer)

    try{
        const childAddress = await BitsaveInstance
            .getUserChildContractAddress()

            console.log("Hello world", childAddress)
        console.log(childAddress)
        if (childAddress && childAddress != ethers.ZeroAddress) {
            console.log("Child Address: ", childAddress)
            return alert("Welcome back")
        }else {

            const parsedJoiningFee = await approveAmount(
                signer,
                BS_CONSTANTS.JOINING_FEE
            )

            const joiningResult = await BitsaveInstance
            .onCrossChainCall( // this is the function that will be called for all interactions
                BS_CONSTANTS.PAYMENT_TOKEN_ADDRESS,
                parsedJoiningFee,
                getJoinParams()
            )
    
            console.log(joiningResult)
            return {
                joiningResult,
    
            }
        }
    } catch(err) {
        console.log(err)
    }

}
