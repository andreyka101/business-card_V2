import './style.scss'


const createUser = document.querySelector('#createUser')
const entrance = document.querySelector('#entrance')
const name = document.querySelector('#name') as HTMLInputElement
const surname = document.querySelector('#surname') as HTMLInputElement
const email = document.querySelector('#email') as HTMLInputElement
const password = document.querySelector('#password') as HTMLInputElement

createUser?.addEventListener('click', async () => {
    name.value = name.value.trim()
    surname.value = surname.value.trim()
    email.value = email.value.trim()



    let obj = {
        'email': email.value,
        'name': name.value,
        'surname': surname.value,
        'password': password.value,
    }
    let ping = await fetch("http://localhost:3000/registration", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(obj)
    })

})

entrance?.addEventListener('click', async () => {
    name.value = name.value.trim()
    surname.value = surname.value.trim()
    // window.location.href = "../user/client.html"
    try {
        let obj = {
            'name': name.value,
            'surname': surname.value,
            'password': password.value,
        }
        let ping = await fetch("http://localhost:3000/entrance", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(obj)
        }) as any
        ping = await ping.json()
        if(ping.name == name.value) window.location.href = "../user/client.html"
    }
    catch{
        
    }
})