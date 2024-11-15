import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  
  // Initiate automatic logout check on service instantiation
  constructor() {
    this.autoLogoutOnTokenExpiry(); 
  }

  getProfile() {
    // return the decoded token
    const token = this.getToken();
    if (token) {
      return jwtDecode<JwtPayload>(token)
    } else return null
  }

  loggedIn() {
    //  return a value that indicates if the user is logged in
    const token = this.getToken();
    return token;
  }

  isTokenExpired(token: string): boolean {
    //  return a value that indicates if the token is expired
    try {
      // intersection typing eg.(<JwtPayload & { exp?: number }>) makes it a string & a number type with the number being optional in this case.
      const decoded = jwtDecode<JwtPayload & { exp?: number }>(token)
      if (decoded.exp) {  // Date.now returns time in milliseconds and exp returns time in seconds. hence dividing by 1000
        const currentTime = Date.now() / 1000;
        return decoded.exp < currentTime;
      }
      return false
    } catch (error) {
      return true
    }
  }
  getToken(): string | null {
    //  return the token
    return localStorage.getItem('token')
  }
  
  login(idToken: string) {
    //  set the token to localStorage
    localStorage.setItem('token', idToken)
  }
  
  logout() { 
    // remove the token from localStorage
    localStorage.removeItem('token')
    // redirect to the login page

    window.location.href = ('/login')
  }

  autoLogoutOnTokenExpiry() {
    const token = this.getToken();
    if (!token) return;

    setInterval(() => {
      if (this.isTokenExpired(token)) {
        this.logout();
      }
    }, 15000); // Check every minute (60000 ms)
  }

}

export default new AuthService();
