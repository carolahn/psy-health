import { cpfCnpjMask, phoneMask, crpMask } from "../masks";

describe("Tests cpfCnpjMask function", () => {
  it("cpf", () => {
    const cpf = "06656802958";
    expect(cpfCnpjMask(cpf)).toBe("066.568.029-58");
  });

  it("cnpj", () => {
    const cnpj = "12123123123412 ";
    expect(cpfCnpjMask(cnpj)).toBe("12.123.123/1234-12");
  });
});

describe("Tests phoneMask", () => {
  it("phone", () => {
    const phone = "41987977721";
    expect(phoneMask(phone)).toBe("(41) 98797-7721");
  });
});

describe("Tests crpMask", () => {
  it("", () => {});
});
