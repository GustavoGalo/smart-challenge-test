# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Project Setup

Add an .env file:

```sh
touch .env
```

Create An Docker PostgreSQL container:

```sh
docker run -p 5432:5432 --name=postgresql -e POSTGRES_PASSWORD=123456 -d postgres
```

Add the connection URL to .env file:

```env
DATABASE_URL="postgresql://postgres:123456@localhost:5432/mydb"
```

Install dependencies:

```sh
npm run install
```

Initialize prisma

```sh
npx prisma generate
```

Populate Databse

```sh
npm run seed
```

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.
