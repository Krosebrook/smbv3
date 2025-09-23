import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ShoppingBag, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Package,
  User,
  Mail,
  Phone,
  Building,
  Plus,
  BarChart3
} from "lucide-react";

interface User {
  id: number;
  name: string;
  email: string;
  company: string;
  role: string;
  phone?: string;
}

interface DashboardProps {
  user: User;
  onLogout: () => void;
}

const CustomerDashboard = ({ user, onLogout }: DashboardProps) => {
  // Mock data - in real app this would come from API
  const stats = {
    totalOrders: 12,
    activeQuotes: 3,
    completedOrders: 9,
    totalSpent: 45750
  };

  const recentOrders = [
    {
      id: "ORD-001",
      product: "Custom Branded Shoes",
      quantity: 50,
      status: "In Production",
      date: "Dec 15, 2024",
      total: 2500,
      statusColor: "yellow"
    },
    {
      id: "ORD-002", 
      product: "Corporate Event Setup",
      quantity: 1,
      status: "Completed",
      date: "Dec 10, 2024",
      total: 8500,
      statusColor: "green"
    },
    {
      id: "ORD-003",
      product: "Custom Promotional Items",
      quantity: 200,
      status: "Shipped",
      date: "Dec 5, 2024",
      total: 3200,
      statusColor: "blue"
    }
  ];

  const savedQuotes = [
    {
      id: "QUO-001",
      name: "Holiday Corporate Gifts",
      items: 5,
      estimatedTotal: 12500,
      validUntil: "Dec 31, 2024"
    },
    {
      id: "QUO-002",
      name: "Team Building Event",
      items: 3,
      estimatedTotal: 7800,
      validUntil: "Jan 15, 2025"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "in production":
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case "shipped":
        return <Package className="w-4 h-4 text-blue-500" />;
      default:
        return <AlertCircle className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusBadgeVariant = (color: string) => {
    switch (color) {
      case "green": return "default";
      case "yellow": return "secondary";
      case "blue": return "outline";
      default: return "outline";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-accent">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, {user.name}</p>
          </div>
          <Button onClick={onLogout} variant="outline">
            Sign Out
          </Button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Orders</p>
                  <p className="text-3xl font-bold text-accent">{stats.totalOrders}</p>
                </div>
                <ShoppingBag className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Quotes</p>
                  <p className="text-3xl font-bold text-accent">{stats.activeQuotes}</p>
                </div>
                <Clock className="w-8 h-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Completed Orders</p>
                  <p className="text-3xl font-bold text-accent">{stats.completedOrders}</p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Spent</p>
                  <p className="text-3xl font-bold text-accent">${stats.totalSpent.toLocaleString()}</p>
                </div>
                <BarChart3 className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Orders */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Recent Orders</CardTitle>
                <Button variant="outline" size="sm">
                  View All Orders
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        {getStatusIcon(order.status)}
                        <div>
                          <p className="font-medium text-accent">{order.product}</p>
                          <p className="text-sm text-muted-foreground">
                            Order #{order.id} • Qty: {order.quantity} • {order.date}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant={getStatusBadgeVariant(order.statusColor)} className="mb-2">
                          {order.status}
                        </Badge>
                        <p className="font-semibold text-accent">${order.total.toLocaleString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Account Info & Quick Actions */}
          <div className="space-y-6">
            {/* Account Info */}
            <Card>
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <User className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{user.name}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{user.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Building className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{user.company}</span>
                </div>
                {user.phone && (
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{user.phone}</span>
                  </div>
                )}
                <Button variant="outline" size="sm" className="w-full mt-4">
                  Edit Profile
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Plus className="w-4 h-4 mr-2" />
                  Request New Quote
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Package className="w-4 h-4 mr-2" />
                  Browse Products
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  View Analytics
                </Button>
              </CardContent>
            </Card>

            {/* Saved Quotes */}
            <Card>
              <CardHeader>
                <CardTitle>Saved Quotes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {savedQuotes.map((quote) => (
                    <div key={quote.id} className="p-3 bg-gray-50 rounded-lg">
                      <p className="font-medium text-sm text-accent">{quote.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {quote.items} items • ${quote.estimatedTotal.toLocaleString()}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Valid until {quote.validUntil}
                      </p>
                    </div>
                  ))}
                  <Button variant="outline" size="sm" className="w-full">
                    View All Quotes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;