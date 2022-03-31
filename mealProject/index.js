let foodname = document.querySelector('.meal-name h3');
let foodimage = document.querySelector('.meal-img img');
let meal = document.querySelector('#meal');
fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
  .then((response) => response.json())
  .then((data) => {
    Array.from(data.meals).map((foodData) => {
      meal.innerHTML += `
          <div class = "meal-item">
          <div class = "meal-img">
            <img src = ${foodData.strMealThumb} alt = "food">
          </div>
          <div class = "meal-name">
            <h3>${foodData.strMeal}</h3>
          </div>
        </div>
      `
    })
  }
  )