function handleProfileData(data) {
  $('.avatar img').attr('src', data.avatar_url);
  $('.name').text(data.name);
  $('.bio').text(data.bio);
  $('.username').text(data.login);
  $('.location').text(data.location);
  $('.company').text(data.company);
  $('.email a').text(data.email);
  $('.blog a').text(data.blog);
  $('.blog a').attr('href', data.blog);
  $('.url a').text(data.html_url);
  $('.url a').attr('href', data.html_url);
}


function handleSearch() {
  var username = $('.search').val()
  var url = 'https://api.github.com/users/' + username
  // console.log(username)
  $.getJSON(url, handleProfileData)
}


$('.search-btn').click(handleSearch)
