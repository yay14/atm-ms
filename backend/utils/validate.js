import validator from 'express-validator'
const { check } = validator

const validSign = 
    [
    check('name', 'Name is required').notEmpty()
    .isLength({
        min: 4,
        max: 32
    }).withMessage('name must be between 4 to 32 characters')
    .isNumeric()
    .withMessage('Name must contain alphabets only'),

    check('email')
    .isEmail()
    .withMessage('Invalid email address'),

    check('phone').isNumeric()
    .withMessage('Phone number must contain digits from 0-9 only'),
    check('phone').isMobilePhone()
    .withMessage('Invalid phone number'),
    check('phone').isLength({
        min: 10,
        max: 10
    }).withMessage('Phone number should be of 10 digits'),

    check('account').isNumeric()
    .withMessage('Account number must contain digits from 0-9 only'),
    check('account').isLength({
        min: 12,
        max: 12
    }).withMessage('Account number should be of 12 digits'),

    check('password', 'PIN is required').notEmpty(),
    check('password').isNumeric()
    .withMessage('PIN must contain digits from 0-9 only'),
    check('password').isLength({
        min: 4,
        max: 4
    }).withMessage('PIN must be of 4 digts only')
    ];

 const validLogin = [
    check('email')
    .isEmail()
    .withMessage('Must be a valid email address'),
    check('password', 'PIN is required').notEmpty(),
    check('password').isNumeric()
    .withMessage('PIN must contain digits from 0-9 only'),
    check('password').isLength({
        min: 4,
        max: 4
    }).withMessage('PIN must be of 4 digits only')
];

const validUpdate = [

    check('password', 'PIN is required').notEmpty(),
    check('password').isNumeric()
    .withMessage('PIN must contain digits from 0-9 only'),
    check('password').isLength({
        min: 4,
        max: 4
    }).withMessage('PIN must be of 4 digits only'),
   
    
];

const validTransaction = [

    check('password', 'PIN is required').notEmpty(),
    check('password').isNumeric()
    .withMessage('PIN must contain digits from 0-9 only'),
    check('password').isLength({
        min: 4,
        max: 4
    }).withMessage('PIN must be of 4 digits only'),
    // check('amount')
    // .isLength({
    //     min: 100,
    //     max: 10000
    // }).withMessage('Re-enter amount between Rs 100 && Rs 10,000')
    
];


export {validLogin,validSign,validUpdate,validTransaction}