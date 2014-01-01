var event = document.createEvent('MouseEvents'); // eventType

event.init('click', true/*bubble*/,true/*default action*/);
obj.dispatchEvent(event);
