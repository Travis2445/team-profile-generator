const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

test('create manager object', () => {
    const manager = new Manager('Travis', 2445, 'tempEmail@gmail.com', 132);

    expect(manager.name).toBe('Travis');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('tempEmail@gmail.com');
    expect(manager.officeNumber).toEqual(expect.any(Number));
});