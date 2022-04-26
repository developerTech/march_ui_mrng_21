function calc(opt){
    let a = document.getElementById('first').value;
    let b = document.getElementById('second').value;
    let out = 0;
    if(opt == 'add'){
        out = `Sum of number is ${Number(a)+Number(b)}`;
    }else{
        out = `Sub of number is ${Number(a)-Number(b)}`;
    }
    document.getElementsByClassName('output')[0].innerText = out;
}


/*function add(){
    // alert(">>>>Calling>>>")
    let a = document.getElementById('first').value;
    let b = document.getElementById('second').value;
    let out = Number(a)+Number(b);
    document.getElementsByClassName('output')[0].innerText =`Sum of number is ${out}`;
}
function sub(){
    // alert(">>>>Calling>>>")
    let a = document.getElementById('first').value;
    let b = document.getElementById('second').value;
    let out = Number(a)-Number(b);
    document.getElementsByClassName('output')[0].innerText =`Sub of number is ${out}`;
}*/