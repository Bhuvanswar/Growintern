function Solve(val) {
    var v = document.getElementById('cal');
    v.value += val;
 }
 function calult() {
    var a = document.getElementById('cal').value;
    var b = eval(a);
    document.getElementById('cal').value = b;
 }
 function Clear() {
    var inp = document.getElementById('cal');
    inp.value = '';
 }
 function Back() {
    var ev = document.getElementById('cal');
    ev.value = ev.value.slice(0,-1);
 }