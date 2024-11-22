import { Component } from '@angular/core';
import {PresentationComponent} from "../../components/presentation/presentation.component";
import {DataComponent} from "../../components/data/data.component";
import {VideoComponent} from "../../components/video/video.component";
import {FaqComponent} from "../../components/faq/faq.component";
import {JoinUsComponent} from "../../components/join-us/join-us.component";
import {ContactComponent} from "../../components/contact/contact.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    PresentationComponent,
    DataComponent,
    VideoComponent,
    FaqComponent,
    JoinUsComponent,
    ContactComponent
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
