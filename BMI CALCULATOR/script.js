let button = document.getElementById('button');

button.addEventListener('click',()=>{
    const height=parseFloat(document.getElementById('height').value);
    const weight=parseFloat(document.getElementById('weight').value);
    const result=document.getElementById('output');
    let height_status=false,weight_status=false;

    if(height ===''|| isNaN(height)||(height<=0)){
        document.getElementById('height_err').innerHTML = 'Please enter a valid height';
    }else{
        document.getElementById('height_err').innerHTML = '';
        height_status=true;
    }

    if(weight === '' || isNaN(weight) || (weight <= 0)){
        document.getElementById('weight_err').innerHTML = 'Please enter a valid weight';
    }else{
        document.getElementById('weight_err').innerHTML = '';
        weight_status=true;
    }

    if(height_status && weight_status){
        const bmi = (weight / ((height*height)/10000)).toFixed(2);

        if(bmi < 18.6){
            result.innerHTML = ' You are Under weight<br>  BMI: ' + bmi;
        }else if(bmi >= 18.6 && bmi < 24.9){
            result.innerHTML = ' You are Normal!<br> BMI:  ' + bmi;
        }else{
            result.innerHTML = 'You are Over weight <br> BMI:' + bmi;
        }
    }else{
        result.innerHTML = '';
    }
});
    