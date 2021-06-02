const nom = document.querySelector('#name')
const email = document.querySelector('#email')
const birth = document.querySelector('#birth')
const tel = document.querySelector('#tel')
const mdp = document.querySelector('#mdp')
const mdp_ = document.querySelector('#mdp_')

const inscrire = document.querySelector('.inscrire')

let users = []


mdp_.oninput = () => {
    let newPassword = mdp.value
    if (mdp.value !== mdp_.value) {
        mdp_.style.borderColor = 'red'
    } else {
        mdp_.style.borderColor = 'rgb(132, 169, 204)'
    }
}

inscrire.addEventListener('click', () => {
    let user = {
        userName: nom.value,
        userEmail: email.value,
        userBirth: birth.value,
        userTel: tel.value,
        userMdp: mdp.value,
        userMdp_: mdp_.value
    }

    if (mdp.value !== mdp_.value) {
        return
    } else {
        users.push(user)
        localStorage.setItem('users', JSON.stringify(users))
    }

    user = {}
    
})

