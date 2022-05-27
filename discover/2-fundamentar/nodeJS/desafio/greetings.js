const getFlags = require('./flags')

console.log(`Oi ${getFlags('--name')}. ${getFlags('--greeting')}`)

// node greetings --name "Pedro" -greeting "Tudo bem com você?"