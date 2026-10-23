# Gurmukhi Typing Instructions

### Vowels and Pseudovowels
|7 bit ISO 15919|Gurmukhi Character equivalent|
|---------------|------------------------------|
| `a` | `ਅ` |
| `aa` | `ਆ` |
| `i` | `ਇ` |
| `ii` | `ਈ` |
| `u` | `ਉ` |
| `uu` | `ਊ` |
| `e` | `ਏ` |
| `ee` | `ਏ` |
| `ai` | `ਐ` |
| `o` | `ਓ` |
| `oo` | `ਓ` |
| `au` | `ਔ` |
| `;m` | `ਂ` |
| `.h` | `ਃ` |
| `^u` | `੍` |

Gurmukhi has no separate short `e` / `o` in this mapping, so `e` and `ee` give the same letter, and so do `o` and `oo`. Both spellings are kept so the input system can preserve the distinction. There are no vocalic `r` / `l` vowels in Gurmukhi, so `,r`, `,rr`, `,l` and `,ll` are not supported. `;m` is bindi (`ਂ`) and `~m` is adak bindi (`ਁ`). `*` is addak (`ੱ`), see the Addak section below.

### Additional Signs
|7 bit ISO 15919|Gurmukhi Character equivalent|
|---------------|------------------------------|
| `~m` | `ਁ` |
| `*` | `ੱ` |

`;m`, `.h`, `~m`, `*` are signs. When typed on their own they are output as-is, without a virama being added.

### Consonants
|7 bit ISO 15919|Gurmukhi Character equivalent|
|---------------|------------------------------|
| `k` | `ਕ` |
| `kh` | `ਖ` |
| `g` | `ਗ` |
| `gh` | `ਘ` |
| `;n` | `ਙ` |
| `c` | `ਚ` |
| `ch` | `ਛ` |
| `j` | `ਜ` |
| `jh` | `ਝ` |
| `~n` | `ਞ` |
| `.t` | `ਟ` |
| `.th` | `ਠ` |
| `.d` | `ਡ` |
| `.dh` | `ਢ` |
| `.n` | `ਣ` |
| `t` | `ਤ` |
| `th` | `ਥ` |
| `d` | `ਦ` |
| `dh` | `ਧ` |
| `n` | `ਨ` |
| `p` | `ਪ` |
| `ph` | `ਫ` |
| `b` | `ਬ` |
| `bh` | `ਭ` |
| `m` | `ਮ` |
| `y` | `ਯ` |
| `r` | `ਰ` |
| `l` | `ਲ` |
| `v` | `ਵ` |
| `s` | `ਸ` |
| `sh` | `ਸ਼` |
| `h` | `ਹ` |
| `.l` | `ਲ਼` |

`s` gives `ਸ` and `sh` gives `ਸ਼` (a single letter, written with a nukta).

### Extended Letters and Nukta Forms
|7 bit ISO 15919|Gurmukhi Character equivalent|
|---------------|------------------------------|
| `.r` | `ਡ਼` |
| `q` | `ਕ਼` |
| `.g` | `ਗ਼` |
| `^z` | `ਜ਼` |
| `f` | `ਫ਼` |

Letters with a nukta (`਼`) are written as the base letter followed by the nukta.

### Unsupported Keys

These keys have no mapping and produce nothing:

`,r`, `,rr`, `,l`, `,ll`, `_n`, `.s`, `_l`, `_r`, `.rh`, `;y`, `_kh`, `^c`, `^ch`, `w`, `^r`, `'`, `_h`, `^h`, `*.n`, `*n`, `*r`, `*l`, `*.l`, `*k`, `^n`

Gurmukhi has no chillu letters. Use the plain consonant with a virama instead (for example `n^u` gives `ਨ੍`).

### Common Conjuncting Letters

Gurmukhi forms consonant clusters using the virama (`੍`). A consonant
normally has an inherent `a` sound when no vowel sign is supplied. To
suppress that inherent vowel and form a consonant cluster, the virama
(`^u`) is used internally.

The following are examples. In normal use, consonants in a cluster do not
need to have `^u` manually added when the parser can determine the
conjunct from the following consonant.

|7 bit ISO 15919|Gurmukhi Character equivalent|
|---------------|------------------------------|
| `kka` | `ਕ੍ਕ` |
| `gga` | `ਗ੍ਗ` |
| `cca` | `ਚ੍ਚ` |
| `~nca` | `ਞ੍ਚ` |
| `.t.ta` | `ਟ੍ਟ` |
| `.n.ta` | `ਣ੍ਟ` |
| `tta` | `ਤ੍ਤ` |
| `nta` | `ਨ੍ਤ` |
| `nna` | `ਨ੍ਨ` |
| `ppa` | `ਪ੍ਪ` |
| `mma` | `ਮ੍ਮ` |
| `lla` | `ਲ੍ਲ` |
| `.l.la` | `ਲ਼੍ਲ਼` |
| `;n;na` | `ਙ੍ਙ` |
| `~nja` | `ਞ੍ਜ` |
| `.n.da` | `ਣ੍ਡ` |
| `nda` | `ਨ੍ਦ` |
| `mba` | `ਮ੍ਬ` |
| `rka` | `ਰ੍ਕ` |
| `rpa` | `ਰ੍ਪ` |
| `lka` | `ਲ੍ਕ` |
| `lpa` | `ਲ੍ਪ` |
| `vra` | `ਵ੍ਰ` |

and others in the similar format.

The examples above show the virama form. For a doubled consonant, Gurmukhi normally uses an addak instead; see below.

### Addak

Gurmukhi normally writes a doubled consonant with an addak (`ੱ`) placed before the consonant being doubled. The addak is typed with `*`. Type it before the consonant you want to double. It is simply added to the output, so no virama is inserted and the doubled consonant keeps its own vowel.

|7 bit ISO 15919|Gurmukhi Character equivalent|
|---------------|------------------------------|
| `ka*ka` | `ਕੱਕ` |
| `pa*kaa` | `ਪੱਕਾ` |
| `ba*caa` | `ਬੱਚਾ` |
| `ma*chii` | `ਮੱਛੀ` |

### Inherent `a` and Virama

Gurmukhi consonants have an inherent `a` sound.

For example:

| Input | Gurmukhi |
|-------|----------|
| `ka` | `ਕ` |
| `k` | `ਕ੍` |
| `kaa` | `ਕਾ` |
| `ki` | `ਕਿ` |
| `ku` | `ਕੁ` |
| `ke` | `ਕੇ` |
| `ko` | `ਕੋ` |
| `k^u` | `ਕ੍` |

Normally, a consonant followed by a vowel uses the appropriate dependent
vowel sign. When a consonant has no vowel, the converter adds the Gurmukhi
virama (`੍`) to suppress the inherent `a`.
