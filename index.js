// Write your solution in this file!

const employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
    
}

function updateEmployeeWithKeyAndValue(employee, key, value){
     const employeeNew = {...employee};
     employeeNew[key] = value;
     return employeeNew;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key,) {
    const newEmployee = {...employee};
    //=> this is copying the employee obj and then deleting
    // the key from the copy 
    delete newEmployee[key]
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    
    delete employee[key]
    //=> deletes the key value from the obj and returns it with it missing
    return employee;
}