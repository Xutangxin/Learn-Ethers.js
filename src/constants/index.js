import dotenv from "dotenv";

// 加载 .env 文件中的环境变量
dotenv.config();

export const RPC_URL = process.env.RPC_URL;

export const MY_ADDRESS = process.env.MY_ADDRESS;
