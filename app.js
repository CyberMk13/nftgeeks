let openShopping = document.getElementById('shopping');
let closeShopping = document.getElementById('closeShopping');
let list = document.getElementById('list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let tax = document.querySelector('.tax');
let quantity = document.querySelector('.quantity');



openShopping.addEventListener('click', ()=>{
	body.classList.add('active');
})
closeShopping.addEventListener('click',()=>{
	body.classList.remove('active');

})

let products = [
{
	id:1,
	name: 'Billy Volt',
	image: '30576690_7705317.jpg',
	price:10374899,
	promo:500000,
	tax:1342.24
},

{
	id:2,
	name: 'Zombie Twitch ',
	image: '30576672_7705326.jpg',
	price:4948400,
	promo:200000,
	tax:589.38
},

{
	id:3,
	name: 'Cyborg Being',
	image: '30576682_7705307.jpg',
	price:4200000,
	promo:573000,
	tax:283.22
},
{
	id:4,
	name: 'Ghost Scar',
	image: '30576689_7705302.jpg',
	price:347000,
	promo:70000,
	tax:578.58
},
{
	id:5,
	name: 'Goffy Kid',
	image: '30576693_7705329.jpg',
	price:2367800,
	promo:500000,
	tax:14934.28
},
{
	id:6,
	name: 'Alien Creature',
	image: '30576671_7705320.jpg',
	price:545000,
	promo:245000,
	tax:764.88
},
{
	id:7,
	name: ' Funky Being',
	image: '30576687_7705310.jpg',
	price:747000,
	promo:125000,
	tax:494.47
},
{
	id:8,
	name: 'RockStar Celestial',
	image: '30576677_7705323.jpg',
	price:278000,
	promo:40000,
	tax:1892.28
}
];

let ListCards = [];
function initApp(){
	products.forEach((value, key)=>{
		let newDiv = document.createElement('div');
		newDiv.classList.add('item');
		newDiv.innerHTML = `<div class="nft">
		<img class="nft-img" src="${value.image}">
		<div class="title">${value.name}</div>
		<div class="bidding">
				<div>
					<h4>Current Bid</h4>
					<p>$${value.price.toLocaleString()}</p>
				</div>
				<div>
					<h4>Starting Bid</h4>
					<p>$${value.promo.toLocaleString()}</p>
				</div>
			</div>
		<button class="btn" onclick="addToCart(${key})">Add To Cart</button>
		</div>`;
		list.appendChild(newDiv);
	})
}
initApp();
function addToCart(key){
	if(ListCards[key] == null){
		ListCards[key] = JSON.parse(JSON.stringify(products[key]));
		ListCards[key].quantity = 1;
	}
	reloadCart();
	showCart();
	showToast();
}
function reloadCart(){
	listCard.innerHTML = '';
	let count = 0;
	let taxPrice = 0;
	let totalPrice = 0;
	ListCards.forEach((value, key)=>{
		totalPrice = totalPrice + value.price;
		count = count + value.quantity;
		taxPrice = taxPrice + value.tax;
		if(value != null){
			let newDiv = document.createElement('li');
			newDiv.innerHTML = `<div id="item" class="cart-bg">
			<div><img class="nft-img2" src="${value.image}"/></div>
			<div class"n-p">
			<div class="n">${value.name}</div>
			<div class="p">Price --- $${value.price.toLocaleString()}</div>
			<div class = "p">Tax ---  $${value.tax.toLocaleString()}</div>
			</div>
			<div class="quantityc">
			<button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
			<div class="count">${value.quantity}</div>
			<button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
			</div>
			<div class="delete" onclick="changeQuantity(${key}, ${value.quantity - 1})"><img src="cross (1).svg"></div>
			</div>`;
			listCard.appendChild(newDiv);
		}
	})
	total.innerText =totalPrice.toLocaleString();
	tax.innerHTML = taxPrice.toLocaleString();
	quantity.innerText = count;
}
function changeQuantity(key, quantity){
	if(quantity == 0){
		delete ListCards[key];
	}
	else{
		ListCards[key].quantity = quantity;
		ListCards[key].price = quantity * products[key].price;
	}
	reloadCart();
};

let toastBox = document.getElementById('toastBox');
function showToast(){
 let toast = document.createElement('div');
 toast.classList.add('toast');
 toast.innerHTML = '<img class="toast-img" src ="check.png">Product Succesfully Added To Cart';
 toastBox.appendChild(toast);


 setTimeout(() =>{
	toast.remove();
 },1000);
};





