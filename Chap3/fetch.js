const fetch = require('node-fetch');
(async function getData() {
    const response = await fetch('http://pokeapi.co/api/v2/pokemon/ditto');
    if (response.ok) {
        const result = await response.json();
        console.log(result);
    } else {
        console.log('Failed to get anything');
    }
})();