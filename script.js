let employeesId = [
    {name:"Tanaka", id:101, workDays:20},
    {name:"Ella", id:102, workDays:18},
    {name:"Jason", id:103, workDays:17},
]

let emId;
let emIdNum
let res;
function getId() {
    emId = document.getElementById("idBox").value
    emIdNum = Number(emId)
    res = employeesId.find(findId);
    console.log(res)
}

function findId(item) {
    return item.id === emIdNum;
}

let getText = document.getElementsByClassName("boxes")

for (let i = 0; i < getText.length; i++) {

    let employeeName = getText[i].getElementsByClassName("employee-name")[0]
    let employeeId = getText[i].getElementsByClassName("employee-id")[0]
    let workingDays = getText[i].getElementsByClassName("working-days")[0]

    if (employeeName) {
        employeeName.innerHTML = "asd"
    }

    if (employeeId) {
        employeeId.innerHTML = "sad"
    }

    if (workingDays) {
        workingDays.innerHTML = "ss"
    }
    console.log(employeeName, employeeId, workingDays)
}
