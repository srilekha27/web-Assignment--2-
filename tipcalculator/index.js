function calculate( a,b) {  
  
    const tip= a * (b/100);
    alert(tip);
    const total= parseFloat(a) + parseFloat(tip);
    return total;
}  
document.getElementById('calculateButton').addEventListener('click', function()
{
    const subTotal = document.getElementById('subtotal').value;
    const tipPercentage = document.getElementById('tippercentage').value;
    alert(subTotal);
    alert(tipPercentage);
    const val = calculate(subTotal, tipPercentage);
    document.getElementById('result').textContent = 'Total amount is : '+ val;
});