import Card from "../Card";




function Pokedex({ pokemons, isWinner }) {
	return (
		<div>
			{isWinner ? <h2>This hand wins!</h2> : <h2>This hand loses!</h2>}
			<ul className="grid gap-2 grid-cols-4">
				{pokemons.map((pokemon) => (
					<Card
						id={pokemon.id}
						key={pokemon.id}
						name={pokemon.name}
						type={pokemon.type}
						base_experience={pokemon.base_experience}
					/>
				))}
			</ul>
		</div>
	);
}
export default Pokedex;
