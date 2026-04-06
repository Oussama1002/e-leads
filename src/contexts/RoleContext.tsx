import React, { createContext, useContext, useState, useEffect } from 'react'

export type Role = 'admin' | 'client' | 'mediabuyer' | 'videographer' | 'confirmatrice'

interface RoleContextType {
  role: Role
  setRole: (r: Role) => void
}

const RoleContext = createContext<RoleContextType | undefined>(undefined)

export function RoleProvider({ children }: { children: React.ReactNode }) {
  const [role, setRoleState] = useState<Role>(() => {
    const saved = localStorage.getItem('leadbridge-role')
    return (saved as Role) || 'admin'
  })

  const setRole = (newRole: Role) => {
    localStorage.setItem('leadbridge-role', newRole)
    setRoleState(newRole)
  }

  return <RoleContext.Provider value={{ role, setRole }}>{children}</RoleContext.Provider>
}

export function useRole() {
  const context = useContext(RoleContext)
  if (context === undefined) {
    throw new Error('useRole must be used within a RoleProvider')
  }
  return context
}
