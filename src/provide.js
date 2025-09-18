import { ethers } from "ethers";
import { RPC_URL, MY_ADDRESS } from "./constants/index.js";

const provider = new ethers.JsonRpcProvider(RPC_URL);

const balance = await provider.getBalance(MY_ADDRESS);
const balanceVal = ethers.formatEther(balance);
console.log("balance: ", balanceVal + " ETH");

const network = await provider.getNetwork();
console.log(`网络名称：${network.name}，网络链ID：${network.chainId}`);

const blockNumber = await provider.getBlockNumber();
console.log(`当前最新区块高度：${blockNumber}`);

const freeData = await provider.getFeeData();
console.log(
  `当前网络的Gas费用：${freeData.gasPrice.toString()} wei，当前网络的最大Gas费：${freeData.maxFeePerGas.toString()} wei，当前网络的最大优先级Gas费：${freeData.maxPriorityFeePerGas.toString()} wei`
);
