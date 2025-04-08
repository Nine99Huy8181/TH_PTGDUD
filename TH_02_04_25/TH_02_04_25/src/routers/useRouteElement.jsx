import MainLayout from "../layout/MainLayout"
import DashBoard from '../pages/DashBoard';
import Project from '../pages/Project';
import Teams from '../pages/Teams';
import Analytics from '../pages/Analytics';
import Messages from '../pages/Messages';
import Integrations from '../pages/Integrations';
import { useRoutes } from "react-router-dom";

const useRouteElement = () => {
    const routes = [
        {
            path: "/",
            element: <MainLayout></MainLayout>,
            children: [
                {path: "/", element: <DashBoard></DashBoard>},
                {path: "/project", element: <Project></Project>},
                {path: "/teams", element: <Teams></Teams>},
                {path: "/messages", element: <Messages></Messages>},
                {path: "/analytics", element: <Analytics></Analytics>},
                {path: "/integrations", element: <Integrations> </Integrations>}
            ]
        }
    ]

    return useRoutes(routes);
}

export default useRouteElement;