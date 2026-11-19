
export const afichier=(tab,show,empty)=>{
    show.innerHTML="" 
    empty.hidden=true   
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
            
        });
        badge.className="flex justify-start gap-2"
        const descri=document.createElement("p")
        descri.className="text-md text-gray-400 line-clamp-1"
        
        descri.innerHTML=tab[i].summary
        
        
        show.append(div)
        div.append(img,text)
        text.append(title,badge,descri)
        
    }
  if(tab.length==0){
    empty.hidden=false
  }
}