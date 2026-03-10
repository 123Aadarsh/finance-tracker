const balance = document.getElementById("balance")
const income = document.getElementById("income")
const expense = document.getElementById("expense")
const list = document.getElementById("list")
const form = document.getElementById("form")
const text = document.getElementById("text")
const amount = document.getElementById("amount")

let transactions = JSON.parse(localStorage.getItem("transactions")) || []

function updateUI(){

list.innerHTML=""

let total = 0
let inc = 0
let exp = 0

transactions.forEach(t => {

const li = document.createElement("li")
li.innerHTML = `${t.text} <span>₹${t.amount}</span>`
list.appendChild(li)

total += t.amount

if(t.amount > 0){
inc += t.amount
}else{
exp += t.amount
}

})

balance.innerText = "₹" + total
income.innerText = "₹" + inc
expense.innerText = "₹" + Math.abs(exp)

localStorage.setItem("transactions", JSON.stringify(transactions))

}

form.addEventListener("submit", function(e){

e.preventDefault()

const transaction = {
text: text.value,
amount: +amount.value
}

transactions.push(transaction)

text.value=""
amount.value=""

updateUI()

})

updateUI()