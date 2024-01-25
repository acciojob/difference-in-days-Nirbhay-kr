// var dateDiffInDays = function (date1, date2) {
//   //   write your code here
// 	if(date1 == date2){
// 		return (0);
// 	}else if(date1 > date2){
// 		return (date1 - date2);
// 	}else{
// 		return (date2 - date1);
// 	}
// };

// Do not change the code below.
//const dateOne = prompt("Enter Start Date.");
//const dateTwo = prompt("Enter End Date.");
//alert(dateDiffInDays(dateOne, dateTwo));
function dateDiffInDays(date1, date2) {
    // Convert input dates to milliseconds since UTC epoch
    const utcDate1 = Date.UTC(
        parseInt(date1.substring(0, 4), 10),
        parseInt(date1.substring(5, 7), 10) - 1,
        parseInt(date1.substring(8, 10), 10)
    );

    const utcDate2 = Date.UTC(
        parseInt(date2.substring(0, 4), 10),
        parseInt(date2.substring(5, 7), 10) - 1,
        parseInt(date2.substring(8, 10), 10)
    );

    // Calculate the difference in milliseconds
    const timeDifference = utcDate2 - utcDate1;

    // Convert the difference to days
    const daysDifference = Math.floor(timeDifference / (24 * 60 * 60 * 1000));

    return daysDifference;
}

// Examples
console.log(dateDiffInDays("2022-03-01", "2022-03-15"));  // Output: 14
console.log(dateDiffInDays("2022-03-01", "2022-03-01"));  // Output: 0
console.log(dateDiffInDays("2022-03-15", "2022-03-01"));  // Output: -14


