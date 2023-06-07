use wasm_bindgen::prelude::*;
use std::error::Error;
use std::fmt;
use constant_product_curve;

#[wasm_bindgen]
#[derive(Debug)]
pub enum LiquidityPair {
    X,
    Y
}

#[wasm_bindgen]
#[derive(Debug, Clone)]
pub struct SpotPrice {
    pub upper: u64,
    pub lower: u64,
    pub precision: u32
}

#[wasm_bindgen]
impl SpotPrice {
    pub fn to_bigint(&self) -> JsValue {
        let mut bytes: [u8;16] = [0;16];
        bytes[0..8].copy_from_slice(&self.upper.to_be_bytes());
        bytes[8..16].copy_from_slice(&self.lower.to_be_bytes());
        let s = u128::from_be_bytes(bytes).to_string();
        JsValue::bigint_from_str(&s)
    }
}

#[wasm_bindgen]
#[derive(Debug)]
pub struct XYAmounts {
    pub x: u64,
    pub y: u64
}

#[wasm_bindgen]
#[derive(Debug)]
pub struct DepositLiquidityResult {
    pub deposit_x: u64,
    pub deposit_y: u64,
    pub mint_l: u64
}

#[wasm_bindgen]
#[derive(Debug)]
pub struct WithdrawLiquidityResult {
    pub withdraw_x: u64,
    pub withdraw_y: u64,
    pub burn_l: u64
}

#[wasm_bindgen]
#[derive(Debug)]
pub struct SwapResult {
    pub deposit: u64,
    pub withdraw: u64,
    pub fee: u64
}

#[wasm_bindgen]
#[derive(Debug)]
pub enum CurveError {
    InvalidPrecision,
    Overflow,
    Underflow,
    InvalidFeeAmount,
    InsufficientBalance,
    ZeroBalance,
    SlippageLimitExceeded
}

impl Error for CurveError {}

impl fmt::Display for CurveError {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "{:?}", self)
    }
}

#[wasm_bindgen]
#[derive(Debug)]
pub struct ConstantProduct(constant_product_curve::ConstantProduct);

#[wasm_bindgen]
impl ConstantProduct {
    #[wasm_bindgen(constructor)]
    pub fn init(x: u64, y: u64, l: u64, fee: u16, precision: Option<u8>) -> Result<ConstantProduct, JsError> {
        // Assert non-zero values of X and Y
        Ok(Self(constant_product_curve::ConstantProduct::init(x, y, l, fee, precision)?))
    }

    // Static Invariant calculation
    #[wasm_bindgen]
    pub fn k_from_xy(x: u64, y: u64) -> Result<JsValue, JsError> {
        let k = constant_product_curve::ConstantProduct::k_from_xy(x, y)?;
        Ok(JsValue::from(k))
    }

    // Get spot price for a token in its opposing token
    #[wasm_bindgen]
    pub fn spot_price_from_pair(x: u64, y: u64, precision: u32) -> Result<SpotPrice, JsError> {
        let v = constant_product_curve::ConstantProduct::spot_price_from_pair(x, y, precision)?;
        Ok(SpotPrice { lower: (v.amount & 0b00000000000000001111111111111111) as u64, upper: (v.amount >> 64) as u64, precision: v.precision })
    }

    #[wasm_bindgen]
    pub fn xy_deposit_amounts_from_l(x: u64, y: u64, l: u64, a: u64, precision: u32) -> Result<XYAmounts, JsError> {
        let v = constant_product_curve::ConstantProduct::xy_deposit_amounts_from_l(x, y, l, a, precision)?;
        Ok(XYAmounts { x: v.x, y: v.y })
    }

    #[wasm_bindgen]
    pub fn xy_withdraw_amounts_from_l(x: u64, y: u64, l: u64, a: u64, precision: u32) -> Result<XYAmounts, JsError> {
        let v = constant_product_curve::ConstantProduct::xy_deposit_amounts_from_l(x, y, l, a, precision)?;
        Ok(XYAmounts { x: v.x, y: v.y })
    }

    #[wasm_bindgen]
    pub fn x2_from_y_swap_amount(x: u64, y: u64, a: u64) -> Result<JsValue, JsError> {
        Ok(constant_product_curve::ConstantProduct::x2_from_y_swap_amount(x, y, a)?.into())
    }

