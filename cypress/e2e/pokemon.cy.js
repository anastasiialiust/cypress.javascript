describe('Проверка покупки нового аватара', function () {
  it('Тест на покупку нового аватара для тренера', function () {
    cy.visit('https://pokemonbattle.ru/'); // заходим на сайт
    cy.get('input[id="k_email"]').type('user_login'); // вводим логин
    cy.get('input[id="k_password"]').type('user_password'); // вводим пароль
    cy.get('button[type="submit"]').click(); // нажимаем кнопку подтвердить
    cy.wait(5000);
    cy.get('.header_card_trainer').click(); // нажимаем в шапке на аву тренера
    cy.wait(5000);
    cy.get('.k_mobile > :nth-child(5) > #dropdown > img').click(); // нажимаем кнопку смена аватара
    cy.get('.available > button').first().click(); // нажимаем купить доступного аватара
    cy.get('.card_number').type('4620869113632996'); // вводим номер карты
    cy.get('.card_csv').type('125'); // вводим CVV карты
    cy.get('.card_date').type('1226'); // вводим срок действия карты
    cy.get('.card_name').type('Anastasiia'); // вводим имя владельца действия карты
    cy.get(
      '.style_1_base_button_payment_body > .style_1_base_button_payment'
    ).click();
    cy.get('.threeds_number').type('56456'); // вводим код подтверждения СМС
    cy.get(
      '.style_1_base_button_payment_body > .style_1_base_button_payment'
    ).click(); // нажимаем кнопку оплатить
    су.wait(2000);
    cy.contains('Покупка прошла успешно').should('be.visible'); // проверяем наличие сообщения об успешной покупке
  });
});
