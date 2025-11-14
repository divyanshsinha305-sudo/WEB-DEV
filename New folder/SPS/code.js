let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll(".choice");
const mss = document.querySelector("#mss");
const usershow = document.querySelector("#uscore");
const comshow = document.querySelector("#cscore");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIndex = Math.floor(Math.random() * 3);
    return options[randIndex];
};

const draw = () => {
    console.log("Game is draw");
    mss.innerText = "Game is draw! Play again?";
    mss.style.backgroundColor = "#081b31";
};

const showwinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        console.log("You win!");
        mss.innerText = `You win! Your ${userchoice} beats ${compchoice}!`;
        mss.style.backgroundColor = "green";
        userscore++;
        usershow.innerText = userscore;
    } else {
        console.log("You lose!");
        mss.innerText = `You lose! ${compchoice} beats Your ${userchoice}!`;
        mss.style.backgroundColor = "red";
        computerscore++;
        comshow.innerText = computerscore;
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        console.log("Choice picked:", userchoice);

        const compchoice = genCompChoice();
        console.log("Computer choice:", compchoice);

        if (userchoice === compchoice) {
            draw();
        } else {
            let userwin = true;
            if (userchoice === "rock") {
                userwin = compchoice === "scissors";
            } else if (userchoice === "paper") {
                userwin = compchoice !== "scissors";
            } else{
                userwin = compchoice !== "rock";
            }
            showwinner(userwin, userchoice, compchoice);
        }
    });
});
