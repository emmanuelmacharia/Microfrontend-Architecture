import faker from 'faker';



const mount = (el) => {

    const message = `You have ${faker.random.number()} items in your cart`;

    el.innerHTML = message;
}


if (process.env.NODE_ENV === 'development') {
    const el = document.getElementById('dev-cart-isolation');

    if (el) {
        mount(el);
    }
}


export { mount };