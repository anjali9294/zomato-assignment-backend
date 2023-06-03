const express = require("express");
const router = express.Router();
const restaurant = require("../Controllers/RestaurantsController");
const location = require("../Controllers/LocationsController");
const mealtype = require("../Controllers/MealtypeController");
const menuitem = require("../Controllers/MenuitemsController");

const payment = require("../Controllers/PaymentControlller");

// restaurant
router.get("/api/", restaurant.Home);
router.get("/api/get-restaurant-details", restaurant.getRestaurantList);
router.get(
  "/api/get-restaurant-by-location-id/:loc_id",
  restaurant.getRestaurantListByLocId
);
router.get(
  "/api/get-restaurant-detail-by-id/:id",
  restaurant.getRestaurantDetailById
);

// location
router.get("/api/get-location", location.getLocationList);

// mealtype
router.get("/api/get-meal-type", mealtype.getMealType);

// menuitems
router.get(
  "/api/get-menu-item-list-by-restaurant-id/:res_id",
  menuitem.getMenuItemListByRestId
);

// filter
router.post("/api/filter", restaurant.filterData);

module.exports = router;
