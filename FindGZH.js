function FindGZH()
{
    toast("start")
    click("通讯录")
    sleep(2000)
    click("公众号")

    sleep(3000)
    while(true)
    {
        if(text("大江英语").exists())
        {
            click("大江英语")
            sleep(5000)
            break
        }
        shell("input swipe 502 1421 547 745",true)
        sleep(2000)
    }
}
FindGZH()