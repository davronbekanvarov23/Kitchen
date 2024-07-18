import React from "react";

function FormInput({ name, label, type,placeholder }) {
  return (
    <label className="form-control w-full max-w-[700px]">
      <div className="label">
        <span className="label-text capitalize">{label}</span>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className="input input-bordered "
        name={name}
      />
    </label>
  );
}

export default FormInput;
