const PUNCTUATION = new Set(['.', ',', '^', ';', '~', '-']);
const VOWELS = new Set(['a', 'e', 'i', 'o', 'u', 'aa', 'ee', 'ii', 'oo', 'uu', 'ai', 'au', ';m', '.h', ',r', ',rr', ',l', ',ll', '^u']);

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
    "y": "tY", "r": "tR", "s": "tS", "h": "tH"
};

const PUNCT_DICT = {
    ",r": "t,R", ",rr": "t,Rr", ",l": "t,L", ",ll": "t,Ll",
    ";m": "t;M", ".h": "t.H", ";n": "t;N", "~n": "t~N", ".n": "t.N",
    "_r": "t_R", "_t": "t_T", "_n": "t_N", "_l": "t_L",
    ".l": "t.L", "v": "tV", ".s": "t.S", "'": "t'", "^u": "t^U",
	".t":"t.T", ".th": "t.TH", ".d":"t.D", ".dh": "t.Dh",
	"*.n":"t*.N", "*n":"t*N", "*r":"t*R", "*l": "t*L",  "*.l": "t*.L", "*k": "t*K" // really should organise this
	
};

const CHILLS = new Set(["t*.N", "t*N", "t*R", "t*L", "t*.L", "t*K"]);
function isChill(char) {
	return CHILLS.has(char);
}

const MASTER_DICT = { ...STANDARD_DICT, ...PUNCT_DICT };

function parseStandardChunk(text, startIndex) {
	text = text.toLowerCase()
	let j = startIndex;
	if (j >= text.length) return null;

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
	"t_N" : "\u0D29", //  	ഩ
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
	// "tRr": "\u0D31" + "\u0D4D" + "\u0D31", impractical.

    	// special sym.s
	"t;M": "\u0D02", // Anusvaram (ം)
	"t.H": "\u0D03", // Visargam (ഃ)
    	"t^U": "\u0D4D", // Chandrakkala (്)
        	"t*.N": "\u0D7A", // ൺ
		"t*N": "\u0D7B",  // ൻ
		"t*R": "\u0D7C",  // ർ
		"t*L": "\u0D7D",  // ൽ
        	"t*.L": "\u0D7E", // ൾ
        	"t*K": "\u0D7F"   // ൿ   
};

