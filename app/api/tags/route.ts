import data from "data/womanData.json"

/**
 * @swagger
 * /api/tags:
 *   get:
 *     summary: Get a list of all tags
 *     description: Returns a list of all tags from the API.
 *     responses:
 *       200:
 *         description: List of tags successfully retrieved
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 */

export async function GET() {
  // return all tags from the data
  const uniqueTags: any = new Set()

  data.forEach((item: any) => {
    item.tags.forEach((tag: any) => {
      uniqueTags.add(tag)
    })
  })

  const tagsData: any = Array.from(uniqueTags)

  return new Response(JSON.stringify(tagsData), {
    headers: { "Content-Type": "application/json" },
  })
}
