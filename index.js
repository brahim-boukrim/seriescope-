const url="https://api.tvmaze.com/shows?page=0"
const library=localStorage.getItem("library")!=null ? JSON.parse(localStorage.getItem("library")):[]
const submit=document.querySelector("#submit")
fetch(url).then(elm=>elm.json()).then(elm=>{
const table=[...library,...elm]
afichier(table,0)
const ajouter=(e)=>{
    e.preventDefault()
    let obj={}
    obj.name=nom.value 
    obj.summary=description.value
    obj.genres=genre.value.split(",").map(elm=>elm.trim())
    obj.image={original:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKCVOBum3fzI4RBr4iGtSWFihXMSP9kSuf9aSeXJUk1A&s=10"}

    table.unshift(obj)

    library.unshift(obj)
    localStorage.setItem("library",JSON.stringify(library))
    afichier(table,0)
    
    
}
submit.addEventListener("click",ajouter)
})
const show=document.querySelector("#show")
const pages=document.querySelector("#pages")
const nom=document.querySelector("#nom")
const description=document.querySelector("#description")
const genre=document.querySelector("#genre")

const afichier=(tab,i)=>{
    show.innerHTML=""
    let end=i+20
    for(i;i<end;i++){
        const div=document.createElement("div")
        div.className="rounded-t-2xl"
        const img=document.createElement("img")
        img.src=`${tab[i].image.original}`
        img.className="rounded-t-2xl  w-full h-70"
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
        });
        badge.className="flex justify-start gap-2"
        const descri=document.createElement("p")
        descri.className="text-md text-gray-400"
        let index=tab[i].summary.indexOf("</b>")
        if(index!=-1&&tab[i].summary[1]=="b"){
            descri.textContent=tab[i].summary.slice(index+4,60).replace("</p>","")+"..."
        }
        else{
            descri.textContent=tab[i].summary.slice(3,55).replace("</p>","").replace("<b>","").replace("</b>","") +"..."
        }
        
        show.append(div)
        div.append(img,text)
        text.append(title,badge,descri)
    }
}


