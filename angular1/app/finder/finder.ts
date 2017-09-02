class FinderController {
    constructor($scope,
                CarsService){
                
        $scope.user = {
            Car : 1
        };
        CarsService.getCars().then((cars) => $scope.cars = cars);
    }
}

angular.module('app.finder').component('finder',{
    template:
        `<section>
            <h1>Finder Field</h1>
            <div class="controller">
                <form name="formFinder"  class="css-form" >
                    <h2> single</h2>
                    <div class="scope">{{user.Car}}</div>
                    <select  ng-model="user.Car"  name="uCar" finder-field="4" >
                        <option ng-repeat="car in cars"  ng-value="car.id">{{car.mark}}</option>
                    </select>
                    <br/>
                    <div class="scope">{{user.Model}}</div>
                    <select  ng-model="user.Model"  name="uModel" finder-field="4" >
                        <option ng-repeat="car in cars"  ng-value="car.id">{{car.mark}}</option>
                    </select>
                    <br/>
                    <h2> multiple</h2>
                    <div class="scope">{{user.Multi}}</div>
                    <select  ng-model="user.Multi"  name="uModel" finder-field="4" multiple  >
                        <option ng-repeat="car in cars"  ng-value="car.id">{{car.mark}}</option>
                    </select>
                </form>
            </div>
        </section>
        <div  code="directive/finderField.directive.js" > </div>`,
    controller: ['$scope','CarsService',FinderController]
});
    