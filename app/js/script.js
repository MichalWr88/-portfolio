/* header element*/

console.clear();

// const git = pegasus('https://api.github.com/users/MichalWr88/repos');

//     git.then(
//         // success handler
//         function(data, xhr) {
//             // do something useful like
//             console.log(data);
//         },
//         // error handler (optional)
//         function(data, xhr) {
//             console.error(data, xhr.status)
//         }
//     );




function initMap() {
    var uluru = { lat: 51.1103492, lng: 17.0342441 };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: uluru,
        title: 'Wrocław',
        styles: [{
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#193341"
                }]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#2c5a71"
                }]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{
                        "color": "#29768a"
                    },
                    {
                        "lightness": -37
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#406d80"
                }]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#406d80"
                }]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [{
                        "visibility": "on"
                    },
                    {
                        "color": "#3e606f"
                    },
                    {
                        "weight": 2
                    },
                    {
                        "gamma": 0.84
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#ffffff"
                }]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [{
                        "weight": 0.6
                    },
                    {
                        "color": "#1a3541"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#2c5a71"
                }]
            }
        ]
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

// 
// 
// fetch('https://api.github.com/users/MichalWr88')  
//     .then(function (response) {  
//         // response jest instancją interfejsu Response
//         if (response.status !== 200) {  
//             return Promise.reject('Zapytanie się nie powiodło');  
//         }
//    let a = response.json();
//    console.log(response);
//         // zwracamy obiekt typu Promise zwracający dane w postaci JSON
//         return a;  
//     }  
//   )  
//   .then(this._doSomethingWithJson)
//   .catch(this._catchError);