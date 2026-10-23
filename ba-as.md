# Bangla-Asamiya Typing Instructions

### Vowels and Pseudovowels
|7 bit ISO 15919|Bangla-Asamiya Character equivalent|
|---------------|------------------------------------|
| `a` | `অ` |
| `aa` | `আ` |
| `i` | `ই` |
| `ii` | `ঈ` |
| `u` | `উ` |
| `uu` | `ঊ` |
| `,r` | `ঋ` |
| `,rr` | `ৠ` |
| `,l` | `ঌ` |
| `,ll` | `ৡ` |
| `e` | `এ` |
| `ee` | `এ` |
| `ai` | `ঐ` |
| `o` | `ও` |
| `oo` | `ও` |
| `au` | `ঔ` |
| `;m` | `ং` |
| `.h` | `ঃ` |
| `^u` | `্` |

Bangla-Asamiya has no separate short `e` / `o` in this mapping, so `e` and `ee` give the same letter, and so do `o` and `oo`. Both spellings are kept so the input system can preserve the distinction.

### Additional Signs
|7 bit ISO 15919|Bangla-Asamiya Character equivalent|
|---------------|------------------------------------|
| `~m` | `ঁ` |
| `'` | `ঽ` |

`;m`, `.h`, `~m` are signs. When typed on their own they are output as-is, without a virama being added.

### Consonants
|7 bit ISO 15919|Bangla-Asamiya Character equivalent|
|---------------|------------------------------------|
| `k` | `ক` |
| `kh` | `খ` |
| `g` | `গ` |
| `gh` | `ঘ` |
| `;n` | `ঙ` |
| `c` | `চ` |
| `ch` | `ছ` |
| `j` | `জ` |
| `jh` | `ঝ` |
| `~n` | `ঞ` |
| `.t` | `ট` |
| `.th` | `ঠ` |
| `.d` | `ড` |
| `.dh` | `ঢ` |
| `.n` | `ণ` |
| `t` | `ত` |
| `th` | `থ` |
| `d` | `দ` |
| `dh` | `ধ` |
| `n` | `ন` |
| `_n` | `ন` |
| `p` | `প` |
| `ph` | `ফ` |
| `b` | `ব` |
| `bh` | `ভ` |
| `m` | `ম` |
| `y` | `য` |
| `r (Bangla)` | `র` |
| `r (Asamiya)` | `ৰ` |
| `l` | `ল` |
| `s` | `স` |
| `.s` | `ষ` |
| `sh` | `শ` |
| `h` | `হ` |
| `_r` | `র়` |

Bangla and Asamiya are offered as two separate language options, but both use the same mapping. The letter for `r` is different in the two languages, and neither was prioritised over the other, so the `r` that is typed depends on which language is chosen: Bangla types `র` and Asamiya types `ৰ`. Every other key is identical in both.

`_r` is `র` followed by a nukta (`র়`) in both languages. `_n` produces the same letter as `n`. `s` and `sh` give different letters (`স` and `শ`).

### Extended Letters and Nukta Forms
|7 bit ISO 15919|Bangla-Asamiya Character equivalent|
|---------------|------------------------------------|
| `.r` | `ড়` |
| `.rh` | `ঢ়` |
| `;y` | `য়` |
| `q` | `ক়` |
| `_kh` | `খ়` |
| `.g` | `গ়` |
| `^z` | `ঝ়` |
| `f` | `ফ়` |
| `w` | `ৱ` |

`.r` and `.rh` are the flapped forms of `ড` and `ঢ`. `;y` is `য়` (a single letter), different from `y` (`য`). `w` gives the Assamese letter `ৱ`; Bangla `ব` is typed with `b`. Letters with a nukta (`়`) are written as the base letter followed by the nukta.

### Khanda / Chillu Letters
|7 bit ISO 15919|Bangla-Asamiya Character equivalent|
|---------------|------------------------------------|
| `*t` | `ৎ` |

Bangla has only one chillu-type letter, khanda ta (`ৎ`).

### Unsupported Keys

These keys have no mapping and produce nothing:

`v`, `.l`, `_l`, `^c`, `^ch`, `^r`, `_h`, `^h`, `*.n`, `*n`, `*r`, `*l`, `*.l`, `*k`, `^n`

Bangla-Asamiya has no chillu letters other than khanda ta. Use the plain consonant with a virama instead (for example `n^u` gives `ন্`).

### Common Conjuncting Letters

Bangla-Asamiya forms consonant clusters using the virama (`্`). A consonant
normally has an inherent `a` sound when no vowel sign is supplied. To
suppress that inherent vowel and form a consonant cluster, the virama
(`^u`) is used internally.

The following are examples. In normal use, consonants in a cluster do not
need to have `^u` manually added when the parser can determine the
conjunct from the following consonant.

|7 bit ISO 15919|Bangla-Asamiya Character equivalent|
|---------------|------------------------------------|
| `kka` | `ক্ক` |
| `gga` | `গ্গ` |
| `cca` | `চ্চ` |
| `~nca` | `ঞ্চ` |
| `.t.ta` | `ট্ট` |
| `.n.ta` | `ণ্ট` |
| `tta` | `ত্ত` |
| `nta` | `ন্ত` |
| `nna` | `ন্ন` |
| `ppa` | `প্প` |
| `mma` | `ম্ম` |
| `lla` | `ল্ল` |
| `;n;na` | `ঙ্ঙ` |
| `~nja` | `ঞ্জ` |
| `.n.da` | `ণ্ড` |
| `nda` | `ন্দ` |
| `mba` | `ম্ব` |
| `rka` | `র্ক` |
| `rpa` | `র্প` |
| `lka` | `ল্ক` |
| `lpa` | `ল্প` |
| `bra` | `ব্র` |

and others in the similar format.

Conjuncts that contain `r` use the Bangla `র` in the examples above. When typing in Asamiya, `ৰ` is used in its place.

### Inherent `a` and Virama

Bangla-Asamiya consonants have an inherent `a` sound.

For example:

| Input | Bangla-Asamiya |
|-------|----------------|
| `ka` | `ক` |
| `k` | `ক্` |
| `kaa` | `কা` |
| `ki` | `কি` |
| `ku` | `কু` |
| `ke` | `কে` |
| `ko` | `কো` |
| `k^u` | `ক্` |

Normally, a consonant followed by a vowel uses the appropriate dependent
vowel sign. When a consonant has no vowel, the converter adds the Bangla-Asamiya
virama (`্`) to suppress the inherent `a`.
