var Emitter = require('./emitter');

var oEmitter = new Emitter();

oEmitter.on('click', function(){
    console.log('click event occured');
});

oEmitter.emit('click');