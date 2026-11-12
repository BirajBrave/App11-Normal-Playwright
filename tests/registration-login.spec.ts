import{ test, expect } from '@playwright/test';
test("User Registration", async({ page })=>{
    await page.goto("https://qapracticehub.com/");
    
    await page.locator('[data-testid="nav-forms"]').click();
    await expect(page).toHaveURL("https://qapracticehub.com/#forms");

    await expect(page.getByRole("heading", {name: "Login & Registration Forms"})).toBeVisible();

    //Task 1
    //Registration Form
    const firstName = page.locator('[data-testid="reg-firstname"]');
    const lastName = page.locator('[data-testid="reg-lastname"]');
    const email = page.locator('[data-testid="reg-email"]');
    const country = page.locator('[data-testid="reg-country"]');

    await firstName.fill("Guddu");
    await lastName.fill("Mishra");
    await email.fill("guddu@gmail.com");
    await country.selectOption("in")
    
    await page.locator('[data-testid="register-submit"]').click();

    await expect(page.locator('[data-testid="register-message"]')).toHaveText("Registration successful for Guddu Mishra!");

    await page.locator('[data-testid="register-clear"]').click();
    await expect(page.locator('[data-testid="reg-firstname"]')).toHaveValue("");
    await expect(page.locator('[data-testid="reg-lastname"]')).toHaveValue("");
    await expect(page.locator('[data-testid="reg-email"]')).toHaveValue("");
    await expect(page.locator('[data-testid="reg-country"]')).toHaveValue("");

});

//Login Form
test("User Login", async({ page })=>{
    await page.goto("https://qapracticehub.com/");
    await page.locator('[data-testid="nav-forms"]').click();
    await expect(page).toHaveURL("https://qapracticehub.com/#forms");

    const userName = page.locator('[data-testid="login-username"]');
    const password = page.locator('[data-testid="login-password"]');

    await userName.fill("tester");
    await password.fill("password123");

    await page.locator('[data-testid="login-submit"]').click();

    await expect(page.locator('[data-testid="login-message"]')).toHaveText("Login successful! Welcome, tester."); 

});

