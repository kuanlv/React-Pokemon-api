const axios = require("axios");

async function test() {
    const { data } = await axios.get("https://pokeapi.co/api/v2/machine/3");
    console.log(data);
}


test();