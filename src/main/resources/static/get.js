const API = `http://localhost:8080`;

function getRoles() {
    fetch(`${API}/allRoles`).then((res) => res.json())
        .then((data) => {
            let output = "";
            for (let role of data) {
                output += `<option>${role.role}</option>`;
            }
            ;
            // data.forEach(function (role) {
            //     output += `<option>${role.role}</option>`;
            // });
            // document.getElementById(`roleNew`).innerHTML;
            document.getElementById(`roleEdit`).innerHTML = output;
            document.getElementById(`roleDelete`).innerHTML = output;
        })
}

getRoles()
getUsers()

function getUsers() {
    fetch(`${API}/allUsers`)
        .then((res) => res.json())
        .then((data) => {
            let output = ``;
            data.forEach(function (user) {

                let userRoles = ``;
                for (let i = 0; i < user.roles.length; i++) {
                    userRoles += `${user.roles[i].role} `
                }

                output += `
                <tr>
                <td id="id${user.id}">${user.id}</td>
                <td id="firstName${user.id}">${user.firstName}</td> 
                <td id="lastName${user.id}">${user.lastName}</td>
                <td id="age${user.id}">${user.age}</td>
                <td id="email${user.id}">${user.email}</td>
                <td id="roles${user.id}">${userRoles}</td>
                <td>
                <a class="btn btn-info" role="button"
                data-toggle="modal" data-target="#edit" id="callModalEdit"
                onclick="openModalWindow(${user.id})">Edit</a>
                </td>
                <td>
                <a class="btn btn-danger" role="button"
                data-toggle="modal" data-target="#delete" id="delete-post"
                onclick="openModalWindowDel(${user.id})">Delete</a>
                </td>
              </tr>
          `;
            });
            document.getElementById(`allUsers`).innerHTML = output;
        })
}

const URL = `http://localhost:8080/getUser`

function getUser() {

    fetch(URL).then((res) => res.json())
        .then((user) => {
            let userRoles = user.roles.map((item) => item.role).join(` `);
            let output = `<tr>
                <td>${user.id}</td>
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.age}</td>
                <td>${user.email}</td>
                <td>${userRoles}</td>
              </tr>`;

            document.getElementById(`gUser`).innerHTML = output;
        })
}

function getHeader() {
    fetch(URL).then((res) => res.json())
        .then((user) => {
            let userRoles = ``;
            for (let i = 0; i < user.roles.length; i++) {
                userRoles += `${user.roles[i].role} `
            }

            for (let role of data) {
                output += `<option>${role.role}</option>`;
            };


            let output = ``;
            output += `${user.email} with roles: ${userRoles}`;
            document.getElementById("gHed").innerHTML = output;
        })
}

getHeader()
getUser()