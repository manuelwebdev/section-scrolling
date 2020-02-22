var myFullpage = new fullpage('#fullpage', {
    //options here
    css3: true,
	autoScrolling:true,
    scrollHorizontally: true,
    sectionsColor: ['rgba(#000000, 0)', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],
    // paddingTop: '1em',
    keyboardScrolling: true,
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['Section 1', 'Section 2','Section 3','Section 4'],
    fitToSection: true,
});

//methods
fullpage_api.setAllowScrolling(true);
fullpage_api.setAutoScrolling(true);