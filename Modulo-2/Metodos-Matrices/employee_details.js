const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
];

const btnDisplayEmployees = document.getElementById('displayEmployees');

//Ver empleados----------------
btnDisplayEmployees.addEventListener(('click'), () => {
    const totalEmployees  = employees.map((employee) => {
        return `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`
    }).join('');;

    document.getElementById('employeesDetails').innerHTML = totalEmployees;
});

//Salario total---------------
calculateTotalSalaries = () => {
    const totalSalary = employees.reduce((total, item) => {
        return total + item.salary
    }, 0);
    console.log(totalSalary);
    document.getElementById('employeesDetails').innerHTML = totalSalary;
}

//Filtrar por departamento
const btnDepartamento = document.getElementById('displayHREmployees');

btnDepartamento.addEventListener(('click'), () => {
    const departamento = employees.filter((employee) => 
        employee.department === 'HR'
    );

    const recorrido = departamento.map((employee) => {
        return `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`
    }).join('');;

    document.getElementById('employeesDetails').innerHTML = recorrido;
});

//

findEmployeeById = (id) => {
    const idEncontrado = employees.find(employees => employees.id === id);
    if (idEncontrado) {
        document.getElementById('employeesDetails').innerHTML =`<p>${idEncontrado.id}: ${idEncontrado.name}: ${idEncontrado.name} - ${idEncontrado.department} - $${idEncontrado.salary}</p>`;
    }
    else{
        document.getElementById('employeesDetails').innerHTML = 'no se ha encontrado ningún empleado con este ID';
    }  
}