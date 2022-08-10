var arrthongtin = [] ;
//var seclectedIndex = -1;

function nhapbt() {
    var xname = document.getElementById('name').value;
    var xmath = document.getElementById('diemtoan').value;
    var xphysical = document.getElementById('diemly').value;
    var xchemistry = document.getElementById('diemhoa').value;
    var xlop = document.getElementById('lop').value;

var testScore = { 
    names: xname,
    math: xmath,
    physical: xphysical,
    chemistry: xchemistry,
    lop: xlop,
};

arrthongtin.push(testScore);
    console.log("DS: ", arrthongtin);

resetform();

inthongtin();

}


function inthongtin () {
    
    var table = document.getElementById("mytable");
    for (var i = table.rows.length - 1; i>0; i--) {
        table.deleteRow(i);
    }
 

    for (var i=0; i < arrthongtin.length; i++) {
        var objtt = arrthongtin[i];

    var row = table.insertRow();

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);

    cell1.innerHTML = i + 1;
    cell2.innerHTML = objtt.names;
    cell3.innerHTML = objtt.lop;
    cell4.innerHTML = objtt.math;
    cell5.innerHTML = objtt.physical;
    cell6.innerHTML = objtt.chemistry;
    cell7.innerHTML = "?";
    cell8.innerHTML = "<a href='#' onclick='onedit(this)'><i class='fa fa-pencil-square-o'></i></a><a href='#' onclick='ondelete(this)'><i class='fa fa-remove'></i></a>";
    }
    
}


function onedit(ed) {
    var selectedRow = ed.parentElement.parentElement;
    var nameed = selectedRow.cells[1].innerText;
    var loped = selectedRow.cells[2].innerText;
    var diemtoaned = selectedRow.cells[3].innerText;
    var diemlyed = selectedRow.cells[4].innerText;
    var diemhoaed = selectedRow.cells[5].innerText;

    document.getElementById('name').value = nameed;
    document.getElementById('diemtoan').value = diemtoaned;
    document.getElementById('diemly').value = diemlyed;
    document.getElementById('diemhoa').value = diemhoaed;
    document.getElementById('lop').value = loped;

    seclectedIndex = parseInt(selectedRow.cells[0].innerText - 1 ) ;

    document.getElementById('capnhat').style.display = "inline-block";
}

function capnhatbt() {
    arrthongtin[seclectedIndex].names = document.getElementById('name').value;
    arrthongtin[seclectedIndex].lop = document.getElementById('lop').value;
    arrthongtin[seclectedIndex].math = document.getElementById('diemtoan').value;
    arrthongtin[seclectedIndex].physical = document.getElementById('diemly').value;
    arrthongtin[seclectedIndex].chemistry = document.getElementById('diemhoa').value;

    inthongtin();
    resetform();

    document.getElementById('capnhat').style.display = "none";
}

function resetform() {
    document.getElementById('name').value = "";
    document.getElementById('diemtoan').value = "";
    document.getElementById('diemly').value = "";
    document.getElementById('diemhoa').value = "";
}

function ondelete(de) {
    var selectedRow = de.parentElement.parentElement;
    seclectedIndex = parseInt(selectedRow.cells[0].innerText - 1 );

    if(confirm("Thông tin học sinh này sẽ bị xóa")) {
        arrthongtin.splice(seclectedIndex,1);
        inthongtin();
    }
}

function tinhdiembt() {
    var table = document.getElementById('mytable');
    
    for (var i = 1; i<table.rows.length; i++) {
        table.rows[i].cells[6].innerText = 
        (parseFloat(table.rows[i].cells[5].innerText) + 
        parseFloat(table.rows[i].cells[4].innerText) + 
        parseFloat(table.rows[i].cells[3].innerText)
        )/3
    }
}

function xacdinhbt() {
    var table = document.getElementById('mytable');

    for (var i = 1; i<table.rows.length; i++) {
       if (parseFloat(table.rows[i].cells[6].innerText) >= 8.0) {
        table.rows[i].style.backgroundColor = "green";
        }
    }
}

