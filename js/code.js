//get elements
	//[0]=0 Element , ... [9]=9 Element
number1Elements = document.querySelectorAll("#inputs1 .btn");
number2Elements = document.querySelectorAll("#inputs2 .btn");
	//[0]=+, [1]=-, [2]=*, [3]=/, [4]=Clear
operationElements = document.querySelectorAll("#operations .btn");
	//result Elements
number1DisplayElement = document.getElementById('number1');
number2DisplayElement = document.getElementById('number2');
resultElement = document.getElementById('result');


number1='';
number2='';
result = '';

//add onClick events for the number elements
for(let i = 0; i < number1Elements.length; i++){
	number1Elements[i].addEventListener('click', () => {
		number1DisplayElement.value += number1Elements[i].value;
	});
}

for(let i = 0; i < number2Elements.length; i++){
	number2Elements[i].addEventListener('click', () => {
		number2DisplayElement.value += number2Elements[i].value;
	});
}

//add onClick events for the operation elements
//[0]=+, [1]=-, [2]=*, [3]=/, [4]=Clear
	operationElements[0].addEventListener('click', () => {
		calculateInputs('+');
	});
	operationElements[1].addEventListener('click', () => {
		calculateInputs('-');
	});
	operationElements[2].addEventListener('click', () => {
		calculateInputs('*');
	});
	operationElements[3].addEventListener('click', () => {
		calculateInputs('/');
	});
	operationElements[4].addEventListener('click', () => {
		number1DisplayElement.value = '';
		number2DisplayElement.value = '';
		resultElement.value = '';
	});

//check if the inputs are empty, return true if both are not empty
function checkInputs(){
		if( number1DisplayElement.value === ''){
			alert('number 1 empty');
			return false;
		}else if(number2DisplayElement.value === ''){
			alert('number 2 empty');
			return false;
		}else{
			return true;
		}
}

//calculate the result from the inputs
function calculateInputs(operation){
	if(checkInputs()){
		number1 = number1DisplayElement.value;
		number2 = number2DisplayElement.value;
		let a = parseInt(number1,10);
		let b = parseInt(number2,10);
		
	switch(operation){
		case '+':
			resultElement.value = a+b;
			break;
		case '-':
			resultElement.value = a-b;
			break;
		case '*':
			resultElement.value = a*b;
			break;
		case '/':
			resultElement.value = a/b;
			break;
		}
	}
}
