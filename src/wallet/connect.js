import { ethers, JsonRpcProvider, Wallet } from "ethers";
import { RPC_URL, MY_PRIVATE_KEY } from "../constants.js";

const provide = new JsonRpcProvider(RPC_URL);
// 此时 wallet 就是一个 Signer，可以发送交易、调用合约等
const wallet = new Wallet(MY_PRIVATE_KEY, provide);

// 查询钱包余额
const balance = await provide.getBalance(wallet.address);
console.log(ethers.formatEther(balance));
