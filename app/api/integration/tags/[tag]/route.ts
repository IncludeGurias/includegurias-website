import { NextRequest } from 'next/server'
import { prisma } from 'prisma/config'

export async function GET(
    req: NextRequest,
    context: {
        params: {
            tag: string;
        };
    }
) {
    const gurias = await prisma.tag.findFirst({
        where: {
            name: context.params.tag,
        },
        include: {
            GuriaTags: {
                include: {
                    guria: true
                }
            }
        }
    }).then((tag: { GuriaTags: { guria: { id: any; name: any; birthplace: any; birthdate: any; deathdate: any; bio: any; job: any; imageUrl: any; } }[]; }) => {
        return tag.GuriaTags.map((guriaTag: { guria: { id: any; name: any; birthplace: any; birthdate: any; deathdate: any; bio: any; job: any; imageUrl: any; }; }) => {
            return {
                id: guriaTag.guria.id,
                name: guriaTag.guria.name,
                birthplace: guriaTag.guria.birthplace,
                birthdate: guriaTag.guria.birthdate,
                deathdate: guriaTag.guria.deathdate,
                bio: guriaTag.guria.bio,
                job: guriaTag.guria.job,
                imageUrl: guriaTag.guria.imageUrl,
            }
        }).sort(() => Math.random() - 0.5)
    })

    return new Response(JSON.stringify(gurias), {
        headers: { 'Content-Type': 'application/json' },
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