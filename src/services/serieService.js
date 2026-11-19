import { api } from "./api.js"

export const getAll = async (searche="",filtre="",lang="") => (await api.get(`/series`,{params:{"name":searche,"genre":filtre,language:lang}})).data

export const getById =async (id)=>(await api.get(`/series/${id}`)).data

export const create=async (obj) =>(await api.post(`/series/`,obj)).data

export const update=async (id,name,genre,language)=>await api.patch(`/series/${id}`,{name,language,genre:genre})

export const remove = async (id)=>await api.delete(`/series/${id}`)

export const reset =async ()=>await api.post(`/reset`)

