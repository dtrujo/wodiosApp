import { Component, OnInit, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TrainingDetailsPage } from '../training-details/training-details';
import { AddTrainingPage } from '../add-training/add-training';

import { TrainingData } from '../../providers/training-data';

/**
  Class for the AddTrainingPage page.
*/
@Component({
  selector: 'page-notebook',
  templateUrl: 'notebook.html'
})
export class NotebookPage implements OnInit {

  // inizializate
  trainings : Array<any> = [];

  /**
    Constructor
  */
  constructor ( public navCtrl: NavController,
                public trainingData: TrainingData,
                public ngZone: NgZone ) {
  }

  /**
    [ngOnInit description]
    This event fire any time when user access to the view
  */
  ngOnInit() {

    // get all trainings using an observer and add
    // trainings using push method with the value
    // retrieved of firebase
    this.trainingData.trainings().subscribe(training => {
      this.ngZone.run(() => {
        this.trainings.push(training);
      });
    });
  }

  /**
    [goToAddTraining description]
    go to add traning page
  */
  goToAddTraning(){
      this.navCtrl.push(AddTrainingPage);
  }

  /**
    [trainingDetails description]
    go to training details page

    - id: the training's id

  */
  trainingDetails( training ){
    this.navCtrl.push( TrainingDetailsPage, { training : training } );
  }
}
