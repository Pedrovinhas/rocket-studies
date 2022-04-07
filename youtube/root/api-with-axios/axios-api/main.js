const url = "http://localhost:5500/api"
const newUser = {
    name: "Pedrojunio",
    avatar: "http://lorempixel.com/400/200/",
    city: "Rio do Sul"
}
const userUpdated = {
    name: "Ismael",
    avatar: "http://lorempixel.com/400/200/",
    city: "Salvador"
}

function getUsers () {
     axios.get(url)
     .then( response => {
         const data = response.data
         renderApiResults.textContent = JSON.stringify(data)
     })
     .catch(error => console.log(error))
}   

function addNewUser() {
    axios.post(url, newUser)
    .then (response => {
        alert(JSON.stringify(response.data))
    })
    .catch (error => console.log(error))
}

function updateUser () {
    axios.put(`${url}/2`, userUpdated)
    .then(response => {
        alert(JSON.stringify(response.data))
        })
    .catch(error => console.log(error))
}

function deleteUser() {
    axios.delete(`${url}/21`)
    .then(response => {
        alert(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
}

function getOneUser() {
    axios.get(`${url}/8`)
    .then(response => {
        const data = response.data
        renderResults.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error))
}

deleteUser()
//updateUser()
// addNewUser()
getOneUser()
getUsers() 
