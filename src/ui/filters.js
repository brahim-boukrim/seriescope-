import { filt,langue } from "../data/store.js"


export function makefilter(data,filtre,language){
    const genre=[]
    const lang=[]
    filtre.innerHTML=""
    language.innerHTML=""
    const optionInitial=document.createElement("option")
    optionInitial.value=""
    optionInitial.textContent="tous les genres"
    filtre.append(optionInitial)

    const optionL=document.createElement("option")
    optionL.value=""
    optionL.textContent="tous les langues"
    language.append(optionL)

    data.forEach(element => {
        if(!lang.includes(element.language)){
            const option=document.createElement("option")
                lang.push(element.language)
                option.value=element.language
                option.textContent=element.language
                language.append(option)
                if(langue==element.language){
                    option.selected=true
                }
        }
        element.genres.forEach(elm=>{
            if(!genre.includes(elm)){
                genre.push(elm)
                const option=document.createElement("option")
                option.value=elm
                option.textContent=elm
                filtre.append(option)
                if(filt==elm){
                    option.selected=true
                }
            }
        })
        
    })
}


export function filter(callback,searche,genre=filt,lang=langue){
    return callback(searche,genre,lang)
}