import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home-cep', pathMatch: 'full' },
  // { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  //  { path: 'suporte', loadChildren: './pages/suporte/suporte.module#SuportePageModule' },
  //  { path: 'inicio', loadChildren: './pages/inicio/inicio.module#InicioPageModule' },
  // { path: 'cadastro', loadChildren: './pages/cadastro/cadastro.module#CadastroPageModule' },
  // { path: 'listagem', loadChildren: './pages/listagem/listagem.module#ListagemPageModule' },
  { path: 'home-cep', loadChildren: './pages/home-cep/home-cep.module#HomeCepPageModule' } //,
  // { path: 'cep', loadChildren: './pages/cep/cep.module#CepPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
