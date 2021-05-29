//Calculate Tip
function calculateTip() {
    $.ajax("https://swapi.dev/api/people/20").done(youWin);
    const billAmt = document.getElementById("billAmt").value;
    const serviceQual = document.getElementById("serviceQual").value;
    const peopleamt = document.getElementById("peopleamt").value;
    const totalAndTip = document.getElementById("totalAndTip");

    if (billAmt === ""){
        window.alert("Please enter a value!");
    }
    
    if (peopleamt === ""){
        window.alert("Please enter a tip!");
    }
    
    let totalTipEach = (billAmt * serviceQual) / peopleamt;
    let totalTip = (billAmt * serviceQual);
    totalTipEach = Math.round(totalTipEach * 100) / 100;
    totalTipEach = totalTipEach.toFixed(2);

    totalAndTip.innerHTML = `<p style="font-size: 18px">Tip Amount</p><p style="font-size: 18px">$ ${totalTipEach} each</p><p style="font-size: 18px">Total Amount</p><p style="font-size: 18px">$ ${totalTip} each</p>`;
}

function youWin(item){
    const nameOFCharacterHere = item.name;
    window.alert(`You have won a ${nameOFCharacterHere} toy`);
}