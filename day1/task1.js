const today = new Date();
var crismas = new Date(today.getFullYear(), 11, 25);
if (today.getMonth() == 11 && today.getDate() >= 25) {
    crismas.setFullYear(crismas.getFullYear() + 1);
}
var day = 1000 * 60 * 24 * 60;
var daysLeft = Math.ceil(crismas.getTime() - today.getTime()) / day
console.log(daysLeft + " days left for the next christmas")
