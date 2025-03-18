/* eslint-disable react/prop-types */
import "./textInputs.css";

function TextInputs({textFormData, setTextFormData}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTextFormData({ ...textFormData, [name]: value });

  }
  return (
    <div className="input-text-div">
      <label htmlFor="username">Username <abbr title="required">*</abbr></label>
      <input
        required
        type="text"
        name="username"
        id="username"
        placeholder="Enter username"
        value={textFormData.username}
        onChange={handleChange}
      />
      <label htmlFor="password">Password <abbr title="required">*</abbr></label>
      <input
        required
        type="password"
        name="password"
        id="password"
        placeholder="Enter password"
        aria-label="Your password is between 4 and 12 characteres"
        value={textFormData.password}
        onChange={handleChange}
      />
      <label htmlFor="textinput">Input Text Label <abbr title="required">*</abbr></label>
      <input
        type="text"
        name="textinput"
        id="textinput"
        required
        value={textFormData.textinput}
        onChange={handleChange}
      />
    </div>
  );
}

export default TextInputs;
