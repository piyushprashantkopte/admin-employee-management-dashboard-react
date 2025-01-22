
const employees = [
  {
    "id": 1,
    "firstName": "Aarav",
    "email": "emp1@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Task 1",
        "taskDescription": "Complete the monthly report",
        "taskDate": "2025-01-20",
        "category": "Work"
      },
      {
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Task 2",
        "taskDescription": "Update the employee database",
        "taskDate": "2025-01-18",
        "category": "Admin"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Task 3",
        "taskDescription": "Fix server issue",
        "taskDate": "2025-01-15",
        "category": "IT"
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Priya",
    "email": "emp2@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Task 1",
        "taskDescription": "Prepare the presentation for clients",
        "taskDate": "2025-01-20",
        "category": "Work"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Task 2",
        "taskDescription": "Organize team meeting",
        "taskDate": "2025-01-19",
        "category": "Work"
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Ananya",
    "email": "emp3@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Task 1",
        "taskDescription": "Test new software update",
        "taskDate": "2025-01-20",
        "category": "Testing"
      },
      {
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Task 2",
        "taskDescription": "Review project proposals",
        "taskDate": "2025-01-18",
        "category": "Work"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Task 3",
        "taskDescription": "Update system configurations",
        "taskDate": "2025-01-16",
        "category": "IT"
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Ravi",
    "email": "emp4@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "completed": 0,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Task 1",
        "taskDescription": "Draft proposal for new project",
        "taskDate": "2025-01-20",
        "category": "Work"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Task 2",
        "taskDescription": "Fix broken links on the website",
        "taskDate": "2025-01-19",
        "category": "Web Development"
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Vikram",
    "email": "emp5@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Task 1",
        "taskDescription": "Analyze quarterly sales data",
        "taskDate": "2025-01-20",
        "category": "Sales"
      },
      {
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Task 2",
        "taskDescription": "Create marketing strategy for new product",
        "taskDate": "2025-01-19",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Task 3",
        "taskDescription": "Address customer complaints",
        "taskDate": "2025-01-18",
        "category": "Customer Service"
      }
    ]
  }
];

const admin = [{
  "id": 1,
  "email": "admin@example.com",
  "password": "123"
}];

      
      
export const setLocalStorage = () => {
  localStorage.setItem('employees',JSON.stringify(employees))
  localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('employees'))

  return{employees,admin}
}