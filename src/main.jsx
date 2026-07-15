import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import img1 from './assets/profile-img-1.png';
import img2 from './assets/profile-img-2.png';
import img3 from './assets/profile-img-3.png';
import img4 from './assets/profile-img-4.png';
import img5 from './assets/profile-img-5.png';
import img6 from './assets/profile-img-6.png';
import img7 from './assets/profile-img-7.png';
import img8 from './assets/profile-img-8.png';
import img9 from './assets/profile-img-9.png';
import img10 from './assets/profile-img-10.png';


const userImages = {
  1: img1,
  2: img2,
  3: img3,
  4: img4,
  5: img5,
  6: img6,
  7: img7,
  8: img8,
  9: img9,
  10: img10
};

const usersData = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874"
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771"
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157"
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "zipcode": "53919-4257"
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
      "name": "Robel-Corkery",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "bs": "transition cutting-edge web services"
    }
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "address": {
      "street": "Skiles Walks",
      "suite": "Suite 351",
      "city": "Roscoeview",
      "zipcode": "33263"
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
      "name": "Keebler LLC",
      "catchPhrase": "User-centric fault-tolerant solution",
      "bs": "revolutionize end-to-end systems"
    }
  },
  {
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "address": {
      "street": "Norberto Crossing",
      "suite": "Apt. 950",
      "city": "South Christy",
      "zipcode": "23505-1337"
    },
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org",
    "company": {
      "name": "Considine-Lockman",
      "catchPhrase": "Synchronised bottom-line interface",
      "bs": "e-enable innovative applications"
    }
  },
  {
    "id": 7,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "address": {
      "street": "Rex Trail",
      "suite": "Suite 280",
      "city": "Howemouth",
      "zipcode": "58804-1099"
    },
    "phone": "210.067.6132",
    "website": "elvis.io",
    "company": {
      "name": "Johns Group",
      "catchPhrase": "Configurable multimedia task-force",
      "bs": "generate enterprise e-tailers"
    }
  },
  {
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "address": {
      "street": "Ellsworth Summit",
      "suite": "Suite 729",
      "city": "Aliyaview",
      "zipcode": "45169"
    },
    "phone": "586.493.6943 x140",
    "website": "jacynthe.com",
    "company": {
      "name": "Abernathy Group",
      "catchPhrase": "Implemented secondary concept",
      "bs": "e-enable extensible e-tailers"
    }
  },
  {
    "id": 9,
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "address": {
      "street": "Dayna Park",
      "suite": "Suite 449",
      "city": "Bartholomebury",
      "zipcode": "76495-3109"
    },
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com",
    "company": {
      "name": "Yost and Sons",
      "catchPhrase": "Switchable contextually-based project",
      "bs": "aggregate real-time technologies"
    }
  },
  {
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "address": {
      "street": "Kattie Turnpike",
      "suite": "Suite 198",
      "city": "Lebsackbury",
      "zipcode": "31428-2261"
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
      "name": "Hoeger LLC",
      "catchPhrase": "Centralized empowering task-force",
      "bs": "target end-to-end models"
    }
  }
];


function getUserImage(userId) {
  return userImages[userId] || `https://ui-avatars.com/api/?name=User+${userId}&background=667eea&color=fff&size=150`;
}


function LoadingSpinner() {
  return (
    <div className="loading-container">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <p className="loading-message">Loading user directory...</p>
    </div>
  );
}


function ErrorMessage({ message, onRetry }) {
  return (
    <div className="error-container">
      <div className="alert alert-danger" role="alert">
        <i className="bi bi-exclamation-triangle-fill me-2"></i>
        {message || "Something went wrong. Please try again."}
      </div>
      <button className="btn btn-primary retry-btn" onClick={onRetry}>
        <i className="bi bi-arrow-clockwise me-2"></i>
        Retry
      </button>
    </div>
  );
}


