//Ing. Sergio Duarte 2024-11-04, Lunes 04 de noviembre.

import { test, expect } from '@playwright/test';

test('Validando el mensaje de bienvenida a pinol', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await expect(page.getByText('Bienvenido a pinol!', { exact: true })).toBeVisible();
    await page.close();
});

