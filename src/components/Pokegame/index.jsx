import Pokedex from "../Pokedex";

const data = [
	{ id: 4, name: "Charmander", type: "fire", base_experience: 62 },
	{ id: 7, name: "Squirtle", type: "water", base_experience: 63 },
	{ id: 11, name: "Metapod", type: "bug", base_experience: 72 },
	{ id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
	{ id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
	{ id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
	{ id: 94, name: "Gengar", type: "poison", base_experience: 225 },
	{ id: 133, name: "Eevee", type: "normal", base_experience: 65 },
];

const getHands = () => {
	let hand1 = [];
	let hand2 = [...data]; // copia o arr data pra nao sobrescrever

	while (hand1.length < 4) {
		let randomI = Math.floor(Math.random() * hand2.length);
		hand1.push(hand2[randomI]);
		hand2.splice(randomI, 1);
	}

	// winner(hand1, hand2)
	return [hand1, hand2];
};

const winner = (hand1, hand2) => {
	const arrExp1 = hand1.map((e) => e.base_experience);
	const totalExp1 = arrExp1.reduce((total, c) => total + c);
	const arrExp2 = hand2.map((e) => e.base_experience);
	const totalExp2 = arrExp2.reduce((total, c) => total + c);

	console.log("1: ", totalExp1, "2: ", totalExp2);

	if (totalExp1 > totalExp2) {
		return { hand1IsWinner: true, hand2IsWinner: false };
	} else if (totalExp1 < totalExp2) {
		return { hand1IsWinner: false, hand2IsWinner: true };
	} else {
		return { hand1IsWinner: false, hand2IsWinner: false };
	}
};

function Pokegame() {
	const [hand1, hand2] = getHands();
	const { hand1IsWinner, hand2IsWinner } = winner(hand1, hand2);

	return (
		<>
			<Pokedex
				pokemons={hand1}
				isWinner={hand1IsWinner}
			/>
			<Pokedex
				pokemons={hand2}
				isWinner={hand2IsWinner}
			/>
		</>
	);
}

export default Pokegame;
