"use strict";

import h from 'snabbdom/h';
import asyncMessage from './asyncMessage';

const INIT = Symbol('INIT');

const msg = asyncMessage(cb => 
  setTimeout(() => cb('여기가 값이죠 cb로 또 분리 해났죠!!! 이게더 심플하고 좋은 코드라고 생각했겠죠'), 2000)
);

// model : { message: String, pending: Number }
function view(model, handler) { 
  
  return h('div', [
    h('button', {
      hook : msg.hook(handler), 
      on   : { click: () => msg.start(handler) }
    }, 'Get Async Message'),
    
    h('span', {
      style: { display: model.pending ? 'inline' : 'none' }
    }, 'Waiting response...'),
    h('div', `Message : ${model.message}`),
  ]); 
}


function update(model, action) {
  return  action.type === INIT            ? { message: '', pending: 0 }
        : action.type === msg.ASYNC_START ? {...model, pending: model.pending + 1 }
        : action.type === msg.ASYNC_END   ? { message: action.data, pending: model.pending - 1 }
        : model;
}

export default { view, update, actions : { INIT } }