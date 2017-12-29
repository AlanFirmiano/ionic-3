import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions} from "@ionic-native/camera";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers:[
    Camera
  ]
})
export class AboutPage {
  img ="";
  constructor(
    public navCtrl: NavController,
    private camera:Camera
  ) {

  }

  tirarFoto(){
    const options: CameraOptions = {
      quality: 200,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.img = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
    });
  }

}
