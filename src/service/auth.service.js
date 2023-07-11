const apiUrl1 = "http://localhost:9000";

class AuthService {
  static async postSignup(body, onError, onComplete) {
    let url = apiUrl1 + "/signup";
    try {
      const res = await fetch(url, {
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
        config: {
          credentials: "include",
        },
        method: "POST",
      });
      const data = await res.json();
      if (data.success) {
        onComplete();
      } else {
        onError(data.msg);
      }
    } catch (error) {
      console.log(error.message);
      onError(error.message);
    }
  }

  static async postLogin(user, password, onError, onComplete) {
    let url = apiUrl1 + "/login";
    try {
      const res = await fetch(url, {
        body: JSON.stringify({ email: user, password }),

        headers: {
          "Content-Type": "application/json",
        },
        config: {
          credentials: "include",
        },
        method: "POST",
      });
      const data = await res.json();
      if (data.success) {
        onComplete(data.user);
      } else {
        onError(data.msg ? data.msg : "Server Error");
      }
    } catch (error) {
      console.log(error.message);
      onError(error.message);
    }
  }
}

export default AuthService;
