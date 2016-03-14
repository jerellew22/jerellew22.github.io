
  function chooseASport (){
  var sport = prompt("what is your favorite sport?");

  switch (sport){
      case 'football':
        alert("the greatest sport, the sport of kings");
        break;
      case 'basketball':
        alert("Another great sport, not the greatest though");
        break;
      case 'baseball':
        alert("it's an ok sport, just not on the level of football or even basketball");
          break;
      case 'soccer':
          alert("Ummm, we live in the USA, good choice in Europe though");
          break;
      default:
           alert("are you even serious??")
  }
  };
  chooseASport (); 

function submitComent() {
  console.log ("running")


  var name = $("#name").val();
  var comment = $("#comment").val();

  var data = {
    name: name,
    comment: comment
  };

  var ajaxInfo = {
    url: "http://localhost:3000",
    type: "POST",
    dataType: "text",
    data: JSON.stringify (data),
    success: function (){
      alert("success!");
    },
    error:function (error){
      alert("Sorry, something went wrong.");
    }
  }

  $.ajax(ajaxInfo);
};

  