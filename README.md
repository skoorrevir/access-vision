# Project Spec

## Problem
Access vision is a non-profit mobile eye clinic servicing rural Alabama. They need a professional looking website to impress funders and service customers.

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
 - the clinic information needs to be as easily editable as possible (e.g., JSON file).
 - The site needs to be hostable as a modern web application.

### Format
A set of files in this github repo to be hosted on a web server

### Deadline
March 14, 2026

## Running Locally (Next.js)

You can run this website locally using the Next.js development environment. This is the recommended method for development and making changes.

### Prerequisites
* **Node.js** (v18.0.0 or higher)
* **pnpm** (Recommended), **npm**, or **yarn**

### **Quick Reference Commands**

| Action | Command |
| :--- | :--- |
| **Install** dependencies | `pnpm install` |
| **Start** dev server | `pnpm dev` |
| **Build** for production | `pnpm build` |
| **Lint** code | `pnpm lint` |

#### Access
In your browser, go to **localhost:3000**

## Editing Content

The clinic team and schedule information is stored in JSON files for easy editing:
- Team Location: `src/data/team.json`
- Schedule Location: `src/data/schedule.json`

The site will automatically refresh with the new data during development, and prod will update with a merge to main.

# Other
 - Contact Wyatt (Project Manager) or River with any questions
 - This project uses Next.js and React.
 - The site needs to be hostable by setting a root directory in a web-server tool like nginx or via Vercel.
