const setState = (newState) => Object.assign(state, newState)

const handleInput = (e) => {
    let pricePTag = document.getElementById("pricePTag")
    pricePTag.innerHTML = ""
    let { name, value } = e.target
    setState({
        ...state,
        [name]: value
    })
    pricePTag.innerHTML = `price: $${state.item.price * parseInt(state.quantity)}`
}

const openCart = () => {
    setState({
        ...state,
        modalOpen: true
    })
    setUpStore()

}

const closeCart = () => {
    setState({
        ...state,
        modalOpen: false
    })
    setUpStore()
}

const openAddToCart = (item) => {
    setState({
        ...state,
        addToCartOpen: true,
        addToCartId: item.id,
        item
    })

    setUpStore()



}

const closeAddToCart = () => {
    setState({
        ...state,
        addToCartOpen: false,
        addToCartId: 0,
        item: {}
    })
    setUpStore()
}

const addToCart = (e) => {
    e.preventDefault()
    let newItem = {}
    newItem.title = state.item.title
    newItem.price = state.item.price
    newItem.description = state.item.description
    newItem.quantity = state.quantity
    newItem.totalPrice = state.item.price * parseInt(state.quantity)
    setState({
        ...state,
        cart: [newItem, ...state.cart],
        quantity: 1,
        item: {},
        modalOpen: false,
        addToCartOpen: false,
        addToCartId: 0,
    })
    setUpStore()
}


// const formatMoney = (itemPrice) => {
//     let answer
//     if(Number.isInteger(Number(itemPrice))){
//         itemPrice = answer
//         setUpStore()
//     }

//    else if (itemPrice.toString().split(".")[1].length < 2) {
//        answer = itemPrice.toString() + "0"
//        setUpStore()

//     }
//     else {
//         answer = itemPrice
//         setUpStore()
        
//     }
//     return answer

// }