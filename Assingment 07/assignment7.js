/**
 * 01. Create a Student Array Data Structure ( name, roll, age, class, gender, location, Admission fees ) 30.  now create a console data table Total Admnission fees
 */


const studentInfo=[
    {
       name: 'Sayyid Saadi',
        roll: 10,
        age: 18,
        class: 'four',
        gender: 'male',
        location: 'Sunamganj',
        fees:1000
    },
    {
        name:'Minhaj',
        roll: 1,
        age: 12, 
        class:'five', 
        gender:'male', 
        location: 'Sylhet',
        fees:1200
    },
    {
       name: 'Afsana',
        roll: 9,
        age: 15,
        class: 'five', 
        gender: 'female',
        location: 'Sylhet',
        fees: 1200
    },
    {
        name: 'Hamid',
        roll: 8,
        age: 9,
        class:'four',
        gender:'male', 
        location: 'Sunamganj',
        fees:1000
    },
    {
        name: 'Akkas',
        roll: 6, 
        age: 18, 
        class:'five', 
        gender: 'male',
        location: 'Sunamganj',
        fees: 1200
    },
    {
        name:'Asfaq',
        roll: 7,
        age: 8,
        class: 'four',
        gender: 'male', 
        location: 'Sylhet',
        fees: 1000
    },
    {
        name: 'Masuma',
        roll: 4,
        age: 17,
        class: 'five', 
        gender: 'female',
        location: 'Sylhet', 
        fees: 1200
    },
    {
        name:'Adiba',
        roll: 5,
        age: 15, 
        class: 'four', 
        gender: 'female',
        location: 'Sunamganj',
        fees:1000
    },
    {
        name: 'Robiul',
        roll: 3,
        age: 18, 
        class: 'five',
        gender: 'male',
        location: 'Sunamganj',
        fees: 1200
    },
    {
        name:'Fatema',
        roll:2,
        age: 15,
        class: 'four',
        gender:'female',
        location:'Hobiganj', 
        fees:1000
    },
    {
        name:'Ab Rahman',
        roll:11, 
        age:18, 
        class:'four',
        gender:'male', 
        location:'Sunamganj',
        fees:1000
    },
    {
        name:'Shibbir',
        roll:13,
        age: 12,
        class:'five', 
        gender:'male', 
        location:'Sylhet',
        fees:1200
    },
    {
        name:'Mahmuda',
        roll:12,
        age:15,
        class:'five', 
        gender:'female', 
        location:'Sylhet',
        fees:1200
    },
    {
        name:'Monsur',
        roll:15,
        age:17, 
        class: 'four', 
        gender: 'male', 
        location: 'Sunamganj',
        fees:1000
    },
    {
        name:'Moksud', 
        roll: 14,
        age: 18, 
        class: 'five',
        gender: 'male', 
        location: 'Sunamganj', 
        fees:1200
    },
    {
        name:'Raju', 
        roll: 17, 
        age: 13, 
        class: 'four', 
        gender: 'male',
        location: 'Sylhet',
        fees: 1000
    },
    {
        name: 'Nodi', 
        roll: 16, 
        age: 17, 
        class: 'five', 
        gender:'female', 
        location:'Sylhet', 
        fees:1200
    },
    {
        name: 'Fariya',
        roll: 18, 
        age:15, 
        class: 'four', 
        gender: 'female', 
        location: 'Sunamganj',
        fees: 1000
    },
    {
        name: 'Mohaimin', 
        roll: 19,
        age: 18, 
        class: 'five',
        gender: 'male', 
        location: 'Sunamganj', 
        fees: 1200
    },
    {
        name: 'Nadiya', 
        roll: 20, 
        age: 15, 
        class:'four',
        gender: 'female',
        location: 'Hobiganj',
        fees:1000
    },
    {
        name: 'Forid',
        roll: 21,
        age: 18, 
        class: 'four',
        gender: 'male', 
        location: 'Sunamganj', 
        fees: 1000
    },
    {
       name: 'Ali Hossen',
        roll: 22, 
        age: 12, 
        class: 'five', 
        gender: 'male', 
        location: 'Sylhet', 
        fees: 1200
    },
    {
        name: 'Hafsa', 
        roll: 23, 
        age:15, 
        class: 'five', 
        gender: 'female', 
        location: 'Sylhet', 
        fees: 1200
    },
    {
        name: 'Shahinur',
        roll: 24, 
        age: 17, 
        class: 'four', 
        gender: 'male', 
        location: 'Sunamganj', 
        fees: 1000
    },
    {
        name: 'Shahab',
        roll: 25, 
        age: 18, 
        class: 'five',
        gender: 'male', 
        location: 'Sunamganj',
        fees: 1200
    },
    {
        name: 'Sakib',
        roll: 26,
        age: 13, 
        class:'four', 
        gender: 'male', 
        location: 'Sylhet',
        fees: 1000
    },
    {
        name: 'Mim',
        roll: 27,
        age: 17, 
        class: 'five', 
        gender: 'female', 
        location: 'Sylhet',
        fees: 1200
    },
    {
        name: 'Farzana', 
        roll: 28,
        age: 15,
        class: 'four', 
        gender: 'female',
        location: 'Sunamganj', 
        fees: 1000
    },
    {
        name: 'Yasin',
        roll: 29, 
        age: 18, 
        class: 'five', 
        gender: 'male', 
        location: 'Sunamganj', 
        fees: 1200
    },
    {
        name: 'Jesmin',
        roll: 30,
        age: 15, 
        class: 'four', 
        gender: 'female', 
        location: 'Hobiganj', 
        fees: 1000
    }
]

