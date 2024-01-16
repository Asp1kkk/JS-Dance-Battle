const fillCard = ({ heroClass, title, level, stats }, isEnemy) => {
	document.querySelector(`#${isEnemy ? "enemy" : "player"}HeroClass`).innerHTML = heroClass;
	document.querySelector(`#${isEnemy ? "enemy" : "player"}HeroName`).innerHTML = title;
	document.querySelector(`#${isEnemy ? "enemy" : "player"}HeroLevel`).innerHTML = level;

	document.querySelector(`#${isEnemy ? "enemy" : "player"}HeroStrength`).innerHTML = stats?.str;
	document.querySelector(`#${isEnemy ? "enemy" : "player"}HeroAgility`).innerHTML = stats?.agi;
	document.querySelector(`#${isEnemy ? "enemy" : "player"}HeroHp`).innerHTML = stats?.hp;
	document.querySelector(`#${isEnemy ? "enemy" : "player"}HeroIntelligence`).innerHTML = stats?.int;
};
export default fillCard;
