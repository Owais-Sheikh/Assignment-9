// -------------------------------- Object Exercise --------------------------------

// ------------------------------------- Q # 1 -------------------------------------
// 1. Write a TypeScript program to list the properties of a TypeScript object

// var student = {
//     name : "Owais raza",
//     sclass : "2",
//     rollno : 64180 
// };
// console.log("Student name is : ",student.name);
// console.log("Student sclass is : ",student.sclass);
// console.log("Student rollno is : ",student.rollno);

// ------------------------------------- Q # 2 -------------------------------------
// 2. Write a TypeScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.

// var student = {
//     name: "Owais raza",
//     sclass: 2,
//     rollno: 64180
// };
// console.log("Before Deleting roll no from object : ",student);
// delete student.rollno;
// console.log("After Deleting roll no from object is : ",student);

// ------------------------------------- Q # 3 -------------------------------------
// 3. Write a TypeScript program to get the length of a TypeScript object.   

// var student = {
//     name: "Owais raza",
//     sclass: 2,
//     rollno: 64180
// };
// var a = Object.keys(student).length;
// console.log("Length of object is : ", a);

// ------------------------------------- Q # 4 -------------------------------------
// 4. Write a TypeScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.   

// var library = [ 
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title:  'Mockingjay: The Final Book of The Hunger Games', 
//         readingStatus: false
//     }];
// for (let index = 0; index < library.length; index++) {
//     const element = library[index];
//     console.log(`Book title is : `,element.title,`\nBook author is : `,element.author,`\nBook reading status is : `,element.readingStatus);
// }

// ------------------------------------- Q # 5 -------------------------------------

// 5. Write a TypeScript program to get the volume of a Cylinder with four decimal places using object classes.   
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.

// var Volume = {
//     radius : 12.2,
//     height : 10.1,
//     pie : 3.14,
// };
// var volume = Volume.pie * Volume.radius * 2 * Volume.height;
// console.log(volume);

// ------------------------------------- Q # 6 -------------------------------------

// 6. Write a Bubble Sort algorithm in TypeScript.   

// var array:number[] = [6,4,0, 3,-2,1];
// for(var i = 0;i < array.length-1; i++){
//     for(var j = 0;j < array.length-i; j++){
//         if(array[j] > array[j+1]){
//             var temp = array[j];
//             array[j] = array[j+1];
//             array[j+1] = temp;
//         }
//     }
// }
// console.log(array);