// Dark & Light Mode //
let darkmode = document.querySelector("#darkmode");
let bodyEl = document.querySelector("#section");
let DARKMODE = false;
darkmode.addEventListener('change' , (event) => {
    DARKMODE = event.target.checked;
    if (DARKMODE) {
        bodyEl.classList.add("dark");
    }
    else {
        bodyEl.classList.remove("dark")
    }
});
// Analytics //
const sales = document.getElementById("sales");
Chart.defaults.color = '#fc940b';
Chart.defaults.borderColor = "#000";
new Chart (sales, {
    type: "bar" ,
    data: {
        labels: ["JAN" , "FEB" , "MAR" , "APR" , "MAY" , "JUN" , "JUL" , "AUG" , "SEP" , "OCT" , "NOV" , "DEC"],
        datasets: [{
            label: "Salary",
            data: [390, 200 , 180 , 350 , 400 , 160 , 250 , 400 , 270 , 195 , 280 , 120],
            backgroundColor: ["#fec120"],
        },],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            }
        }
    }
})