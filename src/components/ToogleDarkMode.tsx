import { Sun, Moon } from 'lucide-react'
import { useState, useEffect } from 'react'

const ToogleDarkMode = () => {

  const [ dark, setDark ] = useState<boolean>(false)

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark])

  const handleSwitchTheme = () => setDark(!dark) 

  return (
    <button 
      className={`border-2 rounded-full p-2 absolute right-4 top-4 cursor-pointer text-gray-600 border-gray-200 dark:text-gray-200 dark:border-slate-700`}
      onClick={handleSwitchTheme}>
      
      {dark ? <Sun size={18}/> : <Moon size={18}/>}
    </button>
  )
}

export default ToogleDarkMode
