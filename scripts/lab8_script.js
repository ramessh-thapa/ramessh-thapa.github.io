//Question No. 1: Using Object Literal

const student={
    firstName: "",
    lastName: "",
    grades: [],
    inputNewGrade: function(newGrade){
        this.grades.push(newGrade);
    },
    computeAverageGrade: function(){
      let sum=  this.grades.reduce((a,c)=>a+c,0);
      let length=this.grades.length;
      return sum/length;
    }  
}

const student1 = {
    firstName: "Avinash",
    lastName: "Ghimire",
    grades: [55,49,67,56,66],
    __proto__:Object.create(student)
  };

  const student2 = {
    firstName: "Amrit",
    lastName: "Bhattarai",
    grades: [56,59,76,45,49],
    __proto__:Object.create(student) 
  };  
  
  const student3 = {
    firstName: "Manish",
    lastName: "Basnet",
    grades: [48,44,67,58,57],
    __proto__:Object.create(student) 
  
  };

  let students1=[student1,student2,student3];

  let avg1=students1.reduce((a,c)=>a+c.computeAverageGrade(),0)/students1.length;

  console.log(avg1);

  //Question No. 2: Using Constructor Function

  function Student(firstName,lastName,grades){
    this.firstName=firstName;
    this.lastName=lastName;
    this.grades=grades;
    this.inputNewGrade=function(newGrade){
        this.grades.push(newGrade);
    }
    this.computeAverageGrade=function(){
       return this.grades.reduce((a,c)=>a+c,0)/this.grades.length;
    }
  }

const student4 = new Student("Avinash", "Ghimire",  [55,49,67,56,66]);
const student5 = new Student("Amrit", "Bhattarai",  [56,59,76,45,49]);
const student6 = new Student("Manish", "Basnet",[48,44,67,58,57]);

let students = [student1, student2, student3];

let avg = students.reduce((a, c) => a + c.computeAverageGrade(), 0) / students.length;

console.log(avg);


//Question no 3

arr=[3,2,1];

Array.prototype.sortAsc=function(){
    return this.sort((a,b)=>a-b);
};

console.log(arr.sortAsc());
