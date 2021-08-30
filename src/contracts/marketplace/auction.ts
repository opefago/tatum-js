export const abi = [
    {
        'inputs': [
            {
                'internalType': 'uint256',
                'name': 'fee',
                'type': 'uint256'
            },
            {
                'internalType': 'address',
                'name': 'feeRecipient',
                'type': 'address'
            }
        ],
        'stateMutability': 'nonpayable',
        'type': 'constructor'
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'internalType': 'string',
                'name': 'id',
                'type': 'string'
            },
            {
                'indexed': true,
                'internalType': 'address',
                'name': 'buyer',
                'type': 'address'
            },
            {
                'indexed': true,
                'internalType': 'uint256',
                'name': 'amount',
                'type': 'uint256'
            }
        ],
        'name': 'AuctionBid',
        'type': 'event'
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'internalType': 'string',
                'name': 'id',
                'type': 'string'
            }
        ],
        'name': 'AuctionCancelled',
        'type': 'event'
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'internalType': 'string',
                'name': 'id',
                'type': 'string'
            },
            {
                'indexed': true,
                'internalType': 'bool',
                'name': 'isErc721',
                'type': 'bool'
            },
            {
                'indexed': true,
                'internalType': 'address',
                'name': 'nftAddress',
                'type': 'address'
            },
            {
                'indexed': false,
                'internalType': 'uint256',
                'name': 'tokenId',
                'type': 'uint256'
            },
            {
                'indexed': false,
                'internalType': 'uint256',
                'name': 'amount',
                'type': 'uint256'
            },
            {
                'indexed': false,
                'internalType': 'uint256',
                'name': 'price',
                'type': 'uint256'
            },
            {
                'indexed': false,
                'internalType': 'address',
                'name': 'erc20Address',
                'type': 'address'
            },
            {
                'indexed': false,
                'internalType': 'uint256',
                'name': 'endedAt',
                'type': 'uint256'
            }
        ],
        'name': 'AuctionCreated',
        'type': 'event'
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'internalType': 'string',
                'name': 'id',
                'type': 'string'
            }
        ],
        'name': 'AuctionSettled',
        'type': 'event'
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'internalType': 'address',
                'name': 'previousOwner',
                'type': 'address'
            },
            {
                'indexed': true,
                'internalType': 'address',
                'name': 'newOwner',
                'type': 'address'
            }
        ],
        'name': 'OwnershipTransferred',
        'type': 'event'
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': false,
                'internalType': 'address',
                'name': 'account',
                'type': 'address'
            }
        ],
        'name': 'Paused',
        'type': 'event'
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': false,
                'internalType': 'address',
                'name': 'account',
                'type': 'address'
            }
        ],
        'name': 'Unpaused',
        'type': 'event'
    },
    {
        'inputs': [
            {
                'internalType': 'string',
                'name': 'id',
                'type': 'string'
            },
            {
                'internalType': 'uint256',
                'name': 'bidValue',
                'type': 'uint256'
            }
        ],
        'name': 'bid',
        'outputs': [],
        'stateMutability': 'payable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'bytes32',
                'name': 'c__0x6ade2976',
                'type': 'bytes32'
            }
        ],
        'name': 'c_0x6ade2976',
        'outputs': [],
        'stateMutability': 'pure',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'bytes32',
                'name': 'c__0xcbc7dc39',
                'type': 'bytes32'
            }
        ],
        'name': 'c_0xcbc7dc39',
        'outputs': [],
        'stateMutability': 'pure',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'bytes32',
                'name': 'c__0xf50e2358',
                'type': 'bytes32'
            }
        ],
        'name': 'c_0xf50e2358',
        'outputs': [],
        'stateMutability': 'pure',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'bytes32',
                'name': 'c__0xf54fbdc4',
                'type': 'bytes32'
            }
        ],
        'name': 'c_0xf54fbdc4',
        'outputs': [],
        'stateMutability': 'pure',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'string',
                'name': 'id',
                'type': 'string'
            }
        ],
        'name': 'cancelAuction',
        'outputs': [],
        'stateMutability': 'payable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'string',
                'name': 'id',
                'type': 'string'
            },
            {
                'internalType': 'bool',
                'name': 'isErc721',
                'type': 'bool'
            },
            {
                'internalType': 'address',
                'name': 'nftAddress',
                'type': 'address'
            },
            {
                'internalType': 'uint256',
                'name': 'tokenId',
                'type': 'uint256'
            },
            {
                'internalType': 'uint256',
                'name': 'price',
                'type': 'uint256'
            },
            {
                'internalType': 'address',
                'name': 'seller',
                'type': 'address'
            },
            {
                'internalType': 'uint256',
                'name': 'amount',
                'type': 'uint256'
            },
            {
                'internalType': 'uint256',
                'name': 'endedAt',
                'type': 'uint256'
            },
            {
                'internalType': 'address',
                'name': 'erc20Address',
                'type': 'address'
            }
        ],
        'name': 'createAuction',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'string',
                'name': 'id',
                'type': 'string'
            }
        ],
        'name': 'getAuction',
        'outputs': [
            {
                'components': [
                    {
                        'internalType': 'address',
                        'name': 'seller',
                        'type': 'address'
                    },
                    {
                        'internalType': 'address',
                        'name': 'nftAddress',
                        'type': 'address'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'tokenId',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'bool',
                        'name': 'isErc721',
                        'type': 'bool'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'startingPrice',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'endedAt',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'startedAt',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'address',
                        'name': 'erc20Address',
                        'type': 'address'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'amount',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'endingPrice',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'address',
                        'name': 'bidder',
                        'type': 'address'
                    }
                ],
                'internalType': 'struct NftAuction.Auction',
                'name': '',
                'type': 'tuple'
            }
        ],
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'inputs': [],
        'name': 'getAuctionFee',
        'outputs': [
            {
                'internalType': 'uint256',
                'name': '',
                'type': 'uint256'
            }
        ],
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'inputs': [],
        'name': 'getAuctionFeeRecipient',
        'outputs': [
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            }
        ],
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            },
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            },
            {
                'internalType': 'uint256[]',
                'name': '',
                'type': 'uint256[]'
            },
            {
                'internalType': 'uint256[]',
                'name': '',
                'type': 'uint256[]'
            },
            {
                'internalType': 'bytes',
                'name': '',
                'type': 'bytes'
            }
        ],
        'name': 'onERC1155BatchReceived',
        'outputs': [
            {
                'internalType': 'bytes4',
                'name': '',
                'type': 'bytes4'
            }
        ],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            },
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            },
            {
                'internalType': 'uint256',
                'name': '',
                'type': 'uint256'
            },
            {
                'internalType': 'uint256',
                'name': '',
                'type': 'uint256'
            },
            {
                'internalType': 'bytes',
                'name': '',
                'type': 'bytes'
            }
        ],
        'name': 'onERC1155Received',
        'outputs': [
            {
                'internalType': 'bytes4',
                'name': '',
                'type': 'bytes4'
            }
        ],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            },
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            },
            {
                'internalType': 'uint256',
                'name': '',
                'type': 'uint256'
            },
            {
                'internalType': 'bytes',
                'name': '',
                'type': 'bytes'
            }
        ],
        'name': 'onERC721Received',
        'outputs': [
            {
                'internalType': 'bytes4',
                'name': '',
                'type': 'bytes4'
            }
        ],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [],
        'name': 'owner',
        'outputs': [
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            }
        ],
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'inputs': [],
        'name': 'paused',
        'outputs': [
            {
                'internalType': 'bool',
                'name': '',
                'type': 'bool'
            }
        ],
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'inputs': [],
        'name': 'renounceOwnership',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'uint256',
                'name': 'fee',
                'type': 'uint256'
            }
        ],
        'name': 'setAuctionFee',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': 'recipient',
                'type': 'address'
            }
        ],
        'name': 'setAuctionFeeRecipient',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'string',
                'name': 'id',
                'type': 'string'
            }
        ],
        'name': 'settleAuction',
        'outputs': [],
        'stateMutability': 'payable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': 'newOwner',
                'type': 'address'
            }
        ],
        'name': 'transferOwnership',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'stateMutability': 'payable',
        'type': 'receive'
    }
];

