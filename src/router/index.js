import { createRouter,createWebHistory } from "vue-router";
import { isMobileTerminal } from "../utils/flexible";
import mobileTerminalRoutes from "./modules/mobile-router";
import pcTerminalRoutes from "./modules/pc-router";

const router = createRouter({
    history:createWebHistory(),
    routes:isMobileTerminal.value? mobileTerminalRoutes:pcTerminalRoutes
});

export default router;