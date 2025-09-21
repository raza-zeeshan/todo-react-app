# Todo App

A simple React-based Todo application that allows users to add, check/uncheck, and remove tasks. The app persists tasks in the browser's localStorage.

## Features

- **Add Tasks:** Enter a title and note to add a new todo item.
- **Mark as Completed:** Use the checkbox to mark tasks as done/undone.
- **Remove Tasks:** Delete tasks from the list.
- **Progress Calculation:** Shows total tasks and percentage completed.
- **Persistent Storage:** Tasks are saved in localStorage and restored on reload.
- **Responsive UI:** Uses Bootstrap for styling.

## Folder Structure

```
todo-app/
├── public/
│   └── index.html
├── src/
│   ├── component/
│   │   └── TodoList.jsx
│   ├── App.jsx
│   └── index.js
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/todo-app.git
    cd todo-app
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

### Running the App

Start the development server:
```sh
npm start
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

- **Add a Task:** Fill in the "Add Title" and "Add Note" fields, then click "Add Note".
- **Mark Complete:** Click the checkbox next to a task to mark it as completed.
- **Remove Task:** Click the ❌ button to delete a task.
- **View Progress:** See the total and completed percentage at the bottom.

## Main Components

- [`TodoList`](src/component/TodoList.jsx): Main component containing all logic and UI.
    - Form for adding tasks
    - TaskList for displaying tasks
    - Calculation for progress stats

## Data Persistence

- All tasks are stored in `localStorage` under the key `"tasks"`.
- On page reload, tasks are loaded from localStorage.

## Customization

- You can modify the UI by editing [`TodoList.jsx`](src/component/TodoList.jsx).
- Styling uses Bootstrap classes for layout and colors.

## License

This project is licensed under the MIT License.
