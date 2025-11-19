import { Trophy, Hourglass, Target } from 'lucide-react'
import Title from '@/components/Title'
import Button from '@/components/UI/Button'
import ToogleDarkMode from '@/components/ToogleDarkMode'

const Start = () => {
  return (
    <div 
      className={'max-w-5xl w-full rounded-2xl border p-5 mx-auto relative bg-gray-50 border-gray-200 dark:bg-slate-800 dark:border-slate-700'}>
      <ToogleDarkMode />
      <Title>
        Knowledge Quiz Challenge
      </Title>

      <p 
        className={'text-center text-xl mt-4 text-gray-500 dark:text-gray-300'}>
        Test your knowledge across multiple categories!
      </p>

    
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
        <div className={'flex flex-col items-center p-4 rounded-lg bg-blue-50 dark:bg-blue-950/50'}>
          <Target className={'w-8 h-8 mb-2 text-blue-600 dark:text-blue-400'}/>
          <p className={'text-sm text-gray-600'}>Questions</p>
          <p className={'text-2xl text-blue-600 dark:text-blue-400'}>10</p>
        </div>
        <div className='flex flex-col items-center p-4 bg-indigo-50 rounded-lg dark:bg-indigo-950/50'>
          <Hourglass className='w-8 h-8 text-indigo-600 mb-2 dark:text-indigo-400' />
          <p className='text-sm text-gray-600'>Time per Question</p>
          <p className='text-2xl text-indigo-600 dark:text-indigo-400'>60s</p>
        </div>
        <div className='flex flex-col items-center p-4 bg-purple-50 rounded-lg dark:bg-purple-950/50'>
          <Trophy className='w-8 h-8 text-purple-600 mb-2 dark:text-purple-400' />
          <p className='text-sm text-gray-600'>Scoring</p>
          <p className='text-2xl text-purple-600 dark:text-purple-400'>+1/-1</p>
        </div>
      </div>

      <div className='bg-amber-50 dark:bg-amber-950/30 mt-4 p-4 rounded-xl border border-amber-200 dark:border-amber-800'>
        <h1 className='pb-2 text-amber-900 dark:text-amber-400'>How to play:</h1>
        <ul className='pl-5 list-disc text-amber-800 dark:text-amber-300'>
          <li className='pb-2'>You have 60 seconds to answer each question</li>
          <li className='pb-2'>Correct answer earn you +1 point</li>
          <li className='pb-2'>If time runs out, you lose 1 point and move to the next question</li>
          <li className='pb-2'>Immediate feedabck will show you the correct answer</li>
        </ul>
      </div>

      <Button 
        className='bg-linear-to-br from-blue-500 to-indigo-600 text-gray-50 w-full mt-4 rounded-lg font-semibold transition hover:from-blue-600 hover:to-indigo-700'
        onClick={() => console.log('xD')}>
        Start
      </Button>
    </div>
  )
}

export default Start
