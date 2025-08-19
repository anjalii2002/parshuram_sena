"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, TrendingUp, Users, MapPin, Calendar, Activity } from "lucide-react"

export function AnalyticsDashboard() {
  // Mock analytics data
  const analytics = {
    memberGrowth: {
      thisMonth: 12,
      lastMonth: 8,
      growth: 50,
    },
    topStates: [
      { name: "Uttar Pradesh", count: 45 },
      { name: "Bihar", count: 32 },
      { name: "Madhya Pradesh", count: 28 },
      { name: "Rajasthan", count: 22 },
      { name: "Delhi", count: 18 },
    ],
    eventAttendance: {
      totalEvents: 8,
      totalAttendees: 1250,
      averageAttendance: 156,
    },
    membersByProfession: [
      { profession: "Software Engineer", count: 25 },
      { profession: "Teacher", count: 22 },
      { profession: "Doctor", count: 18 },
      { profession: "Business Owner", count: 15 },
      { profession: "Lawyer", count: 12 },
    ],
  }

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Member Growth</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">+{analytics.memberGrowth.thisMonth}</div>
            <p className="text-xs text-muted-foreground">+{analytics.memberGrowth.growth}% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Event Attendance</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{analytics.eventAttendance.averageAttendance}</div>
            <p className="text-xs text-muted-foreground">Average per event</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Geographic Reach</CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{analytics.topStates.length}</div>
            <p className="text-xs text-muted-foreground">Active states</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">78%</div>
            <p className="text-xs text-muted-foreground">Active participation</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top States */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-primary" />
              Members by State
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analytics.topStates.map((state, index) => (
                <div key={state.name} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm font-medium text-primary">
                      {index + 1}
                    </div>
                    <span className="font-medium">{state.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-slate-200 rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: `${(state.count / analytics.topStates[0].count) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-slate-600">{state.count}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Members by Profession */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="h-5 w-5 mr-2 text-primary" />
              Members by Profession
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analytics.membersByProfession.map((profession, index) => (
                <div key={profession.profession} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center text-sm font-medium text-accent">
                      {index + 1}
                    </div>
                    <span className="font-medium">{profession.profession}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-slate-200 rounded-full h-2">
                      <div
                        className="bg-accent h-2 rounded-full"
                        style={{ width: `${(profession.count / analytics.membersByProfession[0].count) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-slate-600">{profession.count}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Event Performance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <BarChart3 className="h-5 w-5 mr-2 text-primary" />
            Event Performance Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{analytics.eventAttendance.totalEvents}</div>
              <p className="text-slate-600">Total Events</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{analytics.eventAttendance.totalAttendees}</div>
              <p className="text-slate-600">Total Attendees</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{analytics.eventAttendance.averageAttendance}</div>
              <p className="text-slate-600">Average Attendance</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
