        /* <!-- State & City  --> */

const state = document.getElementById("state");
const city = document.getElementById("city");

const cities = {

    "Tamil Nadu":["Chennai", "Coimbatore", "Madurai", "Salem", "Trichy"],

    "Karnataka":["Bangalore", "Mysore", "Mangalore", "Hubli"],

    "Telangana":["Hyderabad", "Warangal", "Karimnagar"],

    "Maharashtra":["Mumbai", "Pune", "Nagpur", "Nashik"],

    "Delhi":["New Delhi"]

};

state.addEventListener("change",function(){

    const selectedState = this.value;

    city.innerHTML = `
        <option value="">
            -- Select City --
        </option>
    `;

    cities[selectedState].forEach(function(cityName){

        city.innerHTML += `
            <option value="${cityName}">
                ${cityName}
            </option>
        `;

    });
});

/* -------------------------------------------------------------------------------------------------------------------------------------------- */

