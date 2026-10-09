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
    "y": "tY", "r": "tR", "s": "tSH", "h": "tH",

	// extras for fixing shi 
	"w":"tW"
};

export const PUNCT_DICT = {
    ",r": "t,R", ",rr": "t,Rr", ",l": "t,L", ",ll": "t,Ll",
    ";m": "t;M", ".h": "t.H", ";n": "t;N", "~n": "t~N", ".n": "t.N",
    "_r": "t_R", "_t": "t_T", "_n": "t_N", "_l": "t_L",
    ".l": "t.L", "v": "tV", ".s": "t.S", "'": "t'", "^u": "t^U", "~m": "t~M",  "^n" :"t^N", "^c" : "t^C", "_k":"t_K", "z" : "tZ", "_h": "t_H", "^h" : "t^H", "^c" : "t^C", "^ch" :  "t^CH",".r" : "t.R", ".rh" : "t.RH", ";y" : "t;Y", "^r" : "t^R", "q":"tQ", "_kh":"t_KH", ".g":"t.G", "^z":"t^Z", "f":"tF", 
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
        	"t*K": "\u0D7F"  // ൿ   man, i have never used this letter ever, in all my years of being a native
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
    "t_K": "\u0B83",  // ஃ
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
    "t^U": "\u0CCD" // Virama / Halant (್)

};

export const TELUGU = {
    // Independent vowels
    "tA": "\u0C05",    // అ
    "tAA": "\u0C06",   // ఆ
    "tI": "\u0C07",    // ఇ
    "tII": "\u0C08",   // ఈ
    "tU": "\u0C09",    // ఉ
    "tUU": "\u0C0A",   // ఊ
    "t,R": "\u0C0B",   // ఋ
    "t,Rr": "\u0C60",  // ౠ
    "t,L": "\u0C0C",   // ఌ
    "t,Ll": "\u0C61",  // ౡ
    "tE": "\u0C0E",    // ఎ
    "tEE": "\u0C0F",   // ఏ
    "tAi": "\u0C10",   // ఐ
    "tO": "\u0C12",    // ఒ
    "tOO": "\u0C13",   // ఓ
    "tAu": "\u0C14",   // ఔ

    // Dependent vowel signs
	 "VOWEL_SIGNS": {
    "tAA": "\u0C3E",  // ా
    "tI": "\u0C3F",   // ి
    "tII": "\u0C40",  // ీ
    "tU": "\u0C41",   // ు
    "tUU": "\u0C42",  // ూ
    "t,R": "\u0C43",  // ృ
    "t,Rr": "\u0C44", // ౄ
    "t,L": "\u0C62",  // ౢ
    "t,Ll": "\u0C63", // ౣ
    "tE": "\u0C46",   // ె
    "tEE": "\u0C47",  // ే
    "tAi": "\u0C48",  // ై
    "tO": "\u0C4A",   // ొ
    "tOO": "\u0C4B",  // ో
    "tAu": "\u0C4C",  // ౌ
	},
    // Consonants
    "tK": "\u0C15",    // క
    "tKh": "\u0C16",   // ఖ
    "tG": "\u0C17",    // గ
    "tGh": "\u0C18",   // ఘ
    "t;N": "\u0C19",   // ఙ

    "tC": "\u0C1A",    // చ
    "tCh": "\u0C1B",   // ఛ
    "tJ": "\u0C1C",    // జ
    "tJh": "\u0C1D",   // ఝ
    "t~N": "\u0C1E",   // ఞ

    "t.T": "\u0C1F",   // ట
    "t.TH": "\u0C20",  // ఠ
    "t.D": "\u0C21",   // డ
    "t.Dh": "\u0C22",  // ఢ
    "t.N": "\u0C23",   // ణ

    "tT": "\u0C24",    // త
    "tTh": "\u0C25",   // థ
    "tD": "\u0C26",    // ద
    "tDh": "\u0C27",   // ధ
    "tN": "\u0C28",    // న
    "t_N": "\u0C28",   // న

    "tP": "\u0C2A",    // ప
    "tPH": "\u0C2B",   // ఫ
    "tB": "\u0C2C",    // బ
    "tBH": "\u0C2D",   // భ
    "tM": "\u0C2E",    // మ

    "tY": "\u0C2F",    // య
    "tR": "\u0C30",    // ర
    "tL": "\u0C32",    // ల
    "tV": "\u0C35",    // వ

    "tS": "\u0C36",    // శ
    "t.S": "\u0C37",   // ష
    "tSH": "\u0C38",   // స
    "tH": "\u0C39",    // హ

    "t.L": "\u0C33",   // ళ
    "t_L": "\u0C34",         // No direct equivalent in this mapping
    "t_R": "\u0C31",         // No direct equivalent in this mapping

    // Special signs
    "t;M": "\u0C02",   // ం
    "t.H": "\u0C03",   // ః
    "t^U": "\u0C4D",   // ్
	"t^N" : "\u0C01",
	"t^C" : "\u0C58",
	"t~M" : "\u0C00",
	"tZ" : "\u0C59"

};

