import { React, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding: 4rem 0;
	background: ${({ theme }) => theme.colors.mainBackground};
`;

const Input = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	label {
		color: ${({ theme }) => theme.colors.label};
		font-style: italic;
		font-size: 20px;
	}
	input {
		margin: auto;
		padding: 10px;
		border: 2px solid ${({ theme }) => theme.colors.inputBorder};
		border-radius: 10px;
		color: darkgreen;
		background-color: whitesmoke;
		font-style: italic;
	}
`;

const ColorPalette = styled.div`
	margin-top: 4rem;
	${(props) =>
		props.searchResults > 0
			? `display: grid; 
				grid-gap: 10px;
				grid-template-columns: 100px 100px 100px 100px;`
			: `display: block;`}
	@media ${({ theme }) => theme.mediaQueries["below-420"]} {
		grid-template-columns: 100px 100px;
	}
	@media ${({ theme }) => theme.mediaQueries.below768} {
		grid-template-columns: 100px 100px 100px;
	}
`;

const ColorBlock = styled.div`
	border: 2px solid ${({ theme }) => theme.colors.blockBorder};
	border-radius: 5px;
	height: 100px;
	width: 100px;
	${"" /* Destructuring or using props obj */}
	${"" /* ${({ color }) => `background-color: ${color};`} */}
	background-color: ${(props) => props.color}
`;

const NoResults = styled.h2`
	background: ${({ theme }) => theme.colors.highlighter};
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
			<ColorPalette searchResults={colorPalette.length}>
				{colorPalette.length ? (
					colorPalette.map((color, index) => {
						return (<ColorBlock key={index} color={color}/>);
					})
				) : (
					<NoResults>No search results found</NoResults>
				)}
			</ColorPalette>
		</Container>
	);
}

export default App;
