const moves = [
    { name: "Absorb", type: "grass", catagory: "special", power: 20, acc: 100, pp: 25, desc: "User recovers half the HP inflicted on opponent." },
    { name: "Acid", type: "poison", catagory: "special", power: 40, acc: 100, pp: 30, desc: "May lower opponent's Special Defense." },
    //{ name: "Acid Armor", type: "poison", catagory: "status", power: undefined, acc: undefined, pp: 20, desc: "Sharply raises user's Defense." },
    //{ name: "Agility", type: "psychic", catagory: "status", power: undefined, acc: undefined, pp: 30, desc: "Sharply raises user's Speed." },
    //{ name: "Amnesia", type: "psychic", catagory: "status", power: undefined, acc: undefined, pp: 20, desc: "Sharply raises user's Special Defense." },
    { name: "Aurora Beam", type: "ice", catagory: "special", power: 65, acc: 100, pp: 20, desc: "May lower opponent's Attack." },
    { name: "Barrage", type: "normal", catagory: "physical", power: 15, acc: 85, pp: 20, desc: "Hits 2-5 times in one turn." },
    //{ name: "Barrier", type: "psychic", catagory: "status", power: undefined, acc: undefined, pp: 20, desc: "Sharply raises user's Defense." },
    //{ name: "Bide", type: "normal", catagory: "physical", power: undefined, acc: undefined, pp: 10, desc: "User takes damage for two turns then strikes back double." },
    { name: "Bind", type: "normal", catagory: "physical", power: 15, acc: 85, pp: 20, desc: "Traps opponent, damaging them for 4-5 turns." },
    //{ name: "Bite", type: "dark", catagory: "physical", power: 60, acc: 100, pp: 25, desc: "May cause flinching." },
    { name: "Blizzard", type: "ice", catagory: "special", power: 110, acc: 70, pp: 5, desc: "May freeze opponent." },
    { name: "Body Slam", type: "normal", catagory: "physical", power: 85, acc: 100, pp: 15, desc: "May paralyze opponent." },
    { name: "Bone Club", type: "ground", catagory: "physical", power: 65, acc: 85, pp: 20, desc: "May cause flinching." },
    { name: "Bonemerang", type: "ground", catagory: "physical", power: 50, acc: 90, pp: 10, desc: "Hits twice in one turn." },
    { name: "Bubble", type: "water", catagory: "special", power: 40, acc: 100, pp: 30, desc: "May lower opponent's Speed." },
    { name: "Bubble Beam", type: "water", catagory: "special", power: 65, acc: 100, pp: 20, desc: "May lower opponent's Speed." },
    { name: "Clamp", type: "water", catagory: "physical", power: 35, acc: 85, pp: 15, desc: "Traps opponent, damaging them for 4-5 turns." },
    { name: "Comet Punch", type: "normal", catagory: "physical", power: 18, acc: 85, pp: 15, desc: "Hits 2-5 times in one turn." },
    //{ name: "Confuse Ray", type: "ghost", catagory: "status", power: undefined, acc: 100, pp: 10, desc: "Confuses opponent." },
    { name: "Confusion", type: "psychic", catagory: "special", power: 50, acc: 100, pp: 25, desc: "May confuse opponent." },
    { name: "Constrict", type: "normal", catagory: "physical", power: 10, acc: 100, pp: 35, desc: "May lower opponent's Speed by one stage." },
    //{ name: "Conversion", type: "normal", catagory: "status", power: undefined, acc: undefined, pp: 30, desc: "Changes user's type to that of its first move." },
    //{ name: "Counter", type: "fighting", catagory: "physical", power: undefined, acc: 100, pp: 20, desc: "When hit by a Physical Attack, user strikes back with 2x power." },
    { name: "Crabhammer", type: "water", catagory: "physical", power: 100, acc: 90, pp: 10, desc: "High critical hit ratio." },
    { name: "Cut", type: "normal", catagory: "physical", power: 50, acc: 95, pp: 30, desc: "" },
    //{ name: "Defense Curl", type: "normal", catagory: "status", power: undefined, acc: undefined, pp: 40, desc: "Raises user's Defense." },
    { name: "Dig", type: "ground", catagory: "physical", power: 80, acc: 100, pp: 10, desc: "Digs underground on first turn, attacks on second. Can also escape from caves." },
    //{ name: "Disable", type: "normal", catagory: "status", power: undefined, acc: 100, pp: 20, desc: "Opponent can't use its last attack for a few turns." },
    { name: "Dizzy Punch", type: "normal", catagory: "physical", power: 70, acc: 100, pp: 10, desc: "May confuse opponent." },
    { name: "Double Kick", type: "fighting", catagory: "physical", power: 30, acc: 100, pp: 30, desc: "Hits twice in one turn." },
    { name: "Double Slap", type: "normal", catagory: "physical", power: 15, acc: 85, pp: 10, desc: "Hits 2-5 times in one turn." },
    //{ name: "Double Team", type: "normal", catagory: "status", power: undefined, acc: undefined, pp: 15, desc: "Raises user's Evasiveness." },
    { name: "Double-Edge", type: "normal", catagory: "physical", power: 120, acc: 100, pp: 15, desc: "User receives recoil damage." },
    //{ name: "Dragon Rage", type: "dragon", catagory: "special", power: undefined, acc: 100, pp: 10, desc: "Always inflicts 40 HP." },
    { name: "Dream Eater", type: "psychic", catagory: "special", power: 100, acc: 100, pp: 15, desc: "User recovers half the HP inflicted on a sleeping opponent." },
    { name: "Drill Peck", type: "flying", catagory: "physical", power: 80, acc: 100, pp: 20, desc: "" },
    { name: "Earthquake", type: "ground", catagory: "physical", power: 100, acc: 100, pp: 10, desc: "Power is doubled if opponent is underground from using Dig." },
    { name: "Egg Bomb", type: "normal", catagory: "physical", power: 100, acc: 75, pp: 10, desc: "" },
    { name: "Ember", type: "fire", catagory: "special", power: 40, acc: 100, pp: 25, desc: "May burn opponent." },
    { name: "Explosion", type: "normal", catagory: "physical", power: 250, acc: 100, pp: 5, desc: "User faints." },
    { name: "Fire Blast", type: "fire", catagory: "special", power: 110, acc: 85, pp: 5, desc: "May burn opponent." },
    { name: "Fire Punch", type: "fire", catagory: "physical", power: 75, acc: 100, pp: 15, desc: "May burn opponent." },
    { name: "Fire Spin", type: "fire", catagory: "special", power: 35, acc: 85, pp: 15, desc: "Traps opponent, damaging them for 4-5 turns." },
    //{ name: "Fissure", type: "ground", catagory: "physical", power: undefined, acc: 30, pp: 5, desc: "One-Hit-KO, if it hits." },
    { name: "Flamethrower", type: "fire", catagory: "special", power: 90, acc: 100, pp: 15, desc: "May burn opponent." },
    //{ name: "Flash", type: "normal", catagory: "status", power: undefined, acc: 100, pp: 20, desc: "Lowers opponent's Accuracy." },
    { name: "Fly", type: "flying", catagory: "physical", power: 90, acc: 95, pp: 15, desc: "Flies up on first turn, attacks on second turn." },
    //{ name: "Focus Energy", type: "normal", catagory: "status", power: undefined, acc: undefined, pp: 30, desc: "Increases critical hit ratio." },
    { name: "Fury Attack", type: "normal", catagory: "physical", power: 15, acc: 85, pp: 20, desc: "Hits 2-5 times in one turn." },
    { name: "Fury Swipes", type: "normal", catagory: "physical", power: 18, acc: 80, pp: 15, desc: "Hits 2-5 times in one turn." },
    //{ name: "Glare", type: "normal", catagory: "status", power: undefined, acc: 100, pp: 30, desc: "Paralyzes opponent." },
    //{ name: "Growl", type: "normal", catagory: "status", power: undefined, acc: 100, pp: 40, desc: "Lowers opponent's Attack." },
    //{ name: "Growth", type: "normal", catagory: "status", power: undefined, acc: undefined, pp: 20, desc: "Raises user's Attack and Special Attack." },
    //{ name: "Guillotine", type: "normal", catagory: "physical", power: undefined, acc: 30, pp: 5, desc: "One-Hit-KO, if it hits." },
    { name: "Gust", type: "flying", catagory: "special", power: 40, acc: 100, pp: 35, desc: "Hits Pokémon using Fly/Bounce with double power." },
    //{ name: "Harden", type: "normal", catagory: "status", power: undefined, acc: undefined, pp: 30, desc: "Raises user's Defense." },
    //{ name: "Haze", type: "ice", catagory: "status", power: undefined, acc: undefined, pp: 30, desc: "Resets all stat changes." },
    { name: "Headbutt", type: "normal", catagory: "physical", power: 70, acc: 100, pp: 15, desc: "May cause flinching." },
    { name: "High Jump Kick", type: "fighting", catagory: "physical", power: 130, acc: 90, pp: 10, desc: "If it misses, the user loses half their HP." },
    { name: "Horn Attack", type: "normal", catagory: "physical", power: 65, acc: 100, pp: 25, desc: "" },
    { name: "Horn Drill", type: "normal", catagory: "physical", power: 999999, acc: 30, pp: 5, desc: "One-Hit-KO, if it hits." },
    { name: "Hydro Pump", type: "water", catagory: "special", power: 110, acc: 80, pp: 5, desc: "" },
    { name: "Hyper Beam", type: "normal", catagory: "special", power: 150, acc: 90, pp: 5, desc: "User must recharge next turn." },
    { name: "Hyper Fang", type: "normal", catagory: "physical", power: 80, acc: 90, pp: 15, desc: "May cause flinching." },
    //{ name: "Hypnosis", type: "psychic", catagory: "status", power: undefined, acc: 60, pp: 20, desc: "Puts opponent to sleep." },
    { name: "Ice Beam", type: "ice", catagory: "special", power: 90, acc: 100, pp: 10, desc: "May freeze opponent." },
    { name: "Ice Punch", type: "ice", catagory: "physical", power: 75, acc: 100, pp: 15, desc: "May freeze opponent." },
    { name: "Jump Kick", type: "fighting", catagory: "physical", power: 100, acc: 95, pp: 10, desc: "If it misses, the user loses half their HP." },
    { name: "Karate Chop", type: "fighting", catagory: "physical", power: 50, acc: 100, pp: 25, desc: "High critical hit ratio." },
    //{ name: "Kinesis", type: "psychic", catagory: "status", power: undefined, acc: 80, pp: 15, desc: "Lowers opponent's Accuracy." },
    { name: "Leech Life", type: "bug", catagory: "physical", power: 80, acc: 100, pp: 10, desc: "User recovers half the HP inflicted on opponent." },
    //{ name: "Leech Seed", type: "grass", catagory: "status", power: undefined, acc: 90, pp: 10, desc: "Drains HP from opponent each turn." },
    //{ name: "Leer", type: "normal", catagory: "status", power: undefined, acc: 100, pp: 30, desc: "Lowers opponent's Defense." },
    { name: "Lick", type: "ghost", catagory: "physical", power: 30, acc: 100, pp: 30, desc: "May paralyze opponent." },
    //{ name: "Light Screen", type: "psychic", catagory: "status", power: undefined, acc: undefined, pp: 30, desc: "Halves damage from Special attacks for 5 turns." },
    //{ name: "Lovely Kiss", type: "normal", catagory: "status", power: undefined, acc: 75, pp: 10, desc: "Puts opponent to sleep." },
    //{ name: "Low Kick", type: "fighting", catagory: "physical", power: undefined, acc: 100, pp: 20, desc: "The heavier the opponent, the stronger the attack." },
    //{ name: "Meditate", type: "psychic", catagory: "status", power: undefined, acc: undefined, pp: 40, desc: "Raises user's Attack." },
    { name: "Mega Drain", type: "grass", catagory: "special", power: 40, acc: 100, pp: 15, desc: "User recovers half the HP inflicted on opponent." },
    { name: "Mega Kick", type: "normal", catagory: "physical", power: 120, acc: 75, pp: 5, desc: "" },
    { name: "Mega Punch", type: "normal", catagory: "physical", power: 80, acc: 85, pp: 20, desc: "" },
    //{ name: "Metronome", type: "normal", catagory: "status", power: undefined, acc: undefined, pp: 10, desc: "User performs almost any move in the game at random." },
    //{ name: "Mimic", type: "normal", catagory: "status", power: undefined, acc: undefined, pp: 10, desc: "Copies the opponent's last move." },
    //{ name: "Minimize", type: "normal", catagory: "status", power: undefined, acc: undefined, pp: 10, desc: "Sharply raises user's Evasiveness." },
    //{ name: "Mirror Move", type: "flying", catagory: "status", power: undefined, acc: undefined, pp: 20, desc: "User performs the opponent's last move." },
    //{ name: "Mist", type: "ice", catagory: "status", power: undefined, acc: undefined, pp: 30, desc: "User's stats cannot be changed for a period of time." },
    //{ name: "Night Shade", type: "ghost", catagory: "special", power: undefined, acc: 100, pp: 15, desc: "Inflicts damage equal to user's level." },
    { name: "Pay Day", type: "normal", catagory: "physical", power: 40, acc: 100, pp: 20, desc: "Money is earned after the battle." },
    { name: "Peck", type: "flying", catagory: "physical", power: 35, acc: 100, pp: 35, desc: "" },
    { name: "Petal Dance", type: "grass", catagory: "special", power: 120, acc: 100, pp: 10, desc: "User attacks for 2-3 turns but then becomes confused." },
    { name: "Pin Missile", type: "bug", catagory: "physical", power: 25, acc: 95, pp: 20, desc: "Hits 2-5 times in one turn." },
    //{ name: "Poison Gas", type: "poison", catagory: "status", power: undefined, acc: 90, pp: 40, desc: "Poisons opponent." },
    //{ name: "Poison Powder", type: "poison", catagory: "status", power: undefined, acc: 75, pp: 35, desc: "Poisons opponent." },
    { name: "Poison Sting", type: "poison", catagory: "physical", power: 15, acc: 100, pp: 35, desc: "May poison the opponent." },
    { name: "Pound", type: "normal", catagory: "physical", power: 40, acc: 100, pp: 35, desc: "" },
    { name: "Psybeam", type: "psychic", catagory: "special", power: 65, acc: 100, pp: 20, desc: "May confuse opponent." },
    { name: "Psychic", type: "psychic", catagory: "special", power: 90, acc: 100, pp: 10, desc: "May lower opponent's Special Defense." },
    //{ name: "Psywave", type: "psychic", catagory: "special", power: undefined, acc: 100, pp: 15, desc: "Inflicts damage 50-150% of user's level." },
    { name: "Quick Attack", type: "normal", catagory: "physical", power: 40, acc: 100, pp: 30, desc: "User attacks first." },
    { name: "Rage", type: "normal", catagory: "physical", power: 20, acc: 100, pp: 20, desc: "Raises user's Attack when hit." },
    { name: "Razor Leaf", type: "grass", catagory: "physical", power: 55, acc: 95, pp: 25, desc: "High critical hit ratio." },
    { name: "Razor Wind", type: "normal", catagory: "special", power: 80, acc: 100, pp: 10, desc: "Charges on first turn, attacks on second. High critical hit ratio." },
    //{ name: "Recover", type: "normal", catagory: "status", power: undefined, acc: undefined, pp: 5, desc: "User recovers half its max HP." },
    //{ name: "Reflect", type: "psychic", catagory: "status", power: undefined, acc: undefined, pp: 20, desc: "Halves damage from Physical attacks for 5 turns." },
    //{ name: "Rest", type: "psychic", catagory: "status", power: undefined, acc: undefined, pp: 5, desc: "User sleeps for 2 turns, but user is fully healed." },
    //{ name: "Roar", type: "normal", catagory: "status", power: undefined, acc: undefined, pp: 20, desc: "In battles, the opponent switches. In the wild, the Pokémon runs." },
    { name: "Rock Slide", type: "rock", catagory: "physical", power: 75, acc: 90, pp: 10, desc: "May cause flinching." },
    { name: "Rock Throw", type: "rock", catagory: "physical", power: 50, acc: 90, pp: 15, desc: "" },
    { name: "Rolling Kick", type: "fighting", catagory: "physical", power: 60, acc: 85, pp: 15, desc: "May cause flinching." },
    //{ name: "Sand Attack", type: "ground", catagory: "status", power: undefined, acc: 100, pp: 15, desc: "Lowers opponent's Accuracy." },
    { name: "Scratch", type: "normal", catagory: "physical", power: 40, acc: 100, pp: 35, desc: "" },
    //{ name: "Screech", type: "normal", catagory: "status", power: undefined, acc: 85, pp: 40, desc: "Sharply lowers opponent's Defense." },
    //{ name: "Seismic Toss", type: "fighting", catagory: "physical", power: undefined, acc: 100, pp: 20, desc: "Inflicts damage equal to user's level." },
    { name: "Self-Destruct", type: "normal", catagory: "physical", power: 200, acc: 100, pp: 5, desc: "User faints." },
    //{ name: "Sharpen", type: "normal", catagory: "status", power: undefined, acc: undefined, pp: 30, desc: "Raises user's Attack." },
    //{ name: "Sing", type: "normal", catagory: "status", power: undefined, acc: 55, pp: 15, desc: "Puts opponent to sleep." },
    { name: "Skull Bash", type: "normal", catagory: "physical", power: 130, acc: 100, pp: 10, desc: "Raises Defense on first turn, attacks on second." },
    { name: "Sky Attack", type: "flying", catagory: "physical", power: 140, acc: 90, pp: 5, desc: "Charges on first turn, attacks on second. May cause flinching. High critical hit ratio." },
    { name: "Slam", type: "normal", catagory: "physical", power: 80, acc: 75, pp: 20, desc: "" },
    { name: "Slash", type: "normal", catagory: "physical", power: 70, acc: 100, pp: 20, desc: "High critical hit ratio." },
    //{ name: "Sleep Powder", type: "grass", catagory: "status", power: undefined, acc: 75, pp: 15, desc: "Puts opponent to sleep." },
    { name: "Sludge", type: "poison", catagory: "special", power: 65, acc: 100, pp: 20, desc: "May poison opponent." },
    { name: "Smog", type: "poison", catagory: "special", power: 30, acc: 70, pp: 20, desc: "May poison opponent." },
    //{ name: "Smokescreen", type: "normal", catagory: "status", power: undefined, acc: 100, pp: 20, desc: "Lowers opponent's Accuracy." },
    //{ name: "Soft-Boiled", type: "normal", catagory: "status", power: undefined, acc: undefined, pp: 5, desc: "User recovers half its max HP." },
    { name: "Solar Beam", type: "grass", catagory: "special", power: 120, acc: 100, pp: 10, desc: "Charges on first turn, attacks on second." },
    //{ name: "Sonic Boom", type: "normal", catagory: "special", power: undefined, acc: 90, pp: 20, desc: "Always inflicts 20 HP." },
    { name: "Spike Cannon", type: "normal", catagory: "physical", power: 20, acc: 100, pp: 15, desc: "Hits 2-5 times in one turn." },
    //{ name: "Splash", type: "normal", catagory: "status", power: undefined, acc: undefined, pp: 40, desc: "Doesn't do ANYTHING." },
    //{ name: "Spore", type: "grass", catagory: "status", power: undefined, acc: 100, pp: 15, desc: "Puts opponent to sleep." },
    { name: "Stomp", type: "normal", catagory: "physical", power: 65, acc: 100, pp: 20, desc: "May cause flinching." },
    { name: "Strength", type: "normal", catagory: "physical", power: 80, acc: 100, pp: 15, desc: "" },
    //{ name: "String Shot", type: "bug", catagory: "status", power: undefined, acc: 95, pp: 40, desc: "Sharply lowers opponent's Speed." },
    //{ name: "Struggle", type: "normal", catagory: "physical", power: 50, acc: undefined, pp: undefined, desc: "Only usable when all PP are gone. Hurts the user." },
    //{ name: "Stun Spore", type: "grass", catagory: "status", power: undefined, acc: 75, pp: 30, desc: "Paralyzes opponent." },
    { name: "Submission", type: "fighting", catagory: "physical", power: 80, acc: 80, pp: 20, desc: "User receives recoil damage." },
    //{ name: "Substitute", type: "normal", catagory: "status", power: undefined, acc: undefined, pp: 10, desc: "Uses HP to creates a decoy that takes hits." },
    //{ name: "Super Fang", type: "normal", catagory: "physical", power: undefined, acc: 90, pp: 10, desc: "Always takes off half of the opponent's HP." },
    //{ name: "Supersonic", type: "normal", catagory: "status", power: undefined, acc: 55, pp: 20, desc: "Confuses opponent." },
    { name: "Surf", type: "water", catagory: "special", power: 90, acc: 100, pp: 15, desc: "Hits all adjacent Pokémon." },
    //{ name: "Swift", type: "normal", catagory: "special", power: 60, acc: undefined, pp: 20, desc: "Ignores Accuracy and Evasiveness." },
    //{ name: "Swords Dance", type: "normal", catagory: "status", power: undefined, acc: undefined, pp: 20, desc: "Sharply raises user's Attack." },
    { name: "Tackle", type: "normal", catagory: "physical", power: 40, acc: 100, pp: 35, desc: "" },
    //{ name: "Tail Whip", type: "normal", catagory: "status", power: undefined, acc: 100, pp: 30, desc: "Lowers opponent's Defense." },
    { name: "Take Down", type: "normal", catagory: "physical", power: 90, acc: 85, pp: 20, desc: "User receives recoil damage." },
    //{ name: "Teleport", type: "psychic", catagory: "status", power: undefined, acc: undefined, pp: 20, desc: "Allows user to flee wild battles; also warps player to last PokéCenter." },
    { name: "Thrash", type: "normal", catagory: "physical", power: 120, acc: 100, pp: 10, desc: "User attacks for 2-3 turns but then becomes confused." },
    { name: "Thunder", type: "electric", catagory: "special", power: 110, acc: 70, pp: 10, desc: "May paralyze opponent." },
    { name: "Thunder Punch", type: "electric", catagory: "physical", power: 75, acc: 100, pp: 15, desc: "May paralyze opponent." },
    { name: "Thunder Shock", type: "electric", catagory: "special", power: 40, acc: 100, pp: 30, desc: "May paralyze opponent." },
    //{ name: "Thunder Wave", type: "electric", catagory: "status", power: undefined, acc: 90, pp: 20, desc: "Paralyzes opponent." },
    { name: "Thunderbolt", type: "electric", catagory: "special", power: 90, acc: 100, pp: 15, desc: "May paralyze opponent." },
    //{ name: "Toxic", type: "poison", catagory: "status", power: undefined, acc: 90, pp: 10, desc: "Badly poisons opponent." },
    //{ name: "Transform", type: "normal", catagory: "status", power: undefined, acc: undefined, pp: 10, desc: "User takes on the form and attacks of the opponent." },
    { name: "Tri Attack", type: "normal", catagory: "special", power: 80, acc: 100, pp: 10, desc: "May paralyze, burn or freeze opponent." },
    { name: "Twineedle", type: "bug", catagory: "physical", power: 25, acc: 100, pp: 20, desc: "Hits twice in one turn. May poison opponent." },
    { name: "Vine Whip", type: "grass", catagory: "physical", power: 45, acc: 100, pp: 25, desc: "" },
    { name: "Vise Grip", type: "normal", catagory: "physical", power: 55, acc: 100, pp: 30, desc: "" },
    { name: "Water Gun", type: "water", catagory: "special", power: 40, acc: 100, pp: 25, desc: "" },
    { name: "Waterfall", type: "water", catagory: "physical", power: 80, acc: 100, pp: 15, desc: "May cause flinching." },
    //{ name: "Whirlwind", type: "normal", catagory: "status", power: undefined, acc: undefined, pp: 20, desc: "In battles, the opponent switches. In the wild, the Pokémon runs." },
    { name: "Wing Attack", type: "flying", catagory: "physical", power: 60, acc: 100, pp: 35, desc: "" },
    //{ name: "Withdraw", type: "water", catagory: "status", power: undefined, acc: undefined, pp: 40, desc: "Raises user's Defense." },
    { name: "Wrap", type: "normal", catagory: "physical", power: 15, acc: 90, pp: 20, desc: "Traps opponent, damaging them for 4-5 turns." },
    { name: "Giga Drain", type: "grass", catagory: "special", power: 75, acc: 95, pp: 10, desc: "User recovers half the HP inflicted on opponent.", custom: true},
    { name: "Max Drain", type: "grass", catagory: "special", power: 150, acc: 75, pp: 5, desc : "User recovers half the HP inflicted on opponent.", custom: true},
    { name: "Plasma Strike", type: "electric", catagory: "special", power: 200, acc: 65, pp: 5, desc : "Paralyzes opponent.", custom: true},
    
    ]