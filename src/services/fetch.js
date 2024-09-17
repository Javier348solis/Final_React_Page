const apiUrl = "http://localhost:3002/"
const getData = async (endpoint) => {
    try {
   
      const response = await fetch(apiUrl+endpoint);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al cargar los usuarios:', error);
    } 
  };
  export {getData}

  //POST
  const guardarUsuario = async (obj,endpoint) => {
    try {
        const response = await fetch(apiUrl+endpoint, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
        const data = await response.json()
        console.log(data);
        return data
    } catch (error) {
    }
}
export {guardarUsuario}