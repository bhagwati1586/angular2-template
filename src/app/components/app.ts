import {Component, ViewEncapsulation} from 'angular2/core';
import {
  RouteConfig,
  ROUTER_DIRECTIVES
} from 'angular2/router';



import {HomeCmp} from '../../home/components/home';
import {AboutCmp} from '../../about/components/about';
import {DownloadCmp} from '../../download/components/download';
import {ContactCmp} from '../../contact/components/contact';
import {NameList} from '../../shared/services/name_list';

@Component({
  selector: 'app',
  viewProviders: [NameList],
  moduleId: module.id,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', component: HomeCmp, name: 'Home' },
  { path: '/about', component: AboutCmp, name: 'About' },
  { path: '/download', component: DownloadCmp, name: 'Download' },
  { path: '/contact', component: ContactCmp, name: 'Contact' }
])
export class AppCmp {}
