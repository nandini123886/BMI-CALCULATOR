window.onload=()=>{
 const button=document.querySelector('#btn');
 button.addEventListener('click',calculateBmi)
}
function calculateBmi(){
   const height=document.querySelector('#height').value;
   const weight=document.querySelector('#weight').value;
   const result=document.querySelector('#result');
   if(!height||height<0||isNaN(height)){
        result.innerText="please provide a valid height";
        alert("Please provide valid height");
        return;
   }else if(!weight||weight<0||isNaN(weight)){
    result.innerText="please provide a valid weight";
    alert("Please provide valid weight");
    return;
   }
  const bmi=(weight/((height*height)/10000)).toFixed(2);
  if(bmi<18.5){
    result.innerText=`Under Weight: ${bmi}`;

  }else if(bmi<24.9 && bmi>18.5){
    result.innerText=`Normal: ${bmi}`;

  }else if(bmi<29.9 && bmi>25){
    result.innerText=`Over Weight: ${bmi}`;

  }
  else if(bmi<34.9 && bmi>30){
    result.innerText=`Obesity(Class 1): ${bmi}`;

  }else if(bmi<39.9 && bmi>35){
    result.innerText=`Obesity(Class 2): ${bmi}`;

  }else{
    result.innerText=`Extreme Obesity: ${bmi}`;

  }
}