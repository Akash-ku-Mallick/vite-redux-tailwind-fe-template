import React, { useEffect, useState } from 'react';
import Modal from '../../ui/Modal';
import { isModalOpen, modalPropsByID } from '../../../services/modalServices/modalSelectors';
import { closeModalById } from '../../../services/modalServices/slice';
import { useNavigate } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../../hooks/storeHandler';

export const REDIRECT_MODAL_ID = 'INFO_REDIRECT_MODAL';

type redirectModalProps = {
  title?: string
  message: string;
  redirectTo: string;
  timeout?: number; // default: 5000ms
};

const RedirectModal = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isOpen = useAppSelector(isModalOpen(REDIRECT_MODAL_ID));
  const props = useAppSelector(modalPropsByID(REDIRECT_MODAL_ID)) as redirectModalProps | undefined;

  const timeout = props?.timeout ?? 5000;
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (!isOpen || !timeout) return;

    const step = 100 / (timeout / 100);
    let current = 100;

    const interval = setInterval(() => {
      current -= step;
      if (current <= 0) {
        clearInterval(interval);
        dispatch(closeModalById(REDIRECT_MODAL_ID));
        setTimeout(() => navigate(props?.redirectTo || '/'), 200); // slight delay after close
      } else {
        setProgress(current);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [isOpen, dispatch, props?.redirectTo, timeout, navigate]);

  const getProgressBarColor = () => {
    if (progress > 66) return 'bg-blue-500';
    if (progress > 33) return 'bg-green-500';
    return 'bg-indigo-500';
  };

  return (
    <Modal id={REDIRECT_MODAL_ID} isOpen={isOpen} size="md" isTop={true}>
      <div className="space-y-4 px-6 py-4 text-center">
        <h2 className="text-lg font-semibold text-gray-800">{props?.title || 'Confirmation'}</h2>
        <p className="text-sm text-gray-600">{props?.message || 'You will be redirected shortly.'}</p>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-gray-200 rounded overflow-hidden mt-4">
          <div
            className={`h-full transition-all duration-100 ease-linear ${getProgressBarColor()}`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </Modal>
  );
};

export default RedirectModal;
