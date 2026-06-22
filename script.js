<<<<<<< HEAD
let form = document.querySelector("form")

form.addEventListener("submit", function (det) {

    det.preventDefault();
    // recive the income from user Input using ID
    let income = document.querySelector("#income")
    // console.log(income.value)

    let amount = parseInt(income.value)
    // console.log(amount)

    let result = document.querySelector("h2")

  
// Income Tax Slabs

// ₹0 Lakhs - ₹12 Lakhs -> 0
// ₹12 Lakhs - ₹16 Lakhs -> 15%
// ₹16 Lakhs - ₹20 Lakhs -> 20%
// ₹20 Lakhs - ₹24 Lakhs -> 25%
// Above ₹24 Lakhs -> 30%

  // main logic

    let totalTax = 0;
    if(amount <= 1200000){
        totalTax = 0
    }else if(amount <= 1600000){
        totalTax = (amount - 1200000) * 0.15;
    }else if(amount <= 2000000){
        totalTax = (amount - 1600000) * 0.20 + 60000;
    }else if(amount <= 2400000){
        totalTax = (amount - 2000000) * 0.25 + 60000 + 80000;
    }else{
        totalTax = (amount - 2400000) * 0.30 + 60000 + 80000 + 100000;
    }

    console.log(result.innerHTML)
    result.innerHTML = `Total Raj Tax: ${totalTax}`;
    form.reset();
    
=======
let form = document.querySelector("form")

form.addEventListener("submit", function (det) {

    det.preventDefault();
    // recive the income from user Input using ID
    let income = document.querySelector("#income")
    // console.log(income.value)

    let amount = parseInt(income.value)
    // console.log(amount)

    let result = document.querySelector("h2")

  
// Income Tax Slabs

// ₹0 Lakhs - ₹12 Lakhs -> 0
// ₹12 Lakhs - ₹16 Lakhs -> 15%
// ₹16 Lakhs - ₹20 Lakhs -> 20%
// ₹20 Lakhs - ₹24 Lakhs -> 25%
// Above ₹24 Lakhs -> 30%

  // main logic

    let totalTax = 0;
    if(amount <= 1200000){
        totalTax = 0
    }else if(amount <= 1600000){
        totalTax = (amount - 1200000) * 0.15;
    }else if(amount <= 2000000){
        totalTax = (amount - 1600000) * 0.20 + 60000;
    }else if(amount <= 2400000){
        totalTax = (amount - 2000000) * 0.25 + 60000 + 80000;
    }else{
        totalTax = (amount - 2400000) * 0.30 + 60000 + 80000 + 100000;
    }

    console.log(result.innerHTML)
    result.innerHTML = `Total Raj Tax: ${totalTax}`;
    form.reset();
    
>>>>>>> 6277f65858a0bea47dc94f6f8c6cd1a1b6887910
})