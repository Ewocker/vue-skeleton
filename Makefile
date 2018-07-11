VERSION ?= 0.0.1
IMAGE_VERSION ?= 1

REPO = vue-skeleton
NS = ewocker
PORT = 4000

IMAGE_NAME=$(NS)/$(REPO):$(VERSION)-$(IMAGE_VERSION)

.PHONY: build push run default

build:
	docker build --no-cache \
		--build-arg VCS_REF=`git rev-parse --short HEAD` \
	 	--build-arg BUILD_DATE=`date -u +"%Y-%m-%dT%H:%M:%SZ"` \
		--build-arg PKG_VER=$(VERSION) \
		--build-arg PORT=${PORT} \
		-t $(IMAGE_NAME) .

push:
	docker push $(IMAGE_NAME)

run:
	docker run --rm -it -p $(PORT):$(PORT) $(IMAGE_NAME)

default: build
