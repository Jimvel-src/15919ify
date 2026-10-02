# Telugu Typing Instructions

### Vowels and Pseudovowels
|7 bit ISO 15919|Telugu Character equivalent|
|---------------|---------------------------|
| `a` | `అ` |
| `aa` | `ఆ` |
| `i` | `ఇ` |
| `ii` | `ఈ` |
| `u` | `ఉ` |
| `uu` | `ఊ` |
| `,r` | `ఋ` |
| `,rr` | `ౠ` |
| `,l` | `ఌ` |
| `,ll` | `ౡ` |
| `e` | `ఎ` |
| `ee` | `ఏ` |
| `ai` | `ఐ` |
| `o` | `ఒ` |
| `oo` | `ఓ` |
| `au` | `ఔ` |
| `;m` | `ం` |
| `.h` | `ః` |
| `^u` | `్` |

### Additional Signs

|7 bit ISO 15919|Telugu Character equivalent|
|---------------|---------------------------|
| `^n` | `ఁ` |
| `~m` | `ఀ` |
| `^c` | `ౘ` |
| `z` | `ౙ` |

`;m`, `.h`, `^n` and `~m` are signs. When typed on their own they are
output as-is, without a virama being added.

### Consonants

|7 bit ISO 15919|Telugu Character equivalent|
|---------------|---------------------------|
| `k` | `క` |
| `kh` | `ఖ` |
| `g` | `గ` |
| `gh` | `ఘ` |
| `;n` | `ఙ` |
| `c` | `చ` |
| `ch` | `ఛ` |
| `j` | `జ` |
| `jh` | `ఝ` |
| `~n` | `ఞ` |
| `.t` | `ట` |
| `.th` | `ఠ` |
| `.d` | `డ` |
| `.dh` | `ఢ` |
| `.n` | `ణ` |
| `t` | `త` |
| `th` | `థ` |
| `d` | `ద` |
| `dh` | `ధ` |
| `n` | `న` |
| `_n` | `న` |
| `p` | `ప` |
| `ph` | `ఫ` |
| `b` | `బ` |
| `bh` | `భ` |
| `m` | `మ` |
| `y` | `య` |
| `r` | `ర` |
| `l` | `ల` |
| `v` | `వ` |
| `s` | `శ` |
| `.s` | `ష` |
| `sh` | `స` |
| `h` | `హ` |
| `.l` | `ళ` |
| `_l`  | `ఴ` |
| `_r` | `ఱ` |


`_n` produces the same letter as `n`. It is kept so the distinction is
preserved in the input.


### Common Conjuncting Letters

Telugu forms consonant clusters using the virama (`్`). A consonant
normally has an inherent `a` sound when no vowel sign is supplied. To
suppress that inherent vowel and form a consonant cluster, the virama
(`^u`) is used internally.

The following are examples. In normal use, consonants in a cluster do not
need to have `^u` manually added when the parser can determine the
conjunct from the following consonant.

|7 bit ISO 15919|Telugu Character equivalent|
|---------------|---------------------------|
| `kka` | `క్క` |
| `gga` | `గ్గ` |
| `cca` | `చ్చ` |
| `~nca` | `ఞ్చ` |
| `.t.ta` | `ట్ట` |
| `.n.ta` | `ణ్ట` |
| `tta` | `త్త` |
| `nta` | `న్త` |
| `nna` | `న్న` |
| `ppa` | `ప్ప` |
| `mma` | `మ్మ` |
| `lla` | `ల్ల` |
| `.l.la` | `ళ్ళ` |
| `;n;na` | `ఙ్ఙ` |
| `~nja` | `ఞ్జ` |
| `.n.da` | `ణ్డ` |
| `nda` | `న్ద` |
| `mba` | `మ్బ` |
| `rka` | `ర్క` |
| `rpa` | `ర్ప` |
| `lka` | `ల్క` |
| `lpa` | `ల్ప` |
| `vra` | `వ్ర` |

and others in the similar format.

### Inherent `a` and Virama

Telugu consonants have an inherent `a` sound.

For example:

| Input | Telugu |
|-------|--------|
| `ka` | `క` |
| `k` | `క్` |
| `kaa` | `కా` |
| `ki` | `కి` |
| `ku` | `కు` |
| `ke` | `కె` |
| `kee` | `కే` |
| `ko` | `కొ` |
| `koo` | `కో` |
| `k^u` | `క్` |

Normally, a consonant followed by a vowel uses the appropriate dependent
vowel sign. When a consonant has no vowel, the converter adds the Telugu
virama (`్`) to suppress the inherent `a`.


