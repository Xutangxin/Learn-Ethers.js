import { ethers, JsonRpcProvider, Wallet } from "ethers";
import { RPC_URL, MY_PRIVATE_KEY } from "../constants.js";

// 配置 RPC 提供者和钱包；
// 获取转账所需的 nonce 和 gas 费用；
// 构建标准的转账参数对象；
// 使用钱包签名并发送交易；
// 等待交易上链并获取交易回执。
// 通过这些步骤，你可以安全、规范地实现 ETH 的自动化转账操作。建议在实际生产环境中，进一步完善异常处理和安全措施，确保资金安全。

const provider = new JsonRpcProvider(RPC_URL);
const wallet = new Wallet(MY_PRIVATE_KEY, provider);

// 转账参数
const recipientAddress = "0x817c6ef5f2ef3cc56ce87942bf7ed74138ec284c"; // 替换为接收者地址
const amountInEther = "0.01"; // 转账金额（单位：ETH）

// 获取当前账户的nonce值
const nonce = await provider.getTransactionCount(wallet.address, "pending");

// 获取当前的gas价格
const feeData = await provider.getFeeData();

const tx = {
  // 转账给谁
  to: recipientAddress,
  // 转账数量，需要将 0.01 ETH转换为 wei 单位
  value: ethers.parseEther(amountInEther),
  // 交易 nonce
  nonce: nonce,
  // 标准转账 gas 限制, 设置一个 gas 费用上限，避免多扣
  gasLimit: 21000,
  // 设置 gas 价格
  gasPrice: feeData.gasPrice,
};

// 发送交易
const transaction = await wallet.sendTransaction(tx);
// 等待交易确认
const receipt = await transaction.wait();
console.log(`交易已确认，区块号：${receipt.blockNumber}`);
