'use client'

import { useState } from 'react'
import { MoreVertical, Save, RefreshCw } from 'lucide-react'

export default function ChatHeader() {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative p-3 border-b border-neutral-200 flex justify-between items-center">
      <span className="font-semibold text-sm text-neutral-700">VS Legal Assistant</span>
      <div className="relative">
        <button onClick={() => setOpen(!open)} className="p-1">
          <MoreVertical size={18} />
        </button>
        {open && (
          <div className="absolute right-0 top-8 bg-white border rounded shadow text-sm z-50 w-36">
            <button className="flex items-center gap-2 w-full px-3 py-2 hover:bg-neutral-100">
              <Save size={14} /> Save Chat
            </button>
            <button className="flex items-center gap-2 w-full px-3 py-2 hover:bg-neutral-100">
              <RefreshCw size={14} /> New Chat
            </button>
          </div>
        )}
      </div>
    </div>
  )
}