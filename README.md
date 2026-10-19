
# 15919ify+
An open-source web utility designed to take in text in 7 Bit ISO 15919 format and transcode it into various Indic Scripts. While built with a modular architecture capable of scaling to multiple languages, it currently only has support for the ones in the standard as mentioned below. Current Malayalam setup is made taking huge liberties like introducing various character combinations not in the current standard (ie, chillu letters).
> Try the tool out [here](https://sox.nekoweb.org/15919.html)

## File structure
* `15919.js` - The core parsing engine and transliteration framework. Currently only supports mapping to Malayalam, Tamil, Kannada, Telugu and Devanagiri but can be modified to accomodate other languages
* `15919.html` - An example reference implemtation showing how it could be used in a bare-bones way, with live debounced input listeners and manual override triggers.
* `15919.css` - CSS for my page I made open source, cuz good practice
* `dicts.js` - All UNICODE mappings and other DICTS have been moved to this file after v1.6.1

## Features
* Scans input strings character-by-character, intelligently grouping multi-character consonant and vowel clusters (up to 3-character keys)
* Dictionary based mapping system covering all letters and symbols in  `Malayalam`, `Tamil` & `Kannada`
## Scripts supported
- [X] Malayalam (id: `malayalam`)
- [X] Tamil (id: `tamil`)
- [X] Kannada (id: `kannada` )
- [X] Telugu (id: `telugu`)
- [X] Devenagari (id: `devanagariV`)
- [X] Odia (id: `odia`)
- [X] Bengali (id: `bangla`)
- [X] Asamiya (id: `asamiya`)
- [X] Gurumukhi (id: `gurumukhi`)
- [X] Gujarati (id: `gujarati`)
- [X] Kaithi (id: `kaithi`)
- [X] Sinhala (id: `sinhala`)
- [X] Tibetan (id: `tibetan`)
- [X] Saurashtra (id: `saurashtra`)

> I won't be adding the one for Nashtaliq since, RTL will be a lot of work, and might even require a rework of the whole system, and also since many standards exist with implementations.
> Not adding thai, due to symbol input order being mixed up, will need a rework, and also since it isnt really covered in the standard.

## Syntax and Typing
For a basic idea on how this system works, refer to the following tables for typing instructions based on the modified [7Bit ISO 15919](https://en.wikipedia.org/wiki/ISO_15919)
* Refer to [Malayalam section](malayalam.md) for instructions on typing Malayalam
* Refer to [Tamil section](tamil.md) for instructions on typing Tamil
* Refer to [Kannada section](kannada.md) for instructions on typing Kannada
* Refer to [Telugu section](telugu.md) for instructions on typing Telugu
* Refer to [Devanagari section](devanagari.md) for instructions on typing Hindi, Nepali and other languages which use Devanagiri
* Refer to [Odiya Section](odia.md) for instructions on typing Odia / Oriya

## For Devs (js only methord)
### ES modules
Import the functions from the public entry point:
```
import {
    convertText,
    tokenize,
    scanAndParse,
    LANGUAGE_REGISTRY
} from "./15919.js";
```

Replace ./15919.js with the actual relative path to the package entry point.
Not all these functions are required for usage, import as needed. (vide explainations below)
### Convert text
Use convertText(inputText, lang) to transliterate Latin input into the requested script. 
Example : 
```
import { convertText } from "./15919.js";

console.log(convertText("namaskaaram", "malayalam"));
console.log(convertText("namaste", "devanagari"));
console.log(convertText("vanakkam", "tamil"));
```

#### Parameters
| Parameter | Type | Description | 
| --- | --- |  --- |
| InputText | string | Latin transliteration input. | 
| lang | string | Output script identifiern (vide scripts supported) |

**Returns** : string containing the converted text.

An unsupported language identifier throws an Error.
```
convertText("example", "unsupported");
// Error: Unknown output script: unsupported
```

### Tokenize input
Use `tokenize(inputText, options)` when you need the parsed tokens rather than the final script output.
```
import { tokenize } from "./15919.js";

const tokens = tokenize("namaskaaram");

console.log(tokens);
```
The optional options object supports:
* `autoAnu` - type : Boolean, default : false, Enables the parser's automatic anusvara rule. 

Example: 
```
const tokens = tokenize("namaskaaram", {
    autoAnu: true
});
```
**Returns** : an array of token objects.

Parsed tokens have the following structure:
``` 
{
    consonant: "...", // mapped consonant, or null
    vowel: "...",     // mapped vowel, or null
    raw: "..."        // consumed input
}
```
Whitespace and unrecognized characters have different structures:
```
{ type: "SPACE", raw: " " }

{ type: "UNKNOWN", raw: "?" }
```
Inspect type before accessing consonant or vowel, since these fields are not present on whitespace and unknown-character tokens.


### Parse input directly
`scanAndParse(inputText, autoAnu)` exposes the underlying scanner and parser.
``` 
import { scanAndParse } from "./15919.js";

const tokens = scanAndParse("namaskaaram", false);
```
#### Parameters
* inputText (string) : Latin input
* autoAnu (boolean) : Whether to enable automatic anusvara handling

**Returns** : an array of parsed tokens.
Unlike tokenize(), this function takes the option as a direct argument instead of an options object.

### Access the language registry
`LANGUAGE_REGISTRY `exposes the configuration used by convertText()
``` 
import { LANGUAGE_REGISTRY } from "./15919.js";

console.log(Object.keys(LANGUAGE_REGISTRY));
console.log(LANGUAGE_REGISTRY.malayalam);
```
Each language configuration contains:

* autoAnu: automatic anusvara behavior.
* dict: the dictionary used for output conversion.
* virama: the script's virama character.

The registry is currently exported as a mutable object. Direct modifications can affect subsequent conversions. Treat its internal structure as implementation-level configuration

### Parser behavior and limitations
* Input is converted to lowercase before parsing. Original capitalization is not preserved.
* The parser uses greedy matching, preferring recognized three-character sequences, then two-character sequences, then single characters.
* Unrecognized characters are passed through as UNKNOWN tokens.
* Characters that exist in the ISO 15919 mapping but not in the script will be consumed.
* Spaces are emitted as SPACE tokens. Newlines are not currently handled as a dedicated whitespace token.
* Output conversion depends on the selected script dictionary and its vowel-sign mappings.
* The parser does not guarantee that every possible Latin input has a valid transliteration.
* tokenize() does not select a language; its automatic anusvara option defaults to false.

### Automatic anusvara handling
* Some language configurations enable automatic anusvara handling. When enabled, the parser recognizes m as the special ";m" dictionary token when it is followed by a space, newline, or recognized punctuation character.
* The behavior is controlled by the language configuration when using convertText(). For direct calls to tokenize() or scanAndParse(), the caller controls the option.
* This is a parser-specific rule, not a general linguistic guarantee. Its output depends on the configured dictionary and the context in which m occurs.

### Exports in the code 
#### ES modules
```
export  {
    convertText,
    tokenize,
    scanAndParse,
    LANGUAGE_REGISTRY
};
```
#### CommonJS
```
module.exports = {
    convertText,
    tokenize,
    scanAndParse,
    LANGUAGE_REGISTRY
};
```



### Dev Notes : 
* Bengali and Assamese have separate registry entries but currently share the same dictionary object. Their handling of the Ra character is distinguished in the output conversion logic.
* When adding a script, provide its dictionary and configure its virama and automatic anusvara behavior.

## Disclaimers 
* The ISO standard 15919 is used for transliterating text from Indic Languages to Latin, while this tool does the opposite, converts text from the latin format (vide next line) and converts it into various scripts.
* Chillu letters (in malayalam) are typed using the symbol `*` as a prefix, and this symbol doesnt not exist in the standard and is a tool specific implementation I made up. 

