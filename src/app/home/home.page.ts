import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  TeamA=6;
  TeamB=3;

  constructor() {
  }
  
  //buttons for my team A
  onAddBtFourA(){
    this.TeamA+=4;
  }
  onMinusBtFourA(){
    this.TeamA-=4;
  
    if(this.TeamA<0)
    {
      this.TeamA=0
    }
 
  }
  onAddBtThreeA(){
    this.TeamA+=3;
  }
  onMinusBtThreeA(){
    this.TeamA-=3;

    if(this.TeamA<0)
    {
      this.TeamA=0
    }

  }
  onAddBtTwoA(){
    this.TeamA+=2;
  }
  onMinusBtTwoA(){
    this.TeamA-=2;

    if(this.TeamA<0)
    {
      this.TeamA=0
    }

  }
  onAddBtOneA(){
    this.TeamA+=1;
  }
  onMinusBtOneA(){
    this.TeamA-=1;

    if(this.TeamA<0)
    {
      this.TeamA=0
    }

  }

//buttons for my group B
  onAddBtFourB(){
    this.TeamB+=4;
  }
  onMinusBtFourB(){
    this.TeamB-=4;

    if(this.TeamB<0)
    {
      this.TeamB=0
    }

  }
  onAddBtThreeB(){
    this.TeamB+=3;
  }
  onMinusBtThreeB(){
    this.TeamB-=3;

    if(this.TeamB<0)
    {
      this.TeamB=0
    }

  }
  onAddBtTwoB(){
    this.TeamB+=2;
  }
  onMinusBtTwoB(){
    this.TeamB-=2;

    if(this.TeamB<0)
    {
      this.TeamB=0
    }

  }
  onAddBtOneB(){
    this.TeamB+=1;
  }
  onMinusBtOneB(){
    this.TeamB-=1;

    if(this.TeamB<0)
    {
      this.TeamB=0
    }

  }

  reset()
  {
    this.TeamA=0;
    this.TeamB=0;
  }

}



