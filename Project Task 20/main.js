// Foursquare API Info
const clientId = '10YEOW55EZHL3SW4OXZ5EFYVP4XOAHS35BY0PVREXP02ENSE';
const clientSecret = 'XTSPZ5HN0B4STL4CERF3ZFP2WQJJHVAG03IHUCWX1IANTQLZ';
const url = '';

// OpenWeather Info
const openWeatherKey = '5aa861fb76415f60dada3497623edf17';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Add AJAX functions here:
async function getVenues() {
    const city = $input.val();
    console.log(city);
    //const urlToFetch = 'https://api.foursquare.com/v3/places/search';
    // let urlToFetch = 'https://api.foursquare.com/v3/places/search?cursor=c3I6MTA&query=bangalore&';
    const settings = {
      async: true,
      crossDomain: true,
      url: 'https://api.foursquare.com/v3/places/search?near='+city,
      method: 'GET',
     // headers: {
       // accept: 'application/json',
       // Authorization: 'fsq3TMFWaDbzpr/llS59PGpTgsIFNoNQRH3HydXguz/wksI='
      //}
    };
    
    $.ajax(settings).done(function (response) {
      console.log(response);
    });
  }
  
  async function getForecast() {
    const settings = {
      async: true,
      crossDomain: true,
      url: 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=816049b05b0c824838d8a9f3393d038e',
      method: 'GET',
      // headers: {
     //  accept: 'application/json',
     //  Authorization: '816049b05b0c824838d8a9f3393d038e'
      // }
    };
    
    $.ajax(settings).done(function (response) {
      console.log('weather',response);
    });
  }
  
  
  // Render functions
  const renderVenues = (venues) => {
    $venueDivs.forEach(($venue, index) => {
      // Add your code here:
  
      let venueContent = '';
      $venue.append(venueContent);
    });
    $destination.append(`<h2>${venues[0].location.city}</h2>`);
  }
  
  const renderForecast = (day) => {
    // Add your code here:
    
      let weatherContent = '';
    $weatherDiv.append(weatherContent);
  }
  
  const executeSearch = () => {
    $venueDivs.forEach(venue => venue.empty());
    $weatherDiv.empty();
    $destination.empty();
    $container.css("visibility", "visible");
    getVenues();
    // getForecast();
    return false;
  }
  
  $submit.click(executeSearch)