"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Users, Calendar, BarChart3, Settings, UserPlus } from "lucide-react"
import { UserManagement } from "./user-management"
import { EventManagement } from "./event-management"
import { AnalyticsDashboard } from "./analytics-dashboard"

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock statistics
  const stats = {
    totalMembers: 156,
    newMembersThisMonth: 12,
    totalEvents: 8,
    upcomingEvents: 3,
    activeStates: 15,
    activeDistricts: 45,
  }

  const recentActivities = [
    {
      id: 1,
      type: "member_joined",
      message: "Rajesh Kumar Sharma joined from Lucknow, UP",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      type: "event_created",
      message: "Annual Cultural Festival event created",
      timestamp: "5 hours ago",
    },
    {
      id: 3,
      type: "member_joined",
      message: "Priya Devi Mishra joined from Patna, Bihar",
      timestamp: "1 day ago",
    },
    {
      id: 4,
      type: "event_updated",
      message: "Educational Seminar details updated",
      timestamp: "2 days ago",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Admin Dashboard</h1>
        <p className="text-xl text-slate-600">Manage your community website and members</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Members</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{stats.totalMembers}</div>
                <p className="text-xs text-muted-foreground">+{stats.newMembersThisMonth} from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Events</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{stats.totalEvents}</div>
                <p className="text-xs text-muted-foreground">{stats.upcomingEvents} upcoming events</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Geographic Reach</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{stats.activeStates}</div>
                <p className="text-xs text-muted-foreground">States, {stats.activeDistricts} districts</p>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button className="h-20 flex flex-col items-center justify-center">
                  <UserPlus className="h-6 w-6 mb-2" />
                  Add Member
                </Button>
                <Button variant="outline" className="h-20 flex flex-col items-center justify-center bg-transparent">
                  <Calendar className="h-6 w-6 mb-2" />
                  Create Event
                </Button>
                <Button variant="outline" className="h-20 flex flex-col items-center justify-center bg-transparent">
                  <BarChart3 className="h-6 w-6 mb-2" />
                  View Reports
                </Button>
                <Button variant="outline" className="h-20 flex flex-col items-center justify-center bg-transparent">
                  <Settings className="h-6 w-6 mb-2" />
                  Settings
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <div>
                        <p className="text-sm font-medium text-slate-900">{activity.message}</p>
                        <p className="text-xs text-slate-500">{activity.timestamp}</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {activity.type.replace("_", " ")}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users">
          <UserManagement />
        </TabsContent>

        <TabsContent value="events">
          <EventManagement />
        </TabsContent>

        <TabsContent value="analytics">
          <AnalyticsDashboard />
        </TabsContent>
      </Tabs>
    </div>
  )
}
