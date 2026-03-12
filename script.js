let expenses=[]
let budget=0

function addExpense(){

let date=document.getElementById("date").value
let category=document.getElementById("category").value
let amount=parseFloat(document.getElementById("amount").value)
let note=document.getElementById("note").value

let id=expenses.length+1

let exp={id,date,category,amount,note}

expenses.push(exp)

alert("Expense added")

}

function showAll(){

let table=document.getElementById("table")

table.innerHTML=`
<tr>
<th>ID</th>
<th>Date</th>
<th>Category</th>
<th>Amount</th>
<th>Note</th>
</tr>
`

expenses.forEach(e=>{

table.innerHTML+=`
<tr>
<td>${e.id}</td>
<td>${e.date}</td>
<td>${e.category}</td>
<td>${e.amount}</td>
<td>${e.note}</td>
</tr>
`

})

}

function setBudget(){

budget=parseFloat(document.getElementById("budget").value)

alert("Budget set: ₹"+budget)

}

function searchCategory(){

let cat=document.getElementById("searchCategory").value.toLowerCase()

let result=expenses.filter(e=>e.category.toLowerCase()==cat)

let table=document.getElementById("table")

table.innerHTML=`
<tr>
<th>ID</th>
<th>Date</th>
<th>Category</th>
<th>Amount</th>
<th>Note</th>
</tr>
`

result.forEach(e=>{

table.innerHTML+=`
<tr>
<td>${e.id}</td>
<td>${e.date}</td>
<td>${e.category}</td>
<td>${e.amount}</td>
<td>${e.note}</td>
</tr>
`

})

}
