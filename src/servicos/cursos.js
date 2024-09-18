import axios from "axios"

const cursosAPI = axios.create({ baseURL: "https://pixel-cursos.vercel.app/cursos"})

async function getCursos() {
    const response = await cursosAPI.get('/')

    return response.data
}

export {
    getCursos 
}