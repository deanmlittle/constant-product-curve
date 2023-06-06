let imports = {};
imports['__wbindgen_placeholder__'] = module.exports;
let wasm;
const { TextDecoder } = require(`util`);

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachedUint8Memory0 = null;

function getUint8Memory0() {
    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {
        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

const heap = new Array(128).fill(undefined);

heap.push(undefined, null, true, false);

let heap_next = heap.length;

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

function getObject(idx) { return heap[idx]; }

function dropObject(idx) {
    if (idx < 132) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

let cachedInt32Memory0 = null;

function getInt32Memory0() {
    if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {
        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachedInt32Memory0;
}
/**
*/
module.exports.LiquidityPair = Object.freeze({ X:0,"0":"X",Y:1,"1":"Y", });
/**
*/
module.exports.CurveError = Object.freeze({ InvalidPrecision:0,"0":"InvalidPrecision",Overflow:1,"1":"Overflow",Underflow:2,"2":"Underflow",InvalidFeeAmount:3,"3":"InvalidFeeAmount",InsufficientBalance:4,"4":"InsufficientBalance",ZeroBalance:5,"5":"ZeroBalance",SlippageLimitExceeded:6,"6":"SlippageLimitExceeded", });
/**
*/
class ConstantProduct {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(ConstantProduct.prototype);
        obj.__wbg_ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_constantproduct_free(ptr);
    }
    /**
    * @param {bigint} x
    * @param {bigint} y
    * @param {bigint} l
    * @param {number} fee
    * @param {number | undefined} precision
    */
    constructor(x, y, l, fee, precision) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.constantproduct_init_wasm(retptr, x, y, l, fee, isLikeNone(precision) ? 0xFFFFFF : precision);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return ConstantProduct.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {bigint} x
    * @param {bigint} y
    * @returns {any}
    */
    static k_from_xy(x, y) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.constantproduct_k_from_xy(retptr, x, y);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return takeObject(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {bigint} x
    * @param {bigint} y
    * @param {number} precision
    * @returns {SpotPriceWasm}
    */
    static k_from_xy_wasm(x, y, precision) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.constantproduct_k_from_xy_wasm(retptr, x, y, precision);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return SpotPriceWasm.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {bigint} x
    * @param {bigint} y
    * @param {bigint} l
    * @param {bigint} a
    * @param {number} precision
    * @returns {XYAmounts}
    */
    static xy_deposit_amounts_from_l_wasm(x, y, l, a, precision) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.constantproduct_xy_deposit_amounts_from_l_wasm(retptr, x, y, l, a, precision);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return XYAmounts.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {bigint} x
    * @param {bigint} y
    * @param {bigint} l
    * @param {bigint} a
    * @param {number} precision
    * @returns {XYAmounts}
    */
    static xy_withdraw_amounts_from_l_wasm(x, y, l, a, precision) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.constantproduct_xy_withdraw_amounts_from_l_wasm(retptr, x, y, l, a, precision);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return XYAmounts.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {bigint} x
    * @param {bigint} y
    * @param {bigint} a
    * @returns {any}
    */
    static x2_from_y_swap_amount_wasm(x, y, a) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.constantproduct_x2_from_y_swap_amount_wasm(retptr, x, y, a);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return takeObject(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {bigint} x
    * @param {bigint} y
    * @param {bigint} a
    * @returns {any}
    */
    static y2_from_x_swap_amount_wasm(x, y, a) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.constantproduct_y2_from_x_swap_amount_wasm(retptr, x, y, a);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return takeObject(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {bigint} x
    * @param {bigint} y
    * @param {bigint} a
    * @returns {any}
    */
    static delta_x_from_y_swap_amount_wasm(x, y, a) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.constantproduct_delta_x_from_y_swap_amount_wasm(retptr, x, y, a);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return takeObject(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {bigint} x
    * @param {bigint} y
    * @param {bigint} a
    * @returns {any}
    */
    static delta_y_from_x_swap_amount_wasm(x, y, a) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.constantproduct_delta_y_from_x_swap_amount_wasm(retptr, x, y, a);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return takeObject(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @returns {any}
    */
    k_wasm() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.constantproduct_k_wasm(retptr, this.__wbg_ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return takeObject(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @returns {SpotPriceWasm}
    */
    spot_price_x_wasm() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.constantproduct_spot_price_x_wasm(retptr, this.__wbg_ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return SpotPriceWasm.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @returns {SpotPriceWasm}
    */
    spot_price_y_wasm() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.constantproduct_spot_price_y_wasm(retptr, this.__wbg_ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return SpotPriceWasm.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {number} p
    * @param {bigint} a
    * @returns {SwapResult}
    */
    swap_unsafe_wasm(p, a) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.constantproduct_swap_unsafe_wasm(retptr, this.__wbg_ptr, p, a);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return SwapResult.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {number} p
    * @param {bigint} a
    * @param {bigint} min
    * @returns {SwapResult}
    */
    swap_wasm(p, a, min) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.constantproduct_swap_wasm(retptr, this.__wbg_ptr, p, a, min);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return SwapResult.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {bigint} x
    * @param {bigint} y
    * @param {bigint} a
    * @returns {DepositLiquidityResult}
    */
    deposit_liquidity_unsafe_wasm(x, y, a) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.constantproduct_deposit_liquidity_unsafe_wasm(retptr, this.__wbg_ptr, x, y, a);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return DepositLiquidityResult.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {bigint} x
    * @param {bigint} y
    * @param {bigint} a
    * @returns {WithdrawLiquidityResult}
    */
    withdraw_liquidity_unsafe_wasm(x, y, a) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.constantproduct_withdraw_liquidity_unsafe_wasm(retptr, this.__wbg_ptr, x, y, a);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return WithdrawLiquidityResult.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {bigint} a
    * @param {bigint} max_x
    * @param {bigint} max_y
    * @returns {DepositLiquidityResult}
    */
    deposit_liquidity_wasm(a, max_x, max_y) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.constantproduct_deposit_liquidity_wasm(retptr, this.__wbg_ptr, a, max_x, max_y);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return DepositLiquidityResult.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {bigint} a
    * @param {bigint} min_x
    * @param {bigint} min_y
    * @returns {WithdrawLiquidityResult}
    */
    withdraw_liquidity_wasm(a, min_x, min_y) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.constantproduct_withdraw_liquidity_wasm(retptr, this.__wbg_ptr, a, min_x, min_y);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return WithdrawLiquidityResult.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
module.exports.ConstantProduct = ConstantProduct;
/**
*/
class DepositLiquidityResult {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(DepositLiquidityResult.prototype);
        obj.__wbg_ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_depositliquidityresult_free(ptr);
    }
    /**
    * @returns {bigint}
    */
    get deposit_x() {
        const ret = wasm.__wbg_get_depositliquidityresult_deposit_x(this.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
    * @param {bigint} arg0
    */
    set deposit_x(arg0) {
        wasm.__wbg_set_depositliquidityresult_deposit_x(this.__wbg_ptr, arg0);
    }
    /**
    * @returns {bigint}
    */
    get deposit_y() {
        const ret = wasm.__wbg_get_depositliquidityresult_deposit_y(this.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
    * @param {bigint} arg0
    */
    set deposit_y(arg0) {
        wasm.__wbg_set_depositliquidityresult_deposit_y(this.__wbg_ptr, arg0);
    }
    /**
    * @returns {bigint}
    */
    get mint_l() {
        const ret = wasm.__wbg_get_depositliquidityresult_mint_l(this.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
    * @param {bigint} arg0
    */
    set mint_l(arg0) {
        wasm.__wbg_set_depositliquidityresult_mint_l(this.__wbg_ptr, arg0);
    }
}
module.exports.DepositLiquidityResult = DepositLiquidityResult;
/**
*/
class SpotPriceWasm {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(SpotPriceWasm.prototype);
        obj.__wbg_ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_spotpricewasm_free(ptr);
    }
    /**
    * @returns {bigint}
    */
    get upper() {
        const ret = wasm.__wbg_get_depositliquidityresult_deposit_x(this.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
    * @param {bigint} arg0
    */
    set upper(arg0) {
        wasm.__wbg_set_depositliquidityresult_deposit_x(this.__wbg_ptr, arg0);
    }
    /**
    * @returns {bigint}
    */
    get lower() {
        const ret = wasm.__wbg_get_depositliquidityresult_deposit_y(this.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
    * @param {bigint} arg0
    */
    set lower(arg0) {
        wasm.__wbg_set_depositliquidityresult_deposit_y(this.__wbg_ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get precision() {
        const ret = wasm.__wbg_get_spotpricewasm_precision(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} arg0
    */
    set precision(arg0) {
        wasm.__wbg_set_spotpricewasm_precision(this.__wbg_ptr, arg0);
    }
    /**
    * @returns {any}
    */
    to_bigint() {
        const ret = wasm.spotpricewasm_to_bigint(this.__wbg_ptr);
        return takeObject(ret);
    }
}
module.exports.SpotPriceWasm = SpotPriceWasm;
/**
*/
class SwapResult {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(SwapResult.prototype);
        obj.__wbg_ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_swapresult_free(ptr);
    }
    /**
    * @returns {bigint}
    */
    get deposit() {
        const ret = wasm.__wbg_get_depositliquidityresult_deposit_x(this.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
    * @param {bigint} arg0
    */
    set deposit(arg0) {
        wasm.__wbg_set_depositliquidityresult_deposit_x(this.__wbg_ptr, arg0);
    }
    /**
    * @returns {bigint}
    */
    get withdraw() {
        const ret = wasm.__wbg_get_depositliquidityresult_deposit_y(this.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
    * @param {bigint} arg0
    */
    set withdraw(arg0) {
        wasm.__wbg_set_depositliquidityresult_deposit_y(this.__wbg_ptr, arg0);
    }
    /**
    * @returns {bigint}
    */
    get fee() {
        const ret = wasm.__wbg_get_depositliquidityresult_mint_l(this.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
    * @param {bigint} arg0
    */
    set fee(arg0) {
        wasm.__wbg_set_depositliquidityresult_mint_l(this.__wbg_ptr, arg0);
    }
}
module.exports.SwapResult = SwapResult;
/**
*/
class WithdrawLiquidityResult {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(WithdrawLiquidityResult.prototype);
        obj.__wbg_ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_withdrawliquidityresult_free(ptr);
    }
    /**
    * @returns {bigint}
    */
    get withdraw_x() {
        const ret = wasm.__wbg_get_depositliquidityresult_deposit_x(this.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
    * @param {bigint} arg0
    */
    set withdraw_x(arg0) {
        wasm.__wbg_set_depositliquidityresult_deposit_x(this.__wbg_ptr, arg0);
    }
    /**
    * @returns {bigint}
    */
    get withdraw_y() {
        const ret = wasm.__wbg_get_depositliquidityresult_deposit_y(this.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
    * @param {bigint} arg0
    */
    set withdraw_y(arg0) {
        wasm.__wbg_set_depositliquidityresult_deposit_y(this.__wbg_ptr, arg0);
    }
    /**
    * @returns {bigint}
    */
    get burn_l() {
        const ret = wasm.__wbg_get_depositliquidityresult_mint_l(this.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
    * @param {bigint} arg0
    */
    set burn_l(arg0) {
        wasm.__wbg_set_depositliquidityresult_mint_l(this.__wbg_ptr, arg0);
    }
}
module.exports.WithdrawLiquidityResult = WithdrawLiquidityResult;
/**
*/
class XYAmounts {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(XYAmounts.prototype);
        obj.__wbg_ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_xyamounts_free(ptr);
    }
    /**
    * @returns {bigint}
    */
    get x() {
        const ret = wasm.__wbg_get_depositliquidityresult_deposit_x(this.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
    * @param {bigint} arg0
    */
    set x(arg0) {
        wasm.__wbg_set_depositliquidityresult_deposit_x(this.__wbg_ptr, arg0);
    }
    /**
    * @returns {bigint}
    */
    get y() {
        const ret = wasm.__wbg_get_depositliquidityresult_deposit_y(this.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
    * @param {bigint} arg0
    */
    set y(arg0) {
        wasm.__wbg_set_depositliquidityresult_deposit_y(this.__wbg_ptr, arg0);
    }
}
module.exports.XYAmounts = XYAmounts;

module.exports.__wbindgen_bigint_from_str = function(arg0, arg1) {
    const ret = BigInt(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
};

module.exports.__wbindgen_bigint_from_u128 = function(arg0, arg1) {
    const ret = BigInt.asUintN(64, arg0) << BigInt(64) | BigInt.asUintN(64, arg1);
    return addHeapObject(ret);
};

module.exports.__wbindgen_bigint_from_u64 = function(arg0) {
    const ret = BigInt.asUintN(64, arg0);
    return addHeapObject(ret);
};

module.exports.__wbindgen_error_new = function(arg0, arg1) {
    const ret = new Error(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
};

module.exports.__wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

const path = require('path').join(__dirname, 'constant_product_curve_bg.wasm');
const bytes = require('fs').readFileSync(path);

const wasmModule = new WebAssembly.Module(bytes);
const wasmInstance = new WebAssembly.Instance(wasmModule, imports);
wasm = wasmInstance.exports;
module.exports.__wasm = wasm;

