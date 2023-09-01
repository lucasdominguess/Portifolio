
function random(min , max) { 
    const r = Math.random() * (max - min ) + min ; 
    return Math.floor(r); // Tranformando para 2 casas decimais (num inteiro)
}
rand = random(4,15)

console.log(rand)
