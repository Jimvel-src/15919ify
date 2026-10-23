# Gujarati Typing Instructions

### Vowels and Pseudovowels
|7 bit ISO 15919|Gujarati Character equivalent|
|---------------|------------------------------|
| `a` | `અ` |
| `aa` | `આ` |
| `i` | `ઇ` |
| `ii` | `ઈ` |
| `u` | `ઉ` |
| `uu` | `ઊ` |
| `,r` | `ઋ` |
| `,rr` | `ૠ` |
| `,l` | `ઌ` |
| `,ll` | `ૡ` |
| `e` | `એ` |
| `ee` | `એ` |
| `ai` | `ઐ` |
| `o` | `ઓ` |
| `oo` | `ઓ` |
| `au` | `ઔ` |
| `;m` | `ં` |
| `.h` | `ઃ` |
| `^u` | `્` |

Gujarati has no separate short `e` / `o` in this mapping, so `e` and `ee` give the same letter, and so do `o` and `oo`. Both spellings are kept so the input system can preserve the distinction.

### Additional Signs
|7 bit ISO 15919|Gujarati Character equivalent|
|---------------|------------------------------|
| `^n` | `ઁ` |
| `'` | `ઽ` |

`;m`, `.h`, `^n` are signs. When typed on their own they are output as-is, without a virama being added.

### Consonants
|7 bit ISO 15919|Gujarati Character equivalent|
|---------------|------------------------------|
| `k` | `ક` |
| `kh` | `ખ` |
| `g` | `ગ` |
| `gh` | `ઘ` |
| `;n` | `ઙ` |
| `c` | `ચ` |
| `ch` | `છ` |
| `j` | `જ` |
| `jh` | `ઝ` |
| `~n` | `ઞ` |
| `.t` | `ટ` |
| `.th` | `ઠ` |
| `.d` | `ડ` |
| `.dh` | `ઢ` |
| `.n` | `ણ` |
| `t` | `ત` |
| `th` | `થ` |
| `d` | `દ` |
| `dh` | `ધ` |
| `n` | `ન` |
| `p` | `પ` |
| `ph` | `ફ` |
| `b` | `બ` |
| `bh` | `ભ` |
| `m` | `મ` |
| `y` | `ય` |
| `r` | `ર` |
| `l` | `લ` |
| `v` | `વ` |
| `s` | `સ` |
| `.s` | `ષ` |
| `sh` | `શ` |
| `h` | `હ` |
| `.l` | `ળ` |

### Extended Letters and Nukta Forms
|7 bit ISO 15919|Gujarati Character equivalent|
|---------------|------------------------------|
| `.r` | `ડ઼` |
| `.rh` | `ઢ઼` |
| `;y` | `ય઼` |
| `q` | `ક઼` |
| `_kh` | `ખ઼` |
| `.g` | `ગ઼` |
| `^c` | `ચ઼` |
| `^ch` | `છ઼` |
| `^z` | `ઝ઼` |
| `f` | `ફ઼` |
| `w` | `વ઼` |

Letters with a nukta (`઼`) are written as the base letter followed by the Gujarati nukta (U+0ABC).

### Unsupported Keys

These keys have no mapping and produce nothing:

`_n`, `_l`, `_r`, `^r`, `_h`, `^h`, `*.n`, `*n`, `*r`, `*l`, `*.l`, `*k`, `~m`

Gujarati has no chillu letters. Use the plain consonant with a virama instead (for example `n^u` gives `ન્`).

### Common Conjuncting Letters

Gujarati forms consonant clusters using the virama (`્`). A consonant
normally has an inherent `a` sound when no vowel sign is supplied. To
suppress that inherent vowel and form a consonant cluster, the virama
(`^u`) is used internally.

The following are examples. In normal use, consonants in a cluster do not
need to have `^u` manually added when the parser can determine the
conjunct from the following consonant.

|7 bit ISO 15919|Gujarati Character equivalent|
|---------------|------------------------------|
| `kka` | `ક્ક` |
| `gga` | `ગ્ગ` |
| `cca` | `ચ્ચ` |
| `~nca` | `ઞ્ચ` |
| `.t.ta` | `ટ્ટ` |
| `.n.ta` | `ણ્ટ` |
| `tta` | `ત્ત` |
| `nta` | `ન્ત` |
| `nna` | `ન્ન` |
| `ppa` | `પ્પ` |
| `mma` | `મ્મ` |
| `lla` | `લ્લ` |
| `.l.la` | `ળ્ળ` |
| `;n;na` | `ઙ્ઙ` |
| `~nja` | `ઞ્જ` |
| `.n.da` | `ણ્ડ` |
| `nda` | `ન્દ` |
| `mba` | `મ્બ` |
| `rka` | `ર્ક` |
| `rpa` | `ર્પ` |
| `lka` | `લ્ક` |
| `lpa` | `લ્પ` |
| `vra` | `વ્ર` |

and others in the similar format.

### Inherent `a` and Virama

Gujarati consonants have an inherent `a` sound.

For example:

| Input | Gujarati |
|-------|----------|
| `ka` | `ક` |
| `k` | `ક્` |
| `kaa` | `કા` |
| `ki` | `કિ` |
| `ku` | `કુ` |
| `ke` | `કે` |
| `ko` | `કો` |
| `k^u` | `ક્` |

Normally, a consonant followed by a vowel uses the appropriate dependent
vowel sign. When a consonant has no vowel, the converter adds the Gujarati
virama (`્`) to suppress the inherent `a`.
