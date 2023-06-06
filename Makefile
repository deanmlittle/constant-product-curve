make:
	wasm-pack build --release --target nodejs
	rm -f pkg/package.json pkg/README.md pkg/.gitignore