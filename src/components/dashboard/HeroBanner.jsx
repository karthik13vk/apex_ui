import { Button } from "@mui/material";

const HeroBanner = () => {
  return (
    <div className="rounded-2xl p-10 text-white bg-gradient-to-r from-[#6C63FF] to-[#8E7CFF] shadow-sm">
      <h2 className="mb-4 text-3xl font-bold md:text-4xl">
        Start Your AI Journey
      </h2>
      <p className="max-w-2xl mb-6">
        Compass is a cutting-edge AI platform designed to elevate productivity
        and drive smarter decision-making.
      </p>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#fff",
          color: "#6C63FF",
          "&:hover": { backgroundColor: "#f3f4f6" },
        }}
      >
        Start Free Trial
      </Button>
    </div>
  );
};

export default HeroBanner;
