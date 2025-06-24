import jwt_decode from "jwt-decode";

class Auth {
  // decodes jwt from local storage and returns profile data
  getProfile() {
    const token = this.getToken();
    console.log("Token received: ", token); // check if token is received
    if (!token) return null;
    try {
      const decoded = jwt_decode(token);
      console.log("Decoded profile data:", decoded);  // check decoded data
      return decoded;
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  }

 
  // check if user is logged in by checking local storage for token
  loggedIn() {
    const token = this.getToken();
    // If there is a token and it's not expired, return `true`
    return token && !this.isTokenExpired(token) ? true : false;
  }
  isTokenExpired(token) {
    try {
      const decoded = jwt_decode(token);
      if (decoded.exp < Date.now() / 1000) {
        localStorage.removeItem("id_token");
        return true;
      }
      return false;
    } catch (error) {
      console.error("Error decoding token", error);
      return true;
    }
  }

  getToken() {
    return localStorage.getItem("id_token");
  }
  // logs in a user by adding the jwt idToken to local storage
  login(idToken) {
    // clear any existing token before storing a new one
    localStorage.removeItem("id_token");
    console.log("Storing token in localStorage:", idToken);
    localStorage.setItem("id_token", idToken);
    window.location.assign("/dashboard");
  }
  // logs out user by destroying jwt token from local storage
  logout() {
    localStorage.removeItem("id_token");
    window.location.assign("/login");
    console.log("logging out");
  }
}

export default new Auth();
