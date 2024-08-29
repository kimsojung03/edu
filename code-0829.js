const creatKey = document.querySelector('#creatKye');
const creatBtn = document.querySelector('#creatBtn');
const checkKye = document.querySelector('#checkKye');
const checkBtn = document.querySelector('#checkBtn');
const checkNumberDiv = document.querySelector('#checkNumberDiv')


let randomNumber;
let InputSixNumber;

    creatBtn.addEventListener('click',function(){
    randomNumber = randomSixNumber();
    document.querySelector('#creatKey').textContent = randomNumber;
    creatKey.value ='';
    checkNumberDiv.classList.remove('disable');
    checkKye.disabled = false;
    checkBtn.disabled = false;
});

checkBtn.addEventListener('click',checkSixNumber);
checkKye.addEventListener('keyup',function(event){
        if(event.key ==='Enter'){
            checkSixNumber();
        }
    
})

function randomSixNumber(){
    return Math.floor(10000 + Math.random() * 90000);
}
console.log(randomSixNumber());

function checkSixNumber(){
    InputSixNumber = checkKye.value;
    if(randomNumber == InputSixNumber){
        alert('인증이 완료되었습니다');
        checkNumberDiv.classList.add('disable');
        checkBtn.textContent = '인증완료';
        checkKye.disabled = true;
        checkBtn.disabled = true;
        
    }else{
        alert('인증번호가 틀렸습니다');
    }

}