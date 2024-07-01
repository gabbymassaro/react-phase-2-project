## MVP 
### Feature 1: Create a Navigation Bar using React Router and BootStrap. 
**User Story**: There are four links: Home, Coffee, Equipment, and Cart. As a user, I want to have links to the different parts of my ecommerce coffee shop.<br>
**Details**: Implement a navbar using React Bootstrap.

### Feature 2: Create a db.json file
**User Story**: We'll need a datamodel and file to use as our inventory/listings for our store. We'll want to include an id, brand name, category, description, image, price, and the instock quantity. <br>
**Details**: Follow this example, but we'll need fourt endpoints (/coffee, /equipment, /cart, /purchased): 
```
{
  "equipment": [
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
### Feature 3: Render All Objects from /Coffee on Coffee tab
**User Story**: As a user, when I click on the Coffee tab, I want to see all listings from the /coffee endpoint. <br>
**Details**: 
- Create CoffeeList component
- Create and import the CoffeeCard component, this is where we'll render all the items individually
- Use BootStrap Card/Grid component to display the description, image, price, and quantity of each item

### Feature 4: Render All Objects from /Equipment on Equipment tab
**User Story**: As a user, when I click on the Equipment tab, I want to see all listings from the /equipment endpoint. <br>
**Details**: 
- Create EquipmentList component
- Create and import the EquipmentCard component, this is where we'll render all the items individually
- Use BootStrap Card/Grid component to display the description, image, price, and quantity of each item

### Feature 5: Create a Landing Page 
**User Story**: As a user, I want to see a brief intro and images related to the coffee website on launch
**Details**: Brief summary, stock images of coffee.

### Feature 6: Create 'Add New Listing' Form on Coffee tab (POST Request)
**User Story**: As a user, I want the ability to add more listings to our inventory. 
**Details**: Form should include all necessary item details to send to the database on submit. New listing should immediately render on Coffee tab without page refresh.

### Feature 7: Create 'Add New Listing' Form on Equipment tab (POST Request)
**User Story**: As a user, I want the ability to add more listings to our inventory. 
**Details**: Form should include all necessary item details to send to the database on submit. New listing should immediately render on Coffee tab without page refresh.

### Feature 8: 'Delete' Button on All Item Listings (DELETE Request)
**User Story**: As a user, I want the ability to remove listings from our inventory. 
**Details**: Render all items on Coffee and Equipment tabs with a corresponding Delete button that removes item listings from the DOM and DB. 

### Feature 9: 'Add To Cart' Button on All Item Listings (POST Request)
**User Story**: As a user, I want the ability to add items to my cart for purchase.
**Details**: Each item (coffee or equipment) should be added to the cart DOM and DB.


## Stretch Deliverables:
10. Purchase Items from Cart.
11. Once an item is added to your cart, a red dot will appear over the cart tab indicating there's items in your cart.
12. Decrement InStock quantity when items are purchased.  
