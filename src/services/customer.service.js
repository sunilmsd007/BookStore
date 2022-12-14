import CustomerDetails from '../models/customers.model';

//add customer details
export const addCustomerDetails = async (body) => {
    let Details = {
        name: body.name,
        phoneNumber: body.phoneNumber,
        addressType: body.addressType,
        fullAddress: body.fullAddress,
        city: body.city,
        landmark: body.landmark,
        locality: body.locality,
        state: body.state,
        pinCode: body.pinCode
    };
    const findCustomer = await CustomerDetails.findOne({ userID: body.userId });
    if (findCustomer == null) {
        const createCustomer = await CustomerDetails.create({ userID: body.userId, customer: [Details] });
        return createCustomer;
    }
    else {
        const addCustomer = await CustomerDetails.findOneAndUpdate(
            {
                _id: findCustomer._id
            },
            { $push: { customer: Details } },
            {
                new: true
            }
        );
        return addCustomer;
    }
};