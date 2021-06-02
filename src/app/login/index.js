const connexion_email = document.querySelector('#connexion_email')
const connexion_password = document.querySelector('#connexion_password')
const connecter = document.querySelector('.connecter')

// Pop up
const overlay = document.querySelector('.overlay')
const success = document.querySelector('.success')
const pop_up_success = document.querySelector('.pop_up_success')
const pop_up_failure = document.querySelector('.pop_up_failure')

// Get users from local storage
const users = JSON.parse(localStorage.getItem('users'))

connecter.addEventListener('click', (e) => {
    e.preventDefault()
    for (let i = 0; i < users.length; i++) {
        if (connexion_password.value !== users[i].userMdp) {
            overlay.style.display = "block"
            pop_up_success.style.display = "none"
            pop_up_failure.style.display = "flex"
        } else if (connexion_email.value !== users[i].userEmail) {
            overlay.style.display = "block"
            pop_up_success.style.display = "none"
            pop_up_failure.style.display = "flex"
        } else {
            success.style.display = "flex"
        }
    }
})