import { greet } from '../src/greetings'

test('Function "greet" exists', () => {
    expect(greet()).toBeDefined();
});
