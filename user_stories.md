## MVP 
### Feature 1: Create a Navigation Bar using React Router and BootStrap. 
**User Story**: There are four links: Home, Coffee, Equipment, and Cart. As a user, I want to have links to the different parts of my ecommerce coffee shop.<br>
**Details**: Implement a navbar using React Bootstrap.

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
**User Story**: As a user, when I click on the Coffee tab, I want to see all listings from the db.json file. Just render all of them, regardless of category. <br>
**Details**: 
- Create CoffeeList component, this is where the GET request will live
- Create and import the CoffeeCard component, this is where we'll render all the items individually
- Use BootStraps Card/Grid component to display the description, image, price, and quantity of each item

### Feature 4: Only Render Coffee items.category on the Coffee link
**User Story**: As a user, I only want to see Coffee products on the Coffee tab.
**Details**: "coffee" items.category are only items that are coffee beans, coffee grounds, or coffee pods (by db.json design). Only render these items on pageload.

### Feature 4: Only Render Equipment items.category on the Coffee link
**User Story**: As a user, I only want to see Coffee Equipment on the Equipment tab.
**Details**: "equipment" items.category are only items that are coffee machines, bean grinders, pourovers, etc... (by db.json design). Only render these items on pageload.
- Make a new component for Equipment, mirror how Coffee looks

### Feature 5: Create 'Add New Listing' Form on Coffee tab (POST Request)
**User Story**: As a user, I want the ability to add more listings to our inventory. 
**Details**: Form should include all necessary item details to send to the database on submit. New listing should immediately render on Coffee tab without page refresh.

### Feature 6: 'Delete' Button on All Item Listings (DELETE Request)
**User Story**: As a user, I want the ability to remove listings from our inventory. 
**Details**: Render all items on Coffee and Equipment tabs with a corresponding Delete button that removes item listings from the DOM and DB. 
