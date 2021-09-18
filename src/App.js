import { React, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	margin: 4rem;
`;

const Input = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	label {
		color: VIOLET;
	}
	input {
		margin: auto;
		padding: 10px;
		border: 2px solid DEEPSKYBLUE;
		border-radius: 10px;
		color: red;
	}
`;

const ColorPalette = styled.div`
	display: grid;
	margin-top: 4rem;
	grid-gap: 10px;
	grid-template-columns: 100px 100px 100px 100px;
	${
		"" /* ${(searchResults) => (searchResults ? `display: grid;` : `display: block;`)} */
	}
`;

const ColorBlock = styled.div`
	border: 2px solid yellow;
	border-radius: 5px;
	height: 100px;
	width: 100px;
	${({ color }) => `background: ${color};`}
`;

const NoResults = styled.h2`
	background: yellow;
	width: 280px;
	text-align: center;
	margin: 0 5rem;
`;

function App() {
	const defaultColors = [
		"skyblue",
		"deeppink",
		"hotpink",
		"palevioletred",
		"lightgray",
		"gray",
		"green",
		"lightgreen",
		"deepskyblue",
		"aliceblue",
		"antiquewhite",
		"darkblue",
		"darkviolet",
		"indianred",
		"lavender",
		"coral",
		"darkgray",
		"gold",
		"blue",
		"dimgray",
		"dodgerblue",
		"darkslateblue",
		"darkgreen",
		"darksalmon",
		"rosybrown",
		"olivedrab",
		"olive",
	];
	// const defaultColors = getRandomColors();

	const [colorPalette, setColorPalette] = useState(defaultColors);
	const [searchValue, setSearchValue] = useState("");

	const onChangeSearchColor = (e) => {
		const searchColor = e.target.value;
		setSearchValue(searchColor);
		if (searchColor) {
			const matchingColors = defaultColors.filter((color) =>
				color.includes(searchColor)
			);
			setColorPalette(matchingColors);
		} else {
			setColorPalette(defaultColors);
		}
	};

	return (
		<Container>
			<Input>
				<label>Color:</label>
				<input
					name="search"
					value={searchValue}
					type="text"
					onChange={onChangeSearchColor}
					placeholder="Type a color"
				/>
			</Input>
			<ColorPalette>
				{colorPalette.length ? (
					colorPalette.map((color, index) => {
						return (
							<ColorBlock key={index} color={color}></ColorBlock>
						);
					})
				) : (
					<NoResults>No search results found</NoResults>
				)}
			</ColorPalette>
		</Container>
	);
}

export default App;
