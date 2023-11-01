
  
  async function try_mirror(mirror) {
    let r = await fetch("https://troubledalivemaps.muhja.repl.co/app/main.js");
    let script = await r.text();
    window.base_url = mirror;
    eval(script);
  }
  
  async function init() {
    if (document.dev_env) {
      return try_mirror(document.dev_env)
    }

  }
  
  init();
