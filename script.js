var dateDiffInDays = function (date1, date2) {
  //   write your code here
	if(date1 == date2){
		return (0);
	}else if(date1 > date2){
		return (date1 - date2);
	}else{
		return (date2 - date1);
	}
};

// Do not change the code below.
//const dateOne = prompt("Enter Start Date.");
//const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
