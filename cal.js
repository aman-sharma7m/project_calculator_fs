var buttons=document.getElementsByClassName('button');
var display=document.getElementById('display-container');

var operand1=0;
var operator=null;
var operand2=0;

// add eventlistner for each button 
for(var i=0; i<buttons.length;i++){

  buttons[i].addEventListener('click',function(){
    // all cal logic will be here

    // get the value of button
    var value=this.getAttribute('data-value');
    // console.log(value);


    if(value=='+'){
      // if an oprator is clicked
      operator='+';
      operand1=parseFloat(display.textContent);
      display.innerText='';
    }
    else if(value=='-'){
      operator='-';
      operand1=parseFloat(display.textContent);
      display.innerText='';
    }
    else if(value=='/'){
      operator='/';
      operand1=parseFloat(display.textContent);
      display.innerText='';
    }
    else if(value=='*'){
      operator='*';
      operand1=parseFloat(display.textContent);
      display.innerText='';
    }
    else if(value=='sign'){
      
      var data=display.innerText;
      if (data[0]!='-'){
        display.innerText='-'+data;
      }
      else{
        display.innerText=data.slice(1);
      }
    }
    else if(value=='='){
      // get secondoperator and use eval 
      operand2=parseFloat(display.textContent)
      if (operator!='/'){
      result=eval(operand1+' '+operator+' '+operand2)
      display.innerText=result;
      }
      else if (operand2!='0'){
        result=eval(operand1+' '+operator+' '+operand2)
        display.innerText=result;
      }
      else {
        display.innerText='Error!!!!'
        operand1=0;
        operand2=0;
        operator=null;
      }

    }
    else if(value=='AC'){
      display.innerText='';
      operand1=0;
      operand2=0;
      operator=null;
    }
    else{
        display.innerText+=value;
    }
  })
}