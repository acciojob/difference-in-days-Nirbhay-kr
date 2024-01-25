var dateDiffInDays = function (date1, date2) {
  //   write your code here
	if(date1 == date2){
		console.log(0);
	}else if(date1 > date2){
		console.log(date1 - date2);
	}else{
		console.log(date2 - date1);
	}
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
