import React, { useContext } from 'react'

export const CurrentUserContext = React.createContext(undefined)

export function useCurrentUser() {
  return useContext(CurrentUserContext)
}

export const CurrentLanguageContext = React.createContext('en')

export function useCurrentLanguage() {
  return useContext(CurrentLanguageContext)
}

// Mutatively store data that can be used later on when creating accounts
// and subscriptions, e.g. email, referrer, coupon, etc.
export const MutableTrackingObjectContext = React.createContext({})

export function useMutableTrackingObject() {
  return useContext(MutableTrackingObjectContext)
}
