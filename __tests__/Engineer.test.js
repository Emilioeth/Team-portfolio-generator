const Engineer = require('../lib/Engineer');

test('creates engineer object', () => {
    const engineer = new Engineer('Emilio', 1, 'web@emili0.com', 'Emilioeth');

    expect(engineer.name).toBe('Emilio');
    expect(engineer.id).toBe(1);
    expect(engineer.email).toBe('web@emili0.com');
    expect(engineer.github).toBe('Emilioeth');
});

test('gets engineer info', () => {
    const engineer = new Engineer('Emilio', 1, 'web@emili0.com', 'Emilioeth');

    expect(engineer.getName()).toBe('Emilio');
    expect(engineer.getId()).toBe(1);
    expect(engineer.getEmail()).toBe('web@emili0.com');
    expect(engineer.getGithub()).toBe('Emilioeth');
});
