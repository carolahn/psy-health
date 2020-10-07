
export const priceFilter = (psychologists, value) => {
  const objValue = JSON.parse(value)
  
  const psyByPrice = psychologists.filter( psy => parseInt(psy.price) > objValue.low && psy.price < objValue.high)
  return psyByPrice

}

export const genericFilter = (psychologists, value, prop) => {
  const filter =  psychologists.filter( psy => psy[prop].includes(...value))
  return filter
} 


export const uniqueEntries = (array, prop) => {
  const arr = array.flatMap(arr => arr[prop].split(', '))
  const newSet = new Set(arr)
  const newArray = Array.from(newSet)
  
  return newArray.sort()
}

export const sortLength = (...items) => {
  const arr = [...items]
  const filtered = arr.filter(item => item.length > 0 )
  return filtered.sort()[0]
}