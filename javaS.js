// document.querySelector('#loginb').addEventListener('click',function(){
//     document.querySelector('.modal').style.display = 'flex';
// });
// document.querySelector('.close').addEventListener('click',function(){
//     document.querySelector('.modal').style.display = 'none';
// });

const togglemodal=() =>{
    document.querySelector('.modal').classList.toggle('modal-hidden');
};
document.querySelector('#loginb').addEventListener('click',togglemodal);

document.querySelector('#flogin').addEventListener('submit',(event) => {
    event.preventDefault();
    togglemodal();
});

document.querySelector('.close').addEventListener('click',togglemodal);


// Ministry login
const togglem=() =>{
    document.querySelector('.Mlogin').classList.toggle('hidden2');
};
document.querySelector('#mm').addEventListener('click',togglem);

document.querySelector('#Mlogin2').addEventListener('submit',(event) => {
    event.preventDefault();
    togglem();
});

document.querySelector('#close2').addEventListener('click',togglem);



// onclick="document.getElementById('.Mlogin').style.display='none'"
// onclick="document.getElementById('.Mlogin').style.display='flex'"