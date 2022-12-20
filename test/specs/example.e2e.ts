import LoginPage from "../pageobjects/login.page";
import SecurePage from "../pageobjects/secure.page";
import { logger } from "../../configLogger";

describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    logger.debug(`Move to login application`);
    await LoginPage.open();
    await LoginPage.login("tomsmith", "SuperSecretPassword!");
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining("You logged into a secure area!");
  });
});
