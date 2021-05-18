function CloseWX()
{
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
    click("我")
    sleep(5000)
    click("设置")
    sleep(3000)
    shell("input swipe 502 1421 547 745",true)
    sleep(2000)
    click("退出")
    sleep(2000)
    click("关闭微信")
    sleep(2000)
    shell("input tap 315 1011",true)
    sleep(2000)
    click("关闭微信")
}
CloseWX()