let isPrime = () => {
    let inp = parseInt(document.getElementById("inp").value)
    if (isNaN(inp)) {
        alert("Type valid number")
    }
    else {
        let count = 0;
        for (let i = 1; i <= inp; i++) {
            if (inp % i === 0) {
                count++;
            }
        }
        if (count === 2) {
            document.getElementById("output").innerHTML = "Enter number is Prime"
        }
        else if (count > 2 || count < 2) {
            document.getElementById("output").innerHTML = "Enter number is Not Prime"
        }

    }

}