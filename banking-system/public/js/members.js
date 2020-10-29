

$(document).ready(() => {
  // Getting references to our form and inputs
  const accountForm = $("form.accountvalues");
  const savingsInput = $("input#checkings-input");
  const checkingsInput = $("input#savings-input");

  // When the form is submitted, we validate there's an email and password entered
  accountForm.on("submit", event => {
    event.preventDefault();
    const userData = {
      savings: savingsInput.val().trim(),
      checkings: checkingsInput.val().trim()
    };

    if (!userData.savings || !userData.checkings) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.savings, userData.checkings);
    savingsInput.val("");
    checkingsInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(savings, checking) {
    $.post("/api/login", {
      savings: savings,
      checking: checking
    })
      .then(() => {
        window.location.replace("/members");
        // If there's an error, log the error
      })
      .catch(err => {
        console.log(err);
      });
  }

  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
    $("checkings-value").text(data.checking)

  });
});

