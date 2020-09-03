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


var list = document.getElementById("coffeeList");
list.innerHTML = renderCoffees(coffees);


// displays coffee name
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

// roast selection choice
var selectedRoast = 'all';
var roastSelection = document.querySelector('#input');
roastSelection.addEventListener("change", function () {
    selectedRoast = roastSelection.value;
    console.log(selectedRoast);
    updateCoffees();
});

// coffee name input text
var coffeeSelected = '';
var coffeeType = document.getElementById('coffeeNameInput');
coffeeType.addEventListener('keyup', function () {
    coffeeSelected = coffeeType.value;
    updateCoffees();
});




// creates new coffee
function createCoffee(inputName, roastType) {
    var newCoffee = {id: coffees.length + 1,
                    name: inputName,
                    roast: roastType}
                        coffees.push(newCoffee);
    // log.textContent = log.textContent + `${event.type}: ${event.data}\n`;
}


var submitNewCoffee = document.querySelector('#addCoffee');
    submitNewCoffee.addEventListener('click', function (){
        var newCoffeeRoast = document.querySelector('#input2');
        var newCoffeeName = document.querySelector('#newCoffeeName');
            createCoffee(newCoffeeName.value, newCoffeeRoast.value);
            updateCoffees();

            let newCoffeeNames;
            if(localStorage.getItem('newCoffeeName') === null) {
                newCoffeeNames = [];
            } else {
                newCoffeeNames = JSON.parse(localStorage.getItem('newCoffeeName'));
            }
            newCoffeeNames.push(newCoffeeName);
            localStorage.setItem("newCoffeeNames", JSON.stringify(newCoffeeNames));
        }
    )


// var submitButton1 = document.querySelector('#submit1');
// var submitButton2 = document.querySelector('#submit2');
// var roastSelection = document.querySelector('#roast-selection');
//
//
//
// submitButton1.addEventListener('click', updateCoffees);
// submitButton2.addEventListener('click', updateCoffees);
