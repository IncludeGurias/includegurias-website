/**
 * @swagger
 * /api/gurias:
 *   get:
 *     summary: Get data by Guria name or Tags
 *     parameters:
 *       - name: guria
 *         in: query
 *         description: Name of the Guria (e.g., "adaLovelace")
 *         schema:
 *           type: string
 *       - name: tags
 *         in: query
 *         description: Tags to filter by, pipe-separated (e.g., "programadora|escritora")
 *         schema:
 *           type: string
 *       - name: substring
 *         in: query
 *         description: Whether to perform a substring search (true or false)
 *         schema:
 *           type: boolean
 *       - name: image
 *         in: query
 *         description: Whether to return the image URL (true or false)
 *         schema:
 *           type: boolean
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 name: Ada Lovelace
 *                 job: Programadora
 *                 tags:
 *                   - Programadora
 *                   - Escritora
 *                   - Matemática
 *                 imageUrl: AdaLoveLace
 *                 bio: Ada Lovelace, nascida em 10 de dezembro de 1815 em Londres, Inglaterra, é amplamente reconhecida como a primeira programadora do mundo. Ela trabalhou com o matemático Charles Babbage no mecanismo analítico e criou o primeiro algoritmo destinado a ser processado por uma máquina, uma realização pioneira na história da computação.
 *                 birthDate: 10-12-1815
 *                 deathDate: 27-11-1852
 *                 birthPlace: Londres, Inglaterra
 *
 *       '400':
 *         description: Bad request
 */

import { WOMAN_DATA } from "data"
import WomanImageDict from "utils/cardsDict"
import { removeAccents as normalize, toCamelCase } from "utils/stringFunctions"

export async function GET(request: Request) {
  const { searchParams }: any = new URL(request.url)

  const _checkGuria: any = searchParams.get("guria") || null
  const checkTags: any = searchParams.get("tags") || null

  const checkImage: any = searchParams.get("image") || false
  const checkSubstring: any = searchParams.get("substring") || false

  const checkGuria = _checkGuria ? normalize(_checkGuria) : null

  if (checkGuria) {
    if (checkSubstring) {
      const guria: string = checkGuria.replace(/([A-Z])/g, " $1").replace(/^\w/, (c: string) => c.toUpperCase())
      const name: string = guria.toLowerCase()
      const nameData: any = WOMAN_DATA.filter((item: any) => item.name.toLowerCase().includes(name))

      return new Response(JSON.stringify(nameData), {
        headers: { "Content-Type": "application/json" },
      })
    } else if (checkImage) {
      const guriaImage: any = WomanImageDict[toCamelCase(checkGuria)]

      return new Response(JSON.stringify(guriaImage["src"]), {
        headers: { "Content-Type": "application/json" },
      })
    } else {
      const guria: string = toCamelCase(checkGuria)
      const guriaData: any = WOMAN_DATA.find((item: any) => toCamelCase(item.name) === guria)

      return new Response(JSON.stringify(guriaData), {
        headers: { "Content-Type": "application/json" },
      })
    }
  } else if (checkTags) {
    const listtags: string[] = checkTags
      .split("|")
      .map((tag: string) => tag.replace(/([A-Z])/g, " $1").replace(/^\w/, (c) => c.toUpperCase()))
    const tags: string[] = listtags.map((tag: string) => tag.replace(/Da/g, "da").replace(/De/g, "de"))

    const tagsData: any = WOMAN_DATA.filter((item: any) =>
      tags.every((tag: string) => {
        return item.tags.map((tag: string) => normalize(tag)).includes(normalize(tag))
      })
    )

    return new Response(JSON.stringify(tagsData), {
      headers: { "Content-Type": "application/json" },
    })
  } else {
    return new Response("Missing Parameters in the request", { status: 400 })
  }
}
