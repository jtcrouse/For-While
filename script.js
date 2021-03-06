var num1=Number(prompt("Enter in a number."));
if(num1>=0||num1<=0)
  {
    var condition1=1;
  }
else
  {
    document.body.querySelector(".message").innerHTML="You didn't enter in a number, do it all again."; 
    close;
  }


var num2=Number(prompt("Enter in a second number."));
if(num2>=0||num2<=0)
  {
    var condition2=1;
  }
else
  {
    document.body.querySelector(".message").innerHTML="You didn't enter in a second number, do it all again."; 
    close;
  }


var operator=(prompt("Enter in a operator to calculate your numbers. Example: +, -, *, /."));
if(operator=="/"||operator=="+"||operator=="-"||operator=="*")
  {
    var condition3=1;
  }
else
  {
    document.body.querySelector(".message").innerHTML="You didn't enter in a operator, do it all again."; 
  }

if(condition1==1&&condition2==1&&condition3==1)
  {
    if(operator=="-")
      {
        answer=num1-num2;
      }
    if(operator=="+")
    {
      answer=num1+num2;
    }
    if(operator=="/")
    {
      answer=num1/num2;
    }
    if(operator=="*")
    {
      answer=num1*num2;
    }
    document.body.querySelector(".message").innerHTML="Your equation equals, "+answer+".";
  }