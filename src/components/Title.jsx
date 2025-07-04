import "./title.css";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

const Title = (props) => {
  return (
    <div className="title-contaier text_center ">
      <h2><span><RiDoubleQuotesL/></span>{props.header}<span><RiDoubleQuotesR></RiDoubleQuotesR></span></h2>
      <p>{props.para}</p>
    </div>
  );
};

export default Title;
