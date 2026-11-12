import{ test, expect } from '@playwright/test';
test("Online Shopping", async({page})=>{

    await page.goto("https://qapracticehub.com/");

    await page.locator('[data-testid="nav-shopping"]').click();
    await expect(page).toHaveURL("https://qapracticehub.com/#shopping");

    await expect(page.getByRole("heading", {name: "Online Shopping"})).toBeVisible();
    await page.locator('[data-testid="shop-search"]').fill("Laptop");
    await expect(page.locator('[data-testid="shop-results-count"]')).toHaveText("Showing 1 product");
    await expect(page.locator('[data-product-name="Laptop"]')).toBeVisible();

    await page.locator('[data-testid="shop-category"]').selectOption("Accessories");
    await expect(page.locator('[data-testid="shop-category"]')).toHaveValue("Accessories");

    await page.locator('[data-testid="shop-add-to-cart"]').click();
    await expect(page.locator('[data-testid="shop-cart-count"]')).toHaveText("1");

    await expect(page.locator('[data-testid="shop-cart-total"]')).toHaveText("$42.00");

    //await page.locator('[data-testid="shop-clear-cart"]').click();
    //await expect(page.locator('[data-testid="shop-cart-empty"]')).toHaveText("Your cart is empty.");

    await page.locator('[data-testid="shop-checkout"]').click();

    await expect(page.locator('[data-testid="shop-message"]')).toHaveText("Checkout successful: Laptop ×1 — Total $42.00");
})