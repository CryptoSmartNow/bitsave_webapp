import { ethers } from "ethers";
import BS_CONSTANTS from "../utils/constants/BitsaveConstants";
import BitsaveABI from "../artifacts/contracts/Bitsave.sol/Bitsave.json"

export default function makeBitsaveInstance(
    signer
) {
    return new ethers.Contract(
        BS_CONSTANTS.BITSAVE_ADDRESS,
        BitsaveABI,
        signer
    )
}
