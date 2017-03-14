$(document).ready(function(){

  var characterSelected = "";
      yodaTopOrigin = $('section#opening .yoda').offset().top;
      yodaLeftOrigin = $('section#opening .yoda').offset().left;
      yodaTopOffset = 15;
      yodaLeftOffset = -24;
      leiaTopOrigin = $('section#opening .yoda').offset().top;
      leiaLeftOrigin = $('section#opening .yoda').offset().left;
      leiaTopOffset = 31;
      leiaLeftOffset = -2;
      lukeTopOrigin = $('section#opening .luke').offset().top;
      lukeLeftOrigin = $('section#opening .luke').offset().left;
      lukeTopOffset = 30;
      lukeLeftOffset = -8;
      hanTopOrigin = $('section#opening .han').offset().top;
      hanLeftOrigin = $('section#opening .han').offset().left;
      hanTopOffset = 15;
      hanLeftOffset = 0;
      principlesLeftDistance = "";

  //Select Character
  $("section#opening .yoda").click(function() {
    selectCharacter("yoda", yodaTopOffset, yodaLeftOffset);
  });

  $("section#opening .leia").click(function() {
    selectCharacter("leia", leiaTopOffset, leiaLeftOffset);  
  });

  $("section#opening .luke").click(function() {
    selectCharacter("luke", lukeTopOffset, lukeLeftOffset);  
  });

  $("section#opening .han").click(function() {
    selectCharacter("han", hanTopOffset, hanLeftOffset);  
  });

  function selectCharacter(character, characterTopOffset, characterLeftOffset) {
    // Add Active Class on Quiz Screen
    $("section#quiz ."+character).addClass("active-character");
    $(".char-error").empty();

    // If we've already moved a costume, move them back
    if(characterSelected != "") {
      var returnTopDiff = $('section#opening .oedi').offset().top - $('.'+characterSelected).offset().top + characterTopOffset;
      var returnLeftDiff = $('section#opening .oedi').offset().left - $('.'+characterSelected).offset().left + characterLeftOffset;
      $('section#opening .'+characterSelected).transition({ x: 0, y: 0});
      $('section#opening .'+characterSelected).data('moved', 'false');
      $("section#quiz ."+characterSelected).removeClass("active-character");
    }

    // Move Costume on top of OEDI
    var TopDiff = $('section#opening .oedi').offset().top - $('.'+character).offset().top + characterTopOffset;
    var LeftDiff = $('section#opening .oedi').offset().left - $('.'+character).offset().left + characterLeftOffset;

    $('section#opening .'+character).transition({ x: LeftDiff, y: TopDiff});
    $('section#opening .'+character).attr("data-moved", "true");
    characterSelected = character;
  }

	$("#play").click(function() {

    if(!characterSelected) {
      $(".char-error").html("You must select a character before playing the game.");
      return;
    }

    // Hide Opening Section
    $("#opening").fadeOut("slow", function() {
      // Fade in Quiz Section when Opening Section is hidden
      $("#quiz").fadeIn("slow");
      $(".social-media-container").addClass("whitebg");

      principlesLeftDistance = -$('section#quiz .g0').offset().left;

    });

  });

  // Process Quiz Answers
  var answers = ["c","b","b"], 
      tot = answers.length - 1;
      score = 0;
      questionNumber = 0;
      tries = 0;
      jabba = "smile";

  // Click Answer Question Button
  $("button[name=quizsubmit]").click(function(){
    // If Oedi wan is shown, hide him
    $("#oedi-wan").fadeOut("fast");

    // Hide Results Div
    $(".quiz_container .result").removeClass("wrong").empty();

    var question = "q"+questionNumber;
    checkAnswer(question);
  });

  // Check if submitted answer is correct
  function checkAnswer(question) {
    var selected = $("input[name="+question+"]:checked").val();

    // If Correct Answer
    if(selected === answers[questionNumber]) {
      correctAnswer();
      // If We've Answered All the Questions, Celebrate
      if(questionNumber == tot) {
        setTimeout(quizWin, 1500);
      }
    }
    //If Wrong Answer
    else {
      tries += 1;
      if(tries == 3) {
        oediWan();
      }
      else {
        var incorrectResponseArray = [
            "That's incorrect. Try again!",
            "Hmm, that's still not right. Give it one more try!"
        ];
        $(".quiz_container .result").addClass("wrong").html(incorrectResponseArray[tries-1]);
        
        // Animate Jabba
        if(jabba == "frown") {
          !tween2.playing && tween2.start();
          jabba = "smile";
        }

      }
    }
  }

  // Run if the user got the question wrong 3 times
  function oediWan() {
    // Oedi-wan animates in
    $("#oedi-wan").fadeIn("slow", function() {

      $(".quiz_container .result").addClass("right").html("OEDI-wan Kanobi has highlighted the correct answer! Click submit to go to the next question.");

      // Select the right answer for the user
      var answer = answers[questionNumber];

      var radioID = $("input[value="+answer+"]").attr("id");

      $("input[name=q"+questionNumber+"]").not("input[value="+answer+"]").prop("disabled", true);

      $("#"+radioID).prop("checked", true);

    });
  }

  // Free the Principles Animation
  function correctAnswer() {

    // Fire the Blaster
    var shotDistance = $('.jabba_container').offset().left;
    $("."+characterSelected+" .shot"+questionNumber).show();
    $("."+characterSelected+" .shot"+questionNumber).transition({ x: shotDistance }, 500, 'linear', function() {
      // Free the Principles
      $(".g"+questionNumber).removeClass("cp");


      // Remove the Lock & Chains
      $(".g"+questionNumber+" .chain1").transition({y: '100px'}, 500).hide("slow");
      $(".g"+questionNumber+" .chain2").transition({y: '100px'}, 500).hide("slow");
      $(".g"+questionNumber+" .lock").transition({y: '100px'}, 500).hide("slow");

      // Move the Freed Principles & Add Freed Class
      $(".g"+questionNumber).transition({x: principlesLeftDistance, delay: 600});
      $(".g"+questionNumber).addClass("fp");

      // Change the Question
      $(".q"+questionNumber).hide().remove();
      $(".q"+(questionNumber + 1)).show();
      $("."+characterSelected+" .shot"+questionNumber).hide();
      // Update the counters
      score += 1;
      questionNumber += 1;
      tries = 0;
    });

    // Animate Jabba
    if(jabba == "smile") {
      !tween.playing && tween.start();
      jabba = "frown";
    }

  }

  // Run if the user has beat the quiz
  function quizWin() {
    // Jabba slides off his platform
    $(".jabba_container").transition({rotate: '25deg'}, 500, 'linear', function() {
      $("#jabba").transition({x: '110%', y: '110%'});
      $(".jabba_container").transition({rotate: '0'}, 500, 'linear');

      // OEDI-wan returns & congratulates you
      $("#oedi-wan").fadeIn("slow", function() {
        $("section#quiz .quiz_container p").remove();
        $("section#quiz .quiz_container button").remove();
        $(".quiz_container .result").addClass("right").addClass("congratulations").html("Well done!  In my experience there is no such thing as luck.");
      });
      // Play the Music
      $("#music_container").html("<audio id='cantinaMusic' src='dw_music/cantina_cut.ogg' controls muted='true'/>");
      PlaySound('cantinaMusic');

      // Everybody Dances
      $('#oedi-wan').addClass("dance");
      $('section#quiz #oedi').addClass("dance");
      $('.fp').each(function(){
          $(this).html("<a href='http://openelectiondata.net/en/guide/principles/"+$(this).attr('data-url')+"'></a>");
      });
      $('.fp').css({ transform: '', position: 'relative', left: principlesLeftDistance }).addClass("dance");
    });

  }

  function PlaySound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.play();
  }

  function StopSound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
  }

  // Jabba's Mouth Animation
  var tween = KUTE.fromTo('#smile',  // from shape
    { path: '#smile' }, // from shape
    { path: '#frown' }, // to shape
    {morphIndex: 1} // options
  );

  var tween2 = KUTE.fromTo('#smile',  // from shape
    { path: '#smile' }, // from shape
    { path: '#smile2' }, // to shape
    {morphIndex: 1} // options
  );



}());