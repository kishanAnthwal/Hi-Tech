import Hero from "../components/Hero";
import Box from "../components/Box";
import Title from "../components/Title";
import Counter from "../components/Counter";
import Help from "../components/Help";
import Review from "../components/Review";
import "./home.css";
import { IoCallSharp, IoChatbubbleSharp } from "react-icons/io5";
import Placement from "../components/Placement";
const home = () => {
  let works = [
    {
      work: "Hitech Advance Mobile Repairing Training",
      content:
        "where students are prepared according to industry trend. Mobile Repairing Institute in Delhi, Hitech is most recommended Institute across the nation. It offers chip as well as advance Mobile Repairing Courses",
    },
    {
      work: " Hitech Laptop Repairing Training ",
      content:
        "We are No. 1 laptop Repairing Institute not just in Delhi, but across the India. We offer the short term Laptop Repairing Course which includes advance as well as Chip &amp; Card level Laptop Repairing Techniques in an affordable price.",
    },
    {
      work: "Chip/Card Level Laptop Course",
      content: `We give you an opportunity to enroll with Chip Level Service Course with the affordable price that gives you full knowledge of whole components.`,
    },
    {
      work: "Hitech Advance OCA Repairing Training",
      content: `Hi-Tech Institute is one of the best OCA Repairing Institute in Delhi. OCA Repairing is short term course you can become an expert within 15 days only and make a bright future with this course.`,
    },
  ];
  return (
    <>
      <Hero />
      <Box />
      <Title
        header="Your Dream is Our Vision"
        para="Courses to make you a repairing specialist"
      />
      <section>
        <div className="service flex_box">
          <div className="work">
            <Title
              header="How We Work"
              para="We've perfected a process to ensure that only the finest professionals, devoted to service excellence, join our family."
            />
            <div className="work_grid">
              {works.map((item, index) => (
                <div className="item" key={index}>
                  <ul>
                    <li>
                      <strong>{item.work}</strong>
                    </li>
                  </ul>
                  <p>{item.content}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="offer">
            <Title
              header="Our Offerings"
              para="We offer flexible scheduling to fit your busy lifestyle, ensuring both convenience and peace of mind."
            />
            <ul className="offers">
              <li>Highly Skilled Professionals</li>
              <li>Tailored Support</li>
              <li>Convenient Scheduling Options</li>
              <li>Dependability and Trust</li>
              <li>All-Inclusive Assistance</li>
              <li>Guaranteed Quality</li>
              <li>Security and Peace of Mind</li>
              <li>Committed to Your Satisfaction</li>
            </ul>

            <div className="flex_box flex_btn">
              <button className="call">
                <IoCallSharp />
                Call Us
              </button>
              <button className="chat">
                <IoChatbubbleSharp />
                Chat With Us
              </button>
            </div>
          </div>
        </div>
      </section>
      <Counter />
      <div className="review_section flex_box justify_evenly">
        <Review
          say="The baby caretaker we hired is simply amazing! She is kind, patient, and truly cares for my child as if they were her own. It gives me great peace of mind knowing my little one is in safe hands while I work. Thank you for this wonderful service!"
          name="Rahul Sharma"
        />
        <Review
          say="My cooking maid has transformed our dining experience! She prepares fresh, healthy, and absolutely delicious meals tailored to our preferences. The convenience and quality of service are outstanding. I no longer worry about daily meal prep!"
          name="Sneha M."
        />
        <Review
          say="Finding a trustworthy and efficient housemaid was a challenge until I found this service. The selection process was seamless, and my maid is incredibly reliable, polite, and thorough with her work. My home has never looked better!"
          name="Vikram"
        />
      </div>
      <Help />
      <Placement />
    </>
  );
};

export default home;
