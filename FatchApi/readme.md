# JavaScript API Guide - From Basics to Advanced

## Table of Contents

1. [Basics of APIs](#basics-of-apis)
2. [HTTP Methods](#http-methods)
3. [Fetch API](#fetch-api)
4. [Async/Await](#asyncawait)
5. [Error Handling](#error-handling)
6. [Advanced Concepts](#advanced-concepts)
7. [Real World Examples](#real-world-examples)

## Getting Started

To follow this guide, you need:

- Basic knowledge of JavaScript
- A modern web browser
- A code editor
- Node.js (optional, for backend examples)

## Basics of APIs

Let's start with a simple example:

```javascript
// Basic API call
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```

## Common HTTP Methods

### GET Request

```javascript
// Fetching data
async function getData() {
  const response = await fetch("https://api.example.com/users");
  const data = await response.json();
  return data;
}
```

### POST Request

```javascript
// Creating data
async function createUser(userData) {
  const response = await fetch("https://api.example.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  return await response.json();
}
```

### PUT Request

```javascript
// Updating data
async function updateUser(id, userData) {
  const response = await fetch(`https://api.example.com/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  return await response.json();
}
```

### DELETE Request

```javascript
// Deleting data
async function deleteUser(id) {
  const response = await fetch(`https://api.example.com/users/${id}`, {
    method: "DELETE",
  });
  return response.ok;
}
```

## Advanced Concepts

### Authentication

```javascript
// Using JWT Token
className AuthenticatedAPI {
  constructor(baseURL, token) {
    this.baseURL = baseURL;
    this.token = token;
  }

  async request(endpoint, options = {}) {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      ...options,
      headers: {
        ...options.headers,
        'Authorization': `Bearer ${this.token}`
      }
    });
    return await response.json();
  }
}
```

### Error Handling

```javascript
async function safeAPICall(url, options = {}) {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}
```

### Rate Limiting

```javascript
className RateLimitedAPI {
  constructor(requestsPerSecond = 2) {
    this.queue = [];
    this.processing = false;
    this.rateLimit = 1000 / requestsPerSecond;
  }

  async enqueue(request) {
    return new Promise((resolve, reject) => {
      this.queue.push({ request, resolve, reject });
      this.processQueue();
    });
  }

  async processQueue() {
    if (this.processing) return;
    this.processing = true;

    while (this.queue.length > 0) {
      const { request, resolve, reject } = this.queue.shift();
      try {
        const response = await request();
        resolve(response);
      } catch (error) {
        reject(error);
      }
      await new Promise(r => setTimeout(r, this.rateLimit));
    }

    this.processing = false;
  }
}
```

## Real World Examples

### Weather API Integration

```javascript
className WeatherService {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL = 'https://api.weatherapi.com/v1';
  }

  async getWeather(city) {
    try {
      const response = await fetch(
        `${this.baseURL}/current.json?key=${this.apiKey}&q=${city}`
      );

      if (!response.ok) {
        throw new Error('Weather data unavailable');
      }

      const data = await response.json();
      return {
        temperature: data.current.temp_c,
        condition: data.current.condition.text,
        location: data.location.name
      };
    } catch (error) {
      console.error('Weather API Error:', error);
      throw error;
    }
  }

  async getForecast(city, days = 3) {
    try {
      const response = await fetch(
        `${this.baseURL}/forecast.json?key=${this.apiKey}&q=${city}&days=${days}`
      );

      if (!response.ok) {
        throw new Error('Forecast data unavailable');
      }

      const data = await response.json();
      return data.forecast.forecastday.map(day => ({
        date: day.date,
        maxTemp: day.day.maxtemp_c,
        minTemp: day.day.mintemp_c,
        condition: day.day.condition.text
      }));
    } catch (error) {
      console.error('Forecast API Error:', error);
      throw error;
    }
  }
}
```

### File Upload with Progress

```javascript
function uploadFile(file, onProgress) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const formData = new FormData();

    formData.append("file", file);

    xhr.upload.addEventListener("progress", (event) => {
      if (event.lengthComputable) {
        const progress = (event.loaded / event.total) * 100;
        onProgress(Math.round(progress));
      }
    });

    xhr.addEventListener("load", () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.response));
      } else {
        reject(new Error(`Upload failed: ${xhr.statusText}`));
      }
    });

    xhr.addEventListener("error", () => {
      reject(new Error("Upload failed"));
    });

    xhr.open("POST", "https://api.example.com/upload");
    xhr.send(formData);
  });
}

// Usage
const fileInput = document.querySelector('input[type="file"]');
fileInput.addEventListener("change", async (e) => {
  const file = e.target.files[0];
  try {
    await uploadFile(file, (progress) => {
      console.log(`Upload progress: ${progress}%`);
    });
    console.log("Upload complete!");
  } catch (error) {
    console.error("Upload failed:", error);
  }
});
```

### Caching API Responses

```javascript
className CachedAPI {
  constructor(cacheDuration = 5 * 60 * 1000) { // 5 minutes default
    this.cache = new Map();
    this.cacheDuration = cacheDuration;
  }

  async fetch(url, options = {}) {
    const cacheKey = `${url}-${JSON.stringify(options)}`;
    const cached = this.cache.get(cacheKey);

    if (cached && Date.now() - cached.timestamp < this.cacheDuration) {
      return cached.data;
    }

    const response = await fetch(url, options);
    const data = await response.json();

    this.cache.set(cacheKey, {
      timestamp: Date.now(),
      data
    });

    return data;
  }

  clearCache() {
    this.cache.clear();
  }

  removeCacheItem(url, options = {}) {
    const cacheKey = `${url}-${JSON.stringify(options)}`;
    this.cache.delete(cacheKey);
  }
}
```

## Best Practices

1. **Error Handling**

   - Always implement proper error handling
   - Use try-catch blocks with async/await
   - Handle different types of errors appropriately

2. **Security**

   - Never expose API keys in client-side code
   - Use HTTPS for all API calls
   - Implement proper authentication

3. **Performance**

   - Implement caching when appropriate
   - Use rate limiting for API calls
   - Handle loading states in your UI

4. **Code Organization**

   - Create reusable API service classNamees
   - Separate API logic from business logic
   - Use environment variables for configuration

5. **Documentation**
   - Document your API integration code
   - Include examples in your documentation
   - Keep track of API versions you're using

## Common HTTP Status Codes

- 200: OK
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Internal Server Error

## Debugging Tips

1. Use console.log() to debug API responses
2. Check Network tab in browser DevTools
3. Validate request/response data
4. Test error scenarios
5. Use API testing tools (Postman, Insomnia)
