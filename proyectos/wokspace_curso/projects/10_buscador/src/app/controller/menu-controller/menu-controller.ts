import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterLink, RouterOutlet],
  selector: 'app-menu-controller',
  styleUrl: './menu-controller.css',
  templateUrl: './menu-controller.html',
})
export class MenuController {}
