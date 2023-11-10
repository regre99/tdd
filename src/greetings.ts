export const greet = (names: string = "") => {
    if (names.length === 0) return "Hello, my friend.";
    var namesList = names.split(", ");
    console.log(namesList);
    for (var i = 0; i < namesList.length; i++) {
        while (namesList[i][0] === " " || namesList[i][namesList[i].length - 1] === " ") {
            if (namesList[i][0] === " ") namesList[i] = namesList[i].slice(1, names.length);
            if (namesList[i][namesList[i].length - 1] === " ") namesList[i] = namesList[i].slice(0, namesList[i].length - 1);
        }
    }
    if (namesList.length > 1) {
        var greeting = "Hello ";
        for (var i = 0; i < namesList.length-2; i++) {
            greeting += namesList[i] + ", ";
        }
        greeting += namesList[namesList.length-2] + " and " + namesList[namesList.length-1] + ".";
        return greeting;
    }
    return "Hello " + namesList[0] + ".";
}

