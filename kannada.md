# Kannada Typing Instructions

### Vowels and Pseudovowels
|7 bit ISO 15919|Kannada Character equivalent|
|---------------|----------------------------|
| `a` | `ಅ` |
| `aa` | `ಆ` |
| `i` | `ಇ` |
| `ii` | `ಈ` |
| `u` | `ಉ` |
| `uu` | `ಊ` |
| `,r` | `ಋ` |
| `,rr` | `ೠ` |
| `,l` | `ಌ` |
| `,ll` | `ೡ` |
| `e` | `ಎ` |
| `ee` | `ಏ` |
| `ai` | `ಐ` |
| `o` | `ಒ` |
| `oo` | `ಓ` |
| `au` | `ಔ` |
| `;m` | `ಂ` |
| `.h` | `ಃ` |
| `^u` | `್` |

### Consonants

|7 bit ISO 15919|Kannada Character equivalent|
|---------------|----------------------------|
| `k` | `ಕ` |
| `kh` | `ಖ` |
| `g` | `ಗ` |
| `gh` | `ಘ` |
| `;n` | `ಙ` |
| `c` | `ಚ` |
| `ch` | `ಛ` |
| `j` | `ಜ` |
| `jh` | `ಝ` |
| `~n` | `ಞ` |
| `.t` | `ಟ` |
| `.th` | `ಠ` |
| `.d` | `ಡ` |
| `.dh` | `ಢ` |
| `.n` | `ಣ` |
| `t` | `ತ` |
| `th` | `ಥ` |
| `d` | `ದ` |
| `dh` | `ಧ` |
| `n` | `ನ` |
| `p` | `ಪ` |
| `ph` | `ಫ` |
| `b` | `ಬ` |
| `bh` | `ಭ` |
| `m` | `ಮ` |
| `y` | `ಯ` |
| `r` | `ರ` |
| `l` | `ಲ` |
| `v` | `ವ` |
| `sh` | `ಶ` |
| `.s` | `ಷ` |
| `s` | `ಸ` |
| `h` | `ಹ` |
| `.l` | `ಳ` |
| `_l` | `ೞ` |
| `_r` | `ಱ` |

### Common Conjuncting Letters

Kannada forms consonant clusters using the virama (`್`). A consonant
normally has an inherent `a` sound when no vowel sign is supplied. To
suppress that inherent vowel and form a consonant cluster, the virama
(`^u`) is used internally.

The following are examples. In normal use, consonants in a cluster do not
need to have `^u` manually added when the parser can determine the
conjunct from the following consonant.

|7 bit ISO 15919|Kannada Character equivalent|
|---------------|----------------------------|
| `kka` | `ಕ್ಕ` |
| `gga` | `ಗ್ಗ` |
| `cca` | `ಚ್ಚ` |
| `~nca` | `ಞ್ಚ` |
| `.t.ta` | `ಟ್ಟ` |
| `.n.ta` | `ಣ್ಟ` |
| `tta` | `ತ್ತ` |
| `nta` | `ನ್ತ` |
| `nna` | `ನ್ನ` |
| `ppa` | `ಪ್ಪ` |
| `mma` | `ಮ್ಮ` |
| `lla` | `ಲ್ಲ` |
| `.l.la` | `ಳ್ಳ` |
| `;n;na` | `ಙ್ಙ` |
| `~nja` | `ಞ್ಜ` |
| `.n.da` | `ಣ್ಡ` |
| `nda` | `ನ್ದ` |
| `mba` | `ಮ್ಬ` |
| `rka` | `ರ್ಕ` |
| `rpa` | `ರ್ಪ` |
| `lka` | `ಲ್ಕ` |
| `lpa` | `ಲ್ಪ` |
| `vra` | `ವ್ರ` |

and others in the similar format.

### Inherent `a` and Virama

Kannada consonants have an inherent `a` sound.

For example:

| Input | Kannada |
|-------|---------|
| `ka` | `ಕ` |
| `k` | `ಕ್` |
| `kaa` | `ಕಾ` |
| `ki` | `ಕಿ` |
| `ku` | `ಕು` |
| `ke` | `ಕೆ` |
| `ko` | `ಕೊ` |
| `k^u` | `ಕ್` |

Normally, a consonant followed by a vowel uses the appropriate dependent
vowel sign. When a consonant has no vowel, the converter adds the Kannada
virama (`್`) to suppress the inherent `a`.


