const URL_JSON = 'https://jsonplaceholder.typicode.com/users'
const LIST = document.querySelector(".list")

async function getResponse(url){
    await fetch(url)
    .then(res => res.json())
    .then(data => {
        data.forEach(user => {
            const ID = user.id
            const NAME  = user.name
            const li = document.createElement('li')
            li.classList.add('list__item')
            li.innerHTML = NAME
            li.addEventListener('click', function(){
                window.location.href = `./user.html?id=${ID}&user=${NAME}`
            })
            LIST.appendChild(li)
        });
    })
    .catch(err => console.log(err))
}

getResponse(URL_JSON)