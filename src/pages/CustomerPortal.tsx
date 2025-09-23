import { useState, useEffect } from "react";
import AuthModal from "@/components/Auth/AuthModal";
import CustomerDashboard from "@/components/Dashboard/CustomerDashboard";

interface User {
  id: number;
  name: string;
  email: string;
  company: string;
  role: string;
  phone?: string;
}

const CustomerPortal = () => {
  const [user, setUser] = useState<User | null>(null);

  // Check if user is logged in on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem("smbUser");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        localStorage.removeItem("smbUser");
      }
    }
  }, []);

  const handleAuthSuccess = (userData: User) => {
    setUser(userData);
    localStorage.setItem("smbUser", JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("smbUser");
  };

  if (!user) {
    return <AuthModal onSuccess={handleAuthSuccess} />;
  }

  return <CustomerDashboard user={user} onLogout={handleLogout} />;
};

export default CustomerPortal;