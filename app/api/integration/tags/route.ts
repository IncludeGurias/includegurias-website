import { prisma } from "../../../../prisma/config"

export async function GET() {
  const tags = await prisma.tag.findMany().then((tags: any[]) => {
    return tags.map((tag: { name: any }) => tag.name).sort(() => Math.random() - 0.5)
  })

  const response = {
    tags: tags,
  }

  return new Response(JSON.stringify(response), {
    headers: { "Content-Type": "application/json" },
  })
}

/*
model Guria {
  id         Int      @id @default(autoincrement())
  name       String
  birthplace String
  birthdate  String
  deathdate  String?
  bio        String
  job        String
  imageUrl   String
  GuriaTags  GuriaTag[]
}

model Tag {
  id        Int       @id @default(autoincrement())
  name      String
  GuriaTags GuriaTag[]
}

model GuriaTag {
  id      Int    @id @default(autoincrement())
  guria   Guria  @relation(fields: [guriaId], references: [id])
  tag     Tag    @relation(fields: [tagId], references: [id])
  guriaId Int
  tagId   Int
}
*/
