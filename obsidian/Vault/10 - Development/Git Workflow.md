# Git Workflow

## Current desired repository state

The project uses `main` as the primary branch. The repository history
was rebuilt so previous commits are preserved while the new source
structure sits on top.

## Recommended daily workflow

``` text
git switch main
git pull
# create a feature branch for meaningful work
git switch -c feature/<short-name>
# edit/test
git add -A
git commit -m "Describe the change"
git push -u origin feature/<short-name>
```

Merge reviewed work back into `main`. Small personal changes can be
committed directly if desired, but feature branches reduce risk.

## Ignore macOS metadata

Ensure `.gitignore` contains `.DS_Store` and `__MACOSX/`.

## Commit principle

Keep commits focused: one meaningful change per commit where practical.
