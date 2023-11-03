import { readonly, writable } from "svelte/store";

const item = writable({})

export const addToCart = (title, variant) => {
    const productData = {title, ...variant};

    item.update((state)=>{
        const sku = variant.sku;

        state[sku] = productData;

        console.log(state);

        return state;
    });
}

export const removeFromCart = (sku) => {
    item.update((state)=>{
        
        delete state[sku];

        return state;
    });
}

export const cartItems = readonly(item); 