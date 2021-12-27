// using Engineer constructor 
const Engineer = require('../lib/Engineer');

// creating engineer object  
test('creates an Engineer object', () => {
    const engineer = new Engineer('Travis', 2445, 'placeholderEmail@gmail.com', 'Travis2445');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// gets engineers github from getGithub()
test('gets engineer github value', () => {
    const engineer = new Engineer('Travis', 2445, 'placeholderEmail@gmail.com', 'Travis2445');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// gets engineers role from getRole() 
test('gets role of engineer', () => {
    const engineer = new Engineer('Travis', 2445, 'placeholderEmail@gmail.com', 'Travis2445');

    expect(engineer.getRole()).toEqual("Engineer");
});