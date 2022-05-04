const url = "https://zomatoajulypi.herokuapp.com/location"
const rurl = "https://zomatoajulypi.herokuapp.com/restaurant?stateId="

const getCity = async() => {
    let response = await fetch(url);
    let data = await response.json()
    data.map((item) => {
        let element = document.createElement('option') // <option></option>
        let data =document.createTextNode(item.state) // Delhi
        element.appendChild(data) //<option>Delhi</option>
        element.value = item.state_id //<option value="1">Delhi</option>
        document.getElementById('city').appendChild(element)
        /* 
            <select>
                <option>Delhi</option>
            </select>
        */
    })
}

const getHotel = async() => {
    let cityId = document.getElementById('city').value;
    let hotels = document.getElementById('hotels');
    while(hotels.length > 0){
        hotels.remove(0)
    }
    let response = await fetch(`${rurl}${cityId}`);
    let data = await response.json()
    data.map((item) => {
        let element = document.createElement('option')
        let data =document.createTextNode(`${item.restaurant_name} | ${item.address}`)
        element.appendChild(data)
        hotels.appendChild(element)
    })
}