$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
    // $(".input-savings").text(data.savings);
    // $(".input-checkings").text(data.checkings);

  })


  // $("#submit_balance").on("click", function (e) {
  //   const checkings = $("#checking_balance").val()
  //   const savings = $("#savings_balance").val()
  //   const payload = { checkings, savings }
  //   console.log(payload)
  //   $.post("/api/balance", payload)
  //     .then(function (res) {
  //       console.log(res)
  //     })
  // })
})