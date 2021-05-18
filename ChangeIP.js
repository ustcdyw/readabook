function ChangeIP()
{
    launchApp("芝麻动态IP")
    sleep(5000)
    //判断启动广告
    if(id("iv_close").exists())
    {
        id("iv_close").click()
        sleep(2000) 
    }
    //判断是否连接
    if(text("未连接").exists())
    {
        toast("找到控件")
        click("开始切换")
    }
    
}

ChangeIP()
