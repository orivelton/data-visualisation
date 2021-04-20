const totalValues = (values) => values.reduce((a, b) => a + b, 0)

const filterValues = (data) => {
  return Object.keys(data).filter(item => item.substring(0,3) === 'TK1');
}

export { totalValues, filterValues };