"use strict";

import snabbdom from 'snabbdom';
import h from 'snabbdom/h';

const patch = snabbdom.init([
  // require('snabbdom/modules/class'),          // makes it easy to toggle classes
  // require('snabbdom/modules/props'),          // for setting properties on DOM elements
  require('snabbdom/modules/style'),          // handles styling on elements with support for animations
  // require('snabbdom/modules/eventlisteners'), // attaches event listeners
]);


const vnode = h('div', {style: {fontWeight: 'bold'}}, 'Hello world');
patch(document.getElementById('placeholder'), vnode);

const vnode2 = h('p', {style: {color: '#ff6600'}}, 
`딱히 아직까지 서비스에 쓰일만한 장점들은 보이진 않는다.
 음 모듈별로 제공해주는 무언가가 있는 것 같다.
 토글을 편하게 해준다든지
 돔 속성을 세팅해준다든지 등등등
 이벤트 리스너 모듈등도 있는걸 보아하니 장점이 조금은 있어 보인다.
 지금 필요한 기능은 스타일 정도이다.
`);

patch(document.getElementById('vnode2'), vnode2);


