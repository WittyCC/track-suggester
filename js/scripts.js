$(document).ready(function() {
  $("form#userTrack").submit(function(event) {
    var user1Input = $("input#user1").val();
    var learner = parseInt($("#learner").val());
    var priority = parseInt($("#priority").val());
    var employer = parseInt($("#employer").val());
    var webby = parseInt($("#webby").val());
    var gameplay = parseInt($("#gameplay").val());

    var result = learner + priority + employer + webby + gameplay;

    $('#userTrack').hide();

    $('.user1').text(user1Input);

    if (learner === 0) {
      alert('Please make a selection.');
    } else if (priority === 0) {
      alert('Please make a selection.');
    } else if (employer === 0) {
      alert('Please make a selection.');
    } else if (webby === 0) {
      alert('Please make a selection.');
    } else if (gameplay === 0) {
      alert('Please make a selection.');
    } else if (result >=5 && result <=9) {
      $('#conclusion1').fadeIn("slow");
    } else if (result > 9 && result <= 12) {
      $('#conclusion2').fadeIn("slow");
    } else if (result > 12 && result <=15) {
      $('#conclusion3').fadeIn("slow");
    }

    event.preventDefault();
  });
});
