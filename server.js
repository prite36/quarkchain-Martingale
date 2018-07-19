const Nightmare = require("nightmare")
const nightmare = Nightmare({ show: true })
const wallet = require("./wallet.js")
const betAmount ='0.01'

nightmare
    .goto('https://testnet.quarkchain.io/app/simple-game')
    .insert('#pk_input', wallet)
    .wait(1000)
    .click('.btn-primary')
    .wait("#bet_amount") 
    .evaluate(() =>{
        document.querySelector('#bet_amount').value = ''
    })
    .insert('#bet_amount', betAmount)
    .wait(1000)
    .click(':nth-child(1) > .btn-primary')
    .wait(1500)
    .click('.btn-danger')
    .evaluate(() => {
        let status = '1'
        setInterval(() => {
            status = document.querySelector(".simple-game-status").innerText
            console.log(status)
        }, 1000)
        
    })
    .catch(error => {
        console.error('Search failed:', error)
    })