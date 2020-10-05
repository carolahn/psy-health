

export const priceFilter = (psychologists, value) => {
  const objValue = JSON.parse(value)
  console.log(objValue)
  const psyByPrice = psychologists.filter( psy => parseInt(psy.price) > objValue.low && psy.price < objValue.high)
  return psyByPrice

}

export const genericFilter = (psychologists, value, prop) => {
  const filter =  psychologists.filter( psy => psy[prop].includes(value))
  return filter
} 


export const uniqueEntries = (array, prop) => {
  const arr = array.map(arr => arr[prop])
  const newSet = new Set(arr)
  const newArray = Array.from(newSet)
  return newArray[0].split(', ')
}