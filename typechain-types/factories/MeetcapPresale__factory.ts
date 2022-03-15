/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MeetcapPresale,
  MeetcapPresaleInterface,
} from "../MeetcapPresale";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract Meetcap",
        name: "token_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "purchaser",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "weiValue",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TokensPurchased",
    type: "event",
  },
  {
    inputs: [],
    name: "buyTokens",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "presaleWallet",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rate",
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
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract Meetcap",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "weiRaised",
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
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516105d13803806105d183398101604081905261002f9161007d565b6000805460ff1916600190811790915566038d7ea4c680009055600280546001600160a01b03199081163017909155600380546001600160a01b0393909316929091169190911790556100ad565b60006020828403121561008f57600080fd5b81516001600160a01b03811681146100a657600080fd5b9392505050565b610515806100bc6000396000f3fe60806040526004361061004e5760003560e01c80631ed77dc8146100625780632c4e722e146100995780634042b66f146100b8578063d0febe4c146100cd578063fc0c546a146100d557600080fd5b3661005d5761005b6100f3565b005b600080fd5b34801561006e57600080fd5b506002546001600160a01b03165b6040516001600160a01b0390911681526020015b60405180910390f35b3480156100a557600080fd5b506001545b604051908152602001610090565b3480156100c457600080fd5b506004546100aa565b61005b6100f3565b3480156100e157600080fd5b506003546001600160a01b031661007c565b60005460ff1661015a5760405162461bcd60e51b815260206004820152602760248201527f536f7272792c20796f752063616e6e6f74206d616b652061207265656e7472616044820152661b9d0818d85b1b60ca1b60648201526084015b60405180910390fd5b6000805460ff191681556001543491906101749083610444565b905061018082826101ef565b8160045461018e9190610463565b60045561019b3382610259565b604080518381526020810183905233917f8fafebcaf9d154343dad25669bfa277f4fbacd7ac6b0c4fed522580e040a0f33910160405180910390a26101de610270565b50506000805460ff19166001179055565b8161023c5760405162461bcd60e51b815260206004820152601f60248201527f536f7272792c20796f752063616e6f74206275792077697468203020424e42006044820152606401610151565b6002546001600160a01b03163181111561025557600080fd5b5050565b600354610255906001600160a01b031683836102ac565b6002546040516001600160a01b03909116903480156108fc02916000818181858888f193505050501580156102a9573d6000803e3d6000fd5b50565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526102fe908490610303565b505050565b600080836001600160a01b03168360405161031e919061047b565b6000604051808303816000865af19150503d806000811461035b576040519150601f19603f3d011682016040523d82523d6000602084013e610360565b606091505b5091509150816103b25760405162461bcd60e51b815260206004820152601c60248201527f536f7272792c204c6f772d6c6576656c2063616c6c206661696c6564000000006044820152606401610151565b80511561042857808060200190518101906103cd91906104b6565b6104285760405162461bcd60e51b815260206004820152602660248201527f536f7272792c204552433230206f7065726174696f6e20646964206e6f7420736044820152651d58d8d9595960d21b6064820152608401610151565b50505050565b634e487b7160e01b600052601160045260246000fd5b600081600019048311821515161561045e5761045e61042e565b500290565b600082198211156104765761047661042e565b500190565b6000825160005b8181101561049c5760208186018101518583015201610482565b818111156104ab576000828501525b509190910192915050565b6000602082840312156104c857600080fd5b815180151581146104d857600080fd5b939250505056fea264697066735822122067092fbed96327a11e12d446fcba88871d469d6b53e15860b7200587e6f9385964736f6c63430008090033";

type MeetcapPresaleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MeetcapPresaleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MeetcapPresale__factory extends ContractFactory {
  constructor(...args: MeetcapPresaleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "MeetcapPresale";
  }

  deploy(
    token_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MeetcapPresale> {
    return super.deploy(token_, overrides || {}) as Promise<MeetcapPresale>;
  }
  getDeployTransaction(
    token_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(token_, overrides || {});
  }
  attach(address: string): MeetcapPresale {
    return super.attach(address) as MeetcapPresale;
  }
  connect(signer: Signer): MeetcapPresale__factory {
    return super.connect(signer) as MeetcapPresale__factory;
  }
  static readonly contractName: "MeetcapPresale";
  public readonly contractName: "MeetcapPresale";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MeetcapPresaleInterface {
    return new utils.Interface(_abi) as MeetcapPresaleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MeetcapPresale {
    return new Contract(address, _abi, signerOrProvider) as MeetcapPresale;
  }
}