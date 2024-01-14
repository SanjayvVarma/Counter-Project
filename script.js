let main = document.getElementById("title");
let decremant = document.getElementById("decre");
let reset = document.getElementById("reset");
let increament = document.getElementById("incre");
let message = document.getElementById("display");
let currValue = 0;


increament.addEventListener('click', () => {
    currValue++;
    main.textContent = currValue;
    message.innerHTML = "The Value is Increasing...";
});

decremant.addEventListener('click', () => {
    currValue--;
    main.textContent = currValue;
    message.innerHTML = "The Value is Decreasing...";
});

reset.addEventListener('click', () => {
    currValue = 0;
    main.textContent = currValue;
    message.innerHTML = "Oh... The Value is Reset to 'Zero'";
});

message.addEventListenerlet('');