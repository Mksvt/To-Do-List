# 📝 Simple To-Do List with Date Support

A lightweight and stylish To-Do list built with plain JavaScript. Add tasks with a date, mark them as done, edit or delete — everything works right in your browser, no dependencies required.

## 🌟 Features

- 🆕 Add new tasks with a date  
- ✅ Mark tasks as completed (checkbox)  
- ✏️ Edit tasks  
- ❌ Delete tasks  
- 💾 Automatically saved to `localStorage`  
- ♻️ Load saved tasks on page reload  

## 🖼️ Interface

DOM elements used in the app:
- `.taskInput` — input field for the task text  
- `.taskTime` — input field for date/time  
- `.addTaskButton` — "Add Task" button  
- `.taskList` — container for task items  


## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/your-username/todo-list.git
```

2. Navigate into the project folder:
```bash
cd todo-list
```

3. Open `index.html` in any browser:
```bash
start index.html
```

> No installation or build steps required — works right out of the box!

## 🛠️ Built With

- HTML5  
- CSS3
- JavaScript (ES6)  
- `localStorage` for persistent task storage  

## 📦 Data Storage Format

Tasks are saved to `localStorage` in the following JSON format:
```json
[
  {
    "text": "Buy milk",
    "date": "00:00",
    "completed": false
  }
]
```

## 📌 Future Improvements

Filter by active/completed  
Sort by date  
Dark mode  


## 📄 License

MIT License — feel free to use, modify, and share.
