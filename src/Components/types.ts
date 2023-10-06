
export type User = {
    username : string,
    email : string,
    password : string,
    phoneNo : string | Number
}

export type property = {
    propertyId: string,
    propertyDescription? : string, 
    propertyName? : string,
    propertAddress? : string,
    propertyPrice? : Number,
    propertyOwner? : string,
    propertyImage? : ImageData
}

export enum propertyCategories {
    MOST_POPULAR = "most popular",
    BY_BUDGET = "By Budget",
    BY_PROPERTY_TYPE = "By Property Type",
    BY_BHK = "By BHK"
}