        /* <!----- State & City  -----> */

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

    /* <!----- MULTI STEP FORM PREVIOUS ,CONTINUE & FINAL SUBMIT -----> */
    
const formSteps = document.querySelectorAll(".form-step");

const nextBtns = document.querySelectorAll(".next-btn");

const prevBtns = document.querySelectorAll(".prev-btn");

let currentStep = 0;

/*--- NEXT BUTTON ---*/
nextBtns.forEach((btn)=>{

    btn.addEventListener("click",()=>{

        formSteps[currentStep]
        .classList.remove("active");

        currentStep++;

        formSteps[currentStep]
        .classList.add("active");

    });

});


/*--- PREVIOUS BUTTON ---*/
prevBtns.forEach((btn)=>{

    btn.addEventListener("click",()=>{

        formSteps[currentStep]
        .classList.remove("active");

        currentStep--;

        formSteps[currentStep]
        .classList.add("active");

    });

});


/*--- FINAL SUBMIT ---*/
document.getElementById("multiStepForm").addEventListener("submit",(e)=>{

    e.preventDefault();

    alert(
        "Employee Form Submitted Successfully"
    );

});

/* ---------------------------------------------------------------------------------------------------------------------------------------------- */


    /* <!----- CERTIFICATION SHOW/HIDE -----> */ 

const certificationType = document.getElementById("certificationType");

const certificateUploadSection = document.getElementById("certificateUploadSection");


/*--- CERTIFICATION CHANGE ---*/
certificationType.addEventListener("change",function(){

    if(this.value === "Certified"){

        certificateUploadSection
        .style.display = "block";

    }else{

        certificateUploadSection
        .style.display = "none";

    }

});


/*--- EXPERIENCE SHOW/HIDE ---*/

const experienceStatus = document.getElementById("experienceStatus");

const experienceSection = document.getElementById("experienceSection");

const experienceDocuments = document.getElementById("experienceDocuments");


/*--- EXPERIENCE CHANGE ---*/

experienceStatus.addEventListener("change",function(){

    if(this.value === "Experienced"){

    /*-- SHOW EXPERIENCE --*/
        experienceSection
        .style.display = "block";

    /*-- SHOW DOCUMENTS --*/
        experienceDocuments
        .style.display = "block";

    } else{

    /*-- HIDE EXPERIENCE --*/
        experienceSection
        .style.display = "none";

    /*-- HIDE DOCUMENTS --*/
        experienceDocuments
        .style.display = "none";

    }

});

/* ------------------------------------------------------------------------------------------------------------------------------------------- */