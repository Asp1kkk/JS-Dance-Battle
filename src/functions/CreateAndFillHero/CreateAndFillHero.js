import { gameClasses } from "../../data/settings.js";
import { Mage, Knight } from "../../data/classes.js";
import validate from "./ValidateCreation.js";
import fillCard from "./FillCard.js";

const createAndFillHero = ({ heroClass, title, level, stats, addParam }) => {
	validate(title, level, stats);
	const options = {
		title: title,
		heroClass: heroClass,
		level: level,
		stats: {
			int: stats.int,
			str: stats.str,
			agi: stats.agi,
			[heroClass === gameClasses.Knight ? "energy" : "mana"]: stats.manaOrEnergy,
		},
		[heroClass === gameClasses.Knight ? "isDancingTango" : "hasTectonicPoison"]: addParam,
	};
	let player = heroClass === gameClasses.Knight ? new Knight(options) : new Mage(options);
	fillCard(player);
	return player;
};

export default createAndFillHero;
