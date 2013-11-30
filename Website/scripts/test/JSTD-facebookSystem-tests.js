TestCase("facebookSystemTest", {

    setUp: function () {
        //        this.date = new Date(2009, 9, 2, 14, 45);
    },

    "test hello world": function () {
        var message = facebookSystem.hello();
        assertEquals("World", message);
    },


    "test parses all skus": function () {
        //Arrange

        /*:DOC += 
        <div>
        <div prod="ABC1" class="lister"><span class="restOfData"/></div>
        <div prod="ABC2" class="lister"><span class="restOfData"/></div>
        </div>
        */



        /*:DOC sample = 
        <span>
        <div sku='ABC1'><ul><li>VAL1</li><li>VAL2</li></ul></div>
        <div sku='ABC2'><ul><li>VAL3</li></ul></div>
        </span>
        */

        var data = this.sample;     // "<span><div sku='ABC1'><ul><li>VAL1</li><li>VAL2</li></ul></div><div sku='ABC2'><ul><li>VAL3</li></ul></div></span>";
        //Act
        var skus = facebookSystem.PresentData(data);

        //Assert
        assertEquals("ABC1|ABC2|", facebookFormatterSystem.Skus);

    },

    "test generated html": function () {
        //Arrange

        /*:DOC += 
        <div>
        <div prod="ABC1" class="lister"><span class="restOfData"/></div>
        <div prod="ABC2" class="lister"><span class="restOfData"/></div>
        </div>
        */



        /*:DOC sample = 
        <span>
        <div sku='ABC1'><ul><li>VAL1</li><li>VAL2</li></ul></div>
        <div sku='ABC2'><ul><li>VAL3</li></ul></div>
        </span>
        */

        var data = this.sample;
        //Act
        var skus = facebookSystem.PresentData(data);

        //Assert
        assertTrue($('div[sku="ABC1"]', 'div[prod="ABC1"]').length == 1);
        assertTrue($('div[sku="ABC2"]', 'div[prod="ABC2"]').length == 1);
//        assertMatch($(document).children().html(), 'prod="ABC1".*sku="ABC1".*');


        //Expected html...
        //<body><div> <div prod="ABC1" class="lister"><div sku="ABC1"><ul><li>VAL1</li><li>VAL2</li></ul></div><span class="restOfData"></span></div> <div prod="ABC2" class="lister"><div sku="ABC2"><ul><li>VAL3</li></ul></div><span class="restOfData"></span></div> </div></body>"

    }




});