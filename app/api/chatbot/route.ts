import data from "data/womanData.json";

/**
 * @swagger
 * /api/chatbot:
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

export async function GET(request: Request) {
  const { searchParams }: any = new URL(request.url);
  const tagTitle: any = searchParams.get("tag");

  const uniqueTags: any = new Set();
  data.forEach((item: any) => {
    item.tags.forEach((tag: any) => {
      if (tag.indexOf(" ") === -1) uniqueTags.add(tag);
    });
  });
  const tagsData: any = Array.from(uniqueTags);

  if (!tagTitle) {
    console.log("no tags, return all tags");
    return new Response(
      JSON.stringify({
        areas: tagsData.sort(() => Math.random() - 0.5).slice(0, 10),
      }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  } else {
    console.log("tag found, return data");
    console.log(tagTitle);
    try {
      const tagGurias: any = data
        .filter((item: any) => {
          return item.tags.includes(tagTitle);
        })
        .map((item: any) => {
          return {
            name: item.name,
            query: item.imageUrl,
          };
        }, []);

      const randomGurias: any = tagGurias
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

      const responseGurias = randomGurias.map((item: any) => item.name);
      const responseGuriasQuery = randomGurias.map((item: any) => item.query);

      return new Response(
        JSON.stringify({
          gurias: responseGurias,
          guriasQuery: responseGuriasQuery,
        }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
    } catch (error) {
      console.log(error);
      return new Response(JSON.stringify(error), {
        headers: { "Content-Type": "application/json" },
      });
    }
  }
}
