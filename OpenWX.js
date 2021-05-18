function OpenWX()
{
    home()
    sleep(2000)
    home()
    sleep(2000)
    text("微信").click()
    sleep(5000)
    while (true) 
    {
        if(text("微信").exists() && text("通讯录").exists() && text("发现").exists() && text("我").exists())
        {
            break
        }
        else
        {
            back()
            sleep(3000)
        }
    }
}
OpenWX()