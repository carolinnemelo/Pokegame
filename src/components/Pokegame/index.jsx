import Pokedex from "../Pokedex";
import { useState, useEffect } from "react";


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


const winner = (hand1, hand2) => {
    const arrExp1 = hand1.map((e) => e.base_experience);
    const totalExp1 = arrExp1.reduce((total, c) => total + c);
    const arrExp2 = hand2.map((e) => e.base_experience);
    const totalExp2 = arrExp2.reduce((total, c) => total + c);
    

    
    if (totalExp1 > totalExp2) {
        return { hand1IsWinner: true, hand2IsWinner: false };
    } else if (totalExp1 < totalExp2) {
        return { hand1IsWinner: false, hand2IsWinner: true };
    } else {
        return { hand1IsWinner: false, hand2IsWinner: false };
    }
};

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




function Pokegame() {
    const [hand1, setHand1] = useState([]);
    const [hand2, setHand2] = useState([]);
    const [hand1IsWinner, setHand1IsWinner] = useState(false);
    const [hand2IsWinner, setHand2IsWinner] = useState(false);
    
    const generateHands = () => {
        const [newHand1, newHand2] = getHands();
        const { hand1IsWinner, hand2IsWinner } = winner(newHand1,newHand2);
        setHand1(newHand1)
        setHand2(newHand2)
        setHand1IsWinner(hand1IsWinner);
        setHand2IsWinner(hand2IsWinner);
        
    }
    
    useEffect(() => {
        generateHands();
    }, []);


	// const [hand1, hand2] = getHands();
	// const { hand1IsWinner, hand2IsWinner } = winner(hand1, hand2);

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
            <button 
            className="border-2 bg-gray-800 px-5 py-2 m-3 rounded-full text-white"
            onClick={generateHands}>New Game</button>

		</>
	);
}

export default Pokegame;
