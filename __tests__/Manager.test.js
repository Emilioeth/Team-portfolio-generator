const Manager = require('../lib/Manager');

test('creates manager object', () => {
    const manager = new Manager('Emilio', 1, 'web@emili0.com', 2);

    expect(manager.name).toBe('Emilio');
    expect(manager.id).toBe(1);
    expect(manager.email).toBe('web@emili0.com');
    expect(manager.officeNumber).toBe(2);
});

test('gets manager info', () => {
    const manager = new Manager('Emilio', 1, 'web@emili0.com', 2);

    expect(manager.getName()).toBe('Emilio');
    expect(manager.getId()).toBe(1);
    expect(manager.getEmail()).toBe('web@emili0.com');
});
