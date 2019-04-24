The drag and drop is now working, I decided to switch the image source attributes instead of 
the whole element.
I styled the interaction using css and dynamically adding/removing classes in JS.

Whenever the order is changed (on drop event) the new order will be saved to the localStorage,
on window.onload the order will be called (GET), it will display the latest order from localStorage if
an order excists.

I also added a function that triggers on window.onload that returns the localStorage order.
