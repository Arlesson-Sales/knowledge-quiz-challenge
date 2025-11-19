import { Trophy } from 'lucide-react'

const Title = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='flex flex-col gap-4 justify-center items-center'>
      <div className='bg-linear-to-br from-blue-500 to-indigo-600 text-gray-50 p-6 rounded-full'>
        <Trophy className='size-12'/>
      </div>

      <h4 className='text-4xl text-gray-900 dark:text-gray-50 text-center font-medium'>{children}</h4>
    </div>
  )
}

export default Title
