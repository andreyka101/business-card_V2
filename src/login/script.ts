import './style.scss'


const createUser = document.querySelector('#createUser')
const name = document.querySelector('#name') as HTMLInputElement
const surname = document.querySelector('#surname') as HTMLInputElement
const email = document.querySelector('#email') as HTMLInputElement
const password = document.querySelector('#password') as HTMLInputElement
 
createUser?.addEventListener('click',async()=>{
    name.value = name.value.trim()
    surname.value = surname.value.trim()
    email.value = email.value.trim()



    let obj = {
        'email':email.value,
        'name':name.value,
        'surname':surname.value,
        'password':password.value,
    }
    let ping = await fetch("http://localhost:3000/registration", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(obj)
    })
})