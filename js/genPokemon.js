//use on pokemondb.net to easily generate pokemon.
var name = document.getElementsByTagName('h1')[0].innerHTML
var type1 = document.getElementsByTagName('a')[73].innerHTML
var hp = document.getElementsByTagName('td')[15].innerHTML
var attack = document.getElementsByTagName('td')[19].innerHTML
var defense = document.getElementsByTagName('td')[23].innerHTML
var sAttack = document.getElementsByTagName('td')[27].innerHTML
var sDefense = document.getElementsByTagName('td')[31].innerHTML
var speed = document.getElementsByTagName('td')[35].innerHTML
var ability = document.getElementsByTagName('a')[74].innerHTML
console.log(`
{
    name: "${name}",
    sprite: "${name.toLowerCase()}",
    stats: {
        hp: ${hp},
        attack: ${attack},
        defense: ${defense},
        sAttack: ${sAttack},
        sDefense: ${sDefense},
        speed: ${speed}
    },
    type1: "${type1.toLowerCase()}",
    type2: undefined,
    abilities: ["${ability.toLowerCase()}"],
    hAbility: "big pecks",
    femalePercent: 100/2
}
`);
//gen moves same way as pokemon
var moves = []
for (let i = 0; i < 165; i++){
    let name = document.getElementsByTagName('tbody')[0].children[i].children[0].innerText;
    let type = document.getElementsByTagName('tbody')[0].children[i].children[1].innerText;
    let catagory = document.getElementsByTagName('tbody')[0].children[i].children[2].children[0].title;
    let power = document.getElementsByTagName('tbody')[0].children[i].children[3].innerText;
    if(power=="—"){power=undefined}
    let acc = document.getElementsByTagName('tbody')[0].children[i].children[4].innerText;
    if(acc=="—"){acc=undefined}
    let pp = document.getElementsByTagName('tbody')[0].children[i].children[5].innerText;
    if(pp=="—"){pp=undefined}
    let desc = document.getElementsByTagName('tbody')[0].children[i].children[6].innerText;
    moves.push(
`{
  name: "${name}",
  type: "${type.toLowerCase()}",
  catagory: "${catagory.toLowerCase()}",
  power: ${power},
  acc: ${acc},
  pp: ${pp},
  desc: "${desc}"
  }`);
};
document.write(moves);
//testing icons
for (let i = 0; i < 30; i++) {
    document.write(`<img src="${iconPrefix + i + ".png"}">${pokemon[i].name}<br>`)
    
}