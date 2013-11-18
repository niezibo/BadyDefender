$(function(){
  var marquee = document.getElementsByTagName("marquee")[0];
  var audio = document.getElementById("myAudio");

  // Play/Pause ============================//
  $("#PalyBtn").bind("click", function(){
    
	$('.spacegallery a').trigger("click");
  });

  $("#play_toggle").bind("click", function(){

    if (audio.paused) {
      audio.play();
	  marquee.start();
      $(this).html("Pause");
    } else {
      audio.pause();
	  marquee.stop();
      $(this).html("Play");
    }
  });

  // Play Progress ============================//
  $(audio).bind("timeupdate", function(){
    var timePercent = Math.round((this.currentTime / this.duration)*100);
	$("#slider").val(timePercent);
	$("#slider").slider("refresh");
  });

  // Load Progress ============================//
  $(audio).bind("progress", function(){
    updateLoadProgress();
  });
  $(audio).bind("loadeddata", function(){
    updateLoadProgress();
  });
  $(audio).bind("canplaythrough", function(){
    updateLoadProgress();
  });
  $(audio).bind("playing", function(){
    updateLoadProgress();
  });
  
  function updateLoadProgress() {
    if (audio.buffered.length > 0) {
      var percent = (audio.buffered.end(0) / audio.duration) * 100;
    }
  }
  
  // Time Display =============================//
  $(audio).bind("timeupdate", function(){
    $("#current_time").html(formatTime(this.currentTime));
  });
  $(audio).bind("durationchange", function(){
    $("#duration").html("/"+formatTime(this.duration));
  });
  
  function formatTime(seconds) {
    var seconds = Math.round(seconds);
    var minutes = Math.floor(seconds / 60);
    // Remaining seconds
    seconds = Math.floor(seconds % 60);
    // Add leading Zeros
    minutes = (minutes >= 10) ? minutes : "0" + minutes;
    seconds = (seconds >= 10) ? seconds : "0" + seconds;
    return minutes + ":" + seconds;
  }

});
