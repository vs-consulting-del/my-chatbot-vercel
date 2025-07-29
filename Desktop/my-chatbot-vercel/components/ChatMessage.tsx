import { motion } from 'framer-motion'

export function BotMessage({ text }: { text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-neutral-100 rounded-xl px-4 py-2 text-sm text-gray-800 w-fit max-w-xs"
    >
      {text}
    </motion.div>
  )
}

export function UserMessage({ text }: { text: string }) {
  return (
    <div className="text-sm text-black px-4 py-2 max-w-xs">
      {text}
    </div>
  )
}