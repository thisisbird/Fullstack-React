npm init -y
node -v
yarn -v
yarn add -D @types/node typescript
yarn add -D ts-node ??

package.json的"scripts"加入 "start":"ts-node src/index.ts",
yarn start 會執行"ts-node src/index.ts"的檔案

package.json的"scripts"加入 "watch":"tsc -w",
yarn watch 會新增dist,佈屬用

npx tsconfig.json ??

yarn add @mikro-orm/cli @mikro-orm/core @mikro-orm/migrations @mikro-orm/postgresql pg

npx mikro-orm migration:create

yarn add express apollo-server-express graphql type-graphql
yarn -D @types/express ??

http://localhost:4000/graphql