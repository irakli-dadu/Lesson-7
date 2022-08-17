let hamburger = document.querySelector(".hamburger")
let navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")

})

document.querySelectorAll(".nav-link").forEach(n => 
    n.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navMenu.classList.remove("active")

}))

// -------------


let lineInput = document.querySelector('.inputClass')

let buttonAdd = document.querySelector('.button')

let inputUl = document.querySelector('.ghost-ul')

let formBox = document.querySelector('.form-box')

let clearBtn = document.createElement('button')
     clearBtn.textContent = 'Clear All'
     clearBtn.style.color = 'crimson'
     clearBtn.addEventListener('click', function() {
        inputUl.innerHTML = ' '
     })

     formBox.appendChild(clearBtn)


buttonAdd.addEventListener('click', function() {
    let response = lineInput.value

    if (response == ' ') {
        alert('type')
        return
    }

     let newLi = document.createElement('li')
     newLi.classList.add('new-li')

     let iBtn = document.createElement('i')
     iBtn.innerHTML = '<i class="fa-solid fa-ban"></i>'

     iBtn.addEventListener('click', function() {
        newLi.remove()
     })

    newLi.textContent = response

    inputUl.appendChild(newLi)

    newLi.appendChild(iBtn)

    lineInput.value = ' '
})


lineInput.addEventListener('focus', function(objectEvent) {
    objectEvent.target.style.border = '2px solid crimson'
})




// ajax new http reqeuest

function allusers() {
    let motxovna = new XMLHttpRequest()


    function renderi() {
        let responsey = this.responseText
        let jsconverted = JSON.parse(responsey)
    
        let ulTag = document.createElement('ul')

        jsconverted.data.forEach(element => {
                let liTag = document.createElement('li')
                 liTag.classList.add('liUser')
                   liTag.textContent = element.first_name
                   ulTag.appendChild(liTag)
        });
        document.getElementById('newHttpBox').appendChild(ulTag)

    }

    motxovna.open('GET', 'https://reqres.in/api/users?page=2')
    motxovna.send()
    motxovna.addEventListener('load', renderi)

}
allusers()
