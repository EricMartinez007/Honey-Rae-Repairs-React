import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getCustomerByUserId } from "../../services/customerService"
import "./Customers.css"

export const CustomerDetails = () => {
    // /customers/3 (path in our app) 3 is the VALUE 
    // path="/customers/:customerId" customerId is the KEY 

    const [customer, setCustomer] = useState({})

    //useParams is going to return to us an Obj with that key-value pair. The obj here has to match route path name we assigned it in App.jsx
    const {customerId}= useParams() // {customerId: 3}

    useEffect(() => {
        getCustomerByUserId(customerId).then(customerArray => {
            const customerObj = customerArray[0]
            setCustomer(customerObj)
        })
    }, [customerId])

    return (
        <section className="customer">
            <header className="customer-header">{customer.user?.fullName}</header>
            <div>
                <span className="customer-info">Email : </span>
                {customer.user?.email}
            </div>
            <div>
                <span className="customer-info">Address : </span>
                {customer.address}
            </div>
            <div>
                <span className="customer-info">Phone Number : </span>
                {customer.phoneNumber}
            </div>
        </section>
    )
}