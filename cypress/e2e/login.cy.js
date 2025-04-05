describe('Проверка авторизации', function () {
  it('Верный логин и верный пароль', function () {
    cy.visit('https://login.qa.studio/'); // зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // proverka color button

    cy.get('#mail').type('german@dolnikov.ru');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click(); // pressed the button

    cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю что после авторизации вижу текст
    cy.get('#messageHeader').should('be.visible'); // text viden polzovately
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверка что мы видим крестик
  });
});

it('Верный логин и не верный пароль', function () {
  cy.visit('https://login.qa.studio/'); // зашли на сайт
  cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // proverka color button

  cy.get('#mail').type('german@dolnikov.ru');
  cy.get('#pass').type('iLoveqastudio7');
  cy.get('#loginButton').click(); // pressed the button

  cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю что после авторизации вижу текст
  cy.get('#messageHeader').should('be.visible'); // text viden polzovately
  cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверка что мы видим крестик
});
it('Проверка что в логине есть @', function () {
  cy.visit('https://login.qa.studio/'); // open web
  cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // proverka color button

  cy.get('#mail').type('germandolnikov.ru'); // vvel login bez @
  cy.get('#pass').type('iLoveqastudio1');
  cy.get('#loginButton').click(); // pressed the button

  cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверяю что после авторизации вижу текст
  cy.get('#messageHeader').should('be.visible'); // text viden polzovately
  cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверка что мы видим крестик
});
it('Проверка восстановления пароля', function () {
  cy.visit('https://login.qa.studio/'); // зашли на сайт
  cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // proverka color button

  cy.get('#forgotEmailButton').click(); // нажимаю восстановить пароль

  cy.get('#mailForgot').type('german@dolnikov.ru'); // ввел почту для восстановления
  cy.get('#restoreEmailButton').click(); // нажала отправить код

  cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверяю на совпадание текста
  cy.get('#messageHeader').should('be.visible'); // text viden polzovately
  cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверка что мы видим крестик
});

it('Не верный логин и правильный пароль', function () {
  cy.visit('https://login.qa.studio/'); // зашли на сайт
  cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // proverka color button

  cy.get('#mail').type('german@dolnikovvv.ru');
  cy.get('#pass').type('iLoveqastudio7');
  cy.get('#loginButton').click(); // pressed the button

  cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю что после авторизации вижу текст
  cy.get('#messageHeader').should('be.visible'); // text viden polzovately
  cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверка что мы видим крестик
});

it('Приведение к строчным буквам в логине', function () {
  cy.visit('https://login.qa.studio/'); // зашли на сайт
  cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // proverka color button

  cy.get('#mail').type('GerMan@Dolnikov.ru');
  cy.get('#loginButton').click(); // pressed the button

  cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю что после авторизации вижу текст
  cy.get('#messageHeader').should('be.visible'); // text viden polzovately
  cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверка что мы видим крестик
});
