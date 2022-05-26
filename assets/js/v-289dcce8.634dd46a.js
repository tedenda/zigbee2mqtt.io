"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[45880],{35271:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a={key:"v-289dcce8",path:"/devices/HS2SW1A_HS2SW1A-N.html",title:"HEIMAN HS2SW1A/HS2SW1A-N control via MQTT",lang:"en-US",frontmatter:{title:"HEIMAN HS2SW1A/HS2SW1A-N control via MQTT",description:"Integrate your HEIMAN HS2SW1A/HS2SW1A-N via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2020-09-30T20:52:56.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Device_temperature (numeric)",slug:"device-temperature-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/HS2SW1A_HS2SW1A-N.md",git:{updatedTime:1653552172e3}}},45463:(e,t,i)=>{i.r(t),i.d(t,{default:()=>r});const a=(0,i(66252).uE)('<h1 id="heiman-hs2sw1a-hs2sw1a-n" tabindex="-1"><a class="header-anchor" href="#heiman-hs2sw1a-hs2sw1a-n" aria-hidden="true">#</a> HEIMAN HS2SW1A/HS2SW1A-N</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>HS2SW1A/HS2SW1A-N</td></tr><tr><td>Vendor</td><td>HEIMAN</td></tr><tr><td>Description</td><td>Smart switch - 1 gang with neutral wire</td></tr><tr><td>Exposes</td><td>switch (state), device_temperature, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/HS2SW1A-HS2SW1A-N.jpg" alt="HEIMAN HS2SW1A/HS2SW1A-N"></td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="device-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#device-temperature-numeric" aria-hidden="true">#</a> Device_temperature (numeric)</h3><p>Temperature of the device. Value can be found in the published state on the <code>device_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',9),d={},r=(0,i(83744).Z)(d,[["render",function(e,t){return a}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,a]of t)e[i]=a;return e}}}]);