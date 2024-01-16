import { gameParameters } from "../../data/settings.js";
const { MAX_LEVEL, MIN_LEVEL, MAX_STAT, MIN_STAT } = gameParameters;

const validate = (title, level, stats) => {
	if (!title.trim()) throw new Error("Введите имя персонажа");
	if (level > MAX_LEVEL || level < MIN_LEVEL)
		throw new Error(`Значение уровня не может быть меньше ${MIN_LEVEL} или больше ${MAX_LEVEL}`);
	for (let value of Object.values(stats)) {
		if (value > MAX_STAT || value < MIN_STAT)
			throw new Error(`Значение характеристик не может быть меньше ${MIN_STAT} или больше ${MAX_STAT}`);
	}
};

export default validate;
