//GET
const apiUrl = "http://localhost:3002/"
const obtenerUsuario = async (endpoint) => {
    try {
   
      const response = await fetch(apiUrl+endpoint);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('Error al cargar los usuarios:', error);
    } 
  };
 export { obtenerUsuario }

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

//Put
export async function actualizaDatos(id, obj) {
  try {
    //Se utiliza el ID para actualizar lo que este en la API
      const response = await fetch(`http://localhost:3001/productos/${id}`, {
          method: "PUT",
          headers: {
              "Content-type": "application/json"
          },
          body: JSON.stringify(obj)
      })
      let datos = await response.json()
      console.log(datos);
  } catch (error) {
      console.error(error);
  }
}
//Delete
async function deleteProduct(id) {
    try {
        const response = await fetch(`http://localhost:3001/productos/${id}`, {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json', },
        });

        if (!response.ok) {
            //Este permite "Propagar" el error y que se maneje adecuadamente en otras partes del codigo
            throw new Error('Error al eliminar el producto');
        }

        

    } catch (error) {
        console.error('Error al intentar eliminar el producto:', error);
        throw error; // Puedes lanzar el error nuevamente si deseas manejarlo en otro lugar
    }
}
export { deleteProduct };