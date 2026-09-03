Complete Backend Development Bootcamp with Node.js and Modern Tooling

A hands-on journey into modern backend development using Node.js, Express.js, PostgreSQL, Drizzle ORM, MongoDB, JWT, Docker, and AWS.

This repository contains my learning notes, exercises, projects, and implementations from the Complete Backend Development Bootcamp with Node.js and Modern Tooling.

The goal of this course is to build a strong understanding of backend development fundamentals and learn how to design, develop, secure, containerize, and deploy production-ready backend applications.

📚 About the Course

This course takes a practical, step-by-step approach to backend development with Node.js.

It starts with the fundamentals of JavaScript required for backend development and gradually moves into building scalable applications, working with relational and NoSQL databases, implementing authentication and authorization, designing REST APIs, understanding system design concepts, and deploying applications using modern cloud and containerization tools.

By the end of the course, the goal is to be comfortable building and deploying real-world backend applications.

🎯 What I Will Learn
JavaScript Fundamentals

Before working extensively with Node.js, the course covers important JavaScript concepts that are heavily used in backend development:

Variables and scope
Functions
Closures
Callbacks
Promises
async/await
Error handling
Event-driven programming
Asynchronous JavaScript
Modules

The focus is not just on writing JavaScript, but on understanding how it works internally and how those concepts apply to backend applications.

🟢 Node.js and Express.js

Learn how to build backend applications and RESTful APIs using Node.js and Express.js.

Topics include:

Node.js fundamentals
Express.js
HTTP request/response cycle
Routing
Controllers
Middleware
Error handling
REST API design
Request validation
API testing
Project structure
Scalable application architecture
🏗️ Application Architecture

The course introduces the Model-View-Controller (MVC) architecture and other concepts used to organize backend applications.

The goal is to understand how to structure applications so that they remain:

Maintainable
Scalable
Reusable
Testable
Easy to understand
🗄️ Databases

A major part of the course focuses on working with both SQL and NoSQL databases.

PostgreSQL

Learn how to work with PostgreSQL as a relational database.

Topics include:

Database fundamentals
Tables
Columns
Primary keys
Foreign keys
Relationships
One-to-one relationships
One-to-many relationships
Many-to-many relationships
Indexes
Querying data
Database schema design
PostgreSQL with Docker
Drizzle ORM

Learn how to interact with PostgreSQL using Drizzle ORM.

Topics include:

ORM fundamentals
Schema definition
Type-safe queries
Migrations
Relationships
CRUD operations
Indexes
Database integration with Node.js
MongoDB

The course also introduces MongoDB to understand NoSQL databases and when they can be useful.

Topics include:

MongoDB fundamentals
Collections and documents
CRUD operations
Mongoose
Schema design
Data modeling
Aggregation pipeline
Reporting and data processing
🔐 Authentication and Authorization

Security is an important part of backend development.

The course covers different approaches to authentication and authorization, including:

Authentication vs authorization
Session-based authentication
Stateless authentication
JWT authentication
Access tokens
Protected routes
Role-based access control (RBAC)
Express authentication middleware
Authorization middleware
Secure API design
🖥️ EJS and Server-Side Rendering

The course also explores server-side rendered applications using EJS.

Topics include:

Templating engines
EJS fundamentals
Dynamic HTML rendering
Passing data from backend to views
Integrating EJS with Express.js
Understanding where server-side rendering fits into modern applications
🐳 Docker

Docker is used throughout the course to understand containerized development and deployment.

Topics include:

Docker fundamentals
Images
Containers
Dockerfiles
Docker Compose
Containerizing Node.js applications
Running PostgreSQL with Docker
Development environments
Production containerization
☁️ Deployment and AWS

The course introduces production deployment workflows and cloud infrastructure concepts.

Topics include:

Production environments
Application deployment
Docker-based deployment
AWS fundamentals
AWS ECR
Container image management
Deployment workflows
Production considerations
⚙️ System Design Fundamentals

The course also introduces important system design concepts used when building scalable applications.

Topics include:

Reverse Proxy vs Forward Proxy

Understanding the difference between:

Forward proxies
Reverse proxies
Their use cases
How reverse proxies fit into web architectures
Scaling

Understanding:

Vertical scaling
Horizontal scaling
When each approach is appropriate
Challenges associated with scaling applications
Deployment Strategies

Exploring deployment strategies such as:

Blue-green deployments
Rolling updates
Zero/minimal downtime deployments
Production release workflows
🧪 API Testing

Postman is used to test and debug backend APIs.

This includes:

Sending HTTP requests
Testing REST APIs
Working with request headers
Sending request bodies
Authentication testing
Testing protected endpoints
Debugging API responses
🛠️ Technologies and Tools

The major technologies covered in this course include:

