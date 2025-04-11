var pop1=document.querySelector(".popup-overlay")
var pop2=document.querySelector(".popup-box")
var pop3=document.getElementById("add")

pop3.addEventListener("click",function(){
    pop1.style.display="block"
    pop2.style.display="block"
})

var cancel1=document.getElementById("cancel")

cancel1.addEventListener("click",function(event){
    event.preventDefault()
    pop1.style.display="none"
    pop2.style.display="none"
})

var c=document.querySelector(".container")
var d=document.getElementById("adds")
var e=document.getElementById("book")
var f=document.getElementById("author")
var g=document.getElementById("description")

adds.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${book.value}</h2>
            <h5>${author.value}</h5>
            <p>
                 ${description.value}
            </p>
            <button onclick="de(event)">Delete</button>`
    c.append(div)
    pop1.style.display="none"
    pop2.style.display="none"

})
function de(event){
    event.target.parentElement.remove()
}
