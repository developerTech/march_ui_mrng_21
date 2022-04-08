localStorage
> presistant Storage
> wrt to browser
> we have to remove manually

localStorage.setItem('mycity','Delhi')
undefined
localStorage.getItem('mycity')
'Delhi'
localStorage.getItem('mycity')
'delhi'
localStorage.removeItem('mycity')
undefined
localStorage.getItem('mycity')
null

sessionStorage
> temp Storage
> save wrt to tab
> remove as soon as you close tab

sessionStorage.setItem('test','testing storage')
undefined
sessionStorage.getItem('test')
'testing storage'
sessionStorage.removeItem('test')
undefined


Cookies
> save wrt to webiste
> expires in time


document.cookie
'_ga=GA1.2.1880173027.1602255983; _gid=GA1.2.2109635189.1649390683; _gat_gtag_UA_131256843_1=1'
document.cookie="city=delhi; expires=Fri, 8 Apr 2022 13:00:00 UTC"
'city=delhi; expires=Fri, 8 Apr 2022 13:00:00 UTC'
document.cookie
'_ga=GA1.2.1880173027.1602255983; _gid=GA1.2.2109635189.1649390683; city=delhi'