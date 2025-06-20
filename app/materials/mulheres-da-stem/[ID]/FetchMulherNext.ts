import { womanType } from "types/woman";

interface womanData {
  data: womanType | null;
  imageData: string | null;
}

export default async function FetchMulherNext(ID: string) {
  const decodedName = decodeURIComponent(ID);
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "";
  const guriaUrl = `${SITE_URL}/api/gurias?guria=${decodedName}`;
  var data: womanType | null = null;
  var imageData: string | null = null;

  try {
    const staticData = await fetch(guriaUrl, {
      cache: "force-cache",
      next: { revalidate: 600 },
    });
    data = (await staticData.json()) as womanType;

    if (data) {
      const staticImageData = await fetch(guriaUrl + "&image=true", {
        cache: "force-cache",
        next: {
          revalidate: 9999,
        },
      });
      imageData = (await staticImageData.json()) as string;
    }
  } catch (error) {
    console.error("Error fetching data", error);
  }

  return { data, imageData } as womanData;
}

export async function fetchGuria(ID: string) {
  const decodedName = decodeURIComponent(ID);
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "";
  const guriaUrl = `${SITE_URL}/api/gurias?guria=${decodedName}`;
  var data: womanType | null = null;

  try {
    const staticData = await fetch(guriaUrl, { next: { revalidate: 600 } });
    data = (await staticData.json()) as womanType;
  } catch (error) {
    console.error("Error fetching data", error);
  }

  return data;
}

export async function fetchGuriaImage(ID: string) {
  const decodedName = decodeURIComponent(ID);
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "";
  const guriaUrl = `${SITE_URL}/api/gurias?guria=${decodedName}&image=true`;

  try {
    const imageData = await fetch(guriaUrl, { next: { revalidate: 24480 } });
    const image = (await imageData.json()) as string;
    return image;
  } catch (error) {
    console.error("Error fetching image", error);
  }
}

export async function fetchTags() {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "";
  const tagsUrl = `${SITE_URL}/api/tags`;

  try {
    const tagsData = await fetch(tagsUrl, { next: { revalidate: 24800 } });
    const tags = (await tagsData.json()) as string[];
    return tags;
  } catch (error) {
    console.error("Error fetching tags", error);
  }
}
