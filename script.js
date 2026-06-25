let Total = document.getElementById("total");
let Income = document.getElementById("income");
let Expense = document.getElementById("expense");

let Description = document.getElementById("description");
let Amount = document.getElementById("amount");
let Category = document.getElementById("category");

let Btn = document.getElementById("btn");

let Transaction = document.getElementById("transaction");

Btn.addEventListener("click", () => {

    if (Description.value !== "" && Amount.value !== "") {

        let amountValue = Number(Amount.value);
        let categoryValue = Category.value;

        let li = document.createElement("li");
        Transaction.appendChild(li);

        let para = document.createElement("p");
        para.innerText = Description.value;
        li.appendChild(para);

        let span = document.createElement("span");
        li.appendChild(span);

        if (categoryValue === "Expense") {

            span.innerText = "-" + amountValue + " ";

            span.style.color = "red";

            Expense.innerText =
                Number(Expense.innerText) + amountValue;

        } else {

            span.innerText = "+" + amountValue + " ";

            span.style.color = "green";

            Income.innerText =
                Number(Income.innerText) + amountValue;
        }

        let deleteBtn = document.createElement("i");
        deleteBtn.classList.add("fa-solid", "fa-trash");

        span.appendChild(deleteBtn);

        Total.innerText =
            Number(Income.innerText) -
            Number(Expense.innerText);

        deleteBtn.addEventListener("click", () => {

            if (categoryValue === "Expense") {

                Expense.innerText =
                    Number(Expense.innerText) - amountValue;

            } else {

                Income.innerText =
                    Number(Income.innerText) - amountValue;
            }

            Total.innerText =
                Number(Income.innerText) -
                Number(Expense.innerText);

            li.remove();
        });

    } else {
        alert("Please fill all inputs");
    }

    Description.value = "";
    Amount.value = "";
});