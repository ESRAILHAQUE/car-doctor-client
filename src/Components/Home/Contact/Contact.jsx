import calender from "../../../assets/images/contact/calender.png";
import location from "../../../assets/images/contact/location.png";
import call from "../../../assets/images/contact/call.png";
function Contact() {
  return (
    <div className="flex flex-col lg:flex-row gap-4 text-center lg:justify-around bg-black text-white py-20 mx-4 rounded-lg animate__animated animate__rotateInDownLeft">
      <div className="flex gap-6 items-center mb-3 justify-center ">
        <img src={calender} alt="" />
        <div>
          <p>We are open monday-friday</p>
          <h2 className="text-3xl">7:00 am - 9:00 pm</h2>
        </div>
      </div>

      <div className="flex gap-3 items-center mb-3 justify-center ">
        <img src={call} alt="" />
        <div>
          <p>Have a question?</p>
          <h2 className="text-3xl">+2546 251 2658</h2>
        </div>
      </div>

      <div className="flex gap-3 items-center mb-3 justify-center ">
        <img src={location} alt="" />
        <div>
          <p>Need a repair? our address</p>
          <h2 className="text-3xl">Baluchor Point, Sylhet</h2>
        </div>
      </div>
    </div>
  );
}
export default Contact