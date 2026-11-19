import { create } from "../services/serieService.js"


const nom=document.querySelector("#nom")
const description=document.querySelector("#description")
const genre=document.querySelector("#genre")
const photo=document.querySelector("#photo")
const lang=document.querySelector("#lang")



const show=document.querySelector("#show")


export const add=async (e,n,g,l)=>{
    e.preventDefault()
    let obj={}
    obj.name=nom.value.trim()
    obj.summary=description.value.trim()
    obj.genres=genre.value.split(",").map(elm=>elm.trim())
    obj.language=lang.value.trim()
    if(obj.name.trim()==""||obj.summary.trim()==""||obj.genres.indexOf("")!=-1||obj.genres.some((elm)=>elm.includes(" "))&&lang.value.trim()==""){
         alert("Veuillez remplir tous les champs")
        return
    }
    obj.image={medium:"https://cdn.discordapp.com/attachments/1558131398555205753/1571845803633287168/Drapeau_img.png?ex=6b002b7b&is=6afed9fb&hm=7737d18cefd5a0761784a0aa63f638ce00bc6ac166e9e0bb020675bc2f63113f&"}
    lang.value=""
    nom.value=""
    description.value=""
    genre.value=""
    photo.value="" 
    
        try{
            const test=await create(obj)            
            if(test.name.includes(n)&&test.genres.includes(g)&&test.language.includes(l)){

                const div=document.createElement("div")
            div.className="rounded-t-2xl"
            const img=document.createElement("img")
            img.src=`${obj.image.medium}`
            img.className="rounded-t-2xl  w-full h-130"
            const text=document.createElement("div")
            text.className="text bg-[#191919] p-4 rounded-b-2xl"
            const title=document.createElement("h3")
            title.className="text-xl"
            title.textContent=obj.name
            const bundle=document.createElement("div")
            bundle.className="flex justify-between"
            const mod=document.createElement("i")
            mod.className="fa-solid fa-pencil modifie "
            const sup=document.createElement("i")
            sup.className="fa-solid fa-trash-can delete"
            const d=document.createElement("div")
            d.className="flex justify-between gap-2"
            const badge=document.createElement("div")
            obj.genres.forEach(element => {
                const p=document.createElement("p")
                p.textContent=element
                p.className="bg-[#292929] w-fit text-center rounded-xl px-1.5"
                badge.append(p)
                
            });
            badge.className="flex justify-start gap-2"
            const descri=document.createElement("p")
            descri.className="text-md text-gray-400 line-clamp-1"
            
            descri.innerHTML=obj.summary
            
            d.append(mod,sup)
            bundle.append(title,d)
            show.append(div)
            div.append(img,text)
            text.append(bundle,badge,descri) 
            }
        }catch(err){
            console.error(err);
            
        }
}
