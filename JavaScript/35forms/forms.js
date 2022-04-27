const getId = () => {
    let id = Math.floor(Math.random() * 1000000)
    document.getElementById('eid').value = `EAZ${id}`
}

function validateFname(){
    let name = document.getElementById('firstname').value;
    let fdiv = document.getElementById('fdiv');
    if(name.trim().length == 0){
        document.getElementById('fout').innerText = 'Please Enter First Name'
        fdiv.classList.remove('has-success')
        fdiv.classList.add('has-error')
    }else{
        document.getElementById('fout').innerText = ''
        fdiv.classList.remove('has-error')
        fdiv.classList.add('has-success')
    }
}