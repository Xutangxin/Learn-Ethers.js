// Interface 是一个核心的类，用于处理智能合约的 ABI（Application Binary Interface，应用二进制接口），
// 以便开发者能够与以太坊智能合约进行交互。
// 它主要用于解析合约的 ABI，并生成可以调用合约函数、解码事件日志或编码交易数据的工具方法。

import { Interface } from "ethers";

const abi = [
  "function transfer(address to, uint256 amount) returns (bool)",
  "event Transfer(address indexed from, address indexed to, uint256 amount)",
];

const iface = new Interface(abi);
const { fragments } = iface;
console.log('fragments: ', fragments);