export const DEVANAGARI = {
    // Independent vowels
    "tA": "\u0905",     // अ
    "tAA": "\u0906",    // आ
    "tI": "\u0907",     // इ
    "tII": "\u0908",    // ई
    "tU": "\u0909",     // उ
    "tUU": "\u090A",    // ऊ
    "t,R": "\u090B",    // ऋ
    "t,Rr": "\u0960",   // ॠ
    "t,L": "\u090C",    // ऌ
    "t,Ll": "\u0961",   // ॡ
    "tE": "\u090F",     // ए
    "tEE": "\u090F",    // ए
    "tAi": "\u0910",    // ऐ
    "tO": "\u0913",     // ओ
    "tOO": "\u0913",    // ओ
    "tAu": "\u0914",    // औ

    // Dependent vowel signs
    "VOWEL_SIGNS": {
        "tAA": "\u093E",    // ा
        "tI": "\u093F",     // ि
        "tII": "\u0940",    // ी
        "tU": "\u0941",     // ु
        "tUU": "\u0942",    // ू
        "t,R": "\u0943",    // ृ
        "t,Rr": "\u0944",   // ॄ
        "t,L": "\u0962",    // ॢ
        "t,Ll": "\u0963",   // ॣ
        "tE": "\u0947",     // े
        "tEE": "\u0947",    // े
        "tAi": "\u0948",    // ै
        "tO": "\u094B",     // ो
        "tOO": "\u094B",    // ो
        "tAu": "\u094C"     // ौ
    },

    // Consonants
    "tK": "\u0915",     // क
    "tKh": "\u0916",    // ख
    "tG": "\u0917",     // ग
    "tGh": "\u0918",    // घ
    "t;N": "\u0919",    // ङ

    "tC": "\u091A",     // च
    "tCh": "\u091B",    // छ
    "tJ": "\u091C",     // ज
    "tJh": "\u091D",    // झ
    "t~N": "\u091E",    // ञ

    "t.T": "\u091F",    // ट
    "t.TH": "\u0920",   // ठ
    "t.D": "\u0921",    // ड
    "t.Dh": "\u0922",   // ढ
    "t.N": "\u0923",    // ण

    "tT": "\u0924",     // त
    "tTh": "\u0925",    // थ
    "tD": "\u0926",     // द
    "tDh": "\u0927",    // ध
    "tN": "\u0928",     // न
    "t_N": "\u0929",    // ऩ (rare)

    "tP": "\u092A",     // प
    "tPH": "\u092B",    // फ
    "tB": "\u092C",     // ब
    "tBH": "\u092D",    // भ
    "tM": "\u092E",     // म

    "tY": "\u092F",     // य
    "tR": "\u0930",     // र
    "tL": "\u0932",     // ल
    "tV": "\u0935",     // व

    "tS": "\u0936",     // श
    "t.S": "\u0937",    // ष
    "tSH": "\u0938",    // स
    "tH": "\u0939",     // ह

    "t.L": "\u0933",    // ळ
    "t_L": "\u0934",     
    "t_R": "\u0931",    // ऱ

    // Special signs
    "t;M": "\u0902",    // ं
    "t.H": "\u0903",    // ः
    "t^U": "\u094D",    // ्
    "t^N": "\u0900",    // ँ
    "t~M": "\u0901",    // ऀ


    // Extended / foreign sounds
    "t_H": "\u1CF5",    // ᳵ
    "t^H": "\u1CF6",    // ᳶ
    "t^C": "\u091A\u093C", // च़
    "t^CH": "\u091B\u093C", // छ़
    "t.R": "\u0921\u093C",  // ड़
    "t.RH": "\u0922\u093C", // ढ़
    "t;Y": "\u092F\u093C",  // य़
    "t^R": "\u0930\u094D\u200D", // र्‍
    "t'": "\u093D",      // ऽ
    "tQ": "\u0915\u093C", // क़
    "t_KH": "\u0916\u093C", // ख़
    "t.G": "\u0917\u093C", // ग़
    "t^Z": "\u091D\u093C", // झ़
    "tF": "\u092B\u093C", // फ़
    "tW": "\u0935\u093C", // व़
};

