

function getStudentFullName(id){
    switch (id) {
        case 0:
            return "Piotr Żuławnik";
        case 1:
            return "Kacper Nowak";
        case 2:
            return "Maja Kowalska";
        default:
            return "Michał Wiśniewski";
    }
}
function getStudentid(id){
    switch (id) {
        case 0:
            return "48689";
        case 1:
            return "111222";
        case 2:
            return "222333";
        default:
            return "333444";
    }
}

module.exports={
    getStudentFullName,
    getStudentid,
}