describe("About Expects.js", function() {
	it("should use 'ok' to assert that the value is truthy or not", function() {
		expect(1).to.be.ok();
		expect(true).to.be.ok();
		expect({}).to.be.ok();
		expect(0).to.not.be.ok();
	});
});
