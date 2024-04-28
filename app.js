const inputBill = document.querySelector("#inputBill");
const inputNumber = document.querySelector("#inputNumber");
const buttonGroups = document.querySelectorAll(".button-groups");
const calculateButton = document.querySelector("#calculateButton");
const resultButton = document.querySelector("#resultButton");
const amount = document.querySelector(".amount");
const total = document.querySelector(".total");

const data = { bill: '', button: '', number: '' };

inputBill.addEventListener("input", (e) => {
    e.preventDefault();
    data.bill = parseFloat(inputBill.value.trim());
});

inputNumber.addEventListener("input", (e) => {
    e.preventDefault();
    data.number = parseFloat(inputNumber.value.trim());
});

buttonGroups.forEach((tipButton) => {
    tipButton.addEventListener("click", (e) => {
        if (e.target.value === undefined) {
            return
        } else {
            data.button = parseFloat(e.target.value);
        }
    })
})

function endTotal() {
    const resultTotal = ((data.bill * data.button) / 100) / 2 + data.bill / data.number;
    return resultTotal;
}

function endAmount() {
    const resultAmount = ((data.bill * data.button) / 100) / 2 ;
    return resultAmount;
}

calculateButton.addEventListener("click", () => {
    total.textContent= endTotal();
    amount.textContent = endAmount();
})

resultButton.addEventListener("click", () => {
    inputBill.value = '';
    inputNumber.value = '';
    amount.textContent = "$0.00";
    total.textContent = "$0.00";
})