const Employee = require('../lib/Employee');

test('create employee object', () => {
    const employee = new Employee('Travis', 2445, 'tempEmail@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining('@'));
});