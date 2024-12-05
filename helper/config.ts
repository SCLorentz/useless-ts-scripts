const green = (text: string) => `\x1b[32m${text}\x1b[0m`,
    red = (text: string) => `\x1b[31m${text}\x1b[0m`,
    yellow = (text: string) => `\x1b[33m${text}\x1b[0m`,
    blue = (text: string) => `\x1b[34m${text}\x1b[0m`,
    magenta = (text: string) => `\x1b[35m${text}\x1b[0m`,
    cyan = (text: string) => `\x1b[36m${text}\x1b[0m`,
    white = (text: string) => `\x1b[37m${text}\x1b[0m`,
    black = (text: string) => `\x1b[30m${text}\x1b[0m`,
    gray = (text: string) => `\x1b[90m${text}\x1b[0m`,
    bgRed = (text: string) => `\x1b[41m${text}\x1b[0m`,
    bgGreen = (text: string) => `\x1b[42m${text}\x1b[0m`,
    bgYellow = (text: string) => `\x1b[43m${text}\x1b[0m`,
    bgBlue = (text: string) => `\x1b[44m${text}\x1b[0m`,
    bgMagenta = (text: string) => `\x1b[45m${text}\x1b[0m`,
    bgCyan = (text: string) => `\x1b[46m${text}\x1b[0m`,
    bgWhite = (text: string) => `\x1b[47m${text}\x1b[0m`;

export function print(text: string, color: string)
{
    console.log(`\n${getColor(color)(text)}\n`);
}

function getColor(color: string)
{
    switch (color)
    {
        case "green":
            return green;
        case "red":
            return red;
        case "yellow":
            return yellow;
        case "blue":
            return blue;
        case "magenta":
            return magenta;
        case "cyan":
            return cyan;
        case "white":
            return white;
        case "black":
            return black;
        case "gray":
            return gray;
        case "bgRed":
            return bgRed;
        case "bgGreen":
            return bgGreen;
        case "bgYellow":
            return bgYellow;
        case "bgBlue":
            return bgBlue;
        case "bgMagenta":
            return bgMagenta;
        case "bgCyan":
            return bgCyan;
        case "bgWhite":
            return bgWhite;
        default:
            return white;
    }
}