import Option from "../option/Option";

const PriceOption = () => {
  const gymMembershipOptions = [
    {
      id: 1,
      name: "Basic Membership",
      price: 30, // Price in dollars
      features: [
        "Access to gym facilities",
        "Free group classes",
        "1 personal training session per month",
        "Free fitness assessment",
      ],
    },
    {
      id: 2,
      name: "Standard Membership",
      price: 50, // Price in dollars
      features: [
        "Access to gym facilities",
        "Unlimited group classes",
        "3 personal training sessions per month",
        "Free fitness assessment",
        "Discount on nutrition plans",
      ],
    },
    {
      id: 3,
      name: "Premium Membership",
      price: 80, // Price in dollars
      features: [
        "Access to gym facilities",
        "Unlimited group classes",
        "Unlimited personal training sessions",
        "Free fitness assessment",
        "Discount on nutrition plans",
        "Access to spa and wellness services",
      ],
    },
    {
      id: 4,
      name: "Family Membership",
      price: 120, // Price in dollars
      features: [
        "Access for up to 4 family members",
        "Unlimited group classes for all members",
        "2 personal training sessions per month for each member",
        "Free fitness assessments for all members",
        "Discount on nutrition plans",
      ],
    },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-6 px-6 mt-10">
      {gymMembershipOptions.map((option) => (
        <Option key={option.id} option={option}></Option>
      ))}
    </div>
  );
};

export default PriceOption;
