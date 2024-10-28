import Feature from "../feature/Feature";

const Option = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-blue-500 text-white p-5 rounded-lg flex flex-col">
      <h2 className="text-center">
        <span className="text-5xl">{price}</span>
        <span className="text-2xl">/mon</span>
      </h2>
      <p className="text-lgn font-bold text-center mt-2">{name}</p>
      <p className="mt-6 flex-grow">
        {features.map((feature, index) => (
          <Feature key={index} feature={feature}></Feature>
        ))}
      </p>
      <button className="w-full bg-green-500 py-2 mt-5">Buy Now</button>
    </div>
  );
};

export default Option;
