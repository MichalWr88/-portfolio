//0.3.5
function pegasus(a, b, c) { return c = new XMLHttpRequest, c.open("GET", a), a = [], pegasus.timeout && (c.timeout = pegasus.timeout), c.ontimeout = function(a) { b = a }, c.onreadystatechange = c.then = function(d, e, f, g) { if (d && d.call && (a = [, d, e]), b && a[2] && a[2](b, c), 4 == c.readyState && (f = a[0 | c.status / 200])) { try { g = JSON.parse(c.responseText) } catch (a) { g = null } f(g, c) } }, c.send(), c }

/* header element*/

(function(){
    let carusel = document.getElementById('slider'),
        list = document.querySelector('.slider__list').children,
        items = document.querySelector('.slider__list').children,
        tabItems = Array.from(list),
        btnNext = carusel.querySelector('.slider__btn--next'),
        btnPrev = carusel.querySelector('.slider__btn--prev');
        btnNext.addEventListener('click', function(){
        
            let item = carusel.querySelector('.slider__elem-first'),
                nextElem = item.nextElementSibling;
                item.className = 'slider__elem';

                if(nextElem  == null){
                nextElem = items[0];    
                }
                nextElem.className = 'slider__elem-first';
                nextElem.style.order = '1';
                
                

for (j = 2; j <= items.length+1; ++j) {
        nextElem = nextElem.nextElementSibling;
    if (nextElem == null) {
        nextElem = items[0];
    }
    nextElem.style.order = j.toString();
}
     // list.classList.remove('is-back');
        }, false);


        btnPrev.addEventListener('click', function(){
            let item = carusel.querySelector('.slider__elem-first'),
                nextElem = item.previousElementSibling;
                item.className = 'slider__elem';
                
                if(nextElem  == null){
                nextElem = items[items.length+1];    
                }
                nextElem.className = 'slider__elem-first';
                nextElem.style.order = '1';
                

for (j = 2; j <= items.length+1; ++j) {
        nextElem = nextElem.previousElementSibling;
    if (nextElem == null) {
        nextElem = items[items.length-1];
        console.log(items[11]);
    }
    nextElem.style.order = j.toString();
}
     
        }, false)


        
})();



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
    const cord = { lat: 51.1103492, lng: 17.0342441 };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: cord,
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
        position: cord,
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