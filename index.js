//--------------Var Array---------------
let pets = [
  { name: "Meowsalot", spicies: "cat", age: 5 },
  { name: "Barklord", spicies: "dog", age: 4 },
  { name: "dr8legs", spicies: "Tarantula", age: 3 }
];

pets.push({ name: "Baby", spicies: "pig", age: 12 });
console.log(pets);
//---------------End---------------
//----String function--Start----
function grow (name,lastname) {
    console.log( 'Hey '+ name + ' '+lastname );

}

grow('Anny','Smith');

function greet (drx) {
  alert('My name is ' + drx);
}
greet ('Mario');

//--------------End--------------------------

//----Number function--Start----
function numbers(digit) {
    return digit * digit ;
}

let know_valeu = numbers (5);
console.log (know_valeu);
//-----------------End-----------------------

//-----Function 2------

document.addEventListener('click', artic);

function artic () {
  alert ("sooo coooold");
  
}
//------------------End--------------

//-----if statement------------------
let numOrange = 39;
if (numOrange >20 ) {
  document.write('Thats a good Joy!!');
} 
//---and the else part------
else
  {
    document.write('Not good Maan....')
  }

//----------- The Loop --------------------
let countNumb = 1; 
while (countNumb <= 300) {document.addEventListener('click', falaTu);

}
  document.write("Go on" countNumb );
       countNumb ++; 
       }
       
       
//-----The Cool Loop-----
let colorBox= ['Red','Blue','Pink','Orange'];

colorBox.forEach (theBox)

function theBox (color) {
  //----writing text in the page------///
  document.write ('The color ' + color + ' is in the Box!</br>')
}



//-----click Function-----
document.addEventListener('click', falaTu);
function falaTu() {
  document.write('Obrigado!');
}

