const TABLE = document.querySelector('.table__row')
const getURL = new URLSearchParams(window.location.search)
id = getURL.get('id')
console.log(id)


fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
.then(res => res.json())
.then(user => {
    
    
    const {street, suite, city, zipcode} = user.address
    const {lat, lng} = user.address.geo
    const USERNAME = document.createElement('TD')
    USERNAME.classList.add("table__info")

    const EMAIL = document.createElement('TD')
    EMAIL.classList.add("table__info")

    const STREET = document.createElement('TD')
    STREET.classList.add("table__info")

    const SUITE = document.createElement('TD')
    SUITE.classList.add("table__info")

    const CITY = document.createElement('TD')
    CITY.classList.add("table__info")

    const ZIPCODE = document.createElement('TD')
    ZIPCODE.classList.add("table__info")

    const LAT = document.createElement('TD')
    LAT.classList.add("table__info")

    const LNG = document.createElement('TD')
    LNG.classList.add("table__info")

    USERNAME.innerHTML = user.username
    EMAIL.innerHTML = user.email
    STREET.innerHTML = street
    SUITE.innerHTML = suite
    CITY.innerHTML = city
    ZIPCODE.innerHTML = zipcode
    LAT.innerHTML = lat
    LNG.innerHTML = lng

    TABLE.appendChild(USERNAME)
    TABLE.appendChild(EMAIL)
    TABLE.appendChild(STREET)
    TABLE.appendChild(SUITE)
    TABLE.appendChild(CITY)
    TABLE.appendChild(ZIPCODE)
    TABLE.appendChild(LAT)
    TABLE.appendChild(LNG)
})