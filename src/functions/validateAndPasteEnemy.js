import { gameClasses } from "../data/settings.js";

const validateAndPasteEnemy = (oponent) => {
	return (oponent = {
		...oponent,
		level: Math.round(Math.random() * 10),
		heroClass: gameClasses.Knight,
		stats: {
			int: oponent.int,
			str: oponent.str,
			agi: oponent.agi,
			hp: oponent.hp,
			energy: Math.floor(Math.random() * 99),
		},
	});
};

export default validateAndPasteEnemy;
