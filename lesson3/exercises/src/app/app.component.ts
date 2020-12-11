import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled: boolean = true;
  upDisabled: boolean = false;
  rightDisabled: boolean = false;
  leftDisabled: boolean = false;
  downDisabled: boolean = false;


  handleTakeOff(rocketImage) {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
       this.color = 'blue';
       this.height += 10000;
       this.message = 'Shuttle in flight.';
       rocketImage.style.bottom = parseInt(rocketImage.style.bottom) + 10 + 'px';
       this.takeOffEnabled = false;
    }
  }

  handleLanding(rocketImage) {
    let result = window.alert('The shuttle is landing. Landing gear engaged.');
    this.color = 'green';
    this.height = 0;
    this.message = 'The Shuttle has landed.';
    rocketImage.style.bottom = '0px';
    this.takeOffEnabled = true;
  }

  handleAbort(rocketImage) {
    let result = window.confirm('Are you sure you want to abort?');
    if (result) {
       this.color = 'red';
       this.height = 0;
       this.message = 'Mission aborted.';
       rocketImage.style.bottom = '0px';
       this.takeOffEnabled = true;
    }
  }

  moveRocket(rocketImage, direction) {
    if (direction === 'right') {
      if(parseInt(rocketImage.style.left) < 470){
        let movement = parseInt(rocketImage.style.left) + 10 + 'px';
        rocketImage.style.left = movement;
        this.width = this.width + 10000;
        this.leftDisabled = false;
      }
    }
    if (direction === 'left') {
        if(parseInt(rocketImage.style.left) > -20){
          let movement = parseInt(rocketImage.style.left) - 10 + 'px';
          rocketImage.style.left = movement;
          this.width = this.width - 10000;
          this.rightDisabled = false;
        }
    }
    if (direction === 'up') {
        if(parseInt(rocketImage.style.bottom) < 330){
          let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
          rocketImage.style.bottom = movement;
          this.height = this.height + 10000;
          this.downDisabled = false;
        }
    }
    if (direction === 'down') {
        if(parseInt(rocketImage.style.bottom) > 0){
          let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
          rocketImage.style.bottom = movement;
          this.height = this.height - 10000;
          this.upDisabled = false;
        }
    }
  }

  warnRocket(rocketImage) {
    if(parseInt(rocketImage.style.left) < -10){
      this.color = 'orange';
      this.leftDisabled = true;
    }else if(parseInt(rocketImage.style.left) > 460){
      this.color = 'orange';
      this.rightDisabled = true;
    }else if(parseInt(rocketImage.style.bottom) < 10){
      this.color = 'orange';
      this.downDisabled = true;
    }else if(parseInt(rocketImage.style.bottom) > 320) {
      this.color = 'orange';
      this.upDisabled = true;
    } else {
      this.color = 'blue';
    }
  }

}