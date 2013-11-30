facebookFormatterSystem = {

    Skus: "",

    facebookFormatter: function (section) {
        var currentSku = section.attr('sku');
        facebookFormatterSystem.Skus += currentSku + "|";
        var matchingSection = $("div[prod = " + currentSku + "]").first();
        if (typeof matchingSection != undefined) {
            $(matchingSection).prepend(section);
        }

    }

}


facebookSystem = {

    hello: function () {
        return "World";
    },


    PresentData: function (data) {
        facebookFormatterSystem.Skus="";
        var skuSections = $("div[sku]", data);
        $(skuSections).each(
            function (index) {
                var section = $(this);
                facebookFormatterSystem.facebookFormatter(section);
            }
        );

    }
    
}


