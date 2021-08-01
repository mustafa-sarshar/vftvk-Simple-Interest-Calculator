function init_the_years() {
    let select = document.getElementById("years"); // get the years dropdown list.
    for (let i=1; i<=10; i++) {
        // create an option element and initialize its value and text attributes
        let option = document.createElement("option");
        option.value = i;
        option.text = i;
        select.appendChild(option); // add the current option to the years dropdown list
    }
}

function compute() {
    // Init vars from given data by the user.
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    y = document.getElementById("years").value;

    interest = p * y * r / 100; // Calculate the interest.
    let year = new Date().getFullYear() + parseInt(y); // calculate the year based on current date and given years.

    // Update the result span tag.
    document.getElementById("result").innerHTML = "\<br\>If you deposit <mark>"+p+"</mark>,\<br\>at an interest rate of <mark>"+r+"%</mark>.\<br\>You will receive an amount of <mark>"+interest+"</mark>,\<br\>in the year <mark>"+year+"</mark>.\<br\>";
}

function updateRate() {
    let rateval = document.getElementById("rate").value; // get the seleted rate.
    document.getElementById("rate_val").innerText = rateval + "%"; // update the rate_val element.
    document.getElementById("result").innerHTML = ""; // reset the results span element.
}

function alertAmount() {
    // validate the amount for principal.
    let principal = document.getElementById("principal");
    if (principal.value <= 0) {
        window.alert("The amount (principal) cannot be zero or negative!!!"); // popup an alert message.
        principal.value = 1; // set the default value "1" for principal.
        principal.focus();
    }
    document.getElementById("result").innerHTML = ""; // reset the results span element.
}

function changeYears() {
    document.getElementById("result").innerHTML = ""; // reset the results span element.
}

init_the_years(); // Init the years dropdown list by setting its options from 1 to 10