self = self || {closed: true};

self.onmessage = function mess(e) {
  try { 
    postMessage(String(e.data) + " // " + String(eval(e.data)) ); 
  } catch(err) {
    postMessage(String(e.data) + " // " + err.message);
  }
}
// self.importScripts("data:text/javascript;/self.js?#,function%20evil(doer){try{return(eval(doer));}catch(e){return(e);}}");

function evil(doer){try{return(eval(doer));}catch(e){return(e);}}

self.url = import.meta.url;

export default {url: self.url, self: self, evil: evil};
