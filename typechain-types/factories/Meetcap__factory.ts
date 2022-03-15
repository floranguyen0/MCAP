/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Meetcap, MeetcapInterface } from "../Meetcap";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604080518082018252600781527f4d6565746361700000000000000000000000000000000000000000000000000060208083019182528351808501909452600284527f4d430000000000000000000000000000000000000000000000000000000000009084015281519192916200008c91600391620001eb565b508051620000a2906004906020840190620001eb565b505050620000de33620000ba620000e460201b60201c565b620000c790600a620003bf565b620000d8906402540be400620003d7565b620000e9565b6200046a565b601290565b6001600160a01b0382166200015e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f42455032303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b8060026000828254620001729190620003f9565b90915550506001600160a01b03821660009081526020819052604081208054839290620001a1908490620003f9565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001f99062000414565b90600052602060002090601f0160209004810192826200021d576000855562000268565b82601f106200023857805160ff191683800117855562000268565b8280016001018555821562000268579182015b82811115620002685782518255916020019190600101906200024b565b50620002769291506200027a565b5090565b5b808211156200027657600081556001016200027b565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600181815b8085111562000301578160001904821115620002e557620002e562000291565b80851615620002f357918102915b93841c9390800290620002c5565b509250929050565b6000826200031a57506001620003b9565b816200032957506000620003b9565b81600181146200034257600281146200034d576200036d565b6001915050620003b9565b60ff84111562000361576200036162000291565b50506001821b620003b9565b5060208310610133831016604e8410600b841016171562000392575081810a620003b9565b6200039e8383620002c0565b8060001904821115620003b557620003b562000291565b0290505b92915050565b6000620003d060ff84168362000309565b9392505050565b6000816000190483118215151615620003f457620003f462000291565b500290565b600082198211156200040f576200040f62000291565b500190565b600181811c908216806200042957607f821691505b6020821081141562000464577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b610ac1806200047a6000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806342966c681161008c57806395d89b411161006657806395d89b41146101ad578063a457c2d7146101b5578063a9059cbb146101c8578063dd62ed3e146101db57600080fd5b806342966c681461015c57806370a082311461017157806379cc67901461019a57600080fd5b806306fdde03146100d4578063095ea7b3146100f257806318160ddd1461011557806323b872dd14610127578063313ce5671461013a5780633950935114610149575b600080fd5b6100dc610214565b6040516100e991906108c6565b60405180910390f35b610105610100366004610937565b6102a6565b60405190151581526020016100e9565b6002545b6040519081526020016100e9565b610105610135366004610961565b6102be565b604051601281526020016100e9565b610105610157366004610937565b6102e2565b61016f61016a36600461099d565b610321565b005b61011961017f3660046109b6565b6001600160a01b031660009081526020819052604090205490565b61016f6101a8366004610937565b61032e565b6100dc610347565b6101056101c3366004610937565b610356565b6101056101d6366004610937565b6103ed565b6101196101e93660046109d8565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461022390610a0b565b80601f016020809104026020016040519081016040528092919081815260200182805461024f90610a0b565b801561029c5780601f106102715761010080835404028352916020019161029c565b820191906000526020600020905b81548152906001019060200180831161027f57829003601f168201915b5050505050905090565b6000336102b48185856103fb565b5060019392505050565b6000336102cc858285610520565b6102d78585856105b2565b506001949350505050565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906102b4908290869061031c908790610a5c565b6103fb565b61032b3382610780565b50565b610339823383610520565b6103438282610780565b5050565b60606004805461022390610a0b565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156103e05760405162461bcd60e51b815260206004820152602560248201527f42455032303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b6102d782868684036103fb565b6000336102b48185856105b2565b6001600160a01b03831661045d5760405162461bcd60e51b8152602060048201526024808201527f42455032303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103d7565b6001600160a01b0382166104be5760405162461bcd60e51b815260206004820152602260248201527f42455032303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103d7565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146105ac578181101561059f5760405162461bcd60e51b815260206004820152601d60248201527f42455032303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103d7565b6105ac84848484036103fb565b50505050565b6001600160a01b0383166106165760405162461bcd60e51b815260206004820152602560248201527f42455032303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103d7565b6001600160a01b0382166106785760405162461bcd60e51b815260206004820152602360248201527f42455032303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103d7565b6001600160a01b038316600090815260208190526040902054818110156106f05760405162461bcd60e51b815260206004820152602660248201527f42455032303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103d7565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610727908490610a5c565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161077391815260200190565b60405180910390a36105ac565b6001600160a01b0382166107e05760405162461bcd60e51b815260206004820152602160248201527f42455032303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103d7565b6001600160a01b038216600090815260208190526040902054818110156108545760405162461bcd60e51b815260206004820152602260248201527f42455032303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103d7565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610883908490610a74565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610513565b600060208083528351808285015260005b818110156108f3578581018301518582016040015282016108d7565b81811115610905576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b038116811461093257600080fd5b919050565b6000806040838503121561094a57600080fd5b6109538361091b565b946020939093013593505050565b60008060006060848603121561097657600080fd5b61097f8461091b565b925061098d6020850161091b565b9150604084013590509250925092565b6000602082840312156109af57600080fd5b5035919050565b6000602082840312156109c857600080fd5b6109d18261091b565b9392505050565b600080604083850312156109eb57600080fd5b6109f48361091b565b9150610a026020840161091b565b90509250929050565b600181811c90821680610a1f57607f821691505b60208210811415610a4057634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610a6f57610a6f610a46565b500190565b600082821015610a8657610a86610a46565b50039056fea264697066735822122096d17514b07fe12f6a195309cbd7e32dc03c50fef779016fa9cdff5b0257d41264736f6c63430008090033";

type MeetcapConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MeetcapConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Meetcap__factory extends ContractFactory {
  constructor(...args: MeetcapConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Meetcap";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Meetcap> {
    return super.deploy(overrides || {}) as Promise<Meetcap>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Meetcap {
    return super.attach(address) as Meetcap;
  }
  connect(signer: Signer): Meetcap__factory {
    return super.connect(signer) as Meetcap__factory;
  }
  static readonly contractName: "Meetcap";
  public readonly contractName: "Meetcap";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MeetcapInterface {
    return new utils.Interface(_abi) as MeetcapInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Meetcap {
    return new Contract(address, _abi, signerOrProvider) as Meetcap;
  }
}