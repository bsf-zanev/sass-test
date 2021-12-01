let overlayOn = false;

class Theme extends Array{
    static totalCategories = 0;

    constructor(name, ...colors){
        super(...colors);
        this.name = name;
        this.categoryID = Theme.totalCategories;
        Theme.totalCategories++;
    }

    add(theme){
        this.push(theme);
    }

    /*
    remove(theme){
        this = this.filter(curTheme => curTheme !== theme);
    }
    */

    static buildMenu(thisTheme){
        const selectorCategory = document.createElement('div');
        const selectorThemeList = document.createElement('div');
        //const selectorTheme = document.createElement('div');
        selectorCategory.innerHTML = `${thisTheme.name}`;
        selectorCategory.classList.add('themeGroup');
        //selectorCategory.setAttribute('onclick', slideIntoView(thisTheme.categoryID));
        document.querySelector('.themeGroupWrapper').appendChild(selectorCategory);
        selectorThemeList.setAttribute('id', `themeCategory${thisTheme.categoryID}`);
        selectorThemeList.classList.add('themeOptionIndividualWrapper');
        document.querySelector('.themeOptionWrapper').appendChild(selectorThemeList);
        /*
        for (const curTheme in thisTheme) {
            console.table(thisTheme[curTheme]);
        }
        */
    }
}

export function createBaseThemes(){
    const coolThemes = new Theme(
        'Cool Themes',
        {
            themeName: "Sass Pink",
            header: '#fff',
            headerText: '#cf649a',
            overlaySidebar: '#9d3067',
            overlayText: '#fff',
            nav: '#cf649a',
            navLinks: '#fff',
            navLinkHover: '#e7b2cd',
            navLinkActive: '#343434',
            mainContent: '#fff',
            sideContent: '#e7b2cd',
            footer: '#434343',
            footerText: '#fff',
            primary: '#cf649a',
            primaryLight: '#e7b2cd',
            primaryDark: '#9d3067',
            secondary: '#343434',
            secondaryLight: '#676767',
            secondaryDark: '#010101',
            tertiary: '#343434'
        }
    );
    const warmThemes = new Theme(
        'Warm Themes',
        {
            themeName: "Sass Pink",
            header: '#fff',
            headerText: '#cf649a',
            overlaySidebar: '#9d3067',
            overlayText: '#fff',
            nav: '#cf649a',
            navLinks: '#fff',
            navLinkHover: '#e7b2cd',
            navLinkActive: '#343434',
            mainContent: '#fff',
            sideContent: '#e7b2cd',
            footer: '#434343',
            footerText: '#fff',
            primary: '#cf649a',
            primaryLight: '#e7b2cd',
            primaryDark: '#9d3067',
            secondary: '#343434',
            secondaryLight: '#676767',
            secondaryDark: '#010101',
            tertiary: '#343434'
        }
    );
    const vividThemes = new Theme(
        'Vivid Themes',
        {
            themeName: "Sass Pink",
            header: '#fff',
            headerText: '#cf649a',
            overlaySidebar: '#9d3067',
            overlayText: '#fff',
            nav: '#cf649a',
            navLinks: '#fff',
            navLinkHover: '#e7b2cd',
            navLinkActive: '#343434',
            mainContent: '#fff',
            sideContent: '#e7b2cd',
            footer: '#434343',
            footerText: '#fff',
            primary: '#cf649a',
            primaryLight: '#e7b2cd',
            primaryDark: '#9d3067',
            secondary: '#343434',
            secondaryLight: '#676767',
            secondaryDark: '#010101',
            tertiary: '#343434'
        }
    );
    const customThemes = new Theme(
        'Custom Themes'
    );
    const allThemes = [coolThemes, warmThemes, vividThemes, customThemes];    
    for (const curTheme of allThemes) {
        Theme.buildMenu(curTheme);        
    }   
}

export  function toggleThemeBar(){
    const overlay = document.getElementsByClassName('themeSelectorOverlay')[0];
    const slider =  document.getElementsByClassName('themeSelectorPanel')[0];
    if (overlayOn){
        setTimeout(() => overlay.classList.toggle('visible'), 250);
        overlay.classList.toggle('expanded');
        overlayOn = false;
    }
    else{
        overlay.classList.toggle('visible');        
        setTimeout(() => overlay.classList.toggle('expanded'), 0);
        overlayOn = true;
    }
    slider.classList.toggle('expanded');
}

/*
function slideIntoView(themeCatID){
    const themeList = document.getElementById(`themeCategory${themeCatID}`);
    if (themeList.style.display != null){} = 'block';
    document.getElementsByClassName('themeGridContainer')[0].classList.toggle('themeGridSlide');
}
*/
