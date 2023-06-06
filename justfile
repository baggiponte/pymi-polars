set positional-arguments

setup:
    @if ! [[ -d .git ]]; then git init; fi
    npm install

fmt *args="slides.md":
    @npm run format -- "$@"

preview:
    npm run preview

dry-bump:
    cz bump --check-consistency --dry-run

bump: dry-bump
    cz bump
    git push
    git push --tag

alias release := bump
