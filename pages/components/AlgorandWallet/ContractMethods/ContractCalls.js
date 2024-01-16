import ABI from "./ABI";
import algosdk from "algosdk";
import { Buffer } from 'buffer';
import { sha512_256 } from "js-sha512";
import { TESTNET_CONFIG } from "./NodeConstants";



export const BITSAVE_CONTRACT_ID =  469459505;
export const BITSAVE_CONTRACT_ADDRESS = "X7VCPGAKFAEBLWPUEXBI6K6S5BMSTQYGYOI4SGYO4MBBCFMPO3BO53KEUA";


export const indexer = new algosdk.Indexer(TESTNET_CONFIG.NODE_TOKEN, TESTNET_CONFIG.NODE_BASEURL, TESTNET_CONFIG.NODE_PORT);
export const algodClient = new algosdk.Algodv2(TESTNET_CONFIG.NODE_TOKEN, TESTNET_CONFIG.NODE_BASEURL, TESTNET_CONFIG.NODE_PORT);



async function makeATCComposer() {
    // example: ATC_CREATE
    const atc = new algosdk.AtomicTransactionComposer();
    return atc
}



export async function create_contract_method(sender,signer) {
    const suggestedParams = await algodClient.getTransactionParams().do();
    const atc = await makeATCComposer();
    // ATC_CONTRACT_INIT
    const contract = new algosdk.ABIContract(ABI);

    //USING ATC CALL THE CREATE CONTRACT METHOD
    atc.addMethodCall({
        appID: BITSAVE_CONTRACT_ID,
        method: contract.getMethodByName('create'),
        methodArgs: [],
        sender: sender,
        signer: signer,
        suggestedParams,
    });

    // example: ATC_RESULTS
    const result = await atc.execute(algodClient, 4);
    return(result?.methodResults)
    
}


export async function update_contract_method(sender,signer) {
    const suggestedParams = await algodClient.getTransactionParams().do();
    const atc = await makeATCComposer();
    // ATC_CONTRACT_INIT
    const contract = new algosdk.ABIContract(ABI);

    //USING ATC CALL THE UPDATE CONTRACT METHOD
    atc.addMethodCall({
        appID: BITSAVE_CONTRACT_ID,
        method: contract.getMethodByName('create'),
        methodArgs: [],
        sender: sender,
        signer: signer,
        suggestedParams,
    });

    // example: ATC_RESULTS
    const result = await atc.execute(algodClient, 4);
    return(result?.methodResults)
    
}


export async function delete_contract_method(sender,signer) {
    const suggestedParams = await algodClient.getTransactionParams().do();
    const atc = await makeATCComposer();
    // ATC_CONTRACT_INIT
    const contract = new algosdk.ABIContract(ABI);

    //USING ATC CALL THE DELETE CONTRACT METHOD
    atc.addMethodCall({
        appID: BITSAVE_CONTRACT_ID,
        method: contract.getMethodByName('create'),
        methodArgs: [],
        sender: sender,
        signer: signer,
        suggestedParams,
    });

    // example: ATC_RESULTS
    const result = await atc.execute(algodClient, 4);
    return(result?.methodResults)
    
}


// pay_txn,name,end_time,penalty,asset_id,interest,isOpted,charges
export async function create_savings_contract_method(sender,signer,name,deposit_amount,end_time,penalty,asset_id,interest,isOpted,charges) {
    const suggestedParams = await algodClient.getTransactionParams().do();
    const atc = await makeATCComposer();
    // ATC_CONTRACT_INIT
    const contract = new algosdk.ABIContract(ABI);

    const pay_txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
        from: sender,
        suggestedParams,
        to: BITSAVE_CONTRACT_ADDRESS,
        amount: deposit_amount,
      });
    
      // add the transaction to the ATC with a signer
      atc.addTransaction({ txn: pay_txn, signer: signer });

    //USING ATC CALL THE CREATE SAVINGS CONTRACT METHOD
    atc.addMethodCall({
        appID: BITSAVE_CONTRACT_ID,
        method: contract.getMethodByName('create'),
        methodArgs: [
            pay_txn,
            name,
            end_time,
            penalty,
            asset_id,
            interest,
            isOpted,
            charges
        ],
        sender: sender,
        signer: signer,
        suggestedParams,
    });

    // example: ATC_RESULTS
    const result = await atc.execute(algodClient, 4);
    return(result?.methodResults)
    
}