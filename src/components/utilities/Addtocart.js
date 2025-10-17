const getApps=()=>
{
    const apps=localStorage.getItem("installed");
    if(apps)
    {
        const appsParse=JSON.parse(apps);
        return apps;
    }
    else
    {
       return [];
    }

}
const setApps(id)=>
{
    const data=getApps();
    if(data.id===id)
    {
        alert("item already exits")
    }

}