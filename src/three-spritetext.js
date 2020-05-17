// Version 1.5.1 three-spritetext - https://github.com/vasturiano/three-spritetext
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("three")):"function"==typeof define&&define.amd?define(["three"],e):(t=t||self).SpriteText=e(t.THREE)}(this,(function(t){"use strict";function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function s(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return function(t){if(Array.isArray(t))return h(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var c=window.THREE?window.THREE:{LinearFilter:t.LinearFilter,Sprite:t.Sprite,SpriteMaterial:t.SpriteMaterial,Texture:t.Texture};return function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(g,t);var h,u,f,l,d=(h=g,function(){var t,e=r(h);if(o()){var n=r(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return s(this,t)});function g(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"rgba(255, 255, 255, 1)";return e(this,g),(t=d.call(this,new c.SpriteMaterial({map:new c.Texture})))._text="".concat(n),t._textHeight=r,t._color=i,t._backgroundColor=!1,t._padding=0,t._borderWidth=0,t._borderColor="white",t._strokeWidth=0,t._strokeColor="white",t._fontFace="Arial",t._fontSize=90,t._fontWeight="normal",t._canvas=document.createElement("canvas"),t._texture=t.material.map,t._texture.minFilter=c.LinearFilter,t._genCanvas(),t}return u=g,(f=[{key:"_genCanvas",value:function(){var t=this,e=this._canvas,n=e.getContext("2d"),r=Array.isArray(this.borderWidth)?this.borderWidth:[this.borderWidth,this.borderWidth],i=r.map((function(e){return e*t.fontSize*.1})),o=Array.isArray(this.padding)?this.padding:[this.padding,this.padding],s=o.map((function(e){return e*t.fontSize*.1})),h=this.text.split("\n"),c="".concat(this.fontWeight," ").concat(this.fontSize,"px ").concat(this.fontFace);n.font=c;var u=Math.max.apply(Math,a(h.map((function(t){return n.measureText(t).width})))),f=this.fontSize*h.length;e.width=u+2*i[0]+2*s[0],e.height=f+2*i[1]+2*s[1],this.borderWidth&&(n.strokeStyle=this.borderColor,i[0]&&(n.lineWidth=2*i[0],n.beginPath(),n.moveTo(0,0),n.lineTo(0,e.height),n.moveTo(e.width,0),n.lineTo(e.width,e.height),n.stroke()),i[1]&&(n.lineWidth=2*i[1],n.beginPath(),n.moveTo(i[0],0),n.lineTo(e.width-i[0],0),n.moveTo(i[0],e.height),n.lineTo(e.width-i[0],e.height),n.stroke())),n.translate.apply(n,a(i)),this.backgroundColor&&(n.fillStyle=this.backgroundColor,n.fillRect(0,0,e.width-2*i[0],e.height-2*i[1])),n.translate.apply(n,a(s)),n.font=c,n.fillStyle=this.color,n.textBaseline="bottom";var l=this.strokeWidth>0;l&&(n.lineWidth=this.strokeWidth*this.fontSize/10,n.strokeStyle=this.strokeColor),h.forEach((function(e,r){var i=(u-n.measureText(e).width)/2,o=(r+1)*t.fontSize;l&&n.strokeText(e,i,o),n.fillText(e,i,o)})),this._texture.image=e,this._texture.needsUpdate=!0;var d=this.textHeight*h.length+2*r[1]+2*o[1];this.scale.set(d*e.width/e.height,d)}},{key:"clone",value:function(){return new this.constructor(this.text,this.textHeight,this.color).copy(this)}},{key:"copy",value:function(t){return c.Sprite.prototype.copy.call(this,t),this.color=t.color,this.backgroundColor=t.backgroundColor,this.padding=t.padding,this.borderWidth=t.borderWidth,this.borderColor=t.borderColor,this.fontFace=t.fontFace,this.fontSize=t.fontSize,this.fontWeight=t.fontWeight,this.strokeWidth=t.strokeWidth,this.strokeColor=t.strokeColor,this}},{key:"text",get:function(){return this._text},set:function(t){this._text=t,this._genCanvas()}},{key:"textHeight",get:function(){return this._textHeight},set:function(t){this._textHeight=t,this._genCanvas()}},{key:"color",get:function(){return this._color},set:function(t){this._color=t,this._genCanvas()}},{key:"backgroundColor",get:function(){return this._backgroundColor},set:function(t){this._backgroundColor=t,this._genCanvas()}},{key:"padding",get:function(){return this._padding},set:function(t){this._padding=t,this._genCanvas()}},{key:"borderWidth",get:function(){return this._borderWidth},set:function(t){this._borderWidth=t,this._genCanvas()}},{key:"borderColor",get:function(){return this._borderColor},set:function(t){this._borderColor=t,this._genCanvas()}},{key:"fontFace",get:function(){return this._fontFace},set:function(t){this._fontFace=t,this._genCanvas()}},{key:"fontSize",get:function(){return this._fontSize},set:function(t){this._fontSize=t,this._genCanvas()}},{key:"fontWeight",get:function(){return this._fontWeight},set:function(t){this._fontWeight=t,this._genCanvas()}},{key:"strokeWidth",get:function(){return this._strokeWidth},set:function(t){this._strokeWidth=t,this._genCanvas()}},{key:"strokeColor",get:function(){return this._strokeColor},set:function(t){this._strokeColor=t,this._genCanvas()}}])&&n(u.prototype,f),l&&n(u,l),g}(c.Sprite)}));
