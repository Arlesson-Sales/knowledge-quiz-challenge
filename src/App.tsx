import Start from '@/pages/Start'
import { motion } from 'motion/react'

const App = () => {
  return (
    <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.6}}
      className={'min-h-screen bg-linear-to-br flex items-center p-4 from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-slate-800 transition-colors'}>
      <Start/>
    </motion.div>
  )
}

export default App
