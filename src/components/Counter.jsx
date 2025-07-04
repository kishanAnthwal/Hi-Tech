import './counter.css'
import CountUp from "react-countup";
import { FaSmile, FaTrophy, FaMapMarkerAlt, FaUserShield } from "react-icons/fa";

const Counter = () => {
  const counters = [
    { icon: <FaSmile />, value: 232, text: "Happy Customers" },
    { icon: <FaTrophy />, value: 5, text: "Awards" },
    { icon: <FaMapMarkerAlt />, value: 4, text: "Cities" },
    { icon: <FaUserShield />, value: 1554, text: "Certified Professionals" },
  ];

  return (
    <div className="counter_container flex_box justify_evenly">
      {counters.map((item, index) => (
        <div className="counter_item" key={index}>
          <div className="icon">{item.icon}</div>
          <CountUp start={0} end={item.value} duration={3} delay={0.5} className='counter_number'/>
          <p className='counter_title'>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Counter;
