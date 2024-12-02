'use client';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import classes from './contact-form.module.css';
import Link from 'next/link';

// Form data structure
const ContactForm = ({ onClose }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [formResponse, setFormResponse] = useState(null); // To store the simulated response
  const [showCommunityPerksModal, setShowCommunityPerksModal] = useState(false); // For Community Perks modal

  // Simulate fetching a random image on component mount
  useEffect(() => {
    // Example useEffect implementation (can be removed if unused)
    console.log("ContactForm mounted");
  }, []); // Add empty dependency array to ensure it runs only once on mount

  // Form submission handler
  const onSubmit = (data) => {
    setIsLoading(true);

    setTimeout(() => {
      // Simulate successful form submission
      setFormResponse({
        message: "Thank you for reaching out! We'll get back to you soon.",
        data,
      });

      // Reset form and show modals
      reset();
      setShowCommunityPerksModal(true);
      setIsLoading(false);
    }, 1000); // Simulate network delay
  };

  // Function to close the Community Perks modal
  const closeCommunityPerksModal = () => {
    setShowCommunityPerksModal(false);
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
            <label htmlFor="firstName" className={classes.label}>First Name</label>
            <input
              id="firstName" className={classes.ip}
              {...register('firstName', { required: 'First name is required' })}
            />
            {errors.firstName && <span className={classes.error}>{errors.firstName.message}</span>}
          </p>

          <p className={classes.pp}>
            <label htmlFor="lastName" className={classes.label}>Last Name</label>
            <input
              id="lastName" className={classes.ip}
              {...register('lastName', { required: 'Last name is required' })}
            />
            {errors.lastName && <span className={classes.error}>{errors.lastName.message}</span>}
          </p>

          <p className={classes.pp}>
            <label htmlFor="email" className={classes.label}>Your Email</label>
            <input
              type="email" id="email" className={classes.ip}
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && <span className={classes.error}>{errors.email.message}</span>}
          </p>

          <p className={classes.pp}>
            <label htmlFor="mobileNumber" className={classes.label}>Mobile Number</label>
            <input
              type="tel" id="mobileNumber" className={classes.ip}
              {...register('mobileNumber', { required: 'Mobile number is required' })}
            />
            {errors.mobileNumber && <span className={classes.error}>{errors.mobileNumber.message}</span>}
          </p>

          <p className={classes.pp}>
            <label htmlFor="message" className={classes.label}>Your Message</label>
            <textarea
              id="message" className={classes.ta}
              rows="5"
              {...register('message', { required: 'Message is required' })}
            ></textarea>
            {errors.message && <span className={classes.error}>{errors.message.message}</span>}
          </p>

          <button type="submit" className={classes.btn} disabled={isLoading}>
            {isLoading ? 'Submitting...' : 'Send Message'}
          </button>
        </form>

        {/* Show simulated form submission response */}
        {formResponse && (
          <div className={classes.formResponse}>
            <h3>{formResponse.message}</h3>
            <pre>{JSON.stringify(formResponse.data, null, 2)}</pre>
          </div>
        )}

        {/* Show the Community Perks modal */}
        {showCommunityPerksModal && (
          <div className={classes.communityPerksModal}>
            <div className={classes.modalContent}>
              <h2>Thank You!</h2>
              <p>Thank you for your response. We will get back to you soon.</p>
              <button 
                className={classes.closeCommunityPerksModalButton} 
                onClick={handleRedirectToMealsPage}
              >
                Go to Meals Page
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
