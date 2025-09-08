# Loan Application (Multi‑Step Form)

A multi‑step loan application built with React, Ant Design, MUI, Tailwind utilities for layout accents, and Yup for per‑step validation. Data is submitted once at the end to a local JSON API powered by json-server.

## Features

- Multi‑step flow with a segmented StepBar (solid color between circles; no color mixing).
- Ant Design form fields (Input, Select, Checkbox) with Yup validation and inline errors.
- Single final submission to a local JSON file using json-server.

## Tech Stack

- React + Vite
- Ant Design (components)
- Tailwind (utility classes for spacing/rounding/shadows)
- Yup (validation)
- json-server (mock API)

## Prerequisites

- Node 18+ and npm
- Ports available:
  - 5173 (Vite dev server)
  - 8080 (json-server API)

## Setup

After forking, clone the repo and run the following commands:

1) Install dependencies
- npm install

2) Tailwind (if not already configured)
- Ensure tailwind.config.js scans src and index.html.

3) Create the mock database
- db/Applications.json
```
{
  "applications": []
}
```
- This exposes a REST collection at /applications.

## Running

Terminal A – start the API:
- npm run api
- Endpoints:
  - GET http://localhost:8080/applications
  - POST http://localhost:8080/applications (persists to data/db.json)

Terminal B – start the app:
- npm run dev
- Open http://localhost:5173


Sample UI:
<img width="1755" height="2272" alt="image" src="https://github.com/user-attachments/assets/0675fc9c-69f2-4133-b2d8-770b5e70b5c9" />



