var pokemon = [
    {
        name: "Bulbasaur",
        sprite: "bulbasaur",
        stats: {
            hp: 45,
            attack: 49,
            defense: 49,
            sAttack: 65,
            sDefense: 65,
            speed: 45
        },
        type1: "grass",
        type2: "poison",
        abilities: ["overgrow"],
        hAbility: "chlorophyll",
        femalePercent: 12.5
    },
    {
        name: "Ivysaur",
        sprite: "ivysaur",
        stats: {
            hp: 60,
            attack: 62,
            defense: 63,
            sAttack: 80,
            sDefense: 80,
            speed: 60
        },
        type1: "grass",
        type2: "poison",
        abilities: ["overgrow"],
        hAbility: "chlorophyll",
        femalePercent: 12.5
    },
    {
        name: "Venusaur",
        sprite: "venusaur",
        stats: {
            hp: 80,
            attack: 100,
            defense: 123,
            sAttack: 122,
            sDefense: 120,
            speed: 80
        },
        type1: "grass",
        type2: "poison",
        abilities: ["overgrow"],
        hAbility: "chlorophyll",
        femalePercent: 12.5
    },
    {
        name: "Charmander",
        sprite: "charmander",
        stats: {
            hp: 39,
            attack: 52,
            defense: 43,
            sAttack: 60,
            sDefense: 50,
            speed: 65
        },
        type1: "fire",
        type2: undefined,
        abilities: ["blaze"],
        hAbility: "solar power",
        femalePercent: 12.5
    },
    {
        name: "Charmeleon",
        sprite: "charmeleon",
        stats: {
            hp: 58,
            attack: 64,
            defense: 58,
            sAttack: 80,
            sDefense: 65,
            speed: 80
        },
        type1: "fire",
        type2: undefined,
        abilities: ["blaze"],
        hAbility: "solar power",
        femalePercent: 12.5
    },
    {
        name: "Charizard",
        sprite: "charizard",
        stats: {
            hp: 78,
            attack: 84,
            defense: 78,
            sAttack: 109,
            sDefense: 85,
            speed: 100
        },
        type1: "fire",
        type2: "flying",
        abilities: ["blaze"],
        hAbility: "solar power",
        femalePercent: 12.5
    },
    {
        name: "Squirtle",
        sprite: "squirtle",
        stats: {
            hp: 44,
            attack: 48,
            defense: 65,
            sAttack: 50,
            sDefense: 64,
            speed: 43
        },
        type1: "water",
        type2: undefined,
        abilities: ["torrent"],
        hAbility: "rain dish",
        femalePercent: 12.5
    },
    {
        name: "Wartortle",
        sprite: "wartortle",
        stats: {
            hp: 59,
            attack: 63,
            defense: 80,
            sAttack: 65,
            sDefense: 80,
            speed: 58
        },
        type1: "water",
        type2: undefined,
        abilities: ["torrent"],
        hAbility: "rain dish",
        femalePercent: 12.5
    },
    {
        name: "Blastoise",
        sprite: "blastoise",
        stats: {
            hp: 79,
            attack: 83,
            defense: 100,
            sAttack: 85,
            sDefense: 105,
            speed: 78
        },
        type1: "water",
        type2: undefined,
        abilities: ["torrent"],
        hAbility: "rain dish",
        femalePercent: 12.5
    },
    {
        name: "Caterpie",
        sprite: "caterpie",
        stats: {
            hp: 45,
            attack: 30,
            defense: 35,
            sAttack: 20,
            sDefense: 20,
            speed: 45
        },
        type1: "bug",
        type2: undefined,
        abilities: ["shield dust"],
        hAbility: "run away",
        femalePercent: 50
    },
    {
        name: "Metapod",
        sprite: "metapod",
        stats: {
            hp: 50,
            attack: 20,
            defense: 55,
            sAttack: 25,
            sDefense: 25,
            speed: 30
        },
        type1: "bug",
        type2: undefined,
        abilities: ["shed skin"],
        hAbility: undefined,
        femalePercent: 50
    },
    {
        name: "Butterfree",
        sprite: "butterfree",
        stats: {
            hp: 60,
            attack: 45,
            defense: 50,
            sAttack: 90,
            sDefense: 80,
            speed: 70
        },
        type1: "bug",
        type2: "flying",
        abilities: ["compound eyes"],
        hAbility: "tinted lens",
        femalePercent: 50
    },
    {
        name: "Weedle",
        sprite: "weedle",
        stats: {
            hp: 40,
            attack: 35,
            defense: 30,
            sAttack: 20,
            sDefense: 20,
            speed: 50
        },
        type1: "bug",
        type2: "poison",
        abilities: ["shield dust"],
        hAbility: "run away",
        femalePercent: 50
    },
    {
        name: "Kakuna",
        sprite: "kakuna",
        stats: {
            hp: 45,
            attack: 25,
            defense: 50,
            sAttack: 25,
            sDefense: 25,
            speed: 35
        },
        type1: "bug",
        type2: "poison",
        abilities: ["shed skin"],
        hAbility: undefined,
        femalePercent: 50
    },
    {
        name: "Beedrill",
        sprite: "beedrill",
        stats: {
            hp: 65,
            attack: 90,
            defense: 40,
            sAttack: 45,
            sDefense: 80,
            speed: 75
        },
        type1: "bug",
        type2: "poison",
        abilities: ["swarm"],
        hAbility: "sniper",
        femalePercent: 50
    },
    {
        name: "Pidgey",
        sprite: "pidgey",
        stats: {
            hp: 40,
            attack: 45,
            defense: 40,
            sAttack: 35,
            sDefense: 35,
            speed: 56
        },
        type1: "normal",
        type2: "flying",
        abilities: ["keen eye", "tangled feet"],
        hAbility: "big pecks",
        femalePercent: 50
    },
    {
        name: "Pidgeotto",
        sprite: "pidgeotto",
        stats: {
            hp: 63,
            attack: 60,
            defense: 55,
            sAttack: 50,
            sDefense: 50,
            speed: 71
        },
        type1: "normal",
        type2: "flying",
        abilities: ["keen eye", "tangled feet"],
        hAbility: "big pecks",
        femalePercent: 50
    },
    {
        name: "Pidgeot",
        sprite: "pidgeot",
        stats: {
            hp: 83,
            attack: 80,
            defense: 75,
            sAttack: 70,
            sDefense: 70,
            speed: 101
        },
        type1: "normal",
        type2: "flying",
        abilities: ["keen eye", "tangled feet"],
        hAbility: "big pecks",
        femalePercent: 50
    },
    {
        name: "Rattata",
        sprite: "rattata",
        stats: {
            hp: 30,
            attack: 56,
            defense: 35,
            sAttack: 25,
            sDefense: 35,
            speed: 72
        },
        type1: "normal",
        type2: undefined,
        abilities: ["run away", "guts"],
        hAbility: "hustle",
        femalePercent: 50
    },
    {
        name: "Raticate",
        sprite: "raticate",
        stats: {
            hp: 55,
            attack: 81,
            defense: 60,
            sAttack: 50,
            sDefense: 70,
            speed: 97
        },
        type1: "normal",
        type2: undefined,
        abilities: ["run away", "guts"],
        hAbility: "hustle",
        femalePercent: 50
    },
    {
        name: "Spearow",
        sprite: "spearow",
        stats: {
            hp: 40,
            attack: 60,
            defense: 30,
            sAttack: 31,
            sDefense: 31,
            speed: 70
        },
        type1: "normal",
        type2: "flying",
        abilities: ["keen eye"],
        hAbility: "sniper",
        femalePercent: 50
    },
    {
        name: "Fearow",
        sprite: "fearow",
        stats: {
            hp: 65,
            attack: 90,
            defense: 65,
            sAttack: 61,
            sDefense: 61,
            speed: 100
        },
        type1: "normal",
        type2: "flying",
        abilities: ["keen eye"],
        hAbility: "sniper",
        femalePercent: 50
    },
    {
        name: "Ekans",
        sprite: "ekans",
        stats: {
            hp: 35,
            attack: 60,
            defense: 44,
            sAttack: 40,
            sDefense: 54,
            speed: 55
        },
        type1: "poison",
        type2: undefined,
        abilities: ["intimidate", "shed skin"],
        hAbility: "unnerve",
        femalePercent: 50
    },
    {
        name: "Arbok",
        sprite: "arbok",
        stats: {
            hp: 60,
            attack: 95,
            defense: 69,
            sAttack: 65,
            sDefense: 79,
            speed: 80
        },
        type1: "poison",
        type2: undefined,
        abilities: ["intimidate", "shed skin"],
        hAbility: "unnerve",
        femalePercent: 50
    },
    {
        name: "Pikachu",
        sprite: "pikachu",
        stats: {
            hp: 35,
            attack: 55,
            defense: 40,
            sAttack: 50,
            sDefense: 50,
            speed: 90
        },
        type1: "electric",
        type2: undefined,
        abilities: ["static"],
        hAbility: "lightning rod",
        femalePercent: 50
    },
    {
        name: "Raichu",
        sprite: "raichu",
        stats: {
            hp: 60,
            attack: 90,
            defense: 55,
            sAttack: 90,
            sDefense: 80,
            speed: 110
        },
        type1: "electric",
        type2: undefined,
        abilities: ["static"],
        hAbility: "lightning rod",
        femalePercent: 50
    },
    {
        name: "Sandshrew",
        sprite: "sandshrew",
        stats: {
            hp: 50,
            attack: 75,
            defense: 85,
            sAttack: 20,
            sDefense: 30,
            speed: 40
        },
        type1: "ground",
        type2: undefined,
        abilities: ["sand veil"],
        hAbility: "sand rush",
        femalePercent: 50
    },
    {
        name: "Sandslash",
        sprite: "sandslash",
        stats: {
            hp: 75,
            attack: 100,
            defense: 110,
            sAttack: 45,
            sDefense: 55,
            speed: 65
        },
        type1: "ground",
        type2: undefined,
        abilities: ["sand veil"],
        hAbility: "sand rush",
        femalePercent: 50
    },
    {
        name: "Nidoran ♀",
        sprite: "nidoran-f",
        stats: {
            hp: 55,
            attack: 47,
            defense: 52,
            sAttack: 40,
            sDefense: 40,
            speed: 41
        },
        type1: "poison",
        type2: undefined,
        abilities: ["poison point", "rivalry"],
        hAbility: "hustle",
        femalePercent: 100
    },
    {
        name: "Nidorina",
        sprite: "nidorina",
        stats: {
            hp: 70,
            attack: 62,
            defense: 67,
            sAttack: 55,
            sDefense: 55,
            speed: 56
        },
        type1: "poison",
        type2: undefined,
        abilities: ["posion point", "rivalry"],
        hAbility: "hustle",
        femalePercent: 100
    },
    {
        name: "Nidoqueen",
        sprite: "nidoqueen",
        stats: {
            hp: 90,
            attack: 92,
            defense: 87,
            sAttack: 75,
            sDefense: 85,
            speed: 76
        },
        type1: "poison",
        type2: "ground",
        abilities: ["poison point", "rivalry"],
        hAbility: "sheer force",
        femalePercent: 100
    },
    {
        name: "Nidoran ♂",
        sprite: "nidoran-m",
        stats: {
            hp: 46,
            attack: 57,
            defense: 40,
            sAttack: 40,
            sDefense: 40,
            speed: 50
        },
        type1: "poison",
        type2: undefined,
        abilities: ["poison point", "rivalry"],
        hAbility: "hustle",
        femalePercent: 0
    },
    {
        name: "Nidorino",
        sprite: "nidorino",
        stats: {
            hp: 61,
            attack: 72,
            defense: 57,
            sAttack: 55,
            sDefense: 55,
            speed: 65
        },
        type1: "poison",
        type2: undefined,
        abilities: ["poison point", "rivalry"],
        hAbility: "hustle",
        femalePercent: 0
    },
    {
        name: "Nidoking",
        sprite: "nidoking",
        stats: {
            hp: 81,
            attack: 102,
            defense: 77,
            sAttack: 85,
            sDefense: 75,
            speed: 85
        },
        type1: "poison",
        type2: "ground",
        abilities: ["poison point", "rivalry"],
        hAbility: "sheer force",
        femalePercent: 0
    },
    {
        name: "Clefairy",
        sprite: "clefairy",
        stats: {
            hp: 70,
            attack: 45,
            defense: 48,
            sAttack: 60,
            sDefense: 65,
            speed: 35
        },
        type1: "normal",
        type2: undefined,
        abilities: ["cute charm", "magic guard"],
        hAbility: "friend guard",
        femalePercent: 75
    },
    {
        name: "Clefable",
        sprite: "clefable",
        stats: {
            hp: 95,
            attack: 70,
            defense: 73,
            sAttack: 95,
            sDefense: 90,
            speed: 60
        },
        type1: "normal",
        type2: undefined,
        abilities: ["cute charm", "magic guard"],
        hAbility: "unaware",
        femalePercent: 75
    },
    {
        name: "Vulpix",
        sprite: "vulpix",
        stats: {
            hp: 38,
            attack: 41,
            defense: 40,
            sAttack: 50,
            sDefense: 65,
            speed: 65
        },
        type1: "fire",
        type2: undefined,
        abilities: ["flash fire"],
        hAbility: "drought",
        femalePercent: 75
    },
    {
        name: "Ninetales",
        sprite: "ninetales",
        stats: {
            hp: 73,
            attack: 76,
            defense: 75,
            sAttack: 81,
            sDefense: 100,
            speed: 100
        },
        type1: "fire",
        type2: undefined,
        abilities: ["flash fire"],
        hAbility: "drought",
        femalePercent: 75
    },
    {
        name: "Jigglypuff",
        sprite: "jigglypuff",
        stats: {
            hp: 115,
            attack: 45,
            defense: 20,
            sAttack: 25,
            sDefense: 25,
            speed: 20
        },
        type1: "normal",
        type2: undefined,
        abilities: ["cute charm", "competitive"],
        hAbility: "friend guard",
        femalePercent: 75
    },
    {
        name: "Wigglytuff",
        sprite: "wigglytuff",
        stats: {
            hp: 140,
            attack: 70,
            defense: 45,
            sAttack: 65,
            sDefense: 50,
            speed: 45
        },
        type1: "normal",
        type2: undefined,
        abilities: ["cute charm", "competitive"],
        hAbility: "frisk",
        femalePercent: 75
    },
    {
        name: "Zubat",
        sprite: "zubat",
        stats: {
            hp: 40,
            attack: 45,
            defense: 35,
            sAttack: 30,
            sDefense: 40,
            speed: 55
        },
        type1: "poison",
        type2: "flying",
        abilities: ["inner focus"],
        hAbility: "infiltrator",
        femalePercent: 50
    },
    {
        name: "Golbat",
        sprite: "golbat",
        stats: {
            hp: 75,
            attack: 80,
            defense: 70,
            sAttack: 65,
            sDefense: 75,
            speed: 90
        },
        type1: "poison",
        type2: "flying",
        abilities: ["inner focus"],
        hAbility: "infiltrator",
        femalePercent: 50
    },
    {
        name: "Oddish",
        sprite: "oddish",
        stats: {
            hp: 45,
            attack: 50,
            defense: 55,
            sAttack: 75,
            sDefense: 65,
            speed: 30
        },
        type1: "grass",
        type2: "poison",
        abilities: ["chlorophyll"],
        hAbility: "run away",
        femalePercent: 50
    },
    {
        name: "Gloom",
        sprite: "gloom",
        stats: {
            hp: 60,
            attack: 65,
            defense: 70,
            sAttack: 85,
            sDefense: 75,
            speed: 40
        },
        type1: "grass",
        type2: "poison",
        abilities: ["chlorophyll"],
        hAbility: "stench",
        femalePercent: 50
    },
    {
        name: "Vileplume",
        sprite: "vileplume",
        stats: {
            hp: 75,
            attack: 80,
            defense: 85,
            sAttack: 110,
            sDefense: 90,
            speed: 50
        },
        type1: "grass",
        type2: "poison",
        abilities: ["chlorophyll"],
        hAbility: "effect spore",
        femalePercent: 50
    },
    {
        name: "Paras",
        sprite: "paras",
        stats: {
            hp: 35,
            attack: 70,
            defense: 55,
            sAttack: 45,
            sDefense: 55,
            speed: 25
        },
        type1: "bug",
        type2: "grass",
        abilities: ["effect spore", "dry skin"],
        hAbility: "damp",
        femalePercent: 50
    },
    {
        name: "Parasect",
        sprite: "parasect",
        stats: {
            hp: 60,
            attack: 95,
            defense: 80,
            sAttack: 60,
            sDefense: 80,
            speed: 30
        },
        type1: "bug",
        type2: "grass",
        abilities: ["effect spore", "dry skin"],
        hAbility: "damp",
        femalePercent: 50
    },
    {
        name: "Venonat",
        sprite: "venonat",
        stats: {
            hp: 60,
            attack: 55,
            defense: 50,
            sAttack: 40,
            sDefense: 55,
            speed: 45
        },
        type1: "bug",
        type2: "poison",
        abilities: ["compound eyes", "tinted lens"],
        hAbility: "run away",
        femalePercent: 50
    },
    {
        name: "Venomoth",
        sprite: "venomoth",
        stats: {
            hp: 70,
            attack: 65,
            defense: 60,
            sAttack: 90,
            sDefense: 75,
            speed: 90
        },
        type1: "bug",
        type2: "posion",
        abilities: ["shield dust", "tinted lens"],
        hAbility: "wonder skin",
        femalePercent: 50
    },
    {
        name: "Diglett",
        sprite: "diglett",
        stats: {
            hp: 10,
            attack: 55,
            defense: 25,
            sAttack: 35,
            sDefense: 45,
            speed: 95
        },
        type1: "ground",
        type2: undefined,
        abilities: ["sand veil", "arena trap"],
        hAbility: "sand force",
        femalePercent: 100/2
    }
];