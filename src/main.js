import { getAll ,getById,create,reset,update,remove} from "./services/serieService.js"
import { afichier } from "./ui/cards.js"
import { makefilter,filter } from "./ui/filters.js"
const show=document.querySelector("#show")
const empty=document.querySelector("#empty")
const searche=document.querySelector("#lookup")
const genre=document.querySelector("#filtre")
const language=document.querySelector("#language")




async function init() {
    const data=await filter(getAll,searche.value)
    afichier(data,show,empty)
    makefilter(await getAll(),filtre,language)
    genre.addEventListener("change",async ()=>{
        const dataFiltered=await filter(getAll,searche.value,genre.value,language.value)
        afichier(dataFiltered,show,empty)
        localStorage.setItem("filtre",genre.value)
        localStorage.setItem("language",language.value)
    })
    language.addEventListener("change",async ()=>{
        const dataFiltered=await filter(getAll,searche.value,genre.value,language.value)
        afichier(dataFiltered,show,empty)
        localStorage.setItem("filtre",genre.value)
        localStorage.setItem("language",language.value)
    })
    searche.addEventListener("input",async ()=>{
        const dataFiltered=await filter(getAll,searche.value,genre.value,language.value)
        afichier(dataFiltered,show,empty)
        localStorage.setItem("filtre",genre.value)
        localStorage.setItem("language",language.value)
    })
    
    
}
init()
