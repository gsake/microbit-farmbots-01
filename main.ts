input.onButtonPressed(Button.A, function () {
    lcd1602.putString(
    "Reset mission...",
    0,
    0
    )
    Farmbots.resetMission()
    while (!(Farmbots.missionValid())) {
        Farmbots.startMission("hum")
    }
    lcd1602.clear()
    lcd1602.putString(
    Farmbots.missionId(),
    0,
    0
    )
    lcd1602.putString(
    "x:" + Farmbots.missionX() + "y:" + Farmbots.missionY(),
    0,
    1
    )
})
function connectToInternet () {
    led.enable(false)
    lcd1602.setAddress(
    lcd1602.I2C_ADDR.addr1
    )
    lcd1602.putString(
    "Connecting...",
    0,
    0
    )
    WiFiSSID = "VODAFONE_GS"
    WiFiPwd = "2106019487"
    Farmbots.wifiSettings(SerialPin.P0, SerialPin.P1, BaudRate.BaudRate115200)
    Farmbots.wifiConnect(WiFiSSID, WiFiPwd)
    if (Farmbots.wifiConnected()) {
        lcd1602.putString(
        "Wifi Connected",
        0,
        0
        )
        Farmbots.cloudSettings(
        "138.68.73.242",
        "1886",
        "TRNCENTRPX",
        "019ea7cc84b841294a7eeeed8d0a70b3"
        )
    } else {
        lcd1602.putString(
        "Connection error",
        0,
        0
        )
    }
}
let WiFiPwd = ""
let WiFiSSID = ""
connectToInternet()
