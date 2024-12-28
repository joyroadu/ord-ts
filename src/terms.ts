// pub struct Terms {
//   pub amount: Option<u128>,
//   pub cap: Option<u128>,
//   pub height: (Option<u64>, Option<u64>),
//   pub offset: (Option<u64>, Option<u64>),
// }

export interface Terms {
  amount?: bigint
  cap?: bigint

  height: [null | number, null | number]
  offset: [null | number, null | number]
}
