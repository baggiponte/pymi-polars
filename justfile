bump:
    cz bump --check-consistency 
    git push
    git push --tag

dry-bump:
    cz bump --check-consistency --dry-run
