import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import { Navbar } from './Components/navbar/navbar';
import { Intro } from './Components/intro/intro';
import { Carlist } from './carlist/carlist';
import { Uploadcar } from './uploadcar/uploadcar';

export const routes: Routes = [
    {path:'',component:Login},
    { path: 'login', component: Login },
    {path:'register',component:Register },
    {path : 'navbar',component : Navbar},
    {path : 'intro',component : Intro},
    {path:'carlist',component:Carlist},
    {path :'uploadcar',component:Uploadcar}
    
];
