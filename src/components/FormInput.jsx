import React from "react";

function FormInput({ name, label, type, placeholder, size }) {
  return (
    <label className={`form-control w-full ${size ? size : "max-w-[700px]"}`}>
      <div className="label">
        <span className="label-text capitalize font-bold">{label}</span>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className="input input-bordered input-success "
        name={name}
      />
    </label>
  );
}

export default FormInput;
