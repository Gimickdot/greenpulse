// BACK ON TOP BUTTON //
let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () 
{
  scrollFunction();
};

function scrollFunction() 
{
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  let windowHeight = window.innerHeight || document.documentElement.clientHeight;

  let documentHeight = document.documentElement.scrollHeight;

  let distanceFromBottom = documentHeight - (scrollTop + windowHeight);

  if (distanceFromBottom <= windowHeight) 
  {
    mybutton.style.display = "block";
  } 

  else 
  {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", backToTop);

function backToTop() 
{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// END OF BACK ON TOP BUTTON //

// SEND EMAIL FOR JOIN US //
function joinUsEmail() 
{
    emailjs.init("IRmjbHzUdROSgGlGH");
    var form = document.getElementById("joinUsEmail");

    // GETTING THE IDS //
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var comment = document.getElementById("comment").value;

    // CHECKING REQUIRED FIELDS //
    if (!firstName || !age || !gender || !comment) 
    {
        alert("Please fill in all required fields before sending the email.");
        return;
    }

    // CONVERTING ID TO MATCH THE ID IN EMAIL.JS //
    var data = 
    {
        firstName: firstName,
        lastName: lastName,
        age: age,
        gender: gender,
        comment: comment
    };

    emailjs.send("service_z2f18s2", "template_r2c88gd", data)
        .then(function(response) 
            {
                alert("Email sent successfully", response);
                form.reset();
            },
            function(error) 
            {
                alert("Email failed to send", error);
            });
}
// END OF SEND EMAIL FOR JOIN US //

// SEND EMAIL FOR CONTACT US //
function sendContactEmail() 
{
    emailjs.init("IRmjbHzUdROSgGlGH");
    
    var form = document.getElementById("contactUsForm");

    var firstName = document.getElementById("firstName2").value;
    var lastName = document.getElementById("lastName2").value;
    var email = document.getElementById("email2").value;
    var ratingValue = document.querySelector('input[name="rating"]:checked').value;
    var comment = document.getElementById("comment2").value;

    if (!firstName || !email || !ratingValue) 
    {
        alert("Please fill in all required fields before sending the email.");
        return;
    }

    var ratingText = ratingValue + " star";

    var data = 
    {
        firstName: firstName,
        lastName: lastName,
        email: email,
        rating: ratingText,
        comment: comment
    };

    emailjs.send("service_z2f18s2", "template_q1664zo", data)
        .then(function(response) 
        {
            alert("Email sent successfully", response);
            form.reset();
        }, function(error) 
        {
            alert("Email failed to send", error);
        });
}

// END OF SEND EMAIL FOR CONTACT US //