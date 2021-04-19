const totalValues = (values) => {
  if(!values) return;
  let result = values.filter(item => item).reduce((a, b) => a + b, 0)
  
  return result;
}

export { totalValues };