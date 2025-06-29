import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import Modals from '../../components/modals';

const BaseLayout = () => {
  return (
    <main className="min-h-screen w-screen px-4 sm:px-6 lg:px-8 py-6 bg-gray-600 text-gray-900">
      {/* your page content */}
        <Outlet/>
        <Modals />
        <Toaster />
    </main>
  )
}

export default BaseLayout