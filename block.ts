// interface Block {
//     timestamp: string,
//     lastHash: string,
//     hash: string,
//     data: any,
// }

import { GENESIS_DATA } from "./config";

export class Block {
  timestamp: string;
  lastHash: string;
  hash: string;
  data: any;

  constructor({ timestamp, lastHash, hash, data }: Block) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
  }

  static genesis() {
    return new Block(GENESIS_DATA);
  }
}
