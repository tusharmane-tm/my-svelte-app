import { derived } from "svelte/store";
import { cartItems } from "./cartItems";

export let cartCount = derived(cartItems, ($cartItems)=>{
    return Object.keys($cartItems).length;
})