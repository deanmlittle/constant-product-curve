make:
	wasm-pack build --release --out-dir ./ --target nodejs
	cargo build --target wasm32-unknown-unknown --release
	# wasm-bindgen ./target/wasm32-unknown-unknown/release/constant_product_curve.wasm --out-dir target/wasm --target nodejs --weak-refs
	# wasm-opt -O4 --dce ./target/wasm/constant_product_curve_bg.wasm -o ./target/wasm/constant_product_curve_bg.wasm