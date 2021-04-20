const filterValues = data => Object.keys(data).filter(item => item.substring(0,3) === 'TK1');

const adapter = data => filterValues(data).map(item => ({ name: item, value: data[item].values}))

const formatStr = str => str.replaceAll('_', ' ');

export { filterValues, formatStr, adapter };