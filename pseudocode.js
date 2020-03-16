//Algorithm
/*
A number is equal to x
to convert kilogram(kg) to grams: kg/4000
Therefore, x(g)=x(kg)/4000.
 */
var number = 1;
function uniquePositiveFactors(number1){
	sum = 0;
	for (i=1;i<number1;i++){
		if(number1%i==0){
			console.log(i);
			sum += i;
		}
	}
	console.log(number1 + sum)
}
let result = uniquePositiveFactors(40);

