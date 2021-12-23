// function submitData(userName, userEmail) {
//     return fetch(`http://localhost:3000/users`, {
//         method: `POST`,
//         headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//         },
//         body: JSON.stringify({
//             name:`${userName}`, 
//             email:`${userEmail}`,
//         })
//     }) 
// }

function submitData(userName, userEmail) {
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            name: `${userName}`,
            email: `${userEmail}`
        }) 
    }
    return fetch('http://localhost:3000/users', configurationObject)
    .then(res => res.json())
    .then(obj => {
        document.querySelector('body').append(obj.id)
    })
    .catch(error => {
        document.querySelector('body').append("Unauthorized Access")
    })
}

submitData('Bob', 'bob@bob.com')