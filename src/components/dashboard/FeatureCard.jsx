import { Button } from "@mui/material";

const FeatureCard = ({ icon, title, description, buttonText }) => {
  return (
    <div className="p-6 transition-all duration-300 bg-white shadow-sm rounded-xl hover:shadow-md">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#EEEAFE] text-[#6C63FF] mb-4">
        {icon}
      </div>

      <h3 className="text-lg font-semibold text-[#111827] mb-2">
        {title}
      </h3>

      <p className="text-[#6B7280] mb-4 text-sm">
        {description}
      </p>

      <Button variant="outlined" color="primary">
        {buttonText}
      </Button>
      
    </div>
  );
};

export default FeatureCard;
