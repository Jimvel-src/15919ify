# Devanagari Typing Instructions

### Vowels and Pseudovowels
|7 bit ISO 15919|Devanagari Character equivalent|
|---------------|--------------------------------|
| `a` | `अ` |
| `aa` | `आ` |
| `i` | `इ` |
| `ii` | `ई` |
| `u` | `उ` |
| `uu` | `ऊ` |
| `,r` | `ऋ` |
| `,rr` | `ॠ` |
| `,l` | `ऌ` |
| `,ll` | `ॡ` |
| `e` | `ए` |
| `ee` | `ए` |
| `ai` | `ऐ` |
| `o` | `ओ` |
| `oo` | `ओ` |
| `au` | `औ` |
| `;m` | `ं` |
| `.h` | `ः` |
| `^u` | `्` |

Devanagari has no separate short `e` / `o` in this mapping, so `e` and
`ee` give the same letter, and so do `o` and `oo`. Both spellings are
kept so the input system can preserve the distinction.

### Additional Signs

|7 bit ISO 15919|Devanagari Character equivalent|
|---------------|--------------------------------|
| `^n` | `ँ` |
| `~m` | `ऀ` |
| `'` | `ऽ` |

`;m`, `.h`, `^n` and `~m` are signs. When typed on their own they are
output as-is, without a virama being added.

### Consonants

|7 bit ISO 15919|Devanagari Character equivalent|
|---------------|--------------------------------|
| `k` | `क` |
| `kh` | `ख` |
| `g` | `ग` |
| `gh` | `घ` |
| `;n` | `ङ` |
| `c` | `च` |
| `ch` | `छ` |
| `j` | `ज` |
| `jh` | `झ` |
| `~n` | `ञ` |
| `.t` | `ट` |
| `.th` | `ठ` |
| `.d` | `ड` |
| `.dh` | `ढ` |
| `.n` | `ण` |
| `t` | `त` |
| `th` | `थ` |
| `d` | `द` |
| `dh` | `ध` |
| `n` | `न` |
| `_n` | `ऩ` |
| `p` | `प` |
| `ph` | `फ` |
| `b` | `ब` |
| `bh` | `भ` |
| `m` | `म` |
| `y` | `य` |
| `r` | `र` |
| `l` | `ल` |
| `v` | `व` |
| `s` | `श` |
| `.s` | `ष` |
| `sh` | `स` |
| `h` | `ह` |
| `.l` | `ळ` |
| `_l` | `ऴ` |
| `_r` | `ऱ` |

`_n` (`ऩ`) and `_r` (`ऱ`) are rare letters.

### Extended / Foreign Sounds

These use a nukta (`़`) or a special sign to represent sounds that do not
have a native Devanagari letter.

|7 bit ISO 15919|Devanagari Character equivalent|
|---------------|--------------------------------|
| `q` | `क़` |
| `_kh` | `ख़` |
| `.g` | `ग़` |
| `^c` | `च़` |
| `^ch` | `छ़` |
| `^z` | `झ़` |
| `.r` | `ड़` |
| `.rh` | `ढ़` |
| `f` | `फ़` |
| `;y` | `य़` |
| `w` | `व़` |
| `^r` | `र्‍` |
| `_h` | `ᳵ` |
| `^h` | `ᳶ` |

`^r` is `र` + virama + zero width joiner, which gives the "eyelash" form
of ra. `_h` and `^h` are the jihvamuliya and upadhmaniya signs.

### Unsupported Keys

|7 bit ISO 15919|Devanagari Character equivalent|
|---------------|--------------------------------|
| `*.n` | *(none, produces nothing)* |
| `*n` | *(none, produces nothing)* |
| `*r` | *(none, produces nothing)* |
| `*l` | *(none, produces nothing)* |
| `*.l` | *(none, produces nothing)* |
| `*k` | *(none, produces nothing)* |

These are the Malayalam chillu keys. Devanagari has no chillu letters.
Use the plain consonant with a virama instead (for example `n^u` gives
`न्`).

### Common Conjuncting Letters

Devanagari forms consonant clusters using the virama (`्`). A consonant
normally has an inherent `a` sound when no vowel sign is supplied. To
suppress that inherent vowel and form a consonant cluster, the virama
(`^u`) is used internally.

The following are examples. In normal use, consonants in a cluster do not
need to have `^u` manually added when the parser can determine the
conjunct from the following consonant.

|7 bit ISO 15919|Devanagari Character equivalent|
|---------------|--------------------------------|
| `kka` | `क्क` |
| `gga` | `ग्ग` |
| `cca` | `च्च` |
| `~nca` | `ञ्च` |
| `.t.ta` | `ट्ट` |
| `.n.ta` | `ण्ट` |
| `tta` | `त्त` |
| `nta` | `न्त` |
| `nna` | `न्न` |
| `ppa` | `प्प` |
| `mma` | `म्म` |
| `lla` | `ल्ल` |
| `.l.la` | `ळ्ळ` |
| `;n;na` | `ङ्ङ` |
| `~nja` | `ञ्ज` |
| `.n.da` | `ण्ड` |
| `nda` | `न्द` |
| `mba` | `म्ब` |
| `rka` | `र्क` |
| `rpa` | `र्प` |
| `lka` | `ल्क` |
| `lpa` | `ल्प` |
| `vra` | `व्र` |

and others in the similar format.

### Inherent `a` and Virama

Devanagari consonants have an inherent `a` sound.

For example:

| Input | Devanagari |
|-------|------------|
| `ka` | `क` |
| `k` | `क्` |
| `kaa` | `का` |
| `ki` | `कि` |
| `ku` | `कु` |
| `ke` | `के` |
| `ko` | `को` |
| `k^u` | `क्` |

Normally, a consonant followed by a vowel uses the appropriate dependent
vowel sign. When a consonant has no vowel, the converter adds the
Devanagari virama (`्`) to suppress the inherent `a`.
