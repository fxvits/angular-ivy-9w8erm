import { Component, Input, SimpleChange, VERSION } from '@angular/core';
import { IDashboardViewComponentItem } from './app.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
 
  public views: IDashboardViewComponentItem[];

  public selectedView: IDashboardViewComponentItem;

  constructor() {}

  /**
   *   Raises when a tab is selected.
   *
   * @param e The event of the tab.
   */
  public onTabChanged(e: any) {
      this.selectedView = this.views[e.index];
  }

  public onButtonClicked(): void {
    this.views = [
      {dashboardViewID: 1, dashboardViewTypeName: 'view1'  },
      {dashboardViewID: 2, dashboardViewTypeName: 'view2'  },
      {dashboardViewID: 3, dashboardViewTypeName: 'view3'  },
      {dashboardViewID: 4, dashboardViewTypeName: 'view4'  },
      {dashboardViewID: 5, dashboardViewTypeName: 'view5'  },
      {dashboardViewID: 6, dashboardViewTypeName: 'view6'  },
    ];
  }
}
