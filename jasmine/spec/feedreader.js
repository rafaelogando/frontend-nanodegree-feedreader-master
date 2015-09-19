/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This test makes sure each feed in allFeeds has a URL 
         * defined and that the URL is not empty.
         */
        it("all feeds have an URL", function(){
            for (var feed = 0; feed < allFeeds.length; feed++)
            {
                expect(allFeeds[feed].url).not.toBe("");
                expect(allFeeds[feed].url).toBeDefined();
            }
        });

        /* This test makes sure each feed in allFeeds has a name 
         * defined and that the name is not empty.
         */
        it("all feeds have a name", function(){
            for (var feed = 0; feed < allFeeds.length; feed++)
            {
                expect(allFeeds[feed].name).not.toBe("");
                expect(allFeeds[feed].name).toBeDefined();
            }
        });
    });

    /* "The menu" test suite checks how the menu repsonse 
    * to click events and it initial visible state.
    */
    describe("The menu", function(){

        /* This test makes sure the menu element is
         * hidden by default.
         */
        it("the menu should be hidden by default", function(){
            expect($("body").hasClass("menu-hidden")).toBe(true);
        });

        /* This test makes sure the menu changes
        * visibility when the menu icon is clicked.
        */
        it("changes visibility when the menu icon is clicked", function(){

            $('.menu-icon-link').click(); //After clicking the menu icon once, the menu should display
            expect($("body").hasClass("menu-hidden")).toBe(false);

            $('.menu-icon-link').click();
            expect($("body").hasClass("menu-hidden")).toBe(true);
        });
    });

    /* "Initial Entries" is a test suite contains
    * a set of tests related to LoadFeed functionality.
    */
    describe("Initial Entries", function(){

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        /* This makes sure when the loadFeed function is called
         *  and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        it("There is at least one .entry in the .feed container after LoadFeed function runs ", function(){
            expect($(".feed .entry-link").length).toBeGreaterThan(0);
        });
    });

    /* "New Feed Selection" is a test suite contains
    * a set of tests related to feeds.
    */
    describe("New Feed Selection", function(){
        var current;
        var last;

        beforeEach(function(done) {

            $('.feed').empty();//Empty the feed container to clear any previous feed loads.
            loadFeed(0, function()
            {
                current = $('.feed').html();//Once the feed loads whe save it value.
                loadFeed(1, function()//Then the second feed is loaded before continue with the tests and its value saved on variable "last".
                {
                    last = $('.feed').html();
                    done();
                });
            });
        });

        /* This makes sure when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        it("The content changes when new feed loads", function(){

            expect(current).not.toBe(last);
        });
    });
});
