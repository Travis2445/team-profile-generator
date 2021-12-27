// using Manager constructor 
const Manager = require('../lib/Manager');

// creating manager object  
test('creates a manager object', () => {
    const manager = new Manager('Travis', 2445, 'placeholderEmail@gmail.com', 132);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets manager role from getRole()
test('gets role of manager', () => {
    const manager = new Manager('Travis', 2445, 'placeholderEmail@gmail.com', 132);

    expect(manager.getRole()).toEqual("Manager");
}); 