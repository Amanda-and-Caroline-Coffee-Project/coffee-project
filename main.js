"use strict"
// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];
if(localStorage.getItem('newCoffeeNames') !== null) {
    coffees = JSON.parse(localStorage.getItem('newCoffeeNames'));
}



// creates coffee list
function renderCoffee(coffee) {
    var html = '<div class="col-12 col-md-6">';
    html += '<h1 class="d-none">' + coffee.id + '</h1>';
    html += '<h4>' + coffee.name + '</h4>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}



// function that filters through the "coffees" array based on the selected roast.
var list = document.getElementById("coffeeList");
list.innerHTML = renderCoffees(coffees);

function updateCoffees() {
    var filteredCoffees = [];
    coffees.forEach(function (coffee) {
        if (coffee.roast === selectedRoast || selectedRoast === "all") {
            if (coffee.name.toLowerCase().includes(coffeeSelected.toLowerCase())) {
                filteredCoffees.push(coffee);
            }
        }
    });
    list.innerHTML = renderCoffees(filteredCoffees);
};
//event listener that utilizes the "updateCoffees" function for the "select" roast menu.
var selectedRoast = 'all';
var roastSelection = document.querySelector('#input');
roastSelection.addEventListener("change", function () {
    selectedRoast = roastSelection.value;
    console.log(selectedRoast);
    updateCoffees();
});


// event listener that utilizes the "updateCoffees" function to filter through "coffees" array based on what is typed in the
// "input" box.
var coffeeSelected = '';
var coffeeType = document.getElementById('coffeeNameInput');
coffeeType.addEventListener('keyup', function () {
    coffeeSelected = coffeeType.value;
    updateCoffees();
});




// "Add a Coffee" function that creates a new coffee based on the roast and name then, adds it too the "coffees" array.
function createCoffee(inputName, roastType) {
    var newCoffee = {id: coffees.length + 1,
                    name: inputName,
                    roast: roastType}
                        coffees.push(newCoffee);
}

//Event listener that takes in the new roast selection and new coffee name input.
var submitNewCoffee = document.querySelector('#addCoffee');//submit button
    submitNewCoffee.addEventListener('click', function (){
        var newCoffeeRoast = document.querySelector('#input2');//roast selection
        var newCoffeeName = document.querySelector('#newCoffeeName');//name input
            createCoffee(newCoffeeName.value, newCoffeeRoast.value);
            updateCoffees();

            let newCoffeeNames = coffees;
            localStorage.setItem("newCoffeeNames", JSON.stringify(newCoffeeNames));

        }
    )


window.localStorage.clear();

function clearStorage(){
    localStorage.removeItem("newCoffeeNames");
    return list;
}




