import ContactInfo from "../components/ContactInfo";
import Product from "../pages/Products"

import { Outlet } from "react-router-dom"

const ContactLayout = () => {
  return (
    <div>

      <Product />

      <Outlet />

    </div>
  )
}
export default ContactLayout;