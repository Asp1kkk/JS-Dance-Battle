const calculateWinner = (player, oponent) => {
	let result1 = 0,
		result2 = 0;
	for (let [key, value] of Object.entries(player.stats)) {
		if ((key === "mana") | (key === "energy")) {
			result1 += value;
			result2 += oponent.stats["energy"];
			console.log(`calculating: ${result1} and ${result2}`);
			continue;
		}
		result1 += value;
		result2 += oponent.stats[key];
		console.log(`calculating: ${result1} and ${result2}`);
	}
	if (result1 > result2) {
		alert(`Это победа! - ez для ${player.title}`);
	} else if (result1 < result2) {
		alert(`Это победа! - ez для ${oponent.title}`);
	} else {
		alert("Победила Дружба!");
	}
};

export default calculateWinner;
