// src/store/modal/modalSelectors.ts

import type { RootState } from "../../store/type";


export const selectModalStack = (state: RootState) => state.modals.stack;

export const selectTopModal = (state: RootState) =>
  state.modals.stack[state.modals.stack.length - 1] || null;

export const isModalOpen = (id: string) => (state: RootState) =>
  state.modals.stack.some((modal) => modal.id === id);

export const modalPropsByID = (id: string) => (state: RootState) =>
  state.modals.stack.find((modal) => modal.id === id)?.props;
