function ReadEssay(essay_data)
{
    shell("input tap 1011 123",true)
    sleep(2000)
    toast("寻找文章")
    while(true)
    {
        if(text(essay_data).exists())
        {
            toast("找到文章")
            var data_loc = text(essay_data).findOne().bounds()
            if(data_loc.centerY() < 1920-400)
            {
                shell("input tap "+String(data_loc.centerX())+" "+String(data_loc.centerY()+300),true)
                sleep(10000)
                break
            }
            else
            {
                toast("距离太小无法点击继续滑动")
                shell("input swipe 502 1421 547 745",true)
                sleep(5000)
            }
        }
        else
        {
            toast("未找到")
            shell("input swipe 502 1421 547 745",true)
            sleep(5000)
        }  
    }
    while(true)
    {
        if(text("分享").findOne().bounds().centerY()<1920 && text("收藏").findOne().bounds().centerY()<1920)
        {
            toast("停止")
            break
        }
        else
        {
            toast("阅读")
            shell("input swipe 502 1421 547 745",true)
            sleep(Math.floor((Math.random()*12)+8)*1000)
        }
    }
}
ReadEssay("1月21日")