// GOOGLE SIGN-IN
function onSignIn(googleUser) {
        // Useful data for your client-side scripts:
        var profile = googleUser.getBasicProfile();
        document.write("ID: " + profile.getId()); 
        // Don't s'end this directly to your server!
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());

        // The ID token you need to pass to your backend:
        var id_token = googleUser.getAuthResponse().id_token;
        console.log("ID Token: " + id_token);
	}

     // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
     function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
    }); 
  }

// FACEBOOK LOG-IN
window.fbAsyncInit = function() {
    FB.init({
      appId      : '884289785283365',
      cookie     : true,  
      xfbml      : true,  
      version    : '{api-version}' 
    });


    function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    }); }


    function statusChangeCallback(response) {
      console.log('statusChangeCallback');
      console.log(response);
      if (response.status === 'connected') {
        // Logged into your app and Facebook.
        console.log('logged in and authenticated');
        //just to test , use testapi
        testAPI();
    }   else {
        // The person is not logged into your app or we are unable to tell.
        document.getElementById('status').innerHTML = 'Please log ' +
          'into this app.';
    }
  }

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);}
   (document, 'script', 'facebook-jssdk'));
