// interface Block {
//     timestamp: string,
//     lastHash: string,
//     hash: string,
//     data: any,
// }

export class Block {
    timestamp: string
    lastHash: string
    hash: string
    data: any

    constructor({timestamp, lastHash, hash, data}: Block) {
        this.timestamp = timestamp
        this.lastHash = lastHash
        this.hash = hash
        this.data = data
    }
}
