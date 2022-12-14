import { Schema, model } from 'mongoose';

const customerSchema = new Schema(
    {
        userID: {
            type: String
        },
        customer: [{
            name: {
                type: String
            },
            phoneNumber: {
                type: String
            },
            addressType: {
                type: String,

            },
            fullAddress: {
                type: String,

            },
            city: {
                type: String,
            },
            landmark: {
                type: String
            },
            locality: {
                type: String,
            },
            state: {
                type: String
            },
            pinCode: {
                type: String
            }  
        }]
    }
);

export default model('CustomerDetails', customerSchema);