import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import './form.css';
import MapComponent from './map';

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    latitude: '',
    longitude: '',
    employeeID: '',
    city: '',
    country: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      // Log the data to the console
      console.log('Data to be sent:', formData);

      // Display an alert with the data
      alert(`Data to be sent: ${JSON.stringify(formData, null, 2)}`);

      const response = await fetch('https://api.findofficers.com/hiring_test/add_employee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Data posted successfully');
        // Optionally, reset the form or perform any other actions
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          latitude: '',
          longitude: '',
          employeeID: '',
          city: '',
          country: '',
        });
      } else {
        setError(`Error posting data: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      setError(`Error posting data: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="cont-section">
        <div className="contact-sect">
          <div className="contact-main">
          <div className="contact-left">
            <div className="contact-text">
                <h1>Contact Us</h1>
                <p className='getintouch'>GET IN TOUCH ANYTIME!</p>
                <p>If you have any query regarding visa consultancy, air ticketing, 
                    travel and tour packages or you want to perform a Hajj or Umrah.
                     feel free to contact us at any time.</p>
            </div>
            <div className="contact-icon">
                <div className="email-div">
                    <div className="email-icon">
                        <span className='span-icon'><AiOutlineMail className='mail'/></span>
                    </div>
                    <div className="email-content">
                        <h5>Email US</h5>
                        <p>info@vebtech.com.pk</p>
                    </div>
                </div>
                <div className="email-div">
                    <div className="email-icon">
                        <span className='span-icon'><AiOutlineMail className='mail'/></span>
                    </div>
                    <div className="email-content">
                        <h5>PHONE NO</h5>
                        <p>+923123232334234</p>
                    </div>
                </div>
                <div className="email-div">
                    <div className="email-icon">
                        <span className='span-icon'><AiOutlineMail className='mail'/></span>
                    </div>
                    <div className="email-content">
                        <h5>SKYPE</h5>
                        <p>info@vebtech.com.pk</p>
                    </div>
                </div>
            </div>
        </div>
            <div className="contact-right">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="innerboth">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Enter First Name"
                    className="contact-input"
                    onChange={handleChange}
                    value={formData.firstName}
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Enter Last Name"
                    className="contact-input"
                    onChange={handleChange}
                    value={formData.lastName}
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="contact-input"
                  onChange={handleChange}
                  value={formData.email}
                />
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  className="contact-input"
                  onChange={handleChange}
                  value={formData.phoneNumber}
                />
                <div className="innerboth">
                  <input
                    type="text"
                    name="latitude"
                    placeholder="Enter Latitude"
                    className="contact-input"
                    onChange={handleChange}
                    value={formData.latitude}
                  />
                  <input
                    type="text"
                    name="longitude"
                    placeholder="Enter Longitude"
                    className="contact-input"
                    onChange={handleChange}
                    value={formData.longitude}
                  />
                </div>
                <div className="innerboth">
                  <input
                    type="text"
                    name="employeeID"
                    placeholder="Enter Employee ID"
                    className="contact-input"
                    onChange={handleChange}
                    value={formData.employeeID}
                  />
                  <input
                    type="text"
                    name="city"
                    placeholder="Enter City"
                    className="contact-input"
                    onChange={handleChange}
                    value={formData.city}
                  />
                </div>
                <input
                  type="text"
                  name="country"
                  placeholder="Enter Country"
                  className="contact-input"
                  onChange={handleChange}
                  value={formData.country}
                />
                <button type="submit" className="contact-btn" disabled={loading}>
                  {loading ? 'Submitting...' : 'SUBMIT'}
                </button>
              </form>
            </div>
          </div>
          <div className="contact-address">
            <MapComponent />
          </div>
        </div>
      </section>
    </>
  );
}
