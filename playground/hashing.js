const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log(hash);
//     });
// });

var hashedPassword = '$2a$10$9i.6R.wXHqR.BY1KrfEOIu8SVeowI124sNYanb8NMP7Sbwy1S.KUO';
bcrypt.compare(password, hashedPassword, (err,res) => {
    console.log(res);
});