Technology	Purpose
JavaScript	Programming language
Node.js	JavaScript runtime
Express.js	Backend web framework
PostgreSQL	Relational database
Drizzle ORM	Type-safe database ORM
MongoDB	NoSQL database
Mongoose	MongoDB ODM
JWT	Stateless authentication
EJS	Server-side templating
Docker	Containerization
Postman	API testing
AWS ECR	Container image registry
Git	Version control
📂 Repository Structure

The repository will evolve as I progress through the course.

A possible structure is:

backend-development-bootcamp/
│
├── javascript/
│   ├── fundamentals/
│   ├── async-javascript/
│   ├── promises/
│   └── event-driven-programming/
│
├── node-express/
│   ├── basics/
│   ├── routing/
│   ├── middleware/
│   └── rest-api/
│
├── databases/
│   ├── postgresql/
│   ├── drizzle/
│   ├── mongodb/
│   └── mongoose/
│
├── authentication/
│   ├── sessions/
│   ├── jwt/
│   └── authorization/
│
├── ejs/
│
├── docker/
│
├── system-design/
│
├── deployment/
│   └── aws/
│
├── projects/
│
└── README.md

🚀 Learning Goals

By completing this course, I aim to be able to:

Understand backend development fundamentals
Build backend applications using Node.js
Develop RESTful APIs using Express.js
Structure applications using scalable architecture
Work confidently with PostgreSQL
Use Drizzle ORM for type-safe database operations
Understand relational database design
Work with MongoDB and Mongoose
Implement CRUD operations
Build authentication systems using sessions and JWT
Implement role-based authorization
Write reusable Express middleware
Test and debug APIs using Postman
Containerize applications using Docker
Understand fundamental system design concepts
Deploy containerized applications
Understand basic AWS deployment workflows
Build secure, maintainable, and scalable backend applications
📋 Prerequisites

The course is designed for beginners.

Required
Basic knowledge of JavaScript
Understanding of variables, functions, loops, and basic programming concepts
A computer with internet access
Willingness to write, break, debug, and improve code
Not Required
Prior Node.js experience
Prior Express.js experience
Professional backend development experience
Advanced database knowledge
Prior Docker experience
Prior AWS experience

Everything else is introduced throughout the course.

👨‍💻 Who This Course Is For

This course is suitable for:

Beginners who want to become backend developers
Frontend developers who want to learn backend development
JavaScript developers moving into Node.js
Developers preparing for backend technical interviews
Developers who want to strengthen their database knowledge
Anyone interested in understanding how modern web backends work
🧠 Learning Approach

The focus of this repository is learning by building.

Instead of only watching lectures, I will use this repository to:

Learn the concept
Implement it myself
Experiment with the code
Break things intentionally
Debug errors
Build small features
Apply concepts to projects
Document what I learned

The objective is to understand why things work, not just memorize how to implement them.

🏆 Final Goal

By the end of this course, I want to be capable of taking a backend application from an initial idea to a production-ready system.

That means being able to:

Idea
  ↓
Design
  ↓
Database Schema
  ↓
Backend Architecture
  ↓
REST API
  ↓
Authentication & Authorization
  ↓
Testing
  ↓
Dockerization
  ↓
Deployment
  ↓
Production

📈 Progress

I will track my progress through this repository as I complete different sections of the course.

            JavaScript Fundamentals
 Node.js Fundamentals
 Express.js
 MVC Architecture
 REST APIs
 PostgreSQL
 Drizzle ORM
 Database Relationships
 Database Indexes
 Session Authentication
 JWT Authentication
 Authorization / RBAC
 EJS
 MongoDB
 Mongoose
 MongoDB Aggregation
 System Design Fundamentals
 Docker
 AWS ECR
 Production Deployment
 Final Backend Project
📚 Course Topics at a Glance
JavaScript
   │
   ├── Fundamentals
   ├── Async/Await
   ├── Promises
   └── Event-Driven Programming
   │
   ▼
Node.js
   │
   └── Express.js
          │
          ├── Routing
          ├── Controllers
          ├── Middleware
          └── REST APIs
          │
          ▼
      Databases
       ┌───────┴───────┐
       ▼               ▼
 PostgreSQL          MongoDB
       │               │
   Drizzle          Mongoose
       │               │
       └───────┬───────┘
               ▼
       Authentication
               │
          ┌────┴────┐
          ▼         ▼
       Sessions    JWT
          │         │
          └────┬────┘
               ▼
        Authorization
               │
               ▼
          System Design
               │
               ▼
            Docker
               │
               ▼
             AWS
               │
               ▼
          Deployment

⭐ Outcome

This repository represents my journey toward becoming a stronger backend developer by learning how modern backend systems are designed, implemented, secured, tested, containerized, and deployed.

Learn → Build → Break → Debug → Understand → Improve
