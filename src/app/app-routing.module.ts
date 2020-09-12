import {NgModule} from '@angular/core';
import  {Routes,  RouterModule} from '@angular/router';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { SearchPanelComponent } from './components/search-panel/search-panel.component';

const routes: Routes = [
     {
        path: '',
        component: SearchPanelComponent
    },
    {
        path: 'users/:name',
        component: UserDetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}