const table_st = {
    width: "100%"
};


const CREATE_PROFILE = (toAdd = 10) => {
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;

    let percent = 10;

    const profile = {};
    for (let i = percent; percent <= 100;) {
        profile[`${percent}`] = { w: parseInt(screenWidth * (percent / 100)), h: parseInt(screenHeight * (percent / 100)) }
        percent += toAdd

    }
    profile['100'] = { w: parseInt(screenWidth), h: parseInt(screenHeight) }


    return profile
}




const RS_TABLE_USER = () => {
    const table = document.getElementsByClassName("acc-table")[0];
    const tds = table.querySelectorAll("td");
    const SCREEN_X10 = CREATE_PROFILE();

    // console.log(SCREEN_X10['70'].w + 'px');
    // tds[0].style.width = SCREEN_X10['70'].w + 'px'
    tds[1].style.width = "150px"
    tds[2].style.width = "45px"
        // console.log(SCREEN_X10);
    Object.keys(table_st).map(st => {
        table.style[st] = table_st[st];
    })




}


// window.onresize = () => {
//     RS_TABLE_USER()
// }

// RS_TABLE_USER()

// CREATE_PROFILE()