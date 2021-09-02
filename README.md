# Vishleshan

<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://fontmeme.com/permalink/210807/b29d89552af634629c87346070924ac2.png" alt="samarkan-font" border="0">
  </a>
  <h3 align="center">Video Analyzer Platform</h3>
  <!-- <h4 align="center">Deployed at <a href="https://sahayak-sos.herokuapp.com/" target="_blank">Sahayak</a>(Best works on desktop or landsacape mode in mobile)</h4> -->

</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#introduction">Introduction</a></li>
        <li><a href="#objective">Objective</a></li>
        <li><a href="#implementation">Implementation</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>





<!-- GETTING STARTED -->
## Getting Started
### Prerequisites

* NodeJS
* NPM
* MongoDB
* Text Editor. eg: Visual Code Studio
* CLI Tool

### Installation

1. Two APIs are being used 
- symbl.ai API
- words API

2. Clone the repo
   ```sh
   git clone https://github.com/Pro-Abhinav/Vishleshan.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in '.env'
   ```
    Check .env.example file for format for secrets and API keys
   ```   ```



<!-- ABOUT THE PROJECT -->
## About The Project
### Introduction
In this era of cut throat competition for job placements, there is a greater than ever need of self assessment for ensuring that the current level of job preparation is upto the general industry standards.
This leads to the need of a solution that allows the interviewee to visualize their performance in order to work on their area of weakness and vastly increase their chances of performing well in a job interview amongst others.
Additionally, interviewers can objectively analyse the performance of the candidates for selection.

### Objective: 
Our objective is to develop a web platform which enables users to analyse their performance during a pitch/interview and generate detailed analytics that is presented to them in a graphical and textual format.

### Implementation: 
On the client side, we will be implementing ReactJs as a frontend framework.

On Server side, we will be using NodeJs as a runtime environment, with Express as a framework and MongoDb Atlas as a database. 

APIs that we will be using to facilitate our service will be Symbl.ai’s Streaming API, telephony API, async API ,conversation API for speech analytics and Microsoft Azure’s face API for facial analytics.

Performance analytics is based on the combined data from the verbal as well as non-verbal transcripts.

### Technology used:
* Frontend
    * ReactJS
    * CSS
    * JavaScript
    * Material UI
* Backend
    * NodeJS
    * ExpressJS
* Database
    * MongoDB
* APIs
    * Symbl.ai
    * Words API
    * Websockets



### Applications:
Following are the real world applications of our idea.
As a student or a professional, everyone needs a platform to assess their communication skills. Our platform will provide them a medium to assess themselves and their performance in various circumstances. I.e. pitch meetings, presentations, SWOT analysis presentations . 
Our platform will help users to assess their performance in mock peer to peer interviews conducted on their mutual interests, which will give them an insight about themselves.
Our Application can also be used to get a detailed analysis of the applicant/users who are subjected to any type of interview. (Job Interview, Group discussion etc.).



### Final Result: 
The outcome of our idea will be a platform where users(i.e. Students, professionals) will be able to assess themselves or others on verbal and non-verbal aspects. A detailed analysis with user-friendly visualization will help different users in separate ways. 

### Future Plans: 
Providing more features to the users regarding peer interviews.
Detailed analysis and solution to the problems detected during assessment.
Scaling the application for a diaspora of users connected with interviews, interrogation and presentations.


<!-- ![Landing Page](https://github.com/anmolsahu2k/Sahayak/blob/master/public/assets/img/landing.png) -->

<!-- Our project "Sahayak" is a community platform that enables users to volunteer and help nearby users in need of any emergency assistance or aid. Through the website, users can send SOS request to other users in the specified radius. Once the SOS request is sent, the nearby users receive the request and they have the choice to either accept the request or reject it depending on their personal situation

* How it is different from others? 
Our app will be sending SOS messages not only to nearest police/medical stations, assigned relatives but also to the local people who live near the victim’s house.
All the people registered on the app will be verified with some kind of official documentation (aadhaar card/PAN etc.). This verification is done to remove the possibility of misuse of the application by some random person. All the requests made and requests answered will be stored in a log.

* How sending messages to people living near the victims house will help? 
Sending messages to the local people will be beneficial as they can offer help much faster than police/ambulances.
e.g. If someone crashed his car on highway, locals can help promptly than police/ambulance. -->


<!-- ## Screenshots -->

<!-- ### Landing Page
![Landing Page](https://github.com/anmolsahu2k/Sahayak/blob/master/public/assets/img/landing.png)
### Signup
![Signup Page](https://github.com/anmolsahu2k/Sahayak/blob/master/public/assets/img/signup.jpeg)
### Login
![Login Page](https://github.com/anmolsahu2k/Sahayak/blob/master/public/assets/img/login.jpeg)
### Dashboard
![Dashboard Page](https://github.com/anmolsahu2k/Sahayak/blob/master/public/assets/img/dashboard.jpeg)
### Activity Log
![Activity Log Page](https://github.com/anmolsahu2k/Sahayak/blob/master/public/assets/img/activityLog.jpeg)
### Activity Log Timeline
![Activity Log Timeline](https://github.com/anmolsahu2k/Sahayak/blob/master/public/assets/img/activityLogTimeline.jpeg)
### Accept Requests
![Accept Page](https://github.com/anmolsahu2k/Sahayak/blob/master/public/assets/img/accept.jpeg)
### User Settings
![Settings Page](https://github.com/anmolsahu2k/Sahayak/blob/master/public/assets/img/settings.jpeg)
### Reset Password
![Reset Password Page](https://github.com/anmolsahu2k/Sahayak/blob/master/public/assets/img/reset.png) -->



<!-- USAGE EXAMPLES -->
<!-- ## Usage

Our platform enables users to volunteer and help nearby users in need of any emergency assistance or aid. Through the website, users can send SOS request to other users in the radius of 2km. Once the SOS request is sent, the nearby users (within 2km) receive the request and they have the choice to either accept the request or reject it depending their personal situation.<br>
Through this, the requester can get immediate assistance through nearby volunteers.
Through the google maps api provided on the platform the volunteer will be able to get the address of the requester.
Even the requester will be able to view his/her location on the google maps before sending the request 
 -->


<!-- LICENSE -->
<!-- ## License

Distributed under the MIT License.
 -->


<!-- CONTACT -->
## Contact

- Abhinav Tripathi - abhi3pathi01@gmail.com
- Harsh Pandey - 
- Anmol Sahu - anmolsahu2k@gmail.com

Project Link: [https://github.com/Pro-Abhinav/Vishleshan](https://github.com/Pro-Abhinav/Vishleshan)
