export default class ApiService {
  constructor(url) {
    this.url = url; //'http://valerystatinov.com'
    this.token = "myAwesomeToken1234";
  }

  getAllProjects() {
    return fetch(`${this.url}/api/projects/`, {
      method: "GET",
      headers: {
        token: this.token,
      },
    });
  }

  postProject(data) {
    return fetch(`${this.url}/api/projects/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: this.token,
      },
      body: JSON.stringify({
        name: data.name,
      }),
    });
  }

  getTasks(projectId) {
    return fetch(`${this.url}/api/projects/${projectId}/tasks/`, {
      method: "GET",
      headers: {
        token: this.token,
      },
    });
  }

  postTask(data, projectId) {
    return fetch(`${this.url}/api/projects/${projectId}/tasks/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: this.token,
      },
      body: JSON.stringify({
        name: data.name,
        description: data.description,
        priority: data.priority,
      }),
    });
  }


  editTask(data, projectId, taskId) {
    return fetch(`${this.url}/api/projects/${projectId}/tasks/${taskId}/`, {
      method: 'PUT',
      
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        token: this.token
      }
    });
  }
  
}

export const Api = new ApiService('http://valerystatinov.com');
