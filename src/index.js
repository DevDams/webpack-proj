import * as Lol from './app/sign/index.js'
import { login } from './app/login/index.js'
import '../src/style.css'

Lol.sign()
console.log(Lol.text)
login()


const inscription = document.querySelector('.inscription')
const connexion = document.querySelector('.connexion')
const message_inscription = document.querySelector('.message_inscription')
const message_connexion = document.querySelector('.message_connexion')
const log_in = document.querySelector('.log_in')
const sign_in = document.querySelector('.sign_in')
const valide = document.querySelector('.valide')
const overlay = document.querySelector('.overlay')
const pop_up = document.querySelector('.pop_up')
const inscrire = document.querySelector('.inscrire')
const connecter = document.querySelector('.connecter')

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
valide.addEventListener('click', () => {
    overlay.style.display = "none"
    pop_up.style.display = "none"
})

// Sign in and show confirmation pop up
inscrire.addEventListener('click', (e) => {
    e.preventDefault()
    overlay.style.display = "block"
    pop_up.style.display = "flex"
})
