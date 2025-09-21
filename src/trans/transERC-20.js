import { ethers, JsonRpcProvider, Wallet } from "ethers";
import {
  RPC_URL,
  MY_PRIVATE_KEY,
  USDC_CONTRACT_ADDRESS,
  RECIPIENT_ADDRESS,
} from "../constants.js";

// 本章介绍了如何使用 ethers.js 实现 ERC-20 代币（如 USDC）的转账流程。主要步骤包括：
// 配置 RPC 节点和钱包，确保能够与区块链交互；
// 获取 ERC-20 合约地址和 ABI，创建合约实例；
// 获取代币的小数位数（decimals）和符号（symbol），并根据用户输入的金额进行单位转换；
// 调用合约的 transfer 方法发起转账交易；
// 等待交易上链并确认，获取交易回执信息。

const provider = new ethers.JsonRpcProvider(RPC_URL);
const wallet = new Wallet(MY_PRIVATE_KEY, provider);

// 声明ABI接口，用于调用代币合约的方法
const tokenABI = [
  "function symbol() view returns (string)",
  "function transfer(address to, uint256 value) public returns (bool)",
  "function decimals() view returns (uint8)",
];

// 创建代币合约实例
const tokenContract = new ethers.Contract(
  USDC_CONTRACT_ADDRESS,
  tokenABI,
  wallet
);

// 转账参数
const amountVal = "0.1";
const recipientAddress = RECIPIENT_ADDRESS; // 替换为接收者地址
const decimals = await tokenContract.decimals(); // 获取代币小数位数
const amount = ethers.parseUnits(amountVal, decimals); // 转账金额

const tx = await tokenContract.transfer(recipientAddress, amount);

const receipt = await tx.wait();
console.log(
  `交易已确认，区块号：${receipt.blockNumber}, Hash: ${receipt.hash}`
);
