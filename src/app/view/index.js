const inscription = document.querySelector('.inscription')
const connexion = document.querySelector('.connexion')
const message_inscription = document.querySelector('.message_inscription')
const message_connexion = document.querySelector('.message_connexion')
const log_in = document.querySelector('.log_in')
const sign_in = document.querySelector('.sign_in')
const valide_success = document.querySelector('.valide_success')
const valide_fail = document.querySelector('.valide_fail')
const overlay = document.querySelector('.overlay')
const pop_up_success = document.querySelector('.pop_up_success')
const pop_up_failure = document.querySelector('.pop_up_failure')
const inscrire = document.querySelector('.inscrire')
const connecter = document.querySelector('.connecter')

// Singin variables
const nom = document.querySelector('#name')
const email = document.querySelector('#email')
const birth = document.querySelector('#birth')
const tel = document.querySelector('#tel')
const mdp = document.querySelector('#mdp')
const mdp_ = document.querySelector('#mdp_')

// Send to the connexion page
inscription.addEventListener('click', () => {
    message_inscription.style.display = "none"
    message_connexion.style.display = "block"
    log_in.style.display = "none"
    sign_in.style.display = "flex"
})

// Send to the inscription page
connexion.addEventListener('click', () => {
    message_inscription.style.display = "block"
    message_connexion.style.display = "none"
    log_in.style.display = "flex"
    sign_in.style.display = "none"
})

// Close the confirmation pop up
valide_success.addEventListener('click', () => {
    overlay.style.display = "none"
    pop_up_success.style.display = "none"
    nom.value = ''
    email.value = ''
    birth.value = ''
    tel.value = ''
    mdp.value = ''
    mdp_.value = ''
})

valide_fail.addEventListener('click', () => {
    overlay.style.display = "none"
    pop_up_failure.style.display = "none"
})

// Sign in and show confirmation pop up
inscrire.addEventListener('click', (e) => {
    e.preventDefault()
    if (mdp.value !== mdp_.value) {
        overlay.style.display = "block"
        pop_up_success.style.display = "none"
        pop_up_failure.style.display = "flex"
    } else {
        overlay.style.display = "block"
        pop_up_failure.style.display = "none"
        pop_up_success.style.display = "flex"
    }
})