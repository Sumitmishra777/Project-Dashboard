import { useDispatch, useSelector } from "react-redux";

// ✅ Custom hooks for cleaner usage

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