export const ODIA = {
    // Independent vowels
    "tA": "\u0B05",     // ଅ
    "tAA": "\u0B06",    // ଆ
    "tI": "\u0B07",     // ଇ
    "tII": "\u0B08",    // ଈ
    "tU": "\u0B09",     // ଉ
    "tUU": "\u0B0A",    // ଊ
    "t,R": "\u0B0B",    // ଋ
    "t,Rr": "\u0B60",   // ୠ
    "t,L": "\u0B0C",    // ଌ
    "t,Ll": "\u0B61",   // ୡ
    "tE": "\u0B0F",     // ଏ
    "tEE": "\u0B0F",    // ଏ
    "tAi": "\u0B10",   // ଐ
    "tO": "\u0B13",     // ଓ
    "tOO": "\u0B13",    // ଓ
    "tAu": "\u0B14",    // ଔ

    // Dependent vowel signs
    "VOWEL_SIGNS": {
        "tAA": "\u0B3E",    // ା
        "tI": "\u0B3F",     // ି
        "tII": "\u0B40",    // ୀ
        "tU": "\u0B41",     // ୁ
        "tUU": "\u0B42",    // ୂ
        "t,R": "\u0B43",    // ୃ
        "t,Rr": "\u0B44",   // ୄ
        "t,L": "\u0B62",    // ୢ
        "t,Ll": "\u0B63",   // ୣ
        "tE": "\u0B47",     // େ
        "tEE": "\u0B47",    // େ
        "tAi": "\u0B48",    // ୈ
        "tO": "\u0B4B",     // ୋ
        "tOO": "\u0B4B",    // ୋ
        "tAu": "\u0B4C"     // ୌ
    },

    // Consonants
    "tK": "\u0B15",     // କ
    "tKh": "\u0B16",    // ଖ
    "tG": "\u0B17",     // ଗ
    "tGh": "\u0B18",    // ଘ
    "t;N": "\u0B19",    // ଙ

    "tC": "\u0B1A",     // ଚ
    "tCh": "\u0B1B",    // ଛ
    "tJ": "\u0B1C",     // ଜ
    "tJh": "\u0B1D",    // ଝ
    "t~N": "\u0B1E",    // ଞ

    "t.T": "\u0B1F",    // ଟ
    "t.TH": "\u0B20",   // ଠ
    "t.D": "\u0B21",    // ଡ
    "t.Dh": "\u0B22",   // ଢ
    "t.N": "\u0B23",    // ଣ

    "tT": "\u0B24",     // ତ
    "tTh": "\u0B25",    // ଥ
    "tD": "\u0B26",     // ଦ
    "tDh": "\u0B27",    // ଧ
    "tN": "\u0B28",     // ନ

    "tP": "\u0B2A",     // ପ
    "tPH": "\u0B2B",    // ଫ
    "tB": "\u0B2C",     // ବ
    "tBH": "\u0B2D",    // ଭ
    "tM": "\u0B2E",     // ମ

    "tY": "\u0B2F",     // ଯ
    "tR": "\u0B30",     // ର
    "tL": "\u0B32",     // ଲ
    "tV": "\u0B35",     // ଵ

    "tS": "\u0B36",     // ଶ
    "t.S": "\u0B37",    // ଷ
    "tSH": "\u0B38",    // ସ
    "tH": "\u0B39",     // ହ

    "t.L": "\u0B33",    // ଳ
    "t.R": "\u0B5C",    // ଡ଼
    "t.RH": "\u0B5D",   // ଢ଼

    // Special signs
    "t;M": "\u0B02",    // ଂ
    "t.H": "\u0B03",    // ଃ
    "t^U": "\u0B4D",    // ୍
    "t^N": "\u0B01",    // ଁ
    "t'": "\u0B3D",     // ଽ

    // Additional Odia letter
    "tW": "\u0B71",      // ୱ
	"t.R":"\u0B5C",
	"t.RH":"\u0B5D",
	"t;Y":"\u0B5F",
	"t'":"\u0B3D"
};

