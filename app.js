const playerSelection = () => {
	let user = prompt('Select: rock, paper, or scissors');
	user = user.toLowerCase();

	if (user == 'rock' || user == 'paper' || user == 'scissors') {
		return user;
	}
};

const computerPlay = () => {
	const randomArr = ['rock', 'paper', 'scissors'];
	return randomArr[Math.floor(Math.random() * randomArr.length)];
};

const computerSelection = computerPlay();

const playRound = (playerSelection, computerSelection) => {
	userChoice = playerSelection();
	if (userChoice === computerSelection) {
		return `Tie! Both players selected ${
			computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
		}`;
	}

	if (
		(userChoice == 'rock' && computerSelection == 'scissors') ||
		(userChoice == 'paper' && computerSelection == 'rock') ||
		(userChoice == 'scissors' && computerSelection == 'paper')
	) {
		return `You win! ${
			userChoice.charAt(0).toUpperCase() + userChoice.slice(1)
		} beats ${
			computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
		}`;
	} else {
		return `You lose! ${
			computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
		} beats ${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)}`;
	}
};

const game = () => {
	console.log(playRound(playerSelection, computerSelection));
	console.log(playRound(playerSelection, computerSelection));
	console.log(playRound(playerSelection, computerSelection));
	console.log(playRound(playerSelection, computerSelection));
	console.log(playRound(playerSelection, computerSelection));
};

game();
