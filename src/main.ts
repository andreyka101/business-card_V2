import './style.scss'


const radioPack = document.querySelector("#settings #radioBox #pack") as HTMLDivElement
const radioPackALL = document.querySelectorAll("#settings #radioBox #pack label") as any
const radioLesson = document.querySelector("#settings #radioBox #lesson") as HTMLDivElement

radioPack?.addEventListener('click',(e)=>{
    let target = e.target as HTMLElement
    if (target.className != "inputPack") return
    // console.log(target)
    // radioPack.style.color = "black"
    // console.log("============")
    let tergN = target.parentNode?.childNodes[1] as HTMLInputElement
    // console.log(tergN.dataset.pack)
    for(let i of radioPackALL){
        i.style.color = "black"
        console.log(i)
    }
    target.style.color = "red"
})
radioLesson?.addEventListener('click',()=>{
    alert("radioLesson")
})

