import { Link } from 'react-router-dom'

export default function Root() {
    return (
        <div className='flex flex-col gap-8'>
            <h1 className='text-9xl'>seihlo</h1>
            <div className='w-1/2 text-lg'>
            <p>seihlo provides users with access to climate data from 1940 to the present.</p>
            <p>the application calculates several <a href="https://www.climdex.org/learn/indices/" target='_blank' className='bg-customblue text-customblack '>climdex indices</a> from daily raw data provided by the open-meteo api, offering detailed insights of climate variability and change from users city and time period inputs.</p>
            </div>
            <Link to={`app`} className='border w-fit py-2 px-4 rounded-md flex items-center text-lg bg-customblue text-customblack duration-100 hover:bg-customblack hover:bg-customblue hover:text-customblack'>
                    go to app
            </Link>
        </div>
    )
} 