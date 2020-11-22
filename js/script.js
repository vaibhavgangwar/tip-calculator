const form = document.getElementById('calculator')
form.onsubmit = function(event){
  event.preventDefault()
const howMuch = document.getElementById('bill').value;
const tipPercentage = document.getElementById('percentage').value;
const customerNum = document.getElementById('customer-num').value;
if(isNotBlank(howMuch) && isNotBlank(tipPercentage) && isNotBlank(customerNum)){
	let billAmount = parseFloat(howMuch);
	let numberOfPerson = parseInt(customerNum);
	let tipPerPerson = calculatePercentageAmount(billAmount, parseInt(tipPercentage))/numberOfPerson;
	let amountPerPerson = (billAmount / numberOfPerson) + tipPerPerson;
	document.getElementById('total-per-customer').value = amountPerPerson;
	document.getElementById('tip-per-person').value = tipPerPerson;
}
function isNotBlank(value){
  return value !== '' ? true : false;
}

function calculatePercentageAmount(cost, percentage){
  return Math.round((cost/100) * percentage);
}
  return false
}
