import React from "react";

let userName = prompt (`Insira teu nome:\n`);

function Welcome(){
    return <h1>Seja bem-vind(x) {userName}!</h1>;
}

export default Welcome;