const FCM = require('fcm-node')

// var serverKey = require('./fcm.json') //put the generated private key path here    
var serverKey = '' // Add Server Key Here

var fcm = new FCM(serverKey)
// console.log(JSON.stringify(fcm))

var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
    to: '', // Add Token Here
    // collapse_key: 'Updates Available',

    notification: {
        body: 'Test',
        image: "<image>",
        title: 'Test',
        foreground: true,
        content_available: true,
        mutable_content: true
    },
    android: {
        notification: {
            imageUrl: 'https://foo.bar.pizza-monster.png'
        }
    }
}
fcm.send(message, (err, response) => {
    if (err) {
        console.log(err)
        console.log("Something has gone wrong!")
    } else {
        console.log("Successfully sent with response: ", response)
    }
})
