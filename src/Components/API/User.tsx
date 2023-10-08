

const get_user_api = () =>{
     
}

// propertyId: string,
//     propertyDescription? : string, 
//     propertyName? : string,
//     propertAddress? : string,
//     propertyPrice? : Number,
//     propertyOwner? : string,
//     propertyImage? : ImageData
const propertyData = [ {
    "propertyId" : "1",
    "propertyName":"Dammana Sqaure",
    "propertAddress": "No.204/356, Kurunegala Rd.",
    "propertyPrice": 114675,
    "propertyOwner":"Anish",
    "propertyImage":"https://www.investopedia.com/thmb/bfHtdFUQrl7jJ_z-utfh8w1TMNA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/houses_and_land-5bfc3326c9e77c0051812eb3.jpg"
   
},
{
    "propertyId" : "2",
    "propertyName":"Patia",
    "propertAddress": "No.204/356, Kurunegala Rd.",
    "propertyPrice": 114675,
    "propertyOwner":"Anish",
    "propertyImage":"data:image/jpeg;base64,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"
   
},
{
    "propertyId" : "3",
    "propertyName":"Club town",
    "propertAddress": "No.204/356, Kurunegala Rd.",
    "propertyPrice": 114675,
    "propertyOwner":"Golu",
    "propertyImage":"https://im.proptiger.com/1/657102/6/z-estates-club-town-elevation-411080.jpeg"
   
},
{
    "propertyId" : "4",
    "propertyName":"Vaishno Monarch",
    "propertAddress": "No.204/356, Kurunegala Rd.",
    "propertyPrice": 114675,
    "propertyOwner":"Cutu",
    "propertyImage":"https://img.staticmb.com/mbimages/project/Photo_h300_w450/2020/11/24/Project-Photo-13-Vaishno-Greens-Bhubaneswar-5198179_600_800_300_450.jpg"
   
},
]

export {propertyData}