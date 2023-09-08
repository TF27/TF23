import React from 'react';
import './contact.css';
const coordidata = [
  {
    department: "Overall Coordinator",
    name: "Aashuraj Hassani",
    email: "aashuraj@techfest.org",
    phone: "8347347594"
  },
  {
    department: "Overall Coordinator",
    name: "Aashuraj Hassani",
    email: "aashuraj@techfest.org",
    phone: "8347347594"
  },
  {
    department: "Overall Coordinator",
    name: "Aashuraj Hassani",
    email: "aashuraj@techfest.org",
    phone: "8347347594"
  },
  {
    department: "Overall Coordinator",
    name: "Aashuraj Hassani",
    email: "aashuraj@techfest.org",
    phone: "8347347594"
  },
  {
    department: "Overall Coordinator",
    name: "Aashuraj Hassani",
    email: "aashuraj@techfest.org",
    phone: "8347347594"
  },
  {
    department: "Overall Coordinator",
    name: "Aashuraj Hassani",
    email: "aashuraj@techfest.org",
    phone: "8347347594"
  },
  {
    department: "Overall Coordinator",
    name: "Aashuraj Hassani",
    email: "aashuraj@techfest.org",
    phone: "8347347594"
  },
  {
    department: "Overall Coordinator",
    name: "Aashuraj Hassani",
    email: "aashuraj@techfest.org",
    phone: "8347347594"
  },
  {
    department: "Overall Coordinator",
    name: "Aashuraj Hassani",
    email: "aashuraj@techfest.org",
    phone: "8347347594"
  },
  {
    department: "Overall Coordinator",
    name: "Aashuraj Hassani",
    email: "aashuraj@techfest.org",
    phone: "8347347594"
  },
  {
    department: "Overall Coordinator",
    name: "Aashuraj Hassani",
    email: "aashuraj@techfest.org",
    phone: "8347347594"
  },
  {
    department: "Overall Coordinator",
    name: "Aashuraj Hassani",
    email: "aashuraj@techfest.org",
    phone: "8347347594"
  },
  {
    department: "Overall Coordinator",
    name: "Aashuraj Hassani",
    email: "aashuraj@techfest.org",
    phone: "8347347594"
  },
  {
    department: "Overall Coordinator",
    name: "Aashuraj Hassani",
    email: "aashuraj@techfest.org",
    phone: "8347347594"
  },
  {
    department: "Overall Coordinator",
    name: "Aashuraj Hassani",
    email: "aashuraj@techfest.org",
    phone: "8347347594"
  },
  {
    department: "Overall Coordinator",
    name: "Aashuraj Hassani",
    email: "aashuraj@techfest.org",
    phone: "8347347594"
  },
  // Add more coordinator objects as needed
];

const Contact = () => {
  return (
    <div>
      <nav>
        {/* Include your navigation component here */}
      </nav>

      <div className="container" style={{ marginTop: '8rem', marginBottom:'10rem'}}>
        <p className="text-center" style={{ fontSize: '10vw', fontWeight: '1000' }}>
          Contact Us
        </p>

        <div className='mainContactUs'>
          <div className="row label justify-content-space-between" style={{ marginTop: '5vh', marginBottom: '1.5vw' }}>
            <div className="col-3 justify-content-left">Department</div>
            <div className="col-3 justify-content-center">Name</div>
            <div className="col-3 justify-content-center contactMail">Email</div>
            <div className="col-3 contactNum">Phone</div>
          </div>

          {/* Map over coordidata to dynamically generate contact blocks */}
          {coordidata.map((coordinator, index) => (
           <div className="com-btn3" key={index} 
           style={{
             border: '1px solid white',
             borderRadius: '10px',
            //  padding: '10px',
             marginBottom: '1rem',
             backgroundColor: 'transparent',
             transition: 'background-color 0.3s ease', // Add transition for smooth effect
           }}
           onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'} // Add hover effect
           onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
              <div className="row leader-content justify-content-space-between">
                <div className="col-3">{coordinator.department}</div>
                <div className="col-3">{coordinator.name}</div>
                <div className="col-3 contactMail" onClick={() => window.location.href = `mailto:${coordinator.email}`}>{coordinator.email}</div>
                <div className="col-3 contactNum" onClick={() => window.location.href = `tel:${coordinator.phone}`}>{coordinator.phone}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
