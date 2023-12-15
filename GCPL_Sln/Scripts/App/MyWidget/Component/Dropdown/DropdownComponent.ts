module GCPL.MyWidget.Dropdown {

    
    interface IDropdownWidgetComponentController {
        data: Array<IDropdownData>;
        selecteditem?: string;
        height?: number;
        width?: number;
        class?: string;
    }

    interface IDropdownData {
        Id: number;
        Name: string;
    }

    class DropdownWidgetComponentController implements IDropdownWidgetComponentController {

        data = null;
        selecteditem = "";
        height = null;
        width = null;
        class = null;
        constructor() {
                
        }

        $onInit() {            
            this.Init();
        }
        Init(): void {
          
        }
    }


    class DropdownWidgetComponent implements ng.IComponentOptions {
        static Name: string = "dropdownWidgetComponent"
        public bindings: any;
        public controller: any;
        public templateUrl: string;
        public template: string;
        constructor() {
            this.bindings = {
                data: '<',
                selecteditem:'='
            }
            this.controller = DropdownWidgetComponentController;
            this.template = [
                '<select ng-model="$ctrl.selecteditem">',
                    '<option ng-repeat="item in $ctrl.data" ng-value="{{item.Id}}">',
                        '{{item.Name}}',
                    '</option>',
                '</select>'
            ].join("");
        }

      
    }

    app.AddComponent(DropdownWidgetComponent.Name, new DropdownWidgetComponent());
}