import { ethers } from "ethers";

import { MY_PRIVATE_KEY } from "../constants.js";


// 创建一个新的随机钱包
// const wallet = ethers.Wallet.createRandom();
// console.log("Address:", wallet.address);
// console.log("Private Key:", wallet.privateKey);
// console.log("public Key:", wallet.publicKey);
// console.log("Mnemonic:", wallet.mnemonic.phrase || "No mnemonic");

// 从私钥导入钱包
const walletFromPrivateKey = new ethers.Wallet(MY_PRIVATE_KEY);
console.log("Address from private key:", walletFromPrivateKey.address);
