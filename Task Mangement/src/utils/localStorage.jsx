const employees = [
    {
      "id": 1,
      "firstName": "John",
      "email": "employee1@example.com",
      "password": "123",
      "taskCount": {
        "active": 2,
        "completed": 1,
        "newTask": 1,
        "failed": 0
      },
      "tasks": [
        {
          "title": "Fix website bug",
          "description": "Resolve the layout issue on the homepage.",
          "date": "2025-02-21",
          "category": "Development",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Write report",
          "description": "Prepare a weekly progress report.",
          "date": "2025-02-22",
          "category": "Documentation",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Client meeting",
          "description": "Discuss project requirements with client.",
          "date": "2025-02-23",
          "category": "Meetings",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 2,
      "firstName": "Emma",
      "email": "employee2@example.com",
      "password": "123",
      "taskCount": {
        "active": 1,
        "completed": 0,
        "newTask": 1,
        "failed": 1
      },
      "tasks": [
        {
          "title": "Test new feature",
          "description": "Perform QA testing on the new dashboard update.",
          "date": "2025-02-24",
          "category": "Testing",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        },
        {
          "title": "Code review",
          "description": "Review code submitted by the junior developer.",
          "date": "2025-02-21",
          "category": "Development",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 3,
      "firstName": "Liam",
      "email": "employee3@example.com",
      "password": "123",
      "taskCount": {
        "active": 2,
        "completed": 0,
        "newTask": 1,
        "failed": 0
      },
      "tasks": [
        {
          "title": "Prepare Presentation",
          "description": "Create slides for the team meeting.",
          "date": "2025-02-25",
          "category": "Meetings",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Update documentation",
          "description": "Add new API changes to the documentation.",
          "date": "2025-02-26",
          "category": "Documentation",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Fix login issue",
          "description": "Resolve authentication bug in the app.",
          "date": "2025-02-27",
          "category": "Development",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 4,
      "firstName": "Sophia",
      "email": "employee4@example.com",
      "password": "123",
      "taskCount": {
        "active": 1,
        "completed": 1,
        "newTask": 1,
        "failed": 0
      },
      "tasks": [
        {
          "title": "Analyze sales data",
          "description": "Review last month's sales data.",
          "date": "2025-02-21",
          "category": "Analytics",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Optimize database",
          "description": "Improve query performance for reports.",
          "date": "2025-02-23",
          "category": "Database",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Write blog post",
          "description": "Publish a tech blog about best coding practices.",
          "date": "2025-02-24",
          "category": "Content",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 5,
      "firstName": "Noah",
      "email": "employee5@example.com",
      "password": "123",
      "taskCount": {
        "active": 2,
        "completed": 0,
        "newTask": 1,
        "failed": 1
      },
      "tasks": [
        {
          "title": "Setup CI/CD pipeline",
          "description": "Implement automation for deployments.",
          "date": "2025-02-22",
          "category": "DevOps",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Security audit",
          "description": "Check for vulnerabilities in the system.",
          "date": "2025-02-26",
          "category": "Security",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        },
        {
          "title": "Meeting with HR",
          "description": "Discuss new hiring requirements.",
          "date": "2025-02-28",
          "category": "Meetings",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    }
  ]
 
  
  
  const admin = [
    {
      "id": 1,
      "firstName": "Alice",
      "email": "admin@example.com",
      "password": "123"
    }
  ];


  export const setLocalStorage = ()=>{
     localStorage.setItem('employees',JSON.stringify(employees))
     localStorage.setItem('admin',JSON.stringify(admin))
  }


  
  export const getLocalStorage = ()=>{
     const employees  = JSON.parse(localStorage.getItem('employees'));
     const admin  = JSON.parse(localStorage.getItem("admin"))

     return {employees,admin} 
  } 