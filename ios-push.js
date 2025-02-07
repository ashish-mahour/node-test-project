if (process.argv?.length === 0)  {
    console.log("APNS Token Not Present")
    return;
}
const apn = require('node-apn');
var apnProvider = new apn.Provider({
token: {
    key: './AuthKey_F7LD5B38C3.p8', // optionally: fs.readFileSync('./certs/key.p8')
    keyId: 'F7LD5B38C3',
    teamId: 'VKVQ7DZ2QT',
},
production: false
});
var note = new apn.Notification()
note.rawPayload = {
    aps: {
        alert: {
            title: "Hello CM User!!",
            body: "Welcome to Club Marriott!!"       
        },
        badge: 0,
        "mutable-content": 1,
        "content-available": 1,
        sound: "default",
        category: "br.com.inngage.Custom-Notification-Interface.notification",
        provider: "inngage",
        imageURL: "https://cdn.i-scmp.com/sites/default/files/d8/images/methode/2020/08/28/fda91d6c-e6b0-11ea-8600-abe4f45458c9_image_hires_171751.png"
    },
    imageURL: "https://cdn.i-scmp.com/sites/default/files/d8/images/methode/2020/08/28/fda91d6c-e6b0-11ea-8600-abe4f45458c9_image_hires_171751.png",
    _dId: 1,
    _mId: 1,
    // fcm_options: {
    //     image: "https://cdn.i-scmp.com/sites/default/files/d8/images/methode/2020/08/28/fda91d6c-e6b0-11ea-8600-abe4f45458c9_image_hires_171751.png"
    // },
    "media-attachment-url": "https://www.cvent.com/sites/default/files/image/2023-02/five%20star%20hotel%20lobby.jpg"
};
note.topic = "com.tlcgroup.customer.clubmarriott"
let deviceToken = process.argv[process.argv.length - 1]
apnProvider.send(note, deviceToken).then( (result) => {
    // see documentation for an explanation of result
    console.log(JSON.stringify(result))
  });
