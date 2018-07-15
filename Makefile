REPO = ewing-portfolio
NS = ewocker
PORT = 3000

VERSION := $(shell node -p 'require("./package.json").version')

.PHONY: build major minor patch push run default

build:
	docker build --no-cache \
		--build-arg VCS_REF=`git rev-parse --short HEAD` \
	 	--build-arg BUILD_DATE=`date -u +"%Y-%m-%dT%H:%M:%SZ"` \
		--build-arg PKG_VER=$(VERSION) \
		--build-arg PORT=$(PORT) \
		-t $(NS)/$(REPO):$(VERSION) .

major:
	npm version major
	make build

minor:
	npm version minor
	make build

patch:
	npm version patch
	make build

push:
	docker push $(NS)/$(REPO):$(VERSION)

run:
	docker run --rm -it -p $(PORT):$(PORT) $(NS)/$(REPO):$(VERSION)

default: build
