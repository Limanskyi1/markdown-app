import { useSelector } from "react-redux";

import { RootState } from "@/app/store/store";

export const useAppSelector = useSelector.withTypes<RootState>();
