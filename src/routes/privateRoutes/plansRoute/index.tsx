import type { RouteObject } from "react-router-dom";
import ComparePlans from "../../../pages/dashboard/plansPgae/comparePlans";
import PlanDetailsPage from "../../../pages/dashboard/plansPgae/planDetails";

const plansRoute: RouteObject[] = [
    {
        path: 'compare-plns',
        element: <ComparePlans />
    },
    {
        path: 'plan-details',
        element: <PlanDetailsPage />
    }
] 

export default plansRoute