export const greet = (names: string = "") => {
    if (names.length ===  0) return "Hello, my friend.";
    while (names[0] === " " || names[names.length-1] === " ") {
        if (names[0] === " ") names = names.slice(1, names.length);
        if (names[names.length-1] === " ") names = names.slice(0, names.length-1);
    }
    return "Hello " + names + ".";
}