const TAMIL_UNICODE = {
    // swara-ksharangal (independent vowels at beginning of words)
    "tA": "\u0B85",   // அ
    "tAA": "\u0B86",  // ஆ
    "tI": "\u0B87",   // இ
    "tII": "\u0B88",  // ஈ
    "tU": "\u0B89",   // உ
    "tUU": "\u0B8A",  // ஊ
    "tE": "\u0B8E",   // எ
    "tEE": "\u0B8F",  // ஏ
    "tAi": "\u0B90",  // ஐ
    "tO": "\u0B92",   // ஒ
    "tOO": "\u0B93",  // ஓ
    "tAu": "\u0B94",  // ஔ

    // "chinnangal" (dependent vowel signs)
    "VOWEL_SIGNS": {
        "tA": "",        // inherent "a"
        "tAA": "\u0BBE", // ா
        "tI": "\u0BBF",  // ி
        "tII": "\u0BC0", // ீ
        "tU": "\u0BC1",  // ு
        "tUU": "\u0BC2", // ூ
        "tE": "\u0BC6",  // ெ
        "tEE": "\u0BC7", // ே
        "tAi": "\u0BC8", // ை
        "tO": "\u0BCA",  // ொ
        "tOO": "\u0BCB", // ோ
        "tAu": "\u0BCC"  // ௌ
    },

    // consonants (vyanjan-aksharangal)
    "tK": "\u0B95",   // க
    "tKh": "\u0B83" + "\u0B95", // ஃக
    "tG": "\u0B95",   // க
    "tGh": "\u0B83" + "\u0B95", // ஃக

    "tC": "\u0B9A",   // ச
    "tCh": "\u0B83" + "\u0B9A", // ஃச
    "tJ": "\u0B9C",   // ஜ
    "tJh": "\u0B83" + "\u0B9C", // ஃஜ

    "t.T": "\u0B9F",  // ட
    "t.TH": "\u0B83" + "\u0B9F", // ஃட
    "t.D": "\u0B9F",  // ட
    "t.Dh": "\u0B83" + "\u0B9F", // ஃட
    "t.N": "\u0BA3",  // ண

    "tT": "\u0BA4",   // த
    "tTh": "\u0B83" + "\u0BA4", // ஃத
    "tD": "\u0BA4",   // த
    "tDh": "\u0B83" + "\u0BA4", // ஃத
    "tN": "\u0BA8",   // ந
    "t_N": "\u0BA9",  // ன

    "tP": "\u0BAA",   // ப
    "tPH": "\u0B83" + "\u0BAA", // ஃப
    "tB": "\u0BAA",   // ப
    "tBH": "\u0B83" + "\u0BAA", // ஃப
    "tM": "\u0BAE",   // ம

    "tY": "\u0BAF",   // ய
    "tR": "\u0BB0",   // ர
    "tL": "\u0BB2",   // ல
    "tV": "\u0BB5",   // வ

    "tS": "\u0BB6",   // ஶ
    "t.S": "\u0BB7",  // ஷ
    "tSH": "\u0BB8",  // ஸ
    "tH": "\u0BB9",   // ஹ

    "t.L": "\u0BB3",  // ள
    "t_L": "\u0BB4",  // ழ
    "t_R": "\u0BB1",  // ற

    "t;N": "\u0B99",  // ங
    "t~N": "\u0B9E",  // ஞ

    // special symbols
    "t;M": "\u0B82",  // ஂ
    "t.H": "\u0B83",  // ஃ
    "t^U": "\u0BCD"  // ்
};

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
			result += MALAYALAM_UNICODE[vowel] || "";
			continue;
		}
		
		//case zwei: start w/ consonant
		if (consonant) {
			if (vowel && vowel=== "t^U") { // if cons + vowel
				const baseConsonant = MALAYALAM_UNICODE[consonant] || "";
				const chndrakkala = "\u0D4D"
				result += baseConsonant + chndrakkala;
			}
			else if (vowel) { 
				const baseConsonant = MALAYALAM_UNICODE[consonant] || "";
				const vowelThing = MALAYALAM_UNICODE.VOWEL_SIGNS[vowel] ?? "";
				result += baseConsonant + vowelThing;
			}
			else { 
				if (consonant === "t;M" || consonant === "t.H") {
					result += MALAYALAM_UNICODE[consonant] || "";
				}
				else if (!isChill(consonant)){
					const chndrakkala = "\u0D4D"
					const baseConsonant = MALAYALAM_UNICODE[consonant] || "";
					result += baseConsonant + chndrakkala;
				}
				else {
					result += MALAYALAM_UNICODE[consonant]
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

        // case one: independent vowels
        if (!consonant && vowel) {
            result += TAMIL_UNICODE[vowel] || "";
            continue;
        }

        // case two: starts with consonant
        if (consonant) {
            const baseConsonant = TAMIL_UNICODE[consonant] || "";

            // consonant + pulli
            if (vowel && vowel === "t^U") {
                result += baseConsonant + "\u0BCD";
            }

            // consonant + dependent vowel
            else if (vowel) {
                const vowelThing =
                    TAMIL_UNICODE.VOWEL_SIGNS[vowel] ?? "";

                result += baseConsonant + vowelThing;
            }

            // consonant with no vowel
            else {
                // anusvaram / aytham
                if (consonant === "t;M" || consonant === "t.H") {
                    result += baseConsonant;
                }

                // t* consonants already contain their pulli
                else if (consonant.startsWith("t*")) {
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

function convertText(inputText, outputDOM, langchoice, shouldLog) {
	const tokenized = scanAndParse(inputText);
	if (langchoice === "mal") {
		const finalOut = tokensToMalayalam(tokenized);
		if (document.getElementById(outputDOM)) {
			document.getElementById(outputDOM).innerHTML = finalOut;
			if (shouldLog) { console.log("run successful."); }
		}
		else {
			console.warn("target element " + outputDOM + " not found")
		}
	}
	else if (langchoice === "tamil"){
		const finalOut = tokensToTamil(tokenized);
		if (document.getElementById(outputDOM)) {
			document.getElementById(outputDOM).innerHTML = finalOut;
			if (shouldLog) { console.log("run successful."); }
		}
		else {
			console.warn("target element " + outputDOM + " not found")
		}
	}
	else {
		window.alert("Choose a script to convert to..")	
	}
}
//:w:w:w
