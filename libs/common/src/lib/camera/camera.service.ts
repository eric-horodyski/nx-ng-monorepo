import {
  Plugins,
  CameraResultType,
  FilesystemDirectory,
  CameraPhoto,
  CameraSource,
  Capacitor,
} from '@capacitor/core';
import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Photo } from './photo.model';

@Injectable({ providedIn: 'root' })
export class CameraService {
  private PHOTO_STORAGE: string = 'photos';

  public photos: Photo[] = [];

  constructor(private platform: Platform) {}

  public async addNewToGallery() {
    const { Camera, Storage } = Plugins;
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });
    const savedImageFile = await this.savePicture(capturedPhoto);
    this.photos.unshift(savedImageFile);
    await Storage.set({
      key: this.PHOTO_STORAGE,
      value: JSON.stringify(this.photos),
    });
  }

  public async loadSaved() {
    const { Storage, Filesystem } = Plugins;
    const photoList = await Storage.get({ key: this.PHOTO_STORAGE });
    this.photos = JSON.parse(photoList.value) || [];

    if (!this.platform.is('hybrid')) {
      for (let photo of this.photos) {
        const readFile = await Filesystem.readFile({
          path: photo.filepath,
          directory: FilesystemDirectory.Data,
        });
        photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
      }
    }
  }

  private async savePicture(cameraPhoto: CameraPhoto) {
    const { Filesystem } = Plugins;

    const base64Data = await this.readAsBase64(cameraPhoto);
    const fileName = new Date().getTime() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: FilesystemDirectory.Data,
    });

    if (this.platform.is('hybrid')) {
      return {
        filepath: savedFile.uri,
        webviewPath: Capacitor.convertFileSrc(savedFile.uri),
      };
    } else {
      return {
        filepath: fileName,
        webviewPath: cameraPhoto.webPath,
      };
    }
  }

  private async readAsBase64(cameraPhoto: CameraPhoto) {
    const { Filesystem } = Plugins;
    if (this.platform.is('hybrid')) {
      const file = await Filesystem.readFile({
        path: cameraPhoto.path,
      });

      return file.data;
    } else {
      const response = await fetch(cameraPhoto.webPath);
      const blob = await response.blob();

      return (await this.convertBlobToBase64(blob)) as string;
    }
  }

  private convertBlobToBase64(blob: Blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  }
}
