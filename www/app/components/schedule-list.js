import {View, Component, NgIf, NgFor} from 'angular2/angular2';
import {Icon, Item, ItemGroup, ItemGroupTitle, ItemSliding, List, ListHeader, NavController} from 'ionic/ionic';
import {SessionDetailPage} from '../sessionDetail/sessionDetail';
import {DateFormat} from '../components/date-format';
@Component({
  selector: 'schedule-list',
  properties: ['data', 'favorites']
})

@View({
  templateUrl: 'app/components/schedule-list.html',
  directives: [DateFormat, Icon, Item, ItemGroup, ItemGroupTitle, ItemSliding, List, ListHeader, NgFor, NgIf]
})

export class ScheduleList {
  constructor(nav: NavController) {
    console.log('this.data', this.data);
    this.nav = nav;
  } 

  onInit() {
    console.log('onInit ScheduleList');
  }

  addFavorite(timeSlot, session, event) {
    console.log('timeslot:', timeSlot, 'add session', session, event);
    // this.favorites.push(session);
    var currTimeSlot;
    this.favorites.forEach(function(t) {
      if (t.time == timeSlot.time) {
        currTimeSlot = t;
      }
    });
    if (!currTimeSlot) {
      currTimeSlot = { time: timeSlot.time, talks:[] };
      currTimeSlot.talks.push(session);
      this.favorites.push(currTimeSlot);
    } else {
      console.log('we had timeslot');
      currTimeSlot.talks.push(session);
    }


    console.log('currTimeSlot', currTimeSlot);
    console.log('favorites', this.favorites);
    event.preventDefault();
    return false;
  }

  openSession(session, val) {
    console.log('val for this', val);
    this.nav.push(SessionDetailPage, session);
  }
}
