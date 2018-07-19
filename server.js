const Nightmare = require("nightmare")
const nightmare = Nightmare({ show: true })
const wallet = require("./wallet.js")
const betAmount ='0.05'

nightmare
    .goto('https://testnet.quarkchain.io/app/simple-game')
    .insert('#pk_input', wallet)
    .wait(1000)
    .click('.btn-primary')
    //   .evaluate(() => {
    //     return document.querySelector(".simple-game-status").innerText
    //   })
    //   .then(text => {
    //       console.log(text);  
    //   })
    .wait("#bet_amount") 
    .evaluate(() =>{
        document.querySelector('#bet_amount').value = ''
    })
    .insert('#bet_amount', betAmount)
    //   .click('.btn.btn-primary.btn-sm.collapsed')
    .catch(error => {
        console.error('Search failed:', error)
    })