import axios from "axios"

const cursosAPI = axios.create({ baseURL: "https://pixel-cursos-serverv2-dd5c274eb09d.herokuapp.com/"})

async function getCursos() {
    const response = await cursosAPI.get('/')

    return response.data
}

export {
    getCursos 
}