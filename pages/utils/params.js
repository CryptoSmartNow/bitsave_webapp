
import ethers from "ethers"
import Opcodes from "../utils/constants/Opcodes";

const paramTypes = ["bytes", "string", "uint256", "uint256", "uint8", "bool"]

const encodeParams = (dataTypes, data) => {
    return ethers.AbiCoder.defaultAbiCoder.encode(dataTypes, data);
}

const makeOpcode = (opcode) => ethers.toUtf8Bytes(opcode)

function getJoinParams() {
    const paddedOpcode = makeOpcode(Opcodes.JOIN)

    return encodeParams(
        paramTypes,
        [paddedOpcode, "none", 0, 0, 0, false]
    )
}

const getSavingParams = (
    nameOfSaving,
    maturityTimestamp,
    startTime,
    penaltyPercentage,
    safeMode
) => {
    const paddedOpcode = makeOpcode(Opcodes.CREATE)

    return encodeParams(
        paramTypes,
        [
            paddedOpcode,
            nameOfSaving,
            maturityTimestamp,
            startTime, penaltyPercentage,
            safeMode
        ]
    )
}

const getIncrementParams = (
    nameOfSaving
) => {
    const paddedOpcode = makeOpcode(Opcodes.INCREMENT)

    return encodeParams(
        paramTypes,
        [paddedOpcode, nameOfSaving, 0, 0, 0, false]
    )
}

export {
    getJoinParams,
    getIncrementParams,
    getSavingParams
}

