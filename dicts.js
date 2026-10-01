console.log("DICTS LOADED");

export const PUNCTUATION = new Set(['.', ',', '^', ';', '~', '-']);
export const VOWELS = new Set(['a', 'e', 'i', 'o', 'u', 'aa', 'ee', 'ii', 'oo', 'uu', 'ai', 'au', ';m', '.h', ',r', ',rr', ',l', ',ll', '^u']);


export const STANDARD_DICT = {
    // Vowels
    "a": "tA", "aa": "tAA", "i": "tI", "ii": "tII", 
    "u": "tU", "uu": "tUU", "e": "tE", "ee": "tEE", 
    "ai": "tAi", "o": "tO", "oo": "tOO", "au": "tAu",
    // Consonants
    "k": "tK", "kh": "tKh", "g": "tG", "gh": "tGh", 
    "c": "tC", "ch": "tCh", "j": "tJ", "jh": "tJh", 
    "t": "tT", "th": "tTh", "d": "tD", "dh": "tDh", 
    "n": "tN", "p": "tP", "ph": "tPH", "b": "tB", 
    "bh": "tBH", "m": "tM", "sh": "tS", "l": "tL", 
    "y": "tY", "r": "tR", "s": "tSH", "h": "tH"
};

export const PUNCT_DICT = {
    ",r": "t,R", ",rr": "t,Rr", ",l": "t,L", ",ll": "t,Ll",
    ";m": "t;M", ".h": "t.H", ";n": "t;N", "~n": "t~N", ".n": "t.N",
    "_r": "t_R", "_t": "t_T", "_n": "t_N", "_l": "t_L",
    ".l": "t.L", "v": "tV", ".s": "t.S", "'": "t'", "^u": "t^U",
	".t":"t.T", ".th": "t.TH", ".d":"t.D", ".dh": "t.Dh",
	"*.n":"t*.N", "*n":"t*N", "*r":"t*R", "*l": "t*L",  "*.l": "t*.L", "*k": "t*K" // really should organise this
	
};

export const CHILLS = new Set(["t*.N", "t*N", "t*R", "t*L", "t*.L", "t*K"]);


export const MASTER_DICT = { ...STANDARD_DICT, ...PUNCT_DICT };


export const MALAYALAM = {
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

export const TAMIL = {
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

export const KANNADA = {
    // swara-aksharagaLu (independent vowels at beginning of words)
    "tA": "\u0C85",   // ಅ
    "tAA": "\u0C86",  // ಆ
    "tI": "\u0C87",   // ಇ
    "tII": "\u0C88",  // ಈ
    "tU": "\u0C89",   // ಉ
    "tUU": "\u0C8A",  // ಊ
    "t,R": "\u0C8B",  // ಋ
    "t,Rr": "\u0CE0", // ೠ
    "t,L": "\u0C8C",  // ಌ
    "t,Ll": "\u0CE1", // ೡ
    "tE": "\u0C8E",   // ಎ
    "tEE": "\u0C8F",  // ಏ
    "tAi": "\u0C90",  // ಐ
    "tO": "\u0C92",   // ಒ
    "tOO": "\u0C93",  // ಓ
    "tAu": "\u0C94",  // ಔ

    // "chinnagaLu" (dependent vowel signs attached to consonants)
    "VOWEL_SIGNS": {
        "tA": "",       // no sign: inherent "a"
        "tAA": "\u0CBE", // ಾ
        "tI": "\u0CBF",  // ಿ
        "tII": "\u0CC0", // ೀ
        "tU": "\u0CC1",  // ು
        "tUU": "\u0CC2", // ೂ
        "t,R": "\u0CC3", // ೃ
        "t,Rr": "\u0CC4", // ೄ
        "t,L": "\u0CE2", // ೢ
        "t,Ll": "\u0CE3", // ೣ
        "tE": "\u0CC6",  // ೆ
        "tEE": "\u0CC7", // ೇ
        "tAi": "\u0CC8", // ೈ
        "tO": "\u0CCA",  // ೊ
        "tOO": "\u0CCB", // ೋ
        "tAu": "\u0CCC"  // ೌ
    },

    // consonants (vyanjanagaLu)
    "tK": "\u0C95",  // ಕ
    "tKh": "\u0C96", // ಖ
    "tG": "\u0C97",  // ಗ
    "tGh": "\u0C98", // ಘ

    "tC": "\u0C9A",  // ಚ
    "tCh": "\u0C9B", // ಛ
    "tJ": "\u0C9C",  // ಜ
    "tJh": "\u0C9D", // ಝ

    "t.T": "\u0C9F",  // ಟ
    "t.TH": "\u0CA0", // ಠ
    "t.D": "\u0CA1",  // ಡ
    "t.Dh": "\u0CA2", // ಢ
    "t.N": "\u0CA3",  // ಣ

    "tT": "\u0CA4",  // ತ
    "tTh": "\u0CA5", // ಥ
    "tD": "\u0CA6",  // ದ
    "tDh": "\u0CA7", // ಧ
    "tN": "\u0CA8",  // ನ
    "t_N": "", // _n doesnt exists here

    "tP": "\u0CAA",  // ಪ
    "tPH": "\u0CAB", // ಫ
    "tB": "\u0CAC",  // ಬ
    "tBH": "\u0CAD", // ಭ
    "tM": "\u0CAE",  // ಮ

    "tY": "\u0CAF",  // ಯ
    "tR": "\u0CB0",  // ರ
    "tL": "\u0CB2",  // ಲ
    "tV": "\u0CB5",  // ವ

    "tS": "\u0CB6",  // ಶ
    "t.S": "\u0CB7", // ಷ
    "tSH": "\u0CB8", // ಸ
    "tH": "\u0CB9",  // ಹ

    "t.L": "\u0CB3", // ಳ
    "t_L": "\u0CDE", // ೞ
    "t_R": "\u0CB1", // ಱ
    "t;N": "\u0C99", // ಙ
    "t~N": "\u0C9E", // ಞ

    // special symbols :w
    "t;M": "\u0C82", // Anusvara (ಂ)
    "t.H": "\u0C83", // Visarga (ಃ)
    "t^U": "\u0CCD", // Virama / Halant (್)
};
//:w
