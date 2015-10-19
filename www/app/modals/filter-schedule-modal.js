import {Page} from 'ionic/ionic';
import {DataService} from '../service/data';

@Page({
  templateUrl: 'app/modals/filter-schedule-modal.html',
  providers: [DataService]
})
export class FilterScheduleModal {
  constructor(dataService: DataService) {
    this.categories = dataService.getCategories();
    this.dataService = dataService;
  }

  onInit() {
    // On Init reset the filters back to the last thing the user had
    this.categories.forEach((category) => {
      category.filterToApply = category.showFilter;
    });
  }

  resetFilters() {
    this.categories.forEach((category) => {
      category.filterToApply =  true;
    });
  }

  applyFilters() {
    this.categories.forEach((category) => {
      category.showFilter = category.filterToApply;
    });

    this.dataService.updateCategories(this.categories);
    this.close();
  }
}
