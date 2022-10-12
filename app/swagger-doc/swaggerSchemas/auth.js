const { string } = require("joi");

    //~ ------------------------------ SIGNUP

    const signupProperties = {
        id: { type: 'integer' },
        lastname: { type: 'string' },
        firstname: { type: 'string' },
        password: { type: 'string' },
        email: { type: 'string' },
        gender: { type: 'string'},
        role_id: { type: 'integer'},
        created_at: { type: 'string' },
        updated_at: { type: 'string' }
    };

    const signupExample = {
        id: 50,
        last_name: 'Guy',
        first_name: 'Marc',
        password: 'Password123$',
        email: 'marc.g@gmail.com',
        gender: 'male',
        role_id: 1,
        created_at: 'string',
        updated_at: 'string'
    };


    //~ ------------------------------ LOGIN

    const loginProperties = {
        email: {type: 'string'},
        password: {type: 'string'}
    };

    const loginExample = {
        email: 'marc.g@gmail.com',
        password: 'marc.g@gmail.com'
    };

module.exports = { signupProperties, signupExample, loginProperties, loginExample };