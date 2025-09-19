import { ethers } from "ethers";
import { RPC_URL, MY_PRIVATE_KEY, USDC_CONTRACT_ADDRESS } from "./constants.js";

// 配置提供者
const provider = new ethers.JsonRpcProvider(RPC_URL);

// 配置钱包
const wallet = new ethers.Wallet(MY_PRIVATE_KEY, provider);

// 编写 ABI 事件
const tokenABI = [
  "event Transfer(address indexed from, address indexed to, uint256 value)",
];

// 创建代币合约实例
const contract = new ethers.Contract(USDC_CONTRACT_ADDRESS, tokenABI, wallet);

// 监听 Transfer 事件
contract.on("Transfer", (from, to, value, event) => {
  console.log(`转账事件:`);
  console.log(`- 发送者: ${from}`);
  console.log(`- 接收者: ${to}`);
  console.log(`- 数量: value`); // 假设代币精度为 18
  console.log(`- 交易哈希: ${event.transactionHash}`);
});
