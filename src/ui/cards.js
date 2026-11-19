const counter=document.querySelector("#counter")
const show=document.querySelector("#show")
const empty=document.querySelector("#empty")
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
        
    }
  if(tab.length==0){
    empty.hidden=false
  }
}