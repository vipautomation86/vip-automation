# NextJs Tailwind Ecommerce Website

# Lesson

1. Introdection
2. Install Tools
3. Create Next App

   1. npx create-next-app .
   2. npm install -D tailwindcss postcss autoprefixer
   3. npx tailwindcss init -p

4. Publish to github
5. Create Website Layout
   1. create layout component
   2. add header
   3. add main section
   4. add footer
   5. add tailwind class
6. Listing Products
   1. add data.js
   2. add images
   3. render products
7. Create Product Details

   1. create product page
      1. npm i -D @types/react
   2. sreate 3 colums
   3. show image in first column
   4. show product info in second coloumn
   5. show to cart action on third column
   6. add styles

8. Handle Add To Cart

   1. define react contex
   2. define cart items state
   3. create add to cart action
   4. add reducer
   5. create store provider
   6. handle add to cart button

9. Create Cart Page

   1. create cart.js
   2. use context to get cart items
      1. npm i @heroicons/react
      2. npm i @heroicons/react@v1
   3. list item in cart item
   4. redirect to cart items
   5. redirect to cart screen after add to cart

10. Handle Changing Cart Item

    1. add select box for quantity
    2. handle select box change

11. Save Cart Items

    1. install js-cookie packeg
    2. save and retrive cart items in cookies
