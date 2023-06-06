make:
	wasm-pack build constant-product-curve-wasm --out-dir ../pkg --release --target nodejs
	rm -f pkg/README.md pkg/.gitignore
	mv pkg/* .
	rm -rf pkg
	sed -i '' 's/to_bigint(): any/to_bigint(): bigint/' constant_product_curve.d.ts