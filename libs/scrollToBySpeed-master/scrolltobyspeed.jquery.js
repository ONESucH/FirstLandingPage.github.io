!function(a){a.fn.scrollToBySpeed=function(b){var c,d,e,f,g,h=a("html,body"),i=a(window);return c={speed:1e3,offset:0,mode:"chain",easing:"swing",context:"__window"},d=a.extend(c,b),d.context instanceof jQuery?(h=d.context,i=d.context):"__window"!==d.context&&(h=a(d.context),i=a(d.context)),g=Math.abs(h.scrollTop()+a(this).offset().top-h.offset().top),e=Math.abs(i.scrollTop()-g),f=e/d.speed*1e3,h.animate({scrollTop:g-d.offset},f,d.easing),"chain"!==d.mode?f:this}}(jQuery);