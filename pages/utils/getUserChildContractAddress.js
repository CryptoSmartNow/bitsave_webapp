
import makeBitsaveInstance from "./BitsaveInstance"

export default async function getUserChildContractAddress(
    signer
) {
    const BitsaveInstance = makeBitsaveInstance(signer)

    try {
        const userChildAddress = await BitsaveInstance
            .getUserChildContractAddress()

        console.log(userChildAddress)
        return userChildAddress
    } catch (error) {
        console.log(error)
    }
}