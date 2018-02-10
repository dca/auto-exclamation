var app = new Vue({
  el: '#app',
  data: {
    message: '',
   	addedMessage: '',
  },
  watch: {
    message: function (nextVal, currentVal) {
      return this.doJieba();
    }
  },
  methods: {
   doJieba: _.debounce(function () {
      const _this = this
      call_jieba_cut(this.message, function (_result) {
       console.log(_result);
        _this.addedMessage = _result.join('！') + '！';
      });
    }, 300),
	copy: function(){
		const _input = $(".result-text")
		_input.text(this.addedMessage);
		_input.select();
		document.execCommand("copy");
	}
  }
})