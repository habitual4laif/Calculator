var worksheet = document.getElementById('worksheet');

var dot = document.getElementById('buttondot');
var del = document.getElementById('buttonDel');
var back = document.getElementById('buttonback');

var buttons = document.getElementsByClassName('buttons');
var buttonSign = document.getElementsByClassName('buttonSign');

var worksheetDisplay = "0";
var pendingVal;
var arithmeticStrArray = [];

//Function for the numbers
function updateDisplayVal (linkItThru){
    var butText = linkItThru.target.innerText;
    
    if(worksheetDisplay === '0'){
        worksheetDisplay = '';  
    }
    worksheetDisplay += butText;
    worksheet.innerText = worksheetDisplay;   
}


function performOperation (linkItThru){
    var perform = linkItThru.target.innerText;
    
    switch (perform){
        case '+':
            pendingVal = worksheetDisplay;
            worksheetDisplay = "0";
            worksheet.innerText = worksheetDisplay; 
            arithmeticStrArray.push(pendingVal);
            arithmeticStrArray.push('+');
            break;
            
        case '-':
            pendingVal = worksheetDisplay;
            worksheetDisplay = "0";
            worksheet.innerText = worksheetDisplay; 
            arithmeticStrArray.push(pendingVal);
            arithmeticStrArray.push('-');
            break;
        case '*':
            pendingVal = worksheetDisplay;
            worksheetDisplay = "0";
            worksheet.innerText = worksheetDisplay; 
            arithmeticStrArray.push(pendingVal);
            arithmeticStrArray.push('*');
            break;
        case '/':
            pendingVal = worksheetDisplay;
            worksheetDisplay = "0";
            worksheet.innerText = worksheetDisplay; 
            arithmeticStrArray.push(pendingVal);
            arithmeticStrArray.push('/');
            break;
        case '=':
            arithmeticStrArray.push(worksheetDisplay);
            var total = eval(arithmeticStrArray.join('')); //['6', '+', '9'] '2 + 7'
            worksheetDisplay = total + '';
            worksheet.innerText = worksheetDisplay;
            arithmeticStrArray = [];
            break;
        default:
            break;
    }
  
}

for (let i = 0; i < buttons.length; i++)   {
    buttons[i].addEventListener('click', updateDisplayVal, false);
} 

for (let i = 0; i < buttonSign.length; i++)   {
    buttonSign[i].addEventListener('click', performOperation, false);
}   

//To clear all numbers from the display    
    del.onclick = () => {
        worksheetDisplay = '0';
        pendingVal = undefined;
        arithmeticStrArray = [];
        worksheet.innerHTML = worksheetDisplay;
    }  
//To clear the last digit from the display
    back.onclick = () => {
        let worksheetLength = worksheetDisplay.length;
        worksheetDisplay = worksheetDisplay.slice(0, worksheetLength - 1);
        
        if (worksheetDisplay === ''){
            worksheetDisplay = '0';
        }
        worksheet.innerText = worksheetDisplay;
    }
//To ensure the decimal is not repeated more than once in a single calculation
    dot.onclick = () => {
        if (!worksheetDisplay.includes('.')){
            worksheetDisplay += '.';
        }
            worksheet.innerText = worksheetDisplay;   
    }
    
    
    
    
    
    
    
    
    
    
    
    
    






