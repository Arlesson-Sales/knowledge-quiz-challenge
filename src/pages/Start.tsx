import { Trophy, Hourglass, Target } from 'lucide-react'
import Title from '@/components/Title'
import Button from '@/components/UI/Button'

const Start = () => {
  return (
    <div className='bg-gray-50 max-w-5xl w-full rounded-2xl border border-gray-200 p-5 mx-auto'>
      <Title>
        Knowledge Quiz Challenge
      </Title>

      <p className='text-center text-gray-500 text-xl mt-4'>Test your knowledge across multiple categories!</p>

    
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
        <div className='flex flex-col items-center p-4 bg-blue-50 rounded-lg'>
          <Target className='w-8 h-8 text-blue-600 mb-2' />
          <p className='text-sm text-gray-600'>Questions</p>
          <p className='text-2xl text-blue-600'>10</p>
          
        </div>
        <div className='flex flex-col items-center p-4 bg-indigo-50 rounded-lg'>
          <Hourglass className='w-8 h-8 text-indigo-600 mb-2' />
          <p className='text-sm text-gray-600'>Time per Question</p>
          <p className='text-2xl text-indigo-600'>60s</p>
        </div>
        <div className='flex flex-col items-center p-4 bg-purple-50 rounded-lg'>
          <Trophy className='w-8 h-8 text-purple-600 mb-2' />
          <p className='text-sm text-gray-600'>Scoring</p>
          <p className='text-2xl text-purple-600'>+1/-1</p>
        </div>
      </div>

      <div className='bg-yellow-50 mt-4 p-4 rounded-xl border border-yellow-400 text-amber-800'>
        <h1 className='pb-2'>How to play:</h1>
        <ul className='pl-5 list-disc'>
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
