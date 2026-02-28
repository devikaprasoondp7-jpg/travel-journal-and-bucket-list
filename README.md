<p align="center">
  <img src="./img.png" alt="Project Banner" width="100%">
</p>

# travel journal and bucket list marker 🎯

## Basic Details

### Team Name: 911

### Team Members
- Member 1: Devika Prasoon N - TKM College of Engineering
- Member 2: Anusree R - TKM College of Engineering

### Hosted Project Link
(https://tink-her-hack-temp-lyart.vercel.app/index.html)

### Project Description
it is a travel journal to document the places you have visited, your experience, pictures and likes. you can also mark places in your bucket list. automated suggestions of other countries based on your likes is also generated.

### The Problem statement
a creative way to document your journey

### The Solution
a website that allows you to upload links to photos, journal your thoughts on places, mark places you want to visit in the future and many more

---

## Technical Details

### Technologies/Components Used
For Software:

Languages used: HTML5, CSS3, JavaScript (Vanilla)

Frameworks used: None (Vanilla JS)

Libraries used: None

Tools used: VS Code, Git, GitHub


## Features

User Authentication: Secure Login and Registration system using localStorage.

Travel Preferences: Users can select preferences (Nature, Food, City, Beach) during registration.

Theme Customization: Switch between Pink, Blue, and Green themes which update the UI immediately and persist across sessions.

Data Persistence: Uses localStorage to save user credentials, preferences, and theme choices.


---

## Implementation


### For Software:

#### Installation
```bash
Installation
No installation is required. This is a client-side application. Simply clone the repository and open index.html in a web browser.

#### Run
```bash
# Open index.html directly in a browser
```


---

## Project Documentation

### For Software:

#### Screenshots 

<img width="1915" height="916" alt="image" src="https://github.com/user-attachments/assets/580083c9-51a7-4d2d-b1b8-9b81ca2f302a" />
(registration page)
*shows registration page to type in username and setup password and pick your preferences*

<img width="1906" height="913" alt="image" src="https://github.com/user-attachments/assets/3746b536-0a0e-440b-93c6-8aee56bb10bc" />
(the map and journal)
*shows the colour coded map along with likes dislike and journal*

<img width="1911" height="919" alt="image" src="https://github.com/user-attachments/assets/4f4d5b40-36bd-4f95-b0fb-74a3fddfdc6f" />
(suggestions page)
*map of suggestions and what it was choosen based off*

##Diagrams


**System Architecture:**

!<img width="1104" height="400" alt="image" src="https://github.com/user-attachments/assets/888e52e6-a59d-47db-a325-4e6af83d998f" />



**Application Workflow:**
Application Workflow:

User visits index.html -> Authenticates -> Saves data to localStorage -> Redirects to map.html.


---

## Additional Documentation

API Documentation (Conceptual/Local)
Base Storage: localStorage (Browser)

Endpoints (Internal localStorage keys)
travelUsers (JSON Object)

Description: Stores all registered user data.

Structure:

JSON
{
  "username": {
    "password": "password123",
    "prefs": ["Nature", "Food"],
    "mapData": {},
    "theme": "pink"
  }
}
currentUser (String)

Description: Stores the username of the currently logged-in user.



## Project Demo
(https://drive.google.com/file/d/1Vp43JPp9IMUEswpAjtT41TIbKCDsFLW0/view?usp=drive_link)]

this video shows 2 instances. first of a new user who has to set up a new username and password and is meet with a fresh map to fill and then off a experienced user who has already started to input their journey


## AI Tools Used 

AI Tools Used
Tool Used: Gemini

Purpose:

Code structuring for HTML/CSS.

Implementing localStorage logic for authentication.

Developing CSS variable-based theme switching.

Adding decorative shapes and animations.

Percentage of AI-generated code: Approximately 80%

Human Contributions:

Project conceptualization.

Defining project requirements.

Testing and debugging.



---

## Team Contributions


Devika Prasoon N : Project lead, development, and documentation.

Anusree R: Frontend styling, testing, and UI refinements.

---



Made with ❤️ at TinkerHub
