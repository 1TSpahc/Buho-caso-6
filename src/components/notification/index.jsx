import { motion } from 'framer-motion'

export function Notification ({ children, status }) {
  let color = null
  if (status === 'pending') color = 'bg-[#e07731]'
  if (status === 'success') color = 'bg-[#52ab5c]'
  if (status === 'error') color = 'bg-[#ea5757]'
  if (status === 'notification') color = 'bg-[#918cf2]'

  return (
    <motion.div className={` w-[400px] text-white rounded-md fixed bottom-8 right-4 px-3 py-6 text-center ${color}`} initial={{ opacity: 0, translateY: 20 }} animate={{ opacity: 1, translateY: 0 }} exit={{ opacity: 0 }} transition={{ delay: 0.5 }}>
      {children}
    </motion.div>
  )
}
