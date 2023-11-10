import { greet } from '../src/greetings'

describe('Function "greet" exists', () => {
    test('Function "greet" exists', () => {
        expect(greet()).toBeDefined();
    })
});

describe('No input', () => {
    test('No input', () => {
        expect(greet()).toBe("Hello, my friend.");
    })
    test('Empty array as input', () => {
        expect(greet()).toBe("Hello, my friend.");
    })
})

describe('Single input', () => {
    test('Normal input', () => {
        expect(greet("Alice")).toBe("Hello Alice.");
    })
    test('Unnecessary space in the beginning', () => {
        expect(greet(" Alice")).toBe("Hello Alice.");
    })
    test('Unnecessary space at the end', () => {
        expect(greet("Alice ")).toBe("Hello Alice.");
    })
    test('Unnecessary spaces at both ends', () => {
        expect(greet(" Alice ")).toBe("Hello Alice.");
    })
})

describe('Multiple input', () => {
    test('Input with at least 3 names', () => {
        expect(greet("Alice, Bob, Jerry")).toBe("Hello Alice, Bob and Jerry.");
    })
    test('Input with 2 names', () => {
        expect(greet("Alice, Bob, Jerry")).toBe("Hello Alice, Bob and Jerry.");
    })
    test('Input with many names', () => {
        expect(greet("Alice, Bob, Jerry, Tom, Lily, Joe")).toBe("Hello Alice, Bob, Jerry, Tom, Lily and Joe.");
    })
    test('Unnecessary spaces', () => {
        expect(greet("Alice ,  Bob ,  Jerry")).toBe("Hello Alice, Bob and Jerry.");
    })

})