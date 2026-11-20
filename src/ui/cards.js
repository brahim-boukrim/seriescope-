import { toggle } from "../data/store.js"
import { update,remove } from "../services/serieService.js"
const counter=document.querySelector("#counter")
const show=document.querySelector("#show")
const empty=document.querySelector("#empty")
const nom=document.querySelector("#nom")
const description=document.querySelector("#description")
const genre=document.querySelector("#genre")
const lang=document.querySelector("#lang")
const submit=document.querySelector("#submit")


export const afichier=(tab)=>{
    counter.textContent=tab.length+" séries affichées"
    show.innerHTML="" 
    empty.hidden=true   

    
    for(let i=0;i<tab.length;i++){
        const div=document.createElement("div")
        div.className="rounded-t-2xl"
        const img=document.createElement("img")
        if(tab[i].image!=null){
            img.src=`${tab[i].image.medium}`
        }
        else{
            img.src="https://cdn.discordapp.com/attachments/1558131398555205753/1571845803633287168/Drapeau_img.png?ex=6b002b7b&is=6afed9fb&hm=7737d18cefd5a0761784a0aa63f638ce00bc6ac166e9e0bb020675bc2f63113f&"
        }
        img.className="rounded-t-2xl  w-full h-130"
        const text=document.createElement("div")
        text.className="text bg-[#191919] p-4 rounded-b-2xl"
        const title=document.createElement("h3")
        title.className="text-xl"
        title.textContent=tab[i].name
        const bundle=document.createElement("div")
        bundle.className="flex justify-between"
        const mod=document.createElement("i")
        mod.className="fa-solid fa-pencil modifie "
        const sup=document.createElement("i")
        sup.className="fa-solid fa-trash-can delete"
        const d=document.createElement("div")
        d.className="flex justify-between gap-2"
        const badge=document.createElement("div")
        tab[i].genres.forEach(element => {
            const p=document.createElement("p")
            p.textContent=element
            p.className="bg-[#292929] w-fit text-center rounded-xl px-1.5"
            badge.append(p)
            
        });
        badge.className="flex justify-start gap-2"
        const descri=document.createElement("p")
        descri.className="text-md text-gray-400 line-clamp-1"
        
        descri.innerHTML=tab[i].summary
        
        d.append(mod,sup)
        bundle.append(title,d)
        show.append(div)
        div.append(img,text)
        text.append(bundle,badge,descri)
        sup.addEventListener("click",()=>{
            const con=confirm("do u want to delete this element")
            if(con&&!toggle.on){
                div.remove()
                remove(tab[i].id)

            }
        })
        mod.addEventListener("click",async()=>{
            nom.value=tab[i].name
            genre.value=tab[i].genres.join(",")
            lang.value=tab[i].language
            description.value=tab[i].summary
            submit.textContent="modifier"
            toggle.on=true
            toggle.id=tab[i].id//localstorage
            submit.addEventListener("click",(e)=>{
                e.preventDefault()
                tab[i].name=nom.value.trim()
                tab[i].genres=genre.value.split(",").map(elm=>elm.trim())
                tab[i].language=lang.value.trim()
                tab[i].summary= description.value.trim()
                title.textContent=tab[i].name
                badge.innerHTML=""
                tab[i].genres.forEach(element => {
                    const p=document.createElement("p")
                    p.textContent=element
                    p.className="bg-[#292929] w-fit text-center rounded-xl px-1.5"
                    badge.append(p)
                    
                });
                descri.innerHTML=tab[i].summary
                submit.textContent="+ Ajouter la série"
                toggle.on=false
                update(tab[i].id,tab[i])
            })
        })
    }
  if(tab.length==0){
    empty.hidden=false
  }
}

