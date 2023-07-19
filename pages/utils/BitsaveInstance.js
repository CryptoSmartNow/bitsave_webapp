import { ethers } from "ethers";
import BS_CONSTANTS from "../utils/constants/BitsaveConstants";
import BitsaveABI from "../artifacts/contracts/Bitsave.sol/Bitsave.json"
import PaymentTokenABI from "../artifacts/@zetachain/protocol-contracts/contracts/zevm/interfaces/IZRC20.sol/IZRC20.json"
import ChildContractABI from "../artifacts/contracts/userContract.bitsave.sol/UserContract.json"

export default function makeBitsaveInstance(
    signer
) {
    return new ethers.Contract(
        BS_CONSTANTS.BITSAVE_ADDRESS,
        BitsaveABI,
        signer
    )
}

function makeChildContractInstance(
    signer,
    childAddress
) {
    return new ethers.Contract(
        childAddress,
        ChildContractABI,
        signer
    )
}

function makePaymentTokenInstance(
    signer
) {
    return new ethers.Contract(
        BS_CONSTANTS.PAYMENT_TOKEN_ADDRESS,
        PaymentTokenABI,
        signer
    )
}

export {
    makeChildContractInstance,
    makePaymentTokenInstance
}
