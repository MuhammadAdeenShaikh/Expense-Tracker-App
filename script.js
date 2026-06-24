let Total = document.getElementById("total");
let Income = document.getElementById("income");
let Expense = document.getElementById("expense");

let Description = document.getElementById("description");
let Amount = document.getElementById("amount");
let Category = document.getElementById("category");

let Btn = document.getElementById("btn");

let Transaction = document.getElementById("transaction");

Btn.addEventListener("click", () => {
    if(Description.value !== "" && Amount.value !== ""){
        let li = document.createElement("li");
        Transaction.appendChild(li);

        let para = document.createElement("p");
        li.appendChild(para);
        para.innerText += Description.value;

        let span = document.createElement("span");
        li.appendChild(span);

        if(Category.value === "Expense"){
            let AmountValue = Number(Amount.value);
            let ExpenseValue = Number(Expense.innerText);

            span.innerText  += "-"  + Amount.value;
            span.style.color = "red";
            Expense.innerText = AmountValue + ExpenseValue;
            
        } else if(Category.value === "Income") {
            let AmountValue = Number(Amount.value);
            let IncomeValue = Number(Income.innerText);
            
            span.innerText  += "+" + Amount.value;
            span.style.color = "green";
            Income.innerText = AmountValue + IncomeValue;
        }

        let incomeValue = Number(Income.innerText);
        let expenseValue = Number(Expense.innerText);

        Total.innerText = incomeValue - expenseValue;
        
    } else {
        alert("Please fill all inputs");
    }

    Description.value = "";
    Amount.value = "";
})
