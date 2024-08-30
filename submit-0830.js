document.querySelector('#joinform').addEventListener('submit',function(e){
    e.preventDefault();

    const nameValue = document.querySelector('#name').value;
    document.querySelector('#result').textContent = `Hello ${nameValue}`;
});

