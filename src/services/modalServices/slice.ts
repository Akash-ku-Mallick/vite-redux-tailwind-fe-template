// src/store/modal/modalSlice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ModalState } from './type';

interface ModalsSliceState {
  stack: ModalState[];
}

const initialState: ModalsSliceState = {
  stack: [],
};

const modalSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<ModalState>) => {
      state.stack.push(action.payload);
    },
    closeModal: (state) => {
      state.stack.pop();
    },
    closeModalById: (state, action: PayloadAction<string>) => {
      state.stack = state.stack.filter((modal) => modal.id !== action.payload);
    },
    resetModals: (state) => {
      state.stack = [];
    },
  },
});

export const {
  openModal,
  closeModal,
  closeModalById,
  resetModals,
} = modalSlice.actions;

export default modalSlice.reducer;
