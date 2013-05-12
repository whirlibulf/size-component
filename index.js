function ComponentFactory(options) {
  this.id = 'size';
}

ComponentFactory.prototype.createComponent = function (options) {
  return {
    "width": options.width || 0,
    "height": options.height || 0
  };
};

module.exports = ComponentFactory;
