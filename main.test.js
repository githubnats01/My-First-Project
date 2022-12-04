import { sort, newsList } from "./main.js";

function search(inputValue) {
  //inputValue is the variable that contains the search string
  //let inputValue = document.getElementById("search-input").value.toLowerCase();
  let x = newsList

  //Write your code here for the search function 
  for (var i = 0; i < x.length; i++) {     
    if (x[i].toLowerCase().includes(inputValue)){
      console.log(x[i])
    }
  }
    return newsList;
}

//Example testing for search function
test("Search function testing", () => {
  expect(search(newsList)).toBe(newsList);
});

test("sort ascending testing", () =>{
  expect(sort("ascending")).toBe(sort())
}) 

test("sort descending testing", () =>{
  expect(sort()).toBe(newsList.reverse())
})
