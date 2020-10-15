beforeEach(() => {
  cy.viewport(1440, 990);
});

context("Register Page Good Path", () => {
  it("register patient with valid credentials", () => {
    cy.visit("http://localhost:3000/cadastro");

    cy.contains("Cadastro");
    cy.contains("Sou Paciente");
    cy.contains("Sou Psicólogo");
    cy.contains("Register");
    cy.contains("Faça o login!");

    const randomEmail = Math.round(Math.random() * 100000);

    cy.get('[placeholder="Nome e sobrenome"]').type("Cassiano B");
    cy.get('[placeholder="E-mail"]').type(`${randomEmail}@gmail.com`);
    cy.get('[placeholder="Confirmar E-mail"]').type(`${randomEmail}@gmail.com`);
    cy.get('[maxlength="15"]').type("41988792563");
    cy.get('[maxlength="18"]').type("05264398655");
    cy.get('[placeholder="Senha"]').type("123456");
    cy.get('[placeholder="Confirmar Senha"]').type("123456");

    cy.get('[maxlength="15"]').should("have.value", "(41) 98879-2563");
    cy.get('[maxlength="18"]').should("have.value", "052.643.986-55");

    cy.get(".sc-kfYqjs").click();

    cy.get(".ant-notification-notice").contains("Cadastro completo!");

    cy.url().should("eq", "http://localhost:3000/");
  });

  it("register psic with valid credentials", () => {
    cy.visit("http://localhost:3000/cadastro/psi");

    const randomEmail = Math.round(Math.random() * 100000);

    cy.get('[placeholder="Nome e sobrenome"]').type("Cassiano B");
    cy.get('[placeholder="E-mail"]').type(`${randomEmail}@gmail.com`);
    cy.get('[placeholder="Confirmar E-mail"]').type(`${randomEmail}@gmail.com`);
    cy.get('[maxlength="15"]').type("41988792563");
    cy.get('[maxlength="18"]').type("05264398655");
    cy.get('[maxlength="8"]').type("4658961");
    cy.get('[placeholder="Senha"]').type("123456");
    cy.get('[placeholder="Confirmar Senha"]').type("123456");

    cy.get('[maxlength="15"]').should("have.value", "(41) 98879-2563");
    cy.get('[maxlength="18"]').should("have.value", "052.643.986-55");

    cy.get(".sc-kfYqjs").click();

    cy.get(".ant-notification-notice").contains("Cadastro completo!");
    cy.url().should("eq", "http://localhost:3000/psi");
  });
});

context("Register Page Bad Path", () => {
  it("register patient with unvalid credentials", () => {
    cy.visit("http://localhost:3000/cadastro");

    cy.contains("Cadastro");
    cy.contains("Sou Paciente");
    cy.contains("Sou Psicólogo");
    cy.contains("Register");
    cy.contains("Faça o login!");

    cy.get('[placeholder="Nome e sobrenome"]').type("Cassiano 1");
    cy.get('[placeholder="E-mail"]').type(`tricecautopo@gmail.com`);
    cy.get('[placeholder="Confirmar E-mail"]').type(`tricecautopo@gmail.com`);
    cy.get('[maxlength="15"]').type("41887925");
    cy.get('[maxlength="18"]').type("05268655");
    cy.get('[placeholder="Senha"]').type("136");
    cy.get('[placeholder="Confirmar Senha"]').type("345");

    cy.get(".sc-kfYqjs").click();

    cy.url().should("eq", "http://localhost:3000/cadastro");

    cy.get('[placeholder="Nome e sobrenome"]').should(
      "have.css",
      "border",
      "2px solid rgb(248, 130, 100)"
    );
    cy.get('[maxlength="15"]').should("have.css", "border", "2px solid rgb(248, 130, 100)");
    cy.get('[maxlength="18"]').should("have.css", "border", "2px solid rgb(248, 130, 100)");
    cy.get('[placeholder="Senha"]').should("have.css", "border", "2px solid rgb(248, 130, 100)");
    cy.get('[placeholder="Confirmar Senha"]').should(
      "have.css",
      "border",
      "2px solid rgb(248, 130, 100)"
    );

    cy.get('[placeholder="Nome e sobrenome"]').clear().type("Cassiano B");
    cy.get('[maxlength="15"]').clear().type("41988792500");
    cy.get('[maxlength="18"]').clear().type("05268655000");
    cy.get('[placeholder="Senha"]').clear().type("1360");
    cy.get('[placeholder="Confirmar Senha"]').clear().type("1360");

    cy.get(".sc-kfYqjs").click();

    cy.get(".ant-notification-notice").contains("Alguma coisa deu errado!");

    cy.get('[placeholder="E-mail"]').should("have.css", "border", "2px solid rgb(248, 130, 100)");
    cy.get('[placeholder="Confirmar E-mail"]').should(
      "have.css",
      "border",
      "2px solid rgb(248, 130, 100)"
    );
  });

  it("register patient with unvalid credentials", () => {
    cy.visit("http://localhost:3000/cadastro/psi");

    cy.contains("Cadastro");
    cy.contains("Sou Paciente");
    cy.contains("Sou Psicólogo");
    cy.contains("Register");
    cy.contains("Faça o login!");

    cy.get('[placeholder="Nome e sobrenome"]').type("Cassiano 1");
    cy.get('[placeholder="E-mail"]').type(`tricecautopo@gmail.com`);
    cy.get('[placeholder="Confirmar E-mail"]').type(`tricecautopo@gmail.com`);
    cy.get('[maxlength="15"]').type("41887925");
    cy.get('[maxlength="18"]').type("05268655");
    cy.get('[maxlength="8"]').type("46581");
    cy.get('[placeholder="Senha"]').type("136");
    cy.get('[placeholder="Confirmar Senha"]').type("345");

    cy.get(".sc-kfYqjs").click();

    cy.url().should("eq", "http://localhost:3000/cadastro/psi");

    cy.get('[placeholder="Nome e sobrenome"]').should(
      "have.css",
      "border",
      "2px solid rgb(248, 130, 100)"
    );
    cy.get('[maxlength="15"]').should("have.css", "border", "2px solid rgb(248, 130, 100)");
    cy.get('[maxlength="18"]').should("have.css", "border", "2px solid rgb(248, 130, 100)");
    cy.get('[maxlength="8"]').should("have.css", "border", "2px solid rgb(248, 130, 100)");
    cy.get('[placeholder="Senha"]').should("have.css", "border", "2px solid rgb(248, 130, 100)");
    cy.get('[placeholder="Confirmar Senha"]').should(
      "have.css",
      "border",
      "2px solid rgb(248, 130, 100)"
    );

    cy.get('[placeholder="Nome e sobrenome"]').clear().type("Cassiano B");
    cy.get('[maxlength="15"]').clear().type("41988792500");
    cy.get('[maxlength="18"]').clear().type("05268655000");
    cy.get('[maxlength="8"]').clear().type("1234567");
    cy.get('[placeholder="Senha"]').clear().type("1360");
    cy.get('[placeholder="Confirmar Senha"]').clear().type("1360");

    cy.get(".sc-kfYqjs").click();

    cy.get(".ant-notification-notice").contains("Alguma coisa deu errado!");

    cy.get('[placeholder="E-mail"]').should("have.css", "border", "2px solid rgb(248, 130, 100)");
    cy.get('[placeholder="Confirmar E-mail"]').should(
      "have.css",
      "border",
      "2px solid rgb(248, 130, 100)"
    );
  });
});
