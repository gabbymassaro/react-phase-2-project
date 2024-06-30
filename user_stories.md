## MVP 
### Feature 1: Create a Navigation Bar using React Router and BootStrap. 
**User Story**: There are three links: Home, Coffee, and Equipment. As a user, I want to have links to the three parts of my ecommerce coffee shop that will point users to the home page, coffee products, and coffee equipment available for purchase. <br>
**Details**: Implement a search bar using React Bootstrap.

### Feature 2: Create a db.json file with 30 items 
**User Story**: We'll need a datamodel and file to use as our inventory/listings for our store. We'll want to include an id, brand name, category, description, image, price, and the instock quantity. <br>
**Details**: Follow this example (category should be EITHER "equipment" or "coffee", we'll be separating them later): 
```
{
  "items": [
    {
      "id": 1,
      "brand_name": "Breville",
      "category": "equipment",
      "description": "Breville Barista Express Espresso Machine",
      "image": "https://m.media-amazon.com/images/I/71BvCt6eAFL._AC_UL320_.jpg",
      "price": 699.99,
      "in_stock_qty": 2
    },
  }
```
### Feature 3: Render All "items" on Coffee tab pageload
**User Story**: As a user, when I click on the Coffee tab, I want to see all listings from the db.json file <br>
**Details**: 
- Create CoffeeList component, this is where the GET request will live
- Create and import the CoffeeCard component, this is where we'll render all the items individually
- Use BootStraps Card/Grid component to display the description, image, price, and quantity of each item
