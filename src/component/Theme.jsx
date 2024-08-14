import { useEffect, useState } from "react";

function ThemeSwitcher(){
    const[theme,setTheme] = useState('light');

    useEffect(()=>{
        const savesTheme = localStorage.getItem('theme')||'light';
        setTheme(savesTheme);
        document.documentElement.setAttribute('data-theme',savesTheme);
    },[])

    const handleThemChange =(event)=>{
        const selectedTheme  = event.target.value;
        setTheme(selectedTheme);
        document.documentElement.setAttribute('data-theme',selectedTheme);
        localStorage.setItem('theme',selectedTheme);
    }

    return(
        <div className="theme-switcher">
            <select id="theme" value={theme} onChange={handleThemChange}
            className="p-2 rounded bg-white text-black">
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
        </div>
    );
}

export default ThemeSwitcher;