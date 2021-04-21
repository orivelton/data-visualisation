const request = async ( url = 'https://reference.intellisense.io/thickenernn/v1/referencia' ) => {
  const data = await fetch(url).catch(error => { console.error(error) });
  return await data.json();
};

export { request };