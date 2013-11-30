TestCase("StrftimeTest", {

    setUp: function () {
        this.date = new Date(2009, 9, 2, 14, 45);
    },

    "test %Y should return full year": function () {
        var year = Date.formats.Y(this.date);
        assertNumber(year);
        assertEquals(2009, year);
    },


    "test %m should return month": function () {
        var month = Date.formats.m(this.date);
        assertString(month);
        assertEquals("10", month);
    },

    "test %d should return day": function () {
        var day = Date.formats.d(this.date);
        assertEquals("02", day);
    },


    
    "test %y should return year as two digits": function () {
        var year = Date.formats.y(this.date);
        assertEquals("09", year);
    }




});