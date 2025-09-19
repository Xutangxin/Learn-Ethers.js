import { ethers, JsonRpcProvider, Wallet } from "ethers";
import {
  RPC_URL,
  MY_PRIVATE_KEY,
  USDC_CONTRACT_ADDRESS,
  RECIPIENT_ADDRESS,
} from "../constants.js";

const provider = new JsonRpcProvider(RPC_URL);
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
