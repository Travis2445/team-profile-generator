// using Intern constructor 
const Intern = require('../lib/Intern');

// creating intern object  
test('creates an Intern object', () => {
    const intern = new Intern('Travis', 2445, 'placeholderEmail@gmail.com', 'SMU');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// gets intern school from getSchool()
test('gets intern school', () => {
    const intern = new Intern('Travis', 2445, 'placeholderEmail@gmail.com', 'SMU');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets intern role from getRole()
test('gets role of intern', () => {
    const intern = new Intern('Travis', 2445, 'placeholderEmail@gmail.com', 'SMU');

    expect(intern.getRole()).toEqual("Intern");
}); 