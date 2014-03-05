BIN = ../../node_modules/.bin
PATH := $(BIN):$(PATH)

build: bundle.js

clean:
	@rm -f bundle.js

bundle.js: index.js ../../index.js ../../lib/*.js
	@browserify -d -t reactify index.js > $@
