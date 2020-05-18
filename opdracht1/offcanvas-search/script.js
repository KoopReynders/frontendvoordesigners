var menu = {
  element: document.querySelector('#menu'),
  activate: function () {
    document.body.classList.toggle('active');
  },
  init: function () {
    var _this = this;
    this.element.addEventListener('click', function () {
      _this.activate();
    });
  }
};


menu.init();
