function calcReversePercent() {

    var totalwithpercent = document.getElementById("totalwithpercent").value;
    var percentage = document.getElementById("percentage").value;

    var totalBeforePercent =  calculateReversePercentage(totalwithpercent, percentage) ;
    var percentageAmount = totalwithpercent - totalBeforePercent;

    document.getElementById("totalBeforePercent").innerHTML = totalBeforePercent;
    document.getElementById("percentValue").innerHTML = percentageAmount;
    document.getElementById("finalTotal").innerHTML = totalwithpercent;

}

function calculateReversePercentage(gross, percent) {
    return gross / ( (percent / 100) + 1) ;
}

function calculatePercentageVariance() {

}
