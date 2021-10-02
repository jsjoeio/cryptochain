interface Block {
    timestamp: string,
    lastHash: string,
    hash: string,
    data: any,
}

class Block {
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

const block1 = new Block({timestamp:"01/01/01", lastHash: "foo-lastHash", hash: "foo-hash", data: 'foo-data'})

console.log(block1, "hi")