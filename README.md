## Project Title

> _Mount Bliss - A Premium Hotel Booking & Management System Frontend_

---

## Project Overview

> Mount Bliss is a modern, responsive web application for hotel room booking and management.
> Built with React and Vite, it provides guests with an intuitive interface to browse rooms, check availability,
> make bookings, and manage their reservations. The system includes user authentication, room galleries,
> booking management, and an admin dashboard for staff management.
> The main goal is to streamline hotel operations and enhance the guest booking experience.

---

## Objectives

- Build a responsive and performant React web application using Vite
- Implement real-time room availability and booking features
- Provide seamless user authentication and authorization
- Create an intuitive user interface with smooth animations
- Enable admin dashboard for hotel management operations
- Optimize for mobile, tablet, and desktop devices

---

## Technologies Used

### Frontend

- **React.js** 19.1.0 - UI library
- **Vite** 7.0.4 - Build tool and dev server
- **React Router Dom** 7.6.3 - Client-side routing
- **Tailwind CSS** 4.1.11 - Utility-first CSS framework
- **Framer Motion** 12.23.6 - Animation and motion graphics
- **HTML5, CSS3, JavaScript** - Core web technologies

### Backend Integration

- Firebase Authentication & Firestore (configured via firebase.json)
- REST API integration via custom auth and room endpoints

### Other Tools

- **ESLint** 9.30.1 - Code quality and linting
- **Git & GitHub** - Version control

---

## Key Features

- **Component-Based Architecture** - Modular and reusable components
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **User Authentication** - Secure login and registration system
- **Room Browsing** - Browse available rooms with detailed information
- **Booking Management** - Create, view, and manage reservations
- **Admin Dashboard** - Staff dashboard for managing bookings and operations
- **Image Gallery** - Beautiful room gallery with lightbox functionality
- **Smooth Animations** - Framer Motion powered transitions and effects
- **State Management** - React Context API for authentication state

---

## Screens / Pages

- **Home Page** - Hero section, intro, services, booking form, testimonials
- **Rooms Page** - Browse all available rooms with filters
- **Room Details** - Detailed view of individual room with amenities
- **Booking Page** - Room selection and booking process
- **Gallery** - Image gallery of hotel facilities
- **About Page** - Hotel information and background
- **Contact Page** - Contact form and location information
- **Dashboard** - Admin panel for bookings and reservations
- **Login/Register** - User authentication pages

---

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── Home/              # Home page components
│   │   │   ├── Hero.jsx
│   │   │   ├── Intro.jsx
│   │   │   ├── Hservices.jsx
│   │   │   ├── BookingForm.jsx
│   │   │   └── AboutUs.jsx
│   │   ├── Navbar/            # Navigation components
│   │   │   ├── Logo.jsx
│   │   │   ├── RNav.jsx
│   │   │   ├── LoginNav.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── Navfor-login.jsx
│   │   ├── Navbar.jsx         # Main navbar wrapper
│   │   ├── Footer.jsx
│   │   ├── Button.jsx
│   │   └── RoomCard.jsx       # Room listing card component
│   ├── pages/                 # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Booking.jsx
│   │   ├── Contact.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Gallery.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Rooms.jsx
│   │   └── RoomDetails.jsx
│   ├── context/
│   │   └── AuthContext.jsx    # Authentication context
│   ├── hooks/
│   │   └── useAuth.js         # Custom auth hook
│   ├── api/
│   │   ├── auth.js            # Auth API endpoints
│   │   └── room.js            # Room API endpoints
│   ├── styles/
│   │   └── index.css
│   ├── assets/
│   │   └── gallery/           # Image assets
│   ├── App.jsx
│   ├── main.jsx
│   ├── router.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
├── firebase.json              # Firebase configuration
└── README.md
```

---

## Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- Git

### Steps

```bash
# Clone repository
git clone https://github.com/yourusername/mountbliss.git

# Navigate to project directory
cd frontend/mountBliss

# Install dependencies
npm install

# Create .env.local file and add Firebase credentials
# VITE_FIREBASE_API_KEY=your_api_key
# VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
# etc.

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm preview

# Run ESLint
npm run lint
```

---

## Running the Project

**Development:**

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

**Production Build:**

```bash
npm run build
npm run preview
```

---

## Firebase Deployment

This project is configured for Firebase hosting:

```bash
# Install Firebase CLI globally
npm install -g firebase-tools

# Login to Firebase
firebase login

# Deploy
firebase deploy
```

---

## Testing

- Tested UI responsiveness across mobile, tablet, and desktop devices
- Verified authentication flows (login, registration, logout)
- Validated room booking functionality
- Tested API integration with backend endpoints
- Checked navigation and routing across all pages
- Verified image gallery and lightbox functionality

---

## API Integration

### Authentication Endpoints

- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/logout` - User logout

### Room Endpoints

- `GET /api/rooms` - Get all available rooms
- `GET /api/rooms/:id` - Get room details
- `POST /api/bookings` - Create new booking

---

## Challenges Faced

- Managing state across multiple components with React Context
- Implementing responsive design across various screen sizes
- Optimizing performance with animations and heavy content
- Firebase configuration and authentication flow
- Synchronizing room availability in real-time

---

## Future Enhancements

- **Payment Integration** - Add Stripe/Khalti payment gateway
- **Real-time Updates** - Implement WebSocket for live availability
- **Email Notifications** - Send booking confirmations and updates
- **Review System** - Guest reviews and ratings for rooms
- **Advanced Filters** - Search by price, amenities, rating
- **Multi-language Support** - i18n implementation
- **Progressive Web App** - Convert to PWA for offline support
- **Analytics Dashboard** - Track booking trends and metrics

---

## Deployment

The project is configured for Firebase hosting and has been deployed at:

- **Live URL:** [Your deployed URL here]

---

## Acknowledgement

This project was developed as a practical implementation of modern React development patterns and best practices.

---

## Declaration

This project is developed with best practices in mind, incorporating modern web development standards, responsive design principles, and component-based architecture.
