Vue.transition('fade', {
  enterClass: 'fadeIn',
  leaveClass: 'fadeOut'
});

var app = new Vue({
  el: '#story-frame',
  data: {
    scripts: [],
    idx: 0,
    subIdx: 0
  },
  computed: {
    current: function () {
      return this.scripts[this.idx];
    }
  },
  methods: {
    init: function (url) {
      var app = this;
      fetch(url).then(function (r) { return r.json(); }).then(function (scripts) {
        app.scripts = scripts;
        app.idx = 0;
        app.subIdx = 0;
      }); 
    },
    next: function () {
      var nextFrame = this.scripts[this.idx + 1];
      if (nextFrame.type == 'init') {
        this.init(nextFrame.url);
      } else {
        this.idx += 1;
      }
    },
    nextSubDialog: function () {
      if (this.subIdx < this.current.content.length - 1) {
        this.subIdx++;
      } else {
        this.menu(this.current.action);
        this.subIdx = 0;
      }
    },
    menu: function (cmd) {
      if (cmd) {
        var params = cmd.split(' ');
        var method = params.shift();
        this[method].apply(this, params);
      } else {
        // default to next action.
        this.next();
      }
    },
    goto: function (idx, subIdx) {
      this.idx = parseInt(idx);
      this.subIdx = parseInt(subIdx) || 0;
    }
  }
});

app.init('assets/scene/0/scripts.json')