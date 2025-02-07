const FCM = require('fcm-node')

// var serverKey = require('./fcm.json') //put the generated private key path here    
var serverKey = 'AAAAdlmIxCg:APA91bFPCRgJQ6uxKHntAjFqCrK2OVtp9une-3FzGEVAy2-T__VUVnxtp1wJIoJeOyv4krsFZbMWcZUJBoGR9dPj4YLLQKBnaVVvnj4oUFKHMoFRnY01DY9Z7CUAmFC6kuvITz_qgD9x'

var fcm = new FCM(serverKey)
console.log(JSON.stringify(fcm))

var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
    to: 'cYOUSQDTmUNIjBcN65NBdZ:APA91bHnfxProG0zOQSohVVUUe9XXFDKOQGC3qqa4cw8o_Mkw0Qq5Amjbw8u5tZjaTE6PLGKwnTclWyXDAMIGZwcStAodbex_E9GZ8_0jk5bBU8fEDuKAyQ',
    // collapse_key: 'Updates Available',

    notification: {
        body: 'Reservation confirmed At K31! ',
        image: "https://prod-tlc.my.salesforce-sites.com/clubmarriott/resource/1611744960000/TLCLogo",
        title: 'Reservation at k3',
        foreground: true,
        content_available: true,
        mutable_content: true
    },
    android: {
        notification: {
            imageUrl: 'https://foo.bar.pizza-monster.png'
        }
    },
    data: {
        obj: 1, obh1: 2,
        forceShow: true
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
