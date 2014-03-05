BIN = ../../node_modules/.bin
PATH := $(BIN):$(PATH)

start: build
	@node server.js

build: bundle.js

clean:
	@rm -f bundle.js

bundle.js: client.js ../../index.js ../../lib/*.js
	@browserify -d -t reactify client.js > $@
