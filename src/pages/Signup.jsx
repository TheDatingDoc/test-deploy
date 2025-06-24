import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import NameForm from "../components/signup-form-components/NameForm";
import BirthdayForm from "../components/signup-form-components/BirthdayForm";
import GenderForm from "../components/signup-form-components/GenderForm";
import InterestedInForm from "../components/signup-form-components/InterestedInForm";
import LookingForForm from "../components/signup-form-components/LookingForForm";
import UploadPhotoForm from "../components/signup-form-components/UploadPhotoForm";
import InterestsForm from "../components/signup-form-components/InterestsForm";
import Auth from "../utils/auth";

const Signup = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    // confirmPassword: "",
    birthday: "",
    gender: "",
    interestedIn: [],
    lookingFor: [],
    profileImage: null,
    interests: [],
  });


  const [addUser, { error }] = useMutation(ADD_USER);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhotoChange = (e) => {
    setFormData({ ...formData, profileImage: e.target.files[0] });
  };

  // move to the next step and update the main form data
  const handleNext = (newData) => {
    console.log("New data from form:", newData);

    setFormData({ ...formData, ...newData });
    setStep(step + 1);
  };

  // const handleBack = () => setStep(step - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data being submitted:", formData);
    try {

      // clear any existing tokens to ensure a new one is generated
      // Auth.logout();
      // localStorage.removeItem("id_token");
      // window.location.assign("/login");


      const { data } = await addUser({
        variables: { ...formData },
      });

      console.log("New token after signup:", data.addUser.token); // token received from the server
      // setTimeout(() => Auth.login(data.addUser.token), 1000); // slight delay for debugging
      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
    }
  };

  // render only based on the current step
  return (
    <div className="signup-container">
      {step === 1 && (
        <NameForm formData={formData} setFormData={setFormData} handleChange={handleChange} onNext={handleNext} />
      )}

      {step === 2 && (
        <BirthdayForm formData={formData} setFormData={setFormData} handleChange={handleChange} handleNext={handleNext} />
      )}

      {step === 3 && (
        <GenderForm formData={formData} setFormData={setFormData} handleChange={handleChange} handleNext={handleNext} />
      )}

      {step === 4 && (
        <InterestedInForm formData={formData} setFormData={setFormData} handleChange={handleChange} handleNext={handleNext} />
      )}

      {step === 5 && (
        <LookingForForm formData={formData} setFormData={setFormData} handleChange={handleChange} handleNext={handleNext} />
      )}

      {step === 6 && (
        <UploadPhotoForm formData={formData} setFormData={setFormData} handlePhotoChange={handlePhotoChange} handleNext={handleNext} />
      )}

      {step === 7 && (
        <InterestsForm formData={formData} setFormData={setFormData} handleChange={handleChange} handleSubmit={handleSubmit} />
      )}

      {error && <p>Error creating account: {error.message}</p>}
    </div>
  );
};

export default Signup;

