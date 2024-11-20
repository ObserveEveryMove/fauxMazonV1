   window.addEventListener("scroll", ()=> {
    state.windowY = window.scrollY
    state.windowX = window.scrollX
   })


let state = {
    modalOpen: false,
    addToCartOpen: false,
    addToCartId: 0,
    cart: [],
    quantity: 1,
    item: {},
    windowY: 0,
    windowX: 0,
}

