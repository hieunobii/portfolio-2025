'use strict';
/* Realtime sphere. Native WebGL; projected 3D Canvas fallback. No dependencies. */
(() => {
  const canvas = document.getElementById('tech-sphere');
  if (!canvas) return;
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const gl = canvas.getContext('webgl', { alpha: true, antialias: false, depth: false, powerPreference: 'low-power' });
  const state = { x: 0, y: 0, hover: 0, tx: 0, ty: 0, th: 0, pulse: -10, frame: 0, visible: false, last: 0, elapsed: 0, width: 1, height: 1, yaw: 0, pitch: 0, targetYaw: 0, targetPitch: 0, velocityYaw: 0, velocityPitch: 0, dragging: false, pointerId: null, lastX: 0, lastY: 0, lastMove: 0, distance: 0, suppressClickUntil: 0 };
  const vertex = `attribute vec2 position;void main(){gl_Position=vec4(position,0.,1.);}`;
  const fragment = `
precision highp float;
uniform vec2 resolution;
uniform vec2 pointer;
uniform vec2 rotation;
uniform float time;
uniform float hover;
uniform float pulse;
mat2 rot(float a){return mat2(cos(a),-sin(a),sin(a),cos(a));}
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
vec3 spin(vec3 p){p.yz=rot(rotation.y)*p.yz;p.xz=rot(time*.12+rotation.x)*p.xz;return p;}
float field(vec3 p){
  vec3 q=spin(p);
  float angle=atan(q.z,q.x), latitude=atan(q.y,length(q.xz));
  float energy=sin(angle*7.+time*.7)*sin(latitude*8.-time*.6)*.017;
  energy+=sin(q.x*16.+q.y*10.+time)*sin(q.z*11.-time*.8)*.009;
  float d=length(p.xy-pointer*.78);
  float influence=exp(-d*d*7.)*hover;
  energy+=sin(d*26.-time*4.)*.075*influence;
  float age=time-pulse;
  energy+=sin(d*24.-age*8.)*.07*exp(-age*1.8)*step(0.,age);
  return length(p)-.84-energy;
}
vec3 normal(vec3 p){vec2 e=vec2(.002,0.);return normalize(vec3(field(p+e.xyy)-field(p-e.xyy),field(p+e.yxy)-field(p-e.yxy),field(p+e.yyx)-field(p-e.yyx)));}
void main(){
  vec2 uv=(gl_FragCoord.xy-.5*resolution)/resolution.y;
  vec2 starcell=floor(uv*95.);float star=step(.992,hash(starcell));
  float sparkle=pow(max(0.,1.-length(fract(uv*95.)-.5)*2.),3.);
  vec3 bg=vec3(.012,.026,.062)+vec3(.025,.06,.15)*exp(-dot(uv,uv)*3.);
  bg+=star*sparkle*vec3(.4,.65,1.)*(.45+.2*sin(time+hash(starcell)*6.));
  vec3 ro=vec3(0.,0.,3.15),rd=normalize(vec3(uv*2.15,-3.15));
  float distance=0.;vec3 p;float glow=0.;float hit=0.;
  for(int i=0;i<58;i++){
    p=ro+rd*distance;float f=field(p);glow+=exp(-abs(f)*24.)*.005;
    if(f<.0015){hit=1.;break;}distance+=max(f*.8,.004);if(distance>5.)break;
  }
  vec3 col=bg;
  if(hit>.5){
    vec3 n=normal(p);float fresnel=pow(1.-max(dot(n,-rd),0.),2.5);
    float diffuse=max(dot(n,normalize(vec3(-2.,3.,3.))),0.);
    float spec=pow(max(dot(reflect(normalize(vec3(2.,-3.,-3.)),n),-rd),0.),45.);
    vec3 q=spin(p);
    float u=atan(q.z,q.x)/6.283+.5;float v=acos(clamp(q.y/length(q),-1.,1.))/3.14159;
    vec2 lattice=vec2(u*40.,v*24.);vec2 cell=abs(fract(lattice)-.5);
    float grid=1.-smoothstep(.017,.045,min(cell.x,cell.y));
    float dots=1.-smoothstep(.04,.115,length(cell));
    float bands=pow(.5+.5*sin(v*70.-time*.65),18.);
    float scan=pow(max(0.,1.-abs(p.y-sin(time*.28)*.8)*10.),3.);
    vec3 base=mix(vec3(.035,.10,.27),vec3(.055,.28,.49),diffuse);
    col=base*(.45+diffuse*.7)+grid*vec3(.10,.35,.62)*.7;
    col+=dots*vec3(.3,.9,1.)*(.35+diffuse)*.8;
    col+=fresnel*mix(vec3(.16,.5,1.),vec3(.65,.36,1.),smoothstep(-.8,.8,p.x))*1.8;
    col+=spec*vec3(.65,.85,1.)*.85+scan*vec3(.12,.5,.65)*.6+bands*vec3(.04,.12,.23);
    float influence=exp(-dot(p.xy-pointer*.78,p.xy-pointer*.78)*8.)*hover;
    col+=influence*vec3(.1,.45,.65)*.8;
  }
  col+=glow*vec3(.09,.35,.72);
  // Orbital light traces in front of and behind the physical surface.
  vec2 orbit=uv;orbit=rot(-.44+rotation.x*.08)*orbit;
  float ring=abs(length(vec2(orbit.x,orbit.y*2.5))-.58);
  float ring2=abs(length(vec2(orbit.x*2.,orbit.y))-.64);
  float orbital=exp(-ring*260.)*(.2+.8*smoothstep(-.05,.1,orbit.y));
  orbital+=exp(-ring2*270.)*.3;
  if(hit>.5&&orbit.y<0.)orbital*=.08;
  col+=orbital*vec3(.12,.48,.9);
  float halo=exp(-pow(length(uv)-.43,2.)*80.)*.08;
  col+=halo*vec3(.18,.38,.85);
  col*=1.-smoothstep(.55,1.1,length(uv))*.6;
  gl_FragColor=vec4(col,1.);
}`;
  let draw;
  function setupWebGL() {
    if (!gl) return false;
    const shaders = [];
    const program = gl.createProgram();
    for (const [type, source] of [[gl.VERTEX_SHADER, vertex], [gl.FRAGMENT_SHADER, fragment]]) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) { gl.deleteShader(shader); return false; }
      shaders.push(shader);gl.attachShader(program, shader);
    }
    gl.linkProgram(program);
    shaders.forEach(shader => { gl.detachShader(program, shader);gl.deleteShader(shader); });
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return false;
    gl.useProgram(program);
    const buffer = gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]), gl.STATIC_DRAW);
    const attribute = gl.getAttribLocation(program, 'position');gl.enableVertexAttribArray(attribute);gl.vertexAttribPointer(attribute, 2, gl.FLOAT, false, 0, 0);
    const uniforms = Object.fromEntries(['resolution','pointer','rotation','time','hover','pulse'].map(name => [name,gl.getUniformLocation(program,name)]));
    draw = () => {
      gl.viewport(0,0,canvas.width,canvas.height);
      gl.uniform2f(uniforms.resolution,canvas.width,canvas.height);
      gl.uniform2f(uniforms.pointer,state.x,state.y);
      gl.uniform2f(uniforms.rotation,state.yaw,state.pitch);
      gl.uniform1f(uniforms.time,state.elapsed);
      gl.uniform1f(uniforms.hover,state.hover);
      gl.uniform1f(uniforms.pulse,state.pulse);
      gl.drawArrays(gl.TRIANGLES,0,6);
    };
    canvas.dataset.renderer = 'webgl';
    return true;
  }
  function setupFallback() {
    // A context type cannot be changed on an existing canvas.
    const replacement = canvas.cloneNode();canvas.after(replacement);
    replacement.removeAttribute('id');replacement.setAttribute('aria-hidden','true');replacement.tabIndex=-1;
    canvas.style.opacity='0';replacement.style.cssText='position:absolute;inset:0;display:block;width:100%;height:100%;pointer-events:none';
    const context = replacement.getContext('2d');
    canvas.dataset.renderer='canvas-fallback';
    draw = () => {
      if(replacement.width!==canvas.width)replacement.width=canvas.width;if(replacement.height!==canvas.height)replacement.height=canvas.height;
      const w=replacement.width,h=replacement.height;
      context.fillStyle='#071024';context.fillRect(0,0,w,h);
      const radius=Math.min(w,h)*.34;
      const halo=context.createRadialGradient(w/2,h/2,0,w/2,h/2,radius*1.5);halo.addColorStop(0,'#194c7f');halo.addColorStop(1,'#071024');context.fillStyle=halo;context.fillRect(0,0,w,h);
      for(let lat=1;lat<22;lat++){
        context.beginPath();
        for(let lon=0;lon<=64;lon++){
          const a=lat/22*Math.PI,b=lon/64*Math.PI*2+state.elapsed*.12+state.yaw;
          const ripple=Math.sin(b*7+a*8+state.elapsed)*.025*(1+state.hover*2);
          const x=Math.sin(a)*Math.cos(b)*(1+ripple),y=Math.cos(a)*(1+ripple),z=Math.sin(a)*Math.sin(b);
          const ry=y*Math.cos(state.pitch)-z*Math.sin(state.pitch),rz=y*Math.sin(state.pitch)+z*Math.cos(state.pitch);
          const perspective=3/(3-rz*.25);
          const px=w/2+x*radius*perspective,py=h/2+ry*radius*perspective+rz*radius*.15;
          context.strokeStyle=`rgba(91,191,255,${.15+(z+1)*.25})`;
          if(lon===0)context.moveTo(px,py);else context.lineTo(px,py);
        }context.stroke();
      }
    };
  }
  if (!setupWebGL()) setupFallback();
  function resize() {
    const box=canvas.parentElement.getBoundingClientRect();
    const dpr=Math.min(devicePixelRatio||1,innerWidth<600?1.25:1.6);
    canvas.width=Math.max(1,Math.round(box.width*dpr));canvas.height=Math.max(1,Math.round(box.height*dpr));
    state.width=box.width;state.height=box.height;
    if(motion.matches)draw();
  }
  function render(now) {
    state.frame=0;
    if(!state.visible||document.hidden)return;
    const delta=Math.min((now-state.last)/1000,.05);state.last=now;
    if(!motion.matches)state.elapsed+=delta;
        if(motion.matches) {
      state.yaw=state.targetYaw;state.pitch=state.targetPitch;
    } else {
      if(!state.dragging) {
        state.targetYaw+=state.velocityYaw*delta;
        state.targetPitch=clamp(state.targetPitch+state.velocityPitch*delta,-1.2,1.2);
        state.velocityYaw*=Math.exp(-delta*5.5);state.velocityPitch*=Math.exp(-delta*5.5);
        if(Math.abs(state.targetPitch)>=1.2)state.velocityPitch=0;
      }
      const follow=1-Math.exp(-delta*22);
      state.yaw+=(state.targetYaw-state.yaw)*follow;
      state.pitch+=(state.targetPitch-state.pitch)*follow;
    }
    state.x+=(state.tx-state.x)*.09;state.y+=(state.ty-state.y)*.09;state.hover+=(state.th-state.hover)*.08;
    draw();
    if(!motion.matches)state.frame=requestAnimationFrame(render);
  }
  function refresh() {
    cancelAnimationFrame(state.frame);state.frame=0;
    if(!state.visible||document.hidden)return;
    state.last=performance.now();state.frame=requestAnimationFrame(render);
  }
  const observer=new IntersectionObserver(entries=>{state.visible=entries[0].isIntersecting;if(!state.visible)finishGrab(null,true);refresh();},{threshold:.05});observer.observe(canvas.parentElement);
  const resizeObserver=new ResizeObserver(resize);resizeObserver.observe(canvas.parentElement);
  function clamp(value,min,max){return Math.max(min,Math.min(max,value));}
  function updatePointer(event) {
    const box=canvas.getBoundingClientRect();
    state.tx=clamp((event.clientX-box.left-box.width/2)/(box.height*.5),-1.6,1.6);
    state.ty=clamp(-(event.clientY-box.top-box.height/2)/(box.height*.5),-1.6,1.6);
    state.th=1;
  }
  canvas.addEventListener('pointerdown',event=>{
    if(event.button!==0 || event.isPrimary===false || state.dragging)return;
    updatePointer(event);
    state.dragging=true;state.pointerId=event.pointerId;
    state.lastX=event.clientX;state.lastY=event.clientY;state.lastMove=performance.now();state.distance=0;state.suppressClickUntil=0;
    state.velocityYaw=0;state.velocityPitch=0;
    canvas.classList.add('is-grabbing');
    try{canvas.setPointerCapture(event.pointerId);}catch{/* Synthetic or already-ended pointers have no capture. */}
    refresh();
  });
  canvas.addEventListener('pointermove',event=>{
    if(state.dragging && event.pointerId!==state.pointerId)return;
    updatePointer(event);
    if(state.dragging) {
      const now=performance.now(),dt=Math.max(.008,Math.min((now-state.lastMove)/1000,.06));
      const dx=event.clientX-state.lastX,dy=event.clientY-state.lastY;
      const sensitivity=3.6/Math.max(state.width,state.height);
      const yaw=dx*sensitivity,pitch=dy*sensitivity;
      state.targetYaw+=yaw;state.targetPitch=clamp(state.targetPitch+pitch,-1.2,1.2);
      state.velocityYaw=clamp(state.velocityYaw*.35+(yaw/dt)*.65,-4,4);
      state.velocityPitch=clamp(state.velocityPitch*.35+(pitch/dt)*.65,-3,3);
      state.distance+=Math.hypot(dx,dy);
      state.lastX=event.clientX;state.lastY=event.clientY;state.lastMove=now;
    }
    if(motion.matches)refresh();
  });
  function finishGrab(event,cancel=false) {
    if(!state.dragging || (event && event.pointerId!==state.pointerId))return;
    const pointerId=state.pointerId;
    state.dragging=false;state.pointerId=null;canvas.classList.remove('is-grabbing');
    if(cancel || motion.matches || performance.now()-state.lastMove>100){state.velocityYaw=0;state.velocityPitch=0;}
    if(state.distance>4){state.suppressClickUntil=performance.now()+400;canvas.dataset.dragged='true';}
    if(cancel){state.targetYaw=state.yaw;state.targetPitch=state.pitch;}
    try{if(canvas.hasPointerCapture(pointerId))canvas.releasePointerCapture(pointerId);}catch{/* Capture can end automatically. */}
    refresh();
  }
  canvas.addEventListener('pointerup',event=>finishGrab(event));
  canvas.addEventListener('pointercancel',event=>finishGrab(event,true));
  canvas.addEventListener('lostpointercapture',event=>finishGrab(event,true));
  canvas.addEventListener('pointerleave',()=>{
    if(state.dragging)return;
    state.th=0;state.tx=0;state.ty=0;if(motion.matches)refresh();
  });
  function pulse(){state.pulse=state.elapsed;canvas.dataset.interacted='true';refresh();}
  canvas.addEventListener('click',()=>{if(performance.now()>=state.suppressClickUntil)pulse();});
  canvas.addEventListener('keydown',event=>{
    if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home'].includes(event.key)) {
      event.preventDefault();state.velocityYaw=0;state.velocityPitch=0;
      if(event.key==='Home'){state.targetYaw=0;state.targetPitch=0;}
      else if(event.key==='ArrowLeft')state.targetYaw-=.18;
      else if(event.key==='ArrowRight')state.targetYaw+=.18;
      else state.targetPitch=clamp(state.targetPitch+(event.key==='ArrowUp'?-.18:.18),-1.2,1.2);
      refresh();
    } else if(event.key==='Enter'||event.key===' '){event.preventDefault();pulse();}
  });  canvas.addEventListener('webglcontextlost',event=>{event.preventDefault();finishGrab(null,true);cancelAnimationFrame(state.frame);});
  canvas.addEventListener('webglcontextrestored',()=>{setupWebGL();resize();refresh();});
  document.addEventListener('visibilitychange',()=>{if(document.hidden)finishGrab(null,true);refresh();});motion.addEventListener('change',()=>{state.velocityYaw=0;state.velocityPitch=0;refresh();});
  resize();
})();
