import { MALAYALAM, MASTER_DICT, PUNCT_DICT, STANDARD_DICT, TAMIL, KANNADA, TELUGU, DEVANAGARI, ODIA, BANGLAASAMIYA, KAITHI, SAURASHTRA, GURUMUKHI, GUJARATI, SINHALA, TIBETAN, PUNCTUATION} from "./dicts.js";
const NO_A_VOWELS = new Set(['e', 'i', 'o', 'u', 'aa', 'ee', 'ii', 'oo', 'uu', 'ai', 'au', ';m', '.h', ',r', ',rr', ',l', ',ll', '^u']);

import { LANGUAGE_REGISTRY, isVowelNoA, isVowel, isChill } from "./15919.js";

function creatInvrtDict(forwardDict) {    
	const pairs = []; // collect all [latKey, indicVal] pairs without collision loss

    	function traverser(obj) {
        	if (!obj) return;

        	if (Array.isArray(obj)) {
            		for (const item of obj) {
                		if (typeof item === 'object' && item !== null) {
                    			traverser(item);
                		}
            		}
            		return;
        	}

        	for (const [key, value] of Object.entries(obj)) {
            		if (value && typeof value === 'object') {
                		traverser(value);
            		}
            		else if (typeof value === 'string' && value.length > 0) {
                		pairs.push([key, value]);
            		}
        	}
    	}

    	traverser(forwardDict);

    	const inverted = {};
    
    	// sort descending, so greedy still works
   	pairs.sort((a, b) => b[0].length - a.length);

    	for (const [latKey, indicVal] of pairs) {
        	if (!inverted[indicVal]) {    
            	inverted[indicVal] = latKey;
        	}
    	}

    	return inverted;
}

function toLatinTokens(rawIn, lang) {
	const rawInRaw = typeof rawIn === 'string' ? rawIn : String(rawIn);
    	const input = typeof rawInRaw.normalize === 'function' ? rawInRaw.normalize('NFC') : rawInRaw;
    	const currentLangDict = creatInvrtDict(LANGUAGE_REGISTRY[lang].dict);
    	let i = 0;
    	const len = input.length;
    	const tokens = []; // Return an array of tokens instead of a flattened string

    	const keys = Object.keys(currentLangDict).sort((a, b) => b.length - a.length);

    	while (i < len) {
        	let matched = false;
       		for (const indicKey of keys) {
            		if (!indicKey || indicKey.length === 0) continue;
            		if (input.startsWith(indicKey, i)) {
                		tokens.push(currentLangDict[indicKey]);
                		i += indicKey.length;
               			matched = true;
                		break;
            		}
        	}
        	if (!matched) {
            		tokens.push(input[i]);
            		i++;
        	}
    	}

    	return tokens;
}

export function toLatinText(input, lang) {
    	const tokens = toLatinTokens(input, lang); 
    	const currentDict = creatInvrtDict(MASTER_DICT);
    	let i = 0;
    	let result = "";

	console.log (tokens);

    	while (i < tokens.length) {
        	
		const currentToken = tokens[i];
        	const nextToken = tokens[i + 1];

		console.log(currentToken);

        	if (currentToken === "t^U") {
            		i++;
            		continue;
        	}
		else if (isChill(currentToken)) {
			result += currentDict[currentToken];
			i++;
			continue;
		}
		else if (PUNCTUATION.has(currentToken)) {
			result += currentToken;
			i++;
			continue;
		}

		else if (isVowel(currentDict[currentToken])) {
            		result += currentDict[currentToken];
            		i++;
        	} 
        	else if (!isVowel(currentDict[currentToken])) {
            		result += currentDict[currentToken]; 

            		if (nextToken === "t^U") {
                		i+=2; 
            		}

            		else if (nextToken && isVowel(currentDict[nextToken])) {
                		result += currentDict[nextToken]; 
                		i+=2; 
            		} 
            		else {
                		result += "a";
		    		i++; 
            		}
        	} 
        	else if (!isChill(currentDict[currentToken])){
          		result += currentToken;
            		i++;
        	}
    	}
    	return result.split("t^U").join("");
}
if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = {
	toLatinText
    };
}
else if (typeof window !== 'undefined' )
window.toLatinText = toLatinText;
