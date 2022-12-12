/**
 * TODO:
 * - create turn system
 * - make hud automatically fix
 * - make so you can switch out your pokemon
 * - add steroids, all status healed, and adds three to all of your stats
 * - make it so hud disapears when turn is doing its thing
 * - add a better ai for pokemon that chooses type effective moves.
 * - add meoscarada
 * -----------------------------
 * FINISHED:
 * - Add type colors
 * - add ability for other pokemon to attack
 * - make items
 * - catching pokemon
*/
const spritePrefixBlackWhite = "https://img.pokemondb.net/sprites/black-white/";
const spritePrefixRedBlue = "https://img.pokemondb.net/sprites/red-blue/";
const spritePrefixRedBlueColor = "https://play.pokemonshowdown.com/sprites/gen1";
const spritePrefixDiamondPearl = "https://img.pokemondb.net/sprites/diamond-pearl/";
const spritePrefixRubySapphire = "https://img.pokemondb.net/sprites/ruby-sapphire/";
const spritePrefixNew = "https://play.pokemonshowdown.com/sprites/ani";
const itemPrefix = "https://play.pokemonshowdown.com/sprites/itemicons/";
const sItemPrefix = "https://img.pokemondb.net/sprites/items/";
const iconPrefix = "https://play.pokemonshowdown.com/sprites/bwicons/";
const sIconPrefix = "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/";
const imgP = document.getElementById('imgP');
const imgO = document.getElementById('imgO');
var text = ["", "", ""];
var party = [
    {
        id: rand(0, pokemon.length - 1),
        stats: {},
        lvl: rand(40, 100),
        gender: 0,
        shiny: true,
        moves: [
            rand(0, moves.length - 1),
            rand(0, moves.length - 1),
            rand(0, moves.length - 1),
            rand(0, moves.length - 1)
        ]
    },
    {
        id: 25,
        stats: {},
        lvl:50,
        gender: 0,
        shiny: false,
        moves: [
            97,
            98,
            31,
            40
        ]
    },
    {
        id: rand(0, pokemon.length - 1),
        stats: {},
        lvl: rand(40, 100),
        gender: 0,
        shiny: true,
        moves: [
            rand(0, moves.length - 1),
            rand(0, moves.length - 1),
            rand(0, moves.length - 1),
            rand(0, moves.length - 1)
        ]
    },
    {
        id: rand(0, pokemon.length - 1),
        stats: {},
        lvl: rand(40, 100),
        gender: 0,
        shiny: true,
        moves: [
            rand(0, moves.length - 1),
            rand(0, moves.length - 1),
            rand(0, moves.length - 1),
            rand(0, moves.length - 1)
        ]
    },
    {
        id: rand(0, pokemon.length - 1),
        stats: {},
        lvl: rand(40, 100),
        gender: 0,
        shiny: true,
        moves: [
            rand(0, moves.length - 1),
            rand(0, moves.length - 1),
            rand(0, moves.length - 1),
            rand(0, moves.length - 1)
        ]
    },
    {
        id: rand(0, pokemon.length - 1),
        stats: {},
        lvl: rand(40, 100),
        gender: 0,
        shiny: true,
        moves: [
            rand(0, moves.length - 1),
            rand(0, moves.length - 1),
            rand(0, moves.length - 1),
            rand(0, moves.length - 1)
        ]
    }
];
const typeColors = {
    fire:     { bg: "#F08030", border: "#904c1c" },
    flying:   { bg: "#A890F0", border: "#645690" },
    water:    { bg: "#6890F0", border: "#47587E" },
    ground:   { bg: "#E0C068", border: "#b49747" },
    rock:     { bg: "#B8A038", border: "#8c7923" },
    normal:   { bg: "#cacaca", border: "#9d9d9d" },
    fighting: { bg: "#C03028", border: "#921c16" },
    grass:    { bg: "#78C850", border: "#487830" },
    bug:      { bg: "#A8B820", border: "#768210" },
    psychic:  { bg: "#F85888", border: "#e82962" },
    ghost:    { bg: "#705898", border: "#604192" },
    dragon:   { bg: "#7038F8", border: "#5319da" },
    poison:   { bg: "#A040A0", border: "#7b237b" },
    electric: { bg: "#F8D030", border: "#d0ab16" },
    ice:      { bg: "#98D8D8", border: "#5db6b6" }
};
var scene = "main";
var battle;
var bag = {};
bag = items;
var bagOffset = 1;
function updateIcons() {
    var opts = { anim: document.getElementById('animate').checked ? true : false, moveAtck: document.getElementById('moveAtck').checked ? true : false };
    let s = document.getElementById('spriteType');
    if (s.value == "black-white") {
        imgP.src = `${spritePrefixBlackWhite}${opts.anim ? "anim/" : ""}${battle.pPokemon.shiny ? "back-shiny/" : "back-normal/"}${pokemon[battle.pPokemon.id - 1].sprite}.${opts.anim ? "gif" : "png"}`;
        imgO.src = `${spritePrefixBlackWhite}${opts.anim ? "anim/" : ""}${battle.oPokemon.shiny ? "shiny/" : "normal/"}${pokemon[battle.oPokemon.id - 1].sprite}.${opts.anim ? "gif" : "png"}`;
    } else if (s.value == "red-blue") {
        imgP.src = `${spritePrefixRedBlue}back-normal/${pokemon[battle.pPokemon.id - 1].sprite}.png`;
        imgO.src = `${spritePrefixRedBlue}normal/${pokemon[battle.oPokemon.id - 1].sprite}.png`;
    } else if (s.value == "red-blue-color") {
        imgP.src = `${spritePrefixRedBlueColor}-back/${pokemon[battle.pPokemon.id - 1].sprite}.png`;
        imgO.src = `${spritePrefixRedBlueColor}/${pokemon[battle.oPokemon.id - 1].sprite}.png`;
    } else if (s.value == "diamond-pearl") {
        imgP.src = `${spritePrefixDiamondPearl}${battle.pPokemon.shiny ? "back-shiny/" : "back-normal/"}${pokemon[battle.pPokemon.id - 1].sprite}.png`;
        imgO.src = `${spritePrefixDiamondPearl}${battle.oPokemon.shiny ? "shiny/" : "normal/"}${pokemon[battle.oPokemon.id - 1].sprite}.png`;
    } else if (s.value == "ruby-sapphire") {
        imgP.src = `${spritePrefixRubySapphire}${battle.pPokemon.shiny ? "back-shiny/" : "back-normal/"}${pokemon[battle.pPokemon.id - 1].sprite}.png`;
        imgO.src = `${spritePrefixRubySapphire}${battle.oPokemon.shiny ? "shiny/" : "normal/"}${pokemon[battle.oPokemon.id - 1].sprite}.png`;
    } else if (s.value == "new") {
        imgP.src = `${spritePrefixNew}${battle.pPokemon.shiny ? "-back-shiny/" : "-back/"}${pokemon[battle.pPokemon.id - 1].sprite}.gif`;
        imgO.src = `${spritePrefixNew}${battle.oPokemon.shiny ? "-shiny/" : "/"}${pokemon[battle.oPokemon.id - 1].sprite}.gif`;
    };
    if (document.getElementById('smooth').checked == true) {
        imgP.style.imageRendering = "auto";
        imgO.style.imageRendering = "auto";
    } else {
        imgP.style.imageRendering = "pixelated";
        imgO.style.imageRendering = "pixelated";
    }
};
document.getElementById('spriteType').onchange = updateIcons;
document.getElementById('animate').onchange = updateIcons;
document.getElementById('spriteType').onchange = updateIcons;
document.getElementById('smooth').onchange = updateIcons;
function startBattle(newBattle) {
    battle = newBattle;
    battle.pPokemon.stats = { hp: (Math.floor(0.01 * (2 * pokemon[battle.pPokemon.id - 1].stats.hp) * battle.pPokemon.lvl) + battle.pPokemon.lvl + 10), attack: Math.floor(0.01 * (2 * pokemon[battle.pPokemon.id - 1].stats.attack) * battle.pPokemon.lvl) + 5, defense: Math.floor(0.01 * (2 * pokemon[battle.pPokemon.id - 1].stats.defense) * battle.pPokemon.lvl) + 5, sAttack: Math.floor(0.01 * (2 * pokemon[battle.pPokemon.id - 1].stats.sAttack) * battle.pPokemon.lvl) + 5, sDefense: Math.floor(0.01 * (2 * pokemon[battle.pPokemon.id - 1].stats.sDefense) * battle.pPokemon.lvl) + 5, speed: Math.floor(0.01 * (2 * pokemon[battle.pPokemon.id - 1].stats.speed) * battle.pPokemon.lvl) + 5 };
    battle.pPokemon.current = { hp: battle.pPokemon.stats.hp }
    battle.oPokemon.stats = { hp: (Math.floor(0.01 * (2 * pokemon[battle.oPokemon.id - 1].stats.hp) * battle.oPokemon.lvl) + battle.oPokemon.lvl + 10), attack: Math.floor(0.01 * (2 * pokemon[battle.oPokemon.id - 1].stats.attack) * battle.oPokemon.lvl) + 5, defense: Math.floor(0.01 * (2 * pokemon[battle.oPokemon.id - 1].stats.defense) * battle.oPokemon.lvl) + 5, sAttack: Math.floor(0.01 * (2 * pokemon[battle.oPokemon.id - 1].stats.sAttack) * battle.oPokemon.lvl) + 5, sDefense: Math.floor(0.01 * (2 * pokemon[battle.oPokemon.id - 1].stats.sDefense) * battle.oPokemon.lvl) + 5, speed: Math.floor(0.01 * (2 * pokemon[battle.oPokemon.id - 1].stats.speed) * battle.oPokemon.lvl) + 5 };
    battle.oPokemon.current = { hp: battle.oPokemon.stats.hp }
    updateIcons()
};
function subTurn(action) {
    console.log(action)
    if (action.type == 'move') {
        if (battle.pPokemon.stats.speed > battle.oPokemon.stats.speed) {
            damageP(action.id);
            setTimeout(() => { damageO(rand(0, 3)) }, 2000);
        } else {
            damageO(rand(0, 3));
            setTimeout(() => { damageP(action.id) }, 2000);
        };
    } else if (action.type == 'item') {
        if (bag[action.id - 1 + bagOffset].amount > 0) {
            if(bag[action.id - 1 + bagOffset].type == "medicine"){
                let hpOld = battle.pPokemon.current.hp;
                console.log(hpOld)
                updateTxt(`You used a ${bag[action.id - 1 + bagOffset].name} on ${pokemon[battle.pPokemon.id - 1].name}!`);
                if (bag[action.id - 1 + bagOffset].name == "Potion") {
                    for (let i = 0; i < 100; i++) {
                        setTimeout(() => { battle.pPokemon.current.hp += 20 / 100; if (battle.pPokemon.current.hp > battle.pPokemon.stats.hp) { battle.pPokemon.current.hp = battle.pPokemon.stats.hp } }, i * 10);
                    };
                } else if (bag[action.id - 1 + bagOffset].name == "Super Potion") {
                    for (let i = 0; i < 100; i++) {
                        setTimeout(() => { battle.pPokemon.current.hp += 60 / 100; if (battle.pPokemon.current.hp > battle.pPokemon.stats.hp) { battle.pPokemon.current.hp = battle.pPokemon.stats.hp } }, i * 10);
                    };
                } else if (bag[action.id - 1 + bagOffset].name == "Hyper Potion") {
                    for (let i = 0; i < 100; i++) {
                        setTimeout(() => { battle.pPokemon.current.hp += 120 / 100; if (battle.pPokemon.current.hp > battle.pPokemon.stats.hp) { battle.pPokemon.current.hp = battle.pPokemon.stats.hp } }, i * 10);
                    };
                } else if (bag[action.id - 1 + bagOffset].name == "Max Potion") {
                    let temp = battle.pPokemon.stats.hp - battle.pPokemon.current.hp
                    for (let i = 0; i < 100; i++) {
                        setTimeout(() => { battle.pPokemon.current.hp += temp / 100; }, i * 10);
                    };
                };
                setTimeout(()=>{updateTxt(`${pokemon[battle.pPokemon.id - 1].name} restored ${Math.round(battle.pPokemon.current.hp-hpOld)} HP!`);}, 1000)
                setTimeout(() => { damageO(rand(0, 3)) }, 2000);
            }else if (bag[action.id - 1 + bagOffset].type == "pokeball"){
                updateTxt(`You threw a ${bag[action.id - 1 + bagOffset].name} at the wild ${pokemon[battle.oPokemon.id-1].name}!`);
                setTimeout(()=>{throwBall(action.id)}, 1000);
            }
            bag[action.id - 1 + bagOffset].amount -= 1;
        };
    };
};
function throwBall(type) {
    let ball = bag[type - 1 + bagOffset];
    imgO.style.width = "1em";
    imgO.src = itemPrefix + ball.sprite + ".png"
    if(ball.name == "Master Ball"){
        party.push({id : battle.oPokemon.id, stats : {}, lvl: battle.oPokemon.lvl, gender: battle.oPokemon.gender, moves : [battle.oPokemon.moves[0], battle.oPokemon.moves[1], battle.oPokemon.moves[2], battle.oPokemon.moves[3]] });
    };
}
function updateHud() {
    document.querySelector("#infoO>h3").innerHTML = pokemon[battle.oPokemon.id - 1].name;
    document.querySelector("#infoO>p").innerHTML = "Lvl: " + battle.oPokemon.lvl;
    document.querySelector("#infoO>h1").innerHTML = Math.ceil(battle.oPokemon.current.hp) + "/" + Math.ceil(battle.oPokemon.stats.hp);
    document.querySelector("#infoO>progress").max = battle.oPokemon.stats.hp;
    document.querySelector("#infoO>progress").value = battle.oPokemon.current.hp;
    document.querySelector("#infoP>h3").innerHTML = pokemon[battle.pPokemon.id - 1].name;
    document.querySelector("#infoP>p").innerHTML = "Lvl: " + battle.pPokemon.lvl;
    document.querySelector("#infoP>h1").innerHTML = Math.ceil(battle.pPokemon.current.hp) + "/" + Math.ceil(battle.pPokemon.stats.hp);
    document.querySelector("#infoP>progress").max = battle.pPokemon.stats.hp;
    document.querySelector("#infoP>progress").value = battle.pPokemon.current.hp;
    document.querySelector("#infoP>progress").className = "green";
    document.querySelector("#infoO>progress").className = "green";
    if (battle.pPokemon.current.hp / battle.pPokemon.stats.hp < 0.36) {
        document.querySelector("#infoP>progress").className = "orange";
    };
    if (battle.pPokemon.current.hp / battle.pPokemon.stats.hp < 0.16) {
        document.querySelector("#infoP>progress").className = "red";
    };
    if (battle.oPokemon.current.hp / battle.oPokemon.stats.hp < 0.36) {
        document.querySelector("#infoO>progress").className = "orange";
    };
    if (battle.oPokemon.current.hp / battle.oPokemon.stats.hp < 0.16) {
        document.querySelector("#infoO>progress").className = "red";
    };
    //battle buttons
    if (scene == "main") {
        document.querySelector("#back").style.display = "none";
    } else {
        document.querySelector("#back").style.display = "block";
    }
    if (scene == "battle") {
        for (let i = 0; i < 4; i++) {
            document.querySelectorAll("#battle>button")[i].innerHTML = `<img style="height:10px;" src="https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/${moves[battle.pPokemon.moves[i]].type}.svg"> ${moves[battle.pPokemon.moves[i]].name}`;
            document.querySelectorAll("#battle>button")[i].style.backgroundColor = typeColors[moves[battle.pPokemon.moves[i]].type].bg;
            document.querySelectorAll("#battle>button")[i].style.border = `solid 4px ${typeColors[moves[battle.pPokemon.moves[i]].type].border}`;
            document.querySelectorAll("#battle>button")[i].style.display = 'block';
        };
    } else {
        for (let i = 0; i < 4; i++) {
            document.querySelectorAll("#battle>button")[i].style.display = 'none';
        };
    };
    if (scene == "bag") {
        for (let i = 0; i < 6; i++) {
            document.querySelectorAll('#bag>button')[i].style.display = 'block'
        };
        for (let i = 1; i < 5; i++) {
            document.querySelectorAll('#bag>button')[i].innerHTML = `<img style="height:15px;" src="${sItemPrefix}${bag[i - 2 + bagOffset].sprite}.png"> ${bag[i - 2 + bagOffset].name} x${bag[i - 2 + bagOffset].amount}`;
            document.querySelectorAll('#bag>button')[i].style.color = bag[i - 2 + bagOffset].amount > 0 ? "black" : "red"
        }
    } else {
        for (let i = 0; i < 6; i++) {
            document.querySelectorAll('#bag>button')[i].style.display = 'none'
        };
    };
    if (scene == "pMon") {
        for (let i = 0; i < 6; i++) {
            document.querySelectorAll('#pMon>button')[i].style.display = 'block'
        };
        for (let i = 0; i < 6; i++) {
            document.querySelectorAll('#pMon>button')[i].innerHTML = `<img style="height:25px; top:-7px; position:absolute; left:0px;" src="${sIconPrefix}${pokemon[party[i].id - 1].sprite}.png"></img><span style="position:absolute; top:0px; left:25px;">${pokemon[party[i].id-1].name}</span><img style="position:absolute; top:3px; right:5px;" height="10" src="${pokemon[party[i].id-1].type2!=undefined? "https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/" + pokemon[party[i].id-1].type2 + ".svg" : "https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/" + pokemon[party[i].id-1].type1 + ".svg" }"><img style="position:absolute; top:3px; right:20px;" height="10" src="${pokemon[party[i].id-1].type2!=undefined? "https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/" + pokemon[party[i].id-1].type1 + ".svg" : "" }">`;
            document.querySelectorAll('#pMon>button')[i].style.backgroundColor = typeColors[pokemon[party[i].id-1].type1].bg;
            document.querySelectorAll('#pMon>button')[i].style.border = `solid 4px ${typeColors[pokemon[party[i].id-1].type1].border}`; 
        }
    } else {
        for (let i = 0; i < 6; i++) {
            document.querySelectorAll('#pMon>button')[i].style.display = 'none'
        };
    }
    document.getElementById('message').innerHTML = `${text[2]}<br>${text[1]}<br>${text[0]}`
};
function updateTxt(newText) {
    if (newText.length > 0) {
        text[2] = text[1];
        text[1] = text[0];
        text[0] = newText;
    }
};
function cycleBag(up) {
    if (up) {
        if (bagOffset > 1) {
            bagOffset -= 1;
        }
    } else {
        if (bagOffset < bag.length - 3) {
            bagOffset += 1;
        }
    };
}
setInterval(updateHud, 10);
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
startBattle({
    pPokemon: party[1],
    oPokemon: {
        id: rand(1, pokemon.length - 1),
        lvl: 50,
        gender: 0,
        shiny: (rand(1, 50) == 1 ? true : false),
        moves: [
            rand(0, moves.length - 1),
            rand(0, moves.length - 1),
            rand(0, moves.length - 1),
            rand(0, moves.length - 1)
        ]
    }
});