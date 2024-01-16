class Hero {
	constructor(options) {
		this.title = options.title;
		this.heroClass = options.heroClass;
		this.level = options.level;
		this.stats = {
			str: options.stats.str,
			agi: options.stats.agi,
			int: options.stats.int,
			hp: 100,
		};
	}
}

export class Knight extends Hero {
	constructor(options) {
		super(options);
		this.isDancingTango = options.isDancingTango;
		this.stats.energy = options.stats.energy;
	}
}

export class Mage extends Hero {
	constructor(options) {
		super(options);
		this.hasTectonicPoison = options.hasTectonicPoison;
		this.stats.mana = options.stats.mana;
	}
}
