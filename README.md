# TypeScript composite project demo
This is a minimal composite project to demo an issue where the auto-import stop working without explicitly including the referenced projects in the composite project's `tsconfig.include`.

If you open `app/main/Play.tsx`, and delete the first line, and try to auto import the `useCards` vscode doesn't offer you anything.

We can solve this by including `app/shared/**/*` in `app/main/tsconfig.include` but that will break the incremental builds, and when `main` is builds it will always re-build the `shared` project. :|
