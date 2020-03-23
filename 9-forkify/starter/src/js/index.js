// Global app controller
import string from "./models/Search";
// import { add, multiply, ID } from "./views/SearchView";
// how import everything from a another file/folder
import * as searchView from "./views/SearchView";
console.log(
  `Using imported functions! ${searchView.add(
    searchView.ID,
    3
  )} and ${searchView.multiply(5, 3)}`
);
