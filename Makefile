all: lib src config.js grunt


grunt:
	./node_modules/.bin/grunt


public:
	mkdir -p public


lib: public
	mkdir -p public/lib

	mkdir -p public/lib/openui5
	cp -r lib/openui5-runtime-1.102.1/resources/*           public/lib/openui5

	mkdir -p public/lib/cronstrue
	cp -r node_modules/cronstrue/dist/cronstrue.min.js      public/lib/cronstrue
	cp -r node_modules/cronstrue/dist/cronstrue-i18n.min.js public/lib/cronstrue

	mkdir -p public/lib/marked
	cp -r node_modules/marked/marked.min.js                 public/lib/marked
	
	mkdir -p public/lib/forge
	cp -r node_modules/node-forge/dist/forge.min.js         public/lib/forge
	
	mkdir -p public/lib/qrcode
	cp -r node_modules/qrcode/build/qrcode.js               public/lib/qrcode/qrcode.min.js 


src: public
	cp -r src/snailcrypt-jsclient public/
	cp -r src/index.html public/index.php
	cp -r src/timer.html public/timer.php
	cp -r assets/*.png                 public/
	cp -r assets/favicon_package/*.png public/
	cp -r assets/favicon_package/*.xml public/
	cp -r assets/favicon_package/*.ico public/
	cp -r assets/favicon_package/*.svg public/
	cp -r assets/favicon_package/*.webmanifest public/


config.js:
	cp config.js public/snailcrypt-jsclient/


clean:
	rm -rf public

start:
	docker-compose up --build

stop:
	docker-compose down

.PHONY: all config.js
