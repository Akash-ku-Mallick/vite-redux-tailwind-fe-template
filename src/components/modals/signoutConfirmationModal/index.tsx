import React, { useState } from 'react'
import { isModalOpen } from '../../../services/modalServices/modalSelectors'
import { closeModalById } from '../../../services/modalServices/slice'
import toast from 'react-hot-toast'
import { useAppSelector, useAppDispatch } from '../../../hooks/storeHandler'
import Modal from '../../ui/Modal'

export const MODAL_ID = 'SIGNOUT_CONFIRMATION'

const SignoutConfrimation = () => {

    const isOpen = isModalOpen(MODAL_ID)
    const isOpenMOdal = useAppSelector(isOpen)
    const dispatch = useAppDispatch()

    const [isLoading, setIsloading] = useState<boolean>(false)

    const handleCancel = () => {
        dispatch(closeModalById(MODAL_ID));
    };

    const handleSignOut = () => {
        setIsloading(true)

        setTimeout(() => {
            setIsloading(false)
            // dispatch(logout())
            dispatch(closeModalById(MODAL_ID));
            toast.success('You have been logged out')
        }, 420);
    };

  return (
    <Modal id={MODAL_ID} isTop={false} size='sm' isOpen={isOpenMOdal} >
        <div className="text-center space-y-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-800">
          Are you sure you want to log out?
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-500">
          This will end your current session.
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={handleCancel}
            className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 dark:text-gray-700 hover:bg-gray-100 dark:hover:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-700"
          >
            Cancel
          </button>
          <button
            onClick={handleSignOut}
            className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700"
          >
            {isLoading ? <div className="w-6 h-6 border-4 border-grey-600 border-t-transparent rounded-full animate-spin mx-7"/> : 'Log Out'}
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default SignoutConfrimation