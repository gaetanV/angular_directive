angular.module('component').component('matchfield', {
    template: `
        <section>
            <h1>Form : PassWord Match</h1>
            <div class="controller">
                <form name="formMatch"  class="css-form" >
                    <label> Input  1</label>
                    <input type="password" ng-model="user.pass"  name="uPass" required="" />
                    <div ng-show="formMatch.$submitted || formMatch.uPassCtr.$touched">
                        <span ng-show="formMatch.uPass.$error.required">Tell us your password.</span>
                    </div>
                    <br/>
                    <label>  Input  2</label>
                    <input type="password" ng-model="user.passCtr"  name="uPassCtr" match-field="user.pass" required="" />
                    <div ng-show="formMatch.$submitted || formMatch.uPassCtr.$touched">
                        <span ng-show="formMatch.uPassCtr.$error.required">Tell us your password.</span>
                        <span ng-show="formMatch.uPassCtr.$error.match">no match</span>
                    </div>
                </form>
            </div>
        </section>
    `,
});
