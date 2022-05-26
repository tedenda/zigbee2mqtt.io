"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[55534],{50672:(t,e,i)=>{i.r(e),i.d(e,{data:()=>a});const a={key:"v-bdd25dc8",path:"/devices/TS0601_switch_2_gang.html",title:"TuYa TS0601_switch_2_gang control via MQTT",lang:"en-US",frontmatter:{title:"TuYa TS0601_switch_2_gang control via MQTT",description:"Integrate your TuYa TS0601_switch_2_gang via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2020-09-30T20:52:56.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch (l1 endpoint)",slug:"switch-l1-endpoint",children:[]},{level:3,title:"Switch (l2 endpoint)",slug:"switch-l2-endpoint",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/TS0601_switch_2_gang.md",git:{updatedTime:1653552172e3}}},31504:(t,e,i)=>{i.r(e),i.d(e,{default:()=>d});const a=(0,i(66252).uE)('<h1 id="tuya-ts0601-switch-2-gang" tabindex="-1"><a class="header-anchor" href="#tuya-ts0601-switch-2-gang" aria-hidden="true">#</a> TuYa TS0601_switch_2_gang</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>TS0601_switch_2_gang</td></tr><tr><td>Vendor</td><td>TuYa</td></tr><tr><td>Description</td><td>2 gang switch</td></tr><tr><td>Exposes</td><td>switch (state), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/TS0601_switch_2_gang.jpg" alt="TuYa TS0601_switch_2_gang"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>To pair press any button 5 times and on the 6th time hold it untill you hear beep, then release button and wait for pairing process.</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l1-endpoint" aria-hidden="true">#</a> Switch (l1 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l1</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l1&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l1&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l1&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="switch-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l2-endpoint" aria-hidden="true">#</a> Switch (l2 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l2</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l2&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l2&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l2&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',12),o={},d=(0,i(83744).Z)(o,[["render",function(t,e){return a}]])},83744:(t,e)=>{e.Z=(t,e)=>{for(const[i,a]of e)t[i]=a;return t}}}]);