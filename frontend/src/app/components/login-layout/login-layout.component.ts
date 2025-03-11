import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login-layout',
  imports: [],
  templateUrl: './login-layout.component.html',
  styleUrl: './login-layout.component.css'
})
export class LoginLayoutComponent {
  @Input() title:String = "";
  @Input() primaryButtonText:String = "";
  @Input() secondaryButtonText:String = "";
}
