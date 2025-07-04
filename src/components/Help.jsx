import "./help.css";
import { IoArrowForward } from "react-icons/io5";
const Help = () => {
  return (
    <section className="help">
      <div className="callback-container  align_center flex_box ">
        <p>Contact us today to discuss your domestic help needs.</p>
        <form
          className="callback-form"
          action="https://formspree.io/f/mblgjazw"
          method="POST"
        >
          <select required name="Type of Service">
            <option value="mobile">Mobile Reapairing</option>
            <option value="laptop">Laptop Reapairing</option>
            <option value="hard_software">Hardware & Software Course</option>
            <option value="EMMC">EMMC Reapairing Course</option>
            <option value="OCA">OCA Reapairing Course</option>
            <option value="iphone">Iphone Reapairing</option>
          </select>

          <input type="text" placeholder="Name *" required  name="Name"/>

          <input type="tel" placeholder="Phone number *" required name="Phone Number" />

          <button type="submit">
            Get a callback <IoArrowForward />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Help;
