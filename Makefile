MINIFY=./node_modules/minify/bin/minify.js

all: lib src config.js

ui5: config.js
	cd src && ../node_modules/@ui5/cli/bin/ui5.cjs build self-contained -a
	rm -rf public/snailcrypt-jsclient
	mv src/dist public/snailcrypt-jsclient
	
	
public:
	mkdir -p public


lib: public
	mkdir -p public/lib

	mkdir -p public/lib/cronstrue
	cp -r node_modules/cronstrue/dist/cronstrue.min.js      public/lib/cronstrue
	cp -r node_modules/cronstrue/dist/cronstrue-i18n.min.js public/lib/cronstrue

	mkdir -p public/lib/marked
	cp -r node_modules/marked/marked.min.js                 public/lib/marked
	
	mkdir -p public/lib/forge
	cp -r node_modules/node-forge/dist/forge.min.js         public/lib/forge
	cp -r node_modules/node-forge/dist/forge.min.js.map     public/lib/forge
	
	mkdir -p public/lib/qrcode
	cp -r node_modules/qrcode/build/qrcode.js               public/lib/qrcode/qrcode.min.js 

src/index.html:
	$(MINIFY) src/index.html > public/index.php
	
src/timer.html:
	$(MINIFY) src/timer.html > public/timer.php

src: ui5 src/index.html src/timer.html public
	cp -r assets/*.png                 public/
	cp -r assets/favicon_package/*.png public/
	cp -r assets/favicon_package/*.xml public/
	cp -r assets/favicon_package/*.ico public/
	cp -r assets/favicon_package/*.svg public/
	cp -r assets/favicon_package/*.webmanifest public/
	
	
lib-debug:
	mkdir -p public/lib/openui5
	cp -r lib/openui5-runtime-1.102.1/resources/*  public/lib/openui5
	

src-debug: config.js public
	cp src/index-debug.html public/index.php
	cp src/timer-debug.html public/timer.php	
	rm -rf public/snailcrypt-jsclient
	cp -r src/webapp public/snailcrypt-jsclient


config.js:
	cp config.js src/webapp/


clean:
	rm -rf public

start:
	docker-compose up --build

stop:
	docker-compose down

.PHONY: all config.js src/index.html src/timer.html
