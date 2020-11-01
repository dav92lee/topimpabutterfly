# King Children Grocery Store

## Prompt

At First Technologies, we are trying to redefine not only how consumers view customized, bespoke products but also how companies manufacture products in general. While we are currently impacting the way the traditional eyewear industry mafactures their products and the value they bring to their customers, our hope is to move into other industries in the future. 3D printing has made many strides since the inception of First Technologies/King Children: 3D printed food – while is still extremely resource inefficient – it is quickly [becoming a reality](https://interestingengineering.com/3d-printing-will-change-the-way-you-eat-in-2020-and-beyond).

Our goal today is to set up an ecommerce marketplace (KC Groceries) to shop for some 3d printed foods we've engineered (this is a joke!) over the past few months.

Please spend the first 10 minutes thinking through the prompt, the next 20 minutes talking us through your design choices and your plan, and the last 2.5 hours building out your solution.

## Set Up Instructions

1. clone the project
2. if you don't have npm install npm [here](https://www.npmjs.com/get-npm)
3. `cd` into the project directory and run `npm install`
4. `npm start` should start the server
5. `http://localhost:3000/` will allow you to access the webpage `index.html`
6. in `public` folder you will find two files, `index.css` and `index.js` which will allow you to add styling and javascript to your project.

## TODO

1. Define customers and their use respective cases
2. Code marketplace site to browse the products
3. Add any additional pages/functionality
4. _Bonus_ Responsive Design

## API

### 1. `/groceries`

returns a list of all groceries sold by KC Groceries

-   id: a unique ID for a given product
-   name: name of product
-   cateogry: product category
-   price: the cost of a given product
-   salePrice: if the product is on sale, this lists the sale price of the product
-   purchases: the number of times this product has been purchased
-   isDelivery: if we offer a delivery option for this product
-   isOrganic: whether or not this product is organic
-   alsoPurchased: common products a customer also purchases when they purchase this product
-   img: an image URL for the product
-   description: a short description of the product

### 2. `/categories`

returns a list of grocery categories

## Additional Notes

Please feel free to install any additional packages or libraries you feel might be helpful for your development speed.

We've taken the liberty of sourcing fontawesome as well as jquery in the project, but please feel free to use `create-react-app` or `angular` or any of those tools you feel confident in setting up quickly.
