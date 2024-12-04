const letters = {
    0: {
        "letter": "a",
        "type": "vowel"
    },
    1: {
        "letter": "b",
        "type": "consonant"
    },
    2: {
        "letter": "c",
        "type": "consonant"
    },
    3: {
        "letter": "d",
        "type": "consonant"
    },
    4: {
        "letter": "e",
        "type": "vowel"
    },
    5: {
        "letter": "f",
        "type": "consonant"
    },
    6: {
        "letter": "g",
        "type": "consonant"
    },
    7: {
        "letter": "h",
        "type": "consonant"
    },
    8: {
        "letter": "i",
        "type": "vowel"
    },
    9: {
        "letter": "j",
        "type": "consonant"
    },
    10: {
        "letter": "k",
        "type": "consonant"
    },
    11: {
        "letter": "l",
        "type": "consonant"
    },
    12: {
        "letter": "m",
        "type": "consonant"
    },
    13: {
        "letter": "n",
        "type": "consonant"
    },
    14: {
        "letter": "o",
        "type": "vowel"
    },
    15: {
        "letter": "p",
        "type": "consonant"
    },
    16: {
        "letter": "q",
        "type": "consonant"
    },
    17: {
        "letter": "r",
        "type": "consonant"
    },
    18: {
        "letter": "s",
        "type": "consonant"
    },
    19: {
        "letter": "t",
        "type": "consonant"
    },
    20: {
        "letter": "u",
        "type": "vowel"
    },
    21: {
        "letter": "v",
        "type": "consonant"
    },
    22: {
        "letter": "w",
        "type": "consonant"
    },
    23: {
        "letter": "x",
        "type": "consonant"
    },
    24: {
        "letter": "y",
        "type": "vowel"
    },
    25: {
        "letter": "z",
        "type": "consonant"
    }
}

type Letter = {
    letter: string;
    type: string;
}

/*function create(num = 100, last?: Letter): string
{
    if (num == 0) return "";
    let letter: Letter | string = letters[Math.floor(Math.random() * 26)];
    //
    letter =
        last && typeof letter != "string" && letter.type == "consonant" && last.type == "consonant" && create(num, letter) ||
        last && typeof letter != "string" && letter.letter == last.letter && Math.floor(Math.random() * 2) == 2 ? create(num, letter) : typeof letter != "string" && letter.letter + create(num - 1, letter) ||
        typeof letter != "string" && letter.letter + create(num - 1, letter);
    //
    return letter;
}*/

function create(num = 100, last?: { type: string; letter: string }): string
{
    if (num == 0) return "";
    const letter = letters[Math.floor(Math.random() * 26)];
    //
    if (last && letter.type == "consonant" && last.type == "consonant")
    {
        return create(num, letter)
    }
    //
    if (last && letter.letter == last.letter)
    {
        return Math.floor(Math.random() * 2) == 2 ? create(num, letter) : letter.letter + create(num - 1, letter)
    }
    //
    return letter.letter + create(num - 1, letter);
}

console.log(create(6))