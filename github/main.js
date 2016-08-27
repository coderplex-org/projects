var url = 'https://api.github.com/users/vramana'

function handleProfileData(data) {
  $('.avatar img').attr('src', data.avatar_url);
  $('.name').text(data.name);
  $('.username').text(data.login);
  $('.location').text(data.location);
  $('.company').text(data.company);
  $('.email a').text(data.email);
  $('.blog a').text(data.blog);
}

$.getJSON(url, handleProfileData)
