
export const priceFilter = (psychologists, value) => {

  
  const psyByPrice = psychologists.filter( psy => psy.price === value)
  return psyByPrice

}

export const genericFilter = (psychologists, value, prop) => {
  const filter =  psychologists.filter( psy => psy[prop].includes(value))
  return filter
} 



export const sortLength = (...items) => {
  
  const arr = [...items]
  const filtered = arr.filter(item => item.length > 0 )
  if (filtered.length === 0) {
   
    return []
  }
  
  return filtered.sort()[0]
}