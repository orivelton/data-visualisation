const request = async ( url = 'https://reference.intellisense.io/thickenernn/v14/referencia' ) => {
  const data = await fetch(url).catch(error => { 
    console.error(error)
    return { error: true }
  })
  return await data.json();
};

export { request };