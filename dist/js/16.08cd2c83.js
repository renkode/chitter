"use strict";(self["webpackChunkchitter"]=self["webpackChunkchitter"]||[]).push([[16],{5527:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(3396),i=n(4870),s=n(9327),a=n(7925),l=n(988),c=n(4386),u=n(7427);n(9456),n(6035);const w={class:"tweet-list-container"};var o={__name:"LocalTimeline",setup(e){const t=(0,s.q)(),n=(0,a.g)(),o=(0,l.U)(),d=(0,r.Fl)((()=>o.getUser(t.currentId))),m=(0,r.Fl)((()=>d.value.localTimeline.map((e=>{if(n.getTweet(e.id)){const t=n.getTweet(e.id);return{data:t,type:e.type,retweetedBy:"retweet"===e.type?o.getUser(e.retweetedBy).name:null}}}))));async function p(e){await new Promise((t=>{setTimeout((()=>{}),e)}))}return(0,r.bv)((()=>{p(0)})),(e,t)=>((0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(u.Z),(0,r._)("div",w,[(0,i.SU)(d)?((0,r.wg)(),(0,r.j4)(c.Z,{key:0,tweets:(0,i.SU)(m)},null,8,["tweets"])):(0,r.kq)("",!0)])]))}};const d=o;var m=d}}]);
//# sourceMappingURL=16.08cd2c83.js.map