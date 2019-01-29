var OFF = 0, WARN = 1, ERROR = 2;

module.exports = exports = {
    "env": {
        "es6": true,
        "browser": true,
        "node": true,
        "jasmine": true
    },
    "parserOptions": {
        "sourceType": "module"    
    },  
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "plugins": [
        "react"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],

    "rules": {
        "no-console": OFF //temporarily allow consoles     
    }
};