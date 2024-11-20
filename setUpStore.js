const setUpStore = async () => {

  


    document.body.innerHTML = ""
    let merch = await fetch("https://fakestoreapi.com/products").then(res => res.json()).then(res => res)
    

    let store = Object.assign(document.createElement("div"), {
        className: "store-container",
        id: "store"
    })

    const CartBtn = Object.assign(document.createElement("button"),{
        innerText: "GO TO CART",
        onclick: openCart
    })

    const makeCart = () =>{
        let cartStr = ""
        state.cart.forEach(item =>{
            cartStr += `<p>Item:${item.title}</p><p>quantity ordered:${item.quantity}</p><p>price perItem: $${item.price}</p><p>total price: ${item.totalPrice}</p>`
        })
        cartStr += `<div><h3>Total: ${ state.cart.reduce((a,b) => a + b.totalPrice,0)}</h3></div>`
        return cartStr
    }

    const CartModal = Object.assign(document.createElement("dialog"),{
        open: state.modalOpen,
        id: "cartModal",
        innerHTML: `<button onclick="closeCart()">X</button>${makeCart()}`
    })

    const addToCartInputs = (props) =>`<div><h4>${props.title}</h4></div><div><p>Quantity</p><form onsubmit="addToCart(event)"><input name="quantity" id="quantity" oninput="handleInput(event)" value="${state.quantity}" type="number" min="0"/><button type="submit">ADD TO CART</button></form>
    <p id="pricePTag">price: $${props.price * parseInt(state.quantity)}</p></div>`

  
    merch.forEach(item => state.addToCartOpen && item.id === parseInt(state.addToCartId) ? 
        store.innerHTML += (`<div class='productCard'><img src='${item.image}' class='images'/><div><h3>${item.title}</h3><dialog open='${state.addToCartOpen}'><button onclick="closeAddToCart()">X</button>${addToCartInputs(item)}</dialog><p>${item.description}</p><p>Price: $${item.price}</p> <p>Rating: ${"*".repeat(Math.round(item.rating.rate))} ${item.rating.rate} </p></div></div>`) : 
        store.innerHTML += (` <div class='productCard'><img src='${item.image}' class='images'/><div><h3>${item.title}</h3><button onclick="openAddToCart(${JSON.stringify(item).split('"').join("&quot;")})">ADD TO CART</button><p>${item.description}</p><p>Price: $${item.price}</p> <p>Rating: ${"*".repeat(Math.round(item.rating.rate))} ${item.rating.rate} </p></div></div>`))

    state.modalOpen ?
    document.body.append(CartModal) :
    document.body.append(CartBtn)
    document.body.append(store)

   
  
}


setUpStore()

