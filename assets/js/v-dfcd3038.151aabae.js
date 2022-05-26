"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[29498],{43522:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a={key:"v-dfcd3038",path:"/devices/JM-TRH-ZGB-V1.html",title:"TuYa JM-TRH-ZGB-V1 control via MQTT",lang:"en-US",frontmatter:{title:"TuYa JM-TRH-ZGB-V1 control via MQTT",description:"Integrate your TuYa JM-TRH-ZGB-V1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2022-04-30T08:00:58.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Temperature (numeric)",slug:"temperature-numeric",children:[]},{level:3,title:"Humidity (numeric)",slug:"humidity-numeric",children:[]},{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Report_interval (numeric)",slug:"report-interval-numeric",children:[]},{level:3,title:"Temperature_unit_convert (enum)",slug:"temperature-unit-convert-enum",children:[]},{level:3,title:"Temperature_alarm (enum)",slug:"temperature-alarm-enum",children:[]},{level:3,title:"Max_temperature (numeric)",slug:"max-temperature-numeric",children:[]},{level:3,title:"Min_temperature (numeric)",slug:"min-temperature-numeric",children:[]},{level:3,title:"Humidity_alarm (enum)",slug:"humidity-alarm-enum",children:[]},{level:3,title:"Max_humidity (numeric)",slug:"max-humidity-numeric",children:[]},{level:3,title:"Min_humidity (numeric)",slug:"min-humidity-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/JM-TRH-ZGB-V1.md",git:{updatedTime:1653552172e3}}},69740:(e,t,i)=>{i.r(t),i.d(t,{default:()=>c});var a=i(66252);const r=(0,a.uE)('<h1 id="tuya-jm-trh-zgb-v1" tabindex="-1"><a class="header-anchor" href="#tuya-jm-trh-zgb-v1" aria-hidden="true">#</a> TuYa JM-TRH-ZGB-V1</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>JM-TRH-ZGB-V1</td></tr><tr><td>Vendor</td><td>TuYa</td></tr><tr><td>Description</td><td>Temperature &amp; humidity sensor with clock</td></tr><tr><td>Exposes</td><td>temperature, humidity, battery, report_interval, temperature_unit_convert, temperature_alarm, max_temperature, min_temperature, humidity_alarm, max_humidity, min_humidity, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/JM-TRH-ZGB-V1.jpg" alt="TuYa JM-TRH-ZGB-V1"></td></tr></tbody></table><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',3),o=(0,a.Uk)("How to use device type specific configuration"),d=(0,a.uE)('<ul><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric" aria-hidden="true">#</a> Humidity (numeric)</h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="report-interval-numeric" tabindex="-1"><a class="header-anchor" href="#report-interval-numeric" aria-hidden="true">#</a> Report_interval (numeric)</h3><p>Report interval. Value can be found in the published state on the <code>report_interval</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;report_interval&quot;: NEW_VALUE}</code>. The minimal value is <code>5</code> and the maximum value is <code>60</code>. The unit of this value is <code>min</code>.</p><h3 id="temperature-unit-convert-enum" tabindex="-1"><a class="header-anchor" href="#temperature-unit-convert-enum" aria-hidden="true">#</a> Temperature_unit_convert (enum)</h3><p>Current display unit. Value can be found in the published state on the <code>temperature_unit_convert</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_unit_convert&quot;: NEW_VALUE}</code>. The possible values are: <code>celsius</code>, <code>fahrenheit</code>.</p><h3 id="temperature-alarm-enum" tabindex="-1"><a class="header-anchor" href="#temperature-alarm-enum" aria-hidden="true">#</a> Temperature_alarm (enum)</h3><p>Temperature alarm status. Value can be found in the published state on the <code>temperature_alarm</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>canceled</code>, <code>lower_alarm</code>, <code>upper_alarm</code>.</p><h3 id="max-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#max-temperature-numeric" aria-hidden="true">#</a> Max_temperature (numeric)</h3><p>Alarm temperature max. Value can be found in the published state on the <code>max_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;max_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>-20</code> and the maximum value is <code>60</code>. The unit of this value is <code>°C</code>.</p><h3 id="min-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#min-temperature-numeric" aria-hidden="true">#</a> Min_temperature (numeric)</h3><p>Alarm temperature min. Value can be found in the published state on the <code>min_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;min_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>-20</code> and the maximum value is <code>60</code>. The unit of this value is <code>°C</code>.</p><h3 id="humidity-alarm-enum" tabindex="-1"><a class="header-anchor" href="#humidity-alarm-enum" aria-hidden="true">#</a> Humidity_alarm (enum)</h3><p>Humidity alarm status. Value can be found in the published state on the <code>humidity_alarm</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>canceled</code>, <code>lower_alarm</code>, <code>upper_alarm</code>.</p><h3 id="max-humidity-numeric" tabindex="-1"><a class="header-anchor" href="#max-humidity-numeric" aria-hidden="true">#</a> Max_humidity (numeric)</h3><p>Alarm humidity max. Value can be found in the published state on the <code>max_humidity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;max_humidity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="min-humidity-numeric" tabindex="-1"><a class="header-anchor" href="#min-humidity-numeric" aria-hidden="true">#</a> Min_humidity (numeric)</h3><p>Alarm humidity min. Value can be found in the published state on the <code>min_humidity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;min_humidity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',26),u={},c=(0,i(83744).Z)(u,[["render",function(e,t){const i=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[r,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[o])),_:1})])]),d],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,a]of t)e[i]=a;return e}}}]);