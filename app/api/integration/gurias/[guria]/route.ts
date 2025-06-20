import { NextRequest } from "next/server";
import { prisma } from "../../../../../prisma/config";

export async function GET(
  req: NextRequest,
  context: {
    params: {
      guria: string;
    };
  }
) {
  const guria = await prisma.guria
    .findFirst({
      where: {
        name: context.params.guria,
      },
      include: {
        GuriaTags: {
          include: {
            tag: true,
          },
        },
      },
    })
    .then((guria) => {
      if (!guria) return null;
      return {
        id: guria.id,
        name: guria.name,
        birthplace: guria.birthplace,
        birthdate: guria.birthdate,
        deathdate: guria.deathdate,
        bio: guria.bio,
        job: guria.job,
        imageUrl: guria.imageUrl,
        tags: guria.GuriaTags.map(
          (guriaTag: { tag: { name: any } }) => guriaTag.tag.name
        ),
      };
    });

  if (!guria) {
    return new Response(JSON.stringify({ error: "Guria não encontrada" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify(guria), {
    headers: { "Content-Type": "application/json" },
  });
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
