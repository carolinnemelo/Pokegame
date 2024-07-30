import React from "react";
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

function Card({ name, id, type, base_experience }) {
    return (
        <li className="bg-gray-500 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold">{name}</h2>
            <img className="w-20 h-20 mx-auto" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name} />
            <p className="text-sm">Type: {type}</p>
            <p className="text-sm">EXP: {base_experience}</p>
        </li>
    );
}

export default Card;

