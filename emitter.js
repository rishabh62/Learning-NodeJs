function Emitter(){
    this.events = {}; 
}

Emitter.prototype.on = function(event_type, event_listener){
    this.events[event_type] = this.events[event_type] || [];
    this.events[event_type].push(event_listener);
}

Emitter.prototype.emit = function(event_type){
    
}