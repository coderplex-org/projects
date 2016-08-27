function handleProfileData(data) {
  $('.avatar img').attr('src', data.avatar_url);
  $('.name').text(data.name);
  $('.username').text(data.login);
  $('.location').text(data.location);
  $('.company').text(data.company);
  $('.email a').text(data.email);
  $('.blog a').text(data.blog);
}


function handleSearch() {
  var username = $('.search').val()
  var url = 'https://api.github.com/users/' + username
  // console.log(username)
  $.getJSON(url, handleProfileData)
}


$('.search-btn').click(handleSearch)
