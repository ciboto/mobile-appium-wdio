import loginPage from '../pageobjects/login.page';

describe('Login tests', () => {
  it('should show error for invalid credentials', async () => {
    await loginPage.login('fakeUser', 'fakePass');
    await expect(loginPage.errorMessage).toBeDisplayed();
  });

  it('should login with valid credentials', async () => {
    await loginPage.login('standard_user', 'secret_sauce');
    await expect($('~test-PRODUCTS')).toBeDisplayed();
  });
});