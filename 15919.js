const PUNCTUATION = new Set(['.', ',', '^', ';', '~', '-']);
const VOWELS = new Set(['a', 'e', 'i', 'o', 'u', 'aa', 'ee', 'ii', 'oo', 'uu', 'ai', 'au', ';m', '.h', ',r', ',rr', ',l', ',ll']);

function isLetter(char) {
	if (!char) return false;
	const code = char.charCodeAt(0);
	return code >= 97 && code <= 122;
}

function isVowel(char) {
	return VOWELS.has(char);
}

const STANDARD_DICT = {
    // Vowels
    "a": "tA", "aa": "tAA", "i": "tI", "ii": "tII", 
    "u": "tU", "uu": "tUU", "e": "tE", "ee": "tEE", 
    "ai": "tAi", "o": "tO", "oo": "tOO", "au": "tAu",
    // Consonants
    "k": "tK", "kh": "tKh", "g": "tG", "gh": "tGh", 
    "c": "tC", "ch": "tCh", "j": "tJ", "jh": "tJh", 
    "t": "tT", "th": "tTh", "d": "tD", "dh": "tDh", 
    "n": "tN", "p": "tP", "ph": "tPH", "b": "tB", 
    "bh": "tBH", "m": "tM", "sh": "tSH", "l": "tL", 
    "y": "tY", "r": "tR", "s": "tS", "h": "tH", "rr": "tRr"
};

const PUNCT_DICT = {
    ",r": "t,R", ",rr": "t,Rr", ",l": "t,L", ",ll": "t,Ll",
    ";m": "t;M", ".h": "t.H", ";n": "t;N", "~n": "t~N", ".n": "t.N",
    "_r": "t_R", "_t": "t_T", "_n": "t_N", "_l": "t_L",
    ".l": "t.L", "v": "tV", ".s": "t.S", "'": "t'", "^u": "t^U",
	".t":"t.T", ".th": "t.TH", ".d":"t.D", ".dh": "t.Dh"
};
const MASTER_DICT = { ...STANDARD_DICT, ...PUNCT_DICT };

function parseStandardChunk(text, startIndex) {
	text = text.toLowerCase()
	let j = startIndex;
	if (j >= text.length) return null;

	let consonantKey = "";
	let vowelKey = "";

    //revrse chekc ahh
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

    // 2. vowel nom nom nom
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
        	nextIndex: j
    	};
}

function scanAndParse(text) {
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

        	const match = parseStandardChunk(input, i);

        	if (match) {
            		tokens.push(match.token);
            		i = match.nextIndex; // jump past nom-nom-nom'd  characters
        	} 
		else {
            		// fallback
			tokens.push({ type: "UNKNOWN", raw: input[i] });
            		i++;
		}
	}

	return tokens;
}

