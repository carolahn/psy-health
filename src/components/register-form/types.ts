interface Values {
  name?: string;
  email?: string;
  password?: string;
  cpf_cnpj?: string;
  phone?: string;
  crp?: string;
}

interface OnChange {
  target: {
    name: string;
    value: string;
  };
}

export interface RegisterFormProps {
  isPsic: boolean;
  values: Values;
  onSubmit: () => void;
  formErrors: {
    register: any;
    handleSubmit: any;
    errors: any;
  };
  handleOnChange: ({ target: { name, value } }: OnChange) => void;
  handleMaskOnChange: (value: string, key: string) => void;
}
