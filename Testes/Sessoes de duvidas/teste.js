function vm(){
    var self = this;

    self.people = ko.observableArray([{"firstName":"Pedro","lastName":"Pinto","age":"18"},])
    self.firstName = ko.observable("")
    self.lastName = ko.observable("")
    self.age = ko.observable("")

    self.add = function() {
        self.people(self.people().concat({"firstName":self.firstName(),"lastName":self.lastName(),"age":self.age()}))
        self.firstName("")
        self.lastName("")
        self.age("")

    }

    self.remove = function(item) {
        self.people.remove(item)
    }

    self.all = ko.observable(false)

    self.list = function() {
        if(self.all() == true) {
            self.all(false)
        }
        else {self.all(true)}
    }

}

$().ready(function(){
    ko.applyBindings(new vm())
});