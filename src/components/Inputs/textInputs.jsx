/* eslint-disable react/prop-types */
import './textInputs.css'

function TextInputs({setTextFormData, textFormData, errors, setErrors}) {

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: null, 
      }));
    }
    setTextFormData({ ...textFormData, [name]: value });
  };

  return (
    <div className="input-text-div">
      <label htmlFor="username">Username</label>
      <input
        required
        type="text"
        name="username"
        id="username"
        placeholder="Enter username"
        value={textFormData.username}
        onChange={handleChange}
      />
      {errors.username && <span className="error">{errors.username}</span>}
      <label htmlFor="password">Password</label>
      <input
        required
        type="password"
        name="password"
        id="password"
        placeholder="Enter password"
        aria-label="Your password is between 4 and 12 characteres"
        onChange={handleChange}
        value={textFormData.password}
      />
      {errors.password && <span className="error">{errors.password}</span>}
      <label htmlFor="textinput">Input Text Label</label>
      <input type="text" name="textinput" id="textinput" required onChange={handleChange} value={textFormData.textinput} />
      {errors.textinput && <span className="error">{errors.textinput}</span>}
    </div>
  );
}

export default TextInputs;
