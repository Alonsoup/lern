'use strict';

describe('Service: fire', function () {

  // load the service's module
  beforeEach(module('lernApp'));

  // instantiate service
  var fire;
  beforeEach(inject(function (_fire_) {
    fire = _fire_;
  }));

  it('should do something', function () {
    expect(!!fire).toBe(true);
  });

});
