import { Block } from "../block";
import { GENESIS_DATA } from "../config";

describe("Block", () => {
  const timestamp = "a-date";
  const lastHash = "432fdsal";
  const hash = "bar-hash";
  const data = ["blockhain", "data"];
  const block = new Block({ timestamp, lastHash, hash, data });

  it("should have a timestamp, lastHash, hash and data property", () => {
    expect(block.timestamp).toEqual(timestamp);
    expect(block.lastHash).toEqual(lastHash);
    expect(block.hash).toEqual(hash);
    expect(block.data).toEqual(data);
  });

  describe("gensis()", () => {
    const genesisBlock = Block.genesis();

    it("should return a Block instance", () => {
      expect(genesisBlock instanceof Block).toBe(true);
    });

    it("should return the genesis data", () => {
      expect(genesisBlock).toEqual(GENESIS_DATA);
    });
  });

  describe("mineBlock()", () => {
    const lastBlock = Block.genesis();
    const data = "mined data";
    const minedBlock = Block.mineBlock({ lastBlock, data });

    it("should return a Block instance", () => {
      expect(minedBlock instanceof Block).toBe(true);
    })

    it("set the `lastHash` to be the `hash` of the lastBlock", () => {
      expect(minedBlock.lastHash).toEqual(lastBlock.hash)
    })

    it("should set the `data`", () => {
      expect(minedBlock.data).toEqual(data)
    })

    it("should set a timestamp", () => {
      expect(minedBlock.timestamp).not.toBeUndefined()
    })
  });
});
