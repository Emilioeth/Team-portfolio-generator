const Employee = require('../lib/Employee');

test('creates employee object', () => {
    const employee = new Employee('Emilio', 1, 'web@emili0.com');

    expect(employee.name).toBe('Emilio');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('web@emili0.com');
});

test('gets employee info', () => {
    const employee = new Employee('Emilio', 1, 'web@emili0.com');

    expect(employee.getName()).toBe('Emilio');
    expect(employee.getId()).toBe(1);
    expect(employee.getEmail()).toBe('web@emili0.com');
});
