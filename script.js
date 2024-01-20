let arr = [
  { id: 1, name: 'john', age: 18, profession: 'developer' },
  { id: 2, name: 'jack', age: 20, profession: 'developer' },
  { id: 3, name: 'karen', age: 19, profession: 'admin' },
];

function PrintDeveloper() {
  // Print all the employees who have the profession of developer.
  const developers = arr.filter(employee => employee.profession === 'developer');
  console.log('Developers:', developers);
}

function addData() {
  // Make another employee object and append that in this array.
  const newEmployee = { id: 4, name: 'susan', age: 20, profession: 'intern' };
  arr.push(newEmployee);
  console.log('Added new employee:', newEmployee);
}

function removeAdmin() {
  // Remove the object where the profession is admin.
  arr = arr.filter(employee => employee.profession !== 'admin');
  console.log('Removed employees with profession admin:', arr);
}

function concatenateArray() {
  // Make another array of employees and concat that in the original array.
  const newArray = [
    { id: 5, name: 'mike', age: 22, profession: 'developer' },
    { id: 6, name: 'emma', age: 23, profession: 'admin' },
  ];

  arr = arr.concat(newArray);
  console.log('Concatenated array:', arr);
}