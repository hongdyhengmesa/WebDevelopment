import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hello } from './hello/hello';
import { Signals } from './signals/signals';
import { ComputeSignal } from './compute-signal/compute-signal';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComputeSignal],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular-app');
}
