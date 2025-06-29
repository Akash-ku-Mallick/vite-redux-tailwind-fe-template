import { useDispatch, type TypedUseSelectorHook, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store/type";


// Typed version of useDispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Typed version of useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
