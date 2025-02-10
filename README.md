# Jadwal Kuliah - PWA Schedule App

A Progressive Web App (PWA) for managing university class schedules. Built with React, Vite, and Tailwind CSS.

## 📑 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Editing Schedule](#editing-schedule)
  - [Schedule Data Structure](#schedule-data-structure)
- [PWA Features](#pwa-features)
- [UI Components](#ui-components)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## 🌟 Features

- 📱 Progressive Web App (PWA) - installable on mobile devices
- 📅 View mandatory and elective courses
- 📌 Pin courses
- 🎨 Color-coded days for better visualization
- 📱 Responsive design for mobile and desktop
- 🔄 Offline support
- ⚡ Fast and lightweight

## 🛠️ Tech Stack

- React 18
- Vite
- Tailwind CSS
- shadcn/ui (Component Library)
- Lucide Icons
- React Router DOM
- Workbox (PWA)

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/0xtbug/jadwal-kuliah.git
```

2. Install dependencies

```bash
npm install
# or
yarn
```

3. Start development server
```bash
npm run dev
# or
yarn dev
```

4. Build for production
```bash
npm run build
# or
yarn build
```

## 📝 Editing Schedule

To add or modify the schedule, edit the `src/config/scheduleData.js` file:

```javascript
export const scheduleData = [
  {
    id: "101",                                    // Unique identifier
    day: "SENIN",                                // Day of the week
    time: "07.30-10.00",                         // Time format: "HH.mm-HH.mm"
    code: "FIK61545",                            // Course code
    subject: "METODOLOGI PENELITIAN",            // Course name
    credits: 3,                                  // Number of credits
    lecturer: "Didi Juardi, S.T., M.Kom.",      // Lecturer name
    group: "KELAS WAJIB",                        // KELAS WAJIB or KELAS PILIHAN
    room: "Kelas 4.76 - 2",                      // Room location
    department: "IF",                            // Department code
  },
  // Add more courses...
];

// Color scheme for different days
export const dayColors = {
  SENIN: "bg-blue-100 border-l-4 border-blue-500",
  SELASA: "bg-green-100 border-l-4 border-green-500",
  RABU: "bg-yellow-100 border-l-4 border-yellow-500",
  KAMIS: "bg-purple-100 border-l-4 border-purple-500",
  "JUM'AT": "bg-pink-100 border-l-4 border-pink-500",
  SABTU: "bg-orange-100 border-l-4 border-orange-500",
};
```

### Schedule Data Structure

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| id | string | Unique identifier | "101" |
| day | string | Day of the week | "SENIN" |
| time | string | Course time | "07.30-10.00" |
| code | string | Course code | "FIK61545" |
| subject | string | Course name | "METODOLOGI PENELITIAN" |
| credits | number | Credit units | 3 |
| lecturer | string | Lecturer name | "Didi Juardi, S.T., M.Kom." |
| group | string | Course type | "KELAS WAJIB" |
| room | string | Room location | "Kelas 4.76 - 2" |
| department | string | Department | "IF" |

## 📱 PWA Features

- Offline support
- Installable on mobile devices
- Cache management

## 🎨 UI Components

- Schedule Cards
- Navigation Tabs
- Pin Feature
- Mobile Navigation Bar

## 📂 Project Structure

```
src/
├── components/
│   ├── schedule/
│   │   ├── ScheduleCard.jsx
│   │   └── ScheduleNav.jsx
│   └── ui/
├── config/
│   └── scheduleData.js
├── hooks/
│   ├── useSchedule.js
│   └── usePinnedCourses.js
├── pages/
│   └── Home.jsx
└── App.jsx
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.