const MALAYALAM_UNICODE = {
    	// swara-ksharangal (indepenendant vowels at begining of words)
	"tA": "\u0D05",   // അ
    	"tAA": "\u0D06",  // ആ
    	"tI": "\u0D07",   // ഇ
    	"tII": "\u0D08",  // ഈ
    	"tU": "\u0D09",   // ഉ
    	"tUU": "\u0D0A",  // ഊ
	"t,R": "\u0D0B", // ഋ
	"t,Rr": "\u0D60", // ൠ
	"t,L": "\u0D0C", // ഌ
	"t,Ll": "\u0D61", // ൡ
    	"tE": "\u0D0E",   // എ
	"tEE": "\u0D0F",  // ഏ
    	"tAi": "\u0D10",  // ഐ
    	"tO": "\u0D12",   // ഒ
    	"tOO": "\u0D13",  // ഓ
	"tAu": "\u0D14",  // ഔ

    	// "chinnangal" (symbols for depenedannt vowels connected with consonants
	"VOWEL_SIGNS": {
        	"tA": "",       // nothing here, cuz malyalam auto "a" at the end of consonants if not terminated with ^u.
		"tAA": "\u0D3E", // ാ
        	"tI": "\u0D3F",  // ി
        	"tII": "\u0D40", // ീ
        	"tU": "\u0D41",  // ു
        	"tUU": "\u0D42", // ൂ
		"t,R": "\u0D43", // ൃ
		"t,Rr": "\u0D44", // ൄ
		"t,L": "\u0D62", // ൢ
		"t,Ll": "\u0D63", // ൣ
        	"tE": "\u0D47",  // െ
        	"tEE": "\u0D48", // േ
        	"tAi": "\u0D48", // ൈ
        	"tO": "\u0D4A",  // ൊ
        	"tOO": "\u0D4B", // ോ
        	"tAu": "\u0D4C"  // ൗ
    },

    // consonante (vyanjan-aksharangal)
    	"tK": "\u0D15",  // ക
    	"tKh": "\u0D16", // ഖ
    	"tG": "\u0D17",  // ഗ
   	"tGh": "\u0D18", // ഘ
    	"tC": "\u0D1A",  // ച
    	"tCh": "\u0D1B", // ഛ
    	"tJ": "\u0D1C",  // ജ
    	"tJh": "\u0D1D", // ഝ
    	"t.T": "\u0D1F",  // ട
    	"t.TH": "\u0D20", // ഠ
    	"t.D": "\u0D21",  // ഡ
    	"t.Dh": "\u0D22", // ഢ
    	"t.N": "\u0D23",  // ണ
	"tT" : "\u0D24", // ത
	"tTh": "\u0D25", // ഥ
	"tD": "\u0D26", // ദ
	"tDh": "\u0D27", // ധ
	"tN": "\u0D28", // ന
    	"tP": "\u0D2A",  // പ
    	"tPH": "\u0D2B", // ഫ
    	"tB": "\u0D2C",  // ബ
    	"tBH": "\u0D2D", // ഭ
    	"tM": "\u0D2E",  // മ
    	"tY": "\u0D2F",  // യ
    	"tR": "\u0D30",  // ര
    	"tL": "\u0D32",  // ല
	"tV": "\u0D35",  // വ
    	"tS": "\u0D36",  // ശ
    	"t.S": "\u0D37", // ഷ
    	"tSH": "\u0D38", // സ
    	"tH": "\u0D39",  // ഹ
	"t.L": "\u0D33", // ള
	"t_L" : "\u0D34", // ഴ
	"t_R": "\u0D31", // റ
	"t;N":"\u0D19", // ങ
	"t~N": "\u0D1E",// ഞ
	"tRr": "\u0D31" + "\u0D4D" + "\u0D31", // 

    	// special sym.s
	"t;M": "\u0D02", // Anusvaram (ം)
	"t.H": "\u0D03", // Visargam (ഃ)
    	"t^U": "\u0D4D", // Chandrakkala (്)
	"CHILLU": {
        	"t.N": "\u0D7A", // ൺ
		"tN": "\u0D7B",  // ൻ
		"tR": "\u0D7C",  // ർ
		"tL": "\u0D7D",  // ൽ
        	"t.L": "\u0D7E"  //, // ൾ
        //	"tK": "\u0D7F"   // ൿ   //kinda depracated weird malayalam rule, that most users wont encounter
	}
};


function tokensToMalayalam(tokens) {
	let result= "";
	for (const item of tokens) {
		if (item.type === "SPACE") {
			result = result + " ";
			continue;
		}
		if (item.type === "UNKNOWN") {
			result = result + item.raw;
			continue;
		}
		const {consonant, vowel} = item;

		// case ein: independante vowels
		if (!consonant && vowel) {
			result += MALAYALAM_UNICODE[vowel] || "";
			continue;
		}
		
		//case zwei: start w/ consonant
		if (consonant) {
			if (vowel) { // if cons + vowel
				const baseConsonant = MALAYALAM_UNICODE[consonant] || "";
				const vowelThing = MALAYALAM_UNICODE.VOWEL_SIGNS[vowel] ?? "";
				result += baseConsonant + vowelThing;
			}
			else { // if no vowel cons
				if (MALAYALAM_UNICODE.CHILLU[consonant]) {
					result += MALAYALAM_UNICODE.CHILLU[consonant]; // chillu type shit
				}	//keep anuswara and chandrakkala
				else if (consonant === "t;M" || consonant === "t.H") {
					result += MALAYALAM_UNICODE[consonant] || "";
				}
				else {
					const chndrakkala = "\u0D4D"
					const baseConsonant = MALAYALAM_UNICODE[consonant] || "";
					result += baseConsonant + chndrakkala;
				}
			}
		}
	}
	return result;
}

function convertText(inputText, outputDOM) {
	const tokenized = scanAndParse(inputText);
	const finalOut = tokensToMalayalam(tokenized);
	if (document.getElementById(outputDOM)) {
		document.getElementById(outputDOM).innerHTML = finalOut;
		console.log("run successful.");
	}
	else if (document.getElementsByClassName(outputDOM) > 0){
		document.getElementsByClassName(outputDOM)[0].innerHTML = finalOut;
		console.log("run successful.");
	}
	else {
		console.warn('target element ${outputDOM} not found')
	}
}
//:w:w:w
