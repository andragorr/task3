// let i = [ 3 , 4 ,6 , 123 , 325];
// for (let i = 0; i > 15; i++); {
//     console.log(i)
// }

// let i = [ 'sadsad' , 'sadasdfas', 'tyg' , 'ncxvxc' , 'uytu'];
// for (let i = 0; i > 15; i++); {
//     console.log(i)
// }

// let i = [ 'sadsad' , false, 123 , 'ncxvxc' , true];
// for (let i = 0; i > 15; i++); {
//     console.log(i)
// }


// let i = [ 'sadsad' , false, 123 , 'ncxvxc' , true];
// for (let i = 0; i > 15; i++); {
//     console.log(i[3])
// }


// task 5
// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>asdasdsada</div>`);
// }

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>asdasdsada ${i}</div>`);
// }


// for (let i = 0; i < 10; i++) {
//     for (let k = 0; k < 10; k++) {
//         console.log( i , [k]);
//     }  
// }



// task 9

// let table = 0;
// while ( table < 20) {
//     document.write(`<h1>brown metalic </h1>`);
//     table++;
// }


// let table = 0;
// while ( table < 20) {
//     document.write(`<h1>brown metalic ${table}</h1>`);
//     table++;
// }


// let arr = [23 , 543 , 546 , 654 ,874 , 123 , 756 , 856 , 921 , 8678 ] ;
// for ( let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// let arr = ['asdsad' ,'asvxcv' , 'bcvgb' , 'bcvxy' , 'gdsgsf' , 'yrtyr' , 'gfhjf' , 'sdfhtr' , 'nvbnfg' , 'vbvtwq' ] ;
// for ( let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// let arr = ['asdsad' ,'asvxcv' , 'bcvgb' , 'bcvxy' , 'gdsgsf' , 123 , 756 , 856 , 921 , 8678  ] ;
// for ( let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// let arr = [ 'gdsgsf' , 'yrtyr' , 'gfhjf' , 756 ,  921 , 8678 , true , false , true, false ] 
// for (let i = 0; i < arr.length; i++) {
//    if(typeof arr[i] === 'boolean') {
//         console.log(arr[i]);
//     }     
//  }


// let arr = [ 'gdsgsf' , 'yrtyr' , 'gfhjf' , 756 ,  921 , 8678 , true , false , true, false ] 
// for (let i = 0; i < arr.length; i++) {
//    if(typeof arr[i] === 'number') {
//         console.log(arr[i]);
//     }     
//  }

// let arr = [ 'gdsgsf' , 'yrtyr' , 'gfhjf' , 756 ,  921 , 8678 , true , false , true, false ] 
// for (let i = 0; i < arr.length; i++) {
//    if(typeof arr[i] === 'string') {
//         console.log(arr[i]);
//     }     
//  }


// let arr = [];
// arr.push([ 'gdsgsf' , 'yrtyr' , 'gfhjf' , 756 ,  921 , 8678 , true , false , true, false ]);
// console.log(arr);

// for ( i = 0; i < 10; i++) {
//     console.log(i);
//     document.write(i);
// }  


// for ( i = 0; i < 100; i++) {
//     console.log(i);
//     document.write(i);
// }  

// for ( i = 0; i <= 100; i++) {
//     if (i%2 === 0){  
//     console.log(i);
//     document.write(i);
//     }
// }


// for ( i = 0 ; i < 60 ; i++) {
//     for ( k = 1 ; k < 60; k++) {
//         console.log( i , k );
//     }
// }


// for ( i = 0 ; i < 3 ; i++) {
//     for ( k = 0 ; k < 30; k++) {
//         for ( s = 0; s < 60; s++) {
//             console.log( i , k , s );
//             document.write(  i , k , s  );
//         }
//     }
// }

// Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

// let arr = [ 'a', 'b', 'c'];
// let b = "";
// for ( i = 0; i < arr.length; i++) {
//     b = b +arr[i];
// }
// console.log(b);


// let arr = [ 'a', 'b', 'c'];
// let i = 0;
// let b = "";


// while (i < arr.length){
//     b = b + arr[i];
//     arr++;
// }
// console.log(b);


// let arr = [ 'a', 'b', 'c'];
// let b = "";

// for ( const string of arr){
//     b = b + string;
// }
// console.log(b);

// let arr = [ 'a', 'b', 'c'];
// let b = "";

// for ( const string of arr){
//     b = b + string;
// }
// console.log(b);


// let arr = [ 'a', 'b', 'c'];

// arr.push(1 , 2 ,3 );
// console.log(arr);

// let arr = [ 1 , 2, 3];
// let newArray = arr.reverse();
// console.log(newArray);

// let arr = [ 1 , 2, 3] ;
// for ( let i = 6; i >= 4; i--) {
//     arr.unshift(i);
// }
// console.log(arr);

// - Дан масив ['js', 'css', 'jq']. 
// Виведіть на екран перший елемент за допомогою shift()

// arr = ['js', 'css', 'jq'];
// for ( let i = 1; i <= 2; i++) {
//     arr.shift(i);
// } console.log(arr);

// const arr = ['js', 'css', 'jq'];
// console.log(arr);
// const newArr = arr.pop();
// console.log ('newArr', newArr);
// console.log('arr', arr);

// const arr = [1, 2, 3, 4, 5];
// console.log(arr.slice(3));


// const arr = [1, 2, 3, 4, 5];
// console.log(arr.slice(0 , 2));

// Дан масив [1, 2, 3, 4, 5]. 
// За допомогою методу/функції splice перетворіть масив в [1, 4, 5].


// const arr = [1, 2, 3, 4, 5];
// arr.splice(1, 2);
// console.log(arr);

// Дан масив [1, 2, 3, 4, 5]. 
// За допомогою методу/функції splice
//  зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].


// const arr = [1, 2, 3, 4, 5];
// arr.splice(3, 0, 'a','b','c');
// console.log(arr);


// Дан масив [1, 2, 3, 4, 5]. 
// За допомогою методу/функції splice зробіть з нього масив 
// [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].


// const arr = [1, 2, 3, 4, 5];
// arr.splice(1, 0, 'a','b');
// arr.splice(6,0, 'c');
// arr.splice(8,0, 'e');

// console.log(arr);

// const arr = [ 3 , 4 ,6 , 123 , 244 , 123 , 456, 789 , 452 , 693];
// for (let i = 0; i < arr.length; i++); {
//     if(arr[i]%2 == 0){
//         console.log(arr[i]);
//     }
// }


// const arr = [ 3 , 4 ,6 , 123 , 244 , 123 , 456, 789 , 452 , 693];
// const arr2 = [];
// for ( let i = 0; i < arr.length; i ++){
//     arr2.push(arr[i]);
// }
// console.log(arr);
// console.log(arr2);

// let array = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while ( i < array.length) {
//     console.log(array);
//     array++;
// }


// let array = [2,17,13,6,22,31,45,66,100,-18];

// for ( i = 0; i < array.length; i++){
//     console.log(array[i]);
// }

// let array = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while ( i < array) {
//     if (array[i]%2 === 1);
//         array++;
// }
// console.log(array);

// let array = [2,17,13,6,22,31,45,66,100,-18];
// for ( i = 0; i < array.length; i++){
//     if ( array[i]%2 === 1){
//         console.log(array[i]);
//     }
// }

// let array = [2,17,13,6,22,31,45,66,100,-18];
// for ( i = 0; i < array.length; i++){
//     if ( array[i]%2 === 0){
//         console.log(array[i]);
//     }
// }

// let array = [2,17,13,6,22,31,45,66,100,-18];
// for ( i = 0; i < array.length; i++){
//     if ( array[i]%3 === 0){
//     array[i] = 'okten';
//     }
// }
// console.log(array );


// let array = [2,17,13,6,22,31,45,66,100,-18];
// let newArray = array.reverse();
// console.log(newArray);


// const array1 = [];
// const array2 = [];
// for (i = 0; i <100; i++){ 
//     if (i%2 === 2);
//      array1[i]= i * 2; 
//      array2[i]=i * 2 + 1;  
//     }
//     console.log(array1);   
//     console.log(array2);   

// let array = [100,250,50,168,120,345,188];
// // let newArray = [];
// for ( i = 0 ; i < 6; i++){
//     array[i]= Math.floor(Math.random() * (732 - 8));
// }
//     console.log(array);
// for (let i = 2; i <array.length; i+=3){
//     console.log(array[i]);
// }






// for (let i = 2; i <array.length; i+=3){
//     if(array[i]%2 === 0) {

//         console.log(array[i]);
//     }
// }





// for (let i = 2; i <array.length; i+=3){
//     if(array[i]%2 === 0) {
       
//             newArray.push(array[i]);
//         }      
//     }
//     console.log(newArray);

// for (let i = 0; i <array.length; i++){
//     if(array[i+1]%2 === 0) {

//         console.log(array[i]);
//     }
// }



// let array = [];
// let newArray = [];
// for ( i = 0 ; i < 10; i++){
//     array[i]= Math.floor(Math.random() * (100 - 1) );
// }
//     console.log(array);
   
//     for( let i = 0 ; i < array.length; i++) {
//         newArray[i] = array[i] *5;
//     }
//     console.log(newArray);


// let array  = [ 'sadsad' , false, 123 , 'ncxvxc' , true , 5234 , 188 , 286];
// let newArray = [];
// for (let i = 0; i < array.length; i++); {
//     if(typeof array.length === 'boolean') {

//         newArray[i] = array[i];
//     }
// }
// console.log(newArray[i]);


