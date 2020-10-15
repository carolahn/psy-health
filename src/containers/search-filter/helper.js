export const priceFilter = (psychologists, value) => {
  if (value === "todos") {
    return psychologists;
  }
  const psyByPrice = psychologists.filter((psy) => psy.price === value);

  return psyByPrice;
};

export const genericFilter = (psychologists, value, prop) => {
  if (value === "todos") {
    return psychologists;
  }
  const filter = psychologists.filter((psy) => psy[prop].includes(value));
  return filter;
};

export const sortLength = (prices, ...items) => {
  const arr = [...items];

  if (prices !== "todos" && arr[1].length === 0 && arr[2].length === 0) {
    return [];
  }

  const filtered = arr.filter((item) => item.length > 0);
  if (filtered.length === 0) {
    return [];
  }

  return filtered.sort()[0];
};
