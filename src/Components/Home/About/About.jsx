import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

function About() {
  return (
    <div className="lg:pb-8 mx-2">
      <h2 className="text-red-600 text-center font-bold my-12 text-5xl animate__animated animate__jello">
        About Us
      </h2>
      <div className="flex flex-col lg:flex-row mx-2 gap-6 mt-6">
        {/* Picture */}
        <div className="relative mx-auto">
          <img
            className="lg:w-[70%]  rounded animate__animated animate__backInRight animate__slow"
            src={person}
            alt=""
          />
          <img
            className="absolute right-44 -bottom-7 hidden lg:block lg:w-96 md:w-80 rounded-lg border-8 animate__animated animate__backInLeft animate__slow"
            src={parts}
            alt=""
          />
        </div>
        {/* Writeen */}
        <div className="mt-6  space-y-6 animate__animated animate__fadeInDown">
          <h2 className="text-5xl">
            We are qualified & of experience in this field
          </h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn btn-error text-white animate__animated animate__rollIn">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
}
export default About