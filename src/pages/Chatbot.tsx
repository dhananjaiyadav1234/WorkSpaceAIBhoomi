import { AIChatAssistant } from "@/components/AIChatAssistant";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { LogOut, User, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Chatbot = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    // Redirect to home if not authenticated
    navigate('/');
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header with navigation and user info */}
      <div className="w-full flex justify-between items-center p-4 border-b">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate('/')}
            className="flex items-center gap-1"
          >
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Dashboard
          </Button>
          <div className="text-xl font-semibold text-primary">
            WorkSpaceAI Chat
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 mr-2 text-gray-700 font-medium">
            <User className="w-5 h-5" />
            <span>{user.name}</span>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              logout();
              toast.success("Logged out successfully");
              navigate('/');
            }}
            className="flex items-center gap-1"
          >
            <LogOut className="w-4 h-4 mr-1" /> Logout
          </Button>
        </div>
      </div>

      {/* Chatbot Content */}
      <div className="py-8">
        <AIChatAssistant />
      </div>
    </div>
  );
};

export default Chatbot;