export const BANGLA_ASAMIYA = {
	"tA":"\u0985",
	"tAA":"\u0986",
	"tI":"\u0987",
	"tII":"\u0988",
	"tU":"\u0989",
 	"tUU": "\u098A",    
    	"t,R": "\u098B",    
    	"t,Rr": "\u09E0",   
    	"t,L": "\u098C",    
    	"t,Ll": "\u09E1",   
	"tE": "\u098F",     
    	"tEE": "\u098F",    
    	"tAi": "\u0990",    
    	"tO": "\u0993",     
    	"tOO": "\u0993",    
    	"tAu": "\u0994",
    "VOWEL_SIGNS": {
        "tAA": "\u09BE",    
        "tI": "\u09BF",     
        "tII": "\u09B0",    
        "tU": "\u09C1",     
        "tUU": "\u09C2",    
        "t,R": "\u09C3",    
        "t,Rr": "\u09C4",   
        "t,L": "\u09E2",    
        "t,Ll": "\u09E3",   
        "tE": "\u09C7",     
        "tEE": "\u09C7",    
        "tAi": "\u09C8",    
        "tO": "\u09CB",     
        "tOO": "\u09CB",    
        "tAu": "\u09CC"     
    },

    // Consonants
    "tK": "\u0995",     
    "tKh": "\u0996",    
    "tG": "\u0997",     
    "tGh": "\u0998",    
	"t;N": "\u0999",    

    "tC": "\u099A",     
    "tCh": "\u099B",    
    "tJ": "\u099C",     
	"tJh": "\u099D",    
    "t~N": "\u099E",    

    "t.T": "\u099F",    
    "t.TH": "\u09A0",   
    "t.D": "\u09A1",    
	"t.Dh": "\u09A2",   
    "t.N": "\u09A3",    

    "tT": "\u09A4",     
    "tTh": "\u09A5",    
    "tD": "\u09A6",     
    "tDh": "\u09A7",    
    "tN": "\u09A8",     

"tP": "\u09AA",     
    "tPH": "\u09AB",
    "tB": "\u09AC",     
    "tBH": "\u09AD",    
    "tM": "\u09AE",     

	"tY": "\u09AF",     
//    "tR": "\u09B0",     
    "tL": "\u09B2",     
    "tW": "\u09F1",     

    "tS": "\u09B8",     
    "t.S": "\u09B7",    
    "tSH": "\u09B8",    
    "tH": "\u09B9",     
  
    "t_R": "\u0931",    
	"t*T":"\u09CE",
	"t_N":"\u09A8",

    // Special signs
    "t;M": "\u0982",  
    "t.H": "\u0983",   
    "t^U": "\u09CD",    
	"t~M": "\u0901",    

	"t;Y":"\u09DF",
	"t'":"\u09BD",
    "t.R": "\u09DC",  
    "t.RH": "\u09DD", 
	"tQ": "\u0995\u09BC", 
    "t_KH": "\u0996\u09BC", 
    "t.G": "\u0997\u09BC",
    "t^Z": "\u099D\u09BC", 
    "tF": "\u09AB\u09BC",
//	"t*R":"\u09F0"

};
export const SAURASHTRA = {
    // Independent vowels
    "tA": "\uA882",     
    "tAA": "\uA883",    
    "tI": "\uA884",     
    "tII": "\uA885",    
    "tU": "\uA886",     
    "tUU": "\uA887",
	"t,R":"\uA888",
	"t,RR":"\uA889",
	"t,L":"\uA88A",
	"t,LL":"\uA88B",
    "tE": "\uA88C",     
    "tEE": "\uA88D",    
    "tAi": "\uA88E",   
    "tO": "\uA88F",     
    "tOO": "\uA890",    
    "tAu": "\uA891",    

    // Dependent vowel signs
    "VOWEL_SIGNS": {
        "tAA": "\uA8B5",    
        "tI": "\uA8B6",     
	"tII": "\uA8B7",    
        "tU": "\uA8B8",     
        "tUU": "\uA8B9",

	"t,R":"\uA8BA",
	"t,RR":"\uA8BB",
	"t,L":"\uA8BC",
	"t,LL":"\uA8BD",

        "tE": "\uA8BE",     
        "tEE": "\uA8BF",    
        "tAi": "\uA8C0",    
        "tO": "\uA8C1",     
        "tOO": "\uA8C2",    
        "tAu": "\uA8C3"     
    },

    // Consonants
    "tK": "\uA892",    
    "tKh": "\uA893",    
    "tG": "\uA894",     
    "tGh": "\uA895",    
    "t;N": "\uA896", 

    "tC": "\uA897",     
    "tCh": "\uA898",    
    "tJ": "\uA899",     
    "tJh": "\uA89A",    
    "t~N": "\uA89B",    

    "t.T": "\uA89C",  
    "t.TH": "\uA89D", 
    "t.D": "\uA89E",  
    "t.Dh": "\uA89F", 
    "t.N": "\uA8A0",  

    "tT": "\uA8A1",   
    "tTh": "\uA8A2",  
    "tD": "\uA8A3",
    "tDh": "\uA8A4",   	
    "tN": "\uA8A5",     

    "tP": "\uA8A6",     
    "tPH": "\uA8A7",   
    "tB": "\uA8A8",     
    "tBH": "\uA8A9",    
    "tM": "\uA8AA",     

    "tY": "\uA8AB",     
    "tR": "\uA8AC",    
    "tL": "\uA8AD",     
    "tV": "\uA8AE",     

    "tS": "\uA8B1",     
    "t.S": "\uA8B0",    
    "tSH": "\uA8AF",    
    "tH": "\uA8B2",     

    // Special signs
    "t;M": "\uA880",    
    "t.H": "\uA881",    
    "t^U": "\uAC84"
};


