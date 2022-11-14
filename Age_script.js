let calculate = () => {
    let date = document.getElementById("inlineFormCustomSelect").value;
    let month = document.getElementById("inlineFormCustomSelect2").value;
    let year = document.getElementById("year").value;

    // console.log(date);
    // console.log(month);
    // console.log(year);

    let today = new Date();
    let mon = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let date2 = today.getDate();
    let month2 = today.getMonth() + 1;
    let year2 = today.getFullYear();

    if (date > date2) {
        date2 = date2 + mon[month2 - 1];
        month2 = month2 - 1;
    }
    if (month > month2) {
        month2 = month2 + 12;
        year2 = year2 - 1;
    }
    var finaldate = date2 - date;
    var finalmonth = month2 - month;
    var finalyear = year2 - year;

    document.getElementById("demo").innerHTML = `Your age is ${finalyear} years ${finalmonth} months and ${finaldate} days`;

}