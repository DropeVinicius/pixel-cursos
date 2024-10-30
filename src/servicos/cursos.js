import axios from "axios"

const cursosAPI = axios.create({ baseURL: "https://pixel-cursos-serverv2.vercel.app/cursos"})

async function getCursos() {
    const response = await cursosAPI.get('/')

    return response.data
}

export {
    getCursos 
}