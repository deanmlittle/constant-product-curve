/* tslint:disable */
/* eslint-disable */
/**
*/
export enum LiquidityPair {
  X = 0,
  Y = 1,
}
/**
*/
export enum CurveError {
  InvalidPrecision = 0,
  Overflow = 1,
  Underflow = 2,
  InvalidFeeAmount = 3,
  InsufficientBalance = 4,
  ZeroBalance = 5,
  SlippageLimitExceeded = 6,
}
/**
*/
export class ConstantProduct {
  free(): void;
/**
* @param {bigint} x
* @param {bigint} y
* @param {bigint} l
* @param {number} fee
* @param {number | undefined} precision
*/
  constructor(x: bigint, y: bigint, l: bigint, fee: number, precision?: number);
/**
* @param {bigint} x
* @param {bigint} y
* @returns {any}
*/
  static k_from_xy(x: bigint, y: bigint): any;
/**
* @param {bigint} x
* @param {bigint} y
* @param {number} precision
* @returns {SpotPriceWasm}
*/
  static k_from_xy_wasm(x: bigint, y: bigint, precision: number): SpotPriceWasm;
/**
* @param {bigint} x
* @param {bigint} y
* @param {bigint} l
* @param {bigint} a
* @param {number} precision
* @returns {XYAmounts}
*/
  static xy_deposit_amounts_from_l_wasm(x: bigint, y: bigint, l: bigint, a: bigint, precision: number): XYAmounts;
/**
* @param {bigint} x
* @param {bigint} y
* @param {bigint} l
* @param {bigint} a
* @param {number} precision
* @returns {XYAmounts}
*/
  static xy_withdraw_amounts_from_l_wasm(x: bigint, y: bigint, l: bigint, a: bigint, precision: number): XYAmounts;
/**
* @param {bigint} x
* @param {bigint} y
* @param {bigint} a
* @returns {any}
*/
  static x2_from_y_swap_amount_wasm(x: bigint, y: bigint, a: bigint): any;
/**
* @param {bigint} x
* @param {bigint} y
* @param {bigint} a
* @returns {any}
*/
  static y2_from_x_swap_amount_wasm(x: bigint, y: bigint, a: bigint): any;
/**
* @param {bigint} x
* @param {bigint} y
* @param {bigint} a
* @returns {any}
*/
  static delta_x_from_y_swap_amount_wasm(x: bigint, y: bigint, a: bigint): any;
/**
* @param {bigint} x
* @param {bigint} y
* @param {bigint} a
* @returns {any}
*/
  static delta_y_from_x_swap_amount_wasm(x: bigint, y: bigint, a: bigint): any;
/**
* @returns {any}
*/
  k_wasm(): any;
/**
* @returns {SpotPriceWasm}
*/
  spot_price_x_wasm(): SpotPriceWasm;
/**
* @returns {SpotPriceWasm}
*/
  spot_price_y_wasm(): SpotPriceWasm;
/**
* @param {number} p
* @param {bigint} a
* @returns {SwapResult}
*/
  swap_unsafe_wasm(p: number, a: bigint): SwapResult;
/**
* @param {number} p
* @param {bigint} a
* @param {bigint} min
* @returns {SwapResult}
*/
  swap_wasm(p: number, a: bigint, min: bigint): SwapResult;
/**
* @param {bigint} x
* @param {bigint} y
* @param {bigint} a
* @returns {DepositLiquidityResult}
*/
  deposit_liquidity_unsafe_wasm(x: bigint, y: bigint, a: bigint): DepositLiquidityResult;
/**
* @param {bigint} x
* @param {bigint} y
* @param {bigint} a
* @returns {WithdrawLiquidityResult}
*/
  withdraw_liquidity_unsafe_wasm(x: bigint, y: bigint, a: bigint): WithdrawLiquidityResult;
/**
* @param {bigint} a
* @param {bigint} max_x
* @param {bigint} max_y
* @returns {DepositLiquidityResult}
*/
  deposit_liquidity_wasm(a: bigint, max_x: bigint, max_y: bigint): DepositLiquidityResult;
/**
* @param {bigint} a
* @param {bigint} min_x
* @param {bigint} min_y
* @returns {WithdrawLiquidityResult}
*/
  withdraw_liquidity_wasm(a: bigint, min_x: bigint, min_y: bigint): WithdrawLiquidityResult;
}
/**
*/
export class DepositLiquidityResult {
  free(): void;
/**
*/
  deposit_x: bigint;
/**
*/
  deposit_y: bigint;
/**
*/
  mint_l: bigint;
}
/**
*/
export class SpotPriceWasm {
  free(): void;
/**
* @returns {any}
*/
  to_bigint(): bigint;
/**
*/
  lower: bigint;
/**
*/
  precision: number;
/**
*/
  upper: bigint;
}
/**
*/
export class SwapResult {
  free(): void;
/**
*/
  deposit: bigint;
/**
*/
  fee: bigint;
/**
*/
  withdraw: bigint;
}
/**
*/
export class WithdrawLiquidityResult {
  free(): void;
/**
*/
  burn_l: bigint;
/**
*/
  withdraw_x: bigint;
/**
*/
  withdraw_y: bigint;
}
/**
*/
export class XYAmounts {
  free(): void;
/**
*/
  x: bigint;
/**
*/
  y: bigint;
}
