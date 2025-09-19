import dotenv from "dotenv";

// 加载 .env 文件中的环境变量
dotenv.config();

export const RPC_URL = process.env.RPC_URL;
export const RECIPIENT_ADDRESS = process.env.RECIPIENT_ADDRESS;
export const MY_ADDRESS = process.env.MY_ADDRESS;
export const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
export const USDC_CONTRACT_ADDRESS = process.env.USDC_CONTRACT_ADDRESS;
export const MY_PRIVATE_KEY = process.env.MY_PRIVATE_KEY;
