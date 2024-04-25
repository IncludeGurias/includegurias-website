import { expect, test } from "@playwright/test"

test("has header", async ({ page }) => {
  await page.goto("./")

  const header = await page.waitForSelector("#header")
  expect(header).not.toBeNull()
})

test("has footer", async ({ page }) => {
  await page.goto("./")

  const footer = await page.waitForSelector("#footer")
  expect(footer).not.toBeNull()
})
