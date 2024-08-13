import { useEffect, useState } from "react";

function ThemeSwitcher{
    const[theme,setTheme] = useState('light');

    useEffect(()=>{
        const savesTheme = localStorage.getItem('theme')||'light';
        setTheme(savesTheme);
        document.documentElement.setAttribute('data-theme',savesTheme);
    },[])
}