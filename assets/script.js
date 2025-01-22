// theme switching
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const sunDarkThemeSwitchEl = document.querySelector('.sun-fill-dark');
const sunLightThemeSwitchEl = document.querySelector('.sun-fill-light');

function switchTheme(e) {
    console.log('switch theme');
    if (e.target.checked) {
        console.log('checked');
        document.documentElement.setAttribute('data-theme', 'dark');
        sunDarkThemeSwitchEl.styles.display = 'none';
        sunLightThemeSwitchEl.styles.display = 'block';
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        sunDarkThemeSwitchEl.styles.display = 'block';
        sunLightThemeSwitchEl.styles.display = 'none';
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);