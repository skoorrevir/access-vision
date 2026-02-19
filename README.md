# Project Spec
## Problem
Access vision is a non-profit mobile eye clinic servicing rural alabama. They need a professional looking website to impress funders and service customers.
## Deliverable
### Task
Create a professional website with 3 sections:
#### About us
 - Include information about staff members and mission statement
#### Upcoming clinics
 - A page for client reference
 - includes information on all upcoming clinic locations
 - includes quick points of contact
#### Home page
 - Front page for the website
 - Include organization details, and upcoming clinic locations as well as links to about me and Clinics pages.
 - opt: you can include all about us and clinic information on this page as well
 - this page should primarily service the client with quick clinic locations prioritized
### Requirements
 - the clinic information needs to be as easily editable as possible. 
    - Imagine the training process for a semi-tech savvy person editing this
    - Perhaps a JSON file parsed by the relevant pages
 - The site needs to be hostable by setting a root directory in a web-server tool like nginx 

### Format
A set files in this github repo to be hosted on a web server

### Deadline
March 14, 2026


## Running Locally

You can run this website locally using one of the two methods below.

### Method 1: Direct Launch
The fastest way to view the site is to simply open the `index.html` file directly in your web browser.

### Method 2: Docker (Production Emulation)
To more closely mirror the production environment, use Docker.

#### **Prerequisites**
* **Docker & Docker-compose**
* **Linux Users:** Refer to the [Official Install Guide](https://docs.docker.com/engine/install/)

#### **Quick Reference Commands**

| Action | Command |
| :--- | :--- |
| **Start** the server | `docker-compose up -d` |
| **Stop** the server | `docker-compose stop` |
| **View Logs** | `docker-compose logs -f` |

 #### Access
 In your browser, go to **localhost:8080**

 

# Other
 - Contact River with any questions
 - look into nginx on docker for local development. Ask Blake for questions
 - look into JS frameworks like eleventy
