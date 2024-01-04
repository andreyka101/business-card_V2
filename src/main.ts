import './style.scss'


const radioPack = document.querySelector("#settings #radioBox #pack") as HTMLDivElement
const lessonPayment = document.querySelectorAll("#rates #cards .priceList .price h4") as Record<number, HTMLElement>
const radioLesson = document.querySelector("#settings #radioBox #lesson") as HTMLDivElement
const titleSpan = document.querySelector("#settings span") as HTMLSpanElement

let globalPrice = [1000,1500,2000]
let groupCheck = false
let numberOfClasses = 1

radioPack?.addEventListener('click', (e) => {
    let target = e.target as HTMLElement
    if (target.className != "inputPack") return

    let previousElement = target.previousSibling as any
    previousElement = previousElement.previousSibling as HTMLInputElement
    // console.log(previousElement.dataset.pack)
    numberOfClasses = previousElement.dataset.pack
    console.log(lessonPayment);
    //LINK - спросить
    // for(let i in lessonPayment){
    //     console.log(i);
    // }
    
    changePrice()
})

radioLesson?.addEventListener('click', (e) => {
    let target = e.target as HTMLElement
    if (target.className != "inputLesson") return
    
    let previousElement = target.previousSibling as any
    previousElement = previousElement.previousSibling as HTMLInputElement
    console.log(previousElement.id)
    
    if(previousElement.id == "group") {
        groupCheck = true
    }
    else{
        groupCheck = false
    }
    
    changePrice()

    
})
function changePrice(){
    let additionalInscription : string
    if (numberOfClasses >= 10) additionalInscription = `<p>${numberOfClasses} уроков</p>`
    else additionalInscription = ``
    if(groupCheck){
        if (numberOfClasses >= 10) titleSpan.innerHTML = `оплата за ${numberOfClasses} групповых занятий`
        else titleSpan.innerHTML = `оплата за одно групповое занятие`
        console.log("lol");
        for (let i in globalPrice) {
            lessonPayment[i].innerHTML = `${((globalPrice[i] * numberOfClasses)*60)/100} ₽/60 мин ${additionalInscription}`
        } 
    }
    else{
        if (numberOfClasses >= 10) titleSpan.innerHTML = `оплата за ${numberOfClasses} индивидуальных занятий`
        else titleSpan.innerHTML = `оплата за одно индивидуальное занятие`
        for (let i in globalPrice) {
            lessonPayment[i].innerHTML = `${globalPrice[i] * numberOfClasses} ₽/60 мин ${additionalInscription}`
        } 

    }
    
    
    //LINK - спросить
    // for (let i of lessonPayment) {
    //     let lessonPaymentTEXT = i.textContent.trim()
    //     console.log(lessonPaymentTEXT);
    //     let price = ""
    //     let border = true
    //     for(let index in lessonPaymentTEXT){
    //         if (lessonPaymentTEXT[index] == " ") border = false
    //         if (border){
    //             price += lessonPaymentTEXT[index]
    //         }
            
    //     }
    //     console.log(price);
        
    // }
}