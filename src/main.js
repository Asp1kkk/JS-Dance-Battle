"use strict"; // проверяйте пожалуйста тоже strict :) - Я старался рефакторить чтоб все понятно было =)

import createAndFillHero from "./functions/CreateAndFillHero/CreateAndFillHero.js";
import validateAndPasteEnemy from "./functions/validateAndPasteEnemy.js";
import { gameClasses } from "./data/settings.js";
import { sendToBattle, getEnemy, doSkillButton, startBattleButton, form } from "./data/nodes.js";
import calculateWinner from "./functions/calculateWinner.js";
import fillCard from "./functions/CreateAndFillHero/FillCard.js";
import addAbility from "./functions/addAbility.js";

let player = null;
let oponent = null;

sendToBattle.onclick = (e) => {
	e.preventDefault();
	try {
		player = createAndFillHero(
			{
				heroClass: form.classMage.checked ? gameClasses.Mage : gameClasses.Knight,
				title: form.name.value,
				level: form.level.value,
				stats: {
					int: parseInt(form.intelligence.value),
					str: parseInt(form.strength.value),
					agi: parseInt(form.agility.value),
					manaOrEnergy: parseInt(form.additionalStat.value),
				},
				addParam: form.additionalAbilityTrue.checked,
			},
			false,
		);
		doSkillButton.disabled = !form.additionalAbilityTrue.checked;
		getEnemy.disabled = false;
		form.reset();
	} catch (error) {
		alert(error.message);
	}
};

doSkillButton.onclick = () => addAbility(player, doSkillButton);

getEnemy.onclick = (e) => {
	e.preventDefault();
	getEnemy.disabled = true;
	getEnemy.innerText = "ПОЛУЧАЕМ ГЕРОЯ...";

	fetch("https://api-code.practicum-team.ru/heroes")
		.then((response) => response.json())
		.then((data) => {
			oponent = validateAndPasteEnemy(data[Math.round(Math.random() * data.length)]);
			fillCard(oponent, true);
		})
		.finally(() => {
			getEnemy.disabled = false;
			startBattleButton.disabled = false;
			getEnemy.innerText = "ПОЛУЧИТЬ ГЕРОЯ";
		});
};

startBattleButton.onclick = () => calculateWinner(player, oponent);
