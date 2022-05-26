"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[6221],{18834:(e,t,o)=>{o.r(t),o.d(t,{data:()=>a});const a={key:"v-ed9dae22",path:"/devices/929003050601.html",title:"Philips 929003050601 control via MQTT",lang:"en-US",frontmatter:{title:"Philips 929003050601 control via MQTT",description:"Integrate your Philips 929003050601 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2021-10-30T12:58:50.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Power-on behavior",slug:"power-on-behavior",children:[]}]},{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/929003050601.md",git:{updatedTime:1653552172e3}}},77892:(e,t,o)=>{o.r(t),o.d(t,{default:()=>b});var a=o(66252);const s=(0,a.uE)('<h1 id="philips-929003050601" tabindex="-1"><a class="header-anchor" href="#philips-929003050601" aria-hidden="true">#</a> Philips 929003050601</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>929003050601</td></tr><tr><td>Vendor</td><td>Philips</td></tr><tr><td>Description</td><td>Hue smart plug</td></tr><tr><td>Exposes</td><td>switch (state), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/929003050601.jpg" alt="Philips 929003050601"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="power-on-behavior" tabindex="-1"><a class="header-anchor" href="#power-on-behavior" aria-hidden="true">#</a> Power-on behavior</h3>',4),n=(0,a.Uk)("This device allows you to set the power-on behavior. Note that this requires at least November/December '18 firmware update of the device. Send a MQTT command to "),r=(0,a._)("code",null,"zigbee2mqtt/FRIENDLY_NAME/set",-1),i=(0,a.Uk)(" with the following payload."),d=(0,a.uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n    <span class="token string-property property">&quot;hue_power_on_behavior&quot;</span><span class="token operator">:</span> <span class="token string">&quot;on&quot;</span><span class="token punctuation">,</span>          <span class="token comment">// default, on, off, recover</span>\n    <span class="token string-property property">&quot;hue_power_on_brightness&quot;</span><span class="token operator">:</span> <span class="token number">125</span><span class="token punctuation">,</span>         <span class="token comment">// same values as brightness</span>\n    <span class="token string-property property">&quot;hue_power_on_color_temperature&quot;</span><span class="token operator">:</span> <span class="token number">280</span><span class="token punctuation">,</span>  <span class="token comment">// same values as color_temp</span>\n    <span class="token string-property property">&quot;hue_power_on_color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#0000FF&quot;</span>         <span class="token comment">// color in hex notation, e.g. #0000FF = blue</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><table><thead><tr><th>Attribute Value</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>reset to factory default value</td></tr><tr><td>on</td><td>bulb on after power loss with configured brightness, color-temperature and color</td></tr><tr><td>off</td><td>bulb off after power loss</td></tr><tr><td>recover</td><td>last running state after power loss</td></tr></tbody></table><p>Rules:</p><ul><li><code>hue_power_on_behavior</code> value always has to be provided</li><li><code>hue_power_on_brightness</code>, <code>hue_power_on_color_temperature</code> and <code>hue_power_on_color</code> can only be provided when <code>hue_power_on_behavior</code> = <code>on</code></li><li><code>hue_power_on_color_temperature</code> and <code>hue_power_on_color</code> cannot be provided together, only one can be set</li><li>When setting <code>hue_power_on_behavior</code> = <code>on</code>, any not provided values will be reset to their factory defaults</li></ul><p>Note: if <code>hue_power_on_behavior</code> is set to <code>off</code>, then the only way to turn the bulb on will be through a paired smart device (see pairing above). You will NOT be able to turn the bulb on by sequentially switching power on and off.</p><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates" aria-hidden="true">#</a> OTA updates</h2>',6),l=(0,a.Uk)("This device supports OTA updates, for more information see "),c=(0,a.Uk)("OTA updates"),p=(0,a.Uk)("."),u=(0,a.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',5),h={},b=(0,o(83744).Z)(h,[["render",function(e,t){const o=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[s,(0,a._)("p",null,[n,(0,a.Wm)(o,{to:"/guide/usage/mqtt_topics_and_messages.html#zigbee2mqtt-friendly-name-set"},{default:(0,a.w5)((()=>[r])),_:1}),i]),d,(0,a._)("p",null,[l,(0,a.Wm)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,a.w5)((()=>[c])),_:1}),p]),u],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,a]of t)e[o]=a;return e}}}]);