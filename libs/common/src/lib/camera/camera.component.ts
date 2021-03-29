import { Component, OnInit } from '@angular/core';
import { CameraService } from './camera.service';

@Component({
  selector: 'myorg-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss'],
})
export class CameraComponent implements OnInit {
  constructor(public camera: CameraService) {}

  async ngOnInit() {
    await this.camera.loadSaved();
  }

  addPhotoToGallery() {
    this.camera.addNewToGallery();
  }
}
