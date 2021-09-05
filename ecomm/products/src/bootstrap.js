import faker from 'faker';

let products = ' ';

// for (let i = 0; i < 6; i++) {
//     const name = faker.commerce.productName();
//     products += `<div>${name}</div>`
// }

// document.querySelector('#dev-products').innerHTML = products;

const mount = (el) => {
    let products = ' ';

    for (let i = 0; i < 6; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`
    }

    el.innerHTML = products;
}

/**
 *  Context/situtiion 1: When we run this file in dev/isolation: 
 *   - we are using our local index.html file
 *   - which DEFINITELY has an element with the id of dev-products
 *   - therefore we want to immediately render our app into that element
 */

if (process.env.NODE_ENV === 'development') {
    console.log('running in dev mode');
    const el = document.querySelector('#dev-products-isolation');
    if (el) { // assuming that we have an element with the id of dev-products-isolation in the container
        // we are probably running in isolation
        mount(el);
    }
}

/**
 *  Context/situation 2: We're running the file in dev/production mode
 *  - To do this we're running the fiile within out CONTAINER app
 *  - There is NO GUARANTEE that an element with Id dev-products exists in the container
 *  - We DONT WANT TO try to immediately render the app
 */

export { mount };