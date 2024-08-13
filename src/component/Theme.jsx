import { useEffect, useState } from "react";

function ThemeSwitcher{
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
            <label htmlFor="theme" className="mr-2">Theme:</label>

        </div>
    )
}