export const greet = (names: string = "") => {
    if (names.length ===  0) return "Hello, my friend.";
    return "Hello " + names + ".";
}
