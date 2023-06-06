make:
	wasm-pack build --release --target nodejs
	rm -f pkg/package.json pkg/README.md pkg/.gitignore
	sed -i '' 's/to_bigint(): any/to_bigint(): bigint/' pkg/constant_product_curve.d.ts