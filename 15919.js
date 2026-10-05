import {
	PUNCTUATION, VOWELS, MASTER_DICT, CHILLS, MALAYALAM, TAMIL, KANNADA, TELUGU, DEVANAGARI, ODIA, BANGLA_ASAMIYA
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


function tokensToScript(tokens, lang) {
	let result = "";
	let langinfo = LANGUAGE_REGISTRY[lang]
	for (const item of tokens) {
		if (item.type === "SPACE") {
			result += " "; continue;
		}
		if (item.type === "UNKNOWN") {
			result += item.raw; continue;
		}
		const {consonant, vowel} = item;
		if (!consonant && vowel) {
			result+= langinfo.dict[vowel] || "";
		}
		if (consonant && (consonant in langinfo.dict || consonant ==="tR")) { 
			let baseConsonant  = langinfo.dict[consonant] || "";
			if (consonant === "tR") {
				if (lang ==="bangla") baseConsonant = "\u09B0";
				else if (lang ==="asamiya") baseConsonant= "\u09F0";
			}
			if (vowel && vowel === "t^U") {
		                result += baseConsonant;
                		result += langinfo.virama;
            		}
			else if (vowel) {
                		const vowelSign = langinfo.dict.VOWEL_SIGNS[vowel] ?? "";
                		result += baseConsonant + vowelSign;
            		}
			else { 
				if (consonant === "t;M" || consonant === "t.H" || consonant === "t^N" ||consonant === "t~M") {
					result += langinfo.dict[consonant] || "";
				}
				else if (!isChill(consonant)){
					result += baseConsonant + langinfo.virama;
				}
				else {
					result += baseConsonant;
				}
			}
		}
	} return result;
}
const LANGUAGE_REGISTRY = {
	malayalam : {
        	autoAnu: true,
		dict: MALAYALAM,
		virama:"\u0D02"
    	},
    	tamil : {
        	autoAnu: false,
		dict:TAMIL,
		virama:"\u0BCD"
    	},
   	kannada : {
        	autoAnu: true,
		dict:KANNADA,
		virama:"\u0CCD"
    	},
    	telugu : {
        	autoAnu: true,
		dict:TELUGU,
		virama:"\u0C4D"
    	}, 
	devanagari : {
		autoAnu: false,
		dict:DEVANAGARI,
		virama:"\u094D"
	},
	odia : {
		autoAnu: false,
		dict: ODIA,
		virama : "\u0B4D"
	},
	bangla : {
		autoAnu: false, 
		dict: BANGLA_ASAMIYA,
		virama : "\u09CD"
	},
	asamiya :{
		autoAnu : false,
		dict: BANGLA_ASAMIYA,
		virama : "\u09CD"
	}
};


function convertText(inputText, lang) {
    	const language = LANGUAGE_REGISTRY[lang];

    	if (!language) {
        	throw new Error("Unknown output script: " + lang);
    	}

    	const tokenea = scanAndParse(inputText, language.autoAnu);
	return tokensToScript(tokenea, lang);
//    return language.converter(tokenea);
}

export function tokenize(inputText, options = {}) {
    const autoAnu = options.autoAnu ?? false;
    return scanAndParse(inputText, autoAnu);
}

//:w:w:iw

export { 
  convertText, 
  scanAndParse, 
  LANGUAGE_REGISTRY 
};

// fallback for legacy CJS (Node.js) & global Browser window
if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = { convertText, scanAndParse, registerLanguage, LANGUAGE_REGISTRY };
} else if (typeof window !== 'undefined') {
    // window.15919ify = { convertText, scanAndParse, registerLanguage, LANGUAGE_REGISTRY };
    window.convertText = convertText; // backwards compatibility for reference html 
}

