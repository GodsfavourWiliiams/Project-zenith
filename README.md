# **Project Zenith**

Project Zenith is a task management project dashboard designed to improve collaboration, project management, and productivity. With Project Zenith, teams can easily collaborate on tasks, manage projects, and reach new levels of productivity.

The dashboard is designed with an intuitive and user-friendly interface, making it easy for team members to access project information, track progress, and communicate with each other. Project Zenith also allows for the creation of custom project templates, which can be used to streamline project management processes and ensure consistency across different projects.

[Live Link](https://www.google.com)

## Getting Started

First, run the development server:

```bash
npm run dev
```
Navigate to `http://localhost:3000/`

## Build

Run 
```bash
npm run start
```  
to build the project.

## Lint

Run 
```bash 
npm run lint
``` 
to execute lint.

## Features

Here's an expanded list of features for Project Zenith:

- **User Authentication**: Implement user registration, login, and logout functionality to secure user accounts and provide personalized task management.
- **User Roles and Permissions**: Assign different roles (e.g., admin, member) to users with varying levels of access and permissions within the system.
- **Password Reset**: Allow users to reset their passwords in case they forget them, providing a secure and user-friendly password recovery mechanism.
- **Create Teams and Collaborate**: Enable users to create teams or groups and invite other users to collaborate on projects or tasks together.
- **Project Management**: Implement features to create, update, and delete projects, including assigning team members, setting due dates, and adding project descriptions.
- **Task Creation and Assignment**: Allow users to create tasks within projects, assign tasks to team members, set due dates, and add task details.
- **Task Status and Progress Tracking**: Provide options to mark tasks as complete, track task progress, and view the overall status of tasks and projects.
- **Task Prioritization**: Allow users to set task priorities (e.g., high, medium, low) to manage and prioritize their workload effectively.
- **Task Filtering and Sorting**: Implement filters and sorting options to help users find tasks based on various criteria (e.g., status, due date, priority).
- **Notifications and Reminders**: Send notifications and reminders to users for upcoming task deadlines, task assignments, or any other relevant updates.
- **Comments and Discussions (pending approval)**: Enable users to leave comments on tasks, facilitating collaboration and communication within the team.
- **Attachments and File Management**: Allow users to attach files or documents to tasks, ensuring important information is easily accessible and shared within the system.
- **Personal To-Do Lists**: Provide a separate section for users to manage personal to-do lists and tasks not associated with specific projects or teams.
- **Task Search**: Implement a search functionality to quickly find tasks or projects based on keywords or specific criteria.
- **Reporting and Analytics**: Generate reports and visualizations to provide insights into task and project progress, team performance, and other relevant metrics.
- **Responsive Design**: Ensure the task management system is responsive and works well on different devices, including desktops, tablets, and mobile devices.

## Tech Stack

**Frontend:**

- Next.js 13: A React framework that provides server-side rendering, routing, and other helpful features.
- Redux: A predictable state container for managing application state.
- Tailwind CSS: A utility-first CSS framework for quickly styling your application.
- Axios: A popular library for making HTTP requests from the browser.
- Formik (pending approval): A form library for handling form validation, submission, and management.
- Yup: A schema validation library to validate form inputs.

**Backend:**

- Supabase: An open-source alternative to Firebase that provides a PostgreSQL database with built-in authentication and real-time capabilities.
- JWT (JSON Web Tokens): A secure method for authentication and authorization.

**Deployment and Hosting:**

- Vercel: A platform for hosting and deploying Next.js applications.
- Supabase Hosting: Supabase provides hosting capabilities for static files.

**Testing and Quality Assurance:**

- Jest: A popular testing framework for writing unit tests.

**Other Tools and Libraries:**

- ESLint: A popular linting tool for ensuring code quality and following best practices.
- Prettier: A code formatter for maintaining consistent code style.
- Husky: A tool for running scripts, such as code linting or testing, before committing code to version control.
