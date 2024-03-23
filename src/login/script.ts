import './style.scss'


const form = document.querySelector('form') as HTMLFormElement
const createUser = document.querySelector('#createUser')
const entrance = document.querySelector('#entrance')
const name = document.querySelector('#name') as HTMLInputElement
const surname = document.querySelector('#surname') as HTMLInputElement
const email = document.querySelector('#email') as HTMLInputElement
const password = document.querySelector('#password') as HTMLInputElement
const passwordCopy = document.querySelector('#passwordCopy') as HTMLInputElement
const nameSpan = document.querySelector('#nameSpan') as HTMLSpanElement
const surnameSpan = document.querySelector('#surnameSpan') as HTMLSpanElement
const emailSpan = document.querySelector('#emailSpan') as HTMLSpanElement
const passwordSpan = document.querySelector('#passwordSpan') as HTMLSpanElement
const passwordCopySpan = document.querySelector('#passwordCopySpan') as HTMLSpanElement

createUser?.addEventListener('click', async () => {
    let checkArr = [] as Array<boolean>
    name.value = name.value.trim()
    surname.value = surname.value.trim()
    email.value = email.value.trim()
    if (password.value.length < 8) {
        passwordSpan.innerHTML = "<p>пароль должен быть</p><p>не короче 8 символов</p>"
        password.style.borderColor = "#ad0000"
        checkArr[0] = false
    } else checkArr[0] = true
    // if(password.value != passwordCopy.value) passwordCopy.style.borderColor = "red";




    if (checkArr[0]) {
        let obj = {
            'name': name.value,
            'surname': surname.value,
            'email': email.value,
            'password': password.value,
        }
        let ping = await fetch("http://localhost:3000/registration", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(obj)
        }) as any
        ping = await ping.json()
        console.log(ping);
        if (ping.name == name.value) window.location.href = "../user/client.html"
    }
})

entrance?.addEventListener('click', async () => {
    console.log("entrance");

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
        console.log(ping);

        if (ping.name == name.value) window.location.href = "../user/client.html"
    }
    catch {

    }
})

