## Install package

-  Install the Prisma CLI 
```
npm install prisma --save-dev
```

- Set up Prisma ORM with the init command of the Prisma CLI
```
npx prisma init --datasource-provider sqlite
```

- Model your data in the Prisma schema
```prisma/schema.prisma
model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  posts Post[]
}

model Post {
  id        Int     @id @default(autoincrement())
  title     String
  content   String?
  published Boolean @default(false)
  author    User    @relation(fields: [authorId], references: [id])
  authorId  Int
}
```

- Run a migration to create your database tables with Prisma Migrate
```
npx prisma migrate dev --name init
```