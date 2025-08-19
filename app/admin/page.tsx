// "use client"

// import { useAuth } from "@/hooks/use-auth"
// import { Navigation } from "@/components/navigation"
// import { AdminDashboard } from "@/components/admin/admin-dashboard"
// import { useRouter } from "next/navigation"
// import { useEffect } from "react"

// export default function AdminPage() {
//   const { user, isLoading } = useAuth()
//   const router = useRouter()

//   useEffect(() => {
//     if (!isLoading && (!user || !isAdmin(user))) {
//       router.push("/")
//     }
//   }, [user, isLoading, router])

//   // Simple admin check - in real app, this would be a proper role check
//   const isAdmin = (user: any) => {
//     return user?.email === "admin@brahmansena.org" || user?.name?.toLowerCase().includes("admin")
//   }

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-slate-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
//           <p className="text-slate-600">Loading admin dashboard...</p>
//         </div>
//       </div>
//     )
//   }

//   if (!user || !isAdmin(user)) {
//     return (
//       <div className="min-h-screen bg-slate-50 flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-2xl font-bold text-primary mb-4">Access Denied</h1>
//           <p className="text-slate-600 mb-4">You don't have permission to access the admin dashboard.</p>
//           <button onClick={() => router.push("/")} className="text-primary hover:text-accent">
//             Return to Home
//           </button>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen bg-slate-50">
//       <Navigation />
//       <div className="pt-20">
//         <AdminDashboard />
//       </div>
//     </div>
//   )
// }

import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page
