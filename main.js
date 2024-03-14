let from = document.getElementById("from");
let to = document.getElementById("to");
let result =document.getElementById('result');
function calculate( start , end) {
    if (start.value !="") {
        let startDate = new Date(start.value).getTime();
        let endDate = new Date(end.value).getTime();
        let diff = endDate - startDate;
    
        // Convert milliseconds difference to various time units
        let years = Math.floor(diff / (1000 * 60 * 60 * 24 * 30 * 12));
        let stillMonths = Math.floor((diff % (1000 * 60 * 60 * 24 * 30 * 12) / (1000 * 60 * 60 * 24 * 30)));
        let stillDays = Math.floor(diff % (1000 * 60 * 60 * 24*30) / (1000* 60 *60 *24 ));
        let month = `${years*12}`
        let weeks =`${month * 4}`
        let days =`${weeks*7}`;
        let hours = `${days*24}`;
        let minutes = `${hours*60}`;
        let seconds = `${minutes*60}`;
        result.innerHTML =`
        Your Age is : 
        <h2> ${years}  Years, ${stillMonths} Months , ${stillDays} Days</h2>
        <h2> OR ${month} Month</h2>
        <h2> OR ${weeks} Weeks</h2>
        <h2> OR ${days}  Days</h2>
        <h2> OR ${hours} Hours</h2>
        <h2> OR ${minutes} Minutes</h2>
        <h2> OR ${seconds} Seconds</h2>
    `    
    }
    else{
        alert( "Please enter a valid date" );
    }
    
}
let calc =document.getElementById('calc');
calc.onclick = function() {
    calculate(from,to);
}



