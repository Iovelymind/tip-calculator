function formatMoney(value) {

    value = Math.ceil(value * 100) / 100;


    value = value.toFixed(2);
    return "€" + value; 
    
}
function formatSplit(value) {
    if (value === "1") return value + " person";
    return value + " people";
}
function update() {
let Bill = Number(document.getElementById("yourBill").value);
let tipPercent = document.getElementById("tipInput").value;
let split = document.getElementById("splitInput").value; 


let tipValue = Bill * (tipPercent/100);
let tipEach = tipValue / split;
let totalBillEach = (Bill + tipValue) / split;

document.getElementById("tipPercent").innerHTML = tipPercent + "%";
document.getElementById('tipValue').innerHTML = formatMoney(tipValue);
document.getElementById('totalWithTip').innerHTML = formatMoney(Bill + tipValue);
document.getElementById("splitValue").innerHTML = formatSplit(split);
document.getElementById("billEach").innerHTML = formatMoney(totalBillEach);
document.getElementById("tipEach").innerHTML = formatMoney(tipEach);
}

let content = document.getElementById('content');
content.addEventListener("input", update);