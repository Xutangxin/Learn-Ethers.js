// ethers.Contract 类是 ethers.js 提供的抽象层，用于与部署在以太坊区块链上的智能合约交互

import { CONTRACT_ADDRESS, RPC_URL, MY_ADDRESS } from "./constants/index.js";

import { ethers } from "ethers";

const provider = new ethers.JsonRpcProvider(RPC_URL);

const abi = [
  "function balanceOf(address owner) view returns (uint256)",
  "function decimals() view returns (uint8)",
  "function symbol() view returns (string)",
];

const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, provider);

const balance = await contract.balanceOf(MY_ADDRESS);
// 查询代币符号
const symbol = await contract.symbol();
// 查询代币小数位数
const decimals = await contract.decimals();

console.log(balance); // 200000000000000000000
console.log(symbol); // BUSD
console.log(decimals); // 1