export const KAITHI = {
// Independent vowels
    "tA": "\u{11083}",      // 𑂃
    "tAA": "\u{11084}",     // 𑂄
    "tI": "\u{11085}",      // 𑂅
    "tII": "\u{11086}",     // 𑂆
    "tU": "\u{11087}",      // 𑂇
    "tUU": "\u{11088}",     // 𑂈
    "tE": "\u{11089}",      // 𑂉
    "tEE": "\u{11089}",     // 𑂉
    "tAi": "\u{1108A}",     // 𑂊
    "tO": "\u{1108B}",      // 𑂋
    "tOO": "\u{1108B}",     // 𑂋
    "tAu": "\u{1108C}",     // 𑂌

    // Dependent vowel signs
    "VOWEL_SIGNS": {
        "tAA": "\u{110B0}",    // 𑂰
        "tI": "\u{110B1}",     // 𑂱
        "tII": "\u{110B2}",    // 𑂲
        "tU": "\u{110B3}",     // 𑂳
        "tUU": "\u{110B4}",    // 𑂴
        "t,R": "\u{110C2}",    // 𑃂
        "tE": "\u{110B5}",     // 𑂵
        "tEE": "\u{110B5}",    // 𑂵
        "tAi": "\u{110B6}",    // 𑂶
        "tO": "\u{110B7}",     // 𑂷
        "tOO": "\u{110B7}",    // 𑂷
        "tAu": "\u{110B8}"     // 𑂸
    },

    // Consonants
    "tK": "\u{1108D}",      // 𑂍
    "tKh": "\u{1108E}",     // 𑂎
    "tG": "\u{1108F}",      // 𑂏
    "tGh": "\u{11090}",     // 𑂐
    "t;N": "\u{11091}",     // 𑂑

    "tC": "\u{11092}",      // 𑂒
    "tCh": "\u{11093}",     // 𑂓
    "tJ": "\u{11094}",      // 𑂔
    "tJh": "\u{11095}",     // 𑂕
    "t~N": "\u{11096}",     // 𑂖

    "t.T": "\u{11097}",     // 𑂗
    "t.TH": "\u{11098}",    // 𑂘
    "t.D": "\u{11099}",     // 𑂙
    "t.Dh": "\u{1109B}",    // 𑂛
    "t.N": "\u{1109D}",     // 𑂝

    "tT": "\u{1109E}",      // 𑂞
    "tTh": "\u{1109F}",     // 𑂟
    "tD": "\u{110A0}",      // 𑂠
    "tDh": "\u{110A1}",     // 𑂡
    "tN": "\u{110A2}",      // 𑂢

    "tP": "\u{110A3}",      // 𑂣
    "tPH": "\u{110A4}",     // 𑂤
    "tB": "\u{110A5}",      // 𑂥
    "tBH": "\u{110A6}",     // 𑂦
    "tM": "\u{110A7}",      // 𑂧

    "tY": "\u{110A8}",      // 𑂨
    "tR": "\u{110A9}",      // 𑂩
    "tL": "\u{110AA}",      // 𑂪
    "tV": "\u{110AB}",      // 𑂫

    "tS": "\u{110AC}",      // 𑂬
    "t.S": "\u{110AD}",     // 𑂭
    "tSH": "\u{110AE}",     // 𑂮
    "tH": "\u{110AF}",      // 𑂯

    // Additional retroflex letters
    "t.R": "\u{1109A}",    // 𑂚
    "t.RH": "\u{1109C}",   // 𑂜

    // Special signs
    "t;M": "\u{11081}",    // 𑂁
    "t.H": "\u{11082}",    // 𑂂
    "t^U": "\u{110B9}",    // 𑂹
    "t^N": "\u{11080}"     // 𑂀
};



//:w
