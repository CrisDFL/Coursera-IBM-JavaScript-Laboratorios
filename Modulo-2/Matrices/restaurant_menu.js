const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

//MAP -----------------------------
const breakfastRecorrido = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');

document.getElementById('breakfastMenuItems').innerHTML = breakfastRecorrido;

//forEach ----------------------------
let mainCourseRecorrido = '';
mainCourseMenu.forEach((item, index) => {
    mainCourseRecorrido += `<p>Item ${index + 1}: ${item}</p>`;
});

document.getElementById('maincourseMenuItems').innerHTML = mainCourseRecorrido;

//For ---------------------------------
let dessertRecorrido = '';
for(let i = 0; i<=dessertMenu.length; i++){
    dessertRecorrido += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertRecorrido;