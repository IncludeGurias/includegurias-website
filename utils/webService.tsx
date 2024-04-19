import { womanType } from "types/womanType"
import axios from "axios"

export async function fetchGurias() {
  try {
    const data = await axios.get("/api/gurias?guria=%20&substring=true")
    return data.data as womanType[]
  } catch (error) {
    return []
  }
}

export async function fetchGuria(name: string) {
  try {
    const data = await axios.get(`/api/gurias?guria=${name}`)
    console.log("data", data.data, "for", name)
    return data.data
  } catch (error) {
    console.error(error)
    return []
  }
}

export async function fetchGuriasByTag(tag: any) {
  try {
    const data = await axios.get(`/api/gurias?tag=${tag}`)
    return data.data
  } catch (error) {
    return []
  }
}

export async function fetchTags() {
  try {
    const data = await axios.get("/api/tags")
    return data.data
  } catch (error) {
    return []
  }
}

export async function fetchImage(guria: string) {
  try {
    const data = await axios.get(`/api/gurias?guria=${guria}&image=true`)
    return data.data
  } catch (error) {
    return []
  }
}
