const id = document.getElementById('idInput');
const color = document.getElementById('colorInput');
const diamonds = document.getElementById('diamonds')
const spades = document.getElementById('spades')
const hearts = document.getElementById('hearts')
const clubs = document.getElementById('clubs')


let setCard = () => {
    
    if (id.value=== 'diamonds' && color.value === 'red') {
        diamonds.style.backgroundColor = 'red'
    
    }
    

    else if (id.value === 'spades' && color.value === 'black') {
        spades.style.background = 'black'
    
    }
    else if (id.value === 'hearts' && color.value === 'red') {
        hearts.style.background = 'red'
    }

    else if (id.value === 'clubs' && color.value === 'black') {
        clubs.style.background = 'black'
    }



}

console.log(id);
console.log(color);