#   REQUIREMENTS 
================
    Screens
================

    1. Homepage
    2. Login Screen
    3. Signup Screen
    4. MessageUser Screen
    5. Messaging Screen
    6. User Profile Screen
    7. Followers Screen
    8. Post Screen
    9. Search Screen
    10. Reels Screen 
    11. Notifications Screen

===================
    Dependencies
===================

    # FRONTEND
    1. react-vite
    2. react-router-dom
    3. react-toastify
    4. tailwindcss
    5. material-ui
    6. react-helmet-async
    7. axios

    # BACKEND
    1. express js
    2. mongoose
    3. express-async-handler
    4. bcryptjs
    5. multer
    6. cloudinary
    7. socket-io
    8. body-parser
    9. nodemailer
    10. twilio
    11. jsonwebtoken
    12. dotenv

==================
    Schedule
==================

#   Homepage screen

1. Components
    -> Navbar
    -> Story slider
    -> Feed
    -> Suggested people
    -> Suggested posts

2. Backend
    -> Fetching the user's posts
    -> Fetching the user's story
    -> Fetching other user's posts
    -> Fetching other user's stories
    -> Protecting this home page


#   Login Screen

1. Components
    -> Form

2. Backend
    -> Login API
    -> Generating a token

#   Signup Screen

1. Components
    -> Form

2. Backend
    -> Signup API
    -> Sending the verification to the email
    -> Sending the OTP to the phone number
    -> Navigate to the login


#   MessageUser Screen

1. Components
    -> Navbar
    -> Search bar
    -> Active users 
    -> User and the last message

2. Backend
    -> Fetching the current user info
    -> Fetching the active users
    -> Fetch users and the messages


#   Messaging Screen

1. Components
    -> Navbar
    -> User Info
    -> Messages
    -> Message input

2. Backend
    -> Fetching the users messages
    -> Sending message using socket-io
    -> Upload a photo

#   UserProfile Screen

1. Components
    -> Navbar
    -> User info
    -> Edit user profile
    -> Your photos
    -> Your posts