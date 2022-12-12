function damageP(move) {
    let moveUsed = moves[battle.pPokemon.moves[move]];
    let missed = rand(1, 100)<=moveUsed.acc? 1 : 0;
    let pPoke = pokemon[battle.pPokemon.id - 1];
    let oPoke = pokemon[battle.oPokemon.id - 1];
    //make the pokemon move forward, wait 100ms then move them back
    imgP.style.bottom = "calc(25% + 20px)";
    imgP.style.left = "calc(25% + 20px)";
    setTimeout(() => { imgP.style.bottom = "25%"; imgP.style.left = "25%" }, 100);
    updateTxt(`${pPoke.name} used ${moveUsed.name}!`);
    updateTxt(missed==0? "But it missed!" : "");
    let type1 = types[moveUsed.type][oPoke.type1];
    let type2 = types[moveUsed.type][oPoke.type2];
    updateTxt(type1 * type2 !== 1 && type1 * type2 !== 0 && missed == 1 ? type1 * type2 > 1 ? "It was super effective!" : "It was not very effective." : "");
    updateTxt(type1 == 0 || type2 == 0 && missed == 1 ? `It doesn't affect ${oPoke.name}.` : "");
    let moveCata = moveUsed.catagory == "physical" ? "physical" : "special";
    let a = moveCata == "physical" ? battle.pPokemon.stats.attack : battle.pPokemon.stats.sAttack;
    let d = moveCata == "physical" ? battle.oPokemon.stats.defense : battle.oPokemon.stats.sDefense;
    let crit = rand(1, 500) > pPoke.stats.speed / 2 ? 1 : 2; //console.log(crit == 2 ? "crit" : "");
    let stab = moveUsed.type == pPoke.type1 || moveUsed.type == pPoke.type2 ? 1.2 : 1;
    //console.log(stab == 1.2 ? "stab" : "!stab")
    let damage = ((((2 * battle.pPokemon.lvl * crit) / 5 + 2) * moveUsed.power * (a / d)) / 50 + 2) * stab * type1 * type2 * missed;
    if(moveUsed.name=="Horn Drill" && missed == 1){
        damage = Math.ceil(battle.oPokemon.current.hp);
    }
    for (let i = 0; i < 100; i++) {
        setTimeout(() => { battle.oPokemon.current.hp -= damage / 100; /*console.log(damage)*/ }, i * 10);
    };
    if(moveUsed.name=="Absorb" || moveUsed.name=="Mega Drain" || moveUsed.name=="Giga Drain" || moveUsed.name=="Max Drain"){
        for (let i = 0; i < 100; i++) {
            setTimeout(() => { battle.pPokemon.current.hp += damage / 200; if(battle.pPokemon.current.hp>battle.pPokemon.stats.hp){battle.pPokemon.current.hp=battle.pPokemon.stats.hp}  }, i * 10);
        };
    };
};
function damageO(move) {
    let moveUsed = moves[battle.oPokemon.moves[move]]
    let pPoke = pokemon[battle.pPokemon.id - 1];
    let oPoke = pokemon[battle.oPokemon.id - 1];
    //make the pokemon move forward, wait 100ms then move them back
    imgO.style.top = "calc(25% + 20px)";
    imgO.style.right = "calc(25% + 20px)";
    setTimeout(() => { imgO.style.top = "25%"; imgO.style.right = "25%" }, 100);
    //
    updateTxt(`${oPoke.name} used ${moveUsed.name}!`);
    let type1 = types[moveUsed.type][pPoke.type1];
    let type2 = types[moveUsed.type][pPoke.type2];
    updateTxt(type1 * type2 !== 1 && type1 * type2 !== 0 ? type1 * type2 > 1 ? "It was super effective!" : "it was not very effective" : "");
    updateTxt(type1 == 0 || type2 == 0 ? `It doesn't affect ${pPoke.name}` : "")
    let moveCata = moveUsed.catagory == "physical" ? "physical" : "special";
    let a = moveCata == "physical" ? battle.oPokemon.stats.attack : battle.oPokemon.stats.sAttack;
    let d = moveCata == "physical" ? battle.pPokemon.stats.defense : battle.pPokemon.stats.sDefense;
    let crit = rand(1, 500) > oPoke.stats.speed / 2 ? 1 : 2;
    let stab = moveUsed.type == oPoke.type1 || moveUsed.type == oPoke.type2 ? 1.2 : 1;
    let damage = ((((2 * battle.oPokemon.lvl * crit) / 5 + 2) * moveUsed.power * (a / d)) / 50 + 2) * stab * type1 * type2;
    for (let i = 0; i < 100; i++) {
        setTimeout(() => { battle.pPokemon.current.hp -= damage / 100; /*console.log(damage)*/ }, i * 10);
    };
};
