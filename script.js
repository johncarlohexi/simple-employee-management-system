let employeesId = [
    {name:"Tanaka", id:101, workDays:20},
    {name:"Ella", id:102, workDays:18},
    {name:"Jason", id:103, workDays:17},
    {name:"Pop", id:104, workDays:23},
    {name:"Carlo", id:105, workDays:12},
    {name:"Reigne", id:106, workDays:5},
]

let emId;
let emIdNum
let res;

/* employes details*/
let employeeName = document.querySelector(".employee-name")
let employeeId = document.querySelector(".employee-id")
let employeeDays = document.querySelector(".working-days")

/* Salary Calculator */

let gakumen = document.querySelector(".gakumen")
let baito = 10000;
let seishain = 16250;

/* Select Position */

let getPosition;
function selectP() {
    getPosition = document.getElementById("position").value
    console.log(getPosition)
}


function getId() {
    emId = document.getElementById("idBox").value
    emIdNum = Number(emId)
    res = employeesId.find(findId);

    if (emId == null || emId == "") {
        alert("IDを入れてください。")
    }

    selectP()

    if (getPosition === "baito") {
        let baitoSalary = res.workDays * baito;
        gakumen.innerHTML = baitoSalary
        console.log(baitoSalary)
    } else if (getPosition === "seishain") {
        let seishainSalary = res.workDays * seishain;
        gakumen.innerHTML = seishainSalary
        console.log(seishainSalary)
    } else {
        gakumen.innerHTML = "役員を選択してください。"
    }

    if (res) {
        employeeName.innerHTML = res.name
        employeeId.innerHTML = res.id
        employeeDays.innerHTML = res.workDays
    } else {
        employeeName.innerHTML = "IDを入れてください"
        employeeId.innerHTML = "IDを入れてください"
        employeeDays.innerHTML = "IDを入れてください"
    }


}

function findId(item) {
    return item.id === emIdNum;
}