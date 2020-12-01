
#--------------------------------------------------
# Colors
#--------------------------------------------------

TITLE     = \033[1;42m
CAPTION   = \033[1;44m
BOLD      = \033[1;34m
LABEL     = \033[1;32m
DANGER    = \033[31m
SUCCESS   = \033[32m
WARNING   = \033[33m
SECONDARY = \033[34m
INFO      = \033[35m
PRIMARY   = \033[36m
DEFAULT   = \033[0m
NL        = \033[0m\n

#--------------------------------------------------
# Local OS
#--------------------------------------------------

# Local operating system (Windows_NT, Darwin, Linux)
ifeq ($(OS),Windows_NT)
	SYSTEM=$(OS)
else
	SYSTEM=$(shell uname -s)
endif

## Build for production with minification
build:
	@printf "${INFO}rm -rf ./dist${NL}"
	@rm -rf ./dist
	@if [ -f yarn.lock ]; then \
		printf "${INFO}yarn build${NL}"; \
		yarn build; \
	else \
		printf "${INFO}npm run build${NL}"; \
		npm run build; \
	fi

## Deploy to gh-pages
deploy: build
	( \
		printf "${INFO}cd dist${NL}"; \
		cd dist; \
		printf "${INFO}git init${NL}"; \
		git init; \
		printf "${INFO}git add -A${NL}"; \
		git add -A; \
		printf "${INFO}git commit -m "$(shell date '+%Y-%m-%d %H:%M:%S')"${NL}"; \
		git commit -m "$(shell date '+%Y-%m-%d %H:%M:%S')"; \
		printf "${INFO}git push -f git@github.com:flazzarotto/badnews-quiz.git master:gh-pages${NL}"; \
		git push -f git@github.com:flazzarotto/badnews-quiz.git master:gh-pages; \
	)
