# 15919ify+
An open-source web utility designed to take in text in 7 Bit ISO 15919 format and transcode it into various Indic Scripts. While built with a modular architecture capable of scaling to multiple languages, it currently only has support for Malayalam. Current Malayalam setup is made taking huge liberties like introducing various characters not in the current standard.

## File structure
* `15919.js` - The core parsing engine and transliteraation framework. Currently only supports mapping to Malayalam Unicode but can be modified to accomodate other langauges
* `15919.html` - An example reference imiplentation showing how it could be used in a bare-bones way, with live debounced input listeners and manual override triggers.

## Features
* Scans input strings character-by-character, intelligently grouping multi-character consonant and vowel clusters (up to 3-character keys)
* Dictionary based mapping system covering all letters and symbols in  `Malayalam`

## Syntax and Typing
Refer to the following tables for typing instructions based on the modified [7Bit ISO 15919](https://en.wikipedia.org/wiki/ISO_15919)

### Vowels and Pseudovowels
|7 bit ISO 15919|Malayalam Character equivalent|
|---------------|-----------------------------|
| `a` | `അ` |
| `aa` | `ആ` |
| `i` | `ഇ` |
| `ii` | `ഈ` |
| `u` | `ഉ` |
| `uu` | `ഊ` |
| `,r` | `ഋ` |
| `,rr` | `ൠ` |
| `,l` | `ഌ` |
| `,ll` | `ൡ` |
| `e` | `എ` |
| `ee` | `ഏ` |
| `ai` | `ഐ` |
| `o` | `ഒ` |
| `oo` | `ഓ` |
| `au` | `ഔ` |
| `;m` | `ം` |
| `.h` | `ഃ` |
| `^u` | `്` |

### Consonants

|7 bit ISO 15919|Malayalam Character equivalent|
|---------------|-----------------------------|
| `k` | `ക` |
| `kh` | `ഖ` |
| `g` | `ഗ` |
| `gh` | `ഘ` |
| `;n` | `ങ` |
| `c` | `ച` |
| `ch` | `ഛ` |
| `j` | `ജ` |
| `jh` | `ഝ` |
| `~n` | `ഞ` |
| `.t` | `ട` |
| `.th` | `ഠ` |
| `.d` | `ഡ` |
| `.dh` | `ഢ` |
| `.n` | `ണ` |
| `t` | `ത` |
| `th` | `ഥ` |
| `d` | `ദ` |
| `dh` | `ധ` |
| `n` | `ന` |
| `p` | `പ` |
| `ph` | `ഫ` |
| `b` | `ബ` |
| `bh` | `ഭ` |
| `m` | `മ` |
| `y` | `യ` |
| `r` | `ര` |
| `l` | `ല` |
| `v` | `വ` |
| `s` | `ശ` |
| `.s` | `ഷ` |
| `sh` | `സ` |
| `h` | `ഹ` |
| `.l` | `ള` |
| `_l` | `ഴ` |
| `_r` | `റ` |

### Chillu Letters

|7 bit ISO 15919|Malayalam Character equivalent|
|---------------|-----------------------------|
| `*.n` | `ൺ` |
| `*n` | `ൻ` |
| `*r` | `ർ` |
| `*l` | `ൽ` |
| `*.l` | `ൾ` |
| `*k` | `ൿ` |

### Common Conjuncting letters.
The Following are only examples. 
> Letters on their own add a chandrakkala if a vowel is not added there. So, in most cases, you wouldnt need to forcibly add a chandrakkala (്) ("^u")

|7 bit ISO 15919|Malayalam Character equivalent|
|---------------|-----------------------------|
| _r_ra | റ്റ |
| .N.ta | ണ്ട |
| ;nka | ങ്ക |
| kka | ക്ക |
| cca | ച്ച |
| ~nca | ഞ്ച | 
| .t.ta | ട്ട |
| .n.ta | ണ്ട |
| tta | ത്ത |
| nta | ന്ത |
| nna | ന്ന |
| ppa | പ്പ |
| lla | ല്ല |
| .l.la | ള്ള |
| ;n;na | ങ്ങ |
| ~nja | ഞ്ജ |
| .n.da | ണ്ഡ |
| nda | ന്ദ |
| mba | മ്പ | 
and others in the similar format.


