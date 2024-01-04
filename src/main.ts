import './style.scss'


const radioPack = document.querySelector("#settings #radioBox #pack") as HTMLDivElement
const lessonPayment = document.querySelectorAll("#rates #cards .priceList .price h4") as Record<number, HTMLElement>
const radioLesson = document.querySelector("#settings #radioBox #lesson") as HTMLDivElement


radioPack?.addEventListener('click', (e) => {
    let target = e.target as HTMLElement
    if (target.className != "inputPack") return

    let previousElement = target.previousSibling as any
    previousElement = previousElement.previousSibling as HTMLInputElement
    console.log(previousElement.dataset.pack)

    console.log(lessonPayment);
    //LINK - спросить
    // for(let i in lessonPayment){
    //     console.log(i);
    // }
    //LINK - спросить
    for (let i of lessonPayment) {
        let lessonPaymentTEXT = i.textContent.trim()
        console.log(lessonPaymentTEXT);
        let price = ""
        let time = ""
        let border = true
        for(let index in lessonPaymentTEXT){
            if (lessonPaymentTEXT[index] == " ") border = false
            if (border){
                price += lessonPaymentTEXT[index]
            }
            // console.log(index);
            
        }
        console.log(price);
        
    }
})

radioLesson?.addEventListener('click', (e) => {
    let target = e.target as HTMLElement
    if (target.className != "inputLesson") return

    let previousElement = target.previousSibling as any
    previousElement = previousElement.previousSibling as HTMLInputElement
    console.log(previousElement.id)


})

