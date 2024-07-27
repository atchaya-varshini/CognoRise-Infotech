let input= document.getElementById('inputBox');
let buttons=document.querySelectorAll('button');
let string="";
buttons.forEach(element => {
    element.addEventListener('click', (e) =>{
        
        if(e.target.innerText == '='){
            string = string =='' ? '0' : string;
            try{
            string = eval(string);
            input.value = string;
            }
            catch(error)
            {
                inputBox.value="ERROR!";
            }
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value=string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value=string;
        }
        else if(e.target.innerHTML == ''){
            string = "";
            input.value=string;
        }
        else{
            string +=e.target.innerHTML;
            input.value=string;
        }
        
    })
});