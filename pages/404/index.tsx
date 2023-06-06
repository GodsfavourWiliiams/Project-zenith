import Link from 'next/link';
import { Icon404 } from '../../views/ProviderIcons';

export default function NotFound() {
  return (
    <div className='flex h-screen w-full flex-col items-center justify-center font-mono'>
      <Icon404 />
      <div className='flex flex-col items-center justify-center'>
        <p className='mt-12 text-3xl font-bold text-black md:text-4xl lg:text-5xl'>
          Page Not Found
        </p>
        <p className='my-2 text-lg text-gray-800'>
          Sorry about that! Please visit our hompage to get where you need to
          go.{' '}
        </p>
        <Link
          href='/'
          className=' my-2 rounded-md border bg-black px-5 py-3 text-center text-white hover:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50'
          title='Return Home'
        >
          Take me there!
        </Link>
      </div>
    </div>
  );
}
