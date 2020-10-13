import axios from "axios";

export const GET_PSY = "GET_PSY";
export const FILTERED_PSY = "FILTERED_PSY";
export const FILTER_VALUES = "FILTER_VALUES";

export const filterPsyList = (filtered) => ({
  type: FILTERED_PSY,
  filtered,
});

const addToPsyList = (psyList) => ({
  type: GET_PSY,
  psyList,
});

const filterValues = (fValues) => ({
  type: FILTER_VALUES,
  filterValues: {
    exp: fValues[0],
    lang: fValues[1],
    price: fValues[2],

  },
});

export const requestPsy = () => async (dispatch) => {
  const request = await axios.get("http://psy-health-api.herokuapp.com/users");

  const psy = request.data.filter((user) => user.is_psic);

  dispatch(addToPsyList(psy));
};

export const getUniqueEntries = (array, propArr) => (dispatch) => {
  const arrOfProps = propArr.map((prop) => {
    const filterUndefined = array.filter((arr) => arr[prop] !== undefined);

    const arr = filterUndefined.flatMap((arr) =>
      arr[prop] !== undefined && typeof arr[prop] === "string" ? arr[prop].split(", ") : arr[prop]
    );

    const newSet = new Set(arr);
    const newArray = Array.from(newSet);
    const lowerCaseArr = newArray.map(item => typeof item === 'string' ? item.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase() : item )
    console.log(lowerCaseArr) 
    newArray.sort((a, b) => a - b).unshift("todos");

    return newArray;
  });

  dispatch(filterValues(arrOfProps));
};
