"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[93735],{27017:(e,t,o)=>{o.r(t),o.d(t,{data:()=>d});const d={key:"v-75461cec",path:"/devices/6735_6736_6737.html",title:"Busch-Jaeger 6735/6736/6737 control via MQTT",lang:"en-US",frontmatter:{title:"Busch-Jaeger 6735/6736/6737 control via MQTT",description:"Integrate your Busch-Jaeger 6735/6736/6737 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2020-01-14T19:34:25.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Known issues",slug:"known-issues",children:[]},{level:3,title:"Action values",slug:"action-values",children:[]}]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/6735_6736_6737.md",git:{updatedTime:1653552172e3}}},76215:(e,t,o)=>{o.r(t),o.d(t,{default:()=>p});var d=o(66252);const r=(0,d.uE)('<h1 id="busch-jaeger-6735-6736-6737" tabindex="-1"><a class="header-anchor" href="#busch-jaeger-6735-6736-6737" aria-hidden="true">#</a> Busch-Jaeger 6735/6736/6737</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>6735/6736/6737</td></tr><tr><td>Vendor</td><td>Busch-Jaeger</td></tr><tr><td>Description</td><td>Zigbee Light Link power supply/relay/dimmer</td></tr><tr><td>Exposes</td><td>switch (state), action, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/6735-6736-6737.jpg" alt="Busch-Jaeger 6735/6736/6737"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><ol><li>If there are blinking LEDs wait until they don’t blink anymore — the device is in some mode we don’t want it to be.</li><li>Press both buttons of the top row (or sole row for Model 6735) until the LEDs gleam permanently. They will blink alternately at first but keep the buttons pressed until really both lights are constantly illuminated. Then release the buttons. The LEDs should still glow.</li><li>Now press both buttons again briefly. After about 1..2 seconds they will fade-glow; and your bridge should now instantly find it.</li></ol><h3 id="known-issues" tabindex="-1"><a class="header-anchor" href="#known-issues" aria-hidden="true">#</a> Known issues</h3><h4 id="bottom-row-of-4-gang-device-not-bound" tabindex="-1"><a class="header-anchor" href="#bottom-row-of-4-gang-device-not-bound" aria-hidden="true">#</a> Bottom row of 4-gang device not bound</h4>',7),i=(0,d.Uk)("It may occur that the bottom row of the 4-gang device 6737 does not work like the other ones, i.e. does not emit the actions (see related discussion "),c={href:"https://github.com/Koenkk/zigbee2mqtt/discussions/7009",target:"_blank",rel:"noopener noreferrer"},n=(0,d.Uk)("#7009"),a=(0,d.Uk)("). The reason is not fully understood yet, however it can be worked around by unbinding all four endpoints and re-binding them manually one after another:"),s=(0,d.uE)('<table><thead><tr><th>Source EP</th><th>Destination</th><th>Destination EP</th><th>Clusters</th></tr></thead><tbody><tr><td><code>10</code></td><td><code>Coordinator</code></td><td><code>1</code></td><td>6710 U: <code>LevelCtrl</code><br>6711 U: <code>OnOff</code> [^1]</td></tr><tr><td><code>11</code></td><td><code>Coordinator</code></td><td><code>1</code></td><td><code>LevelCtrl</code></td></tr><tr><td><code>12</code></td><td><code>Coordinator</code></td><td><code>1</code></td><td><code>LevelCtrl</code></td></tr><tr><td><code>13</code></td><td><code>Coordinator</code></td><td><code>1</code></td><td><code>LevelCtrl</code></td></tr></tbody></table><p>*[EP]: Endpoint [^1]: Depending on whether the control panel sits on a 6710 U (power supply) or 6711 U (relay), <code>OnOff</code> respectively <code>LevelCtrl</code> shall be used.</p><h3 id="action-values" tabindex="-1"><a class="header-anchor" href="#action-values" aria-hidden="true">#</a> Action values</h3><p>This device send the following <code>action</code> values in its payload:</p><table><thead><tr><th>Left buttons</th><th>(long-hold-release)</th><th>Right buttons</th></tr></thead><tbody><tr><td><code>row_1_off</code><br><code>row_1_down</code></td><td><code>row_1_stop</code></td><td><code>row_1_on</code><br><code>row_1_up</code></td></tr><tr><td><code>row_2_off</code><br><code>row_2_down</code></td><td><code>row_2_stop</code></td><td><code>row_2_on</code><br><code>row_2_up</code></td></tr><tr><td><code>row_3_off</code><br><code>row_3_down</code></td><td><code>row_3_stop</code></td><td><code>row_3_on</code><br><code>row_3_up</code></td></tr><tr><td><code>row_4_off</code><br><code>row_4_down</code></td><td><code>row_4_stop</code></td><td><code>row_4_on</code><br><code>row_4_up</code></td></tr></tbody></table><p>Briefly pressing and releasing a button triggers the <code>off</code> resp. <code>on</code> actions for the given row, long-pressing triggers the <code>down</code>/<code>up</code> state respectively (after about one second). When releasing then, a <code>stop</code> will be issued with no distinction between the left or right button.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',7),l=(0,d.Uk)("How to use device type specific configuration"),h=(0,d.uE)('<ul><li><p><code>transition</code>: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to <code>0</code> (no transition). The value must be a number with a minimum value of <code>0</code></p></li><li><p><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>row_1_on</code>, <code>row_1_off</code>, <code>row_1_up</code>, <code>row_1_down</code>, <code>row_1_stop</code>, <code>row_2_on</code>, <code>row_2_off</code>, <code>row_2_up</code>, <code>row_2_down</code>, <code>row_2_stop</code>, <code>row_3_on</code>, <code>row_3_off</code>, <code>row_3_up</code>, <code>row_3_down</code>, <code>row_3_stop</code>, <code>row_4_on</code>, <code>row_4_off</code>, <code>row_4_up</code>, <code>row_4_down</code>, <code>row_4_stop</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',8),u={},p=(0,o(83744).Z)(u,[["render",function(e,t){const o=(0,d.up)("OutboundLink"),u=(0,d.up)("RouterLink");return(0,d.wg)(),(0,d.iD)(d.HY,null,[r,(0,d._)("p",null,[i,(0,d._)("a",c,[n,(0,d.Wm)(o)]),a]),s,(0,d._)("p",null,[(0,d._)("em",null,[(0,d.Wm)(u,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,d.w5)((()=>[l])),_:1})])]),h],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,d]of t)e[o]=d;return e}}}]);