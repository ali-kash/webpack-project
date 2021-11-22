import './styles/index.scss'

const zekromLevel = {
	name: 'Zekrom',
	attack: 150,
	defense: 120,
	speed: 90,
}

const levelUp = {
	...zekromLevel,
	speedAttack: 120,
	speedDefense: 100,
}

console.log(zekromLevel)
console.log(levelUp)
