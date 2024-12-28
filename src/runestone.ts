import { script, type Transaction } from 'bitcoinjs-lib'

export default class RuneStone {
  readonly MAGIC_NUMBER = 0x5d // OP_13

  // OP_RETURN 数据解码
  deciper(transaction: Transaction) {}

  // 原始数据编码成 OP_RETURN 存储数据
  enciper() {}

  // 从 OP_RETURN 提取数据
  payload(transaction: Transaction) {
    for (let i = 0; i < transaction.outs.length; i++) {
      const instructions = script.decompile(transaction.outs[i].script)
      if (!instructions) return
      if (instructions[0] !== 0x6a) continue
      if (instructions[1] !== this.MAGIC_NUMBER) continue
    }
  }
}
