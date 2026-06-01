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

    /*--- CURRENT STEP INPUTS ---*/

        const inputs = formSteps[currentStep].querySelectorAll("input, select, textarea");

        let isValid = true;

        /*--- VALIDATION ---*/

        inputs.forEach((input)=>{

            if(input.hasAttribute("required")){

                if(input.value.trim() === ""){

                    input.style.border =
                    "1px solid red";

                    isValid = false;

                }

                else{

                    input.style.border =
                    "1px solid #ccc";

                }

            }

        });

        /*--- STOP NEXT STEP ---*/

        if(!isValid){

            alert("Please fill all required fields");

            return;
        }

        /*--- NEXT STEP ---*/

        formSteps[currentStep].classList.remove("active");

        currentStep++;

        formSteps[currentStep].classList.add("active");

    });

});


/*--- PREVIOUS BUTTON ---*/
prevBtns.forEach((btn)=>{

    btn.addEventListener("click",()=>{

        formSteps[currentStep].classList.remove("active");

        currentStep--;

        formSteps[currentStep].classList.add("active");

    });

});


/*--- FINAL SUBMIT ---*/
document.getElementById("multiStepForm").addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("✅ Thank You! Your Employee Joining Form Has Been Submitted Successfully");

    form.reset();

});

/* ---------------------------------------------------------------------------------------------------------------------------------------------- */


    /* <!----- CERTIFICATION SHOW/HIDE -----> */ 

const certificationType = document.getElementById("certificationType");

const certificateUploadSection = document.getElementById("certificateUploadSection");

const certificateFile = document.querySelector('input[name="certificate_file"]');


/*--- CERTIFICATION CHANGE ---*/
certificationType.addEventListener("change",function(){

    if(this.value === "Certified"){

        certificateUploadSection.style.display = "block";
        certificateFile.required = true;

    }else {

        certificateUploadSection.style.display = "none";
        certificateFile.required = false;
        certificateFile.value = "";

    }

});



/*--- EXPERIENCE SHOW/HIDE ---*/

const experienceStatus = document.getElementById("experienceStatus");
const experienceSection = document.getElementById("experienceSection");
const experienceDocuments = document.getElementById("experienceDocuments");

experienceStatus.addEventListener("change", function () {

    const requiredFields = experienceSection.querySelectorAll(
        'input[name="total_experience"],' +
        'input[name="designation"],' +
        'input[name="offer_letter"],' +
        'input[name="relieving_letter"]'
    );

    if (this.value === "Experienced") {

        experienceSection.style.display = "block";

        requiredFields.forEach(field => {
            field.required = true;
        });

    } else {

        experienceSection.style.display = "none";

        requiredFields.forEach(field => {
            field.required = false;
        });

    }

});

/* ------------------------------------------------------------------------------------------------------------------------------------------- */














