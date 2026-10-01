import {
	PUNCTUATION, VOWELS, MASTER_DICT, CHILLS, MALAYALAM, TAMIL, KANNADA, TELUGU
} from "./dicts.js";

// console.log("tst: frmwrk LOADED");

function isVowel(char) {
	return VOWELS.has(char);
}

function isChill(char) {
	return CHILLS.has(char);
}

function parseStandardChunk(text, startIndex, autoAnu) {
	text = text.toLowerCase()
	let j = startIndex;
	if (j >= text.length) return null;
	const userEndSentance = text[j+1] === ' ' || text[j+1] === '\n' || PUNCTUATION.has(text[j+1]) ;

	if (text[j] === 'm' && userEndSentance && autoAnu) {
		return {
			token : {
				consonant : MASTER_DICT[";m"],
				vowel : null,
				raw : text.slice(startIndex, j+1)
			}, 
			nextIndex : j+1
		};
	}

	let consonantKey = "";
	let vowelKey = "";

    // greedy checking so that it doesnt faint on seeing larger clustersa
	if (!isVowel(text[j])) {
        	if (j + 2 < text.length && MASTER_DICT[text.slice(j, j + 3)]) {
            		consonantKey = text.slice(j, j + 3);
           		j += 3;
        	}
		else if (j + 1 < text.length && MASTER_DICT[text.slice(j, j + 2)]) {
            		consonantKey = text.slice(j, j + 2);
            		j += 2;
        	} 
		else if (MASTER_DICT[text[j]]) {
            		consonantKey = text[j];
           		j += 1;
        	}
	}

    // 2. vowel nom nom 
	if (j < text.length && isVowel(text[j])) {
		if (j + 1 < text.length && isVowel(text.slice(j, j + 2)) && MASTER_DICT[text.slice(j, j + 2)]) {
            		vowelKey = text.slice(j, j + 2);
            		j += 2;
        	} 
		else if (MASTER_DICT[text[j]]) {
            		vowelKey = text[j];
            		j += 1;
        	}
	}

	if (!consonantKey && !vowelKey) return null;

	return {
        	token: {
            		consonant: MASTER_DICT[consonantKey] || null,
            		vowel: MASTER_DICT[vowelKey] || null,
            		raw: text.slice(startIndex, j)
        	},
        	nextIndex: j // this is valid code, really looks like it needs a semicolon
    	};
}

function scanAndParse(text, autoAnu) {
	const input = text.toLowerCase();
    	const tokens = [];
    	let i = 0;

    	while (i < input.length) {
        	// skip whitespace, but plop down "space" token
        	if (input[i] === ' ') {
			tokens.push({type : "SPACE", raw: ' '});
            		i++;
            		continue;
        	}

        	const match = parseStandardChunk(input, i, autoAnu);

        	if (match) {
            		tokens.push(match.token);
            		i = match.nextIndex; // jump past nom-nom-nom'd (consumed) characters
        	} 
		else {
            		// fallback : just push the unknown input through as is.
			tokens.push({ type: "UNKNOWN", raw: input[i] });
            		i++;
		}
	}

	return tokens;
}

function tokensToMalayalam(tokens) {
	let result= "";
	for (const item of tokens) {
		if (item.type === "SPACE") {
			result = result + " ";
			continue; // space is pushed through
		}
		if (item.type === "UNKNOWN") {
			result = result + item.raw;
			continue; // push unknown input through
		}
		const {consonant, vowel} = item;

		// case ein: independante vowels
		if (!consonant && vowel) {
			result += MALAYALAM[vowel] || "";
			continue;
		}
		
		//case zwei: start w/ consonant
		if (consonant) {
			if (vowel && vowel=== "t^U") { // if cons + vowel
				const baseConsonant = MALAYALAM[consonant] || "";
				const chndrakkala = "\u0D4D"
				result += baseConsonant + chndrakkala;
			}
			else if (vowel) { 
				const baseConsonant = MALAYALAM[consonant] || "";
				const vowelThing = MALAYALAM.VOWEL_SIGNS[vowel] ?? "";
				result += baseConsonant + vowelThing;
			}
			else { 
				if (consonant === "t;M" || consonant === "t.H") {
					result += MALAYALAM[consonant] || "";
				}
				else if (!isChill(consonant)){
					const chndrakkala = "\u0D4D"
					const baseConsonant = MALAYALAM[consonant] || "";
					result += baseConsonant + chndrakkala;
				}
				else {
					result += MALAYALAM[consonant]
				}
			}
		}
	}
	return result;
}

