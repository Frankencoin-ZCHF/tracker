# Tracker

Ponder needs .env.local
check out ".env.local" file to adjust environment. For SQLite, REMOVE the DATABASE_URL line.

```
## Mainnet RPC URL used for fetching blockchain data. Alchemy is recommended.
PONDER_RPC_URL_1=https://eth-mainnet.g.alchemy.com/v2/...

## (Optional) Postgres database URL. If not provided, SQLite will be used. DELETE IF YOU DONT USE IT
DATABASE_URL=...
```

# How to run?

```
yarn install

nano .env.local --> add RPC URL

yarn run dev
```
