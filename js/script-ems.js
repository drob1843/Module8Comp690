// CREATE AN ARRAY OF EMPLOYEES

let employees = [
    [12345671, 'Diego', 1231, 'diego@email.com', 'Administrative'],
    [12345672, 'Zak', 1232,'zak@email.com', 'Engineering'],
    [12345673, 'Ruth', 1233, 'ruth@email.com','Sales'],
    [12345674, 'Mary', 1234, 'mary@email.com','Quality Assurance'],
    [12345675, 'Dan', 1235, 'danb@email.com','Marketing'],
]


// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY

let storedEmployees = localStorage.getItem('employees')
if (storedEmployees) {
    employees = JSON.parse(storedEmployees)
}


// GET DOM ELEMENTS

const $ = id => document.getElementById(id)

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
function view(employees) {
    let tbody = ''
    employees.forEach(emp => {
        tbody += `
        <tr>
            <td>${emp[0]}</td>
            <td>${emp[1]}</td>
            <td>${emp[2]}</td>
            <td>${emp[3]}</td>
            <td>
                <button class="delete">Delete</button>
            </td>
            </tr>
        `
    })
    $('empTable').querySelector('tbody').innerHTML = tbody
}

view(employees)

// ADD EMPLOYEE


form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()

    // GET THE VALUES FROM THE TEXT BOXES
    let id = document.getElementById('id').value
    let name = document.getElementById('name').value
    let extension = document.getElementById('extension').value
    let email = document.getElementById('email').value
    let department = document.getElementById('department').value


    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT

    let addEmp = [id, name, extension, email, department]

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY

    let employeesNewLength = employees.push(addEmp)

    // BUILD THE GRID

    view(employees)



// RESET THE FORM


resetForm()
});
const resetForm = () => {
    form.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus()
}




// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE

    // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)

    // REMOVE EMPLOYEE FROM ARRAY

    // BUILD THE GRID

});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION

    // REBUILD THE TBODY FROM SCRATCH

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE

    // BIND THE TBODY TO THE EMPLOYEE TABLE

    // UPDATE EMPLOYEE COUNT

    // STORE THE ARRAY IN STORAGE

};