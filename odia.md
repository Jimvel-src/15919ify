# Odia Typing Instructions

### Vowels and Pseudovowels
|7 bit ISO 15919|Odia Character equivalent|
|---------------|-------------------------|
| `a` | `ଅ` |
| `aa` | `ଆ` |
| `i` | `ଇ` |
| `ii` | `ଈ` |
| `u` | `ଉ` |
| `uu` | `ଊ` |
| `,r` | `ଋ` |
| `,rr` | `ୠ` |
| `,l` | `ଌ` |
| `,ll` | `ୡ` |
| `e` | `ଏ` |
| `ee` | `ଏ` |
| `ai` | `ଐ` |
| `o` | `ଓ` |
| `oo` | `ଓ` |
| `au` | `ଔ` |
| `;m` | `ଂ` |
| `.h` | `ଃ` |
| `^u` | `୍` |

Odia has no separate short `e` / `o` in this mapping, so `e` and `ee`
give the same letter, and so do `o` and `oo`. Both spellings are kept so
the input system can preserve the distinction.

### Additional Signs

|7 bit ISO 15919|Odia Character equivalent|
|---------------|-------------------------|
| `^n` | `ଁ` |
| `'` | `ଽ` |

`;m`, `.h` and `^n` are signs. When typed on their own they are output
as-is, without a virama being added.

### Consonants

|7 bit ISO 15919|Odia Character equivalent|
|---------------|-------------------------|
| `k` | `କ` |
| `kh` | `ଖ` |
| `g` | `ଗ` |
| `gh` | `ଘ` |
| `;n` | `ଙ` |
| `c` | `ଚ` |
| `ch` | `ଛ` |
| `j` | `ଜ` |
| `jh` | `ଝ` |
| `~n` | `ଞ` |
| `.t` | `ଟ` |
| `.th` | `ଠ` |
| `.d` | `ଡ` |
| `.dh` | `ଢ` |
| `.n` | `ଣ` |
| `t` | `ତ` |
| `th` | `ଥ` |
| `d` | `ଦ` |
| `dh` | `ଧ` |
| `n` | `ନ` |
| `p` | `ପ` |
| `ph` | `ଫ` |
| `b` | `ବ` |
| `bh` | `ଭ` |
| `m` | `ମ` |
| `y` | `ଯ` |
| `r` | `ର` |
| `l` | `ଲ` |
| `v` | `ଵ` |
| `s` | `ଶ` |
| `.s` | `ଷ` |
| `sh` | `ସ` |
| `h` | `ହ` |
| `.l` | `ଳ` |

### Extended Letters

|7 bit ISO 15919|Odia Character equivalent|
|---------------|-------------------------|
| `.r` | `ଡ଼` |
| `.rh` | `ଢ଼` |
| `;y` | `ୟ` |
| `w` | `ୱ` |

`.r` and `.rh` are the flapped forms of `ଡ` and `ଢ`. `;y` is the
semivowel ya (`ୟ`), different from `y` (`ଯ`). `w` is the Odia wa (`ୱ`).

### Common Conjuncting Letters

Odia forms consonant clusters using the virama (`୍`). A consonant
normally has an inherent `a` sound when no vowel sign is supplied. To
suppress that inherent vowel and form a consonant cluster, the virama
(`^u`) is used internally.

The following are examples. In normal use, consonants in a cluster do not
need to have `^u` manually added when the parser can determine the
conjunct from the following consonant.

|7 bit ISO 15919|Odia Character equivalent|
|---------------|-------------------------|
| `kka` | `କ୍କ` |
| `gga` | `ଗ୍ଗ` |
| `cca` | `ଚ୍ଚ` |
| `~nca` | `ଞ୍ଚ` |
| `.t.ta` | `ଟ୍ଟ` |
| `.n.ta` | `ଣ୍ଟ` |
| `tta` | `ତ୍ତ` |
| `nta` | `ନ୍ତ` |
| `nna` | `ନ୍ନ` |
| `ppa` | `ପ୍ପ` |
| `mma` | `ମ୍ମ` |
| `lla` | `ଲ୍ଲ` |
| `.l.la` | `ଳ୍ଳ` |
| `;n;na` | `ଙ୍ଙ` |
| `~nja` | `ଞ୍ଜ` |
| `.n.da` | `ଣ୍ଡ` |
| `nda` | `ନ୍ଦ` |
| `mba` | `ମ୍ବ` |
| `rka` | `ର୍କ` |
| `rpa` | `ର୍ପ` |
| `lka` | `ଲ୍କ` |
| `lpa` | `ଲ୍ପ` |
| `vra` | `ଵ୍ର` |

and others in the similar format.

### Inherent `a` and Virama

Odia consonants have an inherent `a` sound.

For example:

| Input | Odia |
|-------|------|
| `ka` | `କ` |
| `k` | `କ୍` |
| `kaa` | `କା` |
| `ki` | `କି` |
| `ku` | `କୁ` |
| `ke` | `କେ` |
| `ko` | `କୋ` |
| `k^u` | `କ୍` |

Normally, a consonant followed by a vowel uses the appropriate dependent
vowel sign. When a consonant has no vowel, the converter adds the Odia
virama (`୍`) to suppress the inherent `a`.
