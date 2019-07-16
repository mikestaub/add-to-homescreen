'use strict';

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./build/add-to-homescreen.min.js');
} else {
    module.exports = require('./build/add-to-homescreen.js');
}
