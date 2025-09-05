import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Bell, CheckCircle, AlertTriangle, Info, X } from "lucide-react";

interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NotificationModal = ({ isOpen, onClose }: NotificationModalProps) => {
  const notifications = [
    {
      id: 1,
      type: "success",
      title: "Prediction Complete",
      message: "Your wheat yield prediction for 15 hectares is ready",
      time: "2 minutes ago",
      unread: true,
    },
    {
      id: 2,
      type: "warning",
      title: "Weather Alert",
      message: "Heavy rainfall expected in your region next week",
      time: "1 hour ago",
      unread: true,
    },
    {
      id: 3,
      type: "info",
      title: "New Feature",
      message: "Market price integration is now available",
      time: "3 hours ago",
      unread: false,
    },
    {
      id: 4,
      type: "success",
      title: "Data Sync Complete",
      message: "Your farm data has been synchronized successfully",
      time: "1 day ago",
      unread: false,
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case "info":
        return <Info className="h-5 w-5 text-blue-500" />;
      default:
        return <Bell className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[600px]">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Bell className="h-5 w-5 mr-2" />
            Notifications
            <Badge variant="secondary" className="ml-2">
              {notifications.filter(n => n.unread).length}
            </Badge>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-3 max-h-[400px] overflow-y-auto">
          {notifications.map((notification) => (
            <Card key={notification.id} className={`p-4 ${notification.unread ? 'border-primary' : ''}`}>
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  {getIcon(notification.type)}
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-semibold text-sm">{notification.title}</h4>
                      {notification.unread && (
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                    <p className="text-xs text-muted-foreground mt-2">{notification.time}</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-between pt-4">
          <Button variant="outline" size="sm">
            Mark All as Read
          </Button>
          <Button variant="government" size="sm">
            View All Notifications
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NotificationModal;