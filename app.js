

// const addButton = document.getElementById('sum-button');

// addButton.addEventListener('click', () => {
    
//     const input1a = document.getElementById('add-first');
//     // console.log(input1a.value);
//     const input2a = document.getElementById('add-second');
//     // console.log(input2a.value);

//     const resultSpana = document.getElementById('sum-result');

//     const firstValuea = Number(input1a.value);
//     const secondValuea = Number(input2a.value);
//     const sum = firstValuea + secondValuea;
//     // console.log(sum);
//     resultSpana.textContent = sum;
// });

const Button = document.getElementById('myButton');
const Input = document.getElementById('myInput');
const Output = document.getElementById("myOutput");
const Name = document.getElementById('Name');


Button.addEventListener('click',() =>{
    // console.log(Button )
    
   Name.textContent = Input.value 


});


// function change_text(){
//         var Name = document.getElementById("myName").value;
//         document.getElementById("myInput").innerHTML = Name;
//         console.log("Function change text")
//         }


// Button.addEventListener('click',change_text(), () =>{
//     // console.log(Button )
    

    

// });