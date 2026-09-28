# 15919ify+
An open-source web utility designed to take in text in 7 Bit ISO 15919 format and transcode it into various Indic Scripts. While built with a modular architecture capable of scaling to multiple languages, it currently only has support for Malayalam, Tamil and Kannada (not fully ironed out). Current Malayalam setup is made taking huge liberties like introducing various character combinations not in the current standard (ie, chillu letters).
Try the tool out [here](https://sox.nekoweb.org/15919.html)

## File structure
* `15919.js` - The core parsing engine and transliteration framework. Currently only supports mapping to Malayalam, Tamil and Kannada but can be modified to accomodate other languages
* `15919.html` - An example reference implemtation showing how it could be used in a bare-bones way, with live debounced input listeners and manual override triggers.
* `15919.css` - CSS for my page I made open source, cuz good practice

## Features
* Scans input strings character-by-character, intelligently grouping multi-character consonant and vowel clusters (up to 3-character keys)
* Dictionary based mapping system covering all letters and symbols in  `Malayalam`, `Tamil` & `Kannada`
## Langauges supported
- [X] Malayalam
- [X] Tamil
- [X] Kannada

## Syntax and Typing
For a basic idea on how this system works, refer to the following tables for typing instructions based on the modified [7Bit ISO 15919](https://en.wikipedia.org/wiki/ISO_15919)
* Refer to [Malayalam section](malayalam.md) for instructions on typing Malayalam
* Refer to [Tamil section](tamil.md) for instructions on typing Tamil
* Refer to [Kannada section](kannada.md) for instructions on typing Kannada

