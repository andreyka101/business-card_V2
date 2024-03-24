import './style.scss'


const html = document.querySelector('html') as HTMLHtmlElement
const form = document.querySelector('form') as HTMLFormElement
const createUser = document.querySelector('#createUser')
const entrance = document.querySelector('#entrance')
const name = document.querySelector('#name') as HTMLInputElement
const surname = document.querySelector('#surname') as HTMLInputElement
const email = document.querySelector('#email') as HTMLInputElement
const password = document.querySelector('#password') as HTMLInputElement
const passwordCopy = document.querySelector('#passwordCopy') as HTMLInputElement
const passwordDiv = document.querySelector("#passwordDiv") as HTMLDivElement
const passwordCopyDiv = document.querySelector("#passwordCopyDiv") as HTMLDivElement
const emailDiv = document.querySelector("#emailDiv") as HTMLDivElement
const nameDiv = document.querySelector("#nameDiv") as HTMLDivElement
const surnameDiv = document.querySelector("#surnameDiv") as HTMLDivElement


createUser?.addEventListener('click', async () => {
    let checkArr = [] as Array<boolean>
    name.value = name.value.trim()
    surname.value = surname.value.trim()
    email.value = email.value.trim()
    if (password.value.length == 0) {
        const passwordSpan = document.querySelector('#passwordSpan') as HTMLSpanElement
        passwordSpan.innerHTML = "не введён пароль"
        password.style.borderColor = "#ad0000"
        passwordDiv.style.display = "block"
        checkArr[0] = false
    }
    else {
        if (password.value.length < 8) {
            const passwordSpan = document.querySelector('#passwordSpan') as HTMLSpanElement
            passwordSpan.innerHTML = "<p>пароль должен быть</p><p>не короче 8 символов</p>"
            password.style.borderColor = "#ad0000"
            passwordDiv.style.display = "block"
            checkArr[0] = false
        } else {
            password.style.borderColor = "#000000"
            passwordDiv.style.display = "none"
            checkArr[0] = true
        }
    }

    if (password.value != passwordCopy.value) {
        const passwordCopySpan = document.querySelector('#passwordCopySpan') as HTMLSpanElement
        passwordCopySpan.innerHTML = "пароли не совпадают"
        passwordCopy.style.borderColor = "#ad0000"
        passwordCopyDiv.style.display = "block"
        checkArr[1] = false
    }
    else {
        passwordCopy.style.borderColor = "#000000"
        passwordCopyDiv.style.display = "none"
        checkArr[1] = true
    }

    if (email.value.length == 0) {
        const emailSpan = document.querySelector('#emailSpan') as HTMLSpanElement
        emailSpan.innerHTML = "не введён email"
        email.style.borderColor = "#ad0000"
        emailDiv.style.display = "block"
        checkArr[2] = false
    }
    else {
        email.style.borderColor = "#000000"
        emailDiv.style.display = "none"
        checkArr[2] = true
    }

    if (name.value.length == 0) {
        const nameSpan = document.querySelector('#nameSpan') as HTMLSpanElement
        nameSpan.innerHTML = "не введёно имя"
        name.style.borderColor = "#ad0000"
        nameDiv.style.display = "block"
        checkArr[3] = false
    }
    else {
        name.style.borderColor = "#000000"
        nameDiv.style.display = "none"
        checkArr[3] = true
    }

    if (surname.value.length == 0) {
        const surnameSpan = document.querySelector('#surnameSpan') as HTMLSpanElement
        surnameSpan.innerHTML = "не введёна фамилия"
        surname.style.borderColor = "#ad0000"
        surnameDiv.style.display = "block"
        checkArr[4] = false
    }
    else {
        surname.style.borderColor = "#000000"
        surnameDiv.style.display = "none"
        checkArr[4] = true
    }





    if (checkArr[0] && checkArr[1] && checkArr[2] && checkArr[3] && checkArr[4]) {
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
        if (ping.name == "none") {
            const emailSpan = document.querySelector('#emailSpan') as HTMLSpanElement
            emailSpan.innerHTML = "<p>такой email уже есть,</p><p>введите другой</p>"
            email.style.borderColor = "#ad0000"
            emailDiv.style.display = "block"
        }
    }
})

entrance?.addEventListener('click', async () => {
    let checkArr = [] as Array<boolean>

    name.value = name.value.trim()
    surname.value = surname.value.trim()
    // window.location.href = "../user/client.html"

    if (name.value.length == 0) {
        const nameSpan = document.querySelector('#nameSpan') as HTMLSpanElement
        nameSpan.innerHTML = "не введёно имя"
        name.style.borderColor = "#ad0000"
        nameDiv.style.display = "block"
        checkArr[0] = false
    }
    else {
        name.style.borderColor = "#000000"
        nameDiv.style.display = "none"
        checkArr[0] = true
    }

    if (surname.value.length == 0) {
        const surnameSpan = document.querySelector('#surnameSpan') as HTMLSpanElement
        surnameSpan.innerHTML = "не введёна фамилия"
        surname.style.borderColor = "#ad0000"
        surnameDiv.style.display = "block"
        checkArr[1] = false
    }
    else {
        surname.style.borderColor = "#000000"
        surnameDiv.style.display = "none"
        checkArr[1] = true
    }

    if (password.value.length == 0) {
        const passwordSpan = document.querySelector('#passwordSpan') as HTMLSpanElement
        passwordSpan.innerHTML = "не введён пароль"
        password.style.borderColor = "#ad0000"
        passwordDiv.style.display = "block"
        checkArr[2] = false
    }
    else {
        password.style.borderColor = "#000000"
        passwordDiv.style.display = "none"
        checkArr[2] = true
    }

    if (checkArr[0] && checkArr[1] && checkArr[2]) {
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
            ping = await ping.json() as any

            if (ping.name == name.value && ping.surname == surname.value && ping.password == password.value) window.location.href = "../user/client.html"
            else{
                let obj = {
                    'name': name.value,
                    'surname': surname.value,
                }
                let ping = await fetch("http://localhost:3000/entrance", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify(obj)
                }) as any
                ping = await ping.json() as any
                if (ping.name == name.value && ping.surname == surname.value){
                    const passwordSpan = document.querySelector('#passwordSpan') as HTMLSpanElement
                    passwordSpan.innerHTML = "не верный пароль"
                    password.style.borderColor = "#ad0000"
                    passwordDiv.style.display = "block"
                }
                else{
                    const nameSpan = document.querySelector('#nameSpan') as HTMLSpanElement
                    nameSpan.innerHTML = "не верное имя или фамилия"
                    name.style.borderColor = "#ad0000"
                    surname.style.borderColor = "#ad0000"
                    nameDiv.style.display = "block"
                }
            }

        }
        catch (e){
            console.log(e);
            
        }
    }
})

