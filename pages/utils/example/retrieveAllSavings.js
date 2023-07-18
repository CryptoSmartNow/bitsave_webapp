
import getUserChildContractAddress from "../getUserChildContractAddress"
import {makeChildContractInstance} from "./BitsaveInstance"

export default async function retrieveAllSavings(
    signer,
) {

    try {
        const userChildAddress = await getUserChildContractAddress(signer);

        const UserChildContract = makeChildContractInstance(
            signer,
            userChildAddress
        )

        // this process can be 
        let savingsNames = []
        let savingsData = []

        savingsNames = (await UserChildContract
            .getSavingsNames())[0]
        
        for (const savingName in savingsNames) {
            const savingDatum = await UserChildContract.getSavings(savingName);
            savingsData.push(savingDatum)
            if (savingsData.length == 10) {
                return savingsData
            }
        }
        
        return savingsData
    } catch (error) {
        console.log(error)
    }
}