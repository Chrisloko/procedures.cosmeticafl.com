var waitForJQuery = setInterval(function () {
  if (typeof $ != 'undefined') {

    function youtube_parser(url){
      var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
      var match = url.match(regExp);
      return (match&&match[7].length==11)? match[7] : false;
    }

    $( ".video-section iframe" ).each(function( index ) {
      const videoId = youtube_parser( $(this).attr('src') );
      
      $(this).attr('src', 'https://www.youtube.com/embed/'+videoId);
      
      console.log('Video ID:', videoId);
    });

    clearInterval(waitForJQuery);
  }
}, 10);