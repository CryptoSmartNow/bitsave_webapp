const ABI = {
    "name": "bitsave",
    "methods": [
        {
            "name": "create",
            "args": [],
            "returns": {
                "type": "void"
            }
        },
        {
            "name": "update",
            "args": [],
            "returns": {
                "type": "void"
            }
        },
        {
            "name": "delete",
            "args": [],
            "returns": {
                "type": "void"
            }
        },
        {
            "name": "create_savings",
            "args": [
                {
                    "type": "pay",
                    "name": "pay_txn"
                },
                {
                    "type": "string",
                    "name": "name"
                },
                {
                    "type": "uint64",
                    "name": "end_time"
                },
                {
                    "type": "uint64",
                    "name": "penalty"
                },
                {
                    "type": "asset",
                    "name": "asset_id"
                },
                {
                    "type": "uint64",
                    "name": "interest"
                },
                {
                    "type": "uint8",
                    "name": "isOpted"
                },
                {
                    "type": "uint64",
                    "name": "charges"
                }
            ],
            "returns": {
                "type": "uint64"
            }
        }
    ],
    "networks": {},
    "desc": "This is the bitsave parent protocol v2.0"
}


export default ABI