/*
let amount=0;
studentInfo.map((item, index)=>{
    console.log(`
        ID: ${index+1}
        Name: ${item.name}
        Roll : ${item.roll}
        Age: ${item.age}
        Class Name: ${item.class}
        Gender : ${item.gender}
        Location : ${item.location}
        Fees : ${item.fees}
`)
    amount += item.fees;
    
})

console.log(`
------------------------------------------
Total Fees = ${amount} Taka
    `)

*/


/**
 *  02. Find All Female Students
 */

/*
let totalFemale=0;
studentInfo.map((item, index)=>{
  if(item.gender=='female'){
        console.log(`
        ID: ${index+1}
        Name: ${item.name}
        Roll : ${item.roll}
        Age: ${item.age}
        Class Name: ${item.class}
        Gender : ${item.gender}
        Location : ${item.location}
        Fees : ${item.fees}
`)
      totalFemale++;
  }
    
})

console.log(`
------------------------------------------
Total Female Students = ${totalFemale} 
    `)
    
    */


/**
 * 03. Find class wise student result
 */

/*
let totalStudent=0;
studentInfo.map((item, index)=>{
  if(item.class=='four'){
        console.log(`
        ID: ${index+1}
        Name: ${item.name}
        Roll : ${item.roll}
        Age: ${item.age}
        Class Name: ${item.class}
        Gender : ${item.gender}
        Location : ${item.location}
        Fees : ${item.fees}
`)
      totalStudent++;
  }
    
})

console.log(`
------------------------------------------
Class Four Total Students = ${totalStudent} 
    `)
*/

/*
let totalStudent=0;
studentInfo.map((item, index)=>{
  if(item.class=='five'){
        console.log(`
        ID: ${index+1}
        Name: ${item.name}
        Roll : ${item.roll}
        Age: ${item.age}
        Class Name: ${item.class}
        Gender : ${item.gender}
        Location : ${item.location}
        Fees : ${item.fees}
`)
      totalStudent++;
  }
    
})

console.log(`
------------------------------------------
Class Five Total Students = ${totalStudent} 
    `)
*/



/**
 * 04. Location wise student result
 */


/*
let totalStudent=0;
studentInfo.map((item, index)=>{
  if(item.location=='Sunamganj'){
        console.log(`
        ID: ${index+1}
        Name: ${item.name}
        Roll : ${item.roll}
        Age: ${item.age}
        Class Name: ${item.class}
        Gender : ${item.gender}
        Location : ${item.location}
        Fees : ${item.fees}
`)
      totalStudent++;
  }
    
})

console.log(`
------------------------------------------
Total Students Of Sunamganj = ${totalStudent} 
    `)

*/




/**
 * 05. find student between 10 - 25 age
 */


let totalStudent=0;
studentInfo.map((item, index)=>{
  if(item.age>=10 && item.age<25){
        console.log(`
        ID: ${index+1}
        Name: ${item.name}
        Roll : ${item.roll}
        Age: ${item.age}
        Class Name: ${item.class}
        Gender : ${item.gender}
        Location : ${item.location}
        Fees : ${item.fees}
`)
      totalStudent++;
  }
    
})

console.log(`
------------------------------------------
Total Students = ${totalStudent} 
    `)




