const url="https://api.tvmaze.com/shows?page=0"
const library=localStorage.getItem("library")!=null ? JSON.parse(localStorage.getItem("library")):[]
const submit=document.querySelector("#submit")
fetch(url).then(elm=>elm.json()).then(elm=>{
const table=[...library,...elm]
let end=10;
afichier(table.slice(0,end))
const ajouter=(e)=>{
    e.preventDefault()
    let obj={}
    obj.name=nom.value.trim()
    obj.summary=description.value.trim()
    obj.genres=genre.value.split(",").map(elm=>elm.trim())
    if(obj.name.trim()==""||obj.summary.trim()==""||obj.genres.indexOf("")!=-1||obj.genres.some((elm)=>elm.includes(" "))&&photo.value!=""){
         alert("Veuillez remplir tous les champs")
        return
    }

    obj.image={medium:URL.createObjectURL(photo.files[0])}

    table.unshift(obj)

    library.unshift(obj)
    nom.value=""
    description.value=""
    genre.value=""
    photo.value=""
    localStorage.setItem("library",JSON.stringify(library))
    afichier(lookup(filt()))
    
    
}

const filt=()=>{
    last=filtre.value
    if(filtre.value==""){
        return table
    }
    return table.filter(elm=>elm.genres.includes(filtre.value))
}
const lookup=(tab)=>{
    return tab.filter(elm=>elm.name.toLowerCase().includes(search.value.toLowerCase()))
}
filtre.addEventListener("change",()=>{
    afichier(lookup(filt()).slice(0,end))
})
search.addEventListener("input",()=>{
        afichier(lookup(filt()).slice(0,end))

})
submit.addEventListener("click",ajouter)
pages.addEventListener("click",()=>{
    end+=10;
    afichier(lookup(filt()))
})
})
let last;
const show=document.querySelector("#show")
const photo=document.querySelector("#photo")

const pages=document.querySelector("#pages")
const nom=document.querySelector("#nom")
const description=document.querySelector("#description")
const genre=document.querySelector("#genre")
const filtre=document.querySelector("#filtre")
const counter=document.querySelector("#counter")
const search=document.querySelector("#lookup")

const types=[]

const afichier=(tab)=>{
    show.innerHTML=""
    filtre.innerHTML=""
    
    for(let i=0;i<tab.length;i++){
        const div=document.createElement("div")
        div.className="rounded-t-2xl"
        const img=document.createElement("img")
        img.src=`${tab[i].image.medium}`
        img.className="rounded-t-2xl  w-full h-130"
        const text=document.createElement("div")
        text.className="text bg-[#191919] p-4 rounded-b-2xl"
        const title=document.createElement("h3")
        title.className="text-xl"
        title.textContent=tab[i].name
        const badge=document.createElement("div")
        tab[i].genres.forEach(element => {
            const p=document.createElement("p")
            p.textContent=element
            p.className="bg-[#292929] w-fit text-center rounded-xl px-1.5"
            badge.append(p)
            if(!types.includes(element)){
                types.push(element)
            }
        });
        badge.className="flex justify-start gap-2"
        const descri=document.createElement("p")
        descri.className="text-md text-gray-400 line-clamp-1"
        
        descri.innerHTML=tab[i].summary
        
        const a=document.createElement("a")
        if(tab[i].url){
            a.href=tab[i].url
        }
        a.append(img)
        show.append(div)
        div.append(a,text)
        text.append(title,badge,descri)
        console.log(types);
        
    }
    counter.textContent=show.children.length+" séries affichées"
    

        const option1=document.createElement("option")
             option1.value=""
             option1.textContent="tous les genre"
             filtre.prepend(option1)
    
    
    
    types.forEach(elm=>{
        
        const option=document.createElement("option")
        option.value=elm
        option.textContent=elm
        

            filtre.append(option)
        
    })
    document.querySelectorAll("option").forEach(elm=>{
        if(elm.value==last){
            elm.selected=true
        }

    })
}