function tokensToTamil(tokens) {
    let result = "";

    for (const item of tokens) {
        if (item.type === "SPACE") {
            result += " ";
            continue; // space is pushed through
        }

        if (item.type === "UNKNOWN") {
            result += item.raw;
            continue; // push unknown input through
        }

        const { consonant, vowel } = item;

        // case one: independent vowelskannada
        if (!consonant && vowel) {
            result += TAMIL[vowel] || "";
            continue;
        }

        // case two: starts with consonant
        if (consonant) {
            const baseConsonant = TAMIL[consonant] || "";

            // consonant + pulli
            if (vowel && vowel === "t^U") {
                result += baseConsonant + "\u0BCD";
            }

            // consonant + dependent vowel
            else if (vowel) {
                const vowelThing =
                    TAMIL.VOWEL_SIGNS[vowel] ?? "";

                result += baseConsonant + vowelThing;
            }

            // consonant with no vowel
            else {
                // anusvaram / aytham
                if (consonant === "t;M" || consonant === "t.H") {
                    result += baseConsonant;
                }

                // normal consonant gets Tamil pulli
                else {
                    result += baseConsonant + "\u0BCD";
                }
            }
        }
    }

    return result;
}

function tokensToKannada(tokens) {
	let result= "";
	for (const item of tokens) {
		if (item.type === "SPACE") {
			result = result + " ";
			continue; // space is pushed through
		}
		if (item.type === "UNKNOWN") {
			result = result + item.raw;
			continue; // push unknown input through
		}
		const {consonant, vowel} = item;

		// case ein: independant vowels
		if (!consonant && vowel) {
			result += KANNADA[vowel] || "";
			continue;
		}
		
		//case zwei: start w/ consonant
		if (consonant) {
			if (vowel && vowel=== "t^U") { // if cons + vowel
				const baseConsonant = KANNADA[consonant] || "";
				const halant = "\u0CCD"
				result += baseConsonant + halant;
			}
			else if (vowel) { 
				const baseConsonant = KANNADA[consonant] || "";
				const vowelThing = KANNADA.VOWEL_SIGNS[vowel] ?? "";
				result += baseConsonant + vowelThing;
			}
			else { 
				if (consonant === "t;M" || consonant === "t.H") {
					result += KANNADA[consonant] || "";
				}
				else {
					const halant = "\u0CCD"
					const baseConsonant = KANNADA[consonant] || "";
					result += baseConsonant + halant;
				}
			}
		}
	}
	return result;
}

function tokensToTelugu(tokens) {
	let result= "";
	for (const item of tokens) {
		if (item.type === "SPACE") {
			result = result + " ";
			continue; // space is pushed through
		}
		if (item.type === "UNKNOWN") {
			result = result + item.raw;
			continue; // push unknown input through
		}
		const {consonant, vowel} = item;


		// independant vowels case
		if (!consonant && vowel) {
			result += TELUGU[vowel] || "";
			continue;
		}

		if (consonant) { // init w/ consnant
			if (vowel && vowel=== "t^U") { // explicit halant
				const baseConsonant = TELUGU[consonant] || "";
				const halant = "\u0C4D"
				result += baseConsonant + halant;
			}
			else if (vowel) { 
				const baseConsonant = TELUGU[consonant] || "";
				const vowelThing = TELUGU.VOWEL_SIGNS[vowel] ?? "";
				result += baseConsonant + vowelThing;
			}
			else { 
				if (consonant === "t;M" || consonant === "t.H") {
					result += TELUGU[consonant] || "";
				}
				else {
					const halant = "\u0C4D"
					const baseConsonant = TELUGU[consonant] || "";
					result += baseConsonant + halant;
				}
			}
		}

	}
	return result;
}


const LANGUAGE_REGISTRY = {
    mal: {
        autoAnu: true,
        converter: tokensToMalayalam
    },

    tamil: {
        autoAnu: false,
        converter: tokensToTamil
    },

    kannada: {
        autoAnu: true,
        converter: tokensToKannada
    },

    telugu: {
        autoAnu: true,
        converter: tokensToTelugu
    }
};


function convertText(inputText, lang) {
    const language = LANGUAGE_REGISTRY[lang];

    if (!language) {
        throw new Error("Unknown output script: " + lang);
    }

    const tokenea = scanAndParse(inputText, language.autoAnu);

    return language.converter(tokenea);
}
//:w:w:iw
//
window.convertText = convertText;
