'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import classes from './contact-form.module.css';

// Form data structure
const ContactForm = ({ onClose }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [randomImage, setRandomImage] = useState(null); // For random image URL
  const [formResponse, setFormResponse] = useState(null); // To store the API response
  const [showImageModal, setShowImageModal] = useState(false); // For controlling image modal visibility
  const [showCommunityPerksModal, setShowCommunityPerksModal] = useState(false); // For Community Perks modal

  // Fetch random image from Unsplash API on component mount
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const imageResponse = await axios.get('https://api.unsplash.com/photos/random', {
          headers: {
            Authorization: `Client-ID ZMxMGwLX2iPL0v9URq4R7LHulqWmOQZnNa6acV2ZVZk`, // Replace with your Unsplash API key
          },
        });
        setRandomImage(imageResponse.data[0]?.urls?.regular); // Assuming response contains image URL
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, []); // Empty dependency array means this runs once when the component mounts

  // Form submission handler
  const onSubmit = async (data) => {
    setIsLoading(true);

    try {
      // API Call 1: Submit form data to a server (Example: JSONPlaceholder)
      const formResponse = await axios.post('https://jsonplaceholder.typicode.com/posts', data);
      setFormResponse(formResponse.data);

      // Success alert and reset the form
      alert("Thank you for reaching out! We'll get back to you soon.");
      reset();
      onClose();

      // Show the image modal after fetching the image
      setShowImageModal(true);

      // Show the Community Perks modal after the form is submitted
      setShowCommunityPerksModal(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  // Function to close the image modal
  const closeImageModal = () => {
    setShowImageModal(false);
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
        
        {/* Display the random image from Unsplash */}
        {randomImage && (
          <div className={classes.imageContainer}>
            <img src={randomImage} alt="Random from Unsplash" className={classes.randomImage} />
          </div>
        )}

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

        {/* Show form submission response */}
        {formResponse && (
          <div className={classes.formResponse}>
            <h3>Form Submitted Successfully!</h3>
            <pre>{JSON.stringify(formResponse, null, 2)}</pre>
          </div>
        )}

        {/* Show the image modal (popup) */}
        {showImageModal && randomImage && (
          <div className={classes.imageModal}>
            <div className={classes.modalContent}>
              <h3>Here is your random image!</h3>
              <img src={randomImage} alt="Random from Unsplash" className={classes.randomImage} />
              <button className={classes.closeImageModalButton} onClick={closeImageModal}>
                Close
              </button>
            </div>
          </div>
        )}

        {/* Show the Community Perks modal (popup) */}
        {showCommunityPerksModal && (
          <div className={classes.communityPerksModal}>
            <div className={classes.modalContent}>
              <h3>Community Perks</h3>
              <ul>
                <li>
                  <strong>A delicious meal</strong>
                  <p>Share & discover recipes</p>
                </li>
                <li>
                  <strong>A crowd of people, cooking</strong>
                  <p>Find new friends & like-minded people</p>
                </li>
                <li>
                  <strong>A crowd of people at a cooking event</strong>
                  <p>Participate in exclusive events</p>
                </li>
              </ul>
              <button className={classes.closeCommunityPerksModalButton} onClick={closeCommunityPerksModal}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
