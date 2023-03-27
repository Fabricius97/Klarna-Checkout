import fetch from "node-fetch";

export function getKlarnaAuth() {
    const username = process.env.PUBLIC.KEY
    const password = process.env.SECRET.KEY
    const auth = `Basic ${Buffer.from(username + ':' + password).toString('base64')}`;
    return auth;
}

//skapar en order hos klarna
export async function createOrder(product) {
}


//hämtar en order från klarna
export async function createOrder(product) {}