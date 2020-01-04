function calcReversePercent() {

    var totalwithpercent = document.getElementById("totalwithpercent").value;
    var percentage = document.getElementById("percentage").value;

    var totalBeforePercent =  totalwithpercent / ( (percentage / 100) + 1) ;
    var percentageAmount = totalwithpercent - totalBeforePercent;

    document.getElementById("totalBeforePercent").innerHTML = totalBeforePercent;
    document.getElementById("percentValue").innerHTML = percentageAmount;
    document.getElementById("finalTotal").innerHTML = totalwithpercent;

}


