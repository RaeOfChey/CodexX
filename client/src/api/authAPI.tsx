import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  try {
    // Send a POST request to '/api/auth/login' with user login information in JSON format
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error: ${errorData.message}`);
    }

    const data = await response.json();

    // Store the token in localStorage
    if (data.token) {
      localStorage.setItem('id_token', data.token);
      console.log(localStorage.getItem('id_token'));
    } else {
      console.error('Token not found in response');
      throw new Error('Token missing in login response');
    }

    return data;
  } catch (err) {
    console.error('Error from user login:', err);
    return Promise.reject('Could not fetch user info');
  }
};

export const signup = async (formData: { username: string; email: string; password: string }) => {
  try {
    const response = await fetch('/api/auth/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Signup failed: ${errorData.message}`);
    }

    return await response.json();
  } catch (err) {
    console.error('Error from user signup:', err);
    return Promise.reject('Could not complete signup');
  }
};

export { login };
