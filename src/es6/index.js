function newFunction(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX'
    console.log(name, age, country);
}

//es6
function newFunction2(name = 'oscar', age = 32, country = "MX") {
    console.log(name, age, country);
};

newFunction2();
newFunction2('Ricardo', '22', 'CO');

let hello = "Hello";
let world = "World";
let epicPhrase = hello + '' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;


let lorem = "qui conseator. Commodi. Impsun vel duis yet mininima \n" + "otra frase epica que necesitamos."

//es6

let lorem2 = `otra frase epica que necistamos
ahora necesitamos otra frase epica
`;

console.log(lorem);
console.log(lorem2);

let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'MX'
}
console.log(person.name, person.age);

let { name, age, country } = person;

console.log(name, age, country);

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yescia', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);

{
    var primerdato = `primer dato`;

}

{
    let segundodato = "segundo dato";
    console.log(segundodato);
}

console.log(primerdato)

const a = 'b';
a = 'a';
console.log(a);

let name = 'oscar';
let age = 32;

obj1 = { name: name, age: age}; 
//es6
obj = { name, age};
console.log(obj2);

const names = [
    {name: 'Oscar', age: 32},
    {name: 'Yessica', age: 27}
]


let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
  
}

const listOfNames4  = name =>{
    //...
}

 const square = num => num  * num;

 const helloPromise = () => {
     return new Promise((resolve, reject) =>  {
if (true){
    resolve('Hey!');
}else{
  reject('ups!!');  
}
     });

     }
helloPromise()
.then(response => console.log(response))
.then(() => console.log ('hola'))
.catch(error => console.log(error));

































