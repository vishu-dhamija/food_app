'use client';

import { useForm } from "react-hook-form";
import classes from "./contact-form.module.css";

export default function ContactForm({ onClose }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    alert("Thank you for reaching out! We'll get back to you soon.");
    reset();
    onClose();
  };

  return (
    <div className={classes.overlay}>
      <div className={classes.modal}>
        <button className={classes.closeButton} onClick={onClose}>
          ✖
        </button>
        <h2 className={classes.hd}>Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className={classes.pp}>
            <label htmlFor="firstName" className={classes.label}>
              First Name
            </label>
            <input
              id="firstName" className={classes.ip}
              {...register("firstName", { required: "First name is required", maxLength: 20 })}
            />
            {errors.firstName && (
              <span className={classes.error}>{errors.firstName.message}</span>
            )}
          </p>

          <p className={classes.pp}>
            <label htmlFor="lastName" className={classes.label}>
              Last Name
            </label>
            <input
              id="lastName" className={classes.ip}
              {...register("lastName", {
                pattern: { value: /^[A-Za-z]+$/i, message: "Only alphabets are allowed" },
              })}
            />
            {errors.lastName && (
              <span className={classes.error}>{errors.lastName.message}</span>
            )}
          </p>

          {/* <p className={classes.pp}>
            <label htmlFor="gender" className={classes.label}>
              Gender
            </label>
            <select id="gender" {...register("gender")}>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
            </select>
          </p> */}

          <p className={classes.pp}>
            <label htmlFor="email" className={classes.label}>
              Your Email
            </label>
            <input
              type="email"
              id="email" className={classes.ip}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && <span className={classes.error}>{errors.email.message}</span>}
          </p>

          <p className={classes.pp}>
            <label htmlFor="mobileNumber" className={classes.label}>
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobileNumber" className={classes.ip}
              {...register("mobileNumber", {
                required: "Mobile number is required",
                pattern: { value: /^[0-9]+$/, message: "Only numbers are allowed" },
                maxLength: { value: 15, message: "Maximum 15 digits allowed" },
              })}
            />
            {errors.mobileNumber && (
              <span className={classes.error}>{errors.mobileNumber.message}</span>
            )}
          </p>

          <p className={classes.pp}>
            <label htmlFor="message" className={classes.label}>
              Your Message
            </label>
            <textarea
              id="message" className={classes.ta}
              rows="5"
              {...register("message", { required: "Message is required" })}
            ></textarea>
            {errors.message && (
              <span className={classes.error}>{errors.message.message}</span>
            )}
          </p>

          <button type="submit" className={classes.btn}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
