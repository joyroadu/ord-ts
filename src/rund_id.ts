export default class RuneId {
  // 区块高度
  block: number

  // 交易序号
  tx: number

  constructor(block: number, tx: number) {
    this.block = block
    this.tx = tx
  }
}
