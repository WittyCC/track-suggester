$(document).ready(function() {
  $("form#userTrack").submit(function(event) {
    event.preventDefault();
    var learner = parseInt$("#learner").val();
    var priority = parseInt$("#priority").val();
    var employer = parseInt$("#employer").val();
    var webby = parseInt$("#webby").val();
    var gameplay = parseInt$("#gameplay").val();

    var result = learner + priority + employer + webby + gameplay;

    if (result >=5 && <= 9) {
      $("cssDesign").fadeIn();
    } else if (result > 9 && <= 12) {
      $("javaAndroid").fadeIn();
    } else if (result > 12 && <=15) {
      $("phpDrupal").fadeIn();
    } else {
      alert('Please make a selection.')
    }
  })
});
