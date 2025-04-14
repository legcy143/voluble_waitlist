'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'

export default function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [ErrorMessage, setErrorMessage] = useState('')
  const [isLoading, setisLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setisLoading(true)
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (res.ok) {
        setMessage('🎉 You’ve been added to the waitlist!')
        setEmail('')
      } else {
        if (data.error == "duplicate key value violates unique constraint \"waitlist_email_key\""
        )
          data.error = "You are already on the waitlist"
        setErrorMessage(data.error || 'Something went wrong')
      }
      setisLoading(false)
    } catch (error) {
      setErrorMessage('Something went wrong')
    }
  }

  if (message) {
    return (
      <div className='text-center text-green-500 border p-3 m-1 capitalize text-xl'>
        {message}
      </div>
    )
  }

  if (ErrorMessage) {
    return (
      <div className='text-center text-red-500 border p-3 m-1 capitalize text-xl'>
        {ErrorMessage}
      </div>
    )
  }
  if(isLoading) {
    return (
      <div className='text-center text-yellow-500 border p-3 m-1 capitalize text-xl animate-pulse'>
        Loading...
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center border border-primary/50 rounded-full p-1 bg-background/50 backdrop-blur-md shadow-md gap-0 w-full max-w-sm">
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Enter your email"
        className='flex-1 text-sm px-3 bg-transparent border-none focus-visible:ring-0 focus-visible:outline-none'
        required
      />
      <button
        className='bg-primary p-2 px-4 rounded-full capitalize text-sm text-background font-semibold hover:bg-primary/80 transition-all duration-300 flex items-center gap-2'
        type="submit"
      >
        Join Waitlist
        <ArrowRight size={15} />
      </button>
    </form>
  )
}