export const data = '0x60806040523480156200001157600080fd5b506040516200255c3803806200255c8339810160408190526200003491620000c6565b600062000040620000c2565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3506000805460ff60a01b19169055600291909155600380546001600160a01b0319166001600160a01b0390921691909117905562000103565b3390565b60008060408385031215620000d9578182fd5b825160208401519092506001600160a01b0381168114620000f8578182fd5b809150509250929050565b61244980620001136000396000f3fe6080604052600436106100f75760003560e01c8063a13d4e6b1161008a578063edd8184911610059578063edd8184914610264578063f23a6e6114610291578063f2fde38b146102b1578063f59e754c146102d1576100fe565b8063a13d4e6b14610209578063b60e7a3b1461021c578063bc197c811461022f578063d602173c1461024f576100fe565b80635c975abb116100c65780635c975abb1461019d5780635f483313146101bf578063715018a6146101d25780638da5cb5b146101e7576100fe565b80631031ca4414610103578063150b7a021461012e5780633eac3f851461015b57806354c2fba01461017d576100fe565b366100fe57005b600080fd5b34801561010f57600080fd5b506101186102f1565b604051610125919061230b565b60405180910390f35b34801561013a57600080fd5b5061014e6101493660046119a2565b6102f7565b6040516101259190611ce9565b34801561016757600080fd5b5061017b6101763660046118b9565b610307565b005b34801561018957600080fd5b5061017b610198366004611aca565b610371565b3480156101a957600080fd5b506101b26105c5565b6040516101259190611cde565b61017b6101cd366004611b79565b6105d5565b3480156101de57600080fd5b5061017b610b11565b3480156101f357600080fd5b506101fc610b9a565b6040516101259190611c3b565b61017b610217366004611a8f565b610ba9565b61017b61022a366004611a8f565b610d96565b34801561023b57600080fd5b5061014e61024a3660046118f8565b610fe6565b34801561025b57600080fd5b506101fc610ff7565b34801561027057600080fd5b5061028461027f366004611a8f565b611006565b6040516101259190612265565b34801561029d57600080fd5b5061014e6102ac366004611a0c565b6110c3565b3480156102bd57600080fd5b5061017b6102cc3660046118b9565b6110d4565b3480156102dd57600080fd5b5061017b6102ec366004611bbc565b611194565b60025490565b630a85bd0160e11b949350505050565b61030f6111d8565b6001600160a01b0316610320610b9a565b6001600160a01b03161461034f5760405162461bcd60e51b81526004016103469061206b565b60405180910390fd5b600380546001600160a01b0319166001600160a01b0392909216919091179055565b6103796105c5565b156103965760405162461bcd60e51b815260040161034690611ef3565b6001896040516103a69190611bff565b9081526020016040518091039020600401546000146103d75760405162461bcd60e51b815260040161034690612217565b6103e243600561236a565b82116104005760405162461bcd60e51b815260040161034690612018565b61040d88888689876111dc565b6000604051806101600160405280866001600160a01b03168152602001896001600160a01b031681526020018881526020018a15158152602001878152602001848152602001438152602001836001600160a01b031681526020018581526020016000815260200160006001600160a01b031681525090508060018b6040516104969190611bff565b9081526040805160209281900383018120845181546001600160a01b03199081166001600160a01b03928316178355948601516001830180548716918316919091179055928501516002820155606085015160038201805460ff19169115159190911790556080850151600482015560a0850151600582015560c0850151600682015560e085015160078201805486169185169190911790556101008501516008820155610120850151600982015561014090940151600a9094018054909316938216939093179091558916908a151590610572908d90611bff565b60405180910390207f5fcb1000fe3e1d9762d21bcf86113a42865b0b537e4e242b1b5fe42c724d59d68a888b888a6040516105b1959493929190612314565b60405180910390a450505050505050505050565b600054600160a01b900460ff1690565b6105dd6105c5565b156105fa5760405162461bcd60e51b815260040161034690611ef3565b600060018360405161060c9190611bff565b9081526040805191829003602090810183206101608401835280546001600160a01b039081168552600182015481169285019290925260028082015493850193909352600381015460ff161515606085015260048101546080850152600581015460a0850152600681015460c08501526007810154821660e085015260088101546101008501526009810154610120850152600a015416610140830152549091506000906106bc9061271061236a565b6106c69084612382565b6106d2906127106123a2565b9050438260a00151116106f75760405162461bcd60e51b8152600401610346906120a0565b808261012001511061071b5760405162461bcd60e51b815260040161034690611e49565b60e08201516001600160a01b031661074c5734831461074c5760405162461bcd60e51b815260040161034690611d5b565b60e08201516001600160a01b0316156108015760e0820151604051636eb1769f60e11b815284916001600160a01b03169063dd62ed3e906107939033903090600401611c4f565b60206040518083038186803b1580156107ab57600080fd5b505afa1580156107bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107e39190611bd4565b10156108015760405162461bcd60e51b8152600401610346906121ad565b600060405180610160016040528084600001516001600160a01b0316815260200184602001516001600160a01b0316815260200184604001518152602001846060015115158152602001846080015181526020018460a0015181526020014381526020018460e001516001600160a01b03168152602001846101000151815260200184610120015181526020018461014001516001600160a01b031681525090506001856040516108b29190611bff565b90815260405190819003602001902080546001600160a01b031990811682556001820180548216905560006002830181905560038301805460ff1916905560048301819055600583018190556006830181905560078301805483169055600883018190556009830155600a9091018054909116905560e08101516001600160a01b0316156109df5760e08101516040516323b872dd60e01b81526001600160a01b038216906323b872dd9061096f90339030908a90600401611c69565b602060405180830381600087803b15801561098957600080fd5b505af115801561099d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109c19190611a73565b6109dd5760405162461bcd60e51b815260040161034690612150565b505b6101208101829052336101408201526040518190600190610a01908890611bff565b9081526040805160209281900383018120845181546001600160a01b03199081166001600160a01b03928316178355948601516001830180548716918316919091179055928501516002820155606085015160038201805460ff19169115159190911790556080850151600482015560a0850151600582015560c0850151600682015560e085015160078201805486169185169190911790556101008501516008820155610120850151600982015561014090940151600a90940180549093169390911692909217905582903390610ada908890611bff565b604051908190038120907f1e0ab2a3d99525c0ac6ad4af8309c0c64e02621f17b6333695c6ee19235fedac90600090a45050505050565b610b196111d8565b6001600160a01b0316610b2a610b9a565b6001600160a01b031614610b505760405162461bcd60e51b81526004016103469061206b565b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031690565b6000600182604051610bbb9190611bff565b9081526040805191829003602090810183206101608401835280546001600160a01b0390811685526001820154811692850192909252600281015492840192909252600382015460ff161515606084015260048201546080840152600582015460a08401819052600683015460c08501526007830154821660e085015260088301546101008501526009830154610120850152600a90920154166101408301529091504311610c7c5760405162461bcd60e51b8152600401610346906120fd565b6060810151602082015161010083015160408085015160e0860151610120870151610140880151935192939192909190600190610cba908b90611bff565b90815260405190819003602001902080546001600160a01b031990811682556001820180548216905560006002830181905560038301805460ff1916905560048301819055600583018190556006830181905560078301805483169055600883018190556009830155600a90910180549091169055610d3c8787838789611409565b610d4d83838a600001516001611470565b88604051610d5b9190611bff565b604051908190038120907fafdc429d8d197c8769e7a13a5bcd959b9f8dade051086aac5fbcba8e8d7f3a5e90600090a2505050505050505050565b6000600182604051610da89190611bff565b90815260408051602092819003830181206101608201835280546001600160a01b039081168084526001830154821695840195909552600282015493830193909352600381015460ff161515606083015260048101546080830152600581015460a0830152600681015460c08301526007810154831660e083015260088101546101008301526009810154610120830152600a01549091166101408201529150610e645760405162461bcd60e51b815260040161034690611fd3565b80516001600160a01b0316331480610e945750610e7f610b9a565b6001600160a01b0316336001600160a01b0316145b610eb05760405162461bcd60e51b815260040161034690611f1d565b6060810151602082015161010083015160408085015160e0860151610120870151610140880151935192939192909190600190610eee908b90611bff565b90815260405190819003602001902080546001600160a01b031990811682556001820180548216905560006002830181905560038301805460ff1916905560048301819055600583018190556006830181905560078301805483169055600883018190556009830155600a909101805490911690558751610f7490889088908789611409565b6001600160a01b03811615801590610f8b57508115155b15610f9d57610f9d8383836000611470565b88604051610fab9190611bff565b604051908190038120907f8491f144dda005dc8140735549d904900585c1cbe24e47da9dcbf67a8b7233d590600090a2505050505050505050565b63bc197c8160e01b95945050505050565b6003546001600160a01b031690565b61100e61174c565b60018260405161101e9190611bff565b9081526040805191829003602090810183206101608401835280546001600160a01b0390811685526001820154811692850192909252600281015492840192909252600382015460ff161515606084015260048201546080840152600582015460a0840152600682015460c08401526007820154811660e084015260088201546101008401526009820154610120840152600a90910154166101408201529050919050565b63f23a6e6160e01b95945050505050565b6110dc6111d8565b6001600160a01b03166110ed610b9a565b6001600160a01b0316146111135760405162461bcd60e51b81526004016103469061206b565b6001600160a01b0381166111395760405162461bcd60e51b815260040161034690611da6565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b61119c6111d8565b6001600160a01b03166111ad610b9a565b6001600160a01b0316146111d35760405162461bcd60e51b81526004016103469061206b565b600255565b3390565b846112f357600081116111ee57600080fd5b604051627eeac760e11b815281906001600160a01b0386169062fdd58e9061121c9087908790600401611cc5565b60206040518083038186803b15801561123457600080fd5b505afa158015611248573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061126c9190611bd4565b101561128a5760405162461bcd60e51b815260040161034690611cfe565b604051637921219560e11b81526001600160a01b0385169063f242432a906112bc908690309087908790600401611c8d565b600060405180830381600087803b1580156112d657600080fd5b505af11580156112ea573d6000803e3d6000fd5b50505050611402565b826001600160a01b0316846001600160a01b0316636352211e846040518263ffffffff1660e01b8152600401611329919061230b565b60206040518083038186803b15801561134157600080fd5b505afa158015611355573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061137991906118dc565b6001600160a01b03161461139f5760405162461bcd60e51b815260040161034690611f88565b604051632142170760e11b81526001600160a01b038516906342842e0e906113cf90869030908790600401611c69565b600060405180830381600087803b1580156113e957600080fd5b505af11580156113fd573d6000803e3d6000fd5b505050505b5050505050565b8461144057604051637921219560e11b81526001600160a01b0385169063f242432a906112bc903090879087908790600401611c8d565b604051632142170760e11b81526001600160a01b038516906342842e0e906113cf90309087908790600401611c69565b6001600160a01b0384161561164f5760405163a9059cbb60e01b81526001600160a01b0385169063a9059cbb906114ad9085908790600401611cc5565b602060405180830381600087803b1580156114c757600080fd5b505af11580156114db573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114ff9190611a73565b5080156115ae576003546002546001600160a01b038087169263a9059cbb929116906127109061152f90886123a2565b6115399190612382565b6040518363ffffffff1660e01b8152600401611556929190611cc5565b602060405180830381600087803b15801561157057600080fd5b505af1158015611584573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115a89190611a73565b5061164a565b836001600160a01b031663a9059cbb83612710600254876115cf91906123a2565b6115d99190612382565b6040518363ffffffff1660e01b81526004016115f6929190611cc5565b602060405180830381600087803b15801561161057600080fd5b505af1158015611624573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116489190611a73565b505b6116a5565b61165982846116ab565b80156116905760035460025461164a916001600160a01b0316906127109061168190876123a2565b61168b9190612382565b6116ab565b6116a5826127106002548661168191906123a2565b50505050565b804710156116cb5760405162461bcd60e51b815260040161034690611ebc565b6000826001600160a01b0316826040516116e490611c38565b60006040518083038185875af1925050503d8060008114611721576040519150601f19603f3d011682016040523d82523d6000602084013e611726565b606091505b50509050806117475760405162461bcd60e51b815260040161034690611dec565b505050565b60405180610160016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160001515815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681525090565b600082601f8301126117dc578081fd5b8135602067ffffffffffffffff8211156117f8576117f86123d7565b808202611806828201612340565b838152828101908684018388018501891015611820578687fd5b8693505b85841015611842578035835260019390930192918401918401611824565b50979650505050505050565b600082601f83011261185e578081fd5b813567ffffffffffffffff811115611878576118786123d7565b61188b601f8201601f1916602001612340565b81815284602083860101111561189f578283fd5b816020850160208301379081016020019190915292915050565b6000602082840312156118ca578081fd5b81356118d5816123ed565b9392505050565b6000602082840312156118ed578081fd5b81516118d5816123ed565b600080600080600060a0868803121561190f578081fd5b853561191a816123ed565b9450602086013561192a816123ed565b9350604086013567ffffffffffffffff80821115611946578283fd5b61195289838a016117cc565b94506060880135915080821115611967578283fd5b61197389838a016117cc565b93506080880135915080821115611988578283fd5b506119958882890161184e565b9150509295509295909350565b600080600080608085870312156119b7578384fd5b84356119c2816123ed565b935060208501356119d2816123ed565b925060408501359150606085013567ffffffffffffffff8111156119f4578182fd5b611a008782880161184e565b91505092959194509250565b600080600080600060a08688031215611a23578081fd5b8535611a2e816123ed565b94506020860135611a3e816123ed565b93506040860135925060608601359150608086013567ffffffffffffffff811115611a67578182fd5b6119958882890161184e565b600060208284031215611a84578081fd5b81516118d581612405565b600060208284031215611aa0578081fd5b813567ffffffffffffffff811115611ab6578182fd5b611ac28482850161184e565b949350505050565b60008060008060008060008060006101208a8c031215611ae8578384fd5b893567ffffffffffffffff811115611afe578485fd5b611b0a8c828d0161184e565b99505060208a0135611b1b81612405565b975060408a0135611b2b816123ed565b965060608a0135955060808a0135945060a08a0135611b49816123ed565b935060c08a0135925060e08a013591506101008a0135611b68816123ed565b809150509295985092959850929598565b60008060408385031215611b8b578182fd5b823567ffffffffffffffff811115611ba1578283fd5b611bad8582860161184e565b95602094909401359450505050565b600060208284031215611bcd578081fd5b5035919050565b600060208284031215611be5578081fd5b5051919050565b6001600160a01b03169052565b15159052565b60008251815b81811015611c1f5760208186018101518583015201611c05565b81811115611c2d5782828501525b509190910192915050565b90565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b0394851681529290931660208301526040820152606081019190915260a06080820181905260009082015260c00190565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b6001600160e01b031991909116815260200190565b60208082526038908201527f4552433131353520746f6b656e2062616c616e6365206973206e6f742073756660408201527f66696369656e7420666f72207468652073656c6c65722e2e0000000000000000606082015260800190565b6020808252602b908201527f57726f6e6720616d6f756e7420656e746572656420666f72207468652062696460408201526a171020b137b93a34b7339760a91b606082015260800190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b6020808252603a908201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260408201527f6563697069656e74206d61792068617665207265766572746564000000000000606082015260800190565b6020808252604d908201527f4269642066726565206f66207468652061756374696f6e20666565206973206c60408201527f6f776572207468656e2061637475616c2068696768657374206269642070726960608201526c31b2971020b137b93a34b7339760991b608082015260a00190565b6020808252601d908201527f416464726573733a20696e73756666696369656e742062616c616e6365000000604082015260600190565b60208082526010908201526f14185d5cd8589b194e881c185d5cd95960821b604082015260600190565b60208082526045908201527f41756374696f6e2063616e27742062652063616e63656c6c65642066726f6d2060408201527f6f74686572207468656e2073656c6c6572206f72206f776e65722e2041626f726060820152643a34b7339760d91b608082015260a00190565b6020808252602b908201527f45524337323120746f6b656e20646f6573206e6f742062656c6f6e6720746f2060408201526a3a34329030baba3437b91760a91b606082015260800190565b60208082526025908201527f41756374696f6e20697320616c726561647920736574746c65642e2041626f726040820152643a34b7339760d91b606082015260800190565b60208082526033908201527f41756374696f6e206d757374206c617374206174206c65617374203520626c6f604082015272636b732066726f6d207468697320626c6f636b60681b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020808252603b908201527f41756374696f6e2068617320616c726561647920656e6465642e20556e61626c60408201527f6520746f2070726f63657373206269642e2041626f7274696e672e0000000000606082015260800190565b60208082526033908201527f41756374696f6e2063616e277420626520736574746c6564206265666f72652060408201527234ba103932b0b1b432b9903a34329032b7321760691b606082015260800190565b60208082526038908201527f556e61626c6520746f207472616e7366657220455243323020746f6b656e732060408201527f746f207468652041756374696f6e2e2041626f7274696e670000000000000000606082015260800190565b60208082526044908201527f496e73756666696369656e7420617070726f76616c20666f722045524332302060408201527f746f6b656e20666f72207468652061756374696f6e206269642e2041626f727460608201526334b7339760e11b608082015260a00190565b6020808252602e908201527f41756374696f6e20616c7265616479206578697374656420666f72206375727260408201526d195b9d08185d58dd1a5bdb88125960921b606082015260800190565b600061016082019050612279828451611bec565b602083015161228b6020840182611bec565b506040830151604083015260608301516122a86060840182611bf9565b506080830151608083015260a083015160a083015260c083015160c083015260e08301516122d960e0840182611bec565b50610100838101519083015261012080840151908301526101408084015161230382850182611bec565b505092915050565b90815260200190565b948552602085019390935260408401919091526001600160a01b03166060830152608082015260a00190565b60405181810167ffffffffffffffff81118282101715612362576123626123d7565b604052919050565b6000821982111561237d5761237d6123c1565b500190565b60008261239d57634e487b7160e01b81526012600452602481fd5b500490565b60008160001904831182151516156123bc576123bc6123c1565b500290565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461240257600080fd5b50565b801515811461240257600080fdfea2646970667358221220abb7c1802bde0ea0c04de259b3043ae4ff6bab6621250a698cc94fecad7b5e9464736f6c63430008000033';