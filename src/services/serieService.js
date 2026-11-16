import { api } from "./api.js"

export const getAll = async () => (await api.get(`/series`)).data

export const getById =async (id)=>(await api.get(`/series/${id}`)).data

export const create=async ( name, language, genre ) =>(await api.post(`/series/`,{name,language,genres: genre}))

export const update=async (id,name,genre,language)=>await api.patch(`/series/${id}`,{name,language,genre:genre})

export const del = async (id)=>await api.delete(`/series/${id}`)

export const reset =async ()=>await api.post(`/reset`)