function UserCard({ user, onViewProfile }) {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="user-card">
        <div className="card-body text-center">
          {}
          <div className="profile-image-wrapper">
            <img 
              src={getUserImage(user.id)} 
              alt={user.name} 
              className="profile-image"
              onError={(e) => {
                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=667eea&color=fff&size=120`;
              }}
            />
          </div>
          
          {}
          <h5 className="user-name">{user.name}</h5>
          <p className="user-email">
            <i className="bi bi-envelope me-1"></i>
            {user.email}
          </p>
          <p className="user-city">
            <i className="bi bi-geo-alt me-1"></i>
            {user.address.city}
          </p>
          <p className="user-website">
            <i className="bi bi-globe me-1"></i>
            <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">
              {user.website}
            </a>
          </p>
          
          {}
          <button 
            className="btn btn-primary view-profile-btn"
            onClick={() => onViewProfile(user.id)}
          >
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
}


function UserProfile({ user, onBack }) {
  return (
    <div className="profile-container">
      <div className="profile-card">
        {}
        <button className="btn btn-secondary back-btn" onClick={onBack}>
          <i className="bi bi-arrow-left me-2"></i>
          Back to Directory
        </button>
        
        {}
        <div className="profile-header">
          <div className="profile-image-container">
            <img 
              src={getUserImage(user.id)} 
              alt={user.name} 
              className="profile-avatar"
              onError={(e) => {
                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=667eea&color=fff&size=150`;
              }}
            />
          </div>
          <div className="profile-title">
            <h1 className="profile-name">{user.name}</h1>
            <p className="profile-catchphrase">
              <i className="bi bi-quote me-2"></i>
              {user.company.catchPhrase}
            </p>
          </div>
        </div>

        {}
        <div className="profile-details">
          {}
          <div className="detail-section">
            <h3 className="section-title">
              <i className="bi bi-person-badge me-2"></i>
              Personal Information
            </h3>
            <div className="detail-grid">
              <div className="detail-item">
                <span className="detail-label">Username</span>
                <span className="detail-value">@{user.username}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Email</span>
                <span className="detail-value">
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Phone</span>
                <span className="detail-value">
                  <a href={`tel:${user.phone}`}>{user.phone}</a>
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Website</span>
                <span className="detail-value">
                  <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">
                    {user.website}
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="detail-section">
            <h3 className="section-title">
              <i className="bi bi-geo-alt me-2"></i>
              Address
            </h3>
            <div className="detail-grid">
              <div className="detail-item">
                <span className="detail-label">City</span>
                <span className="detail-value">{user.address.city}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Street</span>
                <span className="detail-value">{user.address.street}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Suite</span>
                <span className="detail-value">{user.address.suite}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Zip Code</span>
                <span className="detail-value">{user.address.zipcode}</span>
              </div>
            </div>
          </div>

          {/* Company */}
          <div className="detail-section">
            <h3 className="section-title">
              <i className="bi bi-building me-2"></i>
              Company
            </h3>
            <div className="detail-grid">
              <div className="detail-item">
                <span className="detail-label">Company Name</span>
                <span className="detail-value">{user.company.name}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Business</span>
                <span className="detail-value">{user.company.bs}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function App() {
  
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showProfile, setShowProfile] = useState(false);

 
  useEffect(() => {
    loadUsers();
  }, []);

  
  function loadUsers() {
    setLoading(true);
    setError(null);
    
   
    setTimeout(() => {
      try {
        setUsers(usersData);
        setLoading(false);
      } catch (err) {
        setError("Failed to load users. Please try again.");
        setLoading(false);
      }
    }, 1000);
  }


  function handleViewProfile(userId) {
    const user = users.find(u => u.id === userId);
    setSelectedUser(user);
    setShowProfile(true);
  }


  function handleBackToDirectory() {
    setShowProfile(false);
    setSelectedUser(null);
  }


  if (loading) {
    return (
      <div className="container py-5">
        <LoadingSpinner />
      </div>
    );
  }

 
  if (error) {
    return (
      <div className="container py-5">
        <ErrorMessage message={error} onRetry={loadUsers} />
      </div>
    );
  }


  if (showProfile && selectedUser) {
    return <UserProfile user={selectedUser} onBack={handleBackToDirectory} />;
  }

  
  return (
    <div className="app-container">
      <div className="container py-4">
        {}
        <div className="page-header text-center">
          <h1 className="page-title">
            <i className="bi bi-people-fill me-3"></i>
            User Directory
          </h1>
          <p className="page-subtitle">Browse and explore user profiles</p>
          <div className="user-count-badge">
            <span className="badge bg-primary">
              <i className="bi bi-person me-2"></i>
              {users.length} Users
            </span>
          </div>
        </div>

        {/* User Cards Grid */}
        <div className="row justify-content-center">
          {users.map(function(user) {
            return (
              <UserCard 
                key={user.id} 
                user={user} 
                onViewProfile={handleViewProfile}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

