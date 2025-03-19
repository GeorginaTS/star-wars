import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./views/Home.vue"
import About from "./views/About.vue"
import FilmList from "./views/FilmList.vue"
import FilmDetail from "./views/FilmDetail.vue"
import CharacterList from "./views/CharacterList.vue"
import CharacterDetail from "./views/CharacterDetail.vue"
import PlanetDetail from "./views/PlanetDetail.vue"
import SpecieDetail from "./views/SpecieDetail.vue"
import VehicleDetail from "./views/VehicleDetail.vue"
import StarshipDetail from "./views/StarshipDetail.vue"
import NotFound from "./views/NotFound.vue"

const routes = [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/films', component: FilmList},
    {path: '/films/:id', component: FilmDetail},
    {path: '/people', component: CharacterList},
    {path: '/people/:id', component: CharacterDetail},
    {path: '/planets/:id', component: PlanetDetail},
    {path: '/species/:id', component: SpecieDetail},
    {path: '/vehicles/:id', component: VehicleDetail},
    {path: '/starships/:id', component: StarshipDetail},
    {path:'/:pathMatch(.*)*', component: NotFound}

];

export const router = createRouter({ history: createWebHashHistory(), routes }); //exportamos el router que es la creación de la hoja de rutas
