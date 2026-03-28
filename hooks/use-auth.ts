import { useState, useEffect } from 'react'
import { Session, User } from '@supabase/supabase-js'
import { supabase } from '../lib/supabase'
import { signIn as authSignIn, signUp as authSignUp, signOut as authSignOut } from '../lib/auth'

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setUser(session?.user ?? null)
      setLoading(false)
    })

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session)
        setUser(session?.user ?? null)
        setLoading(false)
      }
    )

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  const signIn = async (email: string, password: string) => {
    return authSignIn(email, password)
  }

  const signUp = async (email: string, password: string, fullName: string) => {
    return authSignUp(email, password, fullName)
  }

  const signOut = async () => {
    return authSignOut()
  }

  return {
    user,
    session,
    loading,
    signIn,
    signUp,
    signOut,
  }
}
