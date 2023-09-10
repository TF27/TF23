import React from 'react';
import './contact.css';
const coordidata = [
  {
    department: "Overall Coordinator",
    name: "Shobhit Aggarwal",
    email: "shobhit@techfest.org",
    phone: "-"
  },
  {
    department: "Overall Coordinator",
    name: "Pavithra Pilli",
    email: "pavithra@techfest.org",
    phone: "-"
  },
  {
    department: "Competitions Manager",
    name: "Abhishek Kedare",
    email: "abhishek@techfest.org",
    phone: "7558588254"
  },
  {
    department: "Infrastructure Manager",
    name: "Ajay Agrawal",
    email: "ajay@techfest.org",
    phone: "7509759232"
  },
  {
    department: "Exhibitions Manager",
    name: "Akshat Gupta",
    email: "akshat@techfest.org",
    phone: "9619678850"
  },
  {
    department: "Ozone Manager",
    name: "Anusha Dhakras",
    email: "anusha@techfest.org",
    phone: "9004285668"
  },
  {
    department: "Lectures Manager",
    name: "Arnav Patel",
    email: "arnav@techfest.org",
    phone: "9372634701"
  },
  {
    department: "Robowars Manager",
    name: "Aryan Gupta",
    email: "aryan@techfest.org",
    phone: "7317520804"
  },
  {
    department: "Competitions Manager",
    name: "Atharv Apshinge",
    email: "atharv@techfest.org",
    phone: "9324589830"
  },
  {
    department: "Competitions Manager",
    name: "Chirag Rao",
    email: "chirag@techfest.org",
    phone: "8287175335"
  },
  {
    department: "Exhibitions Manager",
    name: "Gourish Singhal ",
    email: "gourish@techfest.org",
    phone: "9424873725"
  },
  {
    department: "Technoholix Manager",
    name: "Jainam Shah",
    email: "jainam@techfest.org",
    phone: "8369504031"
  },
  {
    department: "Marketing Manager",
    name: "Krishna Rathi ",
    email: "krishna@techfest.org",
    phone: "7014036467"
  },
  {
    department: "Robowars Manager",
    name: "Manas Dadhich",
    email: "manas@techfest.org",
    phone: "9981378767"
  },
  {
    department: "Marketing Manager",
    name: "Mankirat Chawla",
    email: "mankirat@techfest.org",
    phone: "9996437175"
  },
  {
    department: "Hospitality Manager",
    name: "Nivesh Maheshwari ",
    email: "nivesh@techfest.org",
    phone: "7357654007"
  },
  {
    department: "Infrastructure Manager",
    name: "Prathamesh Hatwar",
    email: "prathamesh@techfest.org",
    phone: "7387041365"
  },
  {
    department: "Creatives Manager",
    name: "Sanya Agrawal",
    email: "sanya@techfest.org",
    phone: "7588931688"
  },
  {
    department: "Ozone Manager",
    name: "Sarvesh Bang ",
    email: "sarvesh@techfest.org",
    phone: "8766784117"
  },
  {
    department: "Media Manager",
    name: "Shriya Kajrolkar",
    email: "shriya@techfest.org",
    phone: "8828283803"
  },
  {
    department: "Food & Beverages Manager",
    name: "Utkarsh Daga",
    email: "utkarsh@techfest.org",
    phone: "9636509616"
  },
  {
    department: "Publicity Manager",
    name: "Varun Gupta",
    email: "varun@techfest.org",
    phone: "9011909408"
  },
  {
    department: "Web Manager",
    name: "Yatharth Manchanda",
    email: "yatharth@techfest.org",
    phone: "8168921833"
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
