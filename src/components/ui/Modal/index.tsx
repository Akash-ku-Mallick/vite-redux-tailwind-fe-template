// components/ui/Modal.tsx
import React from 'react';
import { closeModalById } from '../../../services/modalServices/slice';
import { useAppDispatch } from '../../../hooks/storeHandler';
import { Icon } from '@iconify/react/dist/iconify.js';

interface ModalProps {
  id: string;
  isTop: boolean;
  isOpen: boolean;
  children: React.ReactNode;
  closeOnOverlayClick?: boolean;
  zIndex?: number;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  onClose?: ()=> void
}

const sizeClasses: Record<
  NonNullable<ModalProps['size']>,
  { width: string; height: string }
> = {
  sm: { width: 'max-w-sm', height: 'max-h-[60vh]' },
  md: { width: 'max-w-md', height: 'max-h-[70vh]' },
  lg: { width: 'max-w-lg', height: 'max-h-[80vh]' },
  xl: { width: 'max-w-xl', height: 'max-h-[85vh]' },
  '2xl': { width: 'max-w-2xl', height: 'max-h-[90vh]' },
  '3xl': { width: 'max-w-3xl', height: 'max-h-[95vh]' },
};

const Modal: React.FC<ModalProps> = ({
  id,
  isTop,
  isOpen,
  children,
  closeOnOverlayClick = true,
  zIndex = 50,
  size = 'md',
  onClose
}) => {
  const dispatch = useAppDispatch();

  const handleClose = () => {
      dispatch(closeModalById(id))
      if(onClose)onClose()
  };

  const { width, height } = sizeClasses[size];

  if (!isOpen) return null; // Modal is not visible

  return (
    <div
      className="fixed inset-0 flex items-center justify-center transition-opacity"
      style={{ zIndex }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={closeOnOverlayClick ? handleClose : undefined}
      />

      {/* Modal content */}
      <div
        className={`relative bg-white dark:bg-gray-50 rounded-2xl shadow-xl p-6 w-full ${width} ${height} overflow-hidden mx-4 animate-fadeIn`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:hover:text-gray-800"
          >
            <Icon icon="iconamoon:close-bold" className="w-5 h-5" />
          </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;
