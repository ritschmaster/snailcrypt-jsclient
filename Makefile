all: lib src config.js grunt


grunt:
	./node_modules/.bin/grunt


public:
	mkdir -p public


lib: public
	mkdir -p public/lib

	mkdir -p public/lib/openui5
	cp -r lib/openui5-runtime-1.102.1/resources/*         public/lib/openui5

	mkdir -p public/lib/marked
	cp -r node_modules/marked/marked.min.js               public/lib/marked


src: grunt public
	cp -r src/timecapsule-jsclient public/
	cp -r src/index.html public/
	cp -r src/timer.html public/


config.js:
	cp config.js public/timecapsule-jsclient/


clean:
	rm -rf public

start:
	podman-compose up --build

stop:
	podman-compose down

.PHONY: all config.js