    #[wasm_bindgen]
    pub fn y2_from_x_swap_amount(x: u64, y: u64, a: u64) -> Result<JsValue, JsError> {
        Ok(constant_product_curve::ConstantProduct::x2_from_y_swap_amount(y,x,a)?.into())
    }

    #[wasm_bindgen]
    pub fn delta_x_from_y_swap_amount(x: u64, y: u64, a: u64) -> Result<JsValue, JsError> {
        Ok(constant_product_curve::ConstantProduct::delta_x_from_y_swap_amount(x,y,a)?.into())
    }

    #[wasm_bindgen]
    pub fn delta_y_from_x_swap_amount(x: u64, y: u64, a: u64) -> Result<JsValue, JsError> {
        Ok(constant_product_curve::ConstantProduct::delta_x_from_y_swap_amount(y,x,a)?.into())
    }

    #[wasm_bindgen]
    pub fn k(&self) -> Result<JsValue, JsError> {
        Ok(self.0.k()?.into())
    }

    #[wasm_bindgen]
    pub fn spot_price_x(&self) -> Result<SpotPrice, JsError> {
        let v = self.0.spot_price_x()?;
        Ok(SpotPrice { lower: (v.amount & 0b00000000000000001111111111111111) as u64, upper: (v.amount >> 64) as u64, precision: v.precision })
    }

    #[wasm_bindgen]
    pub fn spot_price_y(&self) -> Result<SpotPrice, JsError> {
        let v = self.0.spot_price_y()?;
        Ok(SpotPrice { lower: (v.amount & 0b00000000000000001111111111111111) as u64, upper: (v.amount >> 64) as u64, precision: v.precision })
    }

    #[wasm_bindgen]
    pub fn swap_unsafe(&mut self, p: LiquidityPair, a: u64) -> Result<SwapResult, JsError> {
        let p = match p {
            LiquidityPair::X => constant_product_curve::LiquidityPair::X,
            LiquidityPair::Y => constant_product_curve::LiquidityPair::Y,
        };
        let v = self.0.swap_unsafe(p, a)?;
        Ok(SwapResult { deposit: v.deposit, withdraw: v.withdraw, fee: v.fee })
    }

    #[wasm_bindgen]
    pub fn swap(&mut self, p: LiquidityPair, a: u64, min: u64) -> Result<SwapResult, JsError> {
        let p = match p {
            LiquidityPair::X => constant_product_curve::LiquidityPair::X,
            LiquidityPair::Y => constant_product_curve::LiquidityPair::Y,
        };
        let v = self.0.swap(p, a, min)?;
        Ok(SwapResult { deposit: v.deposit, withdraw: v.withdraw, fee: v.fee })
    }

    #[wasm_bindgen]
    pub fn deposit_liquidity_unsafe(&mut self, x: u64, y: u64, a: u64) -> Result<DepositLiquidityResult, JsError> {
        let v = self.0.deposit_liquidity_unsafe(x, y, a)?;
        Ok(DepositLiquidityResult { deposit_x: v.deposit_x, deposit_y: v.deposit_y, mint_l: v.mint_l })
    }

    #[wasm_bindgen]
    pub fn withdraw_liquidity_unsafe(&mut self, x: u64, y: u64, a: u64) -> Result<WithdrawLiquidityResult, JsError> {
        let v = self.0.withdraw_liquidity_unsafe(x, y, a)?;
        Ok(WithdrawLiquidityResult { withdraw_x: v.withdraw_x, withdraw_y: v.withdraw_y, burn_l: v.burn_l })
    }

    #[wasm_bindgen]
    pub fn deposit_liquidity(&mut self, a: u64, max_x: u64, max_y: u64) -> Result<DepositLiquidityResult, JsError> {
        let v = self.0.deposit_liquidity(a, max_x, max_y)?;
        Ok(DepositLiquidityResult { deposit_x: v.deposit_x, deposit_y: v.deposit_y, mint_l: v.mint_l })
    }

    #[wasm_bindgen]
    pub fn withdraw_liquidity(&mut self, a: u64, min_x: u64, min_y: u64) -> Result<WithdrawLiquidityResult, JsError> {
        let v = self.0.withdraw_liquidity(a, min_x, min_y)?;
        Ok(WithdrawLiquidityResult { withdraw_x: v.withdraw_x, withdraw_y: v.withdraw_y, burn_l: v.burn_l })
    }
}