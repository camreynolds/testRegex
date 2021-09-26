# Summary

    -   Character set: [abc123]asdf
            Match different characters in a single position.
            It is define in square brackets.
    -   Exclude set: [^pe2]
            Match all characters except the ones inside the
            brackets.
    -   Ranges (single): [a-z] OR [0-9]
            Avoid to write all the characters in the alphabet.
            ex. [abcdefghijklmnñopqrsutwxyz] -> [a-z]
    -   Ranges (multiple): [a-zA-Z] OR [0-9]
            Avoid to write all the characters in the alphabet.
            ex. [abcdefghijklmnñopqrsutwxyzABCDEFGHIJKLMNÑOPQRSUTWXYX] 
                -> [a-zA-Z]
    -   Repeat ranges: 
            [0-9]+ OR [a-z]+            (infinite times)
            [0-9]{x} OR [a-z]{x}        (restrictied times / 
                                        where "x" is the number 
                                        of times it will be repeated it)
    -       [0-9]{x,y} OR [a-z]{x,y}    (restrictied times / 
                                        where It has to be at least (minimun) 
                                        "x" times and maximun "y" times.)
    -       [0-9]{x,} OR [a-z]{x,}      It has to be at least "x" times minimun long.

## Methacharacters:

-   \d      match any digit character. Same as [0-9]
-   \w      match any word character. Same as (a-z, A-Z, 0-9, and _'s)
-   \s      match any whitespace character (spaces, tabs, etc)
-   \t      match a tab character only
### Important:
        d       matches the literal chracter 'd'
        \d      matches any digit character   

### Uses:

        ex1.    \d{3}\s\w{5} -> '123 hello' -> this is a match.

## Special characters:

-   '+'     the one or more quantifier.
-   '\'     the escape character.
-   '[]'    the character set.
-   '[^]'   the negate symbol in a character set.
-   '?'     the zero or one quantifier (makes a preceding char optional).   ex. hello? -> hello or hell ex2. he?llo? -> hll or hell 
-   '.'     any character whatsover (execpt the new line character).        ex. car. -> car(any character) HACK: '.+' match any character more than once.
-   '*'     the 0 or more quantifier (a bit like +).                        ex. a[a-z]* -> a(any character in the range).
-   '|'     match on or another character.                                  ex1. 'h|j' ex2. 'h|jello' ex.3 '(p|j)ello'

### Uses:

        ex1.    ^[a-z]{5}$ -> hello (at the beginning and at the end of the expression).