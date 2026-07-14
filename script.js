function convertToRoman(num) {
    const romanMap = {
        1000: "M",
        900: "CM",
        500: "D",
        400: "CD",
        100: "C",
        90: "XC",
        50: "L",
        40: "XL",
        10: "X",
        9: "IX",
        5: "V",
        4: "IV",
        1: "I"
    };
	 let result = "";

    for (let key in romanMap) {
        while (num >= key) {
            result += romanMap[key];
            num -= key;
        }
    }

    return result;
}
	
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));


