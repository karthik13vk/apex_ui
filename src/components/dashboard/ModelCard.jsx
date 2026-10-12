import { Button } from "@mui/material";

const ModelCard = ({ title, description, buttonText }) => {
  return (
    <div className="p-6 transition-all duration-300 bg-white shadow-sm rounded-xl md:flex md:items-center md:justify-between hover:shadow-md">
      <div className="md:max-w-xl">
        <h3 className="text-2xl font-bold text-[#111827] mb-2">{title}</h3>
        <p className="text-[#6B7280] mb-4">{description}</p>
        <Button variant="contained" color="primary">
          {buttonText}
        </Button>
      </div>

      <div className="w-full h-40 mt-6 md:mt-0 md:w-72 rounded-xl bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400"></div>
    </div>
  );
};

export default ModelCard;
