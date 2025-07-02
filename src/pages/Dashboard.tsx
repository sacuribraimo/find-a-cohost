
import { AuthNav } from "@/components/AuthNav";
import { RegistrationForm } from "@/components/RegistrationForm";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <AuthNav />
      
      <div className="max-w-6xl mx-auto pt-20 px-4">
        <RegistrationForm />
      </div>
    </div>
  );
};

export default Dashboard;
