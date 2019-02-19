const getFirstNum= num => parseInt(num.toString()[0]);

function makeRoman(num) {
	let saveRoman= '';
	let saveNum= num;
	
	if (saveNum >= 1000)	{
		saveRoman+= 'M';
		saveNum-= 1000;
	}
	else if (saveNum >= 500)	{
		saveRoman+= 'D';
		saveNum-= 500;
	}
	else if (saveNum >= 100)	{
		saveRoman+= 'C';
		saveNum-= 100;
	}
	else if (saveNum >= 50)	{
		saveRoman+= 'L';
		saveNum-= 50;
	}
	else if (saveNum >= 10)	{
		saveRoman+= 'X';
		saveNum-= 10;
	}
	else if (saveNum >= 5)	{
		saveRoman+= 'V';
		saveNum-= 5;
	}
	else if (saveNum >= 1)	{
		saveRoman+= 'I';
		saveNum-= 1;
	}

	if (saveNum > 0) saveRoman+= makeRoman(saveNum);

	return saveRoman;
};

function convertToRoman(num) {
 let romanNum= '';
 let tenPow= 1;

 while (num > 0)	{
 	tenPow*= 10;
 	let saveNum= num % tenPow;
 	if (saveNum !== 0)	{
 		let firstNum= getFirstNum(saveNum);
 		switch (firstNum)	{
 			case 4:
 			case 9: {
	 				let dividedByFirstNum= saveNum / firstNum;
	 				romanNum= makeRoman(dividedByFirstNum) + makeRoman(saveNum + dividedByFirstNum) + romanNum;
	 			}
 				break;
 			default: romanNum= makeRoman(saveNum) + romanNum;
 				break;
 		}
 	}
 	num-= saveNum;
 }

 return romanNum;
}

console.log(convertToRoman(3999));