import { useParams } from "react-router-dom"

export const CustomerDetails = () => {
    // /customers/3 (path in our app) 3 is the VALUE 
    // path="/customers/:customerId" customerId is the KEY 

    //useParams is going to return to us an Obj with that key-value pair. The obj here has to match route path name we assigned it in App.jsx
    const {customerId}= useParams() // {customerId: 3}

    // Will return Customer #3
    return <div>Customer #{customerId}</div>
}