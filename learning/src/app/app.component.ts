import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  /* styles: [`
    h3 {
      color: dodgerblue;
    }
  `] */
})
export class AppComponent {
  
  username: string = '';
  showSecret: boolean = false;
  log: any[] = []

  onToggleDetails(): void {
    this.showSecret = !this.showSecret;
    this.log.push(new Date());
  }

}
