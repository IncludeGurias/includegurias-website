import { prisma } from "../../../../prisma/config"

export async function GET() {
  const gurias = await prisma.guria
    .findMany({
      include: {
        GuriaTags: {
          include: {
            tag: true,
          },
        },
      },
    })
    .then((gurias: any[]) => {
      return gurias.map(
        (guria: {
          id: any
          name: any
          birthplace: any
          birthdate: any
          deathdate: any
          bio: any
          job: any
          imageUrl: any
          GuriaTags: { tag: { name: any } }[]
        }) => {
          return {
            id: guria.id,
            name: guria.name,
            birthplace: guria.birthplace,
            birthdate: guria.birthdate,
            deathdate: guria.deathdate,
            bio: guria.bio,
            job: guria.job,
            imageUrl: guria.imageUrl,
            tags: guria.GuriaTags.map((guriaTag: { tag: { name: any } }) => guriaTag.tag.name),
          }
        }
      )
    })

  return new Response(JSON.stringify(gurias), {
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
