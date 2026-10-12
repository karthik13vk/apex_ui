import React, { useState } from "react";

function StepOne({ formData, setFormData, nextStep }) {
  return (
    <div>
      <h2>Step 1: Personal Info</h2>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) =>
          setFormData({ ...formData, name: e.target.value })
        }
      />
      <button onClick={nextStep}>Next</button>
    </div>
  );
}

function StepTwo({ formData, setFormData, nextStep, prevStep }) {
  return (
    <div>
      <h2>Step 2: Contact Info</h2>
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
      />
      <div>
        <button onClick={prevStep}>Back</button>
        <button onClick={nextStep}>Next</button>
      </div>
    </div>
  );
}

function StepThree({ formData, prevStep }) {
  const handleSubmit = () => {
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <div>
      <h2>Step 3: Confirm</h2>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <div>
        <button onClick={prevStep}>Back</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default function StepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  switch (step) {
    case 1:
      return (
        <StepOne
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      );
    case 2:
      return (
        <StepTwo
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 3:
      return (
        <StepThree
          formData={formData}
          prevStep={prevStep}
        />
      );
    default:
      return null;
  }
}