const students = [
    {id: 1, name: 'Ravi', age: 20},
    {id: 2, name: 'Raju', age: 22},
    {id: 3, name: 'Karthik', age: 20},
];
//create a student
const newStudent = {id: 4, name: 'Anil', age: 21};
students.push(newStudent);
//read all students
console.log('All Students:', students);
//Read a student by id
const studentIdToRead = 2;
const studentToRead = students.find(student => student.id === studentIdToRead);
if(studentIdToRead){
    console.log('Student with ID ${studentIdToRead} :', studentIdToRead);

}
else
{
    console.log('Student with ID ${studentIdToRead} not found');
}
//update a student by id
const studentIdToUpdate = 3;
const updateData = {id: 3, name: "Rohan", age: 21};
const updateIndex = students.findIndex(student => student.id === studentIdToUpdate);
if(updateIndex !== -1){
    students[updateIndex] = {...students[updateIndex], ...updateData};
    console.log("student updated", students[updateIndex]);
}
else{
    console.log('students with ID ${studentId} not found');
}
//delete a student by id
const deleteId = 1;
const deleteIndex = students.findIndex(student => student.id === deleteId);
if(deleteIndex !== -1){
    const deletedStudent = students.splice(deleteIndex, 1);
    console.log("student Deleted:", deletedStudent[0]);
}
else{
    console.log('Student with ID ${deleteId} not found');
}
console.log("students after CRUD :", students);