#include <NTPClient.h>
#include <WiFiUdp.h>
#include <SoftwareSerial.h>     //软串口通信
#define SSID "if"
#define PASS "88888888"
SoftwareSerial monitor(5, 6); // RX, TX   软串口通信
#include <U8glib.h>
#include <U8g2lib.h>
#include <Arduino.h>
#include "dht11.h"
WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP, "ntp1.aliyun.com",60*60*8, 30*60*1000);

//创建dht11示例
dht11 DHT11;

//定义DHT11接入Arduino的管脚
#define DHT11PIN 8

U8GLIB_SSD1306_128X64 u8g(U8G_I2C_OPT_NONE);  //设置OLED型号  
//-------字体设置，大、中、小
#define setFont_L u8g.setFont(u8g_font_7x13)
#define setFont_M u8g.setFont(u8g_font_fixed_v0r)
#define setFont_S u8g.setFont(u8g_font_fixed_v0r)
#define setFont_SS u8g.setFont(u8g_font_fub25n)
int a =300;
void setup() 
{
    Serial.begin(115200);
 
  monitor.begin(115200);
 
  monitor.println("AT");//指令测试
  delay(1000);
  if (monitor.find("OK"))  //接收指令正常则返回OK
  {
    monitor.println("AT+CWMODE=1");
 // delay(2000);
  monitor.println("AT+RST");
// delay(2000);
  String cmd = "AT+CWJAP=\"";
  cmd += SSID;
  cmd += "\",\"";
  cmd += PASS;
  cmd += "\"";
  monitor.println(cmd);
 
    
  }
 
 
  timeClient.begin();
  pinMode(10,OUTPUT);  //设置输出口
  //以下信息为DHT11库文件版本信息
  Serial.println("DHT11 TEST PROGRAM ");
  Serial.print("LIBRARY VERSION: ");
  Serial.println(DHT11LIB_VERSION);
  Serial.println();  
}
void loop() 
{  // put your main code here, to run repeatedly:  
    //记录实验数据组别
    
    int n = analogRead(A3);   //读取模拟口A3，获取光强
    Serial.println(n);               // 用于IDE串口观察窗
    if (n>= a )                         //对光强进行判断
        digitalWrite(10,HIGH);
    else
        digitalWrite(10,LOW);
    delay(100);

    
  static int count = 1;
  Serial.println(count++);

  int chk = DHT11.read(DHT11PIN);

  Serial.print("Read sensor: ");
  switch (chk)
  {
    case DHTLIB_OK: 
                Serial.println("OK"); 
                break;
    case DHTLIB_ERROR_CHECKSUM: 
                Serial.println("Checksum error"); 
                break;
    case DHTLIB_ERROR_TIMEOUT: 
                Serial.println("Time out error"); 
                break;
    default: 
                Serial.println("Unknown error"); 
                break;
  }
  Serial.print("Humidity (%): ");
  Serial.println((float)DHT11.humidity, 8);
  Serial.print("Temperature (oC): ");
  Serial.println((float)DHT11.temperature, 8);
  
  Serial.println("");

  delay(2000);
  int a=10;
  
  u8g.firstPage();  
  do{ 
      setFont_L;
      u8g.setPrintPos(0,10);    
      u8g.print("Mon N318,9:00");
      u8g.setPrintPos(0,22);
      u8g.print("    N411,1:00");
      u8g.setPrintPos(0,34);
      u8g.print("    N105,2:45");
      u8g.setPrintPos(0,46);
      u8g.print("H(%)");
      u8g.setPrintPos(30,46);
      u8g.print((float)DHT11.humidity+8);
      u8g.setPrintPos(0,58);
      u8g.print("T(C)");
      u8g.setPrintPos(30,58);
      u8g.print((float)DHT11.temperature-25);   
      u8g.setPrintPos(70,58);
      u8g.print(timeClient.getFormattedTime());
      delay(1000);
      u8g.clear()      
      u8g.print("Tue N318,9:00");
      u8g.setPrintPos(0,22);
      u8g.print("    N411,1:00");
      u8g.setPrintPos(0,34);
      u8g.print("    N105,2:45");
      u8g.setPrintPos(0,46);
      u8g.print("H(%)");
      u8g.setPrintPos(30,46);
      u8g.print((float)DHT11.humidity+8);
      u8g.setPrintPos(0,58);
      u8g.print("T(C)");
      u8g.setPrintPos(30,58);
      u8g.print((float)DHT11.temperature-25);   
      u8g.setPrintPos(70,58);
      u8g.print(timeClient.getFormattedTime());
      delay(1000);
     
    } while (u8g.nextPage());
} 
