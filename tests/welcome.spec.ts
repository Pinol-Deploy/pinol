//Ing. Sergio Duarte 2024-11-04, Lunes 04 de noviembre.

import { test, expect } from "@playwright/test";

test("Validate Pinol login screen is displayed", async ({ page }) => {
  await page.goto("http://localhost:3000/login");
  await expect(
    page.getByText("Login to Pinol Dashboard", { exact: true }),
  ).toBeVisible();
  await page.close();
});
