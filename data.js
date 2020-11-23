//Luu du lieu
function saveData(data) {
    localStorage.setItem('student',JSON.stringify(data));
}

//Lay du lieu ra
function loadData() {
    if(localStorage.hasOwnProperty('student'))
        return JSON.parse(localStorage.getItem('student'));
    else
        return [];
}
