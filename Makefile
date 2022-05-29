all:
	mkdir -p public/
	cp -r src/* public/

	mkdir -p public/lib

	mkdir -p public/lib/openui5
	cp -r node_modules/@openui5/sap.m/src/*		          public/lib/openui5
	cp -r node_modules/@openui5/sap.ui.core/src/*	      public/lib/openui5
	cp -r node_modules/@openui5/sap.ui.layout/src/*       public/lib/openui5
	cp -r node_modules/@openui5/sap.ui.unified/src/*      public/lib/openui5
	cp -r node_modules/@openui5/themelib_sap_belize/src/* public/lib/openui5

	mkdir -p public/lib/JSEncrypt
	cp -r node_modules/jsencrypt/bin/*                             public/lib/JSEncrypt

clean:
	rm -rf public

start:
	podman-compose up --build

stop:
	podman-compose down

.PHONY: all
