import GamePage from "../components/Pages/GamePage";
import InstructionPage from "../components/Pages/InstructionPage";
import CreditsPage from "../components/Pages/CreditsPage";

export const routes = [
    {
        path: '/', component: GamePage
    },
    {
        path: '/about', component: CreditsPage
    },
    {
        path: '/info', component: InstructionPage
    }
];