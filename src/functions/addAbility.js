const addAbility = (player, button) => {
	player.stats[player.heroClass === gameClasses.Knight ? "energy" : "mana"] += 10;
	button.disabled = true;
};

export default addAbility;
