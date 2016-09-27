$(window).load(function() {

  // Add active class to menu links when you are on the page:
  function stripTrailingSlash(str) {
    if(str.substr(-1) == '/') {
      return str.substr(0, str.length - 1);
    }
    return str;
  }
  var locationPage = stripTrailingSlash(window.location.pathname);
  $.each($('header .nav').find('li'), function() {
    if ($(this).find('a')) {   
      var parser = document.createElement('a');
      parser.href = $(this).find('a').attr('href');
      if (stripTrailingSlash(parser.pathname) === locationPage) {
        $(this).addClass('active');
      }
    }
  });
  
});