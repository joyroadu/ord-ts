// pub struct Etching {
//   pub divisibility: Option<u8>,
//   pub premine: Option<u128>,
//   pub rune: Option<Rune>,
//   pub spacers: Option<u32>,
//   pub symbol: Option<char>,
//   pub terms: Option<Terms>,
//   pub turbo: bool,

import type Rune from './rune'
import type { Terms } from './terms'

// 比特币符文发行结构
export default class Etching {
  divisibility?: number
  premine?: bigint

  rune?: Rune

  spacers?: number

  symbol?: string

  terms?: Terms

  turbo: boolean = false
}
