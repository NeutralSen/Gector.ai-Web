export const registerUser = async (formData) => {
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        return { success: true, user: data.user }; // Return success and user data
      } else {
        return { success: false, error: data.error }; // Return error message
      }
    } catch (err) {
      console.error(err);
      return { success: false, error: "An error occurred. Please try again later." };
    }
  };
  
  export const loginUser = async (formData) => {
    try {
      const response = await fetch("/api/auth/login", {  // Adjusted endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        return { success: true, user: data.user };  // Return success and user data
      } else {
        return { success: false, error: data.error };  // Return error message
      }
    } catch (err) {
      console.error(err);
      return { success: false, error: "An error occurred. Please try again later." };
    }
  };
  