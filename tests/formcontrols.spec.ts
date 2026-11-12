import{ test, expect} from "@playwright/test";
test("Form Controls", async({page})=>{
    await page.goto("https://qapracticehub.com/");

    await page.locator('[data-testid="nav-selection"]').click();
    await expect(page).toHaveURL("https://qapracticehub.com/#selection");


    //Radio Buttons
     page.locator('[data-testid="gender-male"]');
     page.locator('[data-testid="gender-female"]');
     page.locator('[data-testid="gender-other"]');
    
    const genderMale = page.locator('[data-testid="gender-male"]');
    await genderMale.check();
    await expect(genderMale).toBeChecked();

    const genderFemale = page.locator('[data-testid="gender-female"]');
    await genderFemale.check();
    await expect(genderFemale).toBeChecked();

    await expect(genderMale).not.toBeChecked();

    //Checkboxes
    // page.locator('[data-testid="skill-selenium"]');
    // page.locator('[data-testid="skill-playwright"]');
    // page.locator('[data-testid="skill-cypress"]');
    // page.locator('[data-testid="skill-appium"]');

    // const selenium = page.locator('[data-testid="skill-selenium"]');
    // await selenium.check();
    // await expect(selenium).toBeChecked();

    // const playwright = page.locator('[data-testid="skill-playwright"]');
    // await playwright.check();
    // await expect(playwright).toBeChecked();

    // const cypress = page.locator('[data-testid="skill-cypress"]');
    // await cypress.check();
    // await expect(cypress).toBeChecked();

    // const appium = page.locator('[data-testid="skill-appium"]');
    // await appium.check();
    // await expect(appium).toBeChecked();
    
    //Select Dropdown
    page.locator('[data-testid="country-select"]');
    await page.locator('[data-testid="country-select"]').selectOption("india");
    await expect(page.locator('[data-testid="country-select"]')).toHaveValue("india");

    //Locate Multi Select Listbox
    page.locator('[data-testid="languages-select"]')
    await page.locator('[data-testid="languages-select"]').selectOption("java");
    await expect(page.locator('[data-testid="languages-select"]')).toHaveValue("java");

    //Locate Multi Select Dropdown
    // page.locator('[data-testid="frameworks-multi-select-value"]');

    // await page.locator('[data-testid="framework-selenium"]').check();
    // await expect(page.locator('[data-testid="framework-selenium"]')).toBeChecked();

    // await page.locator('[data-testid="framework-playwright"]').check();
    // await expect(page.locator('[data-testid="framework-playwright"]')).toBeChecked();
    

});