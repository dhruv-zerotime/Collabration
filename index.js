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

let swapNum = () => {
    let inp1 = parseInt(document.getElementById("inp1").value)
    let inp2 = parseInt(document.getElementById("inp2").value)

    document.getElementById("In1").innerHTML = `Before Swap First value = ${inp1}`
    document.getElementById("In2").innerHTML = `Before Swap Second value = ${inp2}`

    if (isNaN(inp1) || isNaN(inp2)) {
        alert("Type valid number")

    }

    else {
        console.log("before", inp1)
        console.log("before", inp2)


        inp1 = inp1 + inp2;
        console.log("inp11", inp1);
        inp2 = inp1 - inp2
        console.log("inp12", inp2);
        inp1 = inp1 - inp2;
        console.log("inp13", inp1);

        console.log("after", inp1)
        console.log("after", inp2)

        document.getElementById("out1").innerHTML = `After Swap First value = ${inp1}`
        document.getElementById("out2").innerHTML = `After Swap Second value = ${inp2}`



    }


}
