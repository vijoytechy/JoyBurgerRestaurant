import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MenuComponent } from './components/menu/menu.component';
import { ServicesComponent } from './components/services/services.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ContactComponent } from './components/contact/contact.component';
import { OffersComponent } from './components/offers/offers.component';
const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {

  path: 'home',
  component: HomeComponent
},
{
  path: 'about',
  component: AboutComponent
},
{
  path: 'menu',
  component: MenuComponent
},
{
  path: 'services',
  component: ServicesComponent
},
{
  path: 'gallery',
  component: GalleryComponent
},
{
  path: 'testimonials',
  component: TestimonialsComponent
}, {
  path: 'contact',
  component: ContactComponent
}, {
  path: 'offers',
  component: OffersComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
