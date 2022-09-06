const Intern = require('../lib/Intern');

test('creates intern object', () => {
    const intern = new Intern('Emilio', 1, 'web@emili0.com', 'UT');

    expect(intern.name).toBe('Emilio');
    expect(intern.id).toBe(1);
    expect(intern.email).toBe('web@emili0.com');
    expect(intern.school).toBe('UT');
});

test('gets intern info', () => {
    const intern = new Intern('Emilio', 1, 'web@emili0.com', 'UT');

    expect(intern.getName()).toBe('Emilio');
    expect(intern.getId()).toBe(1);
    expect(intern.getEmail()).toBe('web@emili0.com');
    expect(intern.getSchool()).toBe('UT');
});
