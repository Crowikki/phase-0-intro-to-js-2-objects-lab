// Write your solution in this file!

const employee = {
   name: "Jeff",
    streetAddress: "Seaseme street"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
   employee[key] = value;
   return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key] 
    // forgot there was a delete keyword to delete but you had everything right
    // newEmployee = { ...employee}; this line copies the employee object
    // delete gets rid of the key variable 
    return newEmployee;
    // returns the newEmployee variable
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
    // this copies the {employee obj}
   delete employee[key] // deletes the employee [key] and modifies the original 
   return employee; // returns the employee obj but deleted the key
   // don't forget to check this later and watch more tuts on arrays and object manipulation

}


