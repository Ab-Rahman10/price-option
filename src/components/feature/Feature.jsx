import { AiFillCheckCircle } from "react-icons/ai";

const Feature = ({ feature }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-green-500">
        <AiFillCheckCircle></AiFillCheckCircle>
      </span>
      <p>{feature}</p>
    </div>
  );
};

export default Feature;
