// function a() {
//     console.log('Hello World')
// }

// a();

// a = 10;

// a();

// const myCity = {
//     city: 'New York',
//     popular: true,
//     country: 'USA'
// }

// myCity.city = 'Las Vegas';


// console.log(myCity.city);

// console.log(myCity.popular);

// const myCity = {
//     city: 'New York',
// }

// myCity.popular = true;

// console.log(myCity);

// myCity.country = 'USA';

// console.log(myCity);


const myCity = {
    city: 'New York',
    popular: true,
    country: 'USA'
}

delete myCity.country;

console.log(myCity)

const myCity = {
    city: 'New York'
}

myCity['popular'] = true

console.log(myCity)

const countryPropertyName = 'country'

myCity[countryPropertyName] = 'USA'

console.log(myCity)

const myCity = {
    city: 'New York',
    info: {
        isPopular: true,
        country: 'USA'
    }
}

console.log(myCity.info.isPopular)

delete myCity.info['isPopular']

console.log(myCity)


const myCity = {
    city: 'New York',
    cityGreeting: function () {
        console.log('Greetings!!')
    }
}

myCity.cityGreeting()

const myCity = {
    city: 'New York',
    cityGreeting() {
        console.log('Greetings!!')
    }
}

myCity.cityGreeting()