let employeesId = [
    {name:"Tanaka", id:101, workDays:20},
    {name:"Ella", id:102, workDays:18},
    {name:"Jason", id:103, workDays:17},
]

let emId;
let emIdNum
function getId() {
    emId = document.getElementById("idBox").value
    emIdNum = Number(emId)
    let res = employeesId.find(findId);
    console.log(res)
}

function findId(item) {
    return item.id === emIdNum;
}
