import { useDispatch } from "react-redux";

import { AppDispatch } from "@/app/store/store";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
