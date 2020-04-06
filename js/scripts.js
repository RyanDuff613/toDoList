function Place(country,city,timeOfYear,notes,landmarks){
  this.country = country;
  this.city = city;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
  this.landmarks = landmarks; 
}

var place1 = new Place('italy', 'bergamo', 'winter', 'off the radar, low-key classic northern Italy',['citta alta','wineries','lake como', 'train to milano']);


function Item(dueDate,contacts,tools,timeRequired){
  this.name=name;
  this.dueDate=dueDate;
  this.contacts = contacts;
  this.tools = tools;
  this.hoursRequired = hoursRequired;
}

var item1 = new Item('coding class','sept 9',['ryan', 'andy','ashley'], ['laptop', 'phone', 'notebook'], 3); 