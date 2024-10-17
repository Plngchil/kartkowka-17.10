const body = document.querySelector("body")

function zad1(){
let div = document.createElement("div")
body.appendChild(div)
div.style.width= "500px"
div.style.height= "500px"
let button1 = document.createElement("button")
body.appendChild(button1)
button1.innerHTML = "czerwony"
let button2 = document.createElement("button")
body.appendChild(button2)
button2.innerHTML = "żółty"
button1.addEventListener("click", function(){
    div.style.backgroundColor = "red"
})
button2.addEventListener("click", function(){
    div.style.backgroundColor = "yellow"
})
}
function zad2(){
    let input12 = document.createElement("input")
    body.appendChild(input12)
    let button = document.createElement("button")
    body.appendChild(button)
    button.innerHTML= "Wyświetl"
    button.addEventListener("click", function(){
        let p = document.createElement("p")
        body.appendChild(p)
        p.innerHTML = input12.value
    })
}
function zad3(){
    let p1 = document.createElement("p")
    body.appendChild(p1)
    p1.innerHTML = "Podaj szerokość:"
    let input15 = document.createElement("input")
    body.appendChild(input15)
    let p2 = document.createElement("p")
    body.appendChild(p2)
    p2.innerHTML = "Podaj wysokość:"
    let input2 = document.createElement("input")
    body.appendChild(input2)
    let button = document.createElement("button")
    body.appendChild(button)
    button.innerHTML = "Zatwierdź wymiary"
    let div = document.createElement("div")
    body.appendChild(div)
    div.style.border = "1px solid black"
    button.addEventListener("click", function(){
        div.style.width = `${input15.value}px`
        div.style.height = `${input2.value}px`
    })
}
function zad4(){
    let input = document.createElement("input")
    body.appendChild(input)
    let button1 = document.createElement("button")
    body.appendChild(button1)
    button1.innerHTML = "Dodaj"
    let ol = document.createElement("ol")
    body.appendChild(ol)
    button1.addEventListener("click", function(){
        let li = document.createElement("li")
        li.innerHTML = input.value
        ol.appendChild(li)
        let button2 = document.createElement("button")
        button2.innerHTML = 'Usuń'
        li.appendChild(button2)
        button2.addEventListener("click", function(){
            li.remove()
            button2.remove()
        })
    })
}