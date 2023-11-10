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
        expect(greet([])).toBe("Hello, my friend.");
    })
})

describe('Single input', () => {
    test('Normal input', () => {
        expect(greet("Alice")).toBe("Hello Alice.");
    })
})