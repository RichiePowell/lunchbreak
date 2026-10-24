import{$ as e,A as t,B as n,C as r,Ct as i,D as a,Dt as o,E as s,Et as c,F as l,G as u,H as d,I as f,J as p,K as m,L as h,M as g,N as _,O as v,Ot as y,P as b,Q as x,R as S,S as C,St as w,T,Tt as E,U as D,V as O,W as ee,X as k,Y as te,Z as ne,_ as A,_t as re,a as ie,at as ae,b as oe,bt as se,c as ce,ct as le,d as j,dt as ue,et as de,f as fe,ft as M,g as pe,gt as me,h as he,i as ge,it as _e,j as ve,k as ye,l as be,lt as xe,m as Se,mt as N,n as Ce,nt as P,o as we,ot as Te,p as Ee,pt as F,q as De,r as I,rt as Oe,s as ke,st as Ae,t as je,tt as Me,u as Ne,ut as Pe,v as Fe,vt as Ie,w as Le,wt as Re,x as ze,xt as Be,y as Ve,z as He}from"./registry-BrJNY1yS.js";var Ue=`attached`,We=1e3,Ge=1001,Ke=1002,qe=1003,Je=1004,Ye=1005,Xe=1006,Ze=1007,Qe=1008,$e=1009,et=1010,tt=1011,nt=1012,rt=1013,it=1014,at=1015,ot=1016,st=1017,ct=1018,lt=1020,ut=35902,dt=35899,ft=1021,pt=1022,mt=1023,ht=1026,gt=1027,_t=1028,vt=1029,yt=1030,bt=1031,xt=1033,St=33776,Ct=33777,wt=33778,Tt=33779,Et=35840,Dt=35841,Ot=35842,kt=35843,At=36196,jt=37492,Mt=37496,Nt=37488,Pt=37489,Ft=37490,It=37491,Lt=37808,Rt=37809,zt=37810,Bt=37811,Vt=37812,Ht=37813,Ut=37814,Wt=37815,Gt=37816,Kt=37817,qt=37818,Jt=37819,Yt=37820,Xt=37821,Zt=36492,Qt=36494,$t=36495,en=36283,tn=36284,nn=36285,rn=36286,an=2300,on=2301,sn=2302,cn=2303,ln=2400,un=2401,dn=2402,fn=2500,pn=3200,mn=`srgb`,hn=`srgb-linear`,gn=`linear`,_n=`srgb`,vn=7680,yn=35044,bn=35048,xn=2e3;function Sn(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Cn(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function wn(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Tn(){let e=wn(`canvas`);return e.style.display=`block`,e}var En={};function Dn(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function On(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function L(...e){e=On(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function R(...e){e=On(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function kn(...e){let t=e.join(` `);t in En||(En[t]=!0,L(...e))}function An(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var jn={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},Mn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},Nn=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Pn=1234567,Fn=Math.PI/180,In=180/Math.PI;function Ln(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Nn[e&255]+Nn[e>>8&255]+Nn[e>>16&255]+Nn[e>>24&255]+`-`+Nn[t&255]+Nn[t>>8&255]+`-`+Nn[t>>16&15|64]+Nn[t>>24&255]+`-`+Nn[n&63|128]+Nn[n>>8&255]+`-`+Nn[n>>16&255]+Nn[n>>24&255]+Nn[r&255]+Nn[r>>8&255]+Nn[r>>16&255]+Nn[r>>24&255]).toLowerCase()}function z(e,t,n){return Math.max(t,Math.min(n,e))}function Rn(e,t){return(e%t+t)%t}function zn(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function Bn(e,t,n){return e===t?0:(n-e)/(t-e)}function Vn(e,t,n){return(1-n)*e+n*t}function Hn(e,t,n,r){return Vn(e,t,1-Math.exp(-n*r))}function Un(e,t=1){return t-Math.abs(Rn(e,t*2)-t)}function Wn(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function Gn(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Kn(e,t){return e+Math.floor(Math.random()*(t-e+1))}function qn(e,t){return e+Math.random()*(t-e)}function Jn(e){return e*(.5-Math.random())}function Yn(e){e!==void 0&&(Pn=e);let t=Pn+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Xn(e){return e*Fn}function Zn(e){return e*In}function Qn(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function $n(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function er(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function tr(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:L(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function nr(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function rr(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var ir={DEG2RAD:Fn,RAD2DEG:In,generateUUID:Ln,clamp:z,euclideanModulo:Rn,mapLinear:zn,inverseLerp:Bn,lerp:Vn,damp:Hn,pingpong:Un,smoothstep:Wn,smootherstep:Gn,randInt:Kn,randFloat:qn,randFloatSpread:Jn,seededRandom:Yn,degToRad:Xn,radToDeg:Zn,isPowerOfTwo:Qn,ceilPowerOfTwo:$n,floorPowerOfTwo:er,setQuaternionFromProperEuler:tr,normalize:rr,denormalize:nr},B=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=z(this.x,e.x,t.x),this.y=z(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=z(this.x,e,t),this.y=z(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(z(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(z(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ar=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:L(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(z(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sr.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sr.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=z(this.x,e.x,t.x),this.y=z(this.y,e.y,t.y),this.z=z(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=z(this.x,e,t),this.y=z(this.y,e,t),this.z=z(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(z(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return or.copy(this).projectOnVector(e),this.sub(or)}reflect(e){return this.sub(or.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(z(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},or=new V,sr=new ar,H=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return kn(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(cr.makeScale(e,t)),this}rotate(e){return kn(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(cr.makeRotation(-e)),this}translate(e,t){return kn(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(cr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},cr=new H,lr=new H().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ur=new H().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dr(){let e={enabled:!0,workingColorSpace:hn,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=pr(e.r),e.g=pr(e.g),e.b=pr(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=mr(e.r),e.g=mr(e.g),e.b=mr(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?gn:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return kn(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return kn(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[hn]:{primaries:t,whitePoint:r,transfer:gn,toXYZ:lr,fromXYZ:ur,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:mn},outputColorSpaceConfig:{drawingBufferColorSpace:mn}},[mn]:{primaries:t,whitePoint:r,transfer:_n,toXYZ:lr,fromXYZ:ur,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:mn}}}),e}var fr=dr();function pr(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function mr(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var hr,gr=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{hr===void 0&&(hr=wn(`canvas`)),hr.width=e.width,hr.height=e.height;let t=hr.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=hr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=wn(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=pr(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(pr(t[e]/255)*255):t[e]=pr(t[e]);return{data:t,width:e.width,height:e.height}}return L(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},_r=0,vr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:_r++}),this.uuid=Ln(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(yr(r[t].image)):e.push(yr(r[t]))}else e=yr(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function yr(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?gr.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(L(`Texture: Unable to serialize Texture.`),{})}var br=0,xr=new V,Sr=class e extends Mn{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=Ge,i=Ge,a=Xe,o=Qe,s=mt,c=$e,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:br++}),this.uuid=Ln(),this.name=``,this.source=new vr(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new B(0,0),this.repeat=new B(1,1),this.center=new B(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new H,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(xr).x}get height(){return this.source.getSize(xr).y}get depth(){return this.source.getSize(xr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){L(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?L(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case We:e.x-=Math.floor(e.x);break;case Ge:e.x=e.x<0?0:1;break;case Ke:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case We:e.y-=Math.floor(e.y);break;case Ge:e.y=e.y<0?0:1;break;case Ke:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Sr.DEFAULT_IMAGE=null,Sr.DEFAULT_MAPPING=300,Sr.DEFAULT_ANISOTROPY=1;var Cr=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=z(this.x,e.x,t.x),this.y=z(this.y,e.y,t.y),this.z=z(this.z,e.z,t.z),this.w=z(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=z(this.x,e,t),this.y=z(this.y,e,t),this.z=z(this.z,e,t),this.w=z(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(z(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},wr=class extends Mn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Cr(0,0,e,t),this.scissorTest=!1,this.viewport=new Cr(0,0,e,t),this.textures=[];let r=new Sr({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Xe,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new vr(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Tr=class extends wr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Er=class extends Sr{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=qe,this.minFilter=qe,this.wrapR=Ge,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Dr=class extends Sr{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=qe,this.minFilter=qe,this.wrapR=Ge,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},U=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Or.setFromMatrixColumn(e,0).length(),i=1/Or.setFromMatrixColumn(e,1).length(),a=1/Or.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ar,e,jr)}lookAt(e,t,n){let r=this.elements;return Pr.subVectors(e,t),Pr.lengthSq()===0&&(Pr.z=1),Pr.normalize(),Mr.crossVectors(n,Pr),Mr.lengthSq()===0&&(Math.abs(n.z)===1?Pr.x+=1e-4:Pr.z+=1e-4,Pr.normalize(),Mr.crossVectors(n,Pr)),Mr.normalize(),Nr.crossVectors(Pr,Mr),r[0]=Mr.x,r[4]=Nr.x,r[8]=Pr.x,r[1]=Mr.y,r[5]=Nr.y,r[9]=Pr.y,r[2]=Mr.z,r[6]=Nr.z,r[10]=Pr.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],ee=r[2],k=r[6],te=r[10],ne=r[14],A=r[3],re=r[7],ie=r[11],ae=r[15];return i[0]=a*x+o*T+s*ee+c*A,i[4]=a*S+o*E+s*k+c*re,i[8]=a*C+o*D+s*te+c*ie,i[12]=a*w+o*O+s*ne+c*ae,i[1]=l*x+u*T+d*ee+f*A,i[5]=l*S+u*E+d*k+f*re,i[9]=l*C+u*D+d*te+f*ie,i[13]=l*w+u*O+d*ne+f*ae,i[2]=p*x+m*T+h*ee+g*A,i[6]=p*S+m*E+h*k+g*re,i[10]=p*C+m*D+h*te+g*ie,i[14]=p*w+m*O+h*ne+g*ae,i[3]=_*x+v*T+y*ee+b*A,i[7]=_*S+v*E+y*k+b*re,i[11]=_*C+v*D+y*te+b*ie,i[15]=_*w+v*O+y*ne+b*ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,ee=_*O-v*D+y*E+b*T-x*w+S*C;if(ee===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/ee;return e[0]=(o*O-s*D+c*E)*k,e[1]=(r*D-n*O-i*E)*k,e[2]=(m*S-h*x+g*b)*k,e[3]=(d*x-u*S-f*b)*k,e[4]=(s*T-a*O-c*w)*k,e[5]=(t*O-r*T+i*w)*k,e[6]=(h*y-p*S-g*v)*k,e[7]=(l*S-d*y+f*v)*k,e[8]=(a*D-o*T+c*C)*k,e[9]=(n*T-t*D-i*C)*k,e[10]=(p*x-m*y+g*_)*k,e[11]=(u*y-l*x-f*_)*k,e[12]=(o*w-a*E-s*C)*k,e[13]=(t*E-n*w+r*C)*k,e[14]=(m*v-p*b-h*_)*k,e[15]=(l*b-u*v+d*_)*k,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Or.set(r[0],r[1],r[2]).length(),o=Or.set(r[4],r[5],r[6]).length(),s=Or.set(r[8],r[9],r[10]).length();i<0&&(a=-a),kr.copy(this);let c=1/a,l=1/o,u=1/s;return kr.elements[0]*=c,kr.elements[1]*=c,kr.elements[2]*=c,kr.elements[4]*=l,kr.elements[5]*=l,kr.elements[6]*=l,kr.elements[8]*=u,kr.elements[9]*=u,kr.elements[10]*=u,t.setFromRotationMatrix(kr),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=xn,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=xn,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Or=new V,kr=new U,Ar=new V(0,0,0),jr=new V(1,1,1),Mr=new V,Nr=new V,Pr=new V,Fr=new U,Ir=new ar,Lr=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(z(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-z(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(z(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-z(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(z(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-z(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:L(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Fr.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fr,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ir.setFromEuler(this),this.setFromQuaternion(Ir,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Lr.DEFAULT_ORDER=`XYZ`;var Rr=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},zr=0,Br=new V,Vr=new ar,Hr=new U,Ur=new V,Wr=new V,Gr=new V,Kr=new ar,qr=new V(1,0,0),Jr=new V(0,1,0),Yr=new V(0,0,1),Xr={type:`added`},Zr={type:`removed`},Qr={type:`childadded`,child:null},$r={type:`childremoved`,child:null},ei=class e extends Mn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zr++}),this.uuid=Ln(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new V,n=new Lr,r=new ar,i=new V(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new U},normalMatrix:{value:new H}}),this.matrix=new U,this.matrixWorld=new U,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vr.setFromAxisAngle(e,t),this.quaternion.multiply(Vr),this}rotateOnWorldAxis(e,t){return Vr.setFromAxisAngle(e,t),this.quaternion.premultiply(Vr),this}rotateX(e){return this.rotateOnAxis(qr,e)}rotateY(e){return this.rotateOnAxis(Jr,e)}rotateZ(e){return this.rotateOnAxis(Yr,e)}translateOnAxis(e,t){return Br.copy(e).applyQuaternion(this.quaternion),this.position.add(Br.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qr,e)}translateY(e){return this.translateOnAxis(Jr,e)}translateZ(e){return this.translateOnAxis(Yr,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ur.copy(e):Ur.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hr.lookAt(Wr,Ur,this.up):Hr.lookAt(Ur,Wr,this.up),this.quaternion.setFromRotationMatrix(Hr),r&&(Hr.extractRotation(r.matrixWorld),Vr.setFromRotationMatrix(Hr),this.quaternion.premultiply(Vr.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(R(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xr),Qr.child=e,this.dispatchEvent(Qr),Qr.child=null):R(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zr),$r.child=e,this.dispatchEvent($r),$r.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xr),Qr.child=e,this.dispatchEvent(Qr),Qr.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,e,Gr),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,Kr,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};ei.DEFAULT_UP=new V(0,1,0),ei.DEFAULT_MATRIX_AUTO_UPDATE=!0,ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ti=class extends ei{constructor(){super(),this.isGroup=!0,this.type=`Group`}},ni={type:`move`},ri=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ti,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ti,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ti,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ni)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ti;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ii={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},oi={h:0,s:0,l:0};function si(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var W=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,fr.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=fr.workingColorSpace){return this.r=e,this.g=t,this.b=n,fr.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=fr.workingColorSpace){if(e=Rn(e,1),t=z(t,0,1),n=z(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=si(i,r,e+1/3),this.g=si(i,r,e),this.b=si(i,r,e-1/3)}return fr.colorSpaceToWorking(this,r),this}setStyle(e,t=mn){function n(t){t!==void 0&&parseFloat(t)<1&&L(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:L(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);L(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mn){let n=ii[e.toLowerCase()];return n===void 0?L(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}copyLinearToSRGB(e){return this.r=mr(e.r),this.g=mr(e.g),this.b=mr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mn){return fr.workingToColorSpace(ci.copy(this),e),Math.round(z(ci.r*255,0,255))*65536+Math.round(z(ci.g*255,0,255))*256+Math.round(z(ci.b*255,0,255))}getHexString(e=mn){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=fr.workingColorSpace){fr.workingToColorSpace(ci.copy(this),t);let n=ci.r,r=ci.g,i=ci.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=fr.workingColorSpace){return fr.workingToColorSpace(ci.copy(this),t),e.r=ci.r,e.g=ci.g,e.b=ci.b,e}getStyle(e=mn){fr.workingToColorSpace(ci.copy(this),e);let t=ci.r,n=ci.g,r=ci.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(ai),this.setHSL(ai.h+e,ai.s+t,ai.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ai),e.getHSL(oi);let n=Vn(ai.h,oi.h,t),r=Vn(ai.s,oi.s,t),i=Vn(ai.l,oi.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ci=new W;W.NAMES=ii;var li=class extends ei{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Lr,this.environmentIntensity=1,this.environmentRotation=new Lr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ui=new V,di=new V,fi=new V,pi=new V,mi=new V,hi=new V,gi=new V,_i=new V,vi=new V,yi=new V,bi=new Cr,xi=new Cr,Si=new Cr,Ci=class e{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),ui.subVectors(e,t),r.cross(ui);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){ui.subVectors(r,t),di.subVectors(n,t),fi.subVectors(e,t);let a=ui.dot(ui),o=ui.dot(di),s=ui.dot(fi),c=di.dot(di),l=di.dot(fi),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,pi)!==null&&pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,pi)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,pi.x),s.addScaledVector(a,pi.y),s.addScaledVector(o,pi.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return bi.setScalar(0),xi.setScalar(0),Si.setScalar(0),bi.fromBufferAttribute(e,t),xi.fromBufferAttribute(e,n),Si.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(bi,i.x),a.addScaledVector(xi,i.y),a.addScaledVector(Si,i.z),a}static isFrontFacing(e,t,n,r){return ui.subVectors(n,t),di.subVectors(e,t),ui.cross(di).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ui.subVectors(this.c,this.b),di.subVectors(this.a,this.b),ui.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;mi.subVectors(r,n),hi.subVectors(i,n),_i.subVectors(e,n);let s=mi.dot(_i),c=hi.dot(_i);if(s<=0&&c<=0)return t.copy(n);vi.subVectors(e,r);let l=mi.dot(vi),u=hi.dot(vi);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(mi,a);yi.subVectors(e,i);let f=mi.dot(yi),p=hi.dot(yi);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(hi,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return gi.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(gi,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(mi,a).addScaledVector(hi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},wi=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Ei):Ei.fromBufferAttribute(r,t),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Di.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Di.copy(e.boundingBox)),Di.applyMatrix4(e.matrixWorld),this.union(Di)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pi),Fi.subVectors(this.max,Pi),Oi.subVectors(e.a,Pi),ki.subVectors(e.b,Pi),Ai.subVectors(e.c,Pi),ji.subVectors(ki,Oi),Mi.subVectors(Ai,ki),Ni.subVectors(Oi,Ai);let t=[0,-ji.z,ji.y,0,-Mi.z,Mi.y,0,-Ni.z,Ni.y,ji.z,0,-ji.x,Mi.z,0,-Mi.x,Ni.z,0,-Ni.x,-ji.y,ji.x,0,-Mi.y,Mi.x,0,-Ni.y,Ni.x,0];return!Ri(t,Oi,ki,Ai,Fi)||(t=[1,0,0,0,1,0,0,0,1],!Ri(t,Oi,ki,Ai,Fi))?!1:(Ii.crossVectors(ji,Mi),t=[Ii.x,Ii.y,Ii.z],Ri(t,Oi,ki,Ai,Fi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ti=[new V,new V,new V,new V,new V,new V,new V,new V],Ei=new V,Di=new wi,Oi=new V,ki=new V,Ai=new V,ji=new V,Mi=new V,Ni=new V,Pi=new V,Fi=new V,Ii=new V,Li=new V;function Ri(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Li.fromArray(e,a);let o=i.x*Math.abs(Li.x)+i.y*Math.abs(Li.y)+i.z*Math.abs(Li.z),s=t.dot(Li),c=n.dot(Li),l=r.dot(Li);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var zi=Bi();function Bi(){let e=new ArrayBuffer(4),t=new Float32Array(e),n=new Uint32Array(e),r=new Uint32Array(512),i=new Uint32Array(512);for(let e=0;e<256;++e){let t=e-127;t<-27?(r[e]=0,r[e|256]=32768,i[e]=24,i[e|256]=24):t<-14?(r[e]=1024>>-t-14,r[e|256]=1024>>-t-14|32768,i[e]=-t-1,i[e|256]=-t-1):t<=15?(r[e]=t+15<<10,r[e|256]=t+15<<10|32768,i[e]=13,i[e|256]=13):t<128?(r[e]=31744,r[e|256]=64512,i[e]=24,i[e|256]=24):(r[e]=31744,r[e|256]=64512,i[e]=13,i[e|256]=13)}let a=new Uint32Array(2048),o=new Uint32Array(64),s=new Uint32Array(64);for(let e=1;e<1024;++e){let t=e<<13,n=0;for(;!(t&8388608);)t<<=1,n-=8388608;t&=-8388609,n+=947912704,a[e]=t|n}for(let e=1024;e<2048;++e)a[e]=939524096+(e-1024<<13);for(let e=1;e<31;++e)o[e]=e<<23;o[31]=1199570944,o[32]=2147483648;for(let e=33;e<63;++e)o[e]=2147483648+(e-32<<23);o[63]=3347054592;for(let e=1;e<64;++e)e!==32&&(s[e]=1024);return{floatView:t,uint32View:n,baseTable:r,shiftTable:i,mantissaTable:a,exponentTable:o,offsetTable:s}}function Vi(e){Math.abs(e)>65504&&L(`DataUtils.toHalfFloat(): Value out of range.`),e=z(e,-65504,65504),zi.floatView[0]=e;let t=zi.uint32View[0],n=t>>23&511;return zi.baseTable[n]+((t&8388607)>>zi.shiftTable[n])}function Hi(e){let t=e>>10;return zi.uint32View[0]=zi.mantissaTable[zi.offsetTable[t]+(e&1023)]+zi.exponentTable[t],zi.floatView[0]}var Ui=class{static toHalfFloat(e){return Vi(e)}static fromHalfFloat(e){return Hi(e)}},Wi=new V,Gi=new B,Ki=0,qi=class extends Mn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ki++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=yn,this.updateRanges=[],this.gpuType=at,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Gi.fromBufferAttribute(this,t),Gi.applyMatrix3(e),this.setXY(t,Gi.x,Gi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Wi.fromBufferAttribute(this,t),Wi.applyMatrix3(e),this.setXYZ(t,Wi.x,Wi.y,Wi.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Wi.fromBufferAttribute(this,t),Wi.applyMatrix4(e),this.setXYZ(t,Wi.x,Wi.y,Wi.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wi.fromBufferAttribute(this,t),Wi.applyNormalMatrix(e),this.setXYZ(t,Wi.x,Wi.y,Wi.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wi.fromBufferAttribute(this,t),Wi.transformDirection(e),this.setXYZ(t,Wi.x,Wi.y,Wi.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=nr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rr(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=nr(t,this.array)),t}setX(e,t){return this.normalized&&(t=rr(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=nr(t,this.array)),t}setY(e,t){return this.normalized&&(t=rr(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=nr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rr(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=nr(t,this.array)),t}setW(e,t){return this.normalized&&(t=rr(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=rr(t,this.array),n=rr(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=rr(t,this.array),n=rr(n,this.array),r=rr(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=rr(t,this.array),n=rr(n,this.array),r=rr(r,this.array),i=rr(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},Ji=class extends qi{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Yi=class extends qi{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Xi=class extends qi{constructor(e,t,n){super(new Float32Array(e),t,n)}},Zi=new wi,Qi=new V,$i=new V,ea=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Zi.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qi.subVectors(e,this.center);let t=Qi.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Qi,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($i.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qi.copy(e.center).add($i)),this.expandByPoint(Qi.copy(e.center).sub($i))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ta=0,na=new U,ra=new ei,ia=new V,aa=new wi,oa=new wi,sa=new V,ca=class e extends Mn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ta++}),this.uuid=Ln(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Sn(e)?Yi:Ji)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new H().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return na.makeRotationFromQuaternion(e),this.applyMatrix4(na),this}rotateX(e){return na.makeRotationX(e),this.applyMatrix4(na),this}rotateY(e){return na.makeRotationY(e),this.applyMatrix4(na),this}rotateZ(e){return na.makeRotationZ(e),this.applyMatrix4(na),this}translate(e,t,n){return na.makeTranslation(e,t,n),this.applyMatrix4(na),this}scale(e,t,n){return na.makeScale(e,t,n),this.applyMatrix4(na),this}lookAt(e){return ra.lookAt(e),ra.updateMatrix(),this.applyMatrix4(ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ia).negate(),this.translate(ia.x,ia.y,ia.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Xi(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&L(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)R(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];aa.setFromBufferAttribute(n),this.morphTargetsRelative?(sa.addVectors(this.boundingBox.min,aa.min),this.boundingBox.expandByPoint(sa),sa.addVectors(this.boundingBox.max,aa.max),this.boundingBox.expandByPoint(sa)):(this.boundingBox.expandByPoint(aa.min),this.boundingBox.expandByPoint(aa.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&R(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ea);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)R(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new V,1/0);else if(e){let n=this.boundingSphere.center;if(aa.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];oa.setFromBufferAttribute(n),this.morphTargetsRelative?(sa.addVectors(aa.min,oa.min),aa.expandByPoint(sa),sa.addVectors(aa.max,oa.max),aa.expandByPoint(sa)):(aa.expandByPoint(oa.min),aa.expandByPoint(oa.max))}aa.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)sa.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(sa));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)sa.fromBufferAttribute(a,t),o&&(ia.fromBufferAttribute(e,t),sa.add(ia)),r=Math.max(r,n.distanceToSquared(sa))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&R(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){R(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new qi(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new V,s[e]=new V;let c=new V,l=new V,u=new V,d=new B,f=new B,p=new B,m=new V,h=new V;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new V,y=new V,b=new V,x=new V;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new qi(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new V,i=new V,a=new V,o=new V,s=new V,c=new V,l=new V,u=new V;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)sa.fromBufferAttribute(e,t),sa.normalize(),e.setXYZ(t,sa.x,sa.y,sa.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new qi(a,r,i)}if(this.index===null)return L(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},la=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=yn,this.updateRanges=[],this.version=0,this.uuid=Ln()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},ua=new V,da=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ua.fromBufferAttribute(this,t),ua.applyMatrix4(e),this.setXYZ(t,ua.x,ua.y,ua.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ua.fromBufferAttribute(this,t),ua.applyNormalMatrix(e),this.setXYZ(t,ua.x,ua.y,ua.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ua.fromBufferAttribute(this,t),ua.transformDirection(e),this.setXYZ(t,ua.x,ua.y,ua.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=nr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rr(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=rr(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=rr(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=rr(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=rr(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=nr(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=nr(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=nr(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=nr(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=rr(t,this.array),n=rr(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=rr(t,this.array),n=rr(n,this.array),r=rr(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=rr(t,this.array),n=rr(n,this.array),r=rr(r,this.array),i=rr(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){Dn(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new qi(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Dn(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},fa=new V,pa=new V,ma=new H,ha=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=fa.subVectors(n,t).cross(pa.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(fa),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ma.getNormalMatrix(e),r=this.coplanarPoint(fa).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},ga=0,_a=class extends Mn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ga++}),this.uuid=Ln(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new W(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vn,this.stencilZFail=vn,this.stencilZPass=vn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){L(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?L(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new W().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new ha().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new B().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new B().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},va=new V,ya=new V,ba=new V,xa=new V,Sa=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,va)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=va.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(va.copy(this.origin).addScaledVector(this.direction,t),va.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ya.copy(e).add(t).multiplyScalar(.5),ba.copy(t).sub(e).normalize(),xa.copy(this.origin).sub(ya);let i=e.distanceTo(t)*.5,a=-this.direction.dot(ba),o=xa.dot(this.direction),s=-xa.dot(ba),c=xa.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(ya).addScaledVector(ba,d),f}intersectSphere(e,t){if(e.radius<0)return null;va.subVectors(e.center,this.origin);let n=va.dot(this.direction),r=va.dot(va)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,va)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,ee,k,te,ne,A;if(y>=b&&y>=x?(w=s,D=u,k=p,A=g,s>=0?(S=c,C=l,T=d,E=f,O=m,ee=h,te=_,ne=v):(S=l,C=c,T=f,E=d,O=h,ee=m,te=v,ne=_)):b>=x?(w=c,D=d,k=m,A=_,c>=0?(S=l,C=s,T=f,E=u,O=h,ee=p,te=v,ne=g):(S=s,C=l,T=u,E=f,O=p,ee=h,te=g,ne=v)):(w=l,D=f,k=h,A=v,l>=0?(S=s,C=c,T=u,E=d,O=p,ee=m,te=g,ne=_):(S=c,C=s,T=d,E=u,O=m,ee=p,te=_,ne=g)),w===0)return null;let re=S/w,ie=C/w,ae=1/w,oe=T-re*D,se=E-ie*D,ce=O-re*k,le=ee-ie*k,j=te-re*A,ue=ne-ie*A,de=j*le-ue*ce,fe=oe*ue-se*j,M=ce*se-le*oe;if(r){if(de<0||fe<0||M<0)return null}else if((de<0||fe<0||M<0)&&(de>0||fe>0||M>0))return null;let pe=de+fe+M;if(pe===0)return null;let me=ae*(de*D+fe*k+M*A);return(pe>0?me<0:me>0)?null:this.at(me/pe,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ca=class extends _a{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new W(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Lr,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},wa=new U,Ta=new Sa,Ea=new ea,Da=new V,Oa=new V,ka=new V,Aa=new V,ja=new V,Ma=new V,Na=new V,Pa=new V,G=class extends ei{constructor(e=new ca,t=new Ca){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Ma.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(ja.fromBufferAttribute(s,e),a?Ma.addScaledVector(ja,r):Ma.addScaledVector(ja.sub(t),r))}t.add(Ma)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ea.copy(n.boundingSphere),Ea.applyMatrix4(i),Ta.copy(e.ray).recast(e.near),!(Ea.containsPoint(Ta.origin)===!1&&(Ta.intersectSphere(Ea,Da)===null||Ta.origin.distanceToSquared(Da)>(e.far-e.near)**2))&&(wa.copy(i).invert(),Ta.copy(e.ray).applyMatrix4(wa),(n.boundingBox===null||Ta.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Ta)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Ia(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Ia(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Ia(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Ia(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Fa(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Pa.copy(s),Pa.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Pa);return l<n.near||l>n.far?null:{distance:l,point:Pa.clone(),object:e}}function Ia(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Oa),e.getVertexPosition(c,ka),e.getVertexPosition(l,Aa);let u=Fa(e,t,n,r,Oa,ka,Aa,Na);if(u){let e=new V;Ci.getBarycoord(Na,Oa,ka,Aa,e),i&&(u.uv=Ci.getInterpolatedAttribute(i,s,c,l,e,new B)),a&&(u.uv1=Ci.getInterpolatedAttribute(a,s,c,l,e,new B)),o&&(u.normal=Ci.getInterpolatedAttribute(o,s,c,l,e,new V),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new V,materialIndex:0};Ci.getNormal(Oa,ka,Aa,t.normal),u.face=t,u.barycoord=e}return u}var La=new Cr,Ra=new Cr,za=new Cr,Ba=new Cr,Va=new U,Ha=new V,Ua=new ea,Wa=new U,Ga=new Sa,Ka=class extends G{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type=`SkinnedMesh`,this.bindMode=Ue,this.bindMatrix=new U,this.bindMatrixInverse=new U,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new wi),this.boundingBox.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,Ha),this.boundingBox.expandByPoint(Ha)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ea),this.boundingSphere.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,Ha),this.boundingSphere.expandByPoint(Ha)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ua.copy(this.boundingSphere),Ua.applyMatrix4(r),e.ray.intersectsSphere(Ua)!==!1&&(Wa.copy(r).invert(),Ga.copy(e.ray).applyMatrix4(Wa),(this.boundingBox===null||Ga.intersectsBox(this.boundingBox)!==!1)&&this._computeIntersections(e,t,Ga)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Cr,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r===1/0?e.set(1,0,0,0):e.multiplyScalar(r),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===`attached`?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===`detached`?this.bindMatrixInverse.copy(this.bindMatrix).invert():L(`SkinnedMesh: Unrecognized bindMode: `+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;Ra.fromBufferAttribute(r.attributes.skinIndex,e),za.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(La.copy(t),t.set(0,0,0,0)):(La.set(...t,1),t.set(0,0,0)),La.applyMatrix4(this.bindMatrix);for(let e=0;e<4;e++){let r=za.getComponent(e);if(r!==0){let i=Ra.getComponent(e);Va.multiplyMatrices(n.bones[i].matrixWorld,n.boneInverses[i]),t.addScaledVector(Ba.copy(La).applyMatrix4(Va),r)}}return t.isVector4&&(t.w=La.w),t.applyMatrix4(this.bindMatrixInverse)}},qa=class extends ei{constructor(){super(),this.isBone=!0,this.type=`Bone`}},Ja=class extends Sr{constructor(e=null,t=1,n=1,r,i,a,o,s,c=qe,l=qe,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ya=new U,Xa=new U,Za=class e{constructor(e=[],t=[]){this.uuid=Ln(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){L(`Skeleton: Number of inverse bone matrices does not match amount of bones.`),this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++)this.boneInverses.push(new U)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let t=new U;this.bones[e]&&t.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(t)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&t.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&(t.parent&&t.parent.isBone?(t.matrix.copy(t.parent.matrixWorld).invert(),t.matrix.multiply(t.matrixWorld)):t.matrix.copy(t.matrixWorld),t.matrix.decompose(t.position,t.quaternion,t.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let r=0,i=e.length;r<i;r++){let i=e[r]?e[r].matrixWorld:Xa;Ya.multiplyMatrices(i,t[r]),Ya.toArray(n,r*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new e(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ja(t,e,e,mt,at);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let r=e.bones[n],i=t[r];i===void 0&&(L(`Skeleton: No bone found with UUID:`,r),i=new qa),this.bones.push(i),this.boneInverses.push(new U().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:`Skeleton`,generator:`Skeleton.toJSON`},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,i=t.length;r<i;r++){let i=t[r];e.bones.push(i.uuid);let a=n[r];e.boneInverses.push(a.toArray())}return e}},Qa=class extends qi{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},$a=new U,eo=new U,to=[],no=new wi,ro=new U,io=new G,ao=new ea,oo=class extends G{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Qa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,ro)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new wi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,$a),no.copy(e.boundingBox).applyMatrix4($a),this.boundingBox.union(no)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ea),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,$a),ao.copy(e.boundingSphere).applyMatrix4($a),this.boundingSphere.union(ao)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(io.geometry=this.geometry,io.material=this.material,io.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ao.copy(this.boundingSphere),ao.applyMatrix4(n),e.ray.intersectsSphere(ao)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,$a),eo.multiplyMatrices(n,$a),io.matrixWorld=eo,io.raycast(e,to);for(let e=0,n=to.length;e<n;e++){let n=to[e];n.instanceId=i,n.object=this,t.push(n)}to.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Qa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ja(new Float32Array(r*this.count),r,this.count,_t,at));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},so=new ea,co=new B(.5,.5),lo=new V,uo=class{constructor(e=new ha,t=new ha,n=new ha,r=new ha,i=new ha,a=new ha){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=xn,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),so.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),so.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(so)}intersectsSprite(e){return so.center.set(0,0,0),so.radius=.7071067811865476+co.distanceTo(e.center),so.applyMatrix4(e.matrixWorld),this.intersectsSphere(so)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(lo.x=r.normal.x>0?e.max.x:e.min.x,lo.y=r.normal.y>0?e.max.y:e.min.y,lo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(lo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},fo=class extends _a{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new W(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},po=new V,mo=new V,ho=new U,go=new Sa,_o=new ea,vo=new V,yo=new V,bo=class extends ei{constructor(e=new ca,t=new fo){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)po.fromBufferAttribute(t,e-1),mo.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=po.distanceTo(mo);e.setAttribute(`lineDistance`,new Xi(n,1))}else L(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_o.copy(n.boundingSphere),_o.applyMatrix4(r),_o.radius+=i,e.ray.intersectsSphere(_o)===!1)return;ho.copy(r).invert(),go.copy(e.ray).applyMatrix4(ho);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=xo(this,e,go,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=xo(this,e,go,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=xo(this,e,go,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=xo(this,e,go,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function xo(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(po.fromBufferAttribute(s,i),mo.fromBufferAttribute(s,a),n.distanceSqToSegment(po,mo,vo,yo)>r)return;vo.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(vo);if(!(c<t.near||c>t.far))return{distance:c,point:yo.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var So=new V,Co=new V,wo=class extends bo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)So.fromBufferAttribute(t,e),Co.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+So.distanceTo(Co);e.setAttribute(`lineDistance`,new Xi(n,1))}else L(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},To=class extends bo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type=`LineLoop`}},Eo=class extends _a{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new W(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Do=new U,Oo=new Sa,ko=new ea,Ao=new V,jo=class extends ei{constructor(e=new ca,t=new Eo){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ko.copy(n.boundingSphere),ko.applyMatrix4(r),ko.radius+=i,e.ray.intersectsSphere(ko)===!1)return;Do.copy(r).invert(),Oo.copy(e.ray).applyMatrix4(Do);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Ao.fromBufferAttribute(l,n),Mo(Ao,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Ao.fromBufferAttribute(l,a),Mo(Ao,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Mo(e,t,n,r,i,a,o){let s=Oo.distanceSqToPoint(e);if(s<n){let n=new V;Oo.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var No=class extends Sr{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Po=class extends Sr{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Fo=class extends Sr{constructor(e,t,n=it,r,i,a,o=qe,s=qe,c,l=ht,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Io=class extends Fo{constructor(e,t=it,n=301,r,i,a=qe,o=qe,s,c=ht){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Lo=class extends Sr{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ro=class e extends ca{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Xi(c,3)),this.setAttribute(`normal`,new Xi(l,3)),this.setAttribute(`uv`,new Xi(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new V;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},zo=class e extends ca{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new V,l=new B;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new Xi(a,3)),this.setAttribute(`normal`,new Xi(o,3)),this.setAttribute(`uv`,new Xi(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Bo=class e extends ca{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Xi(u,3)),this.setAttribute(`normal`,new Xi(d,3)),this.setAttribute(`uv`,new Xi(f,2));function _(){let a=new V,_=new V,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new B,m=new V,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Vo=class e extends ca{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new Xi(i,3)),this.setAttribute(`normal`,new Xi(i.slice(),3)),this.setAttribute(`uv`,new Xi(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new V,r=new V,i=new V;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new V;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new V;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new V,t=new V,n=new V,r=new V,o=new B,s=new B,c=new B;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Ho=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){L(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new B:new V);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new V,r=[],i=[],a=[],o=new V,s=new U;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new V)}i[0]=new V,a[0]=new V;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(z(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(z(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Uo=class extends Ho{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new B){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Wo=class extends Uo{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function Go(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Ko=new V,qo=new V,Jo=new Go,Yo=new Go,Xo=new Go,Zo=class extends Ho{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new V){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(qo.subVectors(r[0],r[1]).add(r[0]),c=qo);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Ko.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Ko),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Jo.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Yo.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Xo.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Jo.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Yo.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Xo.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Jo.calc(s),Yo.calc(s),Xo.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new V().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Qo(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function $o(e,t){let n=1-e;return n*n*t}function es(e,t){return 2*(1-e)*e*t}function ts(e,t){return e*e*t}function ns(e,t,n,r){return $o(e,t)+es(e,n)+ts(e,r)}function rs(e,t){let n=1-e;return n*n*n*t}function is(e,t){let n=1-e;return 3*n*n*e*t}function as(e,t){return 3*(1-e)*e*e*t}function os(e,t){return e*e*e*t}function ss(e,t,n,r,i){return rs(e,t)+is(e,n)+as(e,r)+os(e,i)}var cs=class extends Ho{constructor(e=new B,t=new B,n=new B,r=new B){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new B){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(ss(e,r.x,i.x,a.x,o.x),ss(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ls=class extends Ho{constructor(e=new V,t=new V,n=new V,r=new V){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new V){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(ss(e,r.x,i.x,a.x,o.x),ss(e,r.y,i.y,a.y,o.y),ss(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},us=class extends Ho{constructor(e=new B,t=new B){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new B){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ds=class extends Ho{constructor(e=new V,t=new V){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new V){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fs=class extends Ho{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(ns(e,r.x,i.x,a.x),ns(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ps=class extends Ho{constructor(e=new V,t=new V,n=new V){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new V){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(ns(e,r.x,i.x,a.x),ns(e,r.y,i.y,a.y),ns(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ms=class extends Ho{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new B){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Qo(o,s.x,c.x,l.x,u.x),Qo(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new B().fromArray(n))}return this}},hs=Object.freeze({__proto__:null,ArcCurve:Wo,CatmullRomCurve3:Zo,CubicBezierCurve:cs,CubicBezierCurve3:ls,EllipseCurve:Uo,LineCurve:us,LineCurve3:ds,QuadraticBezierCurve:fs,QuadraticBezierCurve3:ps,SplineCurve:ms}),gs=class extends Ho{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new hs[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new hs[n.type]().fromJSON(n))}return this}},_s=class extends gs{constructor(e){super(),this.type=`Path`,this.currentPoint=new B,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new us(this.currentPoint.clone(),new B(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new fs(this.currentPoint.clone(),new B(e,t),new B(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new cs(this.currentPoint.clone(),new B(e,t),new B(n,r),new B(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new ms([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new Uo(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},vs=class extends _s{constructor(e){super(e),this.uuid=Ln(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new _s().fromJSON(n))}return this}};function ys(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=bs(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=Ds(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return Ss(a,o,n,s,c,l,0),o}function bs(e,t,n,r,i){let a;if(i===Zs(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=Js(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=Js(i/r|0,e[i],e[i+1],a);return a&&Bs(a,a.next)&&(Ys(a),a=a.next),a}function xs(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(Bs(n,n.next)||zs(n.prev,n,n.next)===0)){if(Ys(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function Ss(e,t,n,r,i,a,o){if(!e)return;!o&&a&&Ms(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?ws(e,r,i,a):Cs(e))t.push(c.i,e.i,l.i),Ys(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=Ts(xs(e),t),Ss(e,t,n,r,i,a,2)):o===2&&Es(e,t,n,r,i,a):Ss(xs(e),t,n,r,i,a,1);break}}}function Cs(e){let t=e.prev,n=e,r=e.next;if(zs(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&Ls(i,s,a,c,o,l,m.x,m.y)&&zs(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function ws(e,t,n,r){let i=e.prev,a=e,o=e.next;if(zs(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=Ps(p,m,t,n,r),v=Ps(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Ls(s,u,c,d,l,f,y.x,y.y)&&zs(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Ls(s,u,c,d,l,f,b.x,b.y)&&zs(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Ls(s,u,c,d,l,f,y.x,y.y)&&zs(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Ls(s,u,c,d,l,f,b.x,b.y)&&zs(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Ts(e,t){let n=e;do{let r=n.prev,i=n.next.next;!Bs(r,i)&&Vs(r,n,n.next,i)&&Gs(r,i)&&Gs(i,r)&&(t.push(r.i,n.i,i.i),Ys(n),Ys(n.next),n=e=i),n=n.next}while(n!==e);return xs(n)}function Es(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&Rs(o,e)){let s=qs(o,e);o=xs(o,o.next),s=xs(s,s.next),Ss(o,t,n,r,i,a,0),Ss(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function Ds(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=bs(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(Fs(o))}i.sort(Os);for(let e=0;e<i.length;e++)n=ks(i[e],n);return n}function Os(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function ks(e,t){let n=As(e,t);if(!n)return t;let r=qs(n,e);return xs(r,r.next),xs(n,n.next)}function As(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(Bs(e,n))return n;do{if(Bs(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&Is(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);Gs(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&js(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function js(e,t){return zs(e.prev,e,t.prev)<0&&zs(t.next,e,e.next)<0}function Ms(e,t,n,r){let i=e;do i.z===0&&(i.z=Ps(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,Ns(i)}function Ns(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function Ps(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Fs(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Is(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function Ls(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&Is(e,t,n,r,i,a,o,s)}function Rs(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Ws(e,t)&&(Gs(e,t)&&Gs(t,e)&&Ks(e,t)&&(zs(e.prev,e,t.prev)||zs(e,t.prev,t))||Bs(e,t)&&zs(e.prev,e,e.next)>0&&zs(t.prev,t,t.next)>0)}function zs(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Bs(e,t){return e.x===t.x&&e.y===t.y}function Vs(e,t,n,r){let i=Us(zs(e,t,n)),a=Us(zs(e,t,r)),o=Us(zs(n,r,e)),s=Us(zs(n,r,t));return!!(i!==a&&o!==s||i===0&&Hs(e,n,t)||a===0&&Hs(e,r,t)||o===0&&Hs(n,e,r)||s===0&&Hs(n,t,r))}function Hs(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Us(e){return e>0?1:e<0?-1:0}function Ws(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Vs(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Gs(e,t){return zs(e.prev,e,e.next)<0?zs(e,t,e.next)>=0&&zs(e,e.prev,t)>=0:zs(e,t,e.prev)<0||zs(e,e.next,t)<0}function Ks(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function qs(e,t){let n=Xs(e.i,e.x,e.y),r=Xs(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function Js(e,t,n,r){let i=Xs(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Ys(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Xs(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Zs(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var Qs=class{static triangulate(e,t,n=2){return ys(e,t,n)}},$s=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];ec(e),tc(n,e);let a=e.length;t.forEach(ec);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,tc(n,t[e]);let o=Qs.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function ec(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function tc(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var nc=class e extends Vo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},rc=class e extends ca{constructor(e=[new B(0,-.5),new B(.5,0),new B(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=z(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new V,d=new B,f=new V,p=new V,m=new V,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new Xi(a,3)),this.setAttribute(`uv`,new Xi(o,2)),this.setAttribute(`normal`,new Xi(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},ic=class e extends ca{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Xi(p,3)),this.setAttribute(`normal`,new Xi(m,3)),this.setAttribute(`uv`,new Xi(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},ac=class e extends ca{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new V,p=new B;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new Xi(s,3)),this.setAttribute(`normal`,new Xi(c,3)),this.setAttribute(`uv`,new Xi(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},oc=class e extends ca{constructor(e=new vs([new B(0,.5),new B(-.5,-.5),new B(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new Xi(r,3)),this.setAttribute(`normal`,new Xi(i,3)),this.setAttribute(`uv`,new Xi(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;$s.isClockWise(l)===!1&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];$s.isClockWise(t)===!0&&(u[e]=t.reverse())}let d=$s.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return sc(t,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}return new e(r,t.curveSegments)}};function sc(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}var cc=class e extends ca{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new V,d=new V,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Xi(p,3)),this.setAttribute(`normal`,new Xi(m,3)),this.setAttribute(`uv`,new Xi(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function lc(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(dc(i))i.isRenderTargetTexture?(L(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(dc(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function uc(e){let t={};for(let n=0;n<e.length;n++){let r=lc(e[n]);for(let e in r)t[e]=r[e]}return t}function dc(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function fc(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function pc(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:fr.workingColorSpace}var mc={clone:lc,merge:uc},hc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,K=class extends _a{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hc,this.fragmentShader=gc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lc(e.uniforms),this.uniformsGroups=fc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new W().setHex(r.value);break;case`v2`:this.uniforms[n].value=new B().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new V().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Cr().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new H().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new U().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},_c=class extends K{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},vc=class extends _a{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new W(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new W(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new B(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Lr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},yc=class extends vc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new B(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return z(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new W(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new W(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new W(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},bc=class extends _a{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=pn,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},xc=class extends _a{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Sc(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Cc(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}function wc(e){function t(t,n){return e[t]-e[n]}let n=e.length,r=Array(n);for(let e=0;e!==n;++e)r[e]=e;return r.sort(t),r}function Tc(e,t,n){let r=e.length,i=new e.constructor(r);for(let a=0,o=0;o!==r;++a){let r=n[a]*t;for(let n=0;n!==t;++n)i[o++]=e[r+n]}return i}function Ec(e,t,n,r){let i=1,a=e[0];for(;a!==void 0&&a[r]===void 0;)a=e[i++];if(a===void 0)return;let o=a[r];if(o!==void 0){if(Array.isArray(o))do o=a[r],o!==void 0&&(t.push(a.time),n.push(...o)),a=e[i++];while(a!==void 0);else if(o.toArray!==void 0)do o=a[r],o!==void 0&&(t.push(a.time),o.toArray(n,n.length)),a=e[i++];while(a!==void 0);else do o=a[r],o!==void 0&&(t.push(a.time),n.push(o)),a=e[i++];while(a!==void 0)}}var Dc=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Oc=class extends Dc{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ln,endingEnd:ln}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case un:i=e,o=2*t-n;break;case dn:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case un:a=e,s=2*n-t;break;case dn:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},kc=class extends Dc{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Ac=class extends Dc{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},jc=class extends Dc{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Pc(n,t,g,y,r);i[p]=Mc(x,o,_,b,m)}return i}};function Mc(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Nc(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Pc(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Mc(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Nc(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Fc=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Sc(t,this.TimeBufferType),this.values=Sc(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Sc(e.times,Array),values:Sc(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Cc(e.settings)&&(n.settings={inTangents:Sc(e.settings.inTangents,Array),outTangents:Sc(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ac(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new kc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Oc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new jc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case an:t=this.InterpolantFactoryMethodDiscrete;break;case on:t=this.InterpolantFactoryMethodLinear;break;case sn:t=this.InterpolantFactoryMethodSmooth;break;case cn:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return L(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return an;case this.InterpolantFactoryMethodLinear:return on;case this.InterpolantFactoryMethodSmooth:return sn;case this.InterpolantFactoryMethodBezier:return cn}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Cc(this.settings)&&(Ic(this.settings.inTangents,e),Ic(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(R(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(R(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){R(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){R(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Cn(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){R(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===sn,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Cc(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Ic(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Fc.prototype.ValueTypeName=``,Fc.prototype.TimeBufferType=Float32Array,Fc.prototype.ValueBufferType=Float32Array,Fc.prototype.DefaultInterpolation=on;var Lc=class extends Fc{constructor(e,t,n){super(e,t,n)}};Lc.prototype.ValueTypeName=`bool`,Lc.prototype.ValueBufferType=Array,Lc.prototype.DefaultInterpolation=an,Lc.prototype.InterpolantFactoryMethodLinear=void 0,Lc.prototype.InterpolantFactoryMethodSmooth=void 0;var Rc=class extends Fc{constructor(e,t,n,r){super(e,t,n,r)}};Rc.prototype.ValueTypeName=`color`;var zc=class extends Fc{constructor(e,t,n,r){super(e,t,n,r)}};zc.prototype.ValueTypeName=`number`;var Bc=class extends Dc{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)ar.slerpFlat(i,0,a,c-o,a,c,s);return i}},Vc=class extends Fc{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Bc(this.times,this.values,this.getValueSize(),e)}};Vc.prototype.ValueTypeName=`quaternion`,Vc.prototype.InterpolantFactoryMethodSmooth=void 0;var Hc=class extends Fc{constructor(e,t,n){super(e,t,n)}};Hc.prototype.ValueTypeName=`string`,Hc.prototype.ValueBufferType=Array,Hc.prototype.DefaultInterpolation=an,Hc.prototype.InterpolantFactoryMethodLinear=void 0,Hc.prototype.InterpolantFactoryMethodSmooth=void 0;var Uc=class extends Fc{constructor(e,t,n,r){super(e,t,n,r)}};Uc.prototype.ValueTypeName=`vector`;var Wc=class{constructor(e=``,t=-1,n=[],r=fn){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Ln(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let e=0,i=n.length;e!==i;++e)t.push(Kc(n[e]).scale(r));let i=new this(e.name,e.duration,t,e.blendMode);return i.uuid=e.uuid,i.userData=JSON.parse(e.userData||`{}`),i}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let e=0,r=n.length;e!==r;++e)t.push(Fc.toJSON(n[e]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let i=t.length,a=[];for(let e=0;e<i;e++){let o=[],s=[];o.push((e+i-1)%i,e,(e+1)%i),s.push(0,1,0);let c=wc(o);o=Tc(o,1,c),s=Tc(s,1,c),!r&&o[0]===0&&(o.push(i),s.push(s[0])),a.push(new zc(`.morphTargetInfluences[`+t[e].name+`]`,o,s).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let t=e;n=t.geometry&&t.geometry.animations||t.animations}for(let e=0;e<n.length;e++)if(n[e].name===t)return n[e];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},i=/^([\w-]*?)([\d]+)$/;for(let t=0,n=e.length;t<n;t++){let n=e[t],a=n.name.match(i);if(a&&a.length>1){let e=a[1],t=r[e];t||(r[e]=t=[]),t.push(n)}}let a=[];for(let e in r)a.push(this.CreateFromMorphTargetSequence(e,r[e],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let e=this.tracks[n];t=Math.max(t,e.times[e.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e&&=this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Gc(e){switch(e.toLowerCase()){case`scalar`:case`double`:case`float`:case`number`:case`integer`:return zc;case`vector`:case`vector2`:case`vector3`:case`vector4`:return Uc;case`color`:return Rc;case`quaternion`:return Vc;case`bool`:case`boolean`:return Lc;case`string`:return Hc}throw Error(`THREE.KeyframeTrack: Unsupported typeName: `+e)}function Kc(e){if(e.type===void 0)throw Error(`THREE.KeyframeTrack: track type undefined, can not parse`);let t=Gc(e.type);if(e.times===void 0){let t=[],n=[];Ec(e.keys,t,n,`value`),e.times=t,e.values=n}let n;return n=t.parse===void 0?new t(e.name,e.times,e.values,e.interpolation):t.parse(e),Cc(e.settings)&&(n.settings={inTangents:Sc(e.settings.inTangents,Float32Array),outTangents:Sc(e.settings.outTangents,Float32Array)}),n}var qc={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(Jc(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!Jc(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function Jc(e){try{let t=e.slice(e.indexOf(`:`)+1);return new URL(t).protocol===`blob:`}catch{return!1}}var Yc=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},Xc=class{constructor(e){this.manager=e===void 0?Yc:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Xc.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var Zc={},Qc=class extends Error{constructor(e,t){super(e),this.response=t}},$c=class extends Xc{constructor(e){super(e),this.mimeType=``,this.responseType=``,this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=qc.get(`file:${e}`);if(i!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(i),this.manager.itemEnd(e)},0);return}if(Zc[e]!==void 0){Zc[e].push({onLoad:t,onProgress:n,onError:r});return}Zc[e]=[],Zc[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?`include`:`same-origin`,signal:typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,s=this.responseType;fetch(a).then(t=>{if(t.status===200||t.status===0){if(t.status===0&&L(`FileLoader: HTTP Status 0 received.`),typeof ReadableStream>`u`||t.body===void 0||t.body.getReader===void 0)return t;let n=Zc[e],r=t.body.getReader(),i=t.headers.get(`X-File-Size`)||t.headers.get(`Content-Length`),a=i?parseInt(i):0,o=a!==0,s=0,c=new ReadableStream({start(e){t();function t(){r.read().then(({done:r,value:i})=>{if(r)e.close();else{s+=i.byteLength;let r=new ProgressEvent(`progress`,{lengthComputable:o,loaded:s,total:a});for(let e=0,t=n.length;e<t;e++){let t=n[e];t.onProgress&&t.onProgress(r)}e.enqueue(i),t()}},t=>{e.error(t)})}}});return new Response(c)}throw new Qc(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`,t)}).then(e=>{switch(s){case`arraybuffer`:return e.arrayBuffer();case`blob`:return e.blob();case`document`:return e.text().then(e=>new DOMParser().parseFromString(e,o));case`json`:return e.json();default:if(o===``)return e.text();{let t=/charset="?([^;"\s]*)"?/i.exec(o),n=t&&t[1]?t[1].toLowerCase():void 0,r=new TextDecoder(n);return e.arrayBuffer().then(e=>r.decode(e))}}}).then(t=>{qc.add(`file:${e}`,t);let n=Zc[e];delete Zc[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onLoad&&r.onLoad(t)}}).catch(t=>{let n=Zc[e];if(n===void 0)throw this.manager.itemError(e),t;delete Zc[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onError&&r.onError(t)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},el=new WeakMap,tl=class extends Xc{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=qc.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let e=el.get(a);e===void 0&&(e=[],el.set(a,e)),e.push({onLoad:t,onError:r})}return a}let o=wn(`img`);function s(){l(),t&&t(this);let n=el.get(this)||[];for(let e=0;e<n.length;e++){let t=n[e];t.onLoad&&t.onLoad(this)}el.delete(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),qc.remove(`image:${e}`);let n=el.get(this)||[];for(let e=0;e<n.length;e++){let r=n[e];r.onError&&r.onError(t)}el.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),qc.add(`image:${e}`,o),i.manager.itemStart(e),o.src=e,o}},nl=class extends Xc{constructor(e){super(e)}load(e,t,n,r){let i=new Sr,a=new tl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},rl=class extends ei{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new W(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},il=new U,al=new V,ol=new V,sl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new B(512,512),this.mapType=$e,this.map=null,this.mapPass=null,this.matrix=new U,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uo,this._frameExtents=new B(1,1),this._viewportCount=1,this._viewports=[new Cr(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;al.setFromMatrixPosition(e.matrixWorld),t.position.copy(al),ol.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ol),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){il.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(il,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(il)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},cl=new V,ll=new ar,ul=new V,dl=class extends ei{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new U,this.projectionMatrix=new U,this.projectionMatrixInverse=new U,this.coordinateSystem=xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(cl,ll,ul),ul.x===1&&ul.y===1&&ul.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cl,ll,ul.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(cl,ll,ul),ul.x===1&&ul.y===1&&ul.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cl,ll,ul.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},fl=new V,pl=new B,ml=new B,hl=class extends dl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=In*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Fn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return In*2*Math.atan(Math.tan(Fn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){fl.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fl.x,fl.y).multiplyScalar(-e/fl.z),fl.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fl.x,fl.y).multiplyScalar(-e/fl.z)}getViewSize(e,t){return this.getViewBounds(e,pl,ml),t.subVectors(ml,pl)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Fn*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},gl=class extends sl{constructor(){super(new hl(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=In*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,i=e.distance||t.far;(n!==t.fov||r!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},_l=class extends rl{constructor(e,t,n=0,r=Math.PI/3,i=0,a=2){super(e,t),this.isSpotLight=!0,this.type=`SpotLight`,this.position.copy(ei.DEFAULT_UP),this.updateMatrix(),this.target=new ei,this.distance=n,this.angle=r,this.penumbra=i,this.decay=a,this.map=null,this.shadow=new gl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},vl=class extends sl{constructor(){super(new hl(90,1,.5,500)),this.isPointLightShadow=!0}},yl=class extends rl{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new vl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},bl=class extends dl{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},xl=class extends sl{constructor(){super(new bl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Sl=class extends rl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(ei.DEFAULT_UP),this.updateMatrix(),this.target=new ei,this.shadow=new xl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Cl=class{static extractUrlBase(e){let t=e.lastIndexOf(`/`);return t===-1?`./`:e.slice(0,t+1)}static resolveURL(e,t){return typeof e!=`string`||e===``?``:(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,`$1`)),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},wl=class extends ca{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type=`InstancedBufferGeometry`,this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},Tl=new WeakMap,El=class extends Xc{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>`u`&&L(`ImageBitmapLoader: createImageBitmap() not supported.`),typeof fetch>`u`&&L(`ImageBitmapLoader: fetch() not supported.`),this.options={premultiplyAlpha:`none`},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=qc.get(`image-bitmap:${e}`);if(a!==void 0){if(i.manager.itemStart(e),a.then){a.then(n=>{Tl.has(a)===!0?(r&&r(Tl.get(a)),i.manager.itemError(e),i.manager.itemEnd(e)):(t&&t(n),i.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin===`anonymous`?`same-origin`:`include`,o.headers=this.requestHeader,o.signal=typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let s=fetch(e,o).then(function(e){return e.blob()}).then(function(e){return createImageBitmap(e,Object.assign({},i.options,{colorSpaceConversion:`none`}))}).then(function(n){return qc.add(`image-bitmap:${e}`,n),t&&t(n),i.manager.itemEnd(e),n}).catch(function(t){r&&r(t),Tl.set(s,t),qc.remove(`image-bitmap:${e}`),i.manager.itemError(e),i.manager.itemEnd(e)});qc.add(`image-bitmap:${e}`,s),i.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Dl=-90,Ol=1,kl=class extends ei{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new hl(Dl,Ol,e,t);r.layers=this.layers,this.add(r);let i=new hl(Dl,Ol,e,t);i.layers=this.layers,this.add(i);let a=new hl(Dl,Ol,e,t);a.layers=this.layers,this.add(a);let o=new hl(Dl,Ol,e,t);o.layers=this.layers,this.add(o);let s=new hl(Dl,Ol,e,t);s.layers=this.layers,this.add(s);let c=new hl(Dl,Ol,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Al=class extends hl{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},jl=`\\[\\]\\.:\\/`,Ml=RegExp(`[\\[\\]\\.:\\/]`,`g`),Nl=`[^\\[\\]\\.:\\/]`,Pl=`[^`+jl.replace(`\\.`,``)+`]`,Fl=`((?:WC+[\\/:])*)`.replace(`WC`,Nl),Il=`(WCOD+)?`.replace(`WCOD`,Pl),Ll=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Nl),Rl=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Nl),zl=RegExp(`^`+Fl+Il+Ll+Rl+`$`),Bl=[`material`,`materials`,`bones`,`map`],Vl=class{constructor(e,t,n){let r=n||Hl.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Hl=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Ml,``)}static parseTrackName(e){let t=zl.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Bl.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){L(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){R(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){R(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){R(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){R(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){R(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){R(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){R(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;R(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){R(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){R(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Hl.Composite=Vl,Hl.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Hl.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Hl.prototype.GetterByBindingType=[Hl.prototype._getValue_direct,Hl.prototype._getValue_array,Hl.prototype._getValue_arrayElement,Hl.prototype._getValue_toArray],Hl.prototype.SetterByBindingTypeAndVersioning=[[Hl.prototype._setValue_direct,Hl.prototype._setValue_direct_setNeedsUpdate,Hl.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Hl.prototype._setValue_array,Hl.prototype._setValue_array_setNeedsUpdate,Hl.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Hl.prototype._setValue_arrayElement,Hl.prototype._setValue_arrayElement_setNeedsUpdate,Hl.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Hl.prototype._setValue_fromArray,Hl.prototype._setValue_fromArray_setNeedsUpdate,Hl.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ul=new U,Wl=class{constructor(e,t,n=0,r=1/0){this.ray=new Sa(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Rr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):R(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return Ul.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ul),this}intersectObject(e,t=!0,n=[]){return Kl(e,this,n,t),n.sort(Gl),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)Kl(e[r],this,n,t);return n.sort(Gl),n}};function Gl(e,t){return e.distance-t.distance}function Kl(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)Kl(r[e],t,n,!0)}}(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});function ql(e,t,n,r){let i=Jl(r);switch(n){case ft:return e*t;case _t:return e*t/i.components*i.byteLength;case vt:return e*t/i.components*i.byteLength;case yt:return e*t*2/i.components*i.byteLength;case bt:return e*t*2/i.components*i.byteLength;case pt:return e*t*3/i.components*i.byteLength;case mt:return e*t*4/i.components*i.byteLength;case xt:return e*t*4/i.components*i.byteLength;case St:case Ct:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case wt:case Tt:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Dt:case kt:return Math.max(e,16)*Math.max(t,8)/4;case Et:case Ot:return Math.max(e,8)*Math.max(t,8)/2;case At:case jt:case Nt:case Pt:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Mt:case Ft:case It:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Lt:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Rt:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case zt:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Bt:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Vt:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Ht:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Ut:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Wt:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Gt:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Kt:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case qt:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Jt:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Yt:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Xt:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Zt:case Qt:case $t:return Math.ceil(e/4)*Math.ceil(t/4)*16;case en:case tn:return Math.ceil(e/4)*Math.ceil(t/4)*8;case nn:case rn:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Jl(e){switch(e){case $e:case et:return{byteLength:1,components:1};case nt:case tt:case ot:return{byteLength:2,components:1};case st:case ct:return{byteLength:2,components:4};case it:case rt:case at:return{byteLength:4,components:1};case ut:case dt:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?L(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function Yl(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Xl(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var q={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},J={common:{diffuse:{value:new W(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new H},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new H}},envmap:{envMap:{value:null},envMapRotation:{value:new H},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new H}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new H}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new H},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new H},normalScale:{value:new B(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new H},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new H}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new H}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new H}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new W(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new W(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0},uvTransform:{value:new H}},sprite:{diffuse:{value:new W(16777215)},opacity:{value:1},center:{value:new B(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new H},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0}}},Zl={basic:{uniforms:uc([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.fog]),vertexShader:q.meshbasic_vert,fragmentShader:q.meshbasic_frag},lambert:{uniforms:uc([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.fog,J.lights,{emissive:{value:new W(0)},envMapIntensity:{value:1}}]),vertexShader:q.meshlambert_vert,fragmentShader:q.meshlambert_frag},phong:{uniforms:uc([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.fog,J.lights,{emissive:{value:new W(0)},specular:{value:new W(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:q.meshphong_vert,fragmentShader:q.meshphong_frag},standard:{uniforms:uc([J.common,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.roughnessmap,J.metalnessmap,J.fog,J.lights,{emissive:{value:new W(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:q.meshphysical_vert,fragmentShader:q.meshphysical_frag},toon:{uniforms:uc([J.common,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.gradientmap,J.fog,J.lights,{emissive:{value:new W(0)}}]),vertexShader:q.meshtoon_vert,fragmentShader:q.meshtoon_frag},matcap:{uniforms:uc([J.common,J.bumpmap,J.normalmap,J.displacementmap,J.fog,{matcap:{value:null}}]),vertexShader:q.meshmatcap_vert,fragmentShader:q.meshmatcap_frag},points:{uniforms:uc([J.points,J.fog]),vertexShader:q.points_vert,fragmentShader:q.points_frag},dashed:{uniforms:uc([J.common,J.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:q.linedashed_vert,fragmentShader:q.linedashed_frag},depth:{uniforms:uc([J.common,J.displacementmap]),vertexShader:q.depth_vert,fragmentShader:q.depth_frag},normal:{uniforms:uc([J.common,J.bumpmap,J.normalmap,J.displacementmap,{opacity:{value:1}}]),vertexShader:q.meshnormal_vert,fragmentShader:q.meshnormal_frag},sprite:{uniforms:uc([J.sprite,J.fog]),vertexShader:q.sprite_vert,fragmentShader:q.sprite_frag},background:{uniforms:{uvTransform:{value:new H},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:q.background_vert,fragmentShader:q.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new H}},vertexShader:q.backgroundCube_vert,fragmentShader:q.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:q.cube_vert,fragmentShader:q.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:q.equirect_vert,fragmentShader:q.equirect_frag},distance:{uniforms:uc([J.common,J.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:q.distance_vert,fragmentShader:q.distance_frag},shadow:{uniforms:uc([J.lights,J.fog,{color:{value:new W(0)},opacity:{value:1}}]),vertexShader:q.shadow_vert,fragmentShader:q.shadow_frag}};Zl.physical={uniforms:uc([Zl.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new H},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new H},clearcoatNormalScale:{value:new B(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new H},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new H},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new H},sheen:{value:0},sheenColor:{value:new W(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new H},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new H},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new H},transmissionSamplerSize:{value:new B},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new H},attenuationDistance:{value:0},attenuationColor:{value:new W(0)},specularColor:{value:new W(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new H},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new H},anisotropyVector:{value:new B},anisotropyMap:{value:null},anisotropyMapTransform:{value:new H}}]),vertexShader:q.meshphysical_vert,fragmentShader:q.meshphysical_frag};var Ql={r:0,b:0,g:0},$l=new U,eu=new H;eu.set(-1,0,0,0,1,0,0,0,1);function tu(e,t,n,r,i,a){let o=new W(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new G(new Ro(1,1,1),new K({name:`BackgroundCubeMaterial`,uniforms:lc(Zl.backgroundCube.uniforms),vertexShader:Zl.backgroundCube.vertexShader,fragmentShader:Zl.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4($l.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(eu),l.material.toneMapped=fr.getTransfer(i.colorSpace)!==_n,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new G(new ic(2,2),new K({name:`BackgroundMaterial`,uniforms:lc(Zl.background.uniforms),vertexShader:Zl.background.vertexShader,fragmentShader:Zl.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=fr.getTransfer(i.colorSpace)!==_n,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Ql,pc(e)),n.buffers.color.setClear(Ql.r,Ql.g,Ql.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function nu(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function ru(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function iu(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(L(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&L(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function au(e){let t=this,n=null,r=0,i=!1,a=!1,o=new ha,s=new H,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var ou=4,su=6,cu=20,lu=256,uu=new bl,du=new W,fu=null,pu=0,mu=0,hu=!1,gu=new V,_u=new V,vu=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=gu}=i;fu=this._renderer.getRenderTarget(),pu=this._renderer.getActiveCubeFace(),mu=this._renderer.getActiveMipmapLevel(),hu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(fu,pu,mu),this._renderer.xr.enabled=hu,e.scissorTest=!1,xu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fu=this._renderer.getRenderTarget(),pu=this._renderer.getActiveCubeFace(),mu=this._renderer.getActiveMipmapLevel(),hu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Xe,minFilter:Xe,generateMipmaps:!1,type:ot,format:mt,colorSpace:hn,depthBuffer:!1},r=bu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bu(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=yu(r)),this._blurMaterial=Cu(r,e,t),this._ggxMaterial=Su(r,e,t)}return r}_compileMaterial(e){let t=new G(new ca,e);this._renderer.compile(t,uu)}_sceneToCubeUV(e,t,n,r,i){let a=new hl(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(du),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new G(new Ro,new Ca({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(du),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;xu(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wu());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;xu(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,uu)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-ou?n-d+ou:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,xu(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,uu),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,xu(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,uu)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];xu(t,3*l*(r>this._lodMax-ou?r-this._lodMax+ou:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,uu)}};function yu(e){let t=[],n=[],r=e,i=e-ou+1+su;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?_u.set(1,r,n):e===1?_u.set(-n,1,-r):e===2?_u.set(-n,r,1):e===3?_u.set(-1,r,-n):e===4?_u.set(-n,-1,r):_u.set(n,r,-1),_u.toArray(l,(e*6+t)*3)}}let u=new ca;u.setAttribute(`position`,new qi(c,3)),u.setAttribute(`outputDirection`,new qi(l,3)),n.push(new G(u,null)),r>ou&&r--}return{lodMeshes:n,sizeLods:t}}function bu(e,t,n){let r=new Tr(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function xu(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Su(e,t,n){return new K({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:lu,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Eu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Cu(e,t,n){return new K({name:`SphericalGaussianBlur`,defines:{SAMPLES:cu,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Eu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function wu(){return new K({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Tu(){return new K({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Eu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Du=class extends Tr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new No(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ro(5,5,5),i=new K({name:`CubemapFromEquirect`,uniforms:lc(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new G(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=Xe),new kl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Ou(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Du(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new vu(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new vu(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function ku(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&kn(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Au(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Yi:Ji)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function ju(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Mu(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:R(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Nu(e,t,n){let r=new WeakMap,i=new Cr;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Er(h,p,m,u);g.type=at,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new B(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Pu(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Fu={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Iu(e,t,n,r,i,a){let o=new Tr(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new ca;l.setAttribute(`position`,new Xi([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new Xi([0,2,0,0,2,0],2));let u=new _c({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new G(l,u),f=new bl(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new Tr(t,n,{type:ot,depthBuffer:!1,stencilBuffer:!1}),c=new Tr(t,n,{type:ot,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},fr.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=Fu[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Lu=new Sr,Ru=new Fo(1,1),zu=new Er,Bu=new Dr,Vu=new No,Hu=[],Uu=[],Wu=new Float32Array(16),Gu=new Float32Array(9),Ku=new Float32Array(4);function qu(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Hu[i];if(a===void 0&&(a=new Float32Array(i),Hu[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Ju(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Yu(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Xu(e,t){let n=Uu[t];n===void 0&&(n=new Int32Array(t),Uu[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Zu(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Qu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ju(n,t))return;e.uniform2fv(this.addr,t),Yu(n,t)}}function $u(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ju(n,t))return;e.uniform3fv(this.addr,t),Yu(n,t)}}function ed(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ju(n,t))return;e.uniform4fv(this.addr,t),Yu(n,t)}}function td(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ju(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Yu(n,t)}else{if(Ju(n,r))return;Ku.set(r),e.uniformMatrix2fv(this.addr,!1,Ku),Yu(n,r)}}function nd(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ju(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Yu(n,t)}else{if(Ju(n,r))return;Gu.set(r),e.uniformMatrix3fv(this.addr,!1,Gu),Yu(n,r)}}function rd(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ju(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Yu(n,t)}else{if(Ju(n,r))return;Wu.set(r),e.uniformMatrix4fv(this.addr,!1,Wu),Yu(n,r)}}function id(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function ad(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ju(n,t))return;e.uniform2iv(this.addr,t),Yu(n,t)}}function od(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ju(n,t))return;e.uniform3iv(this.addr,t),Yu(n,t)}}function sd(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ju(n,t))return;e.uniform4iv(this.addr,t),Yu(n,t)}}function cd(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function ld(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ju(n,t))return;e.uniform2uiv(this.addr,t),Yu(n,t)}}function ud(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ju(n,t))return;e.uniform3uiv(this.addr,t),Yu(n,t)}}function dd(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ju(n,t))return;e.uniform4uiv(this.addr,t),Yu(n,t)}}function fd(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Ru.compareFunction=n.isReversedDepthBuffer()?518:515,a=Ru):a=Lu,n.setTexture2D(t||a,i)}function pd(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Bu,i)}function md(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Vu,i)}function hd(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||zu,i)}function gd(e){switch(e){case 5126:return Zu;case 35664:return Qu;case 35665:return $u;case 35666:return ed;case 35674:return td;case 35675:return nd;case 35676:return rd;case 5124:case 35670:return id;case 35667:case 35671:return ad;case 35668:case 35672:return od;case 35669:case 35673:return sd;case 5125:return cd;case 36294:return ld;case 36295:return ud;case 36296:return dd;case 35678:case 36198:case 36298:case 36306:case 35682:return fd;case 35679:case 36299:case 36307:return pd;case 35680:case 36300:case 36308:case 36293:return md;case 36289:case 36303:case 36311:case 36292:return hd}}function _d(e,t){e.uniform1fv(this.addr,t)}function vd(e,t){let n=qu(t,this.size,2);e.uniform2fv(this.addr,n)}function yd(e,t){let n=qu(t,this.size,3);e.uniform3fv(this.addr,n)}function bd(e,t){let n=qu(t,this.size,4);e.uniform4fv(this.addr,n)}function xd(e,t){let n=qu(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Sd(e,t){let n=qu(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Cd(e,t){let n=qu(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function wd(e,t){e.uniform1iv(this.addr,t)}function Td(e,t){e.uniform2iv(this.addr,t)}function Ed(e,t){e.uniform3iv(this.addr,t)}function Dd(e,t){e.uniform4iv(this.addr,t)}function Od(e,t){e.uniform1uiv(this.addr,t)}function kd(e,t){e.uniform2uiv(this.addr,t)}function Ad(e,t){e.uniform3uiv(this.addr,t)}function jd(e,t){e.uniform4uiv(this.addr,t)}function Md(e,t,n){let r=this.cache,i=t.length,a=Xu(n,i);Ju(r,a)||(e.uniform1iv(this.addr,a),Yu(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Ru:Lu;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Nd(e,t,n){let r=this.cache,i=t.length,a=Xu(n,i);Ju(r,a)||(e.uniform1iv(this.addr,a),Yu(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Bu,a[e])}function Pd(e,t,n){let r=this.cache,i=t.length,a=Xu(n,i);Ju(r,a)||(e.uniform1iv(this.addr,a),Yu(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Vu,a[e])}function Fd(e,t,n){let r=this.cache,i=t.length,a=Xu(n,i);Ju(r,a)||(e.uniform1iv(this.addr,a),Yu(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||zu,a[e])}function Id(e){switch(e){case 5126:return _d;case 35664:return vd;case 35665:return yd;case 35666:return bd;case 35674:return xd;case 35675:return Sd;case 35676:return Cd;case 5124:case 35670:return wd;case 35667:case 35671:return Td;case 35668:case 35672:return Ed;case 35669:case 35673:return Dd;case 5125:return Od;case 36294:return kd;case 36295:return Ad;case 36296:return jd;case 35678:case 36198:case 36298:case 36306:case 35682:return Md;case 35679:case 36299:case 36307:return Nd;case 35680:case 36300:case 36308:case 36293:return Pd;case 36289:case 36303:case 36311:case 36292:return Fd}}var Ld=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=gd(t.type)}},Rd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Id(t.type)}},zd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Bd=/(\w+)(\])?(\[|\.)?/g;function Vd(e,t){e.seq.push(t),e.map[t.id]=t}function Hd(e,t,n){let r=e.name,i=r.length;for(Bd.lastIndex=0;;){let a=Bd.exec(r),o=Bd.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Vd(n,l===void 0?new Ld(s,e,t):new Rd(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new zd(s),Vd(n,e)),n=e}}}var Ud=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Hd(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Wd(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Gd=37297,Kd=0;function qd(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Jd=new H;function Yd(e){fr._getMatrix(Jd,fr.workingColorSpace,e);let t=`mat3( ${Jd.elements.map(e=>e.toFixed(4))} )`;switch(fr.getTransfer(e)){case gn:return[t,`LinearTransferOETF`];case _n:return[t,`sRGBTransferOETF`];default:return L(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Xd(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+qd(e.getShaderSource(t),r)}return i}function Zd(e,t){let n=Yd(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Qd={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function $d(e,t){let n=Qd[t];return n===void 0?(L(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var ef=new V;function tf(){return fr.getLuminanceCoefficients(ef),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${ef.x.toFixed(4)}, ${ef.y.toFixed(4)}, ${ef.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function nf(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(of).join(`
`)}function rf(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function af(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function of(e){return e!==``}function sf(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function cf(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var lf=/^[ \t]*#include +<([\w\d./]+)>/gm;function uf(e){return e.replace(lf,ff)}var df=new Map;function ff(e,t){let n=q[t];if(n===void 0){let e=df.get(t);if(e!==void 0)n=q[e],L(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return uf(n)}var pf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mf(e){return e.replace(pf,hf)}function hf(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function gf(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var _f={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function vf(e){return _f[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var yf={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function bf(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:yf[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var xf={302:`ENVMAP_MODE_REFRACTION`};function Sf(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:xf[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Cf={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function wf(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Cf[e.combine]||`ENVMAP_BLENDING_NONE`}function Tf(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Ef(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=vf(n),l=bf(n),u=Sf(n),d=wf(n),f=Tf(n),p=nf(n),m=rf(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(of).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(of).join(`
`),_.length>0&&(_+=`
`)):(g=[gf(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(of).join(`
`),_=[gf(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:q.tonemapping_pars_fragment,n.toneMapping===0?``:$d(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,q.colorspace_pars_fragment,Zd(`linearToOutputTexel`,n.outputColorSpace),tf(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(of).join(`
`)),o=uf(o),o=sf(o,n),o=cf(o,n),s=uf(s),s=sf(s,n),s=cf(s,n),o=mf(o),s=mf(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Wd(i,i.VERTEX_SHADER,y),S=Wd(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Xd(i,x,`vertex`),n=Xd(i,S,`fragment`);R(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):L(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Ud(i,h),T=af(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Gd)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Kd++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Df=0,Of=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new kf(e),t.set(e,n)),n}},kf=class{constructor(e){this.id=Df++,this.code=e,this.usedTimes=0}};function Af(e){return e===1030||e===37490||e===36285}function jf(e,t,n,r,i,a){let o=new Rr,s=new Of,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&L(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,ee,k;if(C){let e=Zl[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),ee=e.id,k=t.id}let te=e.getRenderTarget(),ne=e.state.buffers.depth.getReversed(),A=h.isInstancedMesh===!0,re=h.isBatchedMesh===!0,ie=!!i.map,ae=!!i.matcap,oe=!!x,se=!!i.aoMap,ce=!!i.lightMap,le=!!i.bumpMap&&i.wireframe===!1,j=!!i.normalMap,ue=!!i.displacementMap,de=!!i.emissiveMap,fe=!!i.metalnessMap,M=!!i.roughnessMap,pe=i.anisotropy>0,me=i.clearcoat>0,he=i.dispersion>0,ge=i.retroreflectivity>0,_e=i.iridescence>0,ve=i.sheen>0,ye=i.transmission>0,be=pe&&!!i.anisotropyMap,xe=me&&!!i.clearcoatMap,Se=me&&!!i.clearcoatNormalMap,N=me&&!!i.clearcoatRoughnessMap,Ce=_e&&!!i.iridescenceMap,P=_e&&!!i.iridescenceThicknessMap,we=ve&&!!i.sheenColorMap,Te=ve&&!!i.sheenRoughnessMap,Ee=!!i.specularMap,F=!!i.specularColorMap,De=!!i.specularIntensityMap,I=ye&&!!i.transmissionMap,Oe=ye&&!!i.thicknessMap,ke=!!i.gradientMap,Ae=!!i.alphaMap,je=i.alphaTest>0,Me=!!i.alphaHash,Ne=!!i.extensions,Pe=0;i.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Pe=e.toneMapping);let Fe={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:ee,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:re,batchingColor:re&&h._colorsTexture!==null,instancing:A,instancingColor:A&&h.instanceColor!==null,instancingMorph:A&&h.morphTexture!==null,outputColorSpace:te===null?e.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:fr.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ie,matcap:ae,envMap:oe,envMapMode:oe&&x.mapping,envMapCubeUVHeight:S,aoMap:se,lightMap:ce,bumpMap:le,normalMap:j,displacementMap:ue,emissiveMap:de,normalMapObjectSpace:j&&i.normalMapType===1,normalMapTangentSpace:j&&i.normalMapType===0,packedNormalMap:j&&i.normalMapType===0&&Af(i.normalMap.format),metalnessMap:fe,roughnessMap:M,anisotropy:pe,anisotropyMap:be,clearcoat:me,clearcoatMap:xe,clearcoatNormalMap:Se,clearcoatRoughnessMap:N,dispersion:he,retroreflection:ge,iridescence:_e,iridescenceMap:Ce,iridescenceThicknessMap:P,sheen:ve,sheenColorMap:we,sheenRoughnessMap:Te,specularMap:Ee,specularColorMap:F,specularIntensityMap:De,transmission:ye,transmissionMap:I,thicknessMap:Oe,gradientMap:ke,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ae,alphaTest:je,alphaHash:Me,combine:i.combine,mapUv:ie&&m(i.map.channel),aoMapUv:se&&m(i.aoMap.channel),lightMapUv:ce&&m(i.lightMap.channel),bumpMapUv:le&&m(i.bumpMap.channel),normalMapUv:j&&m(i.normalMap.channel),displacementMapUv:ue&&m(i.displacementMap.channel),emissiveMapUv:de&&m(i.emissiveMap.channel),metalnessMapUv:fe&&m(i.metalnessMap.channel),roughnessMapUv:M&&m(i.roughnessMap.channel),anisotropyMapUv:be&&m(i.anisotropyMap.channel),clearcoatMapUv:xe&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:Se&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:N&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:P&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:we&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Te&&m(i.sheenRoughnessMap.channel),specularMapUv:Ee&&m(i.specularMap.channel),specularColorMapUv:F&&m(i.specularColorMap.channel),specularIntensityMapUv:De&&m(i.specularIntensityMap.channel),transmissionMapUv:I&&m(i.transmissionMap.channel),thicknessMapUv:Oe&&m(i.thicknessMap.channel),alphaMapUv:Ae&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(j||pe),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(ie||Ae),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&j===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ne,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Pe,decodeVideoTexture:ie&&i.map.isVideoTexture===!0&&fr.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:de&&i.emissiveMap.isVideoTexture===!0&&fr.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Ne&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ne&&i.extensions.multiDraw===!0||re)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Fe.vertexUv1s=c.has(1),Fe.vertexUv2s=c.has(2),Fe.vertexUv3s=c.has(3),c.clear(),Fe}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Zl[t];n=mc.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Ef(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Mf(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Nf(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Pf(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Ff(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Nf),r.length>1&&r.sort(t||Pf),i.length>1&&i.sort(t||Pf)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function If(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Ff,e.set(t,[i])):n>=r.length?(i=new Ff,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Lf(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new V,color:new W};break;case`SpotLight`:n={position:new V,direction:new V,color:new W,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new V,color:new W,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new V,skyColor:new W,groundColor:new W};break;case`RectAreaLight`:n={color:new W,position:new V,halfWidth:new V,halfHeight:new V}}return e[t.id]=n,n}}}function Rf(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var zf=0;function Bf(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Vf(e){let t=new Lf,n=Rf(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new V);let i=new V,a=new U,o=new U;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Bf);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=J.LTC_FLOAT_1,r.rectAreaLTC2=J.LTC_FLOAT_2):(r.rectAreaLTC1=J.LTC_HALF_1,r.rectAreaLTC2=J.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=zf++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Hf(e){let t=new Vf(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Uf(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Hf(e),t.set(n,[a])):r>=i.length?(a=new Hf(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Wf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Kf=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],qf=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],Jf=new U,Yf=new V,Xf=new V;function Zf(e,t,n){let r=new uo,i=new B,a=new B,o=new Cr,s=new bc,c=new xc,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new K({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new B},radius:{value:4}},vertexShader:Wf,fragmentShader:Gf}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new ca;m.setAttribute(`position`,new qi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new G(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(L(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){L(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){L(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new Tr(i.x,i.y,{format:yt,type:ot,minFilter:Xe,magFilter:Xe,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Fo(i.x,i.y,at),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=ht,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=qe,d.map.depthTexture.magFilter=qe}else l.isPointLight?(d.map=new Du(i.x),d.map.depthTexture=new Io(i.x,it)):(d.map=new Tr(i.x,i.y),d.map.depthTexture=new Fo(i.x,i.y,it)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=ht,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=Xe,d.map.depthTexture.magFilter=Xe):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=qe,d.map.depthTexture.magFilter=qe);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Yf.setFromMatrixPosition(l.matrixWorld),e.position.copy(Yf),Xf.copy(e.position),Xf.add(Kf[t]),e.up.copy(qf[t]),e.lookAt(Xf),e.updateMatrixWorld(),n.makeTranslation(-Yf.x,-Yf.y,-Yf.z),Jf.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Jf,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new Tr(i.x,i.y,{format:yt,type:ot}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Qf(e,t){function n(){let t=!1,n=new Cr,r=null,i=new Cr(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?fe(e.DEPTH_TEST):M(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=jn[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?fe(e.STENCIL_TEST):M(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new W(0,0,0),T=0,E=!1,D=null,O=null,ee=null,k=null,te=null,ne=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),A=!1,re=0,ie=e.getParameter(e.VERSION);ie.indexOf(`WebGL`)===-1?ie.indexOf(`OpenGL ES`)!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),A=re>=2):(re=parseFloat(/^WebGL (\d)/.exec(ie)[1]),A=re>=1);let ae=null,oe={},se=e.getParameter(e.SCISSOR_BOX),ce=e.getParameter(e.VIEWPORT),le=new Cr().fromArray(se),j=new Cr().fromArray(ce);function ue(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let de={};de[e.TEXTURE_2D]=ue(e.TEXTURE_2D,e.TEXTURE_2D,1),de[e.TEXTURE_CUBE_MAP]=ue(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[e.TEXTURE_2D_ARRAY]=ue(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),de[e.TEXTURE_3D]=ue(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),fe(e.DEPTH_TEST),o.setFunc(3),be(!1),xe(1),fe(e.CULL_FACE),ve(0);function fe(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function M(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function pe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function me(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function he(t){return h!==t&&(e.useProgram(t),h=t,!0)}let ge={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ge[103]=e.MIN,ge[104]=e.MAX;let _e={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ve(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(M(e.BLEND),g=!1);else if(g===!1&&(fe(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:R(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:R(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:R(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:R(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(ge[n],ge[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(_e[r],_e[i],_e[o],_e[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ye(t,n){t.side===2?M(e.CULL_FACE):fe(e.CULL_FACE);let r=t.side===1;n&&(r=!r),be(r),t.blending===1&&t.transparent===!1?ve(0):ve(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),N(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?fe(e.SAMPLE_ALPHA_TO_COVERAGE):M(e.SAMPLE_ALPHA_TO_COVERAGE)}function be(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function xe(t){t===0?M(e.CULL_FACE):(fe(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function Se(t){t!==ee&&(A&&e.lineWidth(t),ee=t)}function N(t,n,r){t?(fe(e.POLYGON_OFFSET_FILL),(k!==n||te!==r)&&(k=n,te=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):M(e.POLYGON_OFFSET_FILL)}function Ce(t){t?fe(e.SCISSOR_TEST):M(e.SCISSOR_TEST)}function P(t){t===void 0&&(t=e.TEXTURE0+ne-1),ae!==t&&(e.activeTexture(t),ae=t)}function we(t,n,r){r===void 0&&(r=ae===null?e.TEXTURE0+ne-1:ae);let i=oe[r];i===void 0&&(i={type:void 0,texture:void 0},oe[r]=i),(i.type!==t||i.texture!==n)&&(ae!==r&&(e.activeTexture(r),ae=r),e.bindTexture(t,n||de[t]),i.type=t,i.texture=n)}function Te(){let t=oe[ae];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Ee(){try{e.compressedTexImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function F(){try{e.compressedTexImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function De(){try{e.texSubImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function I(){try{e.texSubImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Oe(){try{e.compressedTexSubImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function ke(){try{e.compressedTexSubImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ae(){try{e.texStorage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function je(){try{e.texStorage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Me(){try{e.texImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ne(){try{e.texImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Pe(t){return d[t]===void 0?e.getParameter(t):d[t]}function Fe(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Ie(t){le.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),le.copy(t))}function Le(t){j.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),j.copy(t))}function Re(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function ze(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Be(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},ae=null,oe={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new W(0,0,0),T=0,E=!1,D=null,O=null,ee=null,k=null,te=null,le.set(0,0,e.canvas.width,e.canvas.height),j.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:fe,disable:M,bindFramebuffer:pe,drawBuffers:me,useProgram:he,setBlending:ve,setMaterial:ye,setFlipSided:be,setCullFace:xe,setLineWidth:Se,setPolygonOffset:N,setScissorTest:Ce,activeTexture:P,bindTexture:we,unbindTexture:Te,compressedTexImage2D:Ee,compressedTexImage3D:F,texImage2D:Me,texImage3D:Ne,pixelStorei:Fe,getParameter:Pe,updateUBOMapping:Re,uniformBlockBinding:ze,texStorage2D:Ae,texStorage3D:je,texSubImage2D:De,texSubImage3D:I,compressedTexSubImage2D:Oe,compressedTexSubImage3D:ke,scissor:Ie,viewport:Le,reset:Be}}function $f(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new B,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):wn(`canvas`)}function g(e,t,n){let r=1,i=Ee(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),L(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&L(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function y(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];L(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||L(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?gn:fr.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function x(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,L(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function S(e,t){return _(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),T(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),D(t)}function T(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&E(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function E(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function D(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let O=0;function ee(){O=0}function k(){return O}function te(e){O=e}function ne(){let e=O;return e>=i.maxTextures&&L(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),O+=1,e}function A(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function re(t,i){let a=r.get(t);if(t.isVideoTexture&&we(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)L(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)L(`WebGLRenderer: Texture marked for update but image is incomplete`);else{M(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function ie(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?M(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function ae(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?M(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function oe(t,i){let a=r.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version?pe(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let se={[We]:e.REPEAT,[Ge]:e.CLAMP_TO_EDGE,[Ke]:e.MIRRORED_REPEAT},ce={[qe]:e.NEAREST,[Je]:e.NEAREST_MIPMAP_NEAREST,[Ye]:e.NEAREST_MIPMAP_LINEAR,[Xe]:e.LINEAR,[Ze]:e.LINEAR_MIPMAP_NEAREST,[Qe]:e.LINEAR_MIPMAP_LINEAR},le={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function j(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&L(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,se[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,se[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,se[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ce[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ce[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,le[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function ue(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,C));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=A(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&E(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function de(e,t,n){return Math.floor(Math.floor(e/n)/t)}function fe(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=de(n.start,r.width,4),c=de(t.start,r.width,4);n.start<=i+1&&a===c&&de(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function M(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=ue(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=fr.getPrimaries(fr.workingColorSpace),r=o.colorSpace===``?null:fr.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=g(o.image,!1,i.maxTextureSize);t=Te(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=b(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);j(c,o);let h,y=o.mipmaps,C=o.isVideoTexture!==!0,w=f.__version===void 0||l===!0,T=u.dataReady,E=S(o,t);if(o.isDepthTexture)m=x(o.format===gt,o.type),w&&(C?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(y.length>0){C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else C?(w&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&fe(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){C&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,y[0].width,y[0].height,t.depth);for(let i=0,a=y.length;i<a;i++)if(h=y[i],o.format!==1023){if(r!==null){if(C){if(T){if(o.layerUpdates.size>0){let t=ql(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else C?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],o.format===1023?C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):C?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(C){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=ql(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)C?(w&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(w){if(C)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(y.length>0){if(C&&w){let t=Ee(y[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(C){if(w){let r=Ee(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);_(o)&&v(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function pe(t,o,s){if(o.image.length!==6)return;let c=ue(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=fr.getPrimaries(fr.workingColorSpace),r=o.colorSpace===``?null:fr.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=Te(o,m[e]);let h=m[0],y=a.convert(o.format,o.colorSpace),x=a.convert(o.type),C=b(o.internalFormat,y,x,o.normalized,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=S(o,h);j(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,y,x,i.data):y===null?L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=Ee(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,x,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,y,x,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,y,x,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,x,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,y,x,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,x,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,y,x,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function me(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=b(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),P(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Ce(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function he(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=x(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;P(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ce(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ce(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=b(o.internalFormat,c,l,o.normalized,o.colorSpace);P(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ce(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ce(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ge(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,C)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),j(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else re(i.depthTexture,0);let u=l.__webglTexture,d=Ce(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)P(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)P(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function _e(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)ge(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?ge(i.__webglFramebuffer[0],t,0):ge(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),he(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),he(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ve(t,n,i){let a=r.get(t);n!==void 0&&me(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&_e(t)}function ye(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,w);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&P(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=b(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Ce(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),he(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),j(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)me(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else me(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),j(c,a),me(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),_(a)&&v(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),j(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)me(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else me(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&_e(t)}function be(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=y(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}}let xe=[],Se=[];function N(t){if(t.samples>0){if(P(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(xe.length=0,Se.length=0,xe.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(xe.push(l),Se.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Se)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,xe))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Ce(e){return Math.min(i.maxSamples,e.samples)}function P(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function we(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function Te(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(fr.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&L(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):R(`WebGLTextures: Unsupported texture color space:`,n)),t}function Ee(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=ne,this.resetTextureUnits=ee,this.getTextureUnits=k,this.setTextureUnits=te,this.setTexture2D=re,this.setTexture2DArray=ie,this.setTexture3D=ae,this.setTextureCube=oe,this.rebindTextures=ve,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=N,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=me,this.useMultisampledRTT=P,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function ep(e,t){function n(n,r=``){let i,a=fr.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var tp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,np=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,rp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Lo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new K({vertexShader:tp,fragmentShader:np,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new G(new ic(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ip=class extends Mn{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new rp,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new B,C=null,w=null,T=new hl;T.viewport=new Cr;let E=new hl;E.viewport=new Cr;let D=[T,E],O=new Al,ee=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new ri,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new ri,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new ri,b[e]=t),t.getHandSpace()};function te(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ne(){r.removeEventListener(`select`,te),r.removeEventListener(`selectstart`,te),r.removeEventListener(`selectend`,te),r.removeEventListener(`squeeze`,te),r.removeEventListener(`squeezestart`,te),r.removeEventListener(`squeezeend`,te),r.removeEventListener(`end`,ne),r.removeEventListener(`inputsourceschange`,A);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}ee=null,k=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,j.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&L(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&L(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,te),r.addEventListener(`selectstart`,te),r.addEventListener(`selectend`,te),r.addEventListener(`squeeze`,te),r.addEventListener(`squeezestart`,te),r.addEventListener(`squeezeend`,te),r.addEventListener(`end`,ne),r.addEventListener(`inputsourceschange`,A),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?gt:ht,a=_.stencil?lt:it);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Tr(d.textureWidth,d.textureHeight,{format:mt,type:$e,depthTexture:new Fo(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Tr(f.framebufferWidth,f.framebufferHeight,{format:mt,type:$e,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),j.setContext(r),j.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function A(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let re=new V,ie=new V;function ae(e,t,n){re.setFromMatrixPosition(t.matrixWorld),ie.setFromMatrixPosition(n.matrixWorld);let r=re.distanceTo(ie),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function oe(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(ee!==O.near||k!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),ee=O.near,k=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;oe(O,i);for(let e=0;e<a.length;e++)oe(a[e],i);a.length===2?ae(O,T,E):O.projectionMatrix.copy(T.projectionMatrix),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),se(e,O,i)};function se(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=In*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let ce=null;function le(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new hl,o.layers.enable(n),o.viewport=new Cr,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Lo,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ce&&ce(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let j=new Yl;j.setAnimationLoop(le),this.setAnimationLoop=function(e){ce=e},this.dispose=function(){}}},ap=new U,op=new H;op.set(-1,0,0,0,1,0,0,0,1);function sp(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,pc(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(ap.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(op),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function cp(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return R(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?L(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):L(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var lp=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),up=null;function dp(){return up===null&&(up=new Ja(lp,16,16,yt,ot),up.name=`DFG_LUT`,up.minFilter=Xe,up.magFilter=Xe,up.wrapS=Ge,up.wrapT=Ge,up.generateMipmaps=!1,up.needsUpdate=!0),up}var fp=class{constructor(e={}){let{canvas:t=Tn(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=$e}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([xt,bt,vt]),g=new Set([$e,it,nt,lt,st,ct]),_=new Uint32Array(4),v=new Int32Array(4),y=new V,b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,ee=null,k=null;this._outputColorSpace=mn;let te=0,ne=0,A=null,re=-1,ie=null,ae=new Cr,oe=new Cr,se=null,ce=new W(0),le=0,j=t.width,ue=t.height,de=1,fe=null,M=null,pe=new Cr(0,0,j,ue),me=new Cr(0,0,j,ue),he=!1,ge=new uo,_e=!1,ve=!1,ye=new U,be=new V,xe=new Cr,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},N=!1;function Ce(){return A===null?de:1}let P=n;function we(e,n){return t.getContext(e,n)}let Te,Ee,F,De,I,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue,We,Ge;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,Je,!1),t.addEventListener(`webglcontextrestored`,Ye,!1),t.addEventListener(`webglcontextcreationerror`,Xe,!1),P===null){let t=`webgl2`;if(P=we(t,e),P===null)throw we(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}Ke()}catch(e){throw t.removeEventListener(`webglcontextlost`,Je,!1),t.removeEventListener(`webglcontextrestored`,Ye,!1),t.removeEventListener(`webglcontextcreationerror`,Xe,!1),R(`WebGLRenderer: `+e.message),e}function Ke(){Te=new ku(P),Te.init(),Ue=new ep(P,Te),Ee=new iu(P,Te,e,Ue),F=new Qf(P,Te),Ee.reversedDepthBuffer&&d&&F.buffers.depth.setReversed(!0),O=P.createFramebuffer(),ee=P.createFramebuffer(),k=P.createFramebuffer(),De=new Mu(P),I=new Mf,Oe=new $f(P,Te,F,I,Ee,Ue,De),ke=new Ou(T),Ae=new Xl(P),We=new nu(P,Ae),je=new Au(P,Ae,De,We),Me=new Pu(P,je,Ae,We,De),Be=new Nu(P,Ee,Oe),Le=new au(I),Ne=new jf(T,ke,Te,Ee,We,Le),Pe=new sp(T,I),Fe=new If,Ie=new Uf(Te),ze=new tu(T,ke,F,Me,p,s),Re=new Zf(T,Me,Ee),Ge=new cp(P,De,Ee,F),Ve=new ru(P,Te,De),He=new ju(P,Te,De),De.programs=Ne.programs,T.capabilities=Ee,T.extensions=Te,T.properties=I,T.renderLists=Fe,T.shadowMap=Re,T.state=F,T.info=De}m!==1009&&(w=new Iu(m,t.width,t.height,o,r,i));let qe=new ip(T,P);this.xr=qe,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let e=Te.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Te.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(e){e!==void 0&&(de=e,this.setSize(j,ue,!1))},this.getSize=function(e){return e.set(j,ue)},this.setSize=function(e,n,r=!0){qe.isPresenting?L(`WebGLRenderer: Can't change size while VR device is presenting.`):(j=e,ue=n,t.width=Math.floor(e*de),t.height=Math.floor(n*de),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(j*de,ue*de).floor()},this.setDrawingBufferSize=function(e,n,r){j=e,ue=n,de=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)R(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){L(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(ae)},this.getViewport=function(e){return e.copy(pe)},this.setViewport=function(e,t,n,r){e.isVector4?pe.set(e.x,e.y,e.z,e.w):pe.set(e,t,n,r),F.viewport(ae.copy(pe).multiplyScalar(de).round())},this.getScissor=function(e){return e.copy(me)},this.setScissor=function(e,t,n,r){e.isVector4?me.set(e.x,e.y,e.z,e.w):me.set(e,t,n,r),F.scissor(oe.copy(me).multiplyScalar(de).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(e){F.setScissorTest(he=e)},this.setOpaqueSort=function(e){fe=e},this.setTransparentSort=function(e){M=e},this.getClearColor=function(e){return e.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(A!==null){let t=A.texture.format;e=h.has(t)}if(e){let e=A.texture.type,t=g.has(e),n=ze.getClearColor(),r=ze.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,P.clearBufferuiv(P.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,P.clearBufferiv(P.COLOR,0,v))}else r|=P.COLOR_BUFFER_BIT}t&&(r|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&P.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Je,!1),t.removeEventListener(`webglcontextrestored`,Ye,!1),t.removeEventListener(`webglcontextcreationerror`,Xe,!1),ze.dispose(),Fe.dispose(),Ie.dispose(),I.dispose(),ke.dispose(),Me.dispose(),We.dispose(),Ge.dispose(),Ne.dispose(),qe.dispose(),qe.removeEventListener(`sessionstart`,dt),qe.removeEventListener(`sessionend`,ft),pt.stop()};function Je(e){e.preventDefault(),Dn(`WebGLRenderer: Context Lost.`),E=!0}function Ye(){Dn(`WebGLRenderer: Context Restored.`),E=!1;let e=De.autoReset,t=Re.enabled,n=Re.autoUpdate,r=Re.needsUpdate,i=Re.type;Ke(),De.autoReset=e,Re.enabled=t,Re.autoUpdate=n,Re.needsUpdate=r,Re.type=i}function Xe(e){R(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Ze(e){let t=e.target;t.removeEventListener(`dispose`,Ze),et(t)}function et(e){tt(e),I.remove(e)}function tt(e){let t=I.get(e).programs;t!==void 0&&(t.forEach(function(e){Ne.releaseProgram(e)}),e.isShaderMaterial&&Ne.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Se);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Et(e,t,n,r,i);F.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=je.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;We.setup(i,r,s,n,c);let h,g=Ve;if(c!==null&&(h=Ae.get(c),g=He,g.setIndex(h)),i.isMesh)r.wireframe===!0?(F.setLineWidth(r.wireframeLinewidth*Ce()),g.setMode(P.LINES)):g.setMode(P.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),F.setLineWidth(e*Ce()),i.isLineSegments?g.setMode(P.LINES):i.isLineLoop?g.setMode(P.LINE_LOOP):g.setMode(P.LINE_STRIP)}else i.isPoints?g.setMode(P.POINTS):i.isSprite&&g.setMode(P.TRIANGLES);if(i.isBatchedMesh){if(Te.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ae.get(c).bytesPerElement:1,o=I.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(P,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function rt(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),_e===!0&&Le.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,St(e,t,r),e.side=0,e.needsUpdate=!0,St(e,t,r),e.side=2):St(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=Ie.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),ve=this.localClippingEnabled,_e=Le.init(this.clippingPlanes,ve),_e===!0&&Le.setGlobalState(this.clippingPlanes,t),D!==null&&Re.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];rt(o,n,t,e),r.add(o)}else rt(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=I.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Te.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let at=null;function ut(e){at&&at(e)}function dt(){pt.stop()}function ft(){pt.start()}let pt=new Yl;pt.setAnimationLoop(ut),typeof self<`u`&&pt.setContext(self),this.setAnimationLoop=function(e){at=e,qe.setAnimationLoop(e),e===null?pt.stop():pt.start()},qe.addEventListener(`sessionstart`,dt),qe.addEventListener(`sessionend`,ft),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){R(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=qe.enabled===!0&&qe.isPresenting===!0,r=w!==null&&(A===null||n)&&w.begin(T,A);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),qe.enabled===!0&&qe.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(qe.cameraAutoUpdate===!0&&qe.updateCamera(t),t=qe.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,A),x=Ie.get(e,C.length),x.init(t),x.state.textureUnits=Oe.getTextureUnits(),C.push(x),ye.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),ge.setFromProjectionMatrix(ye,xn,t.reversedDepth),ve=this.localClippingEnabled,_e=Le.init(this.clippingPlanes,ve),b=Fe.get(e,S.length),b.init(),S.push(b),qe.enabled===!0&&qe.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&mt(e,t,-1/0,T.sortObjects)}mt(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(fe,M),N=qe.enabled===!1||qe.isPresenting===!1||qe.hasDepthSensing()===!1,N&&ze.addToRenderList(b,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),_e===!0&&Le.beginShadows();let i=x.state.shadowsArray;if(Re.render(i,e,t),_e===!0&&Le.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];gt(n,r,e,a)}N&&ze.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];ht(b,e,n,n.viewport)}}else r.length>0&&gt(n,r,e,t),N&&ze.render(e),ht(b,e,t)}A!==null&&ne===0&&(Oe.updateMultisampleRenderTarget(A),Oe.updateRenderTargetMipmap(A)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),We.resetDefaultState(),re=-1,ie=null,C.pop(),C.length>0?(x=C[C.length-1],Oe.setTextureUnits(x.state.textureUnits),_e===!0&&Le.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function mt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)x.pushLightProbeGrid(e);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(ge)){r&&xe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ye);let i=Me.update(e),a=e.material;a.visible&&b.push(e,i,a,n,xe.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(ge))){let i=Me.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),xe.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),xe.copy(e.boundingSphere.center)),xe.applyMatrix4(e.matrixWorld).applyMatrix4(ye)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,xe.z,s,t)}}else a.visible&&b.push(e,i,a,n,xe.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)mt(i[e],t,n,r)}function ht(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),_e===!0&&Le.setGlobalState(T.clippingPlanes,n),r&&F.viewport(ae.copy(r)),i.length>0&&_t(i,t,n),a.length>0&&_t(a,t,n),o.length>0&&_t(o,t,n),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function gt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=Te.has(`EXT_color_buffer_half_float`)||Te.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new Tr(1,1,{generateMipmaps:!0,type:e?ot:$e,minFilter:Qe,samples:Math.max(4,Ee.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:fr.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||ae;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(ce),le=T.getClearAlpha(),le<1&&T.setClearColor(16777215,.5),T.clear(),N&&ze.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),_e===!0&&Le.setGlobalState(T.clippingPlanes,r),_t(e,n,r),Oe.updateMultisampleRenderTarget(a),Oe.updateRenderTargetMipmap(a),Te.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,yt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Oe.updateMultisampleRenderTarget(a),Oe.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(ce,le),d!==void 0&&(r.viewport=d),T.toneMapping=u}function _t(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&yt(o,t,n,s,l,c)}}function yt(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function St(e,t,n){t.isScene!==!0&&(t=Se);let r=I.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=Ne.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=Ne.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=ke.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,Ze),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return wt(e,s),d}else s.uniforms=Ne.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=Ne.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Le.uniform),wt(e,s),r.needsLights=Ot(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=x.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Ct(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Ud.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function wt(e,t){let n=I.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Tt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function Et(e,t,n,r,i){t.isScene!==!0&&(t=Se),Oe.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=A===null?T.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:fr.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=ke.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=I.get(r),y=x.state.lights;if(_e===!0&&(ve===!0||e!==ie)){let t=e===ie&&r.id===re;Le.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Le.numPlanes||v.numIntersection!==Le.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=x.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=St(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,S,v));let C=!1,w=!1,E=!1,O=S.getUniforms(),ee=v.uniforms;if(F.useProgram(S.program)&&(C=!0,w=!0,E=!0),r.id!==re&&(re=r.id,w=!0),v.needsLights){let e=Tt(x.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||ie!==e){F.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),O.setValue(P,`projectionMatrix`,e.projectionMatrix),O.setValue(P,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(P,be.setFromMatrixPosition(e.matrixWorld)),Ee.logarithmicDepthBuffer&&O.setValue(P,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(P,`isOrthographic`,e.isOrthographicCamera===!0),ie!==e&&(ie=e,w=!0,E=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&O.setValue(P,`sunShadowMap`,y.state.sunShadowMap,Oe),y.state.directionalShadowMap.length>0&&O.setValue(P,`directionalShadowMap`,y.state.directionalShadowMap,Oe),y.state.spotShadowMap.length>0&&O.setValue(P,`spotShadowMap`,y.state.spotShadowMap,Oe),y.state.pointShadowMap.length>0&&O.setValue(P,`pointShadowMap`,y.state.pointShadowMap,Oe)),i.isSkinnedMesh){O.setOptional(P,i,`bindMatrix`),O.setOptional(P,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(P,`boneTexture`,e.boneTexture,Oe))}i.isBatchedMesh&&(O.setOptional(P,i,`batchingTexture`),O.setValue(P,`batchingTexture`,i._matricesTexture,Oe),O.setOptional(P,i,`batchingIdTexture`),O.setValue(P,`batchingIdTexture`,i._indirectTexture,Oe),O.setOptional(P,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(P,`batchingColorTexture`,i._colorsTexture,Oe));let k=n.morphAttributes;if((k.position!==void 0||k.normal!==void 0||k.color!==void 0)&&Be.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,O.setValue(P,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(ee.envMapIntensity.value=t.environmentIntensity),ee.dfgLUT!==void 0&&(ee.dfgLUT.value=dp()),w){if(O.setValue(P,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&Dt(ee,E),a&&r.fog===!0&&Pe.refreshFogUniforms(ee,a),Pe.refreshMaterialUniforms(ee,r,de,ue,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;ee.probesSH.value=e.texture,ee.probesMin.value.copy(e.boundingBox.min),ee.probesMax.value.copy(e.boundingBox.max),ee.probesResolution.value.copy(e.resolution)}Ud.upload(P,Ct(v),ee,Oe)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Ud.upload(P,Ct(v),ee,Oe),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(P,`center`,i.center),O.setValue(P,`modelViewMatrix`,i.modelViewMatrix),O.setValue(P,`normalMatrix`,i.normalMatrix),O.setValue(P,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Ge.update(n,S),Ge.bind(n,S)}}return S}function Dt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Ot(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return te},this.getActiveMipmapLevel=function(){return ne},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(e,t,n){let r=I.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),I.get(e.texture).__webglTexture=t,I.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=I.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){A=e,te=t,ne=n;let r=null,i=!1,a=!1;if(e){let o=I.get(e);if(o.__useDefaultFramebuffer!==void 0){F.bindFramebuffer(P.FRAMEBUFFER,o.__webglFramebuffer),ae.copy(e.viewport),oe.copy(e.scissor),se=e.scissorTest,F.viewport(ae),F.scissor(oe),F.setScissorTest(se),re=-1;return}if(o.__webglFramebuffer===void 0)Oe.setupRenderTarget(e);else if(o.__hasExternalTextures)Oe.rebindTextures(e,I.get(e.texture).__webglTexture,I.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&I.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Oe.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=I.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Oe.useMultisampledRTT(e)===!1?I.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,ae.copy(e.viewport),oe.copy(e.scissor),se=e.scissorTest}else ae.copy(pe).multiplyScalar(de).floor(),oe.copy(me).multiplyScalar(de).floor(),se=he;if(n!==0&&(r=O),F.bindFramebuffer(P.FRAMEBUFFER,r)&&F.drawBuffers(e,r),F.viewport(ae),F.scissor(oe),F.setScissorTest(se),i){let r=I.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=I.get(e.textures[t]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=I.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,t.__webglTexture,n)}re=-1};function kt(e){let t=I.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Ee.textureFormatReadable(e.format),t.__typeReadable=Ee.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){F.bindFramebuffer(P.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let u=kt(o);if(u.__formatReadable===!1){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&P.readPixels(t,n,r,i,Ue.convert(c),Ue.convert(l),a)}finally{let e=A===null?null:I.get(A).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){F.bindFramebuffer(P.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let d=kt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.bufferData(P.PIXEL_PACK_BUFFER,a.byteLength,P.STREAM_READ),P.readPixels(t,n,r,i,Ue.convert(l),Ue.convert(u),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let p=A===null?null:I.get(A).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,p);let m=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await An(P,m,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,a),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(f),P.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Oe.setTexture2D(e,0),P.copyTexSubImage2D(P.TEXTURE_2D,n,0,0,o,s,i,a),F.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Ue.convert(t.format),_=Ue.convert(t.type),v;t.isData3DTexture?(Oe.setTexture3D(t,0),v=P.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Oe.setTexture2DArray(t,0),v=P.TEXTURE_2D_ARRAY):(Oe.setTexture2D(t,0),v=P.TEXTURE_2D),F.activeTexture(P.TEXTURE0),F.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,t.flipY),F.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),F.pixelStorei(P.UNPACK_ALIGNMENT,t.unpackAlignment);let y=F.getParameter(P.UNPACK_ROW_LENGTH),b=F.getParameter(P.UNPACK_IMAGE_HEIGHT),x=F.getParameter(P.UNPACK_SKIP_PIXELS),S=F.getParameter(P.UNPACK_SKIP_ROWS),C=F.getParameter(P.UNPACK_SKIP_IMAGES);F.pixelStorei(P.UNPACK_ROW_LENGTH,h.width),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,h.height),F.pixelStorei(P.UNPACK_SKIP_PIXELS,l),F.pixelStorei(P.UNPACK_SKIP_ROWS,u),F.pixelStorei(P.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=I.get(e),r=I.get(t),h=I.get(n.__renderTarget),g=I.get(r.__renderTarget);F.bindFramebuffer(P.READ_FRAMEBUFFER,h.__webglFramebuffer),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,I.get(e).__webglTexture,i,d+n),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,I.get(t).__webglTexture,a,m+n)),P.blitFramebuffer(l,u,o,s,f,p,o,s,P.DEPTH_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||I.has(e)){let n=I.get(e),r=I.get(t);F.bindFramebuffer(P.READ_FRAMEBUFFER,ee),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,k);for(let e=0;e<c;e++)w?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,n.__webglTexture,i),T?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,r.__webglTexture,a),i===0?T?P.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):P.copyTexSubImage2D(v,a,f,p,l,u,o,s):P.blitFramebuffer(l,u,o,s,f,p,o,s,P.COLOR_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?P.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h);F.pixelStorei(P.UNPACK_ROW_LENGTH,y),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,b),F.pixelStorei(P.UNPACK_SKIP_PIXELS,x),F.pixelStorei(P.UNPACK_SKIP_ROWS,S),F.pixelStorei(P.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&P.generateMipmap(v),F.unbindTexture()},this.initRenderTarget=function(e){I.get(e).__webglFramebuffer===void 0&&Oe.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Oe.setTextureCube(e,0):e.isData3DTexture?Oe.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Oe.setTexture2DArray(e,0):Oe.setTexture2D(e,0),F.unbindTexture()},this.resetState=function(){te=0,ne=0,A=null,F.reset(),We.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=fr._getDrawingBufferColorSpace(e),t.unpackColorSpace=fr._getUnpackColorSpace()}},pp=256;function mp(e,t,n){let r=e*374761393+t*668265263+n*2147483647|0;return r=Math.imul(r^r>>>13,1274126177),((r^r>>>16)>>>0)/4294967295}var hp=e=>e*e*(3-2*e);function gp(e,t,n,r){let i=Math.floor(e),a=Math.floor(t),o=hp(e-i),s=hp(t-a),c=e=>(e%n+n)%n,l=mp(c(i),c(a),r),u=mp(c(i+1),c(a),r),d=mp(c(i),c(a+1),r),f=mp(c(i+1),c(a+1),r);return l+(u-l)*o+(d-l)*s+(l-u-d+f)*o*s}function _p(e,t,n,r,i,a=!1){let o=0,s=.5,c=0,l=n;for(let n=0;n<r;n++){let r=gp(e*l,t*l,l,i+n*17);a&&(r=1-Math.abs(r*2-1)),o+=r*s,c+=s,s*=.5,l*=2}return o/c}function vp(e,t,n,r){let i=e*n,a=t*n,o=Math.floor(i),s=Math.floor(a),c=9,l=9;for(let e=-1;e<=1;e++)for(let t=-1;t<=1;t++){let u=o+t,d=s+e,f=(u%n+n)%n,p=(d%n+n)%n,m=u+mp(f,p,r),h=d+mp(f,p,r+1),g=Math.hypot(m-i,h-a);g<c?(l=c,c=g):g<l&&(l=g)}return Math.min(1,(l-c)*1.6)}var yp=null;function bp(){if(yp)return yp;let e=new Uint16Array(pp*pp*4),t=Ui.toHalfFloat;for(let n=0;n<pp;n++)for(let r=0;r<pp;r++){let i=r/pp,a=n/pp,o=(n*pp+r)*4;e[o]=t(_p(i,a,4,5,11)),e[o+1]=t(_p(i,a,16,3,23)),e[o+2]=t(_p(i,a,6,4,37,!0)),e[o+3]=t(vp(i,a,10,51))}let n=new Ja(e,pp,pp,mt,ot);return n.wrapS=n.wrapT=We,n.magFilter=Xe,n.minFilter=Qe,n.generateMipmaps=!0,n.needsUpdate=!0,yp=n,n}var Y={uTime:{value:0},uFxTime:{value:0},uBeat:{value:0},uIntensity:{value:.2},uDanger:{value:0},uFlare:{value:0},uHead:{value:new V(0,1.6,0)},uReveal:{value:1},uRevealDir:{value:new V(0,0,-1)},uNoise:{value:bp()}},xp=`
uniform float uTime;
uniform float uFxTime;
uniform float uBeat;
uniform float uIntensity;
uniform float uDanger;
uniform float uFlare;
uniform vec3 uHead;
uniform float uReveal;
uniform vec3 uRevealDir;
uniform sampler2D uNoise;

// 0..1 visibility of the world at a direction from the player, for room mode's bloom.
float revealMask(vec3 worldPos) {
  if (uReveal >= 0.999) return 1.0;
  vec3 d = worldPos - vec3(uHead.x, 0.0, uHead.z);
  float ang = acos(clamp(dot(normalize(vec3(d.x, 0.0, d.z) + 1e-5), uRevealDir), -1.0, 1.0)) / 3.14159;
  float up = clamp(worldPos.y / 40.0, 0.0, 1.0) * 0.35;
  float edge = uReveal * 1.45 - 0.2;
  return 1.0 - smoothstep(edge - 0.18, edge, ang * 0.85 + up);
}
`;function Sp(e,t={}){return{...Y,uMix:e,...t}}var Cp=`
varying vec3 vDir;
varying vec3 vWorld;
void main() {
  vDir = normalize(position);
  vec4 w = modelMatrix * vec4(position, 1.0);
  vWorld = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}
`;function wp(e,t,n={},r=``){let i=new K({vertexShader:Cp,fragmentShader:`
      ${xp}
      uniform float uMix;
      ${Op(n)}
      varying vec3 vDir;
      varying vec3 vWorld;
      // Noise for the sky. Azimuth-based coordinates jump by a whole number of tiles behind
      // the player (seamless in value); take the gradient without that jump so the mip
      // level doesn't drop to a single texel along the seam.
      vec4 skyNoise(vec2 uv) {
        vec2 dx = dFdx(uv);
        vec2 dy = dFdy(uv);
        dx.x -= floor(dx.x + 0.5);
        dy.x -= floor(dy.x + 0.5);
        return textureGrad(uNoise, uv, dx, dy);
      }
      ${r}
      void main() {
        vec3 dir = normalize(vDir);
        vec3 col = vec3(0.0);
        ${t}
        col += col * uFlare * 0.35;
        float a = uMix * revealMask(vWorld);
        gl_FragColor = vec4(col, a);
        #include <colorspace_fragment>
      }
    `,uniforms:Sp(e,n),side:1,transparent:!0,depthWrite:!1}),a=new G(new cc(90,64,32),i);return a.frustumCulled=!1,a}function Tp(e,t){let n=new Float32Array(t.count*4),r=new Float32Array(t.count*3),i=t.colors.map(e=>new W(e)),a=t.clearRadius??0;for(let e=0;e<t.count;e++){let o=0,s=0,c=0;do o=t.min[0]+Math.random()*(t.max[0]-t.min[0]),s=t.min[2]+Math.random()*(t.max[2]-t.min[2]);while(Math.hypot(o,s)<a&&++c<20);n[e*4]=o,n[e*4+1]=t.min[1]+Math.random()*(t.max[1]-t.min[1]),n[e*4+2]=s,n[e*4+3]=Math.random();let l=i[e%i.length];r.set([l.r,l.g,l.b],e*3)}let o=new ca;o.setAttribute(`position`,new qi(new Float32Array(t.count*3),3)),o.setAttribute(`aSeed`,new qi(n,4)),o.setAttribute(`aColor`,new qi(r,3));let s=new jo(o,new K({vertexShader:`
      ${xp}
      uniform float uMix;
      uniform float uPointScale;
      uniform vec3 uMin;
      uniform vec3 uSize;
      uniform vec3 uVel;
      uniform vec2 uPSize;
      uniform float uSwirl;
      uniform float uTwinkle;
      uniform float uBeatAmt;
      attribute vec4 aSeed;
      attribute vec3 aColor;
      varying vec3 vColor;
      varying float vAlpha;
      void main() {
        float r = aSeed.w;
        float t = uFxTime;
        vec3 p = aSeed.xyz + uVel * t * (0.55 + r * 0.9);
        p += vec3(sin(t * 0.31 + r * 40.0), cos(t * 0.23 + r * 17.0), sin(t * 0.27 + r * 9.0)) * uSwirl;
        p = uMin + mod(p - uMin, uSize);
        vec4 world = modelMatrix * vec4(p, 1.0);
        vec3 rel = (p - uMin) / uSize;
        float edge = min(min(rel.x, 1.0 - rel.x), min(rel.z, 1.0 - rel.z));
        float edgeFade = smoothstep(0.0, 0.08, edge) * smoothstep(0.0, 0.1, min(rel.y, 1.0 - rel.y));
        float dHead = distance(world.xyz, uHead);
        float tw = 1.0 - uTwinkle * (0.5 + 0.5 * sin(t * (1.5 + r * 3.0) + r * 60.0));
        vAlpha = uMix * edgeFade * smoothstep(0.5, 1.4, dHead) * tw * (1.0 + uBeat * uBeatAmt) * revealMask(world.xyz);
        vColor = aColor;
        vec4 mv = viewMatrix * world;
        gl_Position = projectionMatrix * mv;
        gl_PointSize = clamp(mix(uPSize.x, uPSize.y, fract(r * 7.13)) * uPointScale / max(0.1, -mv.z), 1.0, 64.0);
      }
    `,fragmentShader:`
      varying vec3 vColor;
      varying float vAlpha;
      void main() {
        float d = length(gl_PointCoord - 0.5) * 2.0;
        float a = (1.0 - smoothstep(0.0, 1.0, d)) * vAlpha;
        a *= a + 0.35;
        gl_FragColor = vec4(vColor * a, a);
        #include <colorspace_fragment>
      }
    `,uniforms:Sp(e,{uPointScale:Ep,uMin:{value:new V(...t.min)},uSize:{value:new V(t.max[0]-t.min[0],t.max[1]-t.min[1],t.max[2]-t.min[2])},uVel:{value:new V(...t.velocity)},uPSize:{value:new B(...t.size)},uSwirl:{value:t.swirl??.3},uTwinkle:{value:t.twinkle??.3},uBeatAmt:{value:t.beat??.4}}),transparent:!0,depthWrite:!1,blending:2}));return s.frustumCulled=!1,s.renderOrder=5,s}var Ep={value:800};function Dp(e,t,n,r,i={},a=``,o=``){let s=new ic(t,t,n,n);s.rotateX(-Math.PI/2);let c=new G(s,new K({vertexShader:`
      ${xp}
      uniform float uMix;
      ${Op(i)}
      varying vec3 vLocal;
      varying vec3 vWorld;
      varying vec3 vNormal2;
      ${o}
      void main() {
        vec3 p = position;
        vec3 nrm = vec3(0.0, 1.0, 0.0);
        ${a}
        vLocal = p;
        vNormal2 = nrm;
        vec4 w = modelMatrix * vec4(p, 1.0);
        vWorld = w.xyz;
        gl_Position = projectionMatrix * viewMatrix * w;
      }
    `,fragmentShader:`
      ${xp}
      uniform float uMix;
      ${Op(i)}
      varying vec3 vLocal;
      varying vec3 vWorld;
      varying vec3 vNormal2;
      ${o}
      void main() {
        vec3 wp = vLocal;
        float dist = length(wp.xz);
        vec3 col = vec3(0.0);
        float a = 1.0;
        ${r}
        col += col * uFlare * 0.3;
        gl_FragColor = vec4(col, a * uMix * revealMask(vWorld));
        #include <colorspace_fragment>
      }
    `,uniforms:Sp(e,i),transparent:!0,depthWrite:!1}));return c.frustumCulled=!1,c.renderOrder=-40,c}function Op(e){return Object.entries(e).map(([e,t])=>{let n=t.value,r=typeof n==`number`?`float`:n instanceof W||n instanceof V?`vec3`:n instanceof B?`vec2`:n instanceof Cr?`vec4`:n instanceof Sr?`sampler2D`:null;if(!r)throw Error(`Can't infer a GLSL type for uniform ${e}`);return`uniform ${r} ${e};`}).join(`
`)}var kp=`
float starHash(vec3 p) {
  p = fract(p * 0.3183099 + 0.1);
  p *= 17.0;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}
float stars(vec3 dir, float k, float density) {
  vec3 p = dir * k;
  vec3 cell = floor(p);
  vec3 f = fract(p);
  float h = starHash(cell);
  if (h > density) return 0.0;
  vec3 at = vec3(starHash(cell + 1.7), starHash(cell + 4.3), starHash(cell + 9.1)) * 0.6 + 0.2;
  float d = length(f - at);
  float twinkle = 0.65 + 0.35 * sin(uTime * (1.0 + h * 40.0) + h * 300.0);
  return smoothstep(0.24, 0.0, d) * (0.4 + 0.6 * fract(h * 91.0)) * twinkle;
}
`,Ap=`
float meteor(vec3 dir, float slot) {
  float period = 11.0 + slot * 6.0;
  float tt = uFxTime + slot * 4.7;
  float n = floor(tt / period);
  float ph = fract(tt / period);
  if (ph > 0.09) return 0.0;
  vec3 h = fract(sin(vec3(n * 12.9898 + slot * 3.1, n * 78.233 + 1.7, n * 37.719 + slot)) * 43758.5453);
  float az = h.x * 6.2831;
  float el = 0.3 + h.y * 0.45;
  vec3 s = vec3(sin(az) * cos(el), sin(el), -cos(az) * cos(el));
  vec3 v = vec3(cos(h.z * 6.2831), -0.7, sin(h.z * 6.2831));
  v = normalize(v - s * dot(v, s));
  float k = ph / 0.09;
  vec3 head = normalize(s + v * k * 0.45);
  vec3 tail = normalize(s + v * max(0.0, k * 0.45 - 0.16));
  vec3 pa = dir - tail;
  vec3 ba = head - tail;
  float along = clamp(dot(pa, ba) / max(dot(ba, ba), 1e-6), 0.0, 1.0);
  float d = length(pa - ba * along);
  return smoothstep(0.0035, 0.0, d) * along * along * sin(3.14159 * k);
}
`;function X(e){return{value:new W(e)}}function jp(e,t,n=4.4){return Dp(e,n*2.1,1,`
    float r = dist;
    float rings = smoothstep(0.43, 0.49, abs(fract(r * 1.25 - uFxTime * 0.08) - 0.5));
    float edge = smoothstep(uR, uR * 0.72, r);
    float grid = smoothstep(0.48, 0.5, max(abs(fract(wp.x * 2.0) - 0.5), abs(fract(wp.z * 2.0) - 0.5))) * 0.1;
    vec3 c = uDisc * (rings * 0.8 + grid + 0.3 * exp(-r * 1.2)) * (0.8 + uBeat * 0.35 + uIntensity * 0.2);
    col = c;
    a = edge * min(1.0, 0.05 + rings * 0.6 + grid + 0.22 * exp(-r * 1.2));
  `,{uDisc:X(t),uR:{value:n}})}var Mp=3200,Np=(e,t)=>e+Math.random()*(t-e),Pp=class{points;pos=new Float32Array(Mp*3);vel=new Float32Array(Mp*3);col=new Float32Array(Mp*3);alpha=new Float32Array(Mp);size=new Float32Array(Mp);life=new Float32Array(Mp);maxLife=new Float32Array(Mp);grav=new Float32Array(Mp);drag=new Float32Array(Mp);baseSize=new Float32Array(Mp);alive=0;geo;tmp=new V;axisA=new V;axisB=new V;constructor(){this.geo=new ca;let e=(e,t)=>new qi(e,t).setUsage(bn);this.geo.setAttribute(`position`,e(this.pos,3)),this.geo.setAttribute(`aColor`,e(this.col,3)),this.geo.setAttribute(`aAlpha`,e(this.alpha,1)),this.geo.setAttribute(`aSize`,e(this.size,1)),this.geo.setDrawRange(0,0);let t=new K({vertexShader:`
        ${xp}
        uniform float uPointScale;
        attribute vec3 aColor;
        attribute float aAlpha;
        attribute float aSize;
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          vec4 world = modelMatrix * vec4(position, 1.0);
          float dHead = distance(world.xyz, uHead);
          vAlpha = aAlpha * smoothstep(0.32, 0.85, dHead);
          vColor = aColor;
          vec4 mv = viewMatrix * world;
          gl_Position = projectionMatrix * mv;
          gl_PointSize = clamp(aSize * uPointScale / max(0.05, -mv.z), 1.0, 48.0);
        }
      `,fragmentShader:`
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          float d = length(gl_PointCoord - 0.5) * 2.0;
          float core = 1.0 - smoothstep(0.0, 0.35, d);
          float halo = 1.0 - smoothstep(0.0, 1.0, d);
          float a = (core * 0.9 + halo * halo * 0.6) * vAlpha;
          gl_FragColor = vec4(mix(vColor, vec3(1.0), core * 0.6) * a, a);
          #include <colorspace_fragment>
        }
      `,uniforms:{...Y,uPointScale:Ep},transparent:!0,depthWrite:!1,blending:2});this.points=new jo(this.geo,t),this.points.frustumCulled=!1,this.points.renderOrder=20}get count(){return this.alive}spawn(e){this.axisA.set(0,1,0),Math.abs(e.dir.y)>.9&&this.axisA.set(1,0,0),this.axisB.crossVectors(e.dir,this.axisA).normalize(),this.axisA.crossVectors(this.axisB,e.dir).normalize();for(let t=0;t<e.count;t++){this.alive>=Mp&&this.kill(0);let t=this.alive++,n=e.jitter??0;this.pos[t*3]=e.at.x+Np(-n,n),this.pos[t*3+1]=e.at.y+Np(-n,n),this.pos[t*3+2]=e.at.z+Np(-n,n);let r=Math.random()*Math.PI*2,i=Math.sqrt(Math.random())*Math.tan(e.spread);this.tmp.copy(e.dir).addScaledVector(this.axisA,Math.cos(r)*i).addScaledVector(this.axisB,Math.sin(r)*i).normalize().multiplyScalar(Np(e.speed[0],e.speed[1])),this.vel[t*3]=this.tmp.x,this.vel[t*3+1]=this.tmp.y,this.vel[t*3+2]=this.tmp.z;let a=Np(0,.35);this.col[t*3]=e.color.r+(1-e.color.r)*a,this.col[t*3+1]=e.color.g+(1-e.color.g)*a,this.col[t*3+2]=e.color.b+(1-e.color.b)*a,this.maxLife[t]=this.life[t]=Np(e.life[0],e.life[1]),this.baseSize[t]=Np(e.size[0],e.size[1]),this.grav[t]=e.gravity??0,this.drag[t]=e.drag??.6}}update(e){for(let t=0;t<this.alive;){if(this.life[t]-=e,this.life[t]<=0){this.kill(t);continue}let n=Math.exp(-this.drag[t]*e);this.vel[t*3]*=n,this.vel[t*3+1]=this.vel[t*3+1]*n-this.grav[t]*e,this.vel[t*3+2]*=n,this.pos[t*3]+=this.vel[t*3]*e,this.pos[t*3+1]+=this.vel[t*3+1]*e,this.pos[t*3+2]+=this.vel[t*3+2]*e;let r=this.life[t]/this.maxLife[t];this.alpha[t]=Math.min(1,r*2.2)*Math.min(1,(1-r)*12+.2),this.size[t]=this.baseSize[t]*(.4+r*.6),t++}this.geo.setDrawRange(0,this.alive);for(let e of[`position`,`aColor`,`aAlpha`,`aSize`]){let t=this.geo.getAttribute(e);t.clearUpdateRanges(),t.addUpdateRange(0,this.alive*t.itemSize),t.needsUpdate=!0}}clear(){this.alive=0,this.geo.setDrawRange(0,0)}kill(e){let t=--this.alive;if(e!==t){for(let[n,r]of[[this.pos,3],[this.vel,3],[this.col,3]])for(let i=0;i<r;i++)n[e*r+i]=n[t*r+i];for(let n of[this.alpha,this.size,this.life,this.maxLife,this.grav,this.drag,this.baseSize])n[e]=n[t]}}},Fp=class{group=new ti;pool=[];constructor(){let e=new zo(1,96);e.rotateX(-Math.PI/2);for(let t=0;t<4;t++){let t=new K({vertexShader:`
          varying vec3 vWorld;
          void main() {
            vec4 w = modelMatrix * vec4(position, 1.0);
            vWorld = w.xyz;
            gl_Position = projectionMatrix * viewMatrix * w;
          }
        `,fragmentShader:`
          ${xp}
          uniform vec3 uColor;
          uniform vec3 uCenter;
          uniform float uRadius;
          uniform float uA;
          varying vec3 vWorld;
          void main() {
            float d = length(vWorld.xz - uCenter.xz);
            float width = 0.04 + uRadius * 0.012;
            float band = exp(-pow((d - uRadius) / width, 2.0));
            float trail = smoothstep(uRadius - width * 8.0, uRadius, d) * step(d, uRadius) * 0.25;
            float nearYou = smoothstep(0.5, 1.6, length(vWorld.xz - uHead.xz));
            float a = uA * (band + trail) * nearYou;
            gl_FragColor = vec4(uColor * a, a);
            #include <colorspace_fragment>
          }
        `,uniforms:{...Y,uColor:{value:new W},uCenter:{value:new V},uRadius:{value:0},uA:{value:0}},transparent:!0,depthWrite:!1,blending:2,side:2}),n=new G(e,t);n.visible=!1,n.frustumCulled=!1,n.renderOrder=15,this.group.add(n),this.pool.push({mesh:n,mat:t,t:0,dur:1,max:1})}}fire(e,t,n=45,r=2.2,i=.05){let a=this.pool.find(e=>!e.mesh.visible)??this.pool[0];a.mesh.position.set(e.x,i,e.z),a.mat.uniforms.uCenter.value.set(e.x,i,e.z),a.mat.uniforms.uColor.value.copy(t),a.t=0,a.dur=r,a.max=n,a.mesh.visible=!0}update(e){for(let t of this.pool){if(!t.mesh.visible)continue;if(t.t+=e/t.dur,t.t>=1){t.mesh.visible=!1;continue}let n=.2+(1-(1-t.t)**2.2)*t.max;t.mat.uniforms.uRadius.value=n,t.mesh.scale.setScalar(n*1.15+.5),t.mat.uniforms.uA.value=(1-t.t)*(1-t.t)*.9}}},Z=(e,t)=>e+Math.random()*(t-e);function Ip(e){let t=0;do t=Z(-Math.PI,Math.PI);while(Math.abs(t)<e&&Math.random()<.85);return t}function Lp(e,t,n){return e.userData.detail={full:t,reduced:n},e}function Rp(e,t){e.traverse(e=>{let n=e.userData.detail;if(!n||!(e instanceof G))return;let r=e.geometry;r.instanceCount=t===`full`?n.full:t===`reduced`?n.reduced:Math.min(n.reduced,Math.ceil(n.full/4))})}function zp(e,t,n){let r=new wl;r.index=e.index;for(let t of Object.keys(e.attributes))r.setAttribute(t,e.attributes[t]);for(let[e,[t,i]]of Object.entries(n))r.setAttribute(e,new Qa(t,i));return r.instanceCount=t,r}function Bp(e,t,n,r={},i=0){return new K({vertexShader:`${xp}\nuniform float uMix;\n${Op(r)}\n${t}`,fragmentShader:`${xp}\nuniform float uMix;\n${Op(r)}\n${n}`,uniforms:Sp(e,r),transparent:!0,depthWrite:!1,blending:2,side:i})}function Vp(e,t,n,r){let i=new cc(1,32,20).scale(.62,1,.62),a=new Float32Array(t*4),o=new Float32Array(t*4);for(let e=0;e<t;e++){let t=Ip(.45),i=Z(n[0],n[1]);a.set([Math.sin(t)*i,Z(r[0],r[1]),-Math.cos(t)*i,Z(0,100)],e*4),o.set([Z(.08,.22),Z(.5,1.2),Z(-.6,.6),Z(-.6,.6)],e*4)}let s=new G(zp(i,t,{aInst:[a,4],aParams:[o,4]}),Bp(e,`
    attribute vec4 aInst;
    attribute vec4 aParams;
    varying vec3 vLocal;
    varying float vFres;
    varying float vAlpha;
    varying float vSeed;
    void main() {
      float t = uFxTime * aParams.y + aInst.w;
      vec3 p = position;
      // A slow tumble as it drifts.
      float ax = aParams.z + sin(t * 0.3) * 0.4;
      float az = aParams.w + cos(t * 0.25) * 0.4;
      p.yz = mat2(cos(ax), -sin(ax), sin(ax), cos(ax)) * p.yz;
      p.xy = mat2(cos(az), -sin(az), sin(az), cos(az)) * p.xy;
      vec3 at = aInst.xyz + vec3(sin(t * 0.13) * 1.2, sin(t * 0.17) * 0.6, cos(t * 0.11) * 1.2);
      vec4 world = modelMatrix * vec4(at + p * aParams.x, 1.0);
      vec3 n = normalize(mat3(modelMatrix) * normal);
      vFres = pow(1.0 - abs(dot(n, normalize(uHead - world.xyz))), 2.0);
      float d = distance(world.xyz, uHead);
      vAlpha = uMix * smoothstep(0.6, 1.4, d) * exp(-d * 0.04) * revealMask(world.xyz);
      vLocal = position;
      vSeed = aInst.w + t;
      gl_Position = projectionMatrix * viewMatrix * world;
    }
  `,`
    varying vec3 vLocal;
    varying float vFres;
    varying float vAlpha;
    varying float vSeed;
    vec3 rainbow(float h) {
      return 0.5 + 0.5 * cos(6.2831 * (h + vec3(0.0, 0.33, 0.67)));
    }
    void main() {
      float ang = atan(vLocal.z, vLocal.x);
      float row = smoothstep(0.82, 1.0, cos(ang * 8.0));
      // Light runs along each comb row as the cilia beat.
      float run = fract(vLocal.y * 1.6 - vSeed * 1.3 + ang * 0.2);
      float flicker = 0.4 + 0.6 * smoothstep(0.0, 0.25, run) * (1.0 - smoothstep(0.25, 0.7, run));
      vec3 c = rainbow(vLocal.y * 0.8 + vSeed * 0.4 + ang * 0.1) * row * flicker * 1.6;
      c += vec3(0.5, 0.8, 1.0) * (vFres * 0.25 + 0.03);
      float a = (row * flicker * 0.9 + vFres * 0.25 + 0.03) * vAlpha;
      gl_FragColor = vec4(c * vAlpha, a);
      #include <colorspace_fragment>
    }
  `));return s.frustumCulled=!1,s.renderOrder=5,Lp(s,t,Math.ceil(t/2))}function Hp(e,t,n=120){let r=new cc(1,8,6),i=t*n,a=new Float32Array(i*4);for(let e=0;e<t;e++){let t=Ip(.5),r=Z(9,22),i=Math.sin(t)*r,o=-Math.cos(t)*r,s=Z(-2,9),c=Z(0,Math.PI*2);for(let t=0;t<n;t++)a.set([i,s,o,c+e*100],(e*n+t)*4)}let o=new Float32Array(i);for(let e=0;e<t;e++)for(let t=0;t<n;t++)o[e*n+t]=t/n;let s=new G(zp(r,i,{aNode:[a,4],aIdx:[o,1]}),Bp(e,`
    attribute vec4 aNode;
    attribute float aIdx;
    varying float vIdx;
    varying float vAlpha;
    varying float vFres;
    varying float vBell;
    void main() {
      float heading = aNode.w;
      float t = uFxTime;
      float s = aIdx * 14.0;                      // metres along the chain
      vec3 dir = vec3(cos(heading), 0.15 * sin(heading * 3.0), sin(heading));
      vec3 side = normalize(cross(dir, vec3(0.0, 1.0, 0.0)));
      vec3 head = aNode.xyz + dir * sin(t * 0.03 + heading) * 3.0;
      vec3 p = head - dir * s
        + side * sin(s * 0.45 - t * 0.6 + heading) * 0.7
        + vec3(0.0, 1.0, 0.0) * sin(s * 0.3 - t * 0.4 + heading * 2.0) * 0.5;
      // Swimming bells at the front, then a long trail of small lights.
      float bell = step(aIdx, 0.06);
      float size = mix(0.012 + 0.018 * step(0.75, fract(aIdx * 23.0)), 0.06, bell);
      vec4 world = modelMatrix * vec4(p + position * size, 1.0);
      vec3 n = normalize(mat3(modelMatrix) * normal);
      vFres = pow(1.0 - abs(dot(n, normalize(uHead - world.xyz))), 1.5);
      float d = distance(world.xyz, uHead);
      vAlpha = uMix * exp(-d * 0.035) * smoothstep(1.0, 0.85, aIdx) * revealMask(world.xyz);
      vIdx = aIdx;
      vBell = bell;
      gl_Position = projectionMatrix * viewMatrix * world;
    }
  `,`
    varying float vIdx;
    varying float vAlpha;
    varying float vFres;
    varying float vBell;
    void main() {
      // A pulse of light travels down the chain now and then.
      float pulse = smoothstep(0.08, 0.0, abs(fract(uFxTime * 0.12) - vIdx));
      vec3 c = mix(uA, uB, vIdx) * (0.7 + pulse * 2.0 + uBeat * 0.3);
      c = mix(c, vec3(1.0), vBell * 0.3 + pulse * 0.3);
      float a = (0.6 + vFres * 0.6) * vAlpha * (vBell > 0.5 ? 0.6 : 1.0);
      gl_FragColor = vec4(c * a, a);
      #include <colorspace_fragment>
    }
  `,{uA:X(`#5ee0f0`),uB:X(`#b07bff`)}));return s.frustumCulled=!1,s.renderOrder=5,Lp(s,i,Math.ceil(t/2)*n)}function Up(e,t,n){let r=new vs;r.moveTo(.5,0),r.quadraticCurveTo(.15,.13,-.3,.04),r.lineTo(-.5,.14),r.lineTo(-.42,0),r.lineTo(-.5,-.14),r.lineTo(-.3,-.04),r.quadraticCurveTo(.15,-.13,.5,0);let i=new oc(r,6),a=t*n,o=new Float32Array(a*4),s=new Float32Array(a*4);for(let e=0;e<t;e++){let t=Z(4.5,10),r=Z(.5,5),i=Z(.06,.12)*(Math.random()<.5?-1:1),a=Z(0,Math.PI*2);for(let c=0;c<n;c++){let l=e*n+c;o.set([Z(-1,1),Z(-.5,.5),Z(-1,1),Z(0,100)],l*4),s.set([t,r,i,a],l*4)}}let c=new G(zp(i,a,{aFish:[o,4],aSchool:[s,4]}),Bp(e,`
    attribute vec4 aFish;
    attribute vec4 aSchool;
    varying vec2 vUv;
    varying float vAlpha;
    void main() {
      float t = uFxTime;
      float R = aSchool.x;
      float ang = aSchool.w + t * aSchool.z;
      // The school wheels round you, rising and falling; each fish holds loosely to its place.
      vec3 centre = vec3(sin(ang) * R, aSchool.y + sin(ang * 2.0) * 1.5, -cos(ang) * R);
      vec3 fwd = normalize(vec3(cos(ang), cos(ang * 2.0) * 3.0 / R, sin(ang)) * sign(aSchool.z));
      vec3 up = vec3(0.0, 1.0, 0.0);
      vec3 side = normalize(cross(fwd, up));
      up = cross(side, fwd);
      vec3 offset = side * aFish.x * 1.4 + up * aFish.y * 0.9 + fwd * aFish.z * 1.2;
      offset += vec3(sin(t * 0.7 + aFish.w), cos(t * 0.6 + aFish.w), sin(t * 0.5 + aFish.w * 2.0)) * 0.25;
      vec3 p = position * 0.16;
      // Tail beats; the body follows a little.
      p.z += sin(t * 10.0 + aFish.w) * 0.02 * smoothstep(0.0, -0.5, position.x);
      vec3 local = fwd * p.x + up * p.y + side * p.z;
      vec4 world = modelMatrix * vec4(centre + offset + local, 1.0);
      float d = distance(world.xyz, uHead);
      vAlpha = uMix * smoothstep(1.0, 2.5, d) * exp(-d * 0.05) * revealMask(world.xyz);
      vUv = position.xy;
      gl_Position = projectionMatrix * viewMatrix * world;
    }
  `,`
    varying vec2 vUv;
    varying float vAlpha;
    void main() {
      // Photophores: a row of bright dots along the belly, an eye-light at the front.
      float row = smoothstep(0.02, 0.0, abs(vUv.y + 0.03)) * smoothstep(0.55, 0.9, cos(vUv.x * 48.0)) * step(-0.3, vUv.x) * step(vUv.x, 0.35);
      float eye = smoothstep(0.035, 0.0, length(vUv - vec2(0.38, 0.02)));
      float body = 0.05;
      vec3 c = uLight * (row * 2.2 + eye * 2.5 + body);
      float a = (row + eye + body) * vAlpha;
      gl_FragColor = vec4(c * vAlpha, a);
      #include <colorspace_fragment>
    }
  `,{uLight:X(`#7ef7ff`)},2));return c.frustumCulled=!1,c.renderOrder=5,Lp(c,a,Math.ceil(t/2)*n)}function Wp(e,t){let n=new ic(1,1,32,16);n.rotateX(-Math.PI/2);let r=new Float32Array(t*4);for(let e=0;e<t;e++)r.set([Z(22,34),Z(4,11),Z(.025,.04)*(e%2?-1:1),Z(0,Math.PI*2)],e*4);let i=new G(zp(n,t,{aInst:[r,4]}),Bp(e,`
    attribute vec4 aInst;
    varying vec2 vP;
    varying float vAlpha;
    void main() {
      float t = uFxTime;
      float ang = aInst.w + t * aInst.z;
      vec3 centre = vec3(sin(ang) * aInst.x, aInst.y + sin(t * 0.2 + aInst.w) * 1.5, -cos(ang) * aInst.x);
      vec3 fwd = normalize(vec3(cos(ang), 0.0, sin(ang)) * sign(aInst.z));
      vec3 side = normalize(cross(vec3(0.0, 1.0, 0.0), fwd));
      // Local: x across the wings (-1..1), z nose (+) to tail (-).
      vec2 q = vec2(position.x * 2.0, -position.z * 2.0);
      float span = abs(q.x);
      float flap = sin(t * 0.9 - span * 1.2 + aInst.w) * pow(span, 1.6) * 0.55;
      vec3 local = side * q.x * 3.2 + fwd * q.y * 1.7 + vec3(0.0, flap * 1.6, 0.0);
      vec4 world = modelMatrix * vec4(centre + local, 1.0);
      vAlpha = uMix * revealMask(world.xyz);
      vP = q;
      gl_Position = projectionMatrix * viewMatrix * world;
    }
  `,`
    varying vec2 vP;
    varying float vAlpha;
    void main() {
      // Manta planform: swept wings with pointed tips, a broad head with two cephalic fins,
      // and a long thin tail. x across (-1..1), y nose (+) to tail (-).
      float x = abs(vP.x);
      float front = mix(0.42, -0.04, pow(x, 1.25));
      float back = mix(-0.42, -0.06, pow(x, 0.65));
      float inside = step(vP.y, front) * step(back, vP.y) * step(x, 1.0);
      float fins = step(abs(x - 0.13), 0.035) * step(front, vP.y) * step(vP.y, front + 0.14);
      float tail = smoothstep(0.012, 0.0, x) * step(-1.1, vP.y) * step(vP.y, -0.38);
      float dEdge = min(front - vP.y, vP.y - back);
      float edge = inside * (1.0 - smoothstep(0.0, 0.05, dEdge));
      float spots = inside * smoothstep(0.85, 0.95, texture2D(uNoise, vP * 1.8).a) * 0.6;
      float body = inside * (0.06 + 0.1 * (1.0 - x));
      edge = max(edge, fins);
      vec3 c = uEdge * (edge * 1.4 + tail * 0.8 + body) + uSpot * spots;
      float a = (edge + tail * 0.8 + spots + body) * vAlpha;
      gl_FragColor = vec4(c * vAlpha, a);
      #include <colorspace_fragment>
    }
  `,{uEdge:X(`#5ee0f0`),uSpot:X(`#b07bff`)},2));return i.frustumCulled=!1,i.renderOrder=3,i}function Gp(e,t,n){let r=new Bo(.22,1,1,9,14,!1).translate(0,.5,0),i=r.attributes.position;for(let e=0;e<i.count;e++){let t=i.getX(e),n=i.getY(e),r=i.getZ(e),a=1+.18*Math.sin(n*13+Math.atan2(r,t)*3)+.1*Math.sin(n*31+t*5);i.setXYZ(e,t*a,n,r*a)}r.computeVertexNormals();let a=new Float32Array(t*4);for(let e=0;e<t;e++){let t=Ip(.3),n=Z(11,46);a.set([Math.sin(t)*n,-Math.cos(t)*n,Z(6,22),Z(.8,3.2)],e*4)}let o=zp(r,t,{aInst:[a,4]}),s={uRock:X(`#020409`),uLichen:X(`#2fd6ff`),uWorm:X(`#ff6bd6`),uFloor:{value:n}},c=new G(o,new K({vertexShader:`
      ${xp}
      uniform float uMix;
      ${Op(s)}
      attribute vec4 aInst;
      varying vec3 vWorld;
      varying vec3 vN;
      varying float vH;
      varying float vSeed;
      void main() {
        vec3 p = position * vec3(aInst.w, aInst.z, aInst.w);
        vec4 world = modelMatrix * vec4(p + vec3(aInst.x, uFloor, aInst.y), 1.0);
        vWorld = world.xyz;
        vN = normalize(mat3(modelMatrix) * normal);
        vH = position.y;
        vSeed = aInst.x * 0.37 + aInst.y * 0.11;
        gl_Position = projectionMatrix * viewMatrix * world;
      }
    `,fragmentShader:`
      ${xp}
      uniform float uMix;
      ${Op(s)}
      varying vec3 vWorld;
      varying vec3 vN;
      varying float vH;
      varying float vSeed;
      void main() {
        vec2 uv = vec2(atan(vWorld.z - vSeed, vWorld.x + vSeed) * 0.8, vWorld.y * 0.18);
        float cell = texture2D(uNoise, uv * 1.3 + vSeed).a;
        float patchy = smoothstep(0.5, 0.75, texture2D(uNoise, uv * 0.6).r);
        float lichen = (1.0 - smoothstep(0.0, 0.03, cell)) * patchy * 0.4;
        float dots = smoothstep(0.84, 0.9, texture2D(uNoise, uv * 4.0 + vSeed).g) * (0.3 + patchy);
        float worms = smoothstep(0.8, 1.0, vH) * smoothstep(0.75, 0.85, texture2D(uNoise, uv * 6.0).g);
        float breathe = 0.6 + 0.4 * sin(uFxTime * 0.7 + vSeed * 5.0 + vWorld.y * 0.3);
        vec3 n = normalize(vN);
        vec3 view = normalize(uHead - vWorld);
        float rim = pow(1.0 - max(dot(n, view), 0.0), 3.0);
        vec3 c = uRock * (0.4 + 0.6 * max(dot(n, vec3(0.0, 1.0, 0.0)), 0.0)) + uLichen * (lichen * breathe + dots * 1.1 * breathe + rim * 0.025);
        c += uWorm * worms * (0.8 + uBeat * 0.4);
        float d = distance(vWorld, uHead);
        float fog = exp(-d * 0.045);
        // Fade out towards the seabed and into the distance.
        float a = uMix * revealMask(vWorld) * smoothstep(-0.02, 0.25, vH) * (0.25 + 0.75 * fog);
        gl_FragColor = vec4(c * fog, a);
        #include <colorspace_fragment>
      }
    `,uniforms:Sp(e,s),transparent:!0}));return c.frustumCulled=!1,c.renderOrder=-25,c}function Kp(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new ca,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=qp(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=qp(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function qp(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new qi(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}function Jp(e,t){if(t===0)return console.warn(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.`),e;if(t===2||t===1){let n=e.getIndex();if(n===null){let t=[],r=e.getAttribute(`position`);if(r!==void 0){for(let e=0;e<r.count;e++)t.push(e);e.setIndex(t),n=e.getIndex()}else return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.`),e}let r=n.count-2,i=[];if(t===2)for(let e=1;e<=r;e++)i.push(n.getX(0)),i.push(n.getX(e)),i.push(n.getX(e+1));else for(let e=0;e<r;e++)e%2==0?(i.push(n.getX(e)),i.push(n.getX(e+1)),i.push(n.getX(e+2))):(i.push(n.getX(e+2)),i.push(n.getX(e+1)),i.push(n.getX(e)));return i.length/3!==r&&console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.`),e.setIndex(i),e.clearGroups(),e}return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:`,t),e}var Yp=16,Xp=4;function Zp(){let e=new cc(1,40,14,0,Math.PI*2,0,Math.PI*.56),t=e.attributes.position,n=new Float32Array(t.count);for(let e=0;e<t.count;e++)n[e]=1-Math.max(0,t.getY(e));e.setAttribute(`aT`,new qi(n,1)),e.setAttribute(`aPart`,new qi(new Float32Array(t.count),1));let r=[e],i=(e,t,n,r)=>{let i=new ic(e,t,1,n);i.translate(0,-t/2,0);let a=i.attributes.position,o=new Float32Array(a.count);for(let e=0;e<a.count;e++)o[e]=Math.min(1,Math.max(0,-a.getY(e)/t));return i.setAttribute(`aT`,new qi(o,1)),i.setAttribute(`aPart`,new qi(new Float32Array(a.count).fill(r),1)),i};for(let e=0;e<Yp;e++){let t=i(.035,2.4+e%4*.8,20,1),n=e/Yp*Math.PI*2;t.rotateY(-n),t.translate(Math.cos(n)*.62,-.02,Math.sin(n)*.62),r.push(t)}for(let e=0;e<Xp;e++){let t=i(.22,1.5,16,2);t.rotateY(e/Xp*Math.PI),t.translate(0,.05,0),r.push(t)}for(let e of r)e.deleteAttribute(`uv`);return Kp(r)}var Qp=null;function $p(e,t){Qp??=Zp();let n=new wl;n.index=Qp.index;for(let e of Object.keys(Qp.attributes))n.setAttribute(e,Qp.attributes[e]);n.instanceCount=t.count;let r=new Float32Array(t.count*4),i=new Float32Array(t.count*4),a=new Float32Array(t.count*3),o=t.colors.map(e=>new W(e)),s=(e,t)=>e+Math.random()*(t-e);for(let e=0;e<t.count;e++){let n=0;do n=s(-Math.PI,Math.PI);while(t.clearAhead&&Math.abs(n)<t.clearAhead&&Math.random()<.85);let c=s(t.radius[0],t.radius[1]),l=t.at?.[e];r.set(l?[...l,s(0,100)]:[Math.sin(n)*c,s(t.height[0],t.height[1]),-Math.cos(n)*c,s(0,100)],e*4),i.set([s(t.size[0],t.size[1]),s(.6,1.4),s(-.25,.25),s(-.25,.25)],e*4);let u=o[e%o.length];a.set([u.r,u.g,u.b],e*3)}n.setAttribute(`aInst`,new Qa(r,4)),n.setAttribute(`aParams`,new Qa(i,4)),n.setAttribute(`aColor`,new Qa(a,3));let c=new G(n,new K({vertexShader:`
      ${xp}
      uniform float uMix;
      uniform vec2 uBand;
      uniform float uRise;
      attribute float aT;
      attribute float aPart;
      attribute vec4 aInst;
      attribute vec4 aParams;
      attribute vec3 aColor;
      varying vec3 vColor;
      varying vec3 vLocal;
      varying float vT;
      varying float vPart;
      varying float vFres;
      varying float vPulse;
      varying float vAlpha;
      varying float vTime;
      void main() {
        float size = aParams.x;
        float speed = aParams.y;
        float t = uFxTime * speed * 1.4 + aInst.w;
        // Swim stroke: a quick contraction, then a slow glide open.
        float stroke = pow(0.5 + 0.5 * sin(t), 3.0);
        vec3 p = position;
        vec3 n = normal;
        vLocal = position;
        if (aPart < 0.5) {
          p.xz *= 1.0 - 0.22 * stroke * aT;
          p.y *= 0.8 + 0.25 * stroke;
          // The rim flares and ripples.
          float ang = atan(position.z, position.x);
          p.y -= smoothstep(0.8, 1.0, aT) * (0.05 + 0.04 * sin(ang * 8.0 + t * 2.0));
        } else {
          float k = aT;
          float lag = t - k * 2.2;
          float sway = aPart > 1.5 ? 0.18 : 0.34;
          p.x += sin(lag * 1.1 + p.z * 4.0) * sway * k;
          p.z += cos(lag * 0.9 + p.x * 4.0) * sway * k;
          p.xz *= 1.0 - 0.2 * stroke * (1.0 - k);
          p.y *= 1.0 + 0.1 * stroke;
          // Oral arms ruffle along their edges.
          if (aPart > 1.5) p.xz += normalize(vec2(position.x, position.z) + 1e-4) * sin(k * 26.0 - t * 2.0) * 0.05 * (0.3 + k);
        }
        // Gentle tilt so they don't all swim straight up.
        p.xy = mat2(cos(aParams.z), -sin(aParams.z), sin(aParams.z), cos(aParams.z)) * p.xy;
        p.zy = mat2(cos(aParams.w), -sin(aParams.w), sin(aParams.w), cos(aParams.w)) * p.zy;
        vec3 at = aInst.xyz;
        // Rise in bursts with each stroke, wrapping through the height band.
        float travel = (uFxTime * speed + 0.35 * sin(t)) * uRise;
        at.y = uBand.x + mod(at.y - uBand.x + travel, uBand.y - uBand.x);
        at.x += sin(uFxTime * 0.05 + aInst.w) * 1.5;
        vec4 world = modelMatrix * vec4(at + p * size, 1.0);
        vec3 viewDir = normalize(uHead - world.xyz);
        vec3 wn = normalize(mat3(modelMatrix) * n);
        vFres = aPart < 0.5 ? pow(1.0 - abs(dot(wn, viewDir)), 2.0) : 0.0;
        float band = uBand.y - uBand.x;
        float edge = min(at.y - uBand.x, uBand.y - at.y) / band;
        float d = distance(world.xyz, uHead);
        vAlpha = uMix * smoothstep(0.0, 0.12, edge) * smoothstep(1.2, 3.0, d) * (0.35 + 0.65 * exp(-d * 0.025)) * revealMask(world.xyz);
        vColor = aColor;
        vT = aT;
        vPart = aPart;
        vPulse = stroke;
        vTime = t;
        gl_Position = projectionMatrix * viewMatrix * world;
      }
    `,fragmentShader:`
      ${xp}
      uniform float uGlow;
      varying vec3 vColor;
      varying vec3 vLocal;
      varying float vT;
      varying float vPart;
      varying float vFres;
      varying float vPulse;
      varying float vAlpha;
      varying float vTime;
      void main() {
        float a;
        vec3 c = vColor;
        if (vPart < 0.5) {
          float ang = atan(vLocal.z, vLocal.x);
          float r = length(vLocal.xz);
          float rim = smoothstep(0.8, 1.0, vT);
          float core = 1.0 - smoothstep(0.0, 0.5, vT);
          // Fine radial canals from crown to rim.
          float canals = smoothstep(0.93, 1.0, cos(ang * 16.0)) * smoothstep(0.15, 0.6, vT) * (1.0 - rim);
          // Four horseshoe gonads glowing inside the bell.
          float lobe = 0.5 + 0.5 * cos(ang * 4.0);
          float gonad = smoothstep(0.08, 0.0, abs(r - 0.32 - lobe * 0.08)) * smoothstep(0.2, 0.9, lobe);
          // Bead lights round the rim, rippling in a travelling wave.
          float beads = smoothstep(0.75, 1.0, cos(ang * 36.0)) * smoothstep(0.9, 0.98, vT);
          float wave = 0.4 + 0.6 * pow(0.5 + 0.5 * sin(ang * 3.0 - vTime * 2.5), 3.0);
          a = 0.06 + vFres * 0.5 + rim * 0.35 + core * 0.1 + canals * 0.35 + gonad * 0.8 + beads * wave * 1.6;
          c = mix(c, vec3(1.0), rim * 0.25 + gonad * 0.35 + beads * 0.6);
        } else if (vPart < 1.5) {
          // Tentacles: a fine thread with beads of light running down it.
          float bead = smoothstep(0.82, 1.0, sin(vT * 60.0 - vTime * 4.0));
          a = (1.0 - vT) * (0.22 + bead * 0.9);
          c = mix(c, vec3(1.0), bead * 0.4);
        } else {
          a = (1.0 - vT * 0.85) * 0.3;
          c = mix(c, vec3(1.0, 0.85, 1.0), 0.3);
        }
        a *= vAlpha * uGlow * (0.75 + 0.35 * vPulse + uBeat * 0.25 + uIntensity * 0.2);
        gl_FragColor = vec4(c * a, a);
        #include <colorspace_fragment>
      }
    `,uniforms:Sp(e,{uBand:{value:new B(t.height[0],t.height[1])},uRise:{value:t.rise??.25},uGlow:{value:t.glow??1}}),transparent:!0,depthWrite:!1,blending:2,side:2}));return c.frustumCulled=!1,c.renderOrder=4,c}function em(){let e={value:0},t={value:0},n=new ti,r=wp(t,`
    float h = dir.y;
    // Almost black, with the faintest blue haze where the water fades to distance.
    vec3 c = mix(uDeep, uHaze, exp(-abs(h) * 5.0) * 0.8);
    c = mix(c, uAbove, smoothstep(0.3, 1.0, h) * 0.6);
    // Slow drifting veils of glow far off.
    float az = atan(dir.x, -dir.z) / 6.2831;
    float veil = skyNoise(vec2(az * 2.0 + uFxTime * 0.003, h * 1.5 - uFxTime * 0.002)).r;
    veil = smoothstep(0.55, 0.85, veil) * exp(-abs(h - 0.1) * 3.0);
    c += uVeil * veil * (0.25 + uIntensity * 0.15 + uBeat * 0.05);
    col = c;
  `,{uDeep:X(`#010208`),uHaze:X(`#04142a`),uAbove:X(`#030a1c`),uVeil:X(`#1a6fa8`)});n.add(r);let i=Dp(e,220,1,`
    vec2 uv = wp.xz * 0.08;
    float cell = texture2D(uNoise, uv + vec2(uFxTime * 0.004, 0.0)).a;
    float trail = 1.0 - smoothstep(0.0, 0.035, cell);
    float vary = texture2D(uNoise, wp.xz * 0.02).r;
    trail *= smoothstep(0.45, 0.7, vary);
    float speck = smoothstep(0.86, 0.9, texture2D(uNoise, wp.xz * 0.7).g);
    float tw = 0.5 + 0.5 * sin(uTime * 2.0 + wp.x * 3.0 + wp.z * 2.0);
    vec3 c = uSilt;
    c += uTrail * trail * (0.6 + uBeat * 0.3) * exp(-dist * 0.03);
    c += uSpeck * speck * tw * exp(-dist * 0.06);
    c += uTrail * 0.05 * exp(-dist * 0.4);
    float fog = 1.0 - exp(-dist * 0.05);
    col = mix(c, uFog, fog);
    a = 1.0 - smoothstep(70.0, 100.0, dist);
  `,{uSilt:X(`#02040a`),uTrail:X(`#2fd6ff`),uSpeck:X(`#8ff7ff`),uFog:X(`#030b18`)});return i.position.y=-6,n.add(i),n.add(Gp(e,30,-6)),n.add(Wp(e,2)),n.add(Hp(e,5)),n.add(Up(e,3,55)),n.add(Vp(e,16,[2.2,9],[.3,3.4])),n.add($p(e,{count:40,radius:[3.5,26],height:[-5,14],size:[.25,.75],colors:[`#5ee0f0`,`#b07bff`,`#ff7ad9`,`#7affc8`,`#8fb4ff`],rise:.22,clearAhead:.35})),n.add(Tp(e,{count:1300,min:[-16,-5,-16],max:[16,10,16],clearRadius:.8,colors:[`#5ee0f0`,`#2fd6ff`,`#9ff5e1`,`#b07bff`],size:[.006,.02],velocity:[.02,.04,.01],swirl:.35,twinkle:.9,beat:.8})),n.add(Tp(e,{count:500,min:[-12,-5,-12],max:[12,10,12],clearRadius:1,colors:[`#8aa0c0`,`#6a7ea0`],size:[.008,.02],velocity:[.01,-.12,.02],swirl:.25,twinkle:.1,beat:0})),{id:`dusk`,group:n,mix:e,skyMix:t,sky:r,update(){}}}function tm(e,t){let n=new ic(1,1,4,10).translate(0,.5,0);n.deleteAttribute(`normal`);let r=new Float32Array(t*16*4),i=new Float32Array(t*16*4),a=[];for(let e=0;e<t;e++){let e=Ip(.4),t=Z(10,28);a.push([Math.sin(e)*t,Z(-4,12),-Math.cos(e)*t,Z(2.4,4.6),Z(0,100)])}a.forEach(([e,t,n,a,o],s)=>{for(let c=0;c<16;c++){let l=c>=9,u=l?7:9,d=l?c-9:c;r.set([e,t,n,a],(s*16+c)*4),i.set([(d+(l?.5:0))/u*Math.PI*2+o,+!!l,Z(0,1),o],(s*16+c)*4)}});let o=new G(zp(n,t*16,{aFlower:[r,4],aPetal:[i,4]}),Bp(e,`
    attribute vec4 aFlower;
    attribute vec4 aPetal;
    varying vec2 vUv;
    varying float vInner;
    varying float vAlpha;
    varying float vOpen;
    void main() {
      float seed = aPetal.w;
      float t = uFxTime;
      float open = clamp(0.5 + 0.32 * sin(t * 0.13 + seed) + uIntensity * 0.18 + uBeat * 0.05, 0.0, 1.0);
      float inner = aPetal.y;
      float tilt = inner > 0.5 ? mix(0.15, 0.75, open) : mix(0.35, 1.35, open);
      float len = inner > 0.5 ? 0.62 : 1.0;
      float wid = inner > 0.5 ? 0.42 : 0.52;
      float a = aPetal.x + sin(t * 0.05 + seed) * 0.3;
      // The flower's own frame: its up axis leans towards you and sways.
      vec3 centre = aFlower.xyz + vec3(sin(t * 0.07 + seed) * 0.6, sin(t * 0.11 + seed * 2.0) * 0.4, cos(t * 0.06 + seed) * 0.6);
      vec3 toYou = normalize(uHead - centre);
      vec3 fu = normalize(vec3(0.0, 1.0, 0.0) + toYou * 0.55 + vec3(sin(t * 0.2 + seed), 0.0, cos(t * 0.17 + seed)) * 0.08);
      vec3 fx = normalize(cross(fu, vec3(0.0, 0.0, 1.0)));
      vec3 fz = cross(fx, fu);
      vec3 radial = fx * cos(a) + fz * sin(a);
      vec3 tangent = fx * -sin(a) + fz * cos(a);
      vec3 axis = fu * cos(tilt) + radial * sin(tilt);
      vec3 norm = normalize(cross(tangent, axis));
      float y = position.y;
      float x = position.x;
      // Each petal is cupped across and curls out a little at the tip.
      vec3 p = axis * y * len + tangent * x * wid + norm * (x * x * 0.35 - y * y * 0.12 * open);
      vec4 world = modelMatrix * vec4(centre + p * aFlower.w, 1.0);
      float d = distance(world.xyz, uHead);
      vAlpha = uMix * revealMask(world.xyz) * (0.45 + 0.55 * exp(-d * 0.03));
      vUv = vec2(x, y);
      vInner = inner;
      vOpen = open;
      gl_Position = projectionMatrix * viewMatrix * world;
    }
  `,`
    varying vec2 vUv;
    varying float vInner;
    varying float vAlpha;
    varying float vOpen;
    void main() {
      float y = vUv.y;
      // Petal outline: narrow at the base, broad, then a soft point.
      float half_ = 0.5 * pow(sin(3.14159 * pow(y, 0.75)), 0.8);
      float x = abs(vUv.x) / max(half_, 0.001);
      if (x > 1.0) discard;
      float edge = smoothstep(0.7, 1.0, x) + smoothstep(0.85, 1.0, y) * 0.5;
      float vein = smoothstep(0.08, 0.0, abs(vUv.x)) * 0.4 + smoothstep(0.92, 1.0, cos(vUv.x * 30.0 / max(half_, 0.2))) * 0.15;
      vec3 c = mix(uHot, uPetal, smoothstep(0.0, 0.5, y));
      c = mix(c, uEdge, smoothstep(0.55, 1.0, y) * 0.6);
      float a = (0.08 + (1.0 - y) * 0.1 + edge * 0.6 + vein * 0.8) * (vInner > 0.5 ? 1.1 : 1.0);
      a *= (0.75 + vOpen * 0.4 + uBeat * 0.2) * vAlpha;
      gl_FragColor = vec4(c * a, a);
      #include <colorspace_fragment>
    }
  `,{uHot:X(`#fff0fb`),uPetal:X(`#ff6bd6`),uEdge:X(`#a77bff`)},2));o.frustumCulled=!1,o.renderOrder=4;let s=new Float32Array(t*22*4),c=new Float32Array(t*22*4);a.forEach(([e,t,n,r,i],a)=>{for(let o=0;o<22;o++)s.set([e,t,n,r],(a*22+o)*4),c.set([Z(0,Math.PI*2),Z(.05,.22),Z(.18,.42),i],(a*22+o)*4)});let l=new ca;l.setAttribute(`position`,new qi(new Float32Array(t*22*3),3)),l.setAttribute(`aFlower`,new qi(s,4)),l.setAttribute(`aStamen`,new qi(c,4));let u={uGold:X(`#ffe6a8`),uPointScale:Ep},d=new jo(l,new K({vertexShader:`
      ${xp}
      uniform float uMix;
      ${Op(u)}
      attribute vec4 aFlower;
      attribute vec4 aStamen;
      varying float vAlpha;
      void main() {
        float seed = aStamen.w;
        float t = uFxTime;
        vec3 centre = aFlower.xyz + vec3(sin(t * 0.07 + seed) * 0.6, sin(t * 0.11 + seed * 2.0) * 0.4, cos(t * 0.06 + seed) * 0.6);
        vec3 toYou = normalize(uHead - centre);
        vec3 fu = normalize(vec3(0.0, 1.0, 0.0) + toYou * 0.55);
        vec3 fx = normalize(cross(fu, vec3(0.0, 0.0, 1.0)));
        vec3 fz = cross(fx, fu);
        float a = aStamen.x + sin(t * 0.6 + aStamen.x * 5.0) * 0.1;
        vec3 p = (fx * cos(a) + fz * sin(a)) * aStamen.y + fu * aStamen.z;
        vec4 world = modelMatrix * vec4(centre + p * aFlower.w, 1.0);
        float d = distance(world.xyz, uHead);
        vAlpha = uMix * revealMask(world.xyz) * (0.6 + 0.4 * sin(uTime * 2.0 + aStamen.x * 7.0)) * (1.0 + uBeat * 0.5);
        vec4 mv = viewMatrix * world;
        gl_Position = projectionMatrix * mv;
        gl_PointSize = clamp(0.06 * aFlower.w * uPointScale / max(0.1, -mv.z), 1.5, 32.0);
      }
    `,fragmentShader:`
      uniform vec3 uGold;
      varying float vAlpha;
      void main() {
        float d = length(gl_PointCoord - 0.5) * 2.0;
        float a = (1.0 - smoothstep(0.0, 1.0, d)) * vAlpha;
        a *= a + 0.3;
        gl_FragColor = vec4(uGold * a * 1.4, a);
        #include <colorspace_fragment>
      }
    `,uniforms:Sp(e,u),transparent:!0,depthWrite:!1,blending:2}));d.frustumCulled=!1,d.renderOrder=5;let f=new ti;return f.add(o,d),f}function nm(e,t){let n=new ic(1,1).translate(0,.5,0);n.deleteAttribute(`normal`);let r=new Float32Array(t*4);for(let e=0;e<t;e++){let t=0,n=0;do t=Z(-9,9),n=Z(-9,9);while(Math.hypot(t,n)<1.2);r.set([t,Z(-2,8),n,Z(0,100)],e*4)}let i=new G(zp(n,t,{aInst:[r,4]}),Bp(e,`
    attribute vec4 aInst;
    varying vec2 vUv;
    varying float vAlpha;
    void main() {
      float s = aInst.w;
      float t = uFxTime;
      vec3 at = aInst.xyz;
      at.y = -2.0 + mod(at.y + 2.0 - t * (0.18 + fract(s * 3.7) * 0.12), 10.0);
      at.x += sin(t * 0.4 + s) * 0.5;
      at.z += cos(t * 0.33 + s * 1.7) * 0.5;
      // Tumbling: spin about a tilted axis.
      float a = t * (0.8 + fract(s * 5.3)) + s;
      float b = t * (0.5 + fract(s * 2.1)) + s * 2.0;
      vec3 p = vec3(position.x * 0.6, position.y, 0.0) * 0.11;
      p.xz = mat2(cos(a), -sin(a), sin(a), cos(a)) * p.xz;
      p.yz = mat2(cos(b), -sin(b), sin(b), cos(b)) * p.yz;
      vec4 world = modelMatrix * vec4(at + p, 1.0);
      float d = distance(world.xyz, uHead);
      float band = smoothstep(-2.0, -1.0, at.y) * smoothstep(8.0, 6.5, at.y);
      vAlpha = uMix * revealMask(world.xyz) * band * smoothstep(0.6, 1.2, d);
      vUv = position.xy;
      gl_Position = projectionMatrix * viewMatrix * world;
    }
  `,`
    varying vec2 vUv;
    varying float vAlpha;
    void main() {
      float y = vUv.y;
      float half_ = 0.5 * pow(sin(3.14159 * pow(y, 0.75)), 0.8);
      float x = abs(vUv.x) / max(half_, 0.001);
      if (x > 1.0) discard;
      vec3 c = mix(uHot, uPetal, y);
      float a = (0.5 + smoothstep(0.6, 1.0, x) * 0.8) * vAlpha;
      gl_FragColor = vec4(c * a, a);
      #include <colorspace_fragment>
    }
  `,{uPetal:X(`#ff9fe3`),uHot:X(`#fff0fb`)},2));return i.frustumCulled=!1,i.renderOrder=6,Lp(i,t,Math.ceil(t/2))}function rm(){let e={value:0},t={value:0},n=new ti,r=wp(t,`
    float h = dir.y;
    vec3 c = mix(uLow, uHigh, smoothstep(-0.3, 0.7, h));
    // A soft halo of light behind the great jelly.
    float halo = max(dot(dir, uGiant), 0.0);
    c += uHalo * (pow(halo, 12.0) * 0.5 + pow(halo, 60.0) * 0.6) * (0.8 + uBeat * 0.4 + uIntensity * 0.3);
    // Veils of colour drifting across the sky.
    float az = atan(dir.x, -dir.z) / 6.2831;
    float v = skyNoise(vec2(az * 2.0 - uFxTime * 0.004, h * 1.4 + uFxTime * 0.002)).r;
    float veil = smoothstep(0.55, 0.9, v) * smoothstep(-0.2, 0.3, h) * (1.0 - smoothstep(0.5, 0.95, h));
    c += mix(uVeilA, uVeilB, smoothstep(0.3, 0.7, skyNoise(vec2(az, h * 0.8)).g)) * veil * 0.35;
    // Slow rings of light spreading out from the great jelly.
    float ga = acos(clamp(dot(dir, uGiant), -1.0, 1.0));
    for (int i = 0; i < 3; i++) {
      float rr = fract(uFxTime * 0.025 + float(i) / 3.0) * 1.4;
      c += uHalo * smoothstep(0.035, 0.0, abs(ga - rr - 0.08)) * pow(1.0 - rr / 1.4, 2.0) * (0.07 + uBeat * 0.04);
    }
    c += vec3(1.0, 0.9, 1.0) * (meteor(dir, 1.0) + meteor(dir, 3.0)) * 1.2;
    c += vec3(0.9, 0.85, 1.0) * (stars(dir, 140.0, 0.25) * 0.6 + stars(dir, 60.0, 0.08) * 1.3);
    col = c;
  `,{uLow:X(`#05020c`),uHigh:X(`#010106`),uHalo:X(`#b07bff`),uVeilA:X(`#5a3bd0`),uVeilB:X(`#ff6bd6`),uGiant:{value:new V(-.32,.55,-1).normalize()}},kp+Ap);return n.add(r),n.add(jp(e,`#c38bff`)),n.add($p(e,{count:1,radius:[0,0],height:[-40,80],size:[9,9],colors:[`#c9a8ff`],rise:0,glow:1.3,at:[[-14,22,-40]]})),n.add($p(e,{count:30,radius:[6,22],height:[-4,16],size:[.3,.8],colors:[`#ff6bd6`,`#c9a8ff`,`#5ee0f0`,`#ffd6f5`],rise:.18,clearAhead:.35})),n.add(tm(e,9)),n.add(nm(e,140)),n.add(Tp(e,{count:1100,min:[-18,-10,-18],max:[18,14,18],clearRadius:1.4,colors:[`#ffffff`,`#c9a8ff`,`#ff6bd6`,`#8fb4ff`],size:[.008,.035],velocity:[.02,.22,.03],swirl:.6,twinkle:.9,beat:.7})),{id:`cosmos`,group:n,mix:e,skyMix:t,sky:r,update(){}}}var im=-.25,am=new V(.62,.11,-.78).normalize(),om=8,sm=`
// Distance-to-crest glow for waves rolling in from the board's side towards the player.
float waves(vec2 xz, float t) {
  float warp = (texture2D(uNoise, xz * 0.01 + vec2(t * 0.003, 0.0)).r - 0.5) * 14.0;
  float a = pow(0.5 + 0.5 * sin((xz.y + warp) * 0.28 + t * 0.5), 10.0);
  float warp2 = (texture2D(uNoise, xz * 0.014 + 0.4).b - 0.5) * 10.0;
  float b = pow(0.5 + 0.5 * sin((xz.y * 0.9 + xz.x * 0.35 + warp2) * 0.21 + t * 0.38), 14.0);
  float breakup = smoothstep(0.45, 0.8, texture2D(uNoise, vec2(xz.x * 0.04, xz.y * 0.06 - t * 0.02)).r);
  float breakup2 = smoothstep(0.5, 0.85, texture2D(uNoise, vec2(xz.x * 0.05 + 0.3, xz.y * 0.04 + t * 0.015)).g);
  return a * breakup + b * breakup2 * 0.8;
}
uniform vec4 uSplash[${om}];
// Rings of light spreading from where the dolphins break the surface.
float splashes(vec2 xz) {
  float s = 0.0;
  for (int i = 0; i < ${om}; i++) {
    vec4 sp = uSplash[i];
    if (sp.z < 0.0) continue;
    float r = length(xz - sp.xy);
    float ring = smoothstep(0.14, 0.0, abs(r - sp.z * 1.5)) + smoothstep(0.1, 0.0, abs(r - sp.z * 0.9)) * 0.5;
    s += (ring * exp(-sp.z * 1.1) + exp(-r * 2.5) * exp(-sp.z * 3.0) * 1.5) * sp.w;
  }
  return s;
}
`;function cm(e,t){let n=new Bo(.45,1,1,22,20,!1).translate(0,.5,0),r=n.attributes.position;for(let e=0;e<r.count;e++){let t=r.getX(e),n=r.getY(e),i=r.getZ(e),a=Math.atan2(i,t),o=1+.22*Math.sin(n*7+a*2)+.12*Math.sin(n*19+a*5)+.25*Math.max(0,Math.sin(a*3+n*2))*(1-n);r.setXYZ(e,t*o,n*(1+.15*Math.sin(a*4)),i*o)}n.computeVertexNormals();let i=new Float32Array(t*4);for(let e=0;e<t;e++){let t=Ip(.25),n=Z(40,72);i.set([Math.sin(t)*n,-Math.cos(t)*n,Z(4,15),Z(2,7)],e*4)}let a=zp(n,t,{aInst:[i,4]}),o={uRock:X(`#02050b`),uSurf:X(`#38c8ff`),uFoam:X(`#c8f6ff`),uHaze:X(`#04121c`)},s=new G(a,new K({vertexShader:`
      ${xp}
      attribute vec4 aInst;
      varying vec3 vWorld;
      varying vec3 vN;
      varying float vSeed;
      void main() {
        vec3 p = position * vec3(aInst.w, aInst.z, aInst.w);
        vec4 world = modelMatrix * vec4(p + vec3(aInst.x, ${(-2.25).toFixed(2)}, aInst.y), 1.0);
        vWorld = world.xyz;
        vN = normalize(mat3(modelMatrix) * normal);
        vSeed = aInst.x * 0.31 + aInst.y * 0.17;
        gl_Position = projectionMatrix * viewMatrix * world;
      }
    `,fragmentShader:`
      ${xp}
      uniform float uMix;
      ${Op(o)}
      varying vec3 vWorld;
      varying vec3 vN;
      varying float vSeed;
      void main() {
        vec3 n = normalize(vN);
        vec3 view = normalize(uHead - vWorld);
        float rim = pow(1.0 - max(dot(n, view), 0.0), 4.0);
        float ang = atan(vWorld.z - vSeed, vWorld.x + vSeed);
        float above = vWorld.y - ${im.toFixed(2)};
        // Surf: a band of light where the swell meets the rock, breaking in pulses.
        float swell = 0.5 + 0.5 * sin(uFxTime * 0.9 + ang * 3.0 + vSeed);
        float surf = exp(-max(above, 0.0) * mix(5.0, 1.6, swell)) * step(-0.05, above);
        float foam = smoothstep(0.55, 0.8, texture2D(uNoise, vec2(ang * 2.0, vWorld.y * 0.4 - uFxTime * 0.05)).g) * surf;
        // Faint glowing lichen up the cliffs.
        float lichen = smoothstep(0.86, 0.92, texture2D(uNoise, vec2(ang * 3.0, vWorld.y * 0.25) + vSeed).g) * smoothstep(0.5, 3.0, above);
        vec3 c = uRock + uHaze * rim * 0.6;
        c += uSurf * surf * (0.5 + swell * 0.6 + uBeat * 0.3) + uFoam * foam * 0.8;
        c += uSurf * lichen * 0.35 * (0.6 + 0.4 * sin(uTime * 1.5 + vSeed * 9.0));
        float d = length(vWorld.xz - uHead.xz);
        c = mix(c, uHaze * 0.6, smoothstep(30.0, 90.0, d) * 0.5);
        gl_FragColor = vec4(c, uMix * revealMask(vWorld) * step(-0.3, above));
        #include <colorspace_fragment>
      }
    `,uniforms:Sp(e,o),transparent:!0}));return s.frustumCulled=!1,s.renderOrder=-30,s}function lm(){let e=[];for(let t=0;t<=18;t++){let n=t/18,r=.2*Math.sin(Math.PI*n**.75)**.85+(n>.9?-.03*(n-.9)*10:0);e.push(new B(Math.max(.004,r),n*2-1))}let t=new rc(e,14).rotateZ(-Math.PI/2).scale(1,1,.85).toNonIndexed(),n=e=>{let t=new ca;return t.setAttribute(`position`,new Xi(e,3)),t.computeVertexNormals(),t},r=[t,n([.15,.16,0,-.22,.16,0,-.3,.42,0]),n([-.85,0,0,-1.12,0,.32,-1.02,0,0,-.85,0,0,-1.02,0,0,-1.12,0,-.32]),n([.35,-.1,.12,.15,-.12,.14,.05,-.2,.32,.35,-.1,-.12,.05,-.2,-.32,.15,-.12,-.14])];for(let e of r)e.deleteAttribute(`uv`);return Kp(r)}var um=class{splash;group=new ti;mesh;air;list=[];m=new U;q=new ar;e=new Lr(0,0,0,`YZX`);s=new V(1.05,1.05,1.05);v=new V;nextSplash=0;spray;constructor(e,t,n){this.splash=n;for(let e=0;e<t;e++){let e=Ip(.5),t=Z(8,18),n=e+Math.PI/2+Z(-.5,.5),r=Z(9,14),i=Z(0,r),a=Z(2.4,3.2),o=2+Math.floor(Math.random()*2);for(let s=0;s<o;s++)this.list.push({x:Math.sin(e)*t+Z(-.8,.8),z:-Math.cos(e)*t+Z(-.8,.8),heading:n+Z(-.06,.06),speed:a*Z(.96,1.04),period:r,offset:i+s*Z(.25,.45),leapAt:Z(.42,.5),height:Z(1.1,1.9),splashedIn:!1,splashedOut:!1})}let r=lm();this.air=new Qa(new Float32Array(this.list.length),1),r.setAttribute(`aAir`,this.air);let i={uRim:X(`#4fd8ff`),uSpots:X(`#bff6ff`),uDeep:X(`#0a3a5a`)},a=new K({vertexShader:`
        ${xp}
        attribute float aAir;
        varying vec3 vWorld;
        varying vec3 vN;
        varying vec3 vLocal;
        varying float vAir;
        void main() {
          vec4 world = modelMatrix * instanceMatrix * vec4(position, 1.0);
          vWorld = world.xyz;
          vN = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * normal);
          vLocal = position;
          vAir = aAir;
          gl_Position = projectionMatrix * viewMatrix * world;
        }
      `,fragmentShader:`
        ${xp}
        uniform float uMix;
        ${Op(i)}
        varying vec3 vWorld;
        varying vec3 vN;
        varying vec3 vLocal;
        varying float vAir;
        void main() {
          vec3 n = normalize(vN);
          vec3 view = normalize(uHead - vWorld);
          float rim = pow(1.0 - abs(dot(n, view)), 2.5);
          // Plankton cling to its skin and stream off it in light.
          float spots = smoothstep(0.8, 0.9, texture2D(uNoise, vLocal.xz * 1.7 + vLocal.y).g);
          float streak = smoothstep(0.65, 1.0, texture2D(uNoise, vec2(vLocal.x * 0.5 + uFxTime * 0.6, vLocal.y * 3.0 + vLocal.z * 3.0)).r);
          float out_ = smoothstep(${im.toFixed(2)} - 0.05, ${im.toFixed(2)} + 0.08, vWorld.y);
          vec3 c = vec3(0.004, 0.012, 0.02) + uRim * rim * (0.9 + vAir * 0.8) + uSpots * (spots * 0.5 + streak * 0.35) * (0.4 + vAir);
          // Under the water it's only a soft glow moving beneath the surface.
          c = mix(uDeep * (rim + 0.25) * 0.5, c, out_);
          float a = mix(0.35 * (0.4 + rim), 1.0, out_);
          float d = distance(vWorld, uHead);
          a *= uMix * revealMask(vWorld) * smoothstep(1.0, 2.0, d) * exp(-d * 0.02);
          gl_FragColor = vec4(c, a);
          #include <colorspace_fragment>
        }
      `,uniforms:Sp(e,i),transparent:!0,depthWrite:!1});this.mesh=new oo(r,a,this.list.length),this.mesh.frustumCulled=!1,this.mesh.renderOrder=6,this.spray=new dm(e,360),this.group.add(this.mesh,this.spray.points)}update(e){let t=Y.uFxTime.value;this.list.forEach((e,n)=>{let r=((t+e.offset)/e.period%1+1)%1,i=e.speed*e.period,a=(r-.5)*i,o=e.x+Math.cos(e.heading)*a,s=e.z+Math.sin(e.heading)*a,c=1.4/e.period,l=(r-e.leapAt)/c,u=-1+.05*Math.sin(t*1.3+e.offset),d=u,f=0,p=0;if(l>-.35&&l<1.35){let t=e.height*Math.sin(Math.PI*Math.max(0,Math.min(1,l)));l<0?(d=u+(-.5-u)*(1+l/.35),f=.35):l>1?(d=u+(-.5-u)*(1-(l-1)/.35),f=-.35):(d=-.5+t,f=Math.atan(e.height*Math.PI*Math.cos(Math.PI*l)/(e.speed*1.4)),p=Math.sin(Math.PI*l)),l>=.08&&!e.splashedOut&&(e.splashedOut=!0,this.splashAt(o,s,.8,e.heading)),l>=.95&&!e.splashedIn&&(e.splashedIn=!0,this.splashAt(o,s,1,e.heading))}else l>2&&(e.splashedIn=!1,e.splashedOut=!1);let m=Math.min(1,r/.06,(1-r)/.06);this.v.set(o,d-(1-m)*1.5,s),this.e.set(0,-e.heading,f),this.q.setFromEuler(this.e),this.m.compose(this.v,this.q,this.s),this.mesh.setMatrixAt(n,this.m),this.air.setX(n,p)}),this.mesh.instanceMatrix.needsUpdate=!0,this.air.needsUpdate=!0;for(let t of this.splash)t.z>=0&&(t.z=t.z>4?-1:t.z+e);this.spray.update(e)}splashAt(e,t,n,r){this.splash[this.nextSplash++%this.splash.length].set(e,t,0,n),this.spray.burst(e,t,r,Math.round(40*n))}},dm=class{count;points;pos;vel;life;posAttr;lifeAttr;next=0;constructor(e,t){this.count=t,this.pos=new Float32Array(t*3),this.vel=new Float32Array(t*3),this.life=new Float32Array(t);let n=new ca;this.posAttr=new qi(this.pos,3).setUsage(bn),this.lifeAttr=new qi(this.life,1).setUsage(bn),n.setAttribute(`position`,this.posAttr),n.setAttribute(`aLife`,this.lifeAttr);let r=new K({vertexShader:`
        ${xp}
        uniform float uPointScale;
        attribute float aLife;
        varying float vLife;
        void main() {
          vLife = aLife;
          vec4 mv = viewMatrix * modelMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = aLife > 0.0 ? clamp(0.03 * uPointScale / max(0.1, -mv.z), 1.0, 24.0) : 0.0;
        }
      `,fragmentShader:`
        uniform float uMix;
        varying float vLife;
        void main() {
          float d = length(gl_PointCoord - 0.5) * 2.0;
          float a = (1.0 - smoothstep(0.0, 1.0, d)) * clamp(vLife, 0.0, 1.0) * uMix;
          gl_FragColor = vec4(mix(vec3(0.25, 0.8, 1.0), vec3(0.85, 1.0, 1.0), vLife) * a, a);
          #include <colorspace_fragment>
        }
      `,uniforms:Sp(e,{uPointScale:Ep}),transparent:!0,depthWrite:!1,blending:2});this.points=new jo(n,r),this.points.frustumCulled=!1,this.points.renderOrder=7}burst(e,t,n,r){for(let i=0;i<r;i++){let r=this.next++%this.count,i=n+Z(-Math.PI,Math.PI),a=Z(.3,1.4);this.pos.set([e+Z(-.2,.2),-.23,t+Z(-.2,.2)],r*3),this.vel.set([Math.cos(i)*a,Z(1.2,3.4),Math.sin(i)*a],r*3),this.life[r]=Z(.9,1.6)}}update(e){let t=!1;for(let n=0;n<this.count;n++)this.life[n]<=0||(t=!0,this.life[n]-=e*.9,this.vel[n*3+1]-=6*e,this.pos[n*3]+=this.vel[n*3]*e,this.pos[n*3+1]+=this.vel[n*3+1]*e,this.pos[n*3+2]+=this.vel[n*3+2]*e,this.pos[n*3+1]<im&&(this.life[n]=0));t&&(this.posAttr.needsUpdate=!0,this.lifeAttr.needsUpdate=!0)}};function fm(){let e={value:0},t={value:0},n=new ti,r=new V(0,1,0),i=new V().crossVectors(am,r).normalize(),a=am.clone().addScaledVector(i,-.016).addScaledVector(r,.009).normalize(),o=wp(t,`
    float h = dir.y;
    vec3 c = mix(uHorizon, uZenith, smoothstep(0.0, 0.5, h));
    vec3 bd = normalize(vec3(-0.5, 0.75, -0.45));
    float band = exp(-pow(dot(dir, bd), 2.0) * 9.0);
    float dust = skyNoise(vec2(atan(dir.x, -dir.z) / 6.2831 * 3.0, h * 2.0)).r;
    c += uBand * band * (0.25 + 0.4 * smoothstep(0.4, 0.8, dust)) * smoothstep(0.0, 0.2, h);
    c += vec3(0.85, 0.9, 1.0) * (stars(dir, 140.0, 0.3) * 0.8 + stars(dir, 60.0, 0.1) * 1.5) * smoothstep(0.0, 0.15, h) * (0.8 + band);
    // The moon: a thin crescent low over the water, with a soft halo.
    float md = acos(clamp(dot(dir, uMoon), -1.0, 1.0));
    float disc = smoothstep(0.03, 0.027, md);
    float lit = disc * smoothstep(0.026, 0.031, acos(clamp(dot(dir, uShadow), -1.0, 1.0)));
    float mottle = 0.75 + 0.25 * texture2D(uNoise, dir.xy * 9.0).r;
    c = mix(c, uHorizon * 0.5, disc * 0.85);
    c += uMoonCol * (lit * mottle * 1.6 + exp(-md * 30.0) * 0.12 + exp(-md * 7.0) * 0.04);
    c += vec3(0.9, 0.95, 1.0) * (meteor(dir, 0.0) + meteor(dir, 1.0)) * 1.4;
    c = mix(c, uHorizon * 0.4, smoothstep(0.0, -0.05, h));
    col = c;
  `,{uZenith:X(`#010309`),uHorizon:X(`#04121c`),uBand:X(`#2a4a8a`),uMoonCol:X(`#cfe6ff`),uMoon:{value:am.clone()},uShadow:{value:a}},kp+Ap);n.add(o);let s=Array.from({length:om},()=>new Cr(0,0,-1,0)),c=Dp(e,240,1,`
    float t = uFxTime;
    vec3 view = normalize(vWorld - uHead);
    // Ripple normals bend the reflection of the sky.
    vec2 rn = vec2(texture2D(uNoise, wp.xz * 0.15 + t * 0.03).g, texture2D(uNoise, wp.xz * 0.15 - t * 0.025 + 0.5).g) - 0.5;
    vec3 r = reflect(view, normalize(vec3(rn.x * 0.12, 1.0, rn.y * 0.12)));
    vec3 c = uWater;
    c += vec3(0.8, 0.85, 1.0) * stars(normalize(r), 140.0, 0.3) * 0.5;
    float fres = pow(1.0 - abs(view.y), 5.0);
    c += uHorizon * fres * 0.8;
    // The moon's path: glints on the ripples that face it.
    float glint = pow(max(dot(normalize(r), uMoon), 0.0), 700.0);
    float sparkleM = smoothstep(0.55, 0.85, texture2D(uNoise, wp.xz * 0.6 + vec2(t * 0.04, -t * 0.03)).g);
    c += uMoonCol * glint * (0.4 + sparkleM * 2.2);
    // Rolling waves of light.
    float w = waves(wp.xz, t);
    float near = smoothstep(1.2, 4.0, dist);
    float sparkle = smoothstep(0.8, 0.9, texture2D(uNoise, wp.xz * 0.9 + t * 0.05).g);
    c += uGlow * w * near * (1.3 + uBeat * 0.5 + uIntensity * 0.5) * exp(-dist * 0.045);
    c += uSpark * w * sparkle * near * 1.3 * exp(-dist * 0.04);
    c += mix(uGlow, uSpark, 0.4) * splashes(wp.xz);
    // A ring of light spreads from your feet on each beat.
    float ring = fract(dist * 0.5 - t * 0.6);
    c += uGlow * smoothstep(0.93, 1.0, ring) * uBeat * 0.35 * exp(-dist * 0.45) * smoothstep(0.6, 1.4, dist);
    col = c;
    a = 1.0 - smoothstep(90.0, 118.0, dist);
  `,{uWater:X(`#010409`),uHorizon:X(`#04121c`),uGlow:X(`#1fb6ff`),uSpark:X(`#bff6ff`),uMoonCol:X(`#cfe6ff`),uMoon:{value:am.clone()}},``,sm+kp);c.material.uniforms.uSplash={value:s},c.position.y=im,n.add(c),n.add(cm(e,16)),n.add(Lp($p(e,{count:22,radius:[3,24],height:[-3.4,-.7],size:[.25,.6],colors:[`#5ee0f0`,`#8fb4ff`,`#bff6ff`],rise:.04,clearAhead:.3,glow:.55}),22,10));let l=new um(e,5,s);return n.add(l.group),n.add(Tp(e,{count:900,min:[-18,-.2,-18],max:[18,1.6,18],clearRadius:1,colors:[`#1fb6ff`,`#5ee0f0`,`#bff6ff`],size:[.008,.025],velocity:[0,.03,.25],swirl:.2,twinkle:.95,beat:.8})),n.add(Tp(e,{count:160,min:[-10,.8,-10],max:[10,5,10],clearRadius:1.4,colors:[`#c9ffb0`,`#7affc8`],size:[.02,.045],velocity:[.05,.02,.03],swirl:.9,twinkle:.9,beat:.3})),{id:`tide`,group:n,mix:e,skyMix:t,sky:o,update(e){n.visible&&l.update(e)}}}function pm(){let e={value:0},t={value:0},n=new ti,r=wp(t,`
    float h = dir.y;
    float az = atan(dir.x, -dir.z);
    vec3 c = mix(uHorizon, uZenith, smoothstep(-0.02, 0.55, abs(h)));
    float glow = exp(-abs(h) * 14.0) * (0.75 + 0.25 * cos(az));
    c += uGlow * glow * (0.16 + uBeat * 0.04);
    // A slow ribbon of light far off.
    float ribbon = exp(-pow((h - 0.16 - sin(az * 2.0 + uFxTime * 0.03) * 0.04) * 22.0, 2.0));
    ribbon *= 0.5 + 0.5 * skyNoise(vec2(az / 6.2831 * 2.0 + uFxTime * 0.004, 0.5)).r;
    c += uRibbon * ribbon * 0.07;
    c += vec3(0.85, 0.85, 1.0) * stars(dir, 120.0, 0.2) * smoothstep(0.08, 0.4, h) * 0.8;
    col = c;
  `,{uZenith:X(`#020108`),uHorizon:X(`#05030f`),uGlow:X(`#6a3fd0`),uRibbon:X(`#2fd6ff`)},kp);n.add(r);let i=Dp(e,200,1,`
    vec3 view = normalize(vWorld - uHead);
    float fres = pow(1.0 - abs(view.y), 5.0);
    float grid = smoothstep(0.485, 0.5, max(abs(fract(wp.x * 0.5) - 0.5), abs(fract(wp.z * 0.5) - 0.5)));
    vec3 c = uFloor + uGlow * fres * 0.07;
    c += uGlow * grid * 0.12 * exp(-dist * 0.12);
    c += uGlow * 0.1 * exp(-dist * 0.6);
    col = c;
    a = 1.0 - smoothstep(60.0, 95.0, dist);
  `,{uFloor:X(`#020108`),uGlow:X(`#8a5ff0`)});return n.add(i),n.add($p(e,{count:14,radius:[6,28],height:[-3,14],size:[.3,.9],colors:[`#5ee0f0`,`#b07bff`,`#ff7ad9`],rise:.15,clearAhead:.9,glow:.8})),n.add(Hp(e,2)),n.add(Vp(e,8,[3,10],[.5,3.5])),n.add(Tp(e,{count:700,min:[-14,.2,-14],max:[14,7,14],clearRadius:1.2,colors:[`#c38bff`,`#8fb4ff`,`#ffc9a3`],size:[.015,.04],velocity:[.03,.05,.02],swirl:.4,twinkle:.6,beat:.3})),{id:`lobby`,group:n,mix:e,skyMix:t,sky:r,update(){}}}var mm=new V(-.78,.26,-.57).normalize(),hm=mm.clone().add(new V(.1,.17,.02)).normalize();function gm(e){let t=new ti,n=mm.clone().multiplyScalar(72),r={uSun:{value:hm.clone()},uA:X(`#ff7ad9`),uB:X(`#3fd6c8`),uAir:X(`#5ee0f0`),uPlanetC:{value:n.clone()}},i=new G(new cc(15,64,32),new K({vertexShader:`
      varying vec3 vN;
      varying vec3 vWorld;
      varying vec3 vLocal;
      void main() {
        vN = normalize(mat3(modelMatrix) * normal);
        vLocal = normalize(position);
        vec4 world = modelMatrix * vec4(position, 1.0);
        vWorld = world.xyz;
        gl_Position = projectionMatrix * viewMatrix * world;
      }
    `,fragmentShader:`
      ${xp}
      uniform float uMix;
      ${Op(r)}
      varying vec3 vN;
      varying vec3 vWorld;
      varying vec3 vLocal;
      void main() {
        vec3 n = normalize(vN);
        vec3 view = normalize(uHead - vWorld);
        float lit = smoothstep(-0.02, 0.5, dot(n, uSun));
        // Cloud bands by latitude, swirled a little and drifting.
        float lat = vLocal.y;
        float lon = atan(vLocal.z, vLocal.x) / 6.2831;
        float swirl = texture2D(uNoise, vec2(lon * 3.0 + uFxTime * 0.002, lat * 2.0)).r;
        float bands = texture2D(uNoise, vec2(lat * 3.0 + swirl * 0.08, 0.37)).g;
        vec3 cloud = mix(uA, uB, smoothstep(0.35, 0.7, bands)) * (0.3 + 0.5 * swirl);
        float limb = pow(1.0 - max(dot(n, view), 0.0), 6.0);
        // Backlit: a thin ring of air glows round the edge, brightest on the side the sun is behind.
        float sunward = smoothstep(-0.4, 0.4, dot(n, uSun));
        vec3 c = cloud * lit * 0.4 + uAir * limb * (0.015 + sunward * 0.9);
        // The night side keeps a faint storm-glow.
        c += uA * 0.025 * smoothstep(0.7, 0.9, swirl) * (1.0 - lit);
        gl_FragColor = vec4(c, uMix * revealMask(vWorld));
        #include <colorspace_fragment>
      }
    `,uniforms:Sp(e,r),transparent:!0}));i.position.copy(n),i.renderOrder=-60,i.frustumCulled=!1,t.add(i);let a={uSun:{value:hm.clone()},uRing:X(`#ffd6f5`),uRing2:X(`#8fe8ff`),uPlanetC:{value:n.clone()},uR:{value:15}},o=new G(new ac(20.25,36,160,1),new K({vertexShader:`
      varying vec3 vWorld;
      varying float vR;
      void main() {
        vR = length(position.xy);
        vec4 world = modelMatrix * vec4(position, 1.0);
        vWorld = world.xyz;
        gl_Position = projectionMatrix * viewMatrix * world;
      }
    `,fragmentShader:`
      ${xp}
      uniform float uMix;
      ${Op(a)}
      varying vec3 vWorld;
      varying float vR;
      void main() {
        float k = (vR / uR - 1.35) / 1.05;
        float bands = texture2D(uNoise, vec2(k * 2.5, 0.61)).g;
        float gaps = smoothstep(0.02, 0.0, abs(k - 0.62)) + smoothstep(0.012, 0.0, abs(k - 0.3));
        float dens = smoothstep(0.0, 0.05, k) * smoothstep(1.0, 0.85, k) * (0.35 + 0.65 * bands) * (1.0 - gaps * 0.9);
        // The planet's shadow across the rings, opposite the sun.
        vec3 toP = vWorld - uPlanetC;
        float behind = dot(toP, -uSun);
        float off = length(toP + uSun * behind);
        float shade = behind > 0.0 ? smoothstep(uR * 0.9, uR * 1.05, off) : 1.0;
        vec3 c = mix(uRing2, uRing, bands) * (0.04 + 0.16 * shade) * (1.0 + uBeat * 0.15);
        gl_FragColor = vec4(c, dens * 0.55 * uMix * revealMask(vWorld));
        #include <colorspace_fragment>
      }
    `,uniforms:Sp(e,a),transparent:!0,depthWrite:!1,side:2}));return o.position.copy(n),o.rotation.set(-1.25,.35,.2),o.renderOrder=-55,o.frustumCulled=!1,t.add(o),t}function _m(){let e=[];for(let t=0;t<=24;t++){let n=t/24,r=.21*Math.sin(Math.PI*n**.62)**.75;e.push(new B(Math.max(.006,r),n*2-1))}let t=new rc(e,20).rotateZ(-Math.PI/2).scale(1,.9,1).toNonIndexed(),n=e=>{let t=new ca;return t.setAttribute(`position`,new Xi(e,3)),t.computeVertexNormals(),t},r=[t,n([.42,-.1,.15,.2,-.11,.17,-.05,-.24,.78,.42,-.1,-.15,-.05,-.24,-.78,.2,-.11,-.17]),n([-.88,0,0,-1.18,.02,.5,-1.06,0,0,-.88,0,0,-1.06,0,0,-1.18,.02,-.5])];for(let e of r)e.deleteAttribute(`uv`);return Kp(r)}function vm(e,t){let n=new Float32Array(t*4);for(let e=0;e<t;e++)n.set([Z(26,40),Z(3,13),Z(.018,.028)*(e%2?-1:1),e/t*Math.PI*2+Z(0,1)],e*4);let r=new G(zp(_m(),t,{aInst:[n,4]}),Bp(e,`
    attribute vec4 aInst;
    varying vec3 vLocal;
    varying float vFres;
    varying float vAlpha;
    void main() {
      float t = uFxTime;
      float ang = aInst.w + t * aInst.z;
      vec3 centre = vec3(sin(ang) * aInst.x, aInst.y + sin(t * 0.07 + aInst.w) * 2.0, -cos(ang) * aInst.x);
      vec3 fwd = normalize(vec3(cos(ang), 0.06 * cos(t * 0.07 + aInst.w), sin(ang)) * sign(aInst.z));
      vec3 side = normalize(cross(fwd, vec3(0.0, 1.0, 0.0)));
      vec3 up = cross(side, fwd);
      vec3 p = position;
      // A slow fluke stroke: the tail end bends most; the long fins rise and fall.
      float stroke = sin(t * 0.55 + aInst.w);
      float tail = smoothstep(0.3, -1.1, p.x);
      p.y += stroke * 0.18 * tail * tail;
      float fin = smoothstep(0.2, 0.75, abs(p.z)) * step(-0.5, p.x);
      p.y += sin(t * 0.55 + aInst.w + 1.2) * 0.12 * fin;
      vec3 local = (fwd * p.x + up * p.y + side * p.z) * 7.0;
      vec4 world = modelMatrix * vec4(centre + local, 1.0);
      vec3 n = normalize(fwd * normal.x + up * normal.y + side * normal.z);
      vFres = pow(1.0 - abs(dot(n, normalize(uHead - world.xyz))), 2.0);
      float d = distance(world.xyz, uHead);
      vAlpha = uMix * revealMask(world.xyz) * (0.5 + 0.5 * exp(-d * 0.02));
      vLocal = position;
      gl_Position = projectionMatrix * viewMatrix * world;
    }
  `,`
    varying vec3 vLocal;
    varying float vFres;
    varying float vAlpha;
    void main() {
      // Freckles of light that brighten in a wave running nose to tail.
      float spots = smoothstep(0.82, 0.9, texture2D(uNoise, vLocal.xz * 2.3 + vLocal.y * 1.7).g);
      float wave = 0.4 + 0.6 * pow(0.5 + 0.5 * sin(vLocal.x * 6.0 + uFxTime * 1.4), 4.0);
      // Grooves along the throat and belly.
      float grooves = smoothstep(0.9, 1.0, cos(vLocal.z * 90.0)) * smoothstep(0.0, -0.12, vLocal.y) * smoothstep(-0.3, 0.6, vLocal.x);
      vec3 c = uRim * vFres * 0.6 + uSpot * spots * wave * 1.8 + uBelly * grooves * 0.4 + uRim * 0.04;
      float a = (vFres * 0.6 + spots * wave * 1.3 + grooves * 0.3 + 0.04) * vAlpha;
      gl_FragColor = vec4(c * vAlpha * (1.0 + uBeat * 0.2), a);
      #include <colorspace_fragment>
    }
  `,{uRim:X(`#7fd6ff`),uSpot:X(`#ffd6f5`),uBelly:X(`#b07bff`)},2));return r.frustumCulled=!1,r.renderOrder=3,r}function ym(e,t){let n=new nc(1,0).scale(.55,1.35,.6).toNonIndexed();n.computeVertexNormals(),n.deleteAttribute(`uv`);let r=new Float32Array(n.attributes.position.count*3);for(let e=0;e<r.length;e+=9)r.set([1,0,0,0,1,0,0,0,1],e);n.setAttribute(`aBary`,new qi(r,3));let i=new Float32Array(t*4),a=new Float32Array(t*4);for(let e=0;e<t;e++){let n=Ip(.45),r=e<t/5?Z(6,10):Z(11,36);i.set([Math.sin(n)*r,Z(-6,14),-Math.cos(n)*r,Z(.15,.7)*(r>8?2.2:1)],e*4);let o=new V(Z(-1,1),Z(-1,1),Z(-1,1)).normalize();a.set([o.x,o.y,o.z,Z(.05,.2)*(Math.random()<.5?-1:1)],e*4)}let o=zp(n,t,{aInst:[i,4],aSpin:[a,4]}),s={uA:X(`#ff6bd6`),uB:X(`#5ee0f0`),uDark:X(`#06030c`)},c=new G(o,new K({vertexShader:`
      ${xp}
      attribute vec4 aInst;
      attribute vec4 aSpin;
      attribute vec3 aBary;
      varying vec3 vWorld;
      varying vec3 vN;
      varying vec3 vBary;
      varying float vSeed;
      vec3 rot(vec3 v, vec3 k, float a) {
        return v * cos(a) + cross(k, v) * sin(a) + k * dot(k, v) * (1.0 - cos(a));
      }
      void main() {
        float a = uFxTime * aSpin.w + aInst.x;
        vec3 p = rot(position, aSpin.xyz, a) * aInst.w;
        vec3 at = aInst.xyz + vec3(0.0, sin(uFxTime * 0.1 + aInst.z) * 0.4, 0.0);
        vec4 world = modelMatrix * vec4(at + p, 1.0);
        vWorld = world.xyz;
        vN = normalize(mat3(modelMatrix) * rot(normal, aSpin.xyz, a));
        vSeed = fract(aInst.x * 0.137 + aInst.z * 0.071);
        vBary = aBary;
        gl_Position = projectionMatrix * viewMatrix * world;
      }
    `,fragmentShader:`
      ${xp}
      uniform float uMix;
      ${Op(s)}
      varying vec3 vWorld;
      varying vec3 vN;
      varying vec3 vBary;
      varying float vSeed;
      void main() {
        vec3 n = normalize(vN);
        vec3 view = normalize(uHead - vWorld);
        float facing = abs(dot(n, view));
        // Light caught inside: facets turned away glow, those facing you stay dark glass.
        float inner = pow(1.0 - facing, 2.0);
        float glint = pow(max(dot(reflect(-view, n), vec3(0.0, 0.0, -1.0)), 0.0), 30.0);
        vec3 tint = mix(uA, uB, vSeed);
        float edge = 1.0 - smoothstep(0.0, 0.035, min(vBary.x, min(vBary.y, vBary.z)));
        vec3 c = uDark + tint * (inner * inner * 0.35 + edge * (0.9 + uBeat * 0.4) + 0.02) + vec3(1.0) * glint * 0.3;
        float d = distance(vWorld, uHead);
        c *= 0.4 + 0.6 * exp(-d * 0.03);
        gl_FragColor = vec4(c, uMix * revealMask(vWorld) * smoothstep(1.2, 2.5, d));
        #include <colorspace_fragment>
      }
    `,uniforms:Sp(e,s),transparent:!0}));return c.frustumCulled=!1,c.renderOrder=2,Lp(c,t,Math.ceil(t/2))}function bm(){let e={value:0},t={value:0},n=new ti,r=wp(t,`
    vec2 uv = vec2(atan(dir.x, -dir.z) / 6.2831, asin(clamp(dir.y, -1.0, 1.0)) / 3.14159);
    vec4 w = skyNoise(uv * vec2(2.0, 1.2) + uFxTime * 0.001);
    vec2 warp = uv * vec2(2.0, 1.6) + (w.rg - 0.5) * 0.25;
    // Most of the sky is dark; the nebula gathers in a few great clouds.
    float mask = smoothstep(0.5, 0.82, skyNoise(uv + 0.13).r);
    float fil = pow(skyNoise(warp).b, 8.0);
    float fil2 = pow(skyNoise(warp * 2.0 + 0.31).b, 10.0);
    float cloud = smoothstep(0.5, 0.95, skyNoise(warp * 0.5 + 0.6).r);
    float hue = skyNoise(uv + 0.2).r;
    vec3 tint = mix(uTeal, uMagenta, smoothstep(0.4, 0.6, hue));
    vec3 c = uSpace;
    c += tint * cloud * mask * 0.07;
    c += tint * (fil * 1.2 + fil2 * 0.9) * mask * (0.6 + uIntensity * 0.35 + uBeat * 0.12);
    c += vec3(0.85, 0.85, 1.0) * (stars(dir, 150.0, 0.32) * 0.7 + stars(dir, 60.0, 0.1) * 1.4);
    c += vec3(1.0, 0.9, 1.0) * (meteor(dir, 0.0) + meteor(dir, 2.0)) * 1.3;
    // The far sun: a small hard point with a soft halo.
    float sd = max(dot(dir, uSun), 0.0);
    c += vec3(1.0, 0.95, 0.9) * (pow(sd, 4000.0) * 3.0 + pow(sd, 300.0) * 0.12 + pow(sd, 40.0) * 0.03);
    col = c;
  `,{uSpace:X(`#010106`),uTeal:X(`#1fd6c8`),uMagenta:X(`#ff3fc8`),uSun:{value:hm.clone()}},kp+Ap);return n.add(r),n.add(jp(e,`#ff6bd6`)),n.add(gm(e)),n.add(vm(e,3)),n.add(ym(e,30)),n.add($p(e,{count:14,radius:[12,40],height:[-12,26],size:[1.4,3.6],colors:[`#ff6bd6`,`#5ee0f0`,`#b07bff`,`#7affc8`],rise:.12,clearAhead:.4,glow:.8})),n.add(Tp(e,{count:1e3,min:[-20,-10,-20],max:[20,14,20],clearRadius:1.5,colors:[`#ff6bd6`,`#5ee0f0`,`#ffffff`,`#b07bff`],size:[.008,.035],velocity:[.04,.02,.05],swirl:.6,twinkle:.85,beat:.6})),{id:`ember`,group:n,mix:e,skyMix:t,sky:r,update(){}}}function xm(e){let t=new Bo(.018,.04,1,6,10,!0).translate(0,.5,0),n=e===`bulb`?new cc(.075,12,8).translate(0,1.02,0):new cc(.5,20,8,0,Math.PI*2,0,Math.PI*.5).scale(1,.38,1).translate(0,.98,0),r=(e,t)=>{let n=e.attributes.position.count;return e.setAttribute(`aPart`,new qi(new Float32Array(n).fill(t),1)),e.deleteAttribute(`uv`),e};return Kp([r(t,0),r(n,1)])}function Sm(e,t,n,r){let i=xm(n.kind),a=new wl;a.index=i.index;for(let e of Object.keys(i.attributes))a.setAttribute(e,i.attributes[e]);a.instanceCount=t;let o=new Float32Array(t*4),s=new Float32Array(t*3),c=r.map(e=>new W(e)),l=(e,t)=>e+Math.random()*(t-e);for(let e=0;e<t;e++){let t=0;do t=l(-Math.PI,Math.PI);while(Math.abs(t)<.3&&Math.random()<.9);let r=l(n.stem[0],n.stem[1]);o.set([Math.sin(t)*r,-Math.cos(t)*r,l(n.height[0],n.height[1]),l(0,100)],e*4);let i=c[e%c.length];s.set([i.r,i.g,i.b],e*3)}a.setAttribute(`aInst`,new Qa(o,4)),a.setAttribute(`aColor`,new Qa(s,3));let u={uStem:X(`#03140f`)},d=new G(a,new K({vertexShader:`
      ${xp}
      attribute float aPart;
      attribute vec4 aInst;
      attribute vec3 aColor;
      varying float vPart;
      varying float vY;
      varying float vUnder;
      varying float vDist;
      varying float vBreath;
      varying vec3 vColor;
      varying vec3 vWorld;
      void main() {
        float h = aInst.z;
        vec3 p = position;
        float k = clamp(p.y, 0.0, 1.1);
        p.y *= h;
        if (aPart > 0.5) {
          p.y = h + (position.y - 1.0) * (${n.kind===`cap`?`0.5 + h * 0.5`:`h * 0.6 + 0.4`});
          p.xz *= ${n.kind===`cap`?`0.5 + h * 0.5`:`1.0`};
        }
        float t = uFxTime * 0.6 + aInst.w;
        vec2 sway = vec2(sin(t + aInst.w), cos(t * 0.8 + aInst.w * 1.3)) * 0.08 * h * k * k;
        p.xz += sway;
        vec4 world = modelMatrix * vec4(p + vec3(aInst.x, 0.0, aInst.y), 1.0);
        vWorld = world.xyz;
        vPart = aPart;
        vY = k;
        vUnder = aPart > 0.5 ? step(normal.y, 0.15) : 0.0;
        vDist = distance(world.xz, uHead.xz);
        vBreath = 0.5 + 0.5 * sin(uFxTime * 1.3 + aInst.w * 7.0);
        vColor = aColor;
        gl_Position = projectionMatrix * viewMatrix * world;
      }
    `,fragmentShader:`
      ${xp}
      uniform float uMix;
      ${Op(u)}
      varying float vPart;
      varying float vY;
      varying float vUnder;
      varying float vDist;
      varying float vBreath;
      varying vec3 vColor;
      varying vec3 vWorld;
      void main() {
        vec3 c;
        float glow = 0.55 + 0.45 * vBreath + uBeat * 0.4 + uIntensity * 0.3;
        if (vPart < 0.5) {
          c = uStem * 0.5 + vColor * pow(vY, 4.0) * 0.25 * glow;
        } else {
          ${n.kind===`cap`?`c = mix(vColor * 0.015, vColor * 1.1 * glow, vUnder) + vColor * 0.02;`:`c = mix(vColor, vec3(1.0), 0.35) * 1.2 * glow;`}
        }
        float fog = exp(-vDist * 0.045);
        gl_FragColor = vec4(c * fog, uMix * revealMask(vWorld));
        #include <colorspace_fragment>
      }
    `,uniforms:Sp(e,u),transparent:!0,side:2}));return d.frustumCulled=!1,d.renderOrder=-20,d}function Cm(e,t){let n=new ti,r=[];for(let e=0;e<t;e++){let e=Ip(.4),t=Z(7.5,22);r.push([Math.sin(e)*t,-Math.cos(e)*t,Z(5.5,9),Z(0,100),Z(2.2,3.8)])}let i=new Bo(.07,.32,1,10,12,!0).translate(0,.5,0);i.deleteAttribute(`uv`);let a=new Float32Array(t*4);r.forEach(([e,t,n,r],i)=>a.set([e,t,n,r],i*4));let o=zp(i,t,{aInst:[a,4]}),s={uBark:X(`#020906`),uVein:X(`#3dffb0`)},c=new G(o,new K({vertexShader:`
      ${xp}
      attribute vec4 aInst;
      varying vec3 vWorld;
      varying vec3 vLocal;
      void main() {
        vec3 p = position;
        float h = aInst.z;
        // A trunk with a slight lean and a twist of sway at the top.
        float k = p.y;
        p.y *= h;
        p.x += sin(aInst.w) * 0.5 * k * k + sin(uFxTime * 0.3 + aInst.w) * 0.05 * k * k;
        p.z += cos(aInst.w) * 0.5 * k * k;
        vec4 world = modelMatrix * vec4(p + vec3(aInst.x, 0.0, aInst.y), 1.0);
        vWorld = world.xyz;
        vLocal = position;
        gl_Position = projectionMatrix * viewMatrix * world;
      }
    `,fragmentShader:`
      ${xp}
      uniform float uMix;
      ${Op(s)}
      varying vec3 vWorld;
      varying vec3 vLocal;
      void main() {
        vec2 uv = vec2(atan(vLocal.z, vLocal.x) * 0.95, vWorld.y * 0.3);
        float cell = texture2D(uNoise, uv * vec2(1.0, 0.6) + vWorld.x * 0.01).a;
        float vein = (1.0 - smoothstep(0.0, 0.03, cell)) * 0.5;
        float breathe = 0.5 + 0.5 * sin(uFxTime * 0.9 - vWorld.y * 0.8);
        vec3 c = uBark + uVein * vein * breathe * (0.6 + uBeat * 0.4);
        float d = length(vWorld.xz - uHead.xz);
        c *= exp(-d * 0.03);
        gl_FragColor = vec4(c, uMix * revealMask(vWorld));
        #include <colorspace_fragment>
      }
    `,uniforms:Sp(e,s),transparent:!0,side:2}));c.frustumCulled=!1,c.renderOrder=-22,n.add(c);let l=t*70*40,u=new Float32Array(l*4),d=new Float32Array(l*4),f=0;for(let[e,t,n,i,a]of r)for(let r=0;r<70;r++){let r=Z(0,Math.PI*2),o=a*(Math.random()<.75?Z(.7,1):Z(.2,.7)),s=(n-.3)*Z(.55,1);for(let c=0;c<40;c++,f++)u.set([e+Math.sin(i)*.5+Math.cos(r)*o,t+Math.cos(i)*.5+Math.sin(r)*o,n*.93+a*.32*(1-(o/a)**2)-.1,i],f*4),d.set([r,s,c/39,Z(0,1)],f*4)}let p=new ca;p.setAttribute(`position`,new qi(new Float32Array(l*3),3)),p.setAttribute(`aTree`,new qi(u,4)),p.setAttribute(`aStrand`,new qi(d,4));let m={uTop:X(`#4dffc3`),uTip:X(`#ff7ad9`),uPointScale:Ep},h=new jo(p,new K({vertexShader:`
      ${xp}
      uniform float uMix;
      ${Op(m)}
      attribute vec4 aTree;
      attribute vec4 aStrand;
      varying vec3 vColor;
      varying float vAlpha;
      void main() {
        float idx = aStrand.z;
        float t = uFxTime;
        vec3 p = aTree.xyz - vec3(0.0, idx * aStrand.y, 0.0);
        float sw = idx * idx;
        p.x += sin(t * 0.5 + aTree.w + aStrand.x * 3.0) * 0.28 * sw + sin(t * 1.7 + aStrand.x * 9.0) * 0.03 * sw;
        p.z += cos(t * 0.42 + aTree.w * 1.3 + aStrand.x * 2.0) * 0.28 * sw;
        // Pulses of light run down each strand.
        float pulse = smoothstep(0.09, 0.0, abs(fract(t * 0.12 + aTree.w * 0.1 + aStrand.x * 0.16) - idx));
        float tip = smoothstep(0.96, 1.0, idx);
        vec4 world = modelMatrix * vec4(p, 1.0);
        float d = distance(world.xyz, uHead);
        vColor = mix(uTop, uTip, smoothstep(0.3, 1.0, idx)) * (0.7 + pulse * 1.8 + tip * 1.4 + uBeat * 0.3);
        vAlpha = uMix * revealMask(world.xyz) * exp(-d * 0.025) * smoothstep(0.8, 1.6, d) * (0.6 + 0.4 * fract(aStrand.w * 13.0));
        vec4 mv = viewMatrix * world;
        gl_Position = projectionMatrix * mv;
        gl_PointSize = clamp((0.07 + tip * 0.07 + pulse * 0.03) * uPointScale / max(0.1, -mv.z), 1.5, 40.0);
      }
    `,fragmentShader:`
      varying vec3 vColor;
      varying float vAlpha;
      void main() {
        float d = length(gl_PointCoord - 0.5) * 2.0;
        float a = (1.0 - smoothstep(0.0, 1.0, d)) * vAlpha;
        a *= a + 0.3;
        gl_FragColor = vec4(vColor * a, a);
        #include <colorspace_fragment>
      }
    `,uniforms:Sp(e,m),transparent:!0,depthWrite:!1,blending:2}));return h.frustumCulled=!1,h.renderOrder=5,n.add(h),n}function wm(e,t){let n=new ic(1,1,2,1).rotateX(-Math.PI/2),r=new Float32Array(t*4),i=new Float32Array(t*4);for(let e=0;e<t;e++){let t=Ip(.6),n=Z(2.2,8);r.set([Math.sin(t)*n,Z(.5,2.8),-Math.cos(t)*n,Z(0,100)],e*4),i.set([Z(.8,2.2),Z(.35,.7),Z(.07,.13),Math.random()],e*4)}let a=new G(zp(n,t,{aInst:[r,4],aParams:[i,4]}),Bp(e,`
    attribute vec4 aInst;
    attribute vec4 aParams;
    varying vec2 vUv;
    varying float vAlpha;
    varying float vHue;
    void main() {
      float R = aParams.x;
      float t = uFxTime * aParams.y + aInst.w;
      vec3 centre = aInst.xyz + vec3(sin(t * 0.7) * R, sin(t * 1.3) * 0.35 + sin(t * 0.37) * 0.3, cos(t * 0.53) * R);
      vec3 vel = vec3(cos(t * 0.7) * 0.7 * R, cos(t * 1.3) * 0.45, -sin(t * 0.53) * 0.53 * R);
      vec3 fwd = normalize(vel + vec3(0.0001));
      vec3 side = normalize(cross(fwd, vec3(0.0, 1.0, 0.0)));
      vec3 up = cross(side, fwd);
      // Wings beat fast, with a glide now and then.
      float glide = smoothstep(0.6, 0.9, sin(t * 0.9 + aInst.w));
      float flap = mix(sin(uFxTime * 17.0 + aInst.w * 7.0) * 0.85 + 0.25, 0.15, glide);
      float ax = abs(position.x);
      vec3 local = side * sign(position.x) * ax * cos(flap) + up * ax * sin(flap) - fwd * position.z;
      vec4 world = modelMatrix * vec4(centre + local * aParams.z, 1.0);
      float d = distance(world.xyz, uHead);
      vAlpha = uMix * revealMask(world.xyz) * smoothstep(0.5, 1.0, d) * exp(-d * 0.04);
      vUv = position.xz;
      vHue = aParams.w;
      gl_Position = projectionMatrix * viewMatrix * world;
    }
  `,`
    varying vec2 vUv;
    varying float vAlpha;
    varying float vHue;
    float ell(vec2 p, vec2 c, vec2 r) { return length((p - c) / r); }
    void main() {
      vec2 p = vec2(abs(vUv.x), vUv.y);
      // Forewing swept forward, rounder hindwing behind it.
      float fore = ell(p, vec2(0.24, -0.1), vec2(0.26, 0.16));
      float hind = ell(p, vec2(0.17, 0.14), vec2(0.17, 0.15));
      float wing = min(fore, hind);
      if (wing > 1.0 && p.x > 0.03) discard;
      float body = smoothstep(0.03, 0.0, p.x) * smoothstep(0.32, 0.2, abs(vUv.y));
      float edge = smoothstep(0.75, 1.0, wing) * step(wing, 1.0);
      float eye = smoothstep(0.07, 0.04, length(p - vec2(0.3, -0.08))) + smoothstep(0.05, 0.03, length(p - vec2(0.18, 0.16))) * 0.7;
      float vein = smoothstep(0.92, 1.0, cos(atan(p.y + 0.02, p.x) * 14.0)) * 0.35 * step(wing, 1.0);
      vec3 tint = vHue < 0.4 ? uA : vHue < 0.75 ? uB : uC;
      vec3 c = tint * (edge * 1.3 + eye * 1.8 + vein + 0.12 * step(wing, 1.0)) + vec3(1.0) * eye * 0.4 + tint * body * 0.8;
      float a = (edge + eye + vein + 0.12 * step(wing, 1.0) + body) * vAlpha;
      gl_FragColor = vec4(c * vAlpha, a);
      #include <colorspace_fragment>
    }
  `,{uA:X(`#5ee0f0`),uB:X(`#ff7ad9`),uC:X(`#c9ffb0`)},2));return a.frustumCulled=!1,a.renderOrder=6,Lp(a,t,Math.ceil(t/2))}function Tm(){let e={value:0},t={value:0},n=new ti,r=wp(t,`
    float h = dir.y;
    vec3 c = mix(uLow, uHigh, smoothstep(-0.05, 0.6, h));
    float az = atan(dir.x, -dir.z) / 6.2831;
    float mist = skyNoise(vec2(az * 3.0 + uFxTime * 0.002, h * 2.0)).r;
    c += uMist * smoothstep(0.5, 0.85, mist) * exp(-abs(h - 0.05) * 6.0) * 0.5;
    c += vec3(0.7, 1.0, 0.9) * stars(dir, 120.0, 0.12) * smoothstep(0.25, 0.6, h) * 0.6;
    // The aurora: folded curtains of light, rays rising from a wavering hem.
    for (int i = 0; i < 2; i++) {
      float fi = float(i);
      float hem = 0.2 + fi * 0.13 + 0.06 * sin(az * 6.2831 * (2.0 + fi) + uFxTime * (0.04 + fi * 0.02) + fi * 2.0)
        + 0.025 * sin(az * 6.2831 * 7.0 - uFxTime * 0.07);
      float above = h - hem;
      float curtain = smoothstep(-0.012, 0.004, above) * exp(-max(above, 0.0) * (13.0 - fi * 3.0));
      float rays = skyNoise(vec2(az * (36.0 + fi * 12.0) + uFxTime * 0.012 * (1.0 + fi) + sin(az * 6.2831 * 9.0 + h * 6.0) * 0.12, h * 0.35 + fi * 0.5)).g;
      rays = 0.15 + 0.85 * smoothstep(0.45, 0.85, rays);
      float shimmer = 0.6 + 0.4 * skyNoise(vec2(az * 5.0 - uFxTime * 0.02, h * 3.0 + fi)).r;
      float fade = smoothstep(0.52, 0.8, skyNoise(vec2(az * 3.0 + fi * 0.37 + uFxTime * 0.003, 0.2)).r);
      vec3 tint = mix(uAuroraLow, uAuroraHigh, smoothstep(0.0, 0.18, above));
      c += tint * curtain * rays * shimmer * fade * (0.13 + uIntensity * 0.07 + uBeat * 0.03);
    }
    col = c;
  `,{uLow:X(`#03100d`),uHigh:X(`#010306`),uMist:X(`#0e5a48`),uAuroraLow:X(`#3dff9e`),uAuroraHigh:X(`#a05cff`)},kp);n.add(r);let i=Dp(e,200,1,`
    float patchy = smoothstep(0.5, 0.8, texture2D(uNoise, wp.xz * 0.05).r);
    float vein = 1.0 - smoothstep(0.0, 0.04, texture2D(uNoise, wp.xz * 0.12).a);
    float dots = smoothstep(0.84, 0.88, texture2D(uNoise, wp.xz * 0.8).g);
    float breathe = 0.6 + 0.4 * sin(uFxTime * 0.8 + wp.x * 0.3 + wp.z * 0.2);
    vec3 c = uGround;
    c += uMoss * patchy * 0.08 * breathe;
    c += uVein * vein * patchy * (0.5 + uBeat * 0.4);
    c += uDot * dots * (0.6 + 0.4 * sin(uTime * 3.0 + wp.x * 9.0));
    c += uMoss * 0.06 * exp(-dist * 0.5);
    col = mix(c, uFog, 1.0 - exp(-dist * 0.06));
    a = 1.0 - smoothstep(60.0, 90.0, dist);
  `,{uGround:X(`#010604`),uMoss:X(`#1f9a6a`),uVein:X(`#4dffc3`),uDot:X(`#b8ffe6`),uFog:X(`#010806`)});return n.add(i),n.add(Sm(e,140,{stem:[2.2,24],height:[1.2,5.5],kind:`bulb`},[`#4dffc3`,`#5ee0f0`,`#b07bff`,`#7affc8`])),n.add(Sm(e,46,{stem:[2.5,20],height:[.3,1.4],kind:`cap`},[`#ff7ad9`,`#b07bff`,`#4dffc3`])),n.add(Cm(e,10)),n.add(wm(e,36)),n.add(Tp(e,{count:900,min:[-14,0,-14],max:[14,9,14],clearRadius:1,colors:[`#4dffc3`,`#b8ffe6`,`#ff7ad9`,`#b07bff`],size:[.008,.028],velocity:[.02,.18,.01],swirl:.5,twinkle:.85,beat:.7})),{id:`aurora`,group:n,mix:e,skyMix:t,sky:r,update(){}}}var Em={lobby:pm,dusk:em,tide:fm,aurora:Tm,ember:bm,cosmos:rm},Dm={dusk:{name:`Abyss`,glow:`#5ee0f0`},tide:{name:`Glow tide`,glow:`#3fbfff`},aurora:{name:`Reef`,glow:`#4dffc3`},ember:{name:`Nebula`,glow:`#ff6bd6`},cosmos:{name:`Bloom`,glow:`#c9a8ff`}};function Om(e){return Dm[e.id]??{name:e.name,glow:e.colors.glow}}var km=new V;function Am(e,t,n,r,i,a){let o=2*Math.PI*i/4,s=Math.max(a-2*i,0),c=Math.PI/4;km.copy(t),km[r]=0,km.normalize();let l=.5*o/(o+s),u=1-km.angleTo(e)/c;return Math.sign(km[n])===1?u*l:s/(o+s)+l+l*(1-u)}var jm=class e extends Ro{constructor(e=1,t=1,n=1,r=2,i=.1){let a=r*2+1;if(i=Math.min(e/2,t/2,n/2,i),super(1,1,1,a,a,a),this.type=`RoundedBoxGeometry`,this.parameters={width:e,height:t,depth:n,segments:r,radius:i},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let s=new V,c=new V,l=new V(e,t,n).divideScalar(2).subScalar(i),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,m=new V,h=.5/a;for(let r=0,a=0;r<u.length;r+=3,a+=2)switch(s.fromArray(u,r),c.copy(s),c.x-=Math.sign(c.x)*h,c.y-=Math.sign(c.y)*h,c.z-=Math.sign(c.z)*h,c.normalize(),u[r+0]=l.x*Math.sign(s.x)+c.x*i,u[r+1]=l.y*Math.sign(s.y)+c.y*i,u[r+2]=l.z*Math.sign(s.z)+c.z*i,d[r+0]=c.x,d[r+1]=c.y,d[r+2]=c.z,Math.floor(r/p)){case 0:m.set(1,0,0),f[a+0]=Am(m,c,`z`,`y`,i,n),f[a+1]=1-Am(m,c,`y`,`z`,i,t);break;case 1:m.set(-1,0,0),f[a+0]=1-Am(m,c,`z`,`y`,i,n),f[a+1]=1-Am(m,c,`y`,`z`,i,t);break;case 2:m.set(0,1,0),f[a+0]=1-Am(m,c,`x`,`z`,i,e),f[a+1]=Am(m,c,`z`,`x`,i,n);break;case 3:m.set(0,-1,0),f[a+0]=1-Am(m,c,`x`,`z`,i,e),f[a+1]=1-Am(m,c,`z`,`x`,i,n);break;case 4:m.set(0,0,1),f[a+0]=1-Am(m,c,`x`,`y`,i,e),f[a+1]=1-Am(m,c,`y`,`x`,i,t);break;case 5:m.set(0,0,-1),f[a+0]=Am(m,c,`x`,`y`,i,e),f[a+1]=1-Am(m,c,`y`,`x`,i,t)}}static fromJSON(t){return new e(t.width,t.height,t.depth,t.segments,t.radius)}},Mm=null;function Nm(){return Mm??=new jm(1,1,1,3,.16),Mm}var Pm=`
attribute vec3 aColor;
attribute float aFlash;
attribute float aGlow;
varying vec3 vColor;
varying float vFlash;
varying float vGlow;
varying vec3 vN;
varying vec3 vLocalN;
varying vec3 vLocal;
varying vec3 vView;
void main() {
  vec4 world = modelMatrix * instanceMatrix * vec4(position, 1.0);
  vN = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * normal);
  vLocalN = normal;
  vLocal = position;
  vView = normalize(cameraPosition - world.xyz);
  vColor = aColor;
  vFlash = aFlash;
  vGlow = aGlow;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`,Fm=`
uniform float uBeat;
uniform float uIntensity;
uniform float uDim;
uniform float uGray;
uniform vec3 uLight;
varying vec3 vColor;
varying float vFlash;
varying float vGlow;
varying vec3 vN;
varying vec3 vLocalN;
varying vec3 vLocal;
varying vec3 vView;
void main() {
  vec3 n = normalize(vN);
  vec3 v = normalize(vView);
  vec3 base = vColor;
  float grad = clamp(vLocal.y + 0.5, 0.0, 1.0);
  vec3 col = mix(base * 0.55, mix(base, vec3(1.0), 0.22), grad);
  float front = smoothstep(0.55, 0.9, vLocalN.z);
  col *= mix(0.62, 1.0, front) * (0.75 + 0.25 * max(dot(n, uLight), 0.0));
  // Highlight band across the upper front, like the 2D gem.
  float band = front
    * smoothstep(0.06, 0.12, vLocal.y) * (1.0 - smoothstep(0.34, 0.42, vLocal.y))
    * (1.0 - smoothstep(0.3, 0.38, abs(vLocal.x)));
  col = mix(col, vec3(1.0), band * 0.32);
  vec3 h = normalize(uLight + v);
  col += pow(max(dot(n, h), 0.0), 60.0) * 0.55;
  float rim = pow(1.0 - max(dot(n, v), 0.0), 2.5);
  col += mix(base, vec3(1.0), 0.3) * rim * 0.45;
  col += base * (0.12 + uBeat * 0.08 + uIntensity * 0.08) * vGlow;
  float gray = dot(col, vec3(0.3, 0.55, 0.15));
  col = mix(col, vec3(gray * 0.55), uGray);
  col = mix(col, vec3(1.0), clamp(vFlash, 0.0, 1.0));
  col *= uDim;
  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
}
`;function Im(){return new K({vertexShader:Pm,fragmentShader:Fm,uniforms:{uBeat:Y.uBeat,uIntensity:Y.uIntensity,uDim:{value:1},uGray:{value:0},uLight:{value:new V(-.35,.75,.55).normalize()}}})}var Lm=class{mesh;material;colors;flashes;glows;m=new U;q=new ar;s=new V;p=new V;count=0;constructor(e,t=Im()){this.material=t;let n=Nm().clone();this.colors=new Qa(new Float32Array(e*3),3),this.flashes=new Qa(new Float32Array(e),1),this.glows=new Qa(new Float32Array(e),1);for(let e of[this.colors,this.flashes,this.glows])e.setUsage(bn);n.setAttribute(`aColor`,this.colors),n.setAttribute(`aFlash`,this.flashes),n.setAttribute(`aGlow`,this.glows),this.mesh=new oo(n,t,e),this.mesh.instanceMatrix.setUsage(bn),this.mesh.frustumCulled=!1,this.mesh.count=0}begin(){this.count=0}add(e,t,n,r,i,a=0,o=1){let s=this.count++;this.p.set(e,t,n),this.s.set(r,r,r*.8),this.m.compose(this.p,this.q,this.s),this.mesh.setMatrixAt(s,this.m),this.colors.setXYZ(s,i.r,i.g,i.b),this.flashes.setX(s,a),this.glows.setX(s,o)}end(){this.mesh.count=this.count,this.mesh.instanceMatrix.needsUpdate=!0,this.colors.needsUpdate=!0,this.flashes.needsUpdate=!0,this.glows.needsUpdate=!0}},Rm=`
uniform vec3 uColor;
uniform float uAlpha;
varying vec3 vN;
varying vec3 vView;
varying vec3 vLocal;
void main() {
  float rim = pow(1.0 - max(dot(normalize(vN), normalize(vView)), 0.0), 1.6);
  float edge = max(abs(vLocal.x), abs(vLocal.y));
  float frame = smoothstep(0.36, 0.46, edge);
  float a = (0.07 + rim * 0.35 + frame * 0.45) * uAlpha;
  gl_FragColor = vec4(uColor * a, a);
  #include <colorspace_fragment>
}
`;function zm(){return new K({vertexShader:Pm,fragmentShader:Rm,uniforms:{uColor:{value:new W},uAlpha:{value:1}},transparent:!0,depthWrite:!1,blending:2})}var Bm=class{canvas=document.createElement(`canvas`);ctx;texture;mesh;width;height;hits=[];hover=null;lastDraw=0;onHover=null;constructor(e,t,n=1100){this.width=Math.round(e*n),this.height=Math.round(t*n),this.canvas.width=this.width,this.canvas.height=this.height,this.ctx=this.canvas.getContext(`2d`),this.texture=new Po(this.canvas),this.texture.colorSpace=mn,this.texture.anisotropy=4,this.texture.generateMipmaps=!0,this.texture.minFilter=Qe;let r=new Ca({map:this.texture,transparent:!0,depthWrite:!1,toneMapped:!1});this.mesh=new G(new ic(e,t),r),this.mesh.userData.panel=this}draw(e){this.hits=[],this.ctx.clearRect(0,0,this.width,this.height),e(this.ctx,this.width,this.height),this.texture.needsUpdate=!0,this.lastDraw=performance.now()}tooSoon(e=66){return performance.now()-this.lastDraw<e}addHit(e){this.hits.push(e)}hitAt(e){let t=e.x*this.width,n=(1-e.y)*this.height;for(let e=this.hits.length-1;e>=0;e--){let r=this.hits[e];if(t>=r.x&&t<=r.x+r.w&&n>=r.y&&n<=r.y+r.h)return r}return null}set opacity(e){this.mesh.material.opacity=e,this.mesh.visible=e>.001}dispose(){this.texture.dispose(),this.mesh.geometry.dispose(),this.mesh.material.dispose()}};function Vm(e,t=600,n=!1){return`${t} ${e}px ${n?Pe:xe}`}function Hm(e,t,n,r,i,a){e.beginPath(),e.roundRect(t,n,r,i,a)}function Um(e,t,n,r,i,a,o,s={}){let c=e.ctx,l=e.hover===t&&!s.disabled,u=s.accent??`#c38bff`;if(c.save(),s.disabled&&(c.globalAlpha=.45),Hm(c,r,i,a,o,o*.3),s.primary){let e=c.createLinearGradient(r,i,r,i+o);e.addColorStop(0,l?`#ffffff`:`#f3ecff`),e.addColorStop(1,l?`#e6dcff`:`#d6c8f5`),c.fillStyle=e}else c.fillStyle=l?`rgba(255,255,255,0.2)`:`rgba(255,255,255,0.08)`;c.fill(),c.lineWidth=l?5:3,c.strokeStyle=l?u:`rgba(255,255,255,0.16)`,c.stroke(),c.fillStyle=s.primary?`#1a1030`:`#efe9fb`,c.font=Vm(Math.round(o*.4),700),c.textBaseline=`middle`,c.textAlign=s.align??`center`,c.fillText(n,s.align===`left`?r+o*.4:r+a/2,i+o/2+1),c.restore(),e.addHit({id:t,x:r,y:i,w:a,h:o,disabled:s.disabled})}function Wm(e,t,n,r=`#c38bff`,i=.82){Hm(e,6,6,t-12,n-12,44);let a=e.createLinearGradient(0,0,0,n);a.addColorStop(0,`rgba(30, 20, 56, ${i})`),a.addColorStop(1,`rgba(12, 8, 26, ${i})`),e.fillStyle=a,e.fill(),e.lineWidth=4,e.strokeStyle=Gm(r,.45),e.stroke()}function Gm(e,t){let n=parseInt(e.slice(1),16);return`rgba(${n>>16&255}, ${n>>8&255}, ${n&255}, ${t})`}function Q(e,t,n,r,i,a={}){e.font=Vm(i,a.weight??600,a.display??!1),e.fillStyle=a.color??`#efe9fb`,e.textAlign=a.align??`left`,e.textBaseline=a.base??`alphabetic`,e.fillText(t,n,r,a.maxWidth)}function Km(e,t,n,r,i,a,o=`#c9c0e0`,s=1.4){e.font=Vm(a,500),e.fillStyle=o,e.textAlign=`left`,e.textBaseline=`alphabetic`;let c=``;for(let o of t.split(` `)){let t=c?`${c} ${o}`:o;e.measureText(t).width>i&&c?(e.fillText(c,n,r),r+=a*s,c=o):c=t}return c&&(e.fillText(c,n,r),r+=a*s),r}var qm=.07,Jm=8*qm,Ym=.1,Xm=Ym-Jm/2-.15,Zm=[-.21,0,.21],Qm=.1,$m=qm*.9,eh=[``,``,`Great`,`Excellent`,`Amazing`,`Unreal`,`Unreal`],th=le.map(e=>new W(e)),nh=new W(`#ffffff`),rh=e=>Math.floor(e).toLocaleString(`en-US`),ih=e=>{let t=Math.max(0,Math.ceil(e/1e3));return`${Math.floor(t/60)}:${String(t%60).padStart(2,`0`)}`},ah=`varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,oh=`
  uniform vec3 uColor;
  uniform float uA;
  varying vec2 vUv;
  void main() {
    float x = 1.0 - abs(vUv.x * 2.0 - 1.0);
    float y = 1.0 - abs(vUv.y * 2.0 - 1.0);
    float a = uA * pow(x, 0.5) * pow(y, 0.9);
    gl_FragColor = vec4(uColor * a, a);
    #include <colorspace_fragment>
  }
`;function sh(e,t,n=new V){return n.set((e+.5)*qm-Jm/2,Ym+Jm/2-(t+.5)*qm,0)}var ch=class{shell;root=new ti;lanes={top:Ym+Jm/2+.2,mid:.15000000000000002,low:-.1};aims=!0;controls=[[`Pick up`,`Point at a piece and hold the trigger`],[`Place`,`Drag it onto the board and let go`],[`Click to carry`,`A quick click picks it up; click again to drop`],[`Put back`,`B or grip`],[`Without pointing`,`X picks a piece, stick moves it, A drops`],[`Hands`,`Pinch works as the trigger`],[`Pause`,`Y`]];grid=new P(Re(1));mode=`classic`;time=0;endTimer=0;announcedBest=!1;drag=null;hoverSlot=null;gems=new Lm(200);ghosts=new Lm(9,zm());well;rails;halo;hud=new Bm(.7,.17,1e3);hudKey=``;shownScore=0;pops=new Map;dying=[];fades=[];fadeGeo=new ic(1,1);slotLift=[0,0,0];trayIn=0;gray=0;plane=new ha;v=new V;glowColor=new W(`#c38bff`);constructor(e){this.shell=e,this.root.add(this.gems.mesh,this.ghosts.mesh),this.ghosts.mesh.renderOrder=10,this.well=new K({vertexShader:ah,fragmentShader:`
        ${xp}
        uniform vec3 uGlow;
        uniform float uDim;
        varying vec2 vUv;
        void main() {
          vec2 cell = vUv * 8.0;
          vec2 f = abs(fract(cell) - 0.5);
          float socket = 1.0 - smoothstep(0.36, 0.42, max(f.x, f.y));
          vec3 c = vec3(0.03, 0.02, 0.07) + uGlow * socket * (0.05 + uBeat * 0.02);
          c += vec3(1.0, 0.25, 0.35) * uDanger * 0.12 * (0.5 + 0.5 * sin(uTime * 6.0));
          gl_FragColor = vec4(c * uDim, 0.85);
          #include <colorspace_fragment>
        }
      `,uniforms:{...Y,uGlow:{value:this.glowColor},uDim:{value:1}},transparent:!0,depthWrite:!1});let t=new G(new ic(Jm,Jm),this.well);t.position.set(0,Ym,-.034650000000000014),t.renderOrder=-5,this.root.add(t),this.rails=new Ca({color:this.glowColor,toneMapped:!1});let n=.008;for(let[e,t,r,i]of[[Jm+n*2,n,0,Ym+Jm/2+n/2],[Jm+n*2,n,0,Ym-Jm/2-n/2],[n,Jm,-Jm/2-n/2,Ym],[n,Jm,Jm/2+n/2,Ym]]){let a=new G(new Ro(e,t,n),this.rails);a.position.set(r,i,0),this.root.add(a)}this.halo=new K({vertexShader:ah,fragmentShader:`
        uniform vec3 uColor;
        uniform float uA;
        varying vec2 vUv;
        void main() {
          vec2 p = abs(vUv - 0.5) * 2.0;
          float box = max(p.x, p.y);
          float a = uA * (1.0 - smoothstep(0.8, 1.0, box)) * smoothstep(0.62, 0.86, box);
          gl_FragColor = vec4(uColor * a, a);
          #include <colorspace_fragment>
        }
      `,uniforms:{uColor:{value:this.glowColor},uA:{value:.4}},transparent:!0,depthWrite:!1,blending:2});let r=new G(new ic(Jm*1.35,Jm*1.35),this.halo);r.position.set(0,Ym,-.012),r.renderOrder=-4,this.root.add(r),this.hud.mesh.position.set(0,Ym+Jm/2+.11,0),this.root.add(this.hud.mesh)}start(e,t){this.mode=e,this.grid=new P(t),this.time=0,this.endTimer=0,this.announcedBest=!1,this.drag=null,this.hoverSlot=null,this.pops.clear(),this.dying=[],this.gray=0,this.shownScore=0,this.trayIn=performance.now();for(let e of this.fades)e.mesh.visible=!1}update(e){this.endTimer>0?(this.endTimer-=e,this.endTimer<=0&&this.finish(`fail`)):(this.time+=e,this.mode===`blitz`&&this.time>=18e4&&(this.time=Me,this.finish(`win`)))}intensity(){return Math.min(1,.2+this.grid.fill()*.5+Math.min(this.grid.combo,5)*.06+Math.min(this.grid.score/25e3,.2))}danger(){if(!this.shell.playing||this.endTimer>0)return 0;let e=this.grid.fill(),t=Math.max(0,Math.min(1,(e-.55)/.35)),n=this.grid.tray.filter(e=>e&&this.grid.fits(e)).length;return this.grid.tray.filter(Boolean).length>1&&n===1&&e>.35&&(t=Math.max(t,.55)),t}stage(){return Math.floor(this.grid.score/2500)}result(){let e=this.grid,t=this.mode===`blitz`&&this.time>=18e4;return{value:e.score,heading:t?`Time's up`:`No moves left`,won:t,stats:[[`Lines`,String(e.lines)],[`Pieces`,String(e.placed)],[`Best combo`,String(e.bestCombo)],[`Biggest clear`,String(e.bestClear)],[`Clean sweeps`,String(e.perfects)],[`Time`,ih(this.time)]],detail:`${e.lines} lines`}}centre(){return this.root.localToWorld(new V(0,Ym,0))}pause(){this.drag=null}pad(e){for(let t of e)if(t.control===`trigger`)this.trigger(t.down);else if(!t.down)continue;else if(t.control===`b`||t.control===`grip`)this.putBack();else if(t.control===`x`)this.pickNext();else if(t.control===`a`)this.dropKeys();else if(t.control.startsWith(`stick-`)){let e=t.control.slice(6);this.nudge(e===`left`?-1:+(e===`right`),e===`up`?-1:+(e===`down`))}}mouse(e){this.trigger(e)}key(e,t){if(!t)return!1;let n={Digit1:0,Digit2:1,Digit3:2}[e.code];if(n!==void 0)return this.pickKeys(n),!0;switch(e.code){case`ArrowLeft`:return this.nudge(-1,0),!0;case`ArrowRight`:return this.nudge(1,0),!0;case`ArrowUp`:return this.nudge(0,-1),!0;case`ArrowDown`:return this.nudge(0,1),!0;case`Space`:case`Enter`:return this.dropKeys(),!0;case`KeyX`:return this.putBack(),!0}return!1}trigger(e){if(this.endTimer>0)return;let t=performance.now(),n=this.drag;if(e){if(n&&(n.sticky||n.keys)){n.target?.valid?this.commit(n):this.putBack();return}!n&&this.hoverSlot!==null&&this.grid.tray[this.hoverSlot]&&this.pick(this.hoverSlot,!1,t)}else!n||n.sticky||n.keys||(n.target?.valid?this.commit(n):t-n.pressedAt<260?n.sticky=!0:this.putBack())}pick(e,t,n=performance.now()){let r=this.grid.tray[e];r&&(this.drag={slot:e,sticky:!1,keys:t,pressedAt:n,fx:Math.floor((8-r.w)/2),fy:Math.floor((8-r.h)/2),target:null},N.pickup(),this.shell.haptics([{hand:`right`,intensity:.2,ms:12}]))}pickKeys(e){if(this.drag?.slot===e)return this.putBack();this.pick(e,!0),this.retarget()}pickNext(){let e=this.drag?this.drag.slot+1:0;for(let t=0;t<3;t++){let n=(e+t)%3;if(this.grid.tray[n])return this.pickKeys(n)}}nudge(e,t){let n=this.drag;if(!n)return;let r=this.grid.tray[n.slot];n.keys=!0,n.fx=Math.max(0,Math.min(8-r.w,Math.round(n.fx)+e)),n.fy=Math.max(0,Math.min(8-r.h,Math.round(n.fy)+t)),this.retarget(),N.move()}dropKeys(){let e=this.drag;e&&(e.target?.valid?this.commit(e):(N.reject(),this.shell.haptics([{hand:`both`,intensity:.3,ms:25}])))}putBack(){this.drag&&(this.drag=null,N.reject())}retarget(){let e=this.drag;if(!e)return;let t=this.grid.tray[e.slot],n=Math.round(e.fx),r=Math.round(e.fy),i=n>-1&&r>-1&&n+t.w<9&&r+t.h<9,a=i&&this.grid.canPlace(t,n,r),o=e.target?.valid?`${e.target.gx},${e.target.gy}`:``;e.target=i?{gx:n,gy:r,valid:a}:null,a&&o!==`${n},${r}`&&N.tone({freq:N.chordTone(0,2),dur:.025,type:`triangle`,gain:.045})}aimPoint(){let e=this.shell.host.aim();if(!e)return null;this.root.updateWorldMatrix(!0,!1);let t=new V(0,0,1).transformDirection(this.root.matrixWorld);this.plane.setFromNormalAndCoplanarPoint(t,this.root.localToWorld(new V));let n=e.intersectPlane(this.plane,this.v);return n?this.root.worldToLocal(n.clone()):null}commit(e){let t=this.grid.tray[e.slot],{gx:n,gy:r}=e.target;this.drag=null;let i=this.grid.place(e.slot,n,r);i&&this.afterPlace(i,t,n,r)}afterPlace(e,t,n,r){let i=performance.now(),a=this.shell.fx,o=th[t.color];for(let[t,n]of e.cells)this.pops.set(n*8+t,i);let s=Math.min(1,e.cells.length/9);if(N.place(s),N.tone({freq:N.chordTone(e.cells.length%4,1),dur:.16,type:`triangle`,gain:.1,wet:.2}),this.shell.haptics([{hand:`both`,intensity:.25+s*.3,ms:18+s*14}]),a!==`off`){let e=this.root.localToWorld(sh(n+t.w/2-.5,r+t.h-.5));this.shell.host.bursts.spawn({at:e,color:o,count:a===`full`?14:5,dir:new V(0,.6,1).normalize(),spread:1.1,speed:[.3,1.1],life:[.3,.6],size:[.008,.02],gravity:2,drag:1.4})}if(e.lines>0){let s=n+t.w/2,c=r+t.h/2;for(let t of e.cleared){let e=Math.hypot(t.x+.5-s,t.y+.5-c);this.dying.push({x:t.x,y:t.y,color:t.color,at:i+e*28})}for(let n of e.rows)this.beam(sh(3.5,n),Jm*1.04,qm*1.2,th[t.color]);for(let n of e.cols)this.beam(sh(n,3.5),qm*1.2,Jm*1.04,th[t.color]);let l=e.lines>=3||e.perfect||e.combo>=3;N.reward(e.lines,Math.max(0,e.combo-1),l),e.perfect&&N.perfect(),this.shell.haptics(l?[{hand:`both`,intensity:.9,ms:60},{hand:`both`,intensity:.6,ms:45,delay:110},{hand:`both`,intensity:1,ms:100,delay:200}]:[{hand:`both`,intensity:.5,ms:35},{hand:`both`,intensity:.3,ms:25,delay:70}]),this.shell.bump(e.lines*.12+Math.min(e.combo,6)*.05);let u=le[t.color];e.perfect?this.shell.toast([{text:`Clean sweep`,size:.09,color:M.gold,display:!0},{text:`+${rh(e.points)}`,size:.04,color:M.muted,display:!1}]):e.lines>=2?this.shell.toast([{text:eh[Math.min(e.lines,eh.length-1)],size:.09,color:u,display:!0},{text:`${e.lines} lines  +${rh(e.points)}`,size:.04,color:M.muted,display:!1}]):this.shell.toast([{text:`+${rh(e.points)}`,size:.05,color:M.text,display:!1}],900),e.combo>=2&&this.shell.toast([{text:`Combo ×${e.combo}`,size:.06,color:M.gold,display:!0}],1300,`low`),a!==`off`&&(l?(this.shell.host.shock.fire(this.centre(),e.perfect?new W(M.gold):o),this.shell.host.flare(1),e.perfect&&this.shell.host.slowmo()):this.shell.host.flare(.2+e.lines*.1))}e.dealt&&(this.trayIn=i,N.whoosh(!0));let c=this.shell.best();!this.announcedBest&&c!==null&&this.grid.score>c&&(this.announcedBest=!0,this.shell.toast([{text:`New best`,size:.08,color:M.gold,display:!0}],1600,`top`),N.newBest(),this.shell.host.flare(.6)),e.gameOver&&(this.endTimer=650)}finish(e){if(this.drag=null,e===`fail`&&this.shell.fx!==`off`)for(let e=0;e<8;e++)for(let t=0;t<8;t++){let n=this.grid.get(t,e);if(!n)continue;let r=this.root.localToWorld(sh(t,e));this.shell.host.bursts.spawn({at:r,color:th[n],count:3,dir:new V((t-3.5)/4,.3,1).normalize(),spread:.5,speed:[.4,1.4],life:[1,1.8],size:[.01,.025],gravity:1.5,drag:.5})}this.shell.end(e,{text:e===`win`?`Time's up`:`No moves left`,sub:rh(this.grid.score)})}beam(e,t,n,r){if(this.shell.fx===`off`)return;let i=this.fades.find(e=>!e.mesh.visible);if(!i){let e=new K({vertexShader:ah,fragmentShader:oh,uniforms:{uColor:{value:new W},uA:{value:0}},transparent:!0,depthWrite:!1,blending:2}),t=new G(this.fadeGeo,e);t.renderOrder=12,this.root.add(t),i={mesh:t,mat:e,t:0,dur:.5},this.fades.push(i)}i.mesh.position.set(e.x,e.y,.03),i.mesh.scale.set(t,n,1),i.mat.uniforms.uColor.value.copy(r).lerp(nh,.4),i.t=0,i.mesh.visible=!0}render(e,t){let n=this.shell.dim;this.glowColor.lerp(new W(Om(Ie(this.stage())).glow),1-Math.exp(-e*1.5)),this.well.uniforms.uDim.value=n,this.gems.material.uniforms.uDim.value=n,this.gray+=((this.endTimer>0||this.shell.phase===`ending`?.8:0)-this.gray)*(1-Math.exp(-e*3)),this.gems.material.uniforms.uGray.value=this.gray,this.halo.uniforms.uA.value=(.28+Y.uBeat.value*.15+Y.uIntensity.value*.15)*n,this.rails.color.copy(this.glowColor),Y.uDanger.value>.05&&this.rails.color.lerp(new W(`#ff4a6a`),Y.uDanger.value*(.5+.5*Math.sin(t/140)));let r=this.shell.playing&&this.endTimer<=0?this.aimPoint():null,i=this.drag;if(this.hoverSlot=null,r&&!i)for(let e=0;e<3;e++)this.grid.tray[e]&&Math.hypot(r.x-Zm[e],r.y-Xm)<Qm*1.2&&(this.hoverSlot=e);if(r&&i&&!i.keys){let e=this.grid.tray[i.slot];i.fx=(r.x+Jm/2)/qm-e.w/2,i.fy=(Ym+Jm/2-r.y)/qm-e.h/2,this.retarget()}let a=this.gems;a.begin();let o=e=>{let n=this.pops.get(e);if(n===void 0)return 0;let r=(t-n)/220;return r>=1?(this.pops.delete(e),0):1-r};for(let e=0;e<8;e++)for(let t=0;t<8;t++){let n=this.grid.get(t,e);if(!n)continue;sh(t,e,this.v);let r=o(e*8+t);a.add(this.v.x,this.v.y,r*.02,$m*(1+r*.12),th[n],r*.6,1)}let s=this.shell.fx;this.dying=this.dying.filter(e=>{if(t<e.at)return sh(e.x,e.y,this.v),a.add(this.v.x,this.v.y,0,$m,th[e.color],Math.min(1,.4+(1-(e.at-t)/400)),1.5),!0;if(s!==`off`){let t=this.root.localToWorld(sh(e.x,e.y)),n=this.shell.host.head().clone().sub(t).normalize();s===`full`&&this.shell.host.bursts.spawn({at:t,color:th[e.color],count:5,dir:n.add(new V((e.x-3.5)*.05,(3.5-e.y)*.04,0)).normalize(),spread:.45,speed:[2,4.5],life:[1,1.8],size:[.012,.03],drag:.35}),this.shell.host.bursts.spawn({at:t,color:th[e.color],count:3,dir:new V((e.x-3.5)/3.5,.5,-.6).normalize(),spread:.7,speed:[1,3],life:[1.2,2.2],size:[.014,.032],drag:.25,gravity:-.1})}return!1});let c=Math.min(1,(t-this.trayIn)/380);for(let n=0;n<3;n++){let r=this.grid.tray[n],a=+(this.hoverSlot===n);if(this.slotLift[n]+=(a-this.slotLift[n])*(1-Math.exp(-e*12)),!r||i?.slot===n)continue;let o=this.grid.fits(r),s=Math.min(.036,Qm*1.7/Math.max(r.w,r.h))*(1+this.slotLift[n]*.18),l=Math.sin(t/900+n*2)*.004,u=(1-lh(Math.min(1,c*1.3-n*.12)))*.25;this.shape(r,Zm[n]+u,Xm+l,this.slotLift[n]*.03,s,o?1:.35,this.slotLift[n]*.25)}if(this.ghosts.begin(),i){let e=this.grid.tray[i.slot],n=i.target;if(n?.valid){for(let[t,r]of e.cells)sh(n.gx+t,n.gy+r,this.v),this.ghosts.add(this.v.x,this.v.y,0,$m,th[e.color]);this.ghosts.material.uniforms.uColor.value.copy(th[e.color]),this.ghosts.material.uniforms.uAlpha.value=1.2}let r=i.keys&&n?n.gx:i.fx,o=i.keys&&n?n.gy:i.fy;for(let[t,s]of e.cells)sh(r+t,o+s,this.v),a.add(this.v.x,this.v.y,i.keys?.02:.05,$m*(i.keys?1:.94),th[e.color],n&&!n.valid?0:.08,1.8);if(n?.valid){let{rows:r,cols:i}=this.grid.wouldClear(e,n.gx,n.gy),a=.35+.25*Math.sin(t/90);for(let e of r)for(let t=0;t<8;t++)this.grid.get(t,e)&&this.lightCell(t,e,a);for(let e of i)for(let t=0;t<8;t++)this.grid.get(e,t)&&this.lightCell(e,t,a)}}this.ghosts.end(),a.end();for(let t of this.fades)t.mesh.visible&&(t.t+=e/t.dur,t.t>=1?t.mesh.visible=!1:t.mat.uniforms.uA.value=(1-t.t)*(1-t.t)*1.5);this.drawHud()}lightCell(e,t,n){sh(e,t,this.v),this.gems.add(this.v.x,this.v.y,.001,$m*1.02,th[this.grid.get(e,t)],n,1.6)}shape(e,t,n,r,i,a,o){let s=th[e.color].clone().multiplyScalar(a);for(let[c,l]of e.cells)this.gems.add(t+(c-(e.w-1)/2)*i,n-(l-(e.h-1)/2)*i,r,i*.9,s,o,a)}drawHud(){this.shownScore+=(this.grid.score-this.shownScore)*.2,Math.abs(this.grid.score-this.shownScore)<1&&(this.shownScore=this.grid.score);let e=this.shell.best(),t=Me-this.time,n=this.mode===`blitz`?`${ih(t)} left${e===null?``:`   Best ${rh(e)}`}`:e===null?``:`Best ${rh(e)}`,r=`${Math.floor(this.shownScore)}|${n}|${this.shell.phase===`title`}`;r===this.hudKey||this.hud.tooSoon()||(this.hudKey=r,this.hud.mesh.visible=this.shell.phase!==`title`,this.hud.draw((e,r)=>{Q(e,rh(this.shownScore),r/2,92,84,{align:`center`,display:!0,weight:600}),Q(e,n,r/2,148,34,{align:`center`,color:this.mode===`blitz`&&t<15e3?M.danger:`#b9b0d6`,weight:600})}))}debugState(){let e=this.grid;return{score:e.score,lines:e.lines,placed:e.placed,tray:e.tray.map(e=>e?.id??null),drag:this.drag?{slot:this.drag.slot,valid:!!this.drag.target?.valid,target:this.drag.target}:null,hover:this.hoverSlot}}debugTools(){return{load:e=>this.grid.load(e),tray:e=>{this.grid.tray=e.map(e=>Oe.get(e)??null)},cellWorld:(e,t)=>this.root.localToWorld(sh(e,t)).toArray(),slotWorld:e=>this.root.localToWorld(new V(Zm[e],Xm,0)).toArray()}}},lh=e=>1-(1-Math.max(0,e))**3,uh=.5,dh=.24,fh=dh-m*uh,ph=k[10]*uh+.012,mh=-.5/2-.2,hh=.03999999999999998,gh=.5,_h=-.37,vh=-.14,yh=.45,bh=1.5,xh=2.6,Sh=.2,Ch=p.length-1,wh=80,Th=120,Eh=48,Dh=O.map(e=>new W(e)),Oh=new W(`#ffffff`),kh=new W(M.gold),Ah=e=>Math.floor(e).toLocaleString(`en-US`),jh=e=>Math.max(0,Math.min(1,e)),Mh=e=>1-(1-jh(e))**3,Nh=e=>1+2.70158*(e-1)**3+1.70158*(e-1)**2,Ph=e=>(e-1/2)*uh,Fh=e=>dh-e*uh,Ih=null;function Lh(){if(Ih)return Ih;let e=document.createElement(`canvas`);e.width=1408,e.height=128;let t=e.getContext(`2d`);for(let e=0;e<11;e++)t.save(),t.translate(e*128+64,64),D(t,e,60,O[e]),t.restore();return Ih=new Po(e),Ih.colorSpace=mn,Ih.generateMipmaps=!0,Ih.minFilter=Qe,Ih}var Rh=`
  attribute vec3 aColor;
  attribute vec4 aInfo;
  varying vec3 vColor;
  varying vec4 vInfo;
  varying vec3 vLocal;
  varying vec3 vN;
  varying vec3 vView;
  void main() {
    vec4 world = modelMatrix * instanceMatrix * vec4(position, 1.0);
    vN = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * normal);
    vView = normalize(cameraPosition - world.xyz);
    vLocal = position;
    vColor = aColor;
    vInfo = aInfo;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`,zh=`
  uniform float uBeat;
  uniform float uIntensity;
  uniform float uDim;
  uniform float uGray;
  uniform vec3 uLight;
  uniform sampler2D uMarks;
  varying vec3 vColor;
  varying vec4 vInfo;
  varying vec3 vLocal;
  varying vec3 vN;
  varying vec3 vView;
  void main() {
    vec3 n = normalize(vN);
    vec3 v = normalize(vView);
    vec3 base = vColor;
    float facing = max(dot(n, v), 0.0);
    // Glossy and lit from inside: deep at the edges and underneath, glowing at the core.
    float lit = dot(n, uLight) * 0.5 + 0.5;
    vec3 col = mix(base * 0.16, base * 0.95, lit);
    col += mix(base, vec3(1.0), 0.15) * pow(facing, 2.5) * (0.4 + uBeat * 0.1 + uIntensity * 0.1);
    // The tier's mark on the front, turning as the orb rolls.
    if (vLocal.z > 0.0) {
      vec2 uv = vLocal.xy * 0.5 + 0.5;
      vec4 m = texture2D(uMarks, vec2((vInfo.x + uv.x) / 11.0, uv.y));
      col = mix(col, m.rgb * mix(1.0, lit + 0.3, 0.5), m.a * smoothstep(0.2, 0.6, vLocal.z));
    }
    col += pow(max(dot(n, normalize(uLight + v)), 0.0), 60.0) * 0.6;
    float rim = pow(1.0 - facing, 4.0);
    col += mix(base, vec3(1.0), 0.3) * rim * 0.55;
    float gray = dot(col, vec3(0.3, 0.55, 0.15));
    col = mix(col, vec3(gray * 0.55), uGray);
    col = mix(col, vec3(1.0), clamp(vInfo.y, 0.0, 1.0));
    gl_FragColor = vec4(col * uDim, vInfo.z);
    #include <colorspace_fragment>
  }
`,Bh=`
  attribute vec3 aColor;
  attribute float aAlpha;
  varying vec3 vColor;
  varying float vAlpha;
  varying vec2 vP;
  void main() {
    vColor = aColor;
    vAlpha = aAlpha;
    vP = position.xy * 2.0;
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * instanceMatrix * vec4(position, 1.0);
  }
`,Vh=`
  uniform float uBeat;
  uniform float uDim;
  varying vec3 vColor;
  varying float vAlpha;
  varying vec2 vP;
  void main() {
    float d = length(vP);
    float a = vAlpha * exp(-d * d * 5.0) * (1.0 - smoothstep(0.85, 1.0, d)) * (0.85 + uBeat * 0.2) * uDim;
    gl_FragColor = vec4(vColor * a, a);
    #include <colorspace_fragment>
  }
`,Hh=`
  uniform vec3 uColor;
  uniform float uA;
  uniform float uKind;
  uniform float uWidth;
  varying vec2 vUv;
  void main() {
    float d = length(vUv * 2.0 - 1.0);
    float a;
    if (uKind < 0.5) a = 1.0 - smoothstep(0.8, 1.0, d);
    else if (uKind < 1.5) a = exp(-d * d * 4.0) * (1.0 - smoothstep(0.9, 1.0, d));
    else a = 1.0 - smoothstep(0.0, uWidth, abs(d - (1.0 - uWidth)));
    a *= uA;
    gl_FragColor = vec4(uColor * a, a);
    #include <colorspace_fragment>
  }
`,Uh=`varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,Wh=class{mesh;halos;material;haloMaterial;colors;info;haloColors;haloAlpha;m=new U;h=new U;count=0;constructor(){let e=new cc(1,28,18);this.colors=new Qa(new Float32Array(360),3),this.info=new Qa(new Float32Array(480),4);for(let e of[this.colors,this.info])e.setUsage(bn);e.setAttribute(`aColor`,this.colors),e.setAttribute(`aInfo`,this.info),this.material=new K({vertexShader:Rh,fragmentShader:zh,uniforms:{uBeat:Y.uBeat,uIntensity:Y.uIntensity,uDim:{value:1},uGray:{value:0},uLight:{value:new V(-.4,.75,.55).normalize()},uMarks:{value:Lh()}},transparent:!0}),this.mesh=new oo(e,this.material,Th),this.mesh.instanceMatrix.setUsage(bn),this.mesh.frustumCulled=!1,this.mesh.count=0;let t=new ic(1,1);this.haloColors=new Qa(new Float32Array(360),3),this.haloAlpha=new Qa(new Float32Array(Th),1);for(let e of[this.haloColors,this.haloAlpha])e.setUsage(bn);t.setAttribute(`aColor`,this.haloColors),t.setAttribute(`aAlpha`,this.haloAlpha),this.haloMaterial=new K({vertexShader:Bh,fragmentShader:Vh,uniforms:{uBeat:Y.uBeat,uDim:{value:1}},transparent:!0,depthWrite:!1,blending:2}),this.halos=new oo(t,this.haloMaterial,Th),this.halos.instanceMatrix.setUsage(bn),this.halos.frustumCulled=!1,this.halos.count=0,this.halos.renderOrder=2}begin(){this.count=0}add(e,t,n,r,i,a,o=1,s=0,c=0,l=0,u=1){if(this.count>=Th||i<=0)return;let d=this.count++,f=Math.cos(-l),p=Math.sin(-l),m=1-c,h=1+c*.6,g=f*f*m+p*p*h,_=f*p*(m-h),v=p*p*m+f*f*h,y=Math.cos(-a),b=Math.sin(-a),x=(g*y+_*b)*i,S=(-g*b+_*y)*i,C=(_*y+v*b)*i,w=(-_*b+v*y)*i;this.m.set(x,S,0,t,C,w,0,n,0,0,i,r,0,0,0,1),this.mesh.setMatrixAt(d,this.m);let T=Dh[e];this.colors.setXYZ(d,T.r,T.g,T.b),this.info.setXYZW(d,e,s,o,0);let E=i*(2.9+e*.06);this.h.makeScale(E,E,1).setPosition(t,n,r-i*.35),this.halos.setMatrixAt(d,this.h),this.haloColors.setXYZ(d,T.r,T.g,T.b),this.haloAlpha.setX(d,o*u*(.45+e*.025+s*.6))}end(){this.mesh.count=this.halos.count=this.count;for(let e of[this.mesh.instanceMatrix,this.halos.instanceMatrix,this.colors,this.info,this.haloColors,this.haloAlpha])e.needsUpdate=!0}},Gh=class{shell;root=new ti;lanes={top:.45999999999999996,mid:.03999999999999998,low:fh-.1};aims=!0;controls=[[`Aim`,`Point at the tank, or push either thumbstick left / right`],[`Drop`,`Trigger or A`],[`Hands`,`Point and pinch to drop`],[`Pause`,`Y`]];world;mode=`classic`;time=0;ended=null;endAt=0;doomed=[];keys={left:!1,right:!1,held:0};stick={left:!1,right:!1};pendingDrop=!1;dropHand=`right`;lastLaser=NaN;hangIn=0;squash=new Map;born=new Map;thudAt=new Map;lastThud=0;lastThudW=0;lastHeavyLand=0;heavyLands=0;lastHeavy=0;lastHeavyTier=-1;hitstopUntil=0;hapticQ=null;lastHapticAt=0;lastHapticRank=0;glassT0=-1e9;glassAmt=0;cupFlash=new W;cupFlashA=0;announcedBest=!1;seenTier=0;lastChainToast=0;lastPointsToast=0;shownScore=0;gray=0;jiggle=new B;jiggleV=new B;tank=new ti;orbs=new Wh;back;rails;dangerMat;guide;landing;fx=[];fxMeshes=[];floaters=[];hud=new Bm(.26,gh,1e3);hudKey=``;plane=new ha;v=new V;glowColor=new W(`#c38bff`);constructor(e){this.shell=e,this.world=this.decorate(),this.root.add(this.tank),this.tank.add(this.orbs.mesh,this.orbs.halos),this.back=new K({vertexShader:Uh,fragmentShader:`
        ${xp}
        uniform vec3 uGlow;
        uniform vec3 uFlash;
        uniform float uFlashA;
        uniform float uDim;
        varying vec2 vUv;
        void main() {
          float caustic = texture2D(uNoise, vec2(vUv.x * 0.7 + uFxTime * 0.01, vUv.y * 0.9 - uFxTime * 0.017)).g;
          caustic = smoothstep(0.5, 0.85, caustic);
          vec3 c = mix(vec3(0.005, 0.004, 0.012), vec3(0.002, 0.0015, 0.005), 1.0 - vUv.y);
          c += uGlow * (0.003 + caustic * 0.012 + uBeat * 0.003);
          c += uGlow * smoothstep(0.85, 1.0, abs(vUv.x - 0.5) * 2.0) * 0.015;
          c += vec3(1.0, 0.25, 0.35) * uDanger * 0.14 * (0.5 + 0.5 * sin(uTime * 6.0)) * smoothstep(0.6, 1.0, vUv.y);
          c += uFlash * uFlashA;
          gl_FragColor = vec4(c * uDim, 0.8);
          #include <colorspace_fragment>
        }
      `,uniforms:{...Y,uGlow:{value:this.glowColor},uFlash:{value:this.cupFlash},uFlashA:{value:0},uDim:{value:1}},transparent:!0,depthWrite:!1});let t=new G(new ic(uh,m*uh),this.back);t.position.set(0,(dh+fh)/2,-ph),t.renderOrder=-5,this.tank.add(t);let n=new K({vertexShader:Uh,fragmentShader:`
        uniform vec3 uGlow;
        uniform float uDim;
        varying vec2 vUv;
        void main() {
          float a = (0.025 + 0.05 * pow(1.0 - vUv.y, 2.0)) * uDim;
          gl_FragColor = vec4(uGlow * a, a);
          #include <colorspace_fragment>
        }
      `,uniforms:{uGlow:{value:this.glowColor},uDim:this.back.uniforms.uDim},transparent:!0,depthWrite:!1,blending:2,side:2});for(let e of[-1,1]){let t=new G(new ic(ph*2,m*uh),n);t.rotation.y=Math.PI/2,t.position.set(e*uh/2,(dh+fh)/2,0),t.renderOrder=-4,this.tank.add(t)}let r=new G(new ic(uh,ph*2),n);r.rotation.x=-Math.PI/2,r.position.set(0,fh,0),r.renderOrder=-4,this.tank.add(r),this.rails=new Ca({color:this.glowColor.clone(),toneMapped:!1});let i=.006,a=m*uh+.02,o=fh+a/2-i/2,s=[];for(let e of[-1,1]){for(let t of[-1,1])s.push([i,a,i,e*.506/2,o,t*ph]);s.push([i,i,ph*2,e*.506/2,fh-i/2,0]),s.push([i,i,ph*2,e*.506/2,fh+a-i,0])}for(let e of[-1,1])s.push([.512,i,i,0,fh-i/2,e*ph]);for(let[e,t,n,r,i,a]of s){let o=new G(new Ro(e,t,n),this.rails);o.position.set(r,i,a),o.renderOrder=1,this.tank.add(o)}this.dangerMat=new K({vertexShader:Uh,fragmentShader:`
        uniform float uTime;
        uniform float uDanger;
        uniform float uOver;
        uniform float uDim;
        varying vec2 vUv;
        void main() {
          float dash = step(0.45, fract(vUv.x * 22.0));
          float y = 1.0 - abs(vUv.y - 0.5) * 2.0;
          float pulse = 0.5 + 0.5 * sin(uTime * (uDanger > 0.6 ? 11.0 : 5.5));
          vec3 calm = vec3(0.94, 0.91, 0.98);
          vec3 red = vec3(1.0, 0.3, 0.38);
          vec3 c = mix(calm, red, step(0.01, uDanger));
          float a = dash * y * mix(0.18, 0.4 + uDanger * 0.6 * (0.6 + 0.4 * pulse), step(0.01, uDanger));
          float fill = step(abs(vUv.x - 0.5) * 2.0, uOver) * y;
          a = max(a, fill * 0.95);
          c = mix(c, red, fill);
          gl_FragColor = vec4(c * a * uDim, a);
          #include <colorspace_fragment>
        }
      `,uniforms:{uTime:Y.uTime,uDanger:{value:0},uOver:{value:0},uDim:this.back.uniforms.uDim},transparent:!0,depthWrite:!1,blending:2});for(let e of[-ph+.002,ph]){let t=new G(new ic(.49,.01),this.dangerMat);t.position.set(0,Fh(De),e),t.renderOrder=3,this.tank.add(t)}this.guide=new G(new ic(1,1),new K({vertexShader:Uh,fragmentShader:`
        uniform vec3 uColor;
        uniform float uA;
        uniform float uLen;
        uniform float uTime;
        varying vec2 vUv;
        void main() {
          float dash = step(0.5, fract(vUv.y * uLen / 0.018 + uTime * 1.8));
          float core = 1.0 - abs(vUv.x - 0.5) * 2.0;
          float a = uA * dash * core;
          gl_FragColor = vec4(uColor * a, a);
          #include <colorspace_fragment>
        }
      `,uniforms:{uColor:{value:new W},uA:{value:0},uLen:{value:1},uTime:Y.uTime},transparent:!0,depthWrite:!1,blending:2})),this.guide.renderOrder=3,this.tank.add(this.guide),this.landing=new G(new ac(.9,1,48),new Ca({color:new W,transparent:!0,opacity:.3,depthWrite:!1,blending:2,toneMapped:!1})),this.landing.renderOrder=3,this.tank.add(this.landing);let c=new ic(2,2);for(let e=0;e<Eh;e++){let e=new G(c,new K({vertexShader:Uh,fragmentShader:Hh,uniforms:{uColor:{value:new W},uA:{value:0},uKind:{value:0},uWidth:{value:.2}},transparent:!0,depthWrite:!1,blending:2}));e.visible=!1,e.renderOrder=12,this.tank.add(e),this.fxMeshes.push(e)}for(let e=0;e<4;e++){let e=new Bm(.2,.07,1e3);e.mesh.visible=!1,e.mesh.renderOrder=20,this.tank.add(e.mesh),this.floaters.push({panel:e,t0:-1e9,x:0,y:0})}this.hud.mesh.position.set(mh,hh,0),this.root.add(this.hud.mesh)}decorate(){let t=new e(Re(5));t.merging=!1;for(let[e,n,r]of[[8,.22,1],[6,.62,1.05],[3,.88,1.1],[7,.45,.7],[4,.85,.85],[2,.08,.7],[5,.2,.55],[1,.7,.6],[0,.6,.5],[3,.9,.5],[2,.35,.4]])t.add(e,n,r,{age:te});for(let e=0;e<360;e++)t.tick();return t.events.length=0,t.current=2,t.next=0,t}start(t,n){this.mode=t,this.world=new e(n),this.world.setAim(.5),this.time=0,this.ended=null,this.doomed=[],this.keys={left:!1,right:!1,held:0},this.stick={left:!1,right:!1},this.pendingDrop=!1,this.lastLaser=NaN,this.hangIn=performance.now(),this.squash.clear(),this.born.clear(),this.thudAt.clear(),this.heavyLands=0,this.lastHeavy=0,this.lastHeavyTier=-1,this.hitstopUntil=0,this.glassAmt=0,this.cupFlashA=0,this.announcedBest=!1,this.seenTier=4,this.lastChainToast=0,this.shownScore=0,this.gray=0,this.fx=[];for(let e of this.floaters)e.panel.mesh.visible=!1}update(e){if(this.ended)return;this.time+=e;let t=this.world,r=e/1e3,i=(this.keys.right||this.stick.right?1:0)-(this.keys.left||this.stick.left?1:0);if(i!==0){this.keys.held+=r;let e=Math.min(bh,yh+xh*this.keys.held*this.keys.held);t.setAim(t.aim+i*e*r)}else this.keys.held=0;if(performance.now()>=this.hitstopUntil&&t.advance(r),this.pendingDrop&&t.ready&&(this.pendingDrop=!1,this.doDrop()),this.handleEvents(),t.over)return this.finish(`fail`);if(this.mode===`rush`&&this.time>=12e4)return this.time=n,this.finish(`win`);if(this.mode===`rush`){let t=n-this.time,r=Math.ceil((t+e)/1e3);t<1e4&&Math.ceil(t/1e3)!==r&&N.tick(10-Math.ceil(t/1e3))}}intensity(){let e=this.world,t=e.chainLive?Math.min(e.chain,6):0;return Math.min(1,.15+e.fill()*.55+t*.06+Math.min(e.maxTier,10)*.012)}danger(){return!this.shell.playing||this.ended?0:this.world.danger()}stage(){return Math.min(4,Math.max(0,this.world.maxTier-5))}result(){let e=this.world,t=this.ended===`win`,n=[[`Merges`,String(e.merges)],[`Biggest orb`,d[e.maxTier]],[`Best chain`,e.bestChain>1?`×${e.bestChain}`:`None`],[`Orbs dropped`,String(e.drops)]];return e.vanishes&&n.push([`Supernovas`,String(e.vanishes)]),n.push([`Time`,ee(this.time)]),{value:e.score,heading:t?`Time's up`:`Overflow`,won:t,stats:n,detail:d[e.maxTier]}}centre(){return this.root.localToWorld(new V(0,(dh+fh)/2,0))}pause(){this.keys={left:!1,right:!1,held:0},this.stick={left:!1,right:!1},this.pendingDrop=!1}pad(e){for(let t of e)t.control===`stick-left`?this.stick.left=t.down:t.control===`stick-right`?this.stick.right=t.down:t.down&&(t.control===`trigger`||t.control===`a`)&&(this.dropHand=t.hand,this.requestDrop())}mouse(e){e&&this.requestDrop()}key(e,t){if(this.ended)return!1;switch(e.code){case`ArrowLeft`:case`KeyA`:return this.keys.left=t,!0;case`ArrowRight`:case`KeyD`:return this.keys.right=t,!0;case`Space`:case`ArrowDown`:case`KeyS`:case`Enter`:return t&&!e.repeat&&this.requestDrop(),!0}return!1}requestDrop(){let e=this.world;this.ended||(e.ready?this.doDrop():!e.over&&e.cooldown<=Sh&&(this.pendingDrop=!0))}doDrop(){let e=this.world.current;return this.world.drop()?(N.pickup(),N.noiseFx({dur:.14,freq:3200-e*300,to:700,q:.9,gain:.08}),this.haptic(0,[{hand:this.dropHand,intensity:.15,ms:10}]),this.flushHaptics(),this.hangIn=performance.now(),!0):!1}aimPoint(){let e=this.shell.host.aim();if(!e)return null;this.root.updateWorldMatrix(!0,!1);let t=new V(0,0,1).transformDirection(this.root.matrixWorld);this.plane.setFromNormalAndCoplanarPoint(t,this.root.localToWorld(new V));let n=e.intersectPlane(this.plane,this.v);return n?this.root.worldToLocal(n.clone()):null}handleEvents(){let e=this.world;if(!e.events.length)return;let t=performance.now(),n=0;for(let r of e.events)r.type===`merge`?this.onMerge(r,t,n++):r.type===`vanish`?this.onVanish(r,t):r.type===`impact`?this.onImpact(r,t):r.type===`drop`&&this.shell.fx!==`off`&&this.squash.set(r.id,{t0:t,amt:-.1,ang:Math.PI/2});e.events.length=0,this.flushHaptics();let r=this.shell.best();!this.announcedBest&&r!==null&&r>0&&e.score>r&&this.shell.playing&&(this.announcedBest=!0,this.shell.toast([{text:`New best`,size:.08,color:M.gold,display:!0}],1600,`top`),N.newBest(),this.shell.host.flare(.6))}haptic(e,t){(!this.hapticQ||e>this.hapticQ.rank)&&(this.hapticQ={rank:e,pulses:t})}flushHaptics(){let e=this.hapticQ;if(this.hapticQ=null,!e)return;let t=performance.now();t-this.lastHapticAt<wh&&e.rank<=this.lastHapticRank||(this.lastHapticAt=t,this.lastHapticRank=e.rank,this.shell.haptics(e.pulses))}hitstop(e){this.shell.fx!==`off`&&(this.hitstopUntil=Math.max(this.hitstopUntil,performance.now()+e))}hitGlass(e,t){this.shell.fx===`off`||e<this.glassLevel(t)||(this.glassT0=t,this.glassAmt=Math.min(1,e))}glassLevel(e){let t=Math.max(0,e-this.glassT0);return t>600?0:this.glassAmt*Math.exp(-t/120)}kick(e,t){this.shell.fx===`full`&&(this.jiggleV.x+=e*.012,this.jiggleV.y-=t*.012)}addFx(e){this.fx.length>=Eh&&this.fx.shift(),this.fx.push({wait:0,grow:1.4,width:.2,alpha:.8,...e})}worldPoint(e,t,n=0){return this.tank.localToWorld(new V(Ph(e),Fh(t),n))}onMerge(e,t,n){let r=e.tier,i=Dh[r],a=Ph(e.x),o=Fh(e.y),s=k[r]*uh,c=r>=8,l=this.shell.fx;if(this.born.set(e.id,t),l!==`off`){this.addFx({x:a,y:o,r:s*1.15,color:Oh,t0:t,kind:0,dur:220+r*18,alpha:.9}),r>=3&&this.addFx({x:a,y:o,r:s*(1.8+r*.06),color:i,t0:t,kind:1,dur:320+r*35,alpha:.35+r*.03}),this.addFx({x:a,y:o,r:s,color:i,t0:t,kind:2,dur:380+r*35,grow:1.4+r*.05,width:.12}),r>=6&&this.addFx({x:a,y:o,r:s*1.2,color:Oh,t0:t,wait:60,kind:2,dur:520+r*20,grow:1.6,width:.08}),c&&(this.addFx({x:a,y:o,r:s*1.4,color:Oh,t0:t,kind:2,dur:700,grow:3.2,width:.04,alpha:.9}),this.flashCup(i,.16+(r-8)*.05)),r>=7&&this.hitGlass(.3+(r-7)*.2,t);let n=this.worldPoint(e.x,e.y),u=this.shell.host;if(u.bursts.spawn({at:n,color:i,count:(l===`full`?8:4)+r*2,dir:new V(0,.4,1).normalize(),spread:1.4,speed:[.15,.45+r*.06],life:[.4,.8+r*.05],size:[.006,.012+r*.002],gravity:.6,drag:1.5,jitter:s*.5}),r>=5&&l===`full`){let e=u.head().clone().sub(n).normalize();u.bursts.spawn({at:n,color:Oh,count:4+r*2,dir:e,spread:.5,speed:[1.5,3+r*.2],life:[.8,1.5],size:[.008,.02],drag:.4}),u.bursts.spawn({at:n,color:i,count:4+r,dir:e,spread:.7,speed:[1,2.5],life:[1,1.8],size:[.01,.024],drag:.35})}c?(u.shock.fire(n,i),u.flare(.4+(r-8)*.2)):r>=6&&u.flare(.1+(r-6)*.08)}this.shell.bump(.04+r*.025+Math.min(e.chain,6)*.03);let u=.35+.2*r+(r>=7?.3*(r-6):0);this.kick((Math.random()-.5)*u*.8,u),c?this.haptic(2+r,[{hand:`both`,intensity:.6,ms:30},{hand:`both`,intensity:.45,ms:25,delay:60}]):r>=3&&this.haptic(2+r,[{hand:`both`,intensity:.1+r*.04,ms:12+r*2}]),c&&this.hitstop(60+(r-8)*30);let f=Math.min(r,7),p=Math.max(0,Math.min(e.chain-1,3,8-f));if(n<3){N.merge(f,p);let e=N.chordTone(f+p,0);N.tone({freq:e*.5,to:e,dur:.11,type:`sine`,gain:.2}),N.noiseFx({dur:.03,freq:3600-r*150,q:1.2,gain:.14})}r>=6&&(t-this.lastHeavy>120||r>this.lastHeavyTier)&&(this.lastHeavy=t,this.lastHeavyTier=r,N.impact(r>=10?1:(r-5)*.18),r>=7&&N.reward(r<=8?r-5:r-4,Math.min(e.chain-1,r>=9?2:3),r>=9)),r>this.seenTier&&r>=5?(this.seenTier=r,this.shell.toast([{text:d[r],size:.09,color:O[r],display:!0},{text:`New orb`,size:.04,color:M.muted,display:!1}],1600,`top`),N.levelUp()):(e.points>=10||e.chain>=2)&&t-this.lastPointsToast>140&&(this.lastPointsToast=t,this.float(`+${Ah(e.points)}`,a,o+s+.03,t)),e.chain>=2&&t-this.lastChainToast>650&&(this.lastChainToast=t,this.shell.toast([{text:`Chain ×${e.chain}`,size:.07,color:M.gold,display:!0}],1e3,`mid`))}onVanish(e,t){let n=Ph(e.x),r=Fh(e.y),i=k[10]*uh,a=this.shell.fx;if(a!==`off`){for(let e=0;e<3;e++)this.addFx({x:n,y:r,r:i,color:e?kh:Oh,t0:t,wait:e*120,kind:2,dur:900,grow:1.6,width:.12});this.addFx({x:n,y:r,r:i*1.5,color:Oh,t0:t,kind:0,dur:520,alpha:1}),this.addFx({x:n,y:r,r:i*3,color:kh,t0:t,kind:1,dur:900,alpha:.7}),this.addFx({x:n,y:r,r:i*1.6,color:Oh,t0:t,kind:2,dur:900,grow:3.5,width:.04,alpha:.9}),this.flashCup(kh,.35);let o=this.worldPoint(e.x,e.y),s=this.shell.host,c=s.head().clone().sub(o).normalize();for(let e of[kh,Oh,Dh[9],Dh[7],Dh[5]])s.bursts.spawn({at:o,color:e,count:a===`full`?70:30,dir:c,spread:1.4,speed:[1.5,5],life:[1.5,3],size:[.012,.04],gravity:.5,drag:.4});s.shock.fire(o,kh),s.flare(1),s.slowmo()}this.hitGlass(1,t),this.shell.bump(.6),this.hitstop(130),this.haptic(100,[{hand:`both`,intensity:.9,ms:45},{hand:`both`,intensity:.6,ms:35,delay:80},{hand:`both`,intensity:1,ms:70,delay:150}]),this.kick((Math.random()-.5)*6,4.5),this.lastHeavy=t,this.lastHeavyTier=11,N.impact(1),N.reward(8,Math.min(e.chain-1,2),!0),N.perfect(),this.shell.toast([{text:`Supernova`,size:.11,color:M.gold,display:!0},{text:`+${Ah(e.points)}`,size:.045,color:M.text,display:!1}],2e3,`mid`)}onImpact(e,t){if(this.shell.fx!==`off`){let n=Math.min(.24,e.speed*.06),r=this.squash.get(e.id);(!r||t-r.t0>80||n>r.amt)&&this.squash.set(e.id,{t0:t,amt:n,ang:Math.atan2(e.ny,e.nx)})}if(e.speed<=1.1)return;let n=jh((e.speed-1.1)/2.4)*(.55+.45*Math.min(1,e.tier/Ch));if(t-(this.thudAt.get(e.id)??-1e9)<160||t-this.lastThud<85&&n<=this.lastThudW*1.5+.05)return;if(this.thudAt.size>150)for(let[e,n]of this.thudAt)t-n>1e3&&this.thudAt.delete(e);this.thudAt.set(e.id,t),this.lastThud=t,this.lastThudW=n,N.place(n);let r=Math.max(jh((n-.6)/.4),e.tier>Ch?jh((e.speed-1.6)/1.5):0);r>.12&&t-this.lastHeavyLand>250&&(this.lastHeavyLand=t,this.heavyLands++,N.tone({freq:85,to:38,dur:.22,type:`sine`,gain:.25+.3*r}),N.noiseFx({dur:.12,freq:900,to:200,type:`lowpass`,gain:.15+.15*r}),this.kick(0,.6+1.6*r),this.hitGlass(.25+.55*r,t),this.haptic(1,[{hand:`both`,intensity:.2+.3*r,ms:16+Math.round(8*r)}]))}flashCup(e,t){t<this.cupFlashA||(this.cupFlash.copy(e),this.cupFlashA=t)}float(e,t,n,r){let i=this.floaters.reduce((e,t)=>t.t0<e.t0?t:e);i.t0=r,i.x=t,i.y=n,i.panel.draw((t,n,r)=>{t.save(),t.shadowColor=`rgba(255, 255, 255, 0.6)`,t.shadowBlur=10,Q(t,e,n/2,r*.72,46,{align:`center`,display:!0,weight:700}),t.restore()}),i.panel.mesh.visible=!0}finish(e){if(this.ended)return;this.ended=e,this.endAt=performance.now(),this.pendingDrop=!1,this.keys={left:!1,right:!1,held:0},this.stick={left:!1,right:!1};let t=[...this.world.bodies].sort((e,t)=>e.y-t.y),n=Math.max(1,t.length),r=Math.min(e===`fail`?60:30,(e===`fail`?1700:1300)/n),i=e===`fail`?450:250;this.doomed=t.map((e,t)=>({tier:e.tier,x:e.x,y:e.y,r:e.r,a:e.a,at:this.endAt+i+t*r,gone:!1})),this.shell.end(e,{text:e===`win`?`Time's up`:`Overflow`,sub:Ah(this.world.score)})}render(e,t){let n=this.shell.dim,r=this.shell.phase===`title`,i=this.world;this.glowColor.lerp(new W(Om(Ie(this.stage())).glow),1-Math.exp(-e*1.5)),this.back.uniforms.uDim.value=n,this.orbs.material.uniforms.uDim.value=n,this.orbs.haloMaterial.uniforms.uDim.value=n,this.gray+=((this.ended===`fail`?.7:0)-this.gray)*(1-Math.exp(-e*3)),this.orbs.material.uniforms.uGray.value=this.gray,this.jiggleV.addScaledVector(this.jiggle,-e*900).multiplyScalar(Math.exp(-e*14)),this.jiggle.addScaledVector(this.jiggleV,e),this.jiggle.clampLength(0,.006),this.tank.position.set(this.jiggle.x,this.jiggle.y,0);let a=this.glassLevel(t);this.rails.color.copy(this.glowColor).lerp(Oh,a*.6).multiplyScalar(n*(.85+a*.6+Y.uBeat.value*.1));let o=this.danger();if(o>.05&&this.rails.color.lerp(new W(`#ff4a6a`),o*.6*(.5+.5*Math.sin(t/140))),this.cupFlashA*=Math.exp(-e*6),this.back.uniforms.uFlashA.value=this.cupFlashA,this.dangerMat.uniforms.uDanger.value=o,this.dangerMat.uniforms.uOver.value=this.ended||r?0:jh(i.overTime()/2),this.shell.playing&&!this.ended){let e=this.aimPoint(),t=this.stick.left||this.stick.right||this.keys.left||this.keys.right;e&&!t&&Math.abs(e.x)<uh&&e.y>fh-.15&&e.y<.69&&(Number.isNaN(this.lastLaser)||Math.abs(e.x-this.lastLaser)>.002)&&(this.lastLaser=e.x,i.setAim(e.x/uh+1/2))}let s=this.orbs;if(s.begin(),this.ended?this.drawEnding(t):(this.drawBodies(t),this.drawHanging(t)),this.drawGuide(t),!r){let e=i.next;s.add(e,_h,vh+Math.sin(t/600)*.003,.03,Math.min(k[e]*uh,.035),t/2e3,n)}s.end(),this.drawFx(t);for(let e of this.floaters){if(!e.panel.mesh.visible)continue;let r=(t-e.t0)/900;r>=1?e.panel.mesh.visible=!1:(e.panel.mesh.position.set(e.x,e.y+Mh(r)*.05,ph+.02),e.panel.mesh.material.opacity=(1-r*r)*n)}this.drawHud(t)}drawBodies(e){for(let t of this.world.bodies){let n=t.r*uh,r=0,i=this.born.get(t.id);if(i!==void 0){let a=(e-i)/320;a>=1?this.born.delete(t.id):(n*=1+.12*Math.sin(Math.PI*jh(a))*(1-a),r=(1-jh(a*2))*.6)}let a=0,o=0,s=this.squash.get(t.id);if(s){let n=Math.max(0,e-s.t0);n>320?this.squash.delete(t.id):(a=s.amt*Math.exp(-n/90)*Math.cos(n/40),o=s.ang)}t.over>0&&!this.ended&&(r=Math.max(r,.25*(.5+.5*Math.sin(e/70)))),this.orbs.add(t.tier,Ph(t.x),Fh(t.y),0,n,t.a,1,r,a,o)}}drawHanging(e){let t=this.world;if(this.shell.phase===`title`||t.over)return;let n=t.current,r=t.ready?1:jh(1-t.cooldown/u),i=this.shell.fx===`off`?t.ready?1:.6:Nh(jh((e-this.hangIn)/(u*1e3))),a=k[n]*uh*Math.max(0,i),o=Math.sin(e/420)*.002;this.orbs.add(n,Ph(t.aim),Fh(ne)+o,0,a,0,.45+.55*r,0,0,0,r)}drawGuide(e){let t=this.world,n=this.shell.phase!==`title`&&!this.ended&&!t.over;if(this.guide.visible=this.landing.visible=n,!n)return;let r=t.current,i=k[r],a=m-i;for(let e of t.bodies){let n=Math.abs(e.x-t.aim),r=e.r+i;n>=r||e.y<-.12||(a=Math.min(a,e.y-Math.sqrt(r*r-n*n)))}let o=Fh(ne+i),s=Fh(a),c=o-s;if(c<=.005){this.guide.visible=this.landing.visible=!1;return}let l=t.ready?1:.4,u=this.shell.dim,d=Ph(t.aim);this.guide.position.set(d,(o+s)/2,0),this.guide.scale.set(.004,c,1);let f=this.guide.material.uniforms;f.uColor.value.copy(Dh[r]),f.uA.value=.5*l*u,f.uLen.value=c,this.landing.position.set(d,s,0),this.landing.scale.setScalar(i*uh),this.landing.material.color.copy(Dh[r]),this.landing.material.opacity=(.3+.08*Math.sin(e/200))*l*u}drawFx(e){this.fx=this.fx.filter(t=>e-t.t0<t.wait+t.dur);let t=0;for(let n of this.fx){let r=e-n.t0-n.wait;if(r<0||t>=this.fxMeshes.length)continue;let i=this.fxMeshes[t++],a=r/n.dur,o=(1-a)*(1-a),s=i.material.uniforms,c=n.r;n.kind===0?(c=n.r*(1+.35*Mh(a)),s.uA.value=n.alpha*o):n.kind===1?(c=n.r*(1+.4*Mh(a)),s.uA.value=n.alpha*o):(c=n.r*(1+n.grow*Mh(a)),s.uA.value=n.alpha*(1-a),s.uWidth.value=Math.max(.01,n.width*(1-a)*(n.r/c))),s.uKind.value=n.kind,s.uColor.value.copy(n.color),i.position.set(n.x,n.y,n.kind===0?.01:.005),i.scale.set(c,c,1),i.visible=!0}for(;t<this.fxMeshes.length;t++)this.fxMeshes[t].visible=!1}drawEnding(e){let t=this.ended===`win`,n=this.shell.fx,r=0;for(let i of this.doomed){let a=Ph(i.x),o=Fh(i.y),s=i.r*uh,c=e-i.at;if(c<0){let e=!t&&n===`full`?(Math.random()-.5)*.002:0;this.orbs.add(i.tier,a+e,o,0,s,i.a)}else{if(!i.gone){if(i.gone=!0,r++,n!==`off`){let n=this.worldPoint(i.x,i.y);t?this.shell.host.bursts.spawn({at:n,color:Dh[i.tier],count:6+i.tier*2,dir:new V(0,1,.3).normalize(),spread:.8,speed:[.2,.6],life:[1,1.8],size:[.008,.02],gravity:-.3,drag:.8,jitter:s}):(this.shell.host.bursts.spawn({at:n,color:Dh[i.tier],count:6+i.tier*2,dir:new V(0,.3,1).normalize(),spread:1.3,speed:[.4,1.4+i.tier*.1],life:[.5,1],size:[.008,.022],gravity:2,drag:.8,jitter:s*.5}),this.addFx({x:a,y:o,r:s,color:Oh,t0:e,kind:0,dur:160}))}r<=2&&N.tone({freq:N.chordTone(t?i.tier:10-i.tier,t?2:1),dur:.07,type:t?`sine`:`triangle`,gain:.03})}if(t){let e=jh(c/700);e<1&&this.orbs.add(i.tier,a,o+Mh(e)*uh*.25,0,s*(1-.5*e),i.a,1-e)}else{let e=jh(c/140);e<1&&this.orbs.add(i.tier,a,o,0,s*(1+.3*e),i.a,1-e,e)}}}}drawHud(e){let t=this.world,r=this.shell.phase;if(this.hud.mesh.visible=r!==`title`,!this.hud.mesh.visible)return;this.hud.mesh.material.opacity=this.shell.dim,this.shownScore+=(t.score-this.shownScore)*.2,Math.abs(t.score-this.shownScore)<1&&(this.shownScore=t.score);let i=this.shell.best(),a=[];if(this.mode===`rush`){let e=Math.max(0,n-this.time);a.push([`Time left`,ee(e),e<15e3&&this.shell.playing?M.danger:M.text])}a.push([`Best`,i?Ah(i):`First game`,M.muted]);let o=t.chainLive&&t.chain>=2&&!this.ended?t.chain:0,s=`${Math.floor(this.shownScore)}|${a.map(e=>e[1]+e[2]).join(`|`)}|${o}`;s===this.hudKey||this.hud.tooSoon()||(this.hudKey=s,this.hud.draw((t,n)=>{let r=n-16;Q(t,`Score`,r,44,34,{align:`right`,color:`#b9b0d6`,weight:700}),Q(t,Ah(this.shownScore),r,112,60,{align:`right`,display:!0,weight:600});let i=186;for(let[e,o,s]of a)Q(t,e,r,i,30,{align:`right`,color:`#b9b0d6`,weight:700}),Q(t,o,r,i+50,44,{align:`right`,color:s,display:!0,weight:500,maxWidth:n-32}),i+=100;o&&(t.save(),t.shadowColor=M.gold,t.shadowBlur=12+8*Math.sin(e/120),Q(t,`×${o}`,30,112,52,{color:M.gold,display:!0,weight:700}),t.restore()),Q(t,`Next`,r,gh*1e3-120,30,{align:`right`,color:`#b9b0d6`,weight:700})}))}debugState(){let e=this.world;return{score:e.score,count:e.count,aim:e.aim,current:e.current,next:e.next,ready:e.ready,chain:e.chainLive?e.chain:0,bestChain:e.bestChain,maxTier:e.maxTier,merges:e.merges,drops:e.drops,danger:e.danger(),over:e.over,time:this.time,ended:this.ended,heavyLands:this.heavyLands}}debugTools(){return{load:e=>{this.world.bodies=[];for(let t of e)this.world.add(t.tier,t.x,t.y,{age:t.age??1.5})},queue:(e,t)=>{this.world.current=e,t!==void 0&&(this.world.next=t),this.world.setAim(this.world.aim)},drop:e=>(e!==void 0&&this.world.setAim(e),this.world.cooldown=0,this.doDrop()),jam:()=>{let e=this.world;e.merging=!1;let t=m,n=0;for(;t>-.25;){let r=6+n%3,i=k[r];for(let a=i+n%2*i*.5;a<=1-i;a+=i*2.05)e.add(r,a,t-i,{age:te});t-=i*1.8,n++}},settle:e=>{for(let t=0;t<e;t+=x)this.world.tick();this.handleEvents()},time:e=>this.time=e,cupWorld:(e,t)=>this.worldPoint(e,t).toArray()}}},Kh=`lunchbreak.vr.settings.v1`;function qh(){return{sound:!0,slowmo:!0,distance:1.35,height:-.12}}var Jh=new class{value={...qh(),...o(Kh)};listeners=new Set;get(){return this.value}update(e){this.value={...this.value,...e},y(Kh,this.value),this.listeners.forEach(e=>e(this.value))}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}};function Yh(){let e=()=>{let e=se.get();N.configure({sound:Jh.get().sound,volume:e.volume,music:e.music,musicVolume:e.musicVolume,soundtrack:e.soundtrack})};e(),se.subscribe(e),Jh.subscribe(e)}var Xh=.05,Zh=16*Xh,Qh=10*Xh,$h=Xh*.9,eg=160,tg=26,ng=Math.PI*.75,rg=5,ig=46,ag=e=>Math.floor(e).toLocaleString(`en-US`),og=e=>{let t=Math.max(0,Math.ceil(e/1e3));return`${Math.floor(t/60)}:${String(t%60).padStart(2,`0`)}`};function sg(e,t,n=new V){return n.set((e+.5)*Xh-Zh/2,Qh/2-(t+.5)*Xh,0)}var cg=`varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,lg=class{shell;root=new ti;lanes={top:Qh/2+.17,mid:.04,low:-Qh/2-.1};needsButtons=!0;controls=[[`Move`,`Either thumbstick left / right`],[`Soft drop`,`Thumbstick down`],[`Drop`,`Right trigger`],[`Rotate`,`A clockwise, B or left trigger the other way`],[`Pause`,`Y`]];core=new f(Re(1));mode=`endless`;mover=new l(150,40);softHeld=!1;time=0;endTimer=0;ended=!1;lastBeat=null;idleLine=0;announcedBest=!1;lastStage=0;palette=b(0).map(e=>new W(e));paletteTarget=b(0).map(e=>new W(e));visX=7;visY=0;fallOff=new Float32Array(eg);fallV=new Float32Array(eg);pops=new Float64Array(eg);sweptAt=new Float64Array(eg);dying=[];hardPending=!1;overPending=!1;passErases=0;lastCount=0;gray=0;lineFlash=0;frozen=!1;gems=new Lm(eg+40);ghosts=new Lm(4,zm());well;rails;lineMat;line;curtain;curtainMat;stats=new Bm(.3,.5,1e3);statsKey=``;shownScore=0;v=new V;glow=new W(`#c38bff`);constructor(e){this.shell=e,this.root.add(this.gems.mesh,this.ghosts.mesh),this.ghosts.mesh.renderOrder=10,this.well=new K({vertexShader:cg,fragmentShader:`
        ${xp}
        uniform vec3 uGlow;
        uniform float uDim;
        uniform float uLine;
        varying vec2 vUv;
        void main() {
          vec2 cell = vUv * vec2(16.0, 10.0);
          vec2 f = abs(fract(cell) - 0.5);
          float grid = smoothstep(0.47, 0.5, max(f.x, f.y)) * 0.08;
          float bar = (1.0 - smoothstep(0.0, 0.06, abs(fract(cell.x / 4.0) - 0.0))) * 0.05;
          // A wash trailing behind the timeline.
          float behind = uLine - cell.x;
          float wash = behind > 0.0 ? exp(-behind * 0.55) * 0.18 : 0.0;
          float entry = (1.0 - smoothstep(0.0, 0.5, vUv.y - 0.9)) * step(0.9, vUv.y) * step(7.0, cell.x) * step(cell.x, 9.0) * 0.1;
          vec3 c = vec3(0.03, 0.02, 0.07) + uGlow * (grid + bar + wash * (0.7 + uBeat * 0.3) + entry);
          c += vec3(1.0, 0.25, 0.35) * uDanger * 0.12 * (0.5 + 0.5 * sin(uTime * 6.0)) * smoothstep(0.5, 1.0, vUv.y);
          gl_FragColor = vec4(c * uDim, 0.85);
          #include <colorspace_fragment>
        }
      `,uniforms:{...Y,uGlow:{value:this.glow},uDim:{value:1},uLine:{value:0}},transparent:!0,depthWrite:!1});let t=new G(new ic(Zh,Qh),this.well);t.position.z=-.024750000000000005,t.renderOrder=-5,this.root.add(t),this.rails=new Ca({color:this.glow,toneMapped:!1});let n=.007;for(let[e,t,r,i]of[[Zh+n*2,n,0,-Qh/2-n/2],[n,Qh,-Zh/2-n/2,0],[n,Qh,Zh/2+n/2,0]]){let a=new G(new Ro(e,t,n),this.rails);a.position.set(r,i,0),this.root.add(a)}this.lineMat=new K({vertexShader:cg,fragmentShader:`
        ${xp}
        uniform vec3 uColor;
        uniform float uFlash;
        varying vec2 vUv;
        void main() {
          float x = abs(vUv.x - 0.5) * 2.0;
          float core = 1.0 - smoothstep(0.0, 0.12, x);
          float glow = pow(1.0 - x, 3.0);
          float a = (core * 0.9 + glow * 0.5) * (0.7 + uBeat * 0.4 + uFlash * 0.6);
          gl_FragColor = vec4(mix(uColor, vec3(1.0), core * 0.6) * a, a);
          #include <colorspace_fragment>
        }
      `,uniforms:{...Y,uColor:{value:this.glow},uFlash:{value:0}},transparent:!0,depthWrite:!1,blending:2}),this.line=new G(new ic(Xh*1.2,Qh+.06),this.lineMat),this.line.renderOrder=14,this.root.add(this.line),this.curtainMat=new K({vertexShader:cg,fragmentShader:`
        ${xp}
        uniform vec3 uColor;
        uniform float uA;
        varying vec2 vUv;
        void main() {
          float x = abs(vUv.x - 0.5) * 2.0;
          float core = pow(1.0 - x, 6.0);
          float glow = pow(1.0 - x, 2.0) * 0.35;
          float h = vUv.y;
          float fade = smoothstep(0.0, 0.04, h) * (1.0 - smoothstep(0.35, 1.0, h));
          float shimmer = 0.75 + 0.25 * texture2D(uNoise, vec2(vUv.x * 0.3, h * 2.0 - uFxTime * 0.08)).r;
          float a = uA * (core + glow) * fade * shimmer;
          gl_FragColor = vec4(mix(uColor, vec3(1.0), core * 0.5) * a, a);
          #include <colorspace_fragment>
        }
      `,uniforms:{...Y,uColor:{value:this.glow},uA:{value:.3}},transparent:!0,depthWrite:!1,blending:2,side:2}),this.curtain=new G(new ic(rg,ig).translate(0,ig/2,0),this.curtainMat),this.curtain.renderOrder=6,this.curtain.frustumCulled=!1,this.root.add(this.curtain),this.stats.mesh.position.set(-Zh/2-.2,0,0),this.root.add(this.stats.mesh)}start(e,t){this.mode=e,this.core=new f(t),this.core.drain(),this.mover.releaseAll(),this.softHeld=!1,this.time=0,this.endTimer=0,this.ended=!1,this.lastBeat=null,this.announcedBest=!1,this.lastStage=0,this.paletteTarget=b(0).map(e=>new W(e)),this.palette=this.paletteTarget.map(e=>e.clone()),this.fallOff.fill(0),this.fallV.fill(0),this.pops.fill(0),this.sweptAt.fill(0),this.dying=[],this.gray=0,this.shownScore=0,this.passErases=0,this.lastCount=0,this.snapBlock()}update(e){this.ended||(this.endTimer>0?(this.endTimer-=e,this.endTimer<=0&&this.finish(`fail`)):(this.time+=e,this.mode===`timed`&&this.time>=12e4?(this.time=_,this.finish(`win`)):(this.mover.tick(e,e=>this.doMove(e,!0)),this.frozen||(this.core.fall(e,this.softHeld),this.core.advance(this.beatDelta(e))),this.react(this.core.drain()))))}intensity(){let e=this.core,t=0;for(let n=0;n<16;n++)t=Math.max(t,e.height(n));return Math.min(1,.18+t/10*.4+Math.min(e.combo,4)*.08+Math.min(e.runCount,8)*.025)}danger(){if(!this.shell.playing||this.ended||this.endTimer>0)return 0;let e=0;for(let t=6;t<=9;t++)e=Math.max(e,this.core.height(t));return Math.max(0,Math.min(1,(e-4)/4))}stage(){return this.core.stage}result(){let e=this.core,t=this.mode===`timed`&&this.time>=12e4;return{value:e.score,heading:t?`Time's up`:`Game over`,won:t,stats:[[`Squares`,ag(e.squares)],[`Best sweep`,String(e.bestPass)],[`Best combo`,e.bestCombo>=2?`×${e.bestCombo}`:`–`],[`Blocks`,ag(e.blocks)],[`Stage`,String(e.stage+1)],[`Time`,og(this.time)]],detail:`${e.squares} ${e.squares===1?`square`:`squares`}`}}centre(){return this.root.localToWorld(new V)}pause(){this.mover.releaseAll(),this.softHeld=!1,this.lastBeat=null}resume(){this.pause()}pad(e){for(let t of e){let e=t.control;if(e===`stick-left`||e===`stick-right`){let n=e===`stick-left`?-1:1;t.down?this.mover.press(n,e=>this.doMove(e)):this.mover.release(n)}else e===`stick-down`?this.softHeld=t.down&&this.canAct():t.down&&(e===`trigger`&&t.hand===`right`?this.doHard():e===`a`?this.doRotate(1):(e===`b`||e===`trigger`&&t.hand===`left`)&&this.doRotate(-1))}}key(e,t){let n=e.code;if(![`ArrowLeft`,`ArrowRight`,`ArrowDown`,`ArrowUp`,`KeyX`,`KeyZ`,`Space`].includes(n))return!1;if(t&&e.repeat)return!0;if(n===`ArrowLeft`||n===`ArrowRight`){let e=n===`ArrowLeft`?-1:1;return t?this.mover.press(e,e=>this.doMove(e)):this.mover.release(e),!0}return n===`ArrowDown`?(this.softHeld=t&&this.canAct(),!0):(t&&(n===`ArrowUp`||n===`KeyX`?this.doRotate(1):n===`KeyZ`?this.doRotate(-1):n===`Space`&&this.doHard()),!0)}canAct(){return this.shell.playing&&!this.ended&&this.endTimer<=0&&!!this.core.block}doMove(e,t=!1){if(!this.canAct())return!1;let n=this.core.move(e);return n&&!t?N.move():n&&N.tone({freq:N.chordTone(0,2),dur:.02,type:`triangle`,gain:.02}),n}doRotate(e){this.canAct()&&(this.core.rotate(e),N.rotate())}doHard(){this.canAct()&&(this.hardPending=!0,this.core.hardDrop(),this.react(this.core.drain()),this.hardPending=!1)}beatDelta(e){let t=e*Ie(this.core.stage).bpm/6e4,n=N.music?.beat()??null,r=t;if(n!==null&&this.lastBeat!==null){let i=n-this.lastBeat;i>=0&&i<=t*2.5+.02&&(r=i);let a=((n-this.core.line)%1+1.5)%1-.5;r+=a*Math.min(1,e/500)}return this.lastBeat=n,Math.max(0,r)}react(e){let t=0,n=!1;this.overPending=!1;for(let r of e)r.type===`erase`?t+=r.squares:r.type===`single`||r.type===`allClear`?n=!0:r.type===`over`&&(this.overPending=!0);let r=!1;for(let i of e)switch(i.type){case`land`:this.onLand(i);break;case`spawn`:this.snapBlock();break;case`sweep`:this.onSweep(i.cells,i.count);break;case`erase`:this.onErase(i,r?null:{squares:t,bonus:n}),r=!0;break;case`pass`:this.onPass(i);break;case`single`:this.onBonus(`Single colour`,i.points,!1);break;case`allClear`:this.onBonus(`All clear`,i.points,!0);break;case`over`:this.onOver()}let i=this.core.stage;i!==this.lastStage&&(this.paletteTarget=b(i).map(e=>new W(e)),this.lastStage=i,N.levelUp(),this.shell.bump(.25));let a=this.shell.best();!this.announcedBest&&a!==null&&a>0&&this.core.score>a&&this.shell.playing&&(this.announcedBest=!0,this.shell.toast([{text:`New best`,size:.08,color:M.gold,display:!0}],1600,`top`),N.newBest(),this.shell.host.flare(.6))}snapBlock(){let e=this.core.block;e&&(this.visX=e.x,this.visY=e.y-.6)}squaresAt(e,t){let n=this.core,r=new Set;for(let{x:i,y:a}of e)for(let e=a-1;e<=a;e++)for(let a=i-1;a<=i;a++){if(a<0||e<0||a>=15||e>=9)continue;let i=n.get(a,e);if(i&&n.get(a+1,e)===i&&n.get(a,e+1)===i&&n.get(a+1,e+1)===i){if(t){let n=[h(a,e),h(a+1,e),h(a,e+1),h(a+1,e+1)].map(e=>t.get(e));if(n[0]!==void 0&&n.every(e=>e===n[0]))continue}r.add(h(a,e))}}return r.size}squareCue(e,t=.05){let n=Math.min(e,3),r=N.chordTone(3+n,1),i=N.chordTone(4+n,1);N.tone({freq:r,dur:.16,type:`triangle`,gain:.13,delay:t,wet:.25}),N.tone({freq:i,dur:.32,type:`triangle`,gain:.15,delay:t+.07,wet:.35}),N.tone({freq:i*2,dur:.18,type:`sine`,gain:.06,delay:t+.07,wet:.35})}onLand(e){let t=performance.now(),n=this.hardPending,r=0;for(let n of e.cells){let e=h(n.x,n.y);this.fallOff[e]=Math.max(0,n.y-n.fromY),this.fallV[e]=0,this.pops[e]=t+this.fallOff[e]*40,r=Math.max(r,n.y-n.fromY)}let i=Math.min(e.drop+r,9)/9;this.overPending||(n?N.impact(.2+.8*i):N.place(.45+.4*Math.min(r,4)/4)),this.shell.haptics([{hand:n?`right`:`both`,intensity:n?.35+i*.4:.2,ms:n?24+i*20:16}]);let a=this.squaresAt(e.cells);if(a>0&&!this.overPending&&this.squareCue(a,n?.07:.05),this.shell.fx!==`off`)for(let t of[0,1]){let r=e.x+t,a=Math.max(...e.cells.filter(e=>e.x===r).map(e=>e.y)),o=this.root.localToWorld(sg(r,a));o.y-=Xh*.4,this.shell.host.bursts.spawn({at:o,color:this.palette[t],count:n?6:3,dir:new V(0,.5,1).normalize(),spread:1.2,speed:[.3,n?1+i:.7],life:[.3,.6],size:[.008,.018],gravity:2.5,drag:1.4})}}onSweep(e,t){let n=performance.now();for(let t of e)this.sweptAt[h(t.x,t.y)]=n;if(t>this.lastCount){let e=N.chordTone(Math.min(t,9),1);N.tone({freq:e,dur:.12,type:`triangle`,gain:.09,wet:.2}),N.tone({freq:e*2,dur:.07,type:`sine`,gain:.035})}this.lastCount=t}onErase(e,t){let n=performance.now();for(let t of e.cells)this.dying.push({x:t.x,y:t.y,v:t.color,at:n+Math.max(0,e.col-t.x)*22}),this.fallOff[h(t.x,t.y)]=0;for(let t of e.moves){let e=h(t.x,t.toY);this.fallOff[e]=t.toY-t.fromY+.15,this.fallV[e]=-3,this.sweptAt[e]=0}if(t){let e=t.squares>=4||t.bonus;N.reward(t.squares,Math.min(5,this.core.combo+this.passErases),e);let n=e?[{hand:`both`,intensity:.85,ms:55},{hand:`both`,intensity:.55,ms:40,delay:100},{hand:`both`,intensity:.9,ms:80,delay:190}]:[{hand:`both`,intensity:.45,ms:32},{hand:`both`,intensity:.3,ms:22,delay:70}];this.shell.haptics(n),this.passErases++}let r=new Map(e.moves.map(e=>[h(e.x,e.toY),e.toY-e.fromY])),i=this.squaresAt(e.moves.map(e=>({x:e.x,y:e.toY})),r);i>0&&this.squareCue(i,.32);let a=Math.min(e.squares,10)/10;this.lineFlash=1+.6*a,this.shell.bump(.06+Math.min(e.squares,8)*.04),this.shell.host.flare(.15+a*.4),this.shell.toast([{text:`+${ag(e.points)}`,size:.045,color:M.text,display:!1}],900,`low`)}onPass(e){if(this.lastCount=0,this.passErases=0,e.squares<4)return;let t=e.combo>=2?M.gold:M.text;this.shell.toast([{text:`${e.squares} squares`,size:.08,color:t,display:!0},{text:`×${e.mult} sweep  +${ag(e.bonus)}`,size:.04,color:M.muted,display:!1}],1500),e.combo>=2&&(this.shell.toast([{text:`Combo ×${e.combo}`,size:.06,color:M.gold,display:!0}],1500,`top`),N.levelUp()),N.sparkle(e.combo*2),this.shell.bump(.2+Math.min(e.combo,4)*.1),this.shell.fx!==`off`&&(this.shell.host.shock.fire(this.centre(),new W(Om(Ie(this.core.stage)).glow)),this.shell.host.flare(.9))}onBonus(e,t,n){this.shell.toast([{text:e,size:.09,color:M.gold,display:!0},{text:`+${ag(t)}`,size:.045,color:M.muted,display:!1}],1800),N.perfect(),n&&(N.sparkle(8),N.sparkle(12)),this.shell.bump(n?.5:.3),this.shell.fx!==`off`&&(this.shell.host.shock.fire(this.centre(),new W(M.gold)),this.shell.host.flare(1),this.shell.host.bursts.spawn({at:this.centre(),color:new W(M.gold),count:n?500:200,dir:new V(0,0,1),spread:1.5,speed:[2,6],life:[1.5,3],size:[.015,.04],drag:.3}),n&&this.shell.host.slowmo())}onOver(){this.mover.releaseAll(),this.softHeld=!1,this.endTimer=420,N.crash()}finish(e){if(!this.ended){if(this.ended=!0,this.mover.releaseAll(),this.softHeld=!1,this.shell.fx!==`off`)for(let t=0;t<10;t++)for(let n=0;n<16;n++){let r=this.core.get(n,t);if(!r)continue;let i=this.root.localToWorld(sg(n,t)),a=e===`win`?new V(0,1,.3):new V((n-7.5)/8,.2,1);this.shell.host.bursts.spawn({at:i,color:this.palette[+(r===2)],count:2,dir:a.normalize(),spread:.5,speed:[.4,1.4],life:[1,2],size:[.01,.025],gravity:e===`win`?-.3:1.5,drag:.5})}this.shell.end(e,{text:e===`win`?`Time's up`:`Game over`,sub:ag(this.core.score)})}}render(e,t){let n=this.core,r=this.shell.dim,i=this.shell.fx,a=Ie(n.stage);this.glow.lerp(new W(Om(a).glow),1-Math.exp(-e*1.5));for(let t=0;t<2;t++)this.palette[t].lerp(this.paletteTarget[t],1-Math.exp(-e*2));this.well.uniforms.uDim.value=r,this.gems.material.uniforms.uDim.value=r,this.gray+=((this.endTimer>0||this.shell.phase===`ending`?.8:0)-this.gray)*(1-Math.exp(-e*3)),this.gems.material.uniforms.uGray.value=this.gray,this.rails.color.copy(this.glow),Y.uDanger.value>.05&&this.rails.color.lerp(new W(`#ff4a6a`),Y.uDanger.value*(.5+.5*Math.sin(t/140))),this.lineFlash*=Math.exp(-e/.22),i===`off`&&(this.lineFlash=0);let o=this.shell.phase===`title`;o&&(this.idleLine=(this.idleLine+e*Ie(0).bpm/60)%16);let s=o?this.idleLine:n.line,c=s*Xh-Zh/2;this.line.position.set(c,0,.035),this.lineMat.uniforms.uFlash.value=this.lineFlash,this.well.uniforms.uLine.value=s;let l=Jh.get(),u=new V(0,-l.height,l.distance),d=(s/16-.5)*ng,f=this.root.worldToLocal(new V(0,0,0)).y;this.curtain.position.set(u.x+Math.sin(d)*tg,f,u.z-Math.cos(d)*tg),this.curtain.lookAt(this.root.localToWorld(u.clone().setY(this.curtain.position.y))),this.curtainMat.uniforms.uA.value=i===`off`?0:(.24+Y.uBeat.value*.16+this.lineFlash*.3)*(i===`full`?1:.5)*r;for(let t=0;t<eg;t++)this.fallOff[t]<=0||(this.fallV[t]+=70*e,this.fallOff[t]=Math.max(0,this.fallOff[t]-Math.max(0,this.fallV[t])*e));let p=this.gems;p.begin();let m=.5+.5*Math.sin(t/160);for(let e=0;e<10;e++)for(let r=0;r<16;r++){let i=h(r,e),a=n.cells[i];if(!a)continue;sg(r,e,this.v);let o=Math.max(0,1-Math.abs(t-this.pops[i])/160),s=n.swept[i]?.45+.15*m:0,c=n.marked[i]?.12+Y.uBeat.value*.15:0;p.add(this.v.x,this.v.y+this.fallOff[i]*Xh,o*.012,$h*(1+o*.08),this.palette[+(a===2)],Math.max(s,c,o*.4),n.marked[i]?1.8:1)}this.dying=this.dying.filter(e=>{if(t<e.at)return sg(e.x,e.y,this.v),p.add(this.v.x,this.v.y,0,$h,this.palette[+(e.v===2)],.9,1.6),!0;if(i!==`off`){let t=this.root.localToWorld(sg(e.x,e.y)),n=this.shell.host.head().clone().sub(t).normalize();i===`full`&&this.shell.host.bursts.spawn({at:t,color:this.palette[+(e.v===2)],count:4,dir:n.add(new V((e.x-7.5)*.04,0,0)).normalize(),spread:.4,speed:[2,4.5],life:[.9,1.6],size:[.01,.026],drag:.35}),this.shell.host.bursts.spawn({at:t,color:this.palette[+(e.v===2)],count:2,dir:new V(.4,.6,-.7).normalize(),spread:.6,speed:[1,2.6],life:[1.2,2],size:[.012,.03],drag:.25,gravity:-.1})}return!1});let g=n.block;if(this.ghosts.begin(),g&&!o&&!this.ended){this.visX+=(g.x-this.visX)*(1-Math.exp(-e*30)),this.visY+=(g.y-this.visY)*(1-Math.exp(-e*22));let t=g.quad;[[0,0],[1,0],[0,1],[1,1]].forEach(([e,n],r)=>{sg(this.visX+e,this.visY+n,this.v),p.add(this.v.x,this.v.y,.004,$h,this.palette[+(t[r]===2)],.06,1.6)});let i=n.landingRows();if(i&&(i[0]>g.y+1||i[1]>g.y+1)){for(let[e,t]of[[0,i[0]],[1,i[1]]])for(let n of[0,1])sg(g.x+e,t-1+n,this.v),this.ghosts.add(this.v.x,this.v.y,0,$h,this.glow);this.ghosts.material.uniforms.uColor.value.copy(this.glow),this.ghosts.material.uniforms.uAlpha.value=.8*r}}this.ghosts.end();let _=Qh/2-.06;n.queue.forEach((e,t)=>{let n=t===0?Xh*.8:Xh*.6,r=Zh/2+.13;[[-.5,.5],[.5,.5],[-.5,-.5],[.5,-.5]].forEach(([i,a],o)=>p.add(r+i*n,_+a*n,0,n*.9,this.palette[+(e[o]===2)],0,t===0?1:.8)),_-=n*2+.05}),p.end(),this.drawStats()}drawStats(){let e=this.core,t=this.shell.phase;this.stats.mesh.visible=t===`playing`||t===`countdown`||t===`ending`,this.shownScore+=(e.score-this.shownScore)*.2,Math.abs(e.score-this.shownScore)<1&&(this.shownScore=e.score);let n=this.shell.best(),r=[];if(this.mode===`timed`){let e=_-this.time;r.push([`Time left`,og(e),e<15e3?M.danger:M.text])}else r.push([`Time`,og(this.time),M.text]);r.push([`Squares`,ag(e.squares),M.text]),r.push([`This sweep`,String(e.runCount),e.runCount>=4?M.gold:M.text]),n!==null&&r.push([`Best`,ag(n),M.muted]);let i=`${Math.floor(this.shownScore)}|${r.map(e=>e[1]).join(`|`)}|${this.shell.phase===`title`}`;i===this.statsKey||this.stats.tooSoon()||(this.statsKey=i,this.stats.draw((e,t)=>{let n=t-16;Q(e,`Score`,n,44,34,{align:`right`,color:`#b9b0d6`,weight:700}),Q(e,ag(this.shownScore),n,112,60,{align:`right`,display:!0,weight:600});let i=186;for(let[t,a,o]of r)Q(e,t,n,i,30,{align:`right`,color:`#b9b0d6`,weight:700}),Q(e,a,n,i+50,44,{align:`right`,color:o,display:!0,weight:500}),i+=100}))}debugState(){let e=this.core;return{score:e.score,squares:e.squares,blocks:e.blocks,combo:e.combo,line:e.line,block:e.block?{x:e.block.x,y:e.block.y,quad:[...e.block.quad]}:null,rows:e.rows()}}debugTools(){return{load:e=>{this.core.load(e),this.fallOff.fill(0)},block:(e,t,n)=>{this.core.setBlock(S(e),t,n),this.snapBlock()},advance:e=>{this.core.advance(e),this.react(this.core.drain())},line:e=>{this.core.line=e,this.core.passSquares=0},freeze:(e=!0)=>{this.frozen=e},drop:()=>this.doHard()}}},$=.033,ug=20*$,dg=20*$,fg=.02,pg=$*.35,mg=2400,hg=900,gg=.03,_g=1.4,vg=320,yg=48,bg=new W(`#ffffff`),xg=new W(M.danger),Sg=new W(r),Cg=new W(Le),wg={ArrowUp:`up`,KeyW:`up`,ArrowDown:`down`,KeyS:`down`,ArrowLeft:`left`,KeyA:`left`,ArrowRight:`right`,KeyD:`right`},Tg=e=>Math.floor(e).toLocaleString(`en-US`),Eg=e=>Number.isInteger(e)?`${e}.0`:String(e),Dg=e=>Math.max(0,Math.min(1,e)),Og=e=>1-(1-Dg(e))**3,kg=e=>{let t=Dg(e)-1;return 1+2.4*t*t*t+1.4*t*t},Ag=e=>e*.85+e*e*(3-2*e)*.15;function jg(e,t){return e>t/2?e-t:e<-t/2?e+t:e}function Mg(e,t,n=new V){return n.set((e+.5)*$-ug/2,fg+dg/2-(t+.5)*$,0)}function Ng(e){let t=e.stops.map(e=>new W(e));return Array.from({length:yg},(e,n)=>{let r=n/47*(t.length-1),i=Math.min(t.length-2,Math.floor(r));return t[i].clone().lerp(t[i+1],r-i)})}var Pg=`varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,Fg=`
  varying vec3 vN;
  varying vec3 vView;
  #ifdef USE_INSTANCING
  attribute vec3 aColor;
  attribute float aFlash;
  varying vec3 vColor;
  varying float vFlash;
  #endif
  void main() {
    #ifdef USE_INSTANCING
    mat4 m = modelMatrix * instanceMatrix;
    vColor = aColor;
    vFlash = aFlash;
    #else
    mat4 m = modelMatrix;
    #endif
    vec4 world = m * vec4(position, 1.0);
    vN = normalize(mat3(m) * normal);
    vView = normalize(cameraPosition - world.xyz);
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`,Ig=`
  uniform float uBeat;
  uniform float uDim;
  uniform float uGray;
  uniform vec3 uLight;
  varying vec3 vN;
  varying vec3 vView;
  varying vec3 vColor;
  varying float vFlash;
  void main() {
    vec3 n = normalize(vN);
    vec3 v = normalize(vView);
    float facing = max(dot(n, v), 0.0);
    vec3 col = vColor * (0.6 + 0.3 * facing);
    // A bright neon core running down the middle of the tube.
    col = mix(col, mix(vColor, vec3(1.0), 0.5), pow(facing, 10.0) * 0.85);
    col += vColor * pow(1.0 - facing, 2.0) * 0.6;
    col += pow(max(dot(n, normalize(uLight + v)), 0.0), 40.0) * 0.3;
    col += vColor * (0.1 + uBeat * 0.08);
    float gray = dot(col, vec3(0.3, 0.55, 0.15));
    col = mix(col, vec3(gray * 0.5), uGray);
    col = mix(col, vec3(1.0), clamp(vFlash, 0.0, 1.0));
    gl_FragColor = vec4(col * uDim, 1.0);
    #include <colorspace_fragment>
  }
`,Lg=`
  uniform vec3 uColor;
  uniform float uFlash;
  uniform float uDim;
  uniform vec3 uLight;
  varying vec3 vN;
  varying vec3 vView;
  void main() {
    vec3 n = normalize(vN);
    vec3 v = normalize(vView);
    float facing = max(dot(n, v), 0.0);
    vec3 col = mix(uColor * 0.45, mix(uColor, vec3(1.0), 0.45), pow(facing, 1.5));
    col += pow(max(dot(n, normalize(uLight + v)), 0.0), 50.0) * 0.7;
    col += uColor * pow(1.0 - facing, 2.0) * 0.7;
    col = mix(col, vec3(1.0), uFlash);
    gl_FragColor = vec4(col * uDim, 1.0);
    #include <colorspace_fragment>
  }
`,Rg=`
  uniform vec3 uColor;
  uniform float uA;
  uniform float uR;
  uniform float uW;
  uniform float uArc;
  varying vec2 vUv;
  void main() {
    vec2 p = vUv * 2.0 - 1.0;
    float d = length(p);
    float a;
    if (uR > 0.0) {
      a = exp(-pow((d - uR) / uW, 2.0));
      float ang = atan(p.x, p.y) / 6.2831853 + 0.5;
      a *= step(1.0 - uArc, ang);
    } else {
      a = exp(-d * d * 5.0) * (1.0 - smoothstep(0.8, 1.0, d));
    }
    a *= uA;
    gl_FragColor = vec4(uColor * a, a);
    #include <colorspace_fragment>
  }
`;function zg(e,t=0,n=.1){return new K({vertexShader:Pg,fragmentShader:Rg,uniforms:{uColor:{value:e.clone()},uA:{value:0},uR:{value:t},uW:{value:n},uArc:{value:1}},transparent:!0,depthWrite:!1,blending:2})}var Bg=class{shell;root=new ti;lanes={top:fg+dg/2+.24,mid:.06,low:fg-dg/2-.09};aims=!0;controls=[[`Turn`,`Either thumbstick`],[`Swipe`,`Hold the trigger and swipe across the arena`],[`Turn again`,`Keep holding and bend the swipe`],[`Point`,`A quick click beside the head turns towards it`],[`Hands`,`Pinch works as the trigger`],[`Pause`,`Y`]];snake=new ve(Re(1));demo;skin=T.classic;rampBody=Ng(T.classic);demoRamp=Ng(T.wrap);held=!1;playTime=0;stopUntil=0;endIn=0;explodeAt=1/0;exploded=0;deadAt=0;finished=!1;announcedBest=!1;lastStreak=0;bulges=[];gulpAt=-1e9;gulpAmt=0;stretchAt=-1e9;flashAt=-1e9;flashColor=new W;boardFlash=null;foodKey=``;foodAt=0;goldKey=``;goldAt=0;swipe=null;turned=!1;lastHaptic=0;shownScore=0;hudKey=``;ux=[];uy=[];beads;beadColor;beadFlash;beadMat;glows;glowColor;glowMat;nBeads=0;nGlows=0;eyes=[];pupils=[];food;foodHalo;gold;goldHalo;goldRing;well;rails;solidRails=new ti;openRails=new ti;halo;fx=[];floaters=[];hud=new Bm(.7,.15,1e3);plane=new ha;m=new U;q=new ar;s=new V;v=new V;glowTint=new W(`#5ee0f0`);constructor(e){this.shell=e,this.demo=this.newDemo();let t=new V(-.35,.75,.55).normalize();this.well=new K({vertexShader:Pg,fragmentShader:`
        ${xp}
        uniform vec3 uGlow;
        uniform float uDim;
        uniform vec3 uFlashColor;
        uniform float uFlash;
        uniform vec2 uFlashAt;
        uniform float uEdgeDanger;
        varying vec2 vUv;
        void main() {
          vec2 size = vec2(${Eg(20+pg/$*2)}, ${Eg(20+pg/$*2)});
          vec2 cell = vUv * size - ${Eg(pg/$)};
          vec2 f = fract(cell) - 0.5;
          float inside = step(0.0, cell.x) * step(cell.x, 20.0) * step(0.0, cell.y) * step(cell.y, 20.0);
          float dotc = (1.0 - smoothstep(0.05, 0.1, length(f))) * inside;
          vec3 c = vec3(0.02, 0.015, 0.05) + vec3(0.94, 0.91, 0.98) * dotc * (0.08 + uBeat * 0.04);
          c += uGlow * 0.015;
          float fl = uFlash * (1.0 - 0.6 * clamp(distance(vUv, uFlashAt) * 1.4, 0.0, 1.0));
          c += uFlashColor * fl * 0.5;
          float edge = min(min(vUv.x, 1.0 - vUv.x), min(vUv.y, 1.0 - vUv.y));
          c += vec3(1.0, 0.25, 0.35) * uDanger * uEdgeDanger * (1.0 - smoothstep(0.0, 0.14, edge)) * (0.25 + 0.2 * sin(uTime * 7.0));
          gl_FragColor = vec4(c * uDim, 0.92);
          #include <colorspace_fragment>
        }
      `,uniforms:{...Y,uGlow:{value:this.glowTint},uDim:{value:1},uFlashColor:{value:new W},uFlash:{value:0},uFlashAt:{value:new B(.5,.5)},uEdgeDanger:{value:1}},transparent:!0,depthWrite:!1});let n=new G(new ic(ug+pg*2,dg+pg*2),this.well);n.position.set(0,fg,-.0165),n.renderOrder=-5,this.root.add(n),this.rails=new Ca({color:new W(this.skin.stops[0]),toneMapped:!1,transparent:!0});let r=.007,i=ug+pg*2,a=dg+pg*2;for(let[e,t,n,o]of[[i+r*2,r,0,fg+a/2+r/2],[i+r*2,r,0,fg-a/2-r/2],[r,a,-i/2-r/2,fg],[r,a,i/2+r/2,fg]]){let i=new G(new Ro(e,t,r),this.rails);i.position.set(n,o,0),this.solidRails.add(i)}let o=new Ro($*.55,r*.8,r*.8);for(let e=0;e<20;e++){let t=(e+.5)*$-ug/2;for(let e of[fg+a/2+r/2,fg-a/2-r/2]){let n=new G(o,this.rails);n.position.set(t,e,0),this.openRails.add(n)}}for(let e=0;e<20;e++){let t=fg+dg/2-(e+.5)*$;for(let e of[-i/2-r/2,i/2+r/2]){let n=new G(o,this.rails);n.rotation.z=Math.PI/2,n.position.set(e,t,0),this.openRails.add(n)}}this.root.add(this.solidRails,this.openRails),this.halo=new K({vertexShader:Pg,fragmentShader:`
        uniform vec3 uColor;
        uniform float uA;
        varying vec2 vUv;
        void main() {
          vec2 p = abs(vUv - 0.5) * 2.0;
          float box = max(p.x, p.y);
          float a = uA * (1.0 - smoothstep(0.8, 1.0, box)) * smoothstep(0.66, 0.88, box);
          gl_FragColor = vec4(uColor * a, a);
          #include <colorspace_fragment>
        }
      `,uniforms:{uColor:{value:this.glowTint},uA:{value:.3}},transparent:!0,depthWrite:!1,blending:2});let s=new G(new ic(ug*1.32,dg*1.32),this.halo);s.position.set(0,fg,-.033*.55),s.renderOrder=-4,this.root.add(s),this.beadMat=new K({vertexShader:Fg,fragmentShader:Ig,uniforms:{uBeat:Y.uBeat,uDim:{value:1},uGray:{value:0},uLight:{value:t}}});let c=new cc(1,12,8);this.beadColor=new Qa(new Float32Array(mg*3),3).setUsage(bn),this.beadFlash=new Qa(new Float32Array(mg),1).setUsage(bn),c.setAttribute(`aColor`,this.beadColor),c.setAttribute(`aFlash`,this.beadFlash),this.beads=new oo(c,this.beadMat,mg),this.beads.instanceMatrix.setUsage(bn),this.beads.frustumCulled=!1,this.beads.count=0,this.root.add(this.beads),this.glowMat=new K({vertexShader:`
        attribute vec3 aColor;
        varying vec3 vColor;
        varying vec2 vUv;
        void main() {
          vColor = aColor;
          vUv = uv;
          gl_Position = projectionMatrix * viewMatrix * modelMatrix * instanceMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform float uA;
        varying vec3 vColor;
        varying vec2 vUv;
        void main() {
          float d = length(vUv * 2.0 - 1.0);
          float a = uA * exp(-d * d * 4.0) * (1.0 - smoothstep(0.85, 1.0, d));
          gl_FragColor = vec4(vColor * a, a);
          #include <colorspace_fragment>
        }
      `,uniforms:{uA:{value:.2}},transparent:!0,depthWrite:!1,blending:2});let l=new ic(1,1);this.glowColor=new Qa(new Float32Array(hg*3),3).setUsage(bn),l.setAttribute(`aColor`,this.glowColor),this.glows=new oo(l,this.glowMat,hg),this.glows.instanceMatrix.setUsage(bn),this.glows.frustumCulled=!1,this.glows.count=0,this.glows.renderOrder=-3,this.root.add(this.glows);let u=new cc(1,12,8),d=new Ca({color:`#ffffff`,toneMapped:!1}),f=new Ca({color:`#140c26`});for(let e=0;e<2;e++){let e=new G(u,d),t=new G(u,f);this.eyes.push(e),this.pupils.push(t),this.root.add(e,t)}let p=e=>new K({vertexShader:Fg,fragmentShader:Lg,uniforms:{uColor:{value:e.clone()},uFlash:{value:0},uDim:{value:1},uLight:{value:t}}}),m=new cc(1,20,14),h=new ic(1,1);this.food=new G(m,p(Sg)),this.foodHalo=new G(h,zg(Sg)),this.gold=new G(m,p(Cg)),this.goldHalo=new G(h,zg(Cg)),this.goldRing=new G(h,zg(Cg,.8,.06));for(let e of[this.foodHalo,this.goldHalo,this.goldRing])e.renderOrder=8;this.root.add(this.food,this.foodHalo,this.gold,this.goldHalo,this.goldRing),this.hud.mesh.position.set(0,fg+dg/2+.1,0),this.root.add(this.hud.mesh)}start(e,t){this.skin=T[e]??T.classic,this.rampBody=Ng(this.skin),this.snake=new ve(t,{wrap:e===`wrap`}),this.held=!1,this.playTime=0,this.stopUntil=0,this.endIn=0,this.explodeAt=1/0,this.exploded=0,this.deadAt=0,this.finished=!1,this.announcedBest=!1,this.lastStreak=0,this.bulges=[],this.gulpAt=-1e9,this.stretchAt=-1e9,this.flashAt=-1e9,this.boardFlash=null,this.foodKey=``,this.goldKey=``,this.swipe=null,this.turned=!1,this.shownScore=0;for(let e of this.fx)e.mesh.visible=!1;for(let e of this.floaters)e.panel.mesh.visible=!1;this.shell.toast([{text:`Thumbstick, or hold the trigger and swipe, to turn`,size:.03,color:M.muted,display:!1}],3200,`low`)}update(e){this.endIn>0?(this.endIn-=e,this.endIn<=0&&(this.endIn=0,this.explodeAt=performance.now()+230,this.shell.end(`fail`,{text:`Crashed`,sub:Tg(this.snake.score)}))):this.snake.over||(this.playTime+=e,!(this.held||performance.now()<this.stopUntil)&&this.consume(this.snake.advance(e)))}intensity(){let e=this.snake,t=(e.speed-7)/9;return Math.min(1,.18+t*.45+Math.min(1,e.length/60)*.25+e.streak*.025)}danger(){if(!this.shell.playing||this.snake.over)return 0;let e=this.snake.hazardAhead();return e===1?1:e===2?.55:0}stage(){return Math.floor(this.snake.foods/10)}result(){let e=this.snake,t=e.cause===`full`;return{value:e.score,heading:t?`Board filled`:`Crashed`,won:t,stats:[[`Length`,String(e.length)],[`Food`,String(e.foods)],[`Golden orbs`,String(e.golds)],[`Best streak`,e.bestStreak>1?`×${e.bestStreak}`:`—`],[`Top speed`,`Level ${e.level}`],[`Time`,s(e.clock)]],detail:`Length ${e.length}`}}centre(){return this.root.localToWorld(new V(0,fg,0))}pause(){this.swipe=null}resume(){this.swipe=null}pad(e){for(let t of e)if(t.control===`trigger`)this.trigger(t.down);else if(t.down)t.control===`stick-up`?this.turn(`up`):t.control===`stick-down`?this.turn(`down`):t.control===`stick-left`?this.turn(`left`):t.control===`stick-right`&&this.turn(`right`);else continue}mouse(e){this.trigger(e)}key(e,t){let n=wg[e.code];return n?(t&&!e.repeat&&this.turn(n),!0):!1}turn(e){this.shell.playing&&!this.snake.over&&this.snake.turn(e)&&(this.turned=!0,N.move())}trigger(e){let t=performance.now();if(e){if(!this.shell.playing||this.snake.over)return;let e=this.aimPoint();this.swipe={x:e?.x??null,y:e?.y??0,start:e?{x:e.x,y:e.y}:null,dir:null,at:t};return}let n=this.swipe;this.swipe=null,n&&!n.dir&&n.start&&t-n.at<vg&&this.tapToward(n.start)}trackSwipe(e){let t=this.swipe;if(!t||!e)return;if(t.x===null){t.x=e.x,t.y=e.y,t.start??={x:e.x,y:e.y};return}let n=e.x-t.x,r=t.y-e.y,i;if(t.dir){let a=t.dir===`left`||t.dir===`right`,o=a?n:r,s=a?r:n;if(Math.abs(s)>=gg&&Math.abs(s)>=Math.abs(o)*_g)i=a?s>0?`down`:`up`:s>0?`right`:`left`;else if(Math.abs(o)>=gg){t.x=e.x,t.y=e.y;let n=o>0?a?`right`:`down`:a?`left`:`up`;if(n===t.dir)return;i=n}else return}else{if(Math.max(Math.abs(n),Math.abs(r))<gg)return;i=Math.abs(n)>Math.abs(r)?n>0?`right`:`left`:r>0?`down`:`up`}t.x=e.x,t.y=e.y,t.dir=i,this.turn(i)}tapToward(e){let t=this.snake;if(!this.shell.playing||t.over)return;let n=this.headPoint(),r=t.queue[t.queue.length-1]??t.dir,i=Math.max($*1.1,.03),a=e.x-n.x,o=n.y-e.y;r===`left`||r===`right`?Math.abs(o)>i&&this.turn(o<0?`up`:`down`):Math.abs(a)>i&&this.turn(a<0?`left`:`right`)}aimPoint(){let e=this.shell.host.aim();if(!e)return null;this.root.updateWorldMatrix(!0,!1);let t=new V(0,0,1).transformDirection(this.root.matrixWorld);this.plane.setFromNormalAndCoplanarPoint(t,this.root.localToWorld(new V));let n=e.intersectPlane(this.plane,this.v);return n?this.root.worldToLocal(n.clone()):null}headPoint(){let e=this.snake,t=e.over?1:Ag(e.progress()),[n,r]=e.body;return Mg(r.x+jg(n.x-r.x,20)*t,r.y+jg(n.y-r.y,20)*t,new V)}consume(e){for(let t of e.steps)this.onStep(t);e.goldExpired&&this.onGoldExpired(e.goldExpired)}haptic(e,t=!1){let n=performance.now();!t&&n-this.lastHaptic<140||(this.lastHaptic=n,this.shell.haptics(e))}onStep(e){let t=performance.now(),n=this.snake,r=this.shell.fx,i=this.shell.host;if(e.died)return this.onDeath();if(e.ate){let{x:a,y:o,streak:s}=e.ate,c=this.world(a,o),l=s===3||s===5&&this.lastStreak<5;if(this.lastStreak=s,this.bulges.push(n.steps),this.gulp(t,.42),this.glow(a,o,Sg,$*3.6,260),this.ring(a,o,bg,$*.25,$*1.3,260),this.ring(a,o,Sg,$*.35,$*2,440),r!==`off`){let e=i.head().clone().sub(c).normalize();i.bursts.spawn({at:c,color:Sg,count:r===`full`?16:6,dir:e,spread:.9,speed:[.6,2],life:[.5,1],size:[.006,.016],drag:1.2}),i.bursts.spawn({at:c,color:bg,count:6,dir:new V(0,0,1),spread:1.4,speed:[.3,.8],life:[.25,.45],size:[.004,.01],drag:2})}if(N.eat(s),N.tone({freq:175,to:82,dur:.1,type:`sine`,gain:.26}),this.shell.bump(.05+s*.03),this.floater(`+${Tg(e.ate.points)}`,a,o,M.text),l){N.sparkle(s+3),this.haptic([{hand:`both`,intensity:.4,ms:25}],!0);let e=n.head;this.ring(e.x,e.y,Cg,$*.5,$*(s===5?3.4:2.6),560),r!==`off`&&i.bursts.spawn({at:this.world(e.x,e.y),color:Cg,count:s===5?26:14,dir:new V(0,.4,1).normalize(),spread:1.2,speed:[.5,1.6],life:[.6,1.1],size:[.006,.016],gravity:-.2,drag:.8}),i.flare(s===5?.45:.25),this.shell.bump(.12)}else this.haptic([{hand:`both`,intensity:.22,ms:14}]);s>=2&&this.shell.toast([{text:`Streak ×${s}`,size:l?.075:.055,color:M.gold,display:!0}],l?1200:1e3,`low`)}if(e.gold){let{x:a,y:o}=e.gold,s=this.world(a,o);if(this.bulges.push(n.steps),this.gulp(t,.62),this.glow(a,o,Cg,$*6.5,420),this.ring(a,o,bg,$*.25,$*1.9,380),this.ring(a,o,Cg,$*.4,$*3.4,680),this.ring(a,o,new W(`#ffa45c`),$*.3,$*5,900),this.flashBoard(a,o,Cg,.34,380),this.flashAt=t,this.flashColor.copy(Cg),r!==`off`){let e=i.head().clone().sub(s).normalize();i.bursts.spawn({at:s,color:Cg,count:r===`full`?40:14,dir:e,spread:1.1,speed:[1,3.2],life:[.8,1.5],size:[.008,.022],drag:.6}),i.bursts.spawn({at:s,color:new W(`#ffa45c`),count:14,dir:new V(0,1,.4).normalize(),spread:1.3,speed:[.5,1.5],life:[.8,1.4],size:[.006,.014],gravity:-.3,drag:.6}),i.shock.fire(this.centre(),Cg),i.flare(.7),this.stopUntil=t+80}N.noiseFx({dur:.035,freq:3e3,q:1.4,gain:.18}),N.reward(3,e.gold.streak,!0),this.haptic([{hand:`both`,intensity:.55,ms:30},{hand:`both`,intensity:.45,ms:30,delay:60},{hand:`both`,intensity:.35,ms:25,delay:120}],!0),this.shell.bump(.25),this.floater(`+${Tg(e.gold.points)}`,a,o,M.gold)}if(e.goldSpawned&&n.gold&&(this.ring(n.gold.x,n.gold.y,Cg,$*1.8,$*.5,380),N.tone({freq:N.chordTone(6,2),dur:.22,type:`sine`,gain:.07,wet:.3}),N.tone({freq:N.chordTone(8,2),dur:.22,type:`sine`,gain:.06,delay:.07,wet:.3})),e.levelUp){let e=n.level>=8;N.whoosh(!0),N.levelUp(),this.flashAt=t,this.flashColor.set(this.skin.stops[0]),r!==`off`&&(this.stretchAt=t),this.shell.bump(.15),i.flare(.5),this.haptic([{hand:`both`,intensity:.35,ms:40}],!0),this.shell.toast([{text:e?`Top speed`:`Faster`,size:.09,color:this.skin.stops[0],display:!0},{text:`Speed ${n.level}`,size:.04,color:M.muted,display:!1}],1300,`mid`)}(e.ate||e.gold)&&this.checkBest(),e.filled&&(this.finished=!0,this.shell.end(`win`,{text:`Board filled`,sub:Tg(n.score)}))}onGoldExpired(e){this.shell.fx!==`off`&&this.shell.host.bursts.spawn({at:this.world(e.x,e.y),color:Cg,count:10,dir:new V(0,1,0),spread:.8,speed:[.05,.25],life:[.4,.8],size:[.004,.009],gravity:-.2,drag:1}),N.tone({freq:N.chordTone(2,1),to:N.chordTone(0,0),dur:.2,type:`sine`,gain:.04})}checkBest(){let e=this.shell.best();this.announcedBest||e===null||this.snake.score<=e||(this.announcedBest=!0,this.shell.toast([{text:`New best`,size:.08,color:M.gold,display:!0}],1600,`top`),N.newBest(),this.shell.host.flare(.6))}onDeath(){if(this.finished)return;this.finished=!0;let e=this.snake,t=this.shell.host,n=performance.now();this.deadAt=n,this.exploded=0,this.explodeAt=1/0,this.swipe=null;let[r,i]=a[e.dir],o=e.head.x+r*.5,s=e.head.y+i*.5;if(this.flashBoard(o,s,xg,.55,500),this.flashAt=n,this.flashColor.copy(xg),this.glow(o,s,xg,$*5,360),this.ring(o,s,bg,$*.2,$*1.6,260),this.ring(o,s,xg,$*.3,$*3,520),this.shell.fx!==`off`){let e=this.world(o,s);t.bursts.spawn({at:e,color:xg,count:22,dir:new V(-r,i,.8).normalize(),spread:1.1,speed:[.6,2.2],life:[.3,.7],size:[.006,.016],gravity:1,drag:1}),t.shock.fire(this.centre(),xg),t.flare(.3)}N.crash(),this.haptic([{hand:`both`,intensity:.9,ms:70},{hand:`both`,intensity:.5,ms:110,delay:110}],!0),this.stopUntil=n+90,this.endIn=170}world(e,t){let n=Mg(e,t);return n.z=$*.5,this.root.localToWorld(n)}gulp(e,t){this.shell.fx!==`off`&&(this.gulpAt=e,this.gulpAmt=t)}gulpScale(e){let t=(e-this.gulpAt)/260;if(t<0||t>=1)return 1;let n=t<.15?Og(t/.15):1-Og((t-.15)/.85);return 1+this.gulpAmt*n}flashBoard(e,t,n,r,i){this.shell.fx!==`off`&&(this.boardFlash={x:e,y:t,color:n,amount:this.shell.fx===`full`?r:r*.6,t0:performance.now(),dur:i})}takeFx(){let e=this.fx.find(e=>!e.mesh.visible);if(!e){let t=new G(new ic(1,1),zg(bg));t.renderOrder=12,this.root.add(t),e={mesh:t,t0:0,dur:1,r0:0,r1:0,size:0,a:1},this.fx.push(e)}return e}ring(e,t,n,r,i,a){if(this.shell.fx===`off`)return;let o=this.takeFx(),s=Math.max(r,i)*2.4;Mg(e,t,o.mesh.position).setZ($*.6),o.mesh.scale.set(s,s,1),o.mesh.material.uniforms.uColor.value.copy(n),o.mesh.material.uniforms.uW.value=.05,Object.assign(o,{t0:performance.now(),dur:a,r0:r,r1:i,size:s,a:1.2}),o.mesh.visible=!0}glow(e,t,n,r,i){if(this.shell.fx===`off`)return;let a=this.takeFx();Mg(e,t,a.mesh.position).setZ($*.3),a.mesh.scale.set(r,r,1),a.mesh.material.uniforms.uColor.value.copy(n),a.mesh.material.uniforms.uR.value=0,Object.assign(a,{t0:performance.now(),dur:i,r0:0,r1:0,size:r,a:.9}),a.mesh.visible=!0}floater(e,t,n,r){let i=this.floaters.find(e=>!e.panel.mesh.visible);i||(this.floaters.length>=4?i=this.floaters.reduce((e,t)=>e.t0<t.t0?e:t):(i={panel:new Bm(.16,.05,900),t0:0,x:0,y:0},i.panel.mesh.renderOrder=20,this.root.add(i.panel.mesh),this.floaters.push(i))),i.panel.draw((t,n,i)=>Q(t,e,n/2,i*.72,34,{align:`center`,display:!0,weight:700,color:r}));let a=Mg(t,n);i.x=a.x,i.y=a.y+$*.7,i.t0=performance.now(),i.panel.opacity=1}render(e,t){let n=this.shell.phase===`title`,r=this.shell.dim;n&&this.runDemo(e*1e3);let i=n?this.demo:this.snake,a=n?this.demoRamp:this.rampBody,o=this.shell.fx;this.glowTint.lerp(new W(Om(Ie(this.stage())).glow),1-Math.exp(-e*1.5)),this.halo.uniforms.uA.value=(.22+Y.uBeat.value*.12+Y.uIntensity.value*.12)*r,this.well.uniforms.uDim.value=r,this.well.uniforms.uEdgeDanger.value=i.wrap?.4:1,this.beadMat.uniforms.uDim.value=r,this.glowMat.uniforms.uA.value=(o===`off`?0:o===`full`?.3:.18)*r;let s=!n&&i.over&&this.deadAt>0;this.beadMat.uniforms.uGray.value+=((s?.5:0)-this.beadMat.uniforms.uGray.value)*(1-Math.exp(-e*6)),this.solidRails.visible=!i.wrap,this.openRails.visible=i.wrap;let c=o===`off`?0:Dg(1-(t-this.flashAt)/650)**1.5,l=this.danger();this.rails.color.set(n?T.wrap.stops[0]:this.skin.stops[0]).lerp(this.flashColor,c),l>0&&this.rails.color.lerp(xg,.5+.5*l*(.5+.5*Math.sin(t/130))),this.rails.opacity=(i.wrap?.55:.9)*(.6+.4*r);let u=this.boardFlash;if(u){let e=(t-u.t0)/u.dur;e>=1&&(this.boardFlash=null),this.well.uniforms.uFlash.value=e>=1?0:u.amount*(1-e)*(1-e),this.well.uniforms.uFlashColor.value.copy(u.color),this.well.uniforms.uFlashAt.value.set((u.x+.5+pg/$)/(20+pg/$*2),1-(u.y+.5+pg/$)/(20+pg/$*2))}else this.well.uniforms.uFlash.value=0;this.shell.playing&&!this.snake.over&&this.trackSwipe(this.aimPoint()),this.drawSnake(i,a,t,n,r),this.drawFood(i,t,r),this.drawFx(t),this.drawHud(n)}runDemo(e){(this.demo.over||this.demo.length>34)&&(this.demo=this.newDemo());let t=this.demo;if(!t.queue.length&&t.food){let e=t.dir,n=-1/0;for(let r of[`up`,`right`,`down`,`left`].filter(e=>e!==ye[t.dir])){let[i,o]=a[r],s=(t.head.x+i+20)%20,c=(t.head.y+o+20)%20;if(t.isBody(s,c,!0))continue;let l=0;for(let[e,n]of Object.values(a))t.isBody((s+e+20)%20,(c+n+20)%20,!0)||l++;let u=-(Math.abs(jg(t.food.x-s,20))+Math.abs(jg(t.food.y-c,20)))+l*1.5+(r===t.dir?.4:0);u>n&&(n=u,e=r)}e!==t.dir&&t.turn(e)}t.advance(Math.min(e,100))}newDemo(){let e=new ve(Re(Math.floor(Math.random()*1e9)),{wrap:!0});return e.load([[6,13],[5,13],[4,13],[3,13],[2,13],[1,13],[0,13],[19,13]],`right`),e}buildLine(e,t,n,r){let i=e.body,o=e.prev,s=i.length,c=this.ux,l=this.uy;c.length=0,l.length=0;let u=(e,t)=>{if(!c.length){c.push(e),l.push(t);return}let n=c[c.length-1],r=l[l.length-1],i=(n%20+20)%20,a=(r%20+20)%20;c.push(n+jg(e-i,20)),l.push(r+jg(t-a,20))};e.over&&e.crash?(u(i[0].x+jg(e.crash.x-i[0].x,20)*n,i[0].y+jg(e.crash.y-i[0].y,20)*n),u(i[0].x,i[0].y)):u(i[1].x+jg(i[0].x-i[1].x,20)*t,i[1].y+jg(i[0].y-i[1].y,20)*t);for(let e=1;e<s;e++)u(i[e].x,i[e].y);let d=o[o.length-1],f=jg(d.x-i[s-1].x,20),p=jg(d.y-i[s-1].y,20);!e.over&&(f||p)&&u(i[s-1].x+f*(1-t),i[s-1].y+p*(1-t));let m=c.length;if(r>.01&&m>=2){let t=c[m-1]-c[m-2],n=l[m-1]-l[m-2],i=Math.hypot(t,n);i>.001?(t/=i,n/=i):([t,n]=a[e.dir],t=-t,n=-n);let o=c[m-1]+t*r,s=l[m-1]+n*r;e.wrap||(o=Math.max(-.4,Math.min(19.4,o)),s=Math.max(-.4,Math.min(19.4,s))),c.push(o),l.push(s)}return c.length}drawSnake(e,t,n,r,i){let a=this.shell.fx,o=e.over?1:Ag(e.progress()),s=!r&&e.over&&this.deadAt>0,c=(n-this.stretchAt)/650,l=r||c<0||c>=1?0:1.8*(c<.12?Og(c/.12):1-Og((c-.12)/.88)),u=this.buildLine(e,o,s?.32:0,l),d=this.ux,f=this.uy;this.nBeads=0,this.nGlows=0;let p=0;if(s){let e=Math.min(45,1300/u),r=n<this.explodeAt?0:Math.min(u,Math.floor((n-this.explodeAt)/e)+1);for(let e=this.exploded;e<r;e++)this.burstSegment(e,u,t);this.exploded=Math.max(this.exploded,r),p=this.exploded}let m=N.music?.beat()??n/6e4*Ie(this.stage()).bpm,h=a===`full`,g=this.bulges;if(!r)for(;g.length&&e.steps-g[0]+o>u+1;)g.shift();let _=r?1:this.gulpScale(n),v=t=>{let n=1;if(h){let e=m-t*.04;n+=.08*Math.exp(-(e-Math.floor(e))*6)}if(!r)for(let r of g){let i=t-(e.steps-r+o);i>-1.2&&i<1.2&&(n+=.38*(1-Math.abs(i)/1.2))}return _!==1&&(n*=1+(_-1)*Math.max(0,1-t/3)),n},y=.78,b=Math.max(.3,.5-e.length*.002),x=e=>(y+(b-y)*(e/Math.max(1,u-1)))*v(e),S=e=>t[Math.min(47,Math.round(e/Math.max(1,u-1)*47))],C=1/0,w=-1/0,T=1/0,E=-1/0;for(let e=0;e<u;e++)C=Math.min(C,d[e]),w=Math.max(w,d[e]),T=Math.min(T,f[e]),E=Math.max(E,f[e]);let D=e.wrap&&(C<0||T<0||w>19||E>19),O=D?[-20,0,20]:[0],ee=D?[-20,0,20]:[0],k=(t,n,r,i,a)=>{for(let o of O)for(let s of ee){let c=t+o,l=n+s,u=1;if(e.wrap){let e=Math.min(c+.5,19.5-c,l+.5,19.5-l);if(e<=.02)continue;u=Math.min(1,e/.5)}if(this.nBeads>=mg)return;Mg(c,l,this.v);let d=r*$*u;this.v.z=d*.35,this.s.set(d,d,d*.75),this.m.compose(this.v,this.q,this.s);let f=this.nBeads++;this.beads.setMatrixAt(f,this.m),this.beadColor.setXYZ(f,i.r,i.g,i.b),this.beadFlash.setX(f,a)}},te=(e,t,n,r)=>{for(let i of O)for(let a of ee){let o=e+i,s=t+a;if(o<-.5||s<-.5||o>19.5||s>19.5||this.nGlows>=hg)continue;Mg(o,s,this.v),this.v.z=-.0099,this.s.set(n*$,n*$,1),this.m.compose(this.v,this.q,this.s);let c=this.nGlows++;this.glows.setMatrixAt(c,this.m),this.glowColor.setXYZ(c,r.r,r.g,r.b)}};if(u-p>=2){let e=0;for(let t=p;t<u-1;t++){let n=d[t],r=f[t],i=d[t+1],o=f[t+1],s=Math.hypot(i-n,o-r),c=e;for(;c<s;){let e=s>0?c/s:0,a=t+e,l=x(a)/2;k(n+(i-n)*e,r+(o-r)*e,l,S(a),0),c+=Math.max(.04,l*.45)}e=c-s,a!==`off`&&te(n,r,x(t)*2.6,S(t))}k(d[u-1],f[u-1],x(u-1)/2,S(u-1),0)}let ne=p===0&&u>=2;for(let e of[...this.eyes,...this.pupils])e.visible=!1;if(ne){let r=y*(1+(v(0)/Math.max(.01,_)-1)*.5)*_,o=r*.64,c=this.shell.fx===`off`?0:Dg(1-(n-this.gulpAt)/200)*.35;k(d[0],f[0],o,t[0],c),a!==`off`&&te(d[0],f[0],r*3.4,t[0]),this.placeEyes(e,d[0],f[0],d[1],f[1],o,n,s,i)}this.beads.count=this.nBeads,this.beads.instanceMatrix.needsUpdate=!0,this.beadColor.needsUpdate=!0,this.beadFlash.needsUpdate=!0,this.glows.count=this.nGlows,this.glows.instanceMatrix.needsUpdate=!0,this.glowColor.needsUpdate=!0}placeEyes(e,t,n,r,i,o,s,c,l){let u=(t%20+20+.5)%20-.5,d=(n%20+20+.5)%20-.5,f=t-r,p=n-i,m=Math.hypot(f,p);m<.05?[f,p]=a[e.dir]:(f/=m,p/=m);let[h,g]=a[e.queue[0]??e.dir],_=(s+900)%3600,v=_<130?Math.sin(_/130*Math.PI):0,y=o*.36*$,b=Mg(u,d),x=o*$*.75;for(let e=0;e<2;e++){let t=e?1:-1,n=b.x+(f*o*.32-p*t*o*.48)*$,r=b.y-(p*o*.32+f*t*o*.48)*$,i=this.eyes[e];i.position.set(n,r,x),i.scale.set(y,y*(1-.85*v),y*.5),i.visible=l>.2;let a=this.pupils[e],s=c?y*.3:y*.55;a.position.set(n+(c?0:h*y*.38),r-(c?0:g*y*.38),x+y*.35),a.scale.set(s,s,s*.5),a.visible=i.visible&&v<.6}}burstSegment(e,t,n){if(this.shell.fx===`off`||e>=this.ux.length)return;let r=this.shell.host,i=(this.ux[e]%20+20)%20,a=(this.uy[e]%20+20)%20,o=this.world(i,a),s=n[Math.min(47,Math.round(e/Math.max(1,t-1)*47))],c=r.head().clone().sub(o).normalize();r.bursts.spawn({at:o,color:s,count:e===0?18:this.shell.fx===`full`?6:3,dir:c,spread:.6,speed:[1.5,3.8],life:[.9,1.6],size:[.008,.02],drag:.35}),r.bursts.spawn({at:o,color:bg,count:2,dir:new V((i-10)/20,.5,.3).normalize(),spread:.9,speed:[.4,1.2],life:[.5,1],size:[.004,.01],gravity:.6,drag:.6}),e%4==0&&N.tone({freq:N.chordTone(e%7,1+e%2),dur:.05,type:`triangle`,gain:.03})}drawFood(e,t,n){let r=e.food;if(this.food.visible=this.foodHalo.visible=!!r,r){let e=`${r.x},${r.y}`;e!==this.foodKey&&(this.foodKey=e,this.foodAt=t);let i=kg((t-this.foodAt)/280),a=Math.sin(t/420)*.004,o=$*.39*i*(1+Y.uBeat.value*.08);Mg(r.x,r.y,this.food.position).setZ($*.35+a),this.food.scale.setScalar(Math.max(1e-4,o)),this.food.material.uniforms.uDim.value=n,this.foodHalo.position.copy(this.food.position).setZ(-.033*.2),this.foodHalo.scale.setScalar($*3*i),this.foodHalo.material.uniforms.uA.value=(.75+.25*Math.sin(t/300)+Y.uBeat.value*.2)*n}let i=e.gold;if(this.gold.visible=this.goldHalo.visible=this.goldRing.visible=!!i,i){let r=`${i.x},${i.y},${i.born}`;r!==this.goldKey&&(this.goldKey=r,this.goldAt=t);let a=kg((t-this.goldAt)/320),o=e.goldLeft()/v,s=o<.3,c=s?.5+.5*Math.sin(t/70):1,l=$*.45*a*(1+.06*Math.sin(t/160));Mg(i.x,i.y,this.gold.position).setZ($*.4+Math.sin(t/380+1)*.005),this.gold.scale.setScalar(Math.max(1e-4,l)),this.gold.material.uniforms.uDim.value=n,this.gold.material.uniforms.uFlash.value=.15*(.5+.5*Math.sin(t/200)),this.goldHalo.position.copy(this.gold.position).setZ(-.033*.2),this.goldHalo.scale.setScalar($*3.6*a),this.goldHalo.material.uniforms.uA.value=(.6+.2*Math.sin(t/250))*n,this.goldRing.position.copy(this.gold.position).setZ($*.1),this.goldRing.scale.setScalar($*2.2*a);let u=this.goldRing.material.uniforms;u.uArc.value=o,u.uA.value=.9*c*n,u.uColor.value.copy(s?xg:Cg)}}drawFx(e){for(let t of this.fx){if(!t.mesh.visible)continue;let n=(e-t.t0)/t.dur;if(n>=1){t.mesh.visible=!1;continue}let r=t.mesh.material.uniforms;if(t.r1>0){let e=t.r0+(t.r1-t.r0)*Og(n);r.uR.value=e/t.size*2,r.uA.value=t.a*(1-n)*(1-n)}else r.uA.value=t.a*(1-n)*(1-n)}for(let t of this.floaters){if(!t.panel.mesh.visible)continue;let n=(e-t.t0)/800;n>=1?t.panel.opacity=0:(t.panel.mesh.position.set(t.x,t.y+Og(n)*.04,$*1.2),t.panel.opacity=n<.6?1:1-(n-.6)/.4)}}drawHud(e){let n=this.snake;this.shownScore+=(n.score-this.shownScore)*.2,Math.abs(n.score-this.shownScore)<1&&(this.shownScore=n.score);let r=this.shell.best(),i=n.streak>=2?Math.ceil(n.streakLeft()/t*24):0,a=`${Math.floor(this.shownScore)}|${n.length}|${n.level}|${n.streak}|${i}|${r}|${e}`;this.hud.mesh.visible=!e,!(e||a===this.hudKey||this.hud.tooSoon())&&(this.hudKey=a,this.hud.draw((e,t)=>{Q(e,Tg(this.shownScore),t/2,84,78,{align:`center`,display:!0,weight:600}),Q(e,`Length`,24,52,26,{color:M.muted,weight:600}),Q(e,String(n.length),24,98,44,{display:!0,weight:600}),Q(e,`Speed`,t-24,52,26,{align:`right`,color:M.muted,weight:600}),Q(e,String(n.level),t-24,98,44,{align:`right`,display:!0,weight:600,color:n.level>=8?M.gold:M.text}),n.streak>=2?(Q(e,`Streak ×${n.streak}`,t/2,128,28,{align:`center`,color:M.gold,weight:700}),e.fillStyle=`rgba(255, 209, 102, 0.18)`,e.fillRect(t/2-90,138,180,5),e.fillStyle=M.gold,e.fillRect(t/2-90,138,180*i/24,5)):r!==null&&Q(e,`Best ${Tg(r)}`,t/2,132,28,{align:`center`,color:`#b9b0d6`,weight:600})}))}debugState(){let e=this.snake;return{score:e.score,length:e.length,foods:e.foods,golds:e.golds,streak:e.streak,bestStreak:e.bestStreak,speed:e.speed,level:e.level,head:{...e.head},dir:e.dir,queue:[...e.queue],wrap:e.wrap,food:e.food&&{...e.food},gold:e.gold&&{x:e.gold.x,y:e.gold.y},alive:!e.over,cause:e.cause,danger:this.danger(),held:this.held,turned:this.turned,beads:this.nBeads,swiping:!!this.swipe,playTime:Math.round(this.playTime)}}debugTools(){return{hold:e=>this.held=e,step:(e=1)=>{for(let t=0;t<e&&!this.snake.over;t++)this.snake.time+=this.snake.interval(),this.consume({steps:[this.snake.step()],goldExpired:null,streakLost:!1})},snake:(e,t)=>{this.snake.load(e,t),this.bulges=[]},food:(e,t)=>this.snake.food={x:e,y:t},golden:(e,t)=>this.snake.gold={x:e,y:t,born:this.snake.clock},score:e=>this.snake.score=e,crash:()=>{let e=this.snake;if(e.over)return;let[t,n]=a[e.dir];e.over=!0,e.cause=`wall`,e.crash={x:e.head.x+t,y:e.head.y+n},e.prev=e.body.map(e=>({...e})),this.onDeath()},cellWorld:(e,t)=>this.root.localToWorld(Mg(e,t)).toArray()}}},Vg=17,Hg=4,Ug=5,Wg=256,Gg=e=>Math.max(0,Math.min(16,Math.round(Math.log2(e))-1));function Kg(e){let[t,n,r]=F(e);return(.2126*t+.7152*n+.0722*r)/255}var qg=new Map;function Jg(e){let t=qg.get(e);return t||qg.set(e,t=new W(we(e))),t}var Yg=new W(`#21173d`),Xg=new W(`#ffffff`),Zg=new W(`#bdb6d0`);function Qg(e,t){return t?Zg:Kg(we(e))>.7?Yg:Xg}var $g=class{mesh;material=Im();colors;flashes;glows;m=new U;q=new ar;z=new V(0,0,1);s=new V;p=new V;count=0;constructor(e){let t=Nm().clone();this.colors=new Qa(new Float32Array(e*3),3),this.flashes=new Qa(new Float32Array(e),1),this.glows=new Qa(new Float32Array(e),1);for(let e of[this.colors,this.flashes,this.glows])e.setUsage(bn);t.setAttribute(`aColor`,this.colors),t.setAttribute(`aFlash`,this.flashes),t.setAttribute(`aGlow`,this.glows),this.mesh=new oo(t,this.material,e),this.mesh.instanceMatrix.setUsage(bn),this.mesh.frustumCulled=!1,this.mesh.count=0}begin(){this.count=0}add(e,t,n,r,i,a,o,s=0,c=1,l=0){if(this.count>=this.mesh.instanceMatrix.count)return;let u=this.count++;this.p.set(e,t,n),this.s.set(r,i,a),this.q.setFromAxisAngle(this.z,l),this.m.compose(this.p,this.q,this.s),this.mesh.setMatrixAt(u,this.m),this.colors.setXYZ(u,o.r,o.g,o.b),this.flashes.setX(u,s),this.glows.setX(u,c)}end(){this.mesh.count=this.count,this.mesh.instanceMatrix.needsUpdate=!0,this.colors.needsUpdate=!0,this.flashes.needsUpdate=!0,this.glows.needsUpdate=!0}};function e_(e){let t=e.getContext(`2d`);t.clearRect(0,0,e.width,e.height),t.textAlign=`center`,t.textBaseline=`middle`;for(let e=0;e<Vg;e++){let n=(e%Hg+.5)*Wg,r=(Math.floor(e/Hg)+.5)*Wg,i=String(2**(e+1)),a=Wg*(i.length<=2?.48:i.length===3?.4:i.length===4?.31:.25);t.font=`700 ${a}px ${Pe}`;let o=t.measureText(i).width,s=Wg*.76;o>s&&(a*=s/o,t.font=`700 ${a}px ${Pe}`),t.fillStyle=`rgba(20, 10, 40, 0.35)`,t.fillText(i,n,r+Wg*.025),t.fillStyle=`#ffffff`,t.fillText(i,n,r+Wg*.01)}}var t_=class{mesh;material;cells;inks;alphas;m=new U;q=new ar;z=new V(0,0,1);s=new V;p=new V;count=0;constructor(e){let t=document.createElement(`canvas`);t.width=Hg*Wg,t.height=Ug*Wg,e_(t);let n=new Po(t);n.colorSpace=mn,n.anisotropy=4,n.minFilter=Qe,document.fonts?.load(`700 40px ${Pe}`).then(()=>{e_(t),n.needsUpdate=!0},()=>void 0);let r=new ic(1,1);this.cells=new Qa(new Float32Array(e),1),this.inks=new Qa(new Float32Array(e*3),3),this.alphas=new Qa(new Float32Array(e),1);for(let e of[this.cells,this.inks,this.alphas])e.setUsage(bn);r.setAttribute(`aCell`,this.cells),r.setAttribute(`aInk`,this.inks),r.setAttribute(`aAlpha`,this.alphas),this.material=new K({vertexShader:`
        attribute float aCell;
        attribute vec3 aInk;
        attribute float aAlpha;
        varying vec2 vUv;
        varying vec3 vInk;
        varying float vAlpha;
        void main() {
          float col = mod(aCell, ${Hg}.0);
          float row = floor(aCell / ${Hg}.0);
          vUv = vec2((col + uv.x) / ${Hg}.0, 1.0 - (row + 1.0 - uv.y) / ${Ug}.0);
          vInk = aInk;
          vAlpha = aAlpha;
          gl_Position = projectionMatrix * viewMatrix * modelMatrix * instanceMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D uAtlas;
        uniform float uDim;
        varying vec2 vUv;
        varying vec3 vInk;
        varying float vAlpha;
        void main() {
          vec4 t = texture2D(uAtlas, vUv);
          gl_FragColor = vec4(t.rgb * vInk * uDim, t.a * vAlpha);
          #include <colorspace_fragment>
        }
      `,uniforms:{uAtlas:{value:n},uDim:{value:1}},transparent:!0,depthWrite:!1}),this.mesh=new oo(r,this.material,e),this.mesh.instanceMatrix.setUsage(bn),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.renderOrder=6}begin(){this.count=0}add(e,t,n,r,i,a,o,s=1,c=0){if(this.count>=this.mesh.instanceMatrix.count)return;let l=this.count++;this.p.set(e,t,n),this.s.set(r,i,1),this.q.setFromAxisAngle(this.z,c),this.m.compose(this.p,this.q,this.s),this.mesh.setMatrixAt(l,this.m),this.cells.setX(l,Gg(a)),this.inks.setXYZ(l,o.r,o.g,o.b),this.alphas.setX(l,s)}end(){this.mesh.count=this.count,this.mesh.instanceMatrix.needsUpdate=!0,this.cells.needsUpdate=!0,this.inks.needsUpdate=!0,this.alphas.needsUpdate=!0}},n_=.52,r_=.04,i_=250,a_=150,o_=240,s_=320,c_=320,l_=500,u_=8,d_=64,f_=.07,p_=[``,``,``,`Triple merge`,`Quad merge`],m_={ArrowLeft:`left`,ArrowRight:`right`,ArrowUp:`up`,ArrowDown:`down`,KeyA:`left`,KeyD:`right`,KeyW:`up`,KeyS:`down`},h_={"stick-left":`left`,"stick-right":`right`,"stick-up":`up`,"stick-down":`down`},g_={left:[-1,0],right:[1,0],up:[0,1],down:[0,-1]},__=new W(`#ffffff`),v_=new W(`#ff4a6a`),y_=new W(`#5d5872`),b_=e=>Math.floor(e).toLocaleString(`en-US`),x_=e=>Math.round(Math.log2(e)),S_=e=>1-(1-e)*(1-e),C_=e=>Math.max(1,Math.min(x_(e)-1,8)),w_=`varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,T_=`
  uniform vec3 uColor;
  uniform float uT;
  uniform float uGrow;
  varying vec2 vUv;
  float box(vec2 p, float r) {
    vec2 q = abs(p) - vec2(0.5 - r);
    return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
  }
  void main() {
    vec2 p = vUv - 0.5;
    float s = (1.0 + uGrow * (1.0 - pow(1.0 - uT, 3.0))) / (1.0 + uGrow);
    float d = box(p / s, 0.11);
    float w = 0.022 * (1.0 - uT) + 0.004;
    float line = 1.0 - smoothstep(w * 0.3, w, abs(d));
    float a = line * (1.0 - uT) * (1.0 - uT) * 0.8;
    float inner = 1.0 / (1.0 + uGrow);
    float fill = (1.0 - smoothstep(-0.01, 0.01, box(p / inner, 0.1))) * max(0.0, 1.0 - uT / 0.4) * 0.3;
    vec3 c = mix(uColor, vec3(1.0), 0.2) * a + mix(uColor, vec3(1.0), 0.5) * fill;
    gl_FragColor = vec4(c, a + fill);
    #include <colorspace_fragment>
  }
`,E_=`
  uniform vec3 uColor;
  uniform float uA;
  varying vec2 vUv;
  void main() {
    float across = 1.0 - abs(vUv.y * 2.0 - 1.0);
    float along = smoothstep(0.0, 0.25, vUv.x);
    float a = uA * pow(across, 1.5) * (0.35 + 0.65 * along);
    gl_FragColor = vec4(uColor * a, a);
    #include <colorspace_fragment>
  }
`,D_=class{shell;root=new ti;lanes={top:.6,mid:.08,low:r_-n_/2-.1};aims=!0;controls=[[`Slide`,`Flick either thumbstick`],[`Or swipe`,`Hold the trigger and sweep the laser across the board`],[`Hands`,`Pinch and swipe`],[`Pause`,`Y`]];grid;board=new ti;slabs=new $g(64);numbers=new t_(64);well;rails;halo;hud=new Bm(.7,.17,1e3);hint=new Bm(.7,.08,1e3);hudKey=``;swipeMat;swipeMesh;rings=[];ringGeo=new ic(1,1);slide=null;pops=new Map;spawns=new Map;settles=new Map;settleDir=`left`;flash=null;wobbleAt=-1/0;kick=new B;kickV=new B;scheduled=[];timers=new Set;floaters=[];swipe=null;lastHand=`right`;dangerLevel=0;endTimer=0;endStart=0;ended=!1;debris=null;time=0;displayScore=0;announcedBest=!1;celebrated=!1;nudgeAt=0;stageNow=0;stageHoldUntil=0;plane=new ha;v=new V;glowColor=new W(`#c38bff`);tmpColor=new W;constructor(e){this.shell=e,this.grid=new ke(4,Re(7),!1),this.grid.load([[0,2,0,4],[2,8,16,0],[32,64,128,256],[2048,1024,512,4]]),this.root.add(this.board),this.board.position.y=r_,this.board.add(this.slabs.mesh,this.numbers.mesh),this.well=new K({vertexShader:w_,fragmentShader:`
        ${xp}
        uniform vec3 uGlow;
        uniform float uDim;
        uniform float uN;
        uniform vec3 uFlashColor;
        uniform float uFlash;
        varying vec2 vUv;
        float box(vec2 p, vec2 b, float r) {
          vec2 q = abs(p) - b + r;
          return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
        }
        void main() {
          // Rounded sockets, one per cell, inside a rounded well.
          vec2 cell = vUv * uN;
          vec2 f = fract(cell) - 0.5;
          float socket = 1.0 - smoothstep(-0.01, 0.01, box(f, vec2(0.41), 0.12));
          float outer = box(vUv - 0.5, vec2(0.5), 0.05);
          float inside = 1.0 - smoothstep(-0.004, 0.0, outer);
          float rim = socket * smoothstep(-0.05, 0.0, box(f, vec2(0.41), 0.12));
          vec3 c = vec3(0.025, 0.018, 0.06) + uGlow * (socket * (0.035 + uBeat * 0.015) + rim * 0.06);
          c += vec3(0.94, 0.91, 0.98) * socket * 0.012;
          c += vec3(1.0, 0.25, 0.35) * uDanger * 0.14 * (0.5 + 0.5 * sin(uTime * 6.0)) * (1.0 - smoothstep(0.0, 0.25, -outer * 4.0));
          c += uFlashColor * uFlash;
          gl_FragColor = vec4(c * uDim, 0.88 * inside);
          #include <colorspace_fragment>
        }
      `,uniforms:{...Y,uGlow:{value:this.glowColor},uDim:{value:1},uN:{value:4},uFlashColor:{value:new W},uFlash:{value:0}},transparent:!0,depthWrite:!1});let t=new G(new ic(.56,.56),this.well);t.position.z=-.004,t.renderOrder=-5,this.board.add(t),this.rails=new Ca({color:this.glowColor,toneMapped:!1});let n=.007,r=.28;for(let[e,t,i,a]of[[.5740000000000001,n,0,.28350000000000003],[.5740000000000001,n,0,-.28-n/2],[n,r*2,-.28-n/2,0],[n,r*2,.28350000000000003,0]]){let r=new G(new Ro(e,t,n),this.rails);r.position.set(i,a,0),this.board.add(r)}this.halo=new K({vertexShader:w_,fragmentShader:`
        uniform vec3 uColor;
        uniform float uA;
        varying vec2 vUv;
        void main() {
          vec2 p = abs(vUv - 0.5) * 2.0;
          float box = max(p.x, p.y);
          float a = uA * (1.0 - smoothstep(0.8, 1.0, box)) * smoothstep(0.62, 0.86, box);
          gl_FragColor = vec4(uColor * a, a);
          #include <colorspace_fragment>
        }
      `,uniforms:{uColor:{value:this.glowColor},uA:{value:.4}},transparent:!0,depthWrite:!1,blending:2});let i=new G(new ic(n_*1.4,n_*1.4),this.halo);i.position.z=-.014,i.renderOrder=-4,this.board.add(i),this.swipeMat=new K({vertexShader:w_,fragmentShader:E_,uniforms:{uColor:{value:new W},uA:{value:0}},transparent:!0,depthWrite:!1,blending:2});let a=new ic(1,1);a.translate(.5,0,0),this.swipeMesh=new G(a,this.swipeMat),this.swipeMesh.renderOrder=14,this.swipeMesh.visible=!1,this.board.add(this.swipeMesh),this.hud.mesh.position.set(0,.415,0),this.hint.mesh.position.set(0,r_-n_/2-.075,0),this.root.add(this.hud.mesh,this.hint.mesh),this.drawHint()}get n(){return this.grid.size}get cell(){return n_/this.n}get tile(){return this.cell*.88}get depth(){return this.tile*.3}cellXY(e,t){return[(e+.5)*this.cell-n_/2,n_/2-(t+.5)*this.cell]}start(e,t){this.grid=new ke(I[e]??4,t),this.slide=null,this.pops.clear(),this.spawns.clear(),this.settles.clear(),this.flash=null,this.wobbleAt=-1/0,this.kick.set(0,0),this.kickV.set(0,0),this.scheduled=[],this.timers.forEach(e=>clearTimeout(e)),this.timers.clear(),this.floaters=[],this.swipe=null,this.endTimer=0,this.ended=!1,this.debris=null,this.time=0,this.displayScore=0,this.announcedBest=!1,this.celebrated=!1,this.stageNow=be(this.grid.highest),this.stageHoldUntil=0;for(let e of this.rings)e.mesh.visible=!1;let n=performance.now();this.grid.cells.forEach((e,t)=>e&&this.spawns.set(t,n+60+t*12)),this.refreshDanger(),this.drawHint()}update(e){this.endTimer>0?(this.endTimer-=e,this.endTimer<=0&&this.finish()):(this.time+=e,this.grid.over&&!this.ended&&this.beginEnding(0))}intensity(){let e=_e((x_(Math.max(2,this.grid.highest))-3)/8);return Math.min(1,.15+this.grid.fill()*.4+e*.35)}danger(){return!this.shell.playing||this.endTimer>0||this.ended?0:this.dangerLevel}stage(){let e=be(this.grid.highest);return e!==this.stageNow&&performance.now()>=this.stageHoldUntil&&(this.stageNow=e),this.stageNow}result(){let e=this.grid;return{value:e.score,heading:`No moves left`,won:e.highest>=ce,stats:[[`Best tile`,b_(e.highest)],[`Moves`,b_(e.moves)],[`Merges`,b_(e.merges)],[`Best move`,`+${b_(e.bestMove)}`],[`Board`,`${e.size}×${e.size}`],[`Time`,ge(this.time)]],detail:`${e.highest} tile`}}centre(){return this.root.localToWorld(new V(0,r_,0))}pause(){this.swipe=null}pad(e){for(let t of e){let e=h_[t.control];e?t.down&&(this.lastHand=t.hand,this.move(e)):t.control===`trigger`&&this.trigger(t.down,t.hand)}}mouse(e){this.trigger(e,`right`)}key(e,t){let n=m_[e.code];return n?(t&&!e.repeat&&this.move(n),!0):!1}trigger(e,t){if(e){if(!this.shell.playing||this.endTimer>0||this.ended)return;this.lastHand=t;let e=this.aimPoint();this.swipe=e?{hand:t,x:e.x,y:e.y,cx:e.x,cy:e.y,fired:!1,live:!0}:{hand:t,x:0,y:0,cx:0,cy:0,fired:!1,live:!1};return}let n=this.swipe;if(n&&n.hand===t&&(this.swipe=null,!n.fired&&n.live)){let e=ie(n.cx-n.x,n.y-n.cy,f_*.6);e&&this.move(e)}}trackSwipe(){let e=this.swipe;if(!e||e.fired)return;let t=this.aimPoint();if(!t)return;e.live||Object.assign(e,{x:t.x,y:t.y,live:!0}),e.cx=t.x,e.cy=t.y;let n=ie(e.cx-e.x,e.y-e.cy,f_);n&&(e.fired=!0,this.move(n))}aimPoint(){let e=this.shell.host.aim();if(!e)return null;this.board.updateWorldMatrix(!0,!1);let t=new V(0,0,1).transformDirection(this.board.matrixWorld);this.plane.setFromNormalAndCoplanarPoint(t,this.board.localToWorld(new V));let n=e.intersectPlane(this.plane,this.v);return n?this.board.worldToLocal(n.clone()):null}move(e){if(!this.shell.playing||this.endTimer>0||this.ended)return!1;let t=performance.now(),n=this.grid.move(e);if(!n.moved)return this.nudge(t),!1;for(let e of this.scheduled)e.fn();this.scheduled=[];let r=this.n,i=n.slides.map(e=>{let t=e.fy*r+e.fx;return{...e,popAt:this.pops.get(t),spawnAt:this.spawns.get(t)}});this.slide={t0:t,items:i},this.pops.clear(),this.spawns.clear(),this.settles.clear(),this.settleDir=e;let a=t+110;for(let e of n.merged)this.pops.set(e.y*r+e.x,a);let o=0;for(let e of n.slides){let t=Math.abs(e.tx-e.fx)+Math.abs(e.ty-e.fy);o=Math.max(o,t);let n=e.ty*r+e.tx;t>0&&!this.pops.has(n)&&this.settles.set(n,a)}n.spawned&&this.spawns.set(n.spawned.y*r+n.spawned.x,a+20),this.refreshDanger();let s=o/Math.max(1,r-1);this.slideSound(s),this.shell.haptics([{hand:this.lastHand,intensity:.16+s*.12,ms:12,delay:110}]),this.grid.highest>n.prevHighest&&this.grid.highest>=128&&(this.stageHoldUntil=a+900),n.merged.length&&this.scheduled.push({at:a,fn:()=>this.land(n,e)}),n.points>0&&this.floaters.push({text:`+${b_(n.points)}`,t0:t}),this.floaters.length>4&&this.floaters.shift();let c=this.shell.best();return!this.announcedBest&&c!==null&&this.grid.score>c&&(this.announcedBest=!0,this.shell.toast([{text:`New best`,size:.08,color:M.gold,display:!0}],1600,`top`),N.newBest(),this.shell.host.flare(.6)),n.gameOver&&this.beginEnding(230),!0}slideSound(e){let t=.65+.35*_e(e),n=110/1e3;N.noiseFx({dur:.11,freq:1600,to:420,q:.8,gain:.15*t}),N.tone({freq:210,to:80,dur:.11,type:`sine`,gain:.34*t,delay:n}),N.tone({freq:N.chordTone(0,0),dur:.12,type:`triangle`,gain:.07*t,delay:n}),N.noiseFx({dur:.035,freq:1100,q:1.2,gain:.14*t,delay:n})}nudge(e){e-this.nudgeAt<=120||(this.nudgeAt=e,this.wobbleAt=e,N.reject(),this.shell.haptics([{hand:this.lastHand,intensity:.22,ms:18},{hand:this.lastHand,intensity:.15,ms:14,delay:90}]))}land(e,t){let n=this.shell.fx,r=this.shell.host,i=e.merged.length,a=e.merged[0];for(let t of e.merged)t.value>a.value&&(a=t);let o=x_(a.value),s=o>=u_,c=a.value>e.prevHighest,l=r.head();for(let t of e.merged){let e=x_(t.value),i=Jg(t.value);if(n!==`off`){this.ring(t.x,t.y,i,e>=7?l_:340,Math.min(1.3,.4+e*.08)),e>=u_&&this.ring(t.x,t.y,i,l_,1.8,70);let a=this.tileWorld(t.x,t.y),o=l.clone().sub(a).normalize();r.bursts.spawn({at:a,color:i,count:n===`full`?Math.min(14,3+e):3,dir:o,spread:1.2,speed:[.35,.9+e*.08],life:[.35,.7+e*.03],size:[.006,.012+e*.001],gravity:1.2,drag:1.4,jitter:this.tile*.3}),e>=u_&&n===`full`&&(r.bursts.spawn({at:a,color:__,count:4+(e-u_)*3,dir:o,spread:.5,speed:[2,4.5],life:[.9,1.6],size:[.01,.025],drag:.35}),r.bursts.spawn({at:a,color:i,count:6+(e-u_)*3,dir:o,spread:.6,speed:[1.8,4],life:[1,1.8],size:[.012,.03],drag:.3}))}}if([...e.merged].sort((e,t)=>e.value-t.value).slice(-5).forEach((e,t)=>{let n=C_(e.value),r=()=>N.merge(n,Math.max(0,Math.min(t,9-n)));t===0?r():this.later(t*50,r)}),n===`full`){let[e,n]=g_[t],r=.05+.025*Math.max(0,o-1);this.kickV.x+=e*r,this.kickV.y+=n*r}let u=this.tileWorld(a.x,a.y);if(s){let e=_e(.4+(o-u_)*.2);N.impact(e),N.noiseFx({dur:.07,freq:1300,q:1,gain:.18*e+.08}),N.duck(.45+.1*e,420),a.value<2048&&N.sparkle(4+Math.min(4,o-u_)),n===`full`&&(this.kickV.y-=.12+.05*(o-u_)),n!==`off`&&(this.flash={color:Jg(a.value),amount:(.07+.02*(o-u_))*(n===`reduced`?.5:1),t0:performance.now()},r.flare(Math.min(1,.3+(o-u_)*.2)),o>=10&&a.value!==2048&&r.shock.fire(u,Jg(a.value)))}if(o>=7&&this.shell.bump(.06+.04*(o-7)),c&&a.value>=2048)this.celebrate(a.value,u);else if(c&&a.value>=d_){let e=o-5,t=()=>N.reward(e,Math.min(2,o-6),o>=9);s?this.later(100,t):t(),a.value>=128&&this.shell.toast([{text:String(a.value),size:.09,color:we(a.value),display:!0}],1100,`top`),this.shell.haptics([{hand:`both`,intensity:.5,ms:45},{hand:`both`,intensity:.75,ms:70,delay:80}])}else s?this.shell.haptics([{hand:`both`,intensity:.55,ms:30},{hand:`both`,intensity:.4,ms:25,delay:60}]):this.shell.haptics([{hand:this.lastHand,intensity:Math.min(.5,.22+.03*o),ms:Math.min(30,15+1.5*(o-1))}]);i>=3&&(this.shell.toast([{text:p_[i]??`${i}× merge`,size:.08,color:M.gold,display:!0},{text:`+${b_(e.points)}`,size:.04,color:M.muted,display:!1}],1300,`low`),this.later(250,()=>N.sparkle(4+Math.min(i,6))),this.shell.bump(.05*i))}celebrate(e,t){let n=!this.celebrated;this.celebrated=!0;let r=this.shell.host;if(this.shell.toast([{text:`${e}!`,size:.13,color:M.gold,display:!0},{text:n?`You made it. Keep going`:`Incredible`,size:.045,color:M.text,display:!1}],2400,`top`),N.perfect(),N.sparkle(10),N.duck(.6,700),this.shell.bump(.6),this.shell.haptics([{hand:`both`,intensity:.6,ms:45},{hand:`both`,intensity:.8,ms:70,delay:80},{hand:`both`,intensity:1,ms:110,delay:190}]),this.shell.fx===`off`)return;let i=r.head().clone().sub(t).normalize().add(new V(0,.6,0)).normalize();for(let e of[M.gold,`#ff8fb1`,`#5ee0f0`,`#c38bff`])r.bursts.spawn({at:t,color:new W(e),count:90,dir:i,spread:1.3,speed:[1.5,5],life:[1.5,3],size:[.012,.04],gravity:.8,drag:.4});r.shock.fire(t,new W(M.gold)),r.flare(1),r.slowmo()}later(e,t){let n=window.setTimeout(()=>{this.timers.delete(n),t()},e);this.timers.add(n)}refreshDanger(){let e=this.grid;if(e.over){this.dangerLevel=0;return}let t=_e((e.fill()-.75)/.25),n=e.availableDirections().length;this.dangerLevel=n<=2?t*(n<=1?1:.6):0,this.dangerLevel<.12&&(this.dangerLevel=0)}beginEnding(e){this.ended||this.endTimer>0||(this.endTimer=e+650,this.endStart=performance.now()+e,this.swipe=null)}finish(){this.ended||(this.ended=!0,this.endTimer=0,this.crumble(),this.shell.end(`fail`,{text:`No moves left`,sub:b_(this.grid.score)}))}crumble(){if(this.shell.fx===`off`)return;let e=this.n;this.debris=[];for(let t=0;t<e;t++)for(let n=0;n<e;n++){let r=this.grid.get(n,t);if(!r)continue;let[i,a]=this.cellXY(n,t);this.debris.push({x:i,y:a,z:this.depth/2,vx:(n-(e-1)/2)/e*.25*Math.random()+(Math.random()-.5)*.08,vy:.05+Math.random()*.25,vz:.15+Math.random()*.35,rot:0,vr:(Math.random()-.5)*3,value:r,delay:.35+(e-1-t)*.07+Math.random()*.12})}this.slide=null}ring(e,t,n,r,i,a=0){let o=this.rings.find(e=>!e.mesh.visible);if(!o){if(this.rings.length>=24)return;let e=new K({vertexShader:w_,fragmentShader:T_,uniforms:{uColor:{value:new W},uT:{value:0},uGrow:{value:1}},transparent:!0,depthWrite:!1,blending:2}),t=new G(this.ringGeo,e);t.renderOrder=12,this.board.add(t),o={mesh:t,mat:e,t0:0,ms:r,grow:i},this.rings.push(o)}let[s,c]=this.cellXY(e,t),l=this.tile*(1+i);o.mesh.position.set(s,c,this.depth+.01),o.mesh.scale.set(l,l,1),o.mat.uniforms.uColor.value.copy(n),o.mat.uniforms.uGrow.value=i,o.mat.uniforms.uT.value=0,o.t0=performance.now()+a,o.ms=r,o.grow=i,o.mesh.visible=a===0,a&&this.later(a,()=>o.mesh.visible=!0)}tileWorld(e,t){let[n,r]=this.cellXY(e,t);return this.board.localToWorld(new V(n,r,this.depth))}popScale(e,t,n){if(e===void 0||t<e||this.shell.fx===`off`)return 1;let r=(t-e)/i_;if(r>=1)return 1;let i=.2+.022*Math.min(x_(n),11);if(r<.18)return 1+i*Te(r/.18);let a=(r-.18)/.82;return 1+i*Math.exp(-5*a)*Math.cos(a*Math.PI*1.5)}settle(e,t){if(e===void 0||t<e||this.shell.fx===`off`)return 0;let n=(t-e)/o_;return n>=1?0:.15*Math.cos(n*Math.PI*1.5)*(1-n)*(1-n)}spawnScale(e,t){if(e===void 0)return 1;if(t<e)return 0;let n=(t-e)/a_;return n>=1?1:Math.max(0,ae(n))}render(e,t){if(this.scheduled.length&&t>=this.scheduled[0].at){let e=this.scheduled.filter(e=>t>=e.at);this.scheduled=this.scheduled.filter(e=>t<e.at),e.forEach(e=>e.fn())}this.shell.playing?this.trackSwipe():this.swipe=null;let n=this.shell.dim;this.glowColor.lerp(new W(Om(Ie(this.stage())).glow),1-Math.exp(-e*1.5)),this.well.uniforms.uDim.value=n,this.well.uniforms.uN.value=this.n,this.slabs.material.uniforms.uDim.value=n,this.numbers.material.uniforms.uDim.value=n,this.halo.uniforms.uA.value=(.28+Y.uBeat.value*.15+Y.uIntensity.value*.15)*n,this.rails.color.copy(this.glowColor),Y.uDanger.value>.05&&this.rails.color.lerp(v_,Y.uDanger.value*(.5+.5*Math.sin(t/140)));let r=1-Math.exp(-e*30);this.kickV.addScaledVector(this.kick,-260*e).multiplyScalar(1-r*.55),this.kick.addScaledVector(this.kickV,e),this.board.position.set(this.kick.x+this.wobble(t),r_+this.kick.y,0);let i=this.flash;if(i){let e=(t-i.t0)/s_;e>=1&&(this.flash=null),this.well.uniforms.uFlashColor.value.copy(i.color),this.well.uniforms.uFlash.value=e>=1?0:i.amount*(1-e)*(1-e)}this.slabs.begin(),this.numbers.begin(),this.debris?this.drawDebris(e,t):this.drawTiles(t),this.slabs.end(),this.numbers.end();for(let e of this.rings){if(!e.mesh.visible)continue;let n=(t-e.t0)/e.ms;n>=1?e.mesh.visible=!1:e.mat.uniforms.uT.value=_e(n)}this.drawSwipe(),this.drawHud(t),this.hint.opacity=this.shell.phase===`title`?0:Math.max(0,this.hint.mesh.material.opacity+((this.grid.moves===0&&this.shell.playing?1:0)-this.hint.mesh.material.opacity)*Math.min(1,e*4))}wobble(e){let t=(e-this.wobbleAt)/c_;return t>=1||t<0||this.shell.fx!==`full`?0:this.cell*.07*Math.sin(t*Math.PI*5)*(1-t)*(1-t)}drawTiles(e){let t=this.n,n=0,r=0;if(this.endTimer>0&&e>=this.endStart){let t=(e-this.endStart)/650;n=_e(t*1.6),r=this.shell.fx===`full`?this.cell*.03*_e(t*2):0}else this.ended&&(n=1);let i=this.slide;if(i&&e-i.t0<110){let t=S_(_e((e-i.t0)/110));for(let r of i.items){let i=this.popScale(r.popAt,e,r.value)*this.spawnScale(r.spawnAt,e);this.tileAt(r.value,r.fx+(r.tx-r.fx)*t,r.fy+(r.ty-r.fy)*t,i,i,0,0,n,e)}}else{i&&(this.slide=null);for(let i=0;i<t;i++)for(let a=0;a<t;a++){let o=i*t+a,s=this.grid.cells[o];if(!s)continue;let c=1,l=0,u=0,d=this.pops.get(o);if(d!==void 0){if(c*=this.popScale(d,e,s),e>=d){let t=(e-d)/i_;l=Math.max(0,1-t/.45)*.7,u=Math.max(0,c-1)*2.2}e-d>i_&&this.pops.delete(o)}let f=this.spawns.get(o);if(f!==void 0&&(c*=this.spawnScale(f,e),e-f>a_&&this.spawns.delete(o)),c<=.01)continue;let p=r?(Math.random()-.5)*r*2:0,m=r?(Math.random()-.5)*r*2:0,h=c,g=c,_=this.settles.get(o);if(_!==void 0){let t=this.settle(_,e);e-_>o_&&this.settles.delete(o);let[n,r]=g_[this.settleDir];n?(h*=1-t,g*=1+t*.6):(g*=1-t,h*=1+t*.6),p+=n*t*this.tile/2,m+=r*t*this.tile/2}this.tileAt(s,a+p/this.cell,i-m/this.cell,h,g,l,u,n,e)}}}tileAt(e,t,n,r,i,a,o,s,c,l=0,u=0){let[d,f]=this.cellXY(t,n),p=this.tile,m=this.depth,h=x_(e),g=u+m/2+.003+o*this.cell*.25,_=.5+Math.min(h,12)*.1;e>=2048&&(_+=.6+.4*Math.sin(c/260));let v=s>0?this.tmpColor.copy(Jg(e)).lerp(y_,s):Jg(e);this.slabs.add(d,f,g,p*r,p*i,m*Math.max(r,i),v,a,_*(1-s),l);let y=g+m*Math.max(r,i)/2+.0015;this.numbers.add(d,f,y,p*r,p*i,e,Qg(e,s>.5),1,l)}drawDebris(e,t){let n=this.debris,r=0;for(let i of n)if(i.delay-=e,i.delay>0){let e=(Math.random()-.5)*this.cell*.04;this.tileAt(i.value,(i.x+e+n_/2)/this.cell-.5,(n_/2-i.y)/this.cell-.5,1,1,0,0,1,t),r++}else i.vy-=1.6*e,i.x+=i.vx*e,i.y+=i.vy*e,i.z+=i.vz*e,i.rot+=i.vr*e,!(i.y<-1.6)&&(r++,this.tileAt(i.value,(i.x+n_/2)/this.cell-.5,(n_/2-i.y)/this.cell-.5,1,1,0,0,1,t,i.rot,i.z-this.depth/2));r||(this.debris=[])}drawSwipe(){let e=this.swipe,t=!!e&&e.live&&!e.fired&&this.shell.fx!==`off`;if(this.swipeMesh.visible=t,!t)return;let n=e.cx-e.x,r=e.cy-e.y,i=Math.hypot(n,r),a=i>=f_*.6;this.swipeMesh.position.set(e.x,e.y,this.depth+.02),this.swipeMesh.rotation.z=Math.atan2(r,n),this.swipeMesh.scale.set(Math.max(.001,i),.018,1),this.swipeMat.uniforms.uColor.value.copy(a?new W(M.gold):this.glowColor),this.swipeMat.uniforms.uA.value=.5+_e(i/f_)*.5}drawHud(e){let t=1-Math.exp(-16/70);this.displayScore+=(this.grid.score-this.displayScore)*t,Math.abs(this.grid.score-this.displayScore)<1&&(this.displayScore=this.grid.score),this.floaters=this.floaters.filter(t=>e-t.t0<800);let n=this.shell.best(),r=n!==null&&this.grid.score>n,i=n===null?`First game`:r?`New best`:`Best ${b_(n)}`,a=this.shell.phase===`title`,o=`${Math.floor(this.displayScore)}|${i}|${this.grid.highest}|${a}|${this.floaters.map(e=>e.t0).join()}`;o===this.hudKey&&!this.floaters.length||this.hud.tooSoon()||(this.hudKey=o,this.hud.mesh.visible=!a,this.hud.draw((t,n)=>{let a=b_(this.displayScore);Q(t,a,n/2,92,84,{align:`center`,display:!0,weight:600});let o=t.measureText(a).width;for(let r of this.floaters){let i=(e-r.t0)/800;t.globalAlpha=1-i*i,Q(t,r.text,n/2+o/2+18,72-Te(i)*40,34,{display:!0,weight:700,color:M.gold})}t.globalAlpha=1,Q(t,i,n/2-20,148,32,{align:`right`,color:r?M.gold:`#b9b0d6`,weight:600}),Q(t,`Top tile ${b_(this.grid.highest)}`,n/2+20,148,32,{align:`left`,color:we(this.grid.highest),weight:600})}))}drawHint(){this.hint.draw((e,t,n)=>{Q(e,`Flick a thumbstick, or hold the trigger and swipe`,t/2,n/2+12,32,{align:`center`,color:`#b9b0d6`,weight:600})}),this.hint.opacity=0}destroy(){this.timers.forEach(e=>clearTimeout(e)),this.timers.clear()}debugState(){let e=this.grid;return{score:e.score,highest:e.highest,moves:e.moves,merges:e.merges,over:e.over,size:e.size,rows:e.rows(),danger:this.danger(),ending:this.endTimer>0||this.ended,swiping:!!this.swipe}}debugTools(){return{load:e=>{this.grid.load(e),this.slide=null,this.pops.clear(),this.spawns.clear(),this.settles.clear(),this.refreshDanger()},move:e=>this.move(e),score:e=>this.grid.score=e,cellWorld:(e,t)=>this.tileWorld(e,t).toArray()}}},O_=.82,k_=.92;function A_(){let e=new Bm(O_,k_,1100);return e.mesh.renderOrder=40,e}function j_(e,t){e.draw((n,r,i)=>{Wm(n,r,i),Q(n,t.title,r/2,128,92,{align:`center`,display:!0,weight:700});let a=M_(n,t.lede,r/2,182,r-128,30,M.muted),o=Math.max(226,a+8),s=t.daily?[...t.modes,t.daily]:t.modes;for(let n of s)N_(e,`mode:${n.id}`,n,64,o,r-128,98,n===t.daily),o+=112;if(t.level){o+=18,Q(n,t.level.label,72,o+40,30,{color:M.muted,weight:600});let i=r-64-230;Um(e,`level-down`,`−`,i,o,70,64),Q(n,String(t.level.value),i+115,o+46,40,{align:`center`,display:!0}),Um(e,`level-up`,`+`,i+160,o,70,64),o+=84}let c=i-112,l=(r-128-32)/3;Um(e,`settings`,`Settings`,64,c,l,70),Um(e,`help`,`How to play`,64+l+16,c,l,70),Um(e,`exit`,`Arcade`,64+(l+16)*2,c,l,70,{disabled:!t.canExit})})}function M_(e,t,n,r,i,a,o){e.font=`500 ${a}px ${xe}`;let s=[],c=``;for(let n of t.split(` `)){let t=c?`${c} ${n}`:n;e.measureText(t).width>i&&c?(s.push(c),c=n):c=t}return c&&s.push(c),s.forEach((t,i)=>Q(e,t,n,r+i*a*1.3,a,{align:`center`,color:o,weight:500})),r+(s.length-1)*a*1.3+a*.6}function N_(e,t,n,r,i,a,o,s){let c=e.ctx,l=e.hover===t;Hm(c,r,i,a,o,26),c.fillStyle=l?Gm(n.color,.22):`rgba(255,255,255,0.05)`,c.fill(),c.lineWidth=l?5:3,c.strokeStyle=l?n.color:Gm(n.color,.35),c.stroke(),Hm(c,r+18,i+18,10,o-36,5),c.fillStyle=n.color,c.fill(),Q(c,n.name,r+50,i+44,36,{display:!0,weight:700,color:s?M.gold:M.text}),Q(c,n.desc,r+50,i+80,25,{color:M.muted,weight:500,maxWidth:a-300}),Q(c,n.best,r+a-26,i+o/2+10,27,{align:`right`,color:M.text,weight:600,maxWidth:250}),e.addHit({id:t,x:r,y:i,w:a,h:o})}function P_(e){e.draw((t,n)=>{let r=(e.height-640)/2;t.save(),t.translate(0,r),Wm(t,n,640),t.restore(),Q(t,`Paused`,n/2,r+120,72,{align:`center`,display:!0,weight:700});let i=n-220,a=r+170;for(let[t,n,r]of[[`resume`,`Resume`,!0],[`restart`,`Restart`,!1],[`settings`,`Settings`,!1],[`quit`,`Quit to menu`,!1]])Um(e,t,n,110,a,i,86,{primary:r}),a+=104;Q(t,`Press Y to resume`,n/2,a+26,26,{align:`center`,color:M.muted,weight:500})})}function F_(e,t){e.draw((n,r,i)=>{Wm(n,r,i,t.won?M.gold:`#ff6b8b`),Q(n,t.modeLabel,r/2,82,30,{align:`center`,color:t.color,weight:700}),Q(n,t.heading,r/2,150,58,{align:`center`,display:!0,weight:700}),n.save(),t.won&&(n.shadowColor=M.gold,n.shadowBlur=30),Q(n,t.value,r/2,262,96,{align:`center`,display:!0,weight:600,color:t.won?M.gold:M.text}),n.restore();let a=300;if(t.compare&&t.showExtras){let e=r-240;Hm(n,120,a,e,14,7),n.fillStyle=`rgba(255,255,255,0.1)`,n.fill(),Hm(n,120,a,Math.max(14,e*Math.max(0,Math.min(1,t.compare.progress))),14,7),n.fillStyle=t.color,n.fill(),Q(n,t.compare.text,r/2,a+54,28,{align:`center`,color:M.muted,weight:600}),a+=76}if(t.badge&&t.showExtras){n.font=`700 30px system-ui`;let e=Math.min(r-200,n.measureText(t.badge).width+80);Hm(n,(r-e)/2,a+6,e,54,27),n.fillStyle=Gm(M.gold,.2),n.fill(),Q(n,t.badge,r/2,a+44,30,{align:`center`,color:M.gold,weight:700}),a+=72}t.dailyLine&&(Q(n,t.dailyLine,r/2,a+40,26,{align:`center`,color:M.muted,weight:500,maxWidth:r-120}),a+=54),a+=20;let o=(r-120)/4;t.stats.forEach(([e,t],r)=>{let i=60+r%4*o+o/2,s=a+Math.floor(r/4)*104;Q(n,t,i,s+40,40,{align:`center`,display:!0,weight:600}),Q(n,e,i,s+78,24,{align:`center`,color:M.muted,weight:600})});let s=i-124,c=(r-128-24)/2;Um(e,`again`,`Play again`,64,s,c,84,{primary:!0,disabled:!t.buttonsEnabled}),Um(e,`menu`,`Change mode`,64+c+24,s,c,84,{disabled:!t.buttonsEnabled})})}var I_=[`full`,`reduced`,`off`],L_={full:`Full`,reduced:`Calm`,off:`Off`};function R_(e,t=[]){let n=se.get(),r=Jh.get(),i=[...me.map(e=>({id:e.id,name:e.name})),{id:`generative`,name:`Generative`}],a=[{id:`set:sound`,label:`Sound`,value:r.sound?`On`:`Off`},{id:`set:music`,label:`Music`,value:n.music?`On`:`Off`},{id:`set:soundtrack`,label:`Soundtrack`,value:i.find(e=>e.id===n.soundtrack)?.name??`Ambience`},{id:`set:effects`,label:`Effects`,value:L_[n.effects]},{id:`set:slowmo`,label:`Slow-motion moments`,value:r.slowmo?`On`:`Off`},{id:`set:haptics`,label:`Controller vibration`,value:n.haptics?`On`:`Off`},...t,{id:`set:distance`,label:`Board distance`,value:`${r.distance.toFixed(2)} m`},{id:`set:height`,label:`Board height`,value:r.height===0?`Eye level`:`${r.height>0?`+`:``}${Math.round(r.height*100)} cm`}];e.draw((t,n,r)=>{Wm(t,n,r),Q(t,`Settings`,n/2,100,60,{align:`center`,display:!0,weight:700});let i=140,o=Math.min(70,(r-290)/a.length);for(let r of a){if(Q(t,r.label,70,i+o/2+10,29,{weight:600}),r.id===`set:distance`||r.id===`set:height`){let a=n-70-330;Um(e,`${r.id}:-`,r.id===`set:distance`?`Closer`:`Lower`,a,i+6,110,o-12),Q(t,r.value,a+165,i+o/2+10,26,{align:`center`,color:M.muted}),Um(e,`${r.id}:+`,r.id===`set:distance`?`Further`:`Higher`,a+220,i+6,110,o-12)}else Um(e,r.id,r.value,n-70-260,i+6,260,o-12);i+=o}Um(e,`back`,`Done`,64,r-124,n-128,84,{primary:!0})})}function z_(e){let t=se.get(),n=Jh.get();switch(e){case`set:sound`:return Jh.update({sound:!n.sound}),!0;case`set:music`:return se.update({music:!t.music}),!0;case`set:soundtrack`:{let e=[...me.map(e=>e.id),`generative`];return se.update({soundtrack:e[(e.indexOf(t.soundtrack)+1)%e.length]}),!0}case`set:effects`:return se.update({effects:I_[(I_.indexOf(t.effects)+1)%I_.length]}),!0;case`set:slowmo`:return Jh.update({slowmo:!n.slowmo}),!0;case`set:haptics`:return se.update({haptics:!t.haptics}),!0;case`set:distance:-`:return Jh.update({distance:Math.max(.8,+(n.distance-.1).toFixed(2))}),!0;case`set:distance:+`:return Jh.update({distance:Math.min(2.4,+(n.distance+.1).toFixed(2))}),!0;case`set:height:-`:return Jh.update({height:Math.max(-.6,+(n.height-.05).toFixed(2))}),!0;case`set:height:+`:return Jh.update({height:Math.min(.3,+(n.height+.05).toFixed(2))}),!0}return!1}function B_(e,t,n,r){e.draw((i,a,o)=>{Wm(i,a,o),Q(i,t,a/2,100,56,{align:`center`,display:!0,weight:700});let s=Km(i,n,70,170,a-140,29,`#d8d0ee`);s+=20,Q(i,`Controllers`,70,s+10,32,{display:!0,weight:700}),s+=60;for(let[e,t]of r)Q(i,e,70,s,27,{weight:700}),Q(i,t,300,s,27,{color:`#c9c0e0`,weight:500,maxWidth:a-370}),s+=48;Um(e,`back`,`Got it`,64,o-124,a-128,84,{primary:!0})})}var V_=class{group=new ti;lanes={};constructor(e){for(let t of Object.keys(e)){let n=new Bm(.9,.36,900);n.mesh.visible=!1,n.mesh.renderOrder=30,this.group.add(n.mesh),this.lanes[t]={panel:n,t:1,dur:1,y:e[t]}}}show(e,t=1300,n=`mid`){let r=this.lanes[n];r.t=0,r.dur=t/1e3;let i=r.panel.width/.9;r.panel.draw((t,n,r)=>{let a=(r-e.reduce((e,t)=>e+t.size*i*1.12,0))/2;for(let r of e){let e=r.size*i;a+=e*1.12,t.save(),t.shadowColor=r.color,t.shadowBlur=e*.4,Q(t,r.text,n/2,a-e*.18,e,{align:`center`,color:r.color,display:r.display,weight:r.display?700:600}),t.restore()}}),r.panel.mesh.visible=!0}reset(){for(let e of Object.values(this.lanes))e.t=1,e.panel.mesh.visible=!1}update(e){for(let t of Object.values(this.lanes)){if(t.t>=1)continue;t.t=Math.min(1,t.t+e/t.dur);let n=t.panel.mesh;if(t.t>=1){n.visible=!1;continue}let r=Math.min(1,t.t*t.dur/.18),i=1+.25*Math.sin(r*Math.PI)*(1-r)+(r<1?(r-1)*.4:0);n.scale.setScalar(i);let a=Math.max(0,(t.t-.7)/.3);n.position.set(0,t.y+a*.06,.12),n.material.opacity=1-a}}};function H_(e,t){switch(e.type){case`hardDrop`:return[{hand:`right`,intensity:Math.min(.75,.35+e.distance*.02),ms:22+Math.min(e.distance,18)}];case`lock`:return t?[]:[{hand:`both`,intensity:.18,ms:14}];case`clear`:{if(e.perfect||e.lines>=4)return[{hand:`both`,intensity:.9,ms:60},{hand:`both`,intensity:.55,ms:45,delay:110},{hand:`both`,intensity:1,ms:110,delay:200}];if(e.lines===0)return[{hand:`both`,intensity:.35,ms:30}];let t=e.tspin===`none`?.4+e.lines*.1:.75;return[{hand:`both`,intensity:t,ms:35},{hand:`both`,intensity:t*.6,ms:25,delay:70}]}case`gameOver`:return[{hand:`both`,intensity:.8,ms:90},{hand:`both`,intensity:.6,ms:220,delay:150}];case`finish`:return[{hand:`both`,intensity:.5,ms:30},{hand:`both`,intensity:.5,ms:30,delay:80},{hand:`both`,intensity:.8,ms:70,delay:160}];default:return[]}}function U_(e){let t=Math.max(0,Math.min(1,e));return t<=0?[]:[{hand:`both`,intensity:.12+t*.25,ms:22},{hand:`both`,intensity:.08+t*.15,ms:18,delay:150}]}function W_(e){return[...e.split(/<h3/i)[0].matchAll(/<p>([\s\S]*?)<\/p>/gi)].map(e=>e[1].replace(/<[^>]+>/g,``).replace(/\s+/g,` `).trim()).join(` `)}var G_=class{host;def;root=new ti;game;phase=`title`;mode;daily=!1;view=`main`;menu=A_();popups;target;stageIdx=0;level=.15;momentum=0;countdownLeft=0;endAt=0;nextHeartbeat=0;results=null;dimValue=1;cleanups=[];constructor(e,t,n){this.host=e,this.def=t,this.mode=t.modes[0].id,this.game=n(this),this.popups=new V_(this.game.lanes),this.root.add(this.game.root,this.popups.group,this.menu.mesh),this.menu.mesh.position.set(0,-.02,.26),this.menu.onHover=()=>this.drawMenu(),this.target={panel:this.menu,onClick:e=>this.click(e)};let r=(e,t)=>{e.code===`Escape`||e.code===`KeyP`?t&&!e.repeat&&(e.preventDefault(),this.togglePause()):this.phase===`playing`&&this.game.key?.(e,t)&&e.preventDefault()},i=e=>r(e,!0),a=e=>r(e,!1);window.addEventListener(`keydown`,i),window.addEventListener(`keyup`,a),this.cleanups.push(()=>{window.removeEventListener(`keydown`,i),window.removeEventListener(`keyup`,a)}),this.cleanups.push(se.subscribe(()=>this.view===`settings`&&this.drawMenu())),this.showTitle()}get fx(){return se.get().effects}get playing(){return this.phase===`playing`}get modeInfo(){return this.def.modes.find(e=>e.id===this.mode)??this.def.modes[0]}get dim(){return this.dimValue}best(){return this.board(this.mode).best()?.value??null}toast(e,t=1300,n=`mid`){this.popups.show(e,t,n)}bump(e){this.momentum=Math.min(1,this.momentum+e)}haptics(e){this.host.haptics(e)}end(e,t){this.phase===`playing`&&(this.phase=`ending`,N.setMusicWanted(!1),e===`fail`?(N.gameOver(),this.haptics([{hand:`both`,intensity:.8,ms:90},{hand:`both`,intensity:.6,ms:220,delay:150}])):(N.finish(),this.haptics([{hand:`both`,intensity:.5,ms:30},{hand:`both`,intensity:.8,ms:70,delay:160}]),this.fx!==`off`&&this.celebrate()),this.toast([{text:t.text,size:.1,color:e===`win`?M.gold:`#ff8fa3`,display:!0},...t.sub?[{text:t.sub,size:.05,color:M.text,display:!1}]:[]],2600),this.endAt=performance.now()+(e===`fail`?2600:2800))}targets(){return[this.target]}pointing(){return this.menu.mesh.visible||this.phase===`playing`&&!!this.game.aims}needsControllers(){return!!this.game.needsButtons&&this.phase!==`title`&&this.phase!==`results`}capturesMouse(){return this.phase===`playing`&&!!this.game.mouse}mouse(e){this.phase===`playing`&&this.game.mouse?.(e)}pad(e){let t=[];for(let n of e)n.hand===`left`&&n.control===`y`?n.down&&this.togglePause():t.push(n);this.phase===`playing`&&this.game.pad(t)}autoPause(){(this.phase===`playing`||this.phase===`countdown`)&&this.pause()}destroy(){this.cleanups.forEach(e=>e()),this.game.destroy?.(),N.setMusicWanted(!1),this.root.removeFromParent()}board(e){let t=this.def.modes.find(t=>t.id===e)??this.def.modes[0];return new Ae(this.def.id,t.id,t.rank)}showTitle(){this.phase=`title`,this.view=`main`,this.results=null,this.popups.reset(),this.setStage(0,!1,!0),this.host.reveal(!1),N.setMusicWanted(!0),N.music?.setMuffled(!1),this.drawMenu()}start(e,t=!1){this.mode=e,this.daily=t;let n=Number(new URLSearchParams(location.search).get(`seed`)),r=t?E(this.def.id):n||c();this.results=null,this.popups.reset(),this.momentum=0,this.level=.15,this.game.start(e,Re(r),t),this.setStage(this.game.stage(),!1),this.host.recenter(),this.host.reveal(!0),N.unlock(),N.setMusicWanted(!0),N.music?.setMuffled(!1),this.def.countdown?this.countdown(900):this.beginPlay(),this.drawMenu()}countdown(e){this.phase=`countdown`,this.countdownLeft=e,this.toast([{text:`Ready`,size:.11,color:M.text,display:!0}],e),N.countdown(!1)}beginPlay(){this.phase=`playing`,this.def.countdown&&(this.toast([{text:`Go`,size:.14,color:M.gold,display:!0}],600),N.countdown(!0))}togglePause(){N.unlock(),this.phase===`paused`&&this.view===`main`?this.resume():(this.phase===`playing`||this.phase===`countdown`)&&this.pause()}pause(){this.phase=`paused`,this.view=`main`,this.game.pause?.(),N.music?.setMuffled(!0),this.drawMenu()}resume(){N.music?.setMuffled(!1),this.game.resume?.(),this.def.countdown?this.countdown(600):this.beginPlay(),this.drawMenu()}setStage(e,t,n=t){this.stageIdx=e;let r=Ie(e);this.host.world.set(r.id,n),N.music?.setTheme(r),t&&this.toast([{text:Om(r).name,size:.1,color:Om(r).glow,display:!0},{text:`Stage ${e+1}`,size:.04,color:M.muted,display:!1}],2400,`top`),this.host.world.prepare(Ie(e+1).id)}showResults(){let e=this.game.result(),t=this.modeInfo,n=this.board(t.id),r=n.best(),a=e.record!==!1,o=a?n.record({value:e.value,date:Date.now(),detail:e.detail}):-1,s=this.daily&&a?w(this.def.id,e.value,t.rank):null;this.phase=`results`,this.view=`main`,this.host.reveal(!1),N.music?.setMuffled(!0);let c=e=>this.def.formatValue(t.id,e),l=null;if(r&&a){let n=t.rank===`high`?e.value-r.value:r.value-e.value,i=t.rank===`high`?e.value/Math.max(1,r.value):r.value/Math.max(1,e.value),a=c(Math.abs(n)),o=t.rank===`high`?`short of`:n>=0?`faster than`:`slower than`;l={progress:i,text:n>0?`Beat your best by ${a}`:n===0?`Matched your best`:`${a} ${o} your best (${c(r.value)})`}}let u=null;o===0&&r?u=`New personal best`:o===0?u=`First score on the board`:o>0&&(u=`#${o+1} on your board`);let d=i(),f=performance.now();this.results={modeLabel:this.daily?`${t.name}, today's challenge`:t.name,heading:e.heading,won:e.won||o===0&&!!r,value:c(0),compare:l,badge:u,dailyLine:s?s.best===null?`Today's challenge played. ${d.days}-day streak.`:`Today's challenge. Best today: ${c(s.best)}. ${d.days}-day streak.`:null,stats:e.stats.slice(0,8),color:t.color,buttonsEnabled:!1,showExtras:!1,target:e.value,start:f,enableAt:f+650,pb:o===0&&!!r,mode:t},this.drawMenu()}celebrate(){let e=this.game.centre();for(let t of[M.gold,`#ff8fb1`,`#5ee0f0`,`#c38bff`])this.host.bursts.spawn({at:e,color:new W(t),count:110,dir:new V(0,.6,1).normalize(),spread:1.3,speed:[1.5,5],life:[1.5,3],size:[.012,.04],gravity:.8,drag:.4});this.host.shock.fire(e,new W(M.gold)),this.host.flare(1)}click(e){if(N.unlock(),N.tone({freq:N.chordTone(4,1),dur:.08,gain:.12,type:`triangle`}),e.startsWith(`mode:`)){let t=e.slice(5);t===`daily`?this.start(this.def.modes.find(e=>e.daily).id,!0):this.start(t)}else if(z_(e))this.drawMenu(),(e.startsWith(`set:distance`)||e.startsWith(`set:height`))&&this.host.recenter();else switch(e){case`settings`:this.view=`settings`,this.drawMenu();return;case`help`:this.view=`help`,this.drawMenu();return;case`back`:this.view=`main`,this.drawMenu();return;case`exit`:this.host.exit();return;case`resume`:this.resume();return;case`restart`:case`again`:this.start(this.mode,this.daily);return;case`quit`:case`menu`:this.showTitle();return}}drawMenu(){let e=this.phase===`title`||this.phase===`paused`||this.phase===`results`;if(this.menu.mesh.visible=e,!e)return;if(this.view===`settings`)return R_(this.menu);if(this.view===`help`)return B_(this.menu,`How to play`,W_(this.def.help),this.game.controls);if(this.phase===`paused`)return P_(this.menu);if(this.phase===`results`&&this.results)return F_(this.menu,this.results);let t=this.def.modes.find(e=>e.daily),n=Be(this.def.id),r=i();j_(this.menu,{title:this.def.title,lede:this.def.lede,modes:this.def.modes.map(e=>{let t=this.board(e.id).best();return{id:e.id,name:e.name,desc:e.desc,best:t?this.def.formatValue(e.id,t.value):`No score yet`,color:e.color}}),daily:t?{id:`daily`,name:`Today's challenge`,desc:`${this.def.dailyBlurb??`${t.name} with today's pieces.`} ${n?n.value===null?`Played today.`:`Best ${this.def.formatValue(t.id,n.value)}.`:`Not played yet.`}`,best:r.days>0?`${r.days}-day streak`:`Start a streak`,color:M.gold}:void 0,canExit:!0})}update(e,t){let n=Math.min(100,e*1e3),r=this.phase;r===`countdown`?(this.countdownLeft-=n,this.countdownLeft<=0&&this.beginPlay()):r===`playing`?this.game.update(n):r===`ending`&&t>=this.endAt&&this.showResults(),this.momentum*=Math.exp(-n/4e3);let i=r===`playing`||r===`countdown`||r===`paused`?Math.min(1,this.game.intensity()+this.momentum*.3):.12,a=(i>this.level?.35:.08)*(n/1e3);this.level+=Math.max(-a,Math.min(a,i-this.level)),N.music?.setIntensity(r===`ending`||r===`results`?.1:this.level),Y.uIntensity.value=this.level;let o=0;if(this.phase===`playing`){let e=this.game.stage();e!==this.stageIdx&&this.setStage(e,!0),o=Math.max(0,Math.min(1,this.game.danger())),o>0&&t>=this.nextHeartbeat&&(N.heartbeat(o),this.haptics(U_(o)),this.nextHeartbeat=t+1050-450*o)}Y.uDanger.value+=(o-Y.uDanger.value)*Math.min(1,e*6),this.updateResults(t);let s=this.menu.mesh.visible;this.dimValue+=((s&&this.phase!==`title`?.35:s?.55:1)-this.dimValue)*(1-Math.exp(-e*8)),this.game.render(e,t),this.popups.update(e)}updateResults(e){let t=this.results;if(!t||this.phase!==`results`)return;let n=Math.min(1,(e-t.start)/1200),r=1-(1-n)**3,i=this.def.formatValue(t.mode.id,t.target*(this.fx===`off`?1:r)),a=!1;i!==t.value&&(n>=1||!this.menu.tooSoon())&&(t.value=i,a=!0,n<1&&Math.floor((e-t.start)/70)!==Math.floor((e-t.start-16)/70)&&N.tick(Math.floor((e-t.start)/70))),!t.buttonsEnabled&&e>=t.enableAt&&(t.buttonsEnabled=!0,a=!0),n>=1&&!t.showExtras&&(t.showExtras=!0,a=!0,t.pb&&(N.stamp(),this.host.flare(.8)),N.setMusicWanted(!0),N.music?.setMuffled(!0)),a&&this.view===`main`&&this.drawMenu()}debugState(){return{game:this.def.id,phase:this.phase,view:this.view,mode:this.mode,stage:this.stageIdx,menu:this.menu.mesh.visible,buttons:this.menu.hits.filter(e=>!e.disabled).map(e=>e.id),...this.game.debugState?.()??{}}}debugTools(){return{click:e=>this.click(e),endNow:(e=`fail`)=>this.end(e,{text:e===`win`?`Done`:`Game over`}),...this.game.debugTools?.()??{}}}};function K_(e,t){switch(t){case`stick-left`:return`left`;case`stick-right`:return`right`;case`stick-down`:return`softDrop`;case`grip`:return`hold`;case`trigger`:return e===`right`?`hardDrop`:`rotateCCW`;case`a`:return`rotateCW`;case`b`:return`rotateCCW`;case`x`:return`rotate180`;case`y`:return`pause`;default:return null}}var q_=[[`Move`,`Either thumbstick left / right`],[`Soft drop`,`Thumbstick down`],[`Hard drop`,`Right trigger`],[`Rotate`,`A clockwise, B or left trigger counter-clockwise`],[`Rotate 180°`,`X`],[`Hold`,`Either grip`],[`Pause`,`Y`]],J_=class{holders=new Map;map(e){let t=[];for(let n of e){let e=K_(n.hand,n.control);if(!e)continue;let r=this.holders.get(e)??0;n.down?(this.holders.set(e,r+1),r===0&&t.push({action:e,down:!0})):r>0&&(this.holders.set(e,r-1),r===1&&t.push({action:e,down:!1}))}return t}reset(){this.holders.clear()}},Y_=.054,X_=Y_*.92,Z_=10*Y_,Q_=20*Y_,$_=2,ev=le.map(e=>new W(e)),tv=Object.fromEntries(Object.entries(ue).map(([e,t])=>[e,new W(t)]));function nv(e,t,n=new V){return n.set((e-9/2)*Y_,(39-t-19/2)*Y_,0)}var rv=`
  uniform vec3 uColor;
  uniform float uA;
  varying vec2 vUv;
  void main() {
    float x = 1.0 - abs(vUv.x * 2.0 - 1.0);
    float y = 1.0 - abs(vUv.y * 2.0 - 1.0);
    float a = uA * pow(x, 0.6) * pow(y, 1.4);
    gl_FragColor = vec4(uColor * a, a);
    #include <colorspace_fragment>
  }
`,iv=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,av=class{group=new ti;gems=new Lm(360);ghosts=new Lm(4,zm());well;rails;railGlow;glow=new W(`#c38bff`);glowTarget=new W(`#c38bff`);flash=new Float32Array(400);fades=[];fadeGeo=new ic(1,1);gray=0;grayTarget=0;winFlash=0;p=new V;labels;constructor(){this.group.add(this.gems.mesh),this.group.add(this.ghosts.mesh),this.ghosts.mesh.renderOrder=10,this.well=new K({vertexShader:iv,fragmentShader:`
        ${xp}
        uniform vec3 uGlow;
        uniform float uGrid;
        uniform float uDim;
        varying vec2 vUv;
        void main() {
          vec2 cell = vUv * vec2(10.0, 20.0);
          vec2 f = abs(fract(cell) - 0.5);
          float line = smoothstep(0.47, 0.5, max(f.x, f.y)) * uGrid;
          float floorGlow = pow(1.0 - vUv.y, 3.0) * (0.25 + uBeat * 0.1 + uIntensity * 0.15);
          float danger = smoothstep(0.55, 1.0, vUv.y) * uDanger * (0.5 + 0.5 * sin(uTime * 7.0));
          vec3 c = vec3(0.03, 0.02, 0.07) + uGlow * (line * 0.12 + floorGlow * 0.35);
          c += vec3(1.0, 0.25, 0.35) * danger * 0.35;
          float a = 0.82;
          gl_FragColor = vec4(c * uDim, a);
          #include <colorspace_fragment>
        }
      `,uniforms:{...Y,uGlow:{value:this.glow},uGrid:{value:1},uDim:{value:1}},transparent:!0,depthWrite:!1});let e=new G(new ic(Z_,Q_),this.well);e.position.z=-.04968*.55,e.renderOrder=-5,this.group.add(e),this.rails=new Ca({color:this.glow,toneMapped:!1});let t=.008,n=new Ro(t,Q_+t,t),r=new Ro(Z_+t*2,t,t);for(let e of[-1,1]){let r=new G(n,this.rails);r.position.set(e*(Z_/2+t/2),0,0),this.group.add(r)}let i=new G(r,this.rails);i.position.set(0,-Q_/2-t/2,0),this.group.add(i),this.railGlow=new K({vertexShader:iv,fragmentShader:rv,uniforms:{uColor:{value:this.glow},uA:{value:.5}},transparent:!0,depthWrite:!1,blending:2});for(let e of[-1,1]){let t=new G(new ic(.09,Q_*1.08),this.railGlow);t.position.set(Z_/2*e,0,-.01),t.renderOrder=-4,this.group.add(t)}let a=new G(new ic(Z_*1.3,.12),this.railGlow);a.position.set(0,-Q_/2,-.01),a.renderOrder=-4,this.group.add(a),this.labels=new Bm(Z_+.6,.06,900),this.labels.draw((e,t,n)=>{let r=.3/(Z_+.6)*t;Q(e,`Hold`,r/2,n*.72,34,{align:`center`,color:`#9a90b8`,weight:700}),Q(e,`Next`,t-r/2,n*.72,34,{align:`center`,color:`#9a90b8`,weight:700})}),this.labels.mesh.position.set(0,Q_/2+.005,0),this.group.add(this.labels.mesh)}setGlow(e,t=!1){this.glowTarget.set(e),t&&this.glow.copy(this.glowTarget)}reset(){this.flash.fill(0),this.gray=this.grayTarget=0,this.winFlash=0;for(let e of this.fades)e.mesh.visible=!1}cellWorld(e,t,n=new V){return this.group.localToWorld(nv(e,t,n))}onEvent(e,t){switch(e.type){case`lock`:for(let[t,n]of e.cells)this.flash[n*10+t]=.75;break;case`hardDrop`:if(t===`off`)break;this.dropTrails(e.from,e.to,tv[e.piece]);break;case`clear`:if(!e.rows.length)break;if(this.shiftFlash(e.rows),t!==`off`)for(let t of e.rows)this.fade(nv(9/2,t),Z_*1.02,Y_*1.25,new W(`#ffffff`),.38,.18,1.2)}}endFail(){this.grayTarget=1}endWin(){this.winFlash=1}update(e,t,n){this.glow.lerp(this.glowTarget,1-Math.exp(-e*1.5)),this.gray+=(this.grayTarget-this.gray)*(1-Math.exp(-e*2.2)),this.winFlash=Math.max(0,this.winFlash-e*.8);for(let t=0;t<this.flash.length;t++)this.flash[t]>0&&(this.flash[t]=Math.max(0,this.flash[t]-e*4));if(this.well.uniforms.uGrid.value=+!!n.grid,this.well.uniforms.uDim.value=n.dim,this.gems.material.uniforms.uDim.value=n.dim,this.gems.material.uniforms.uGray.value=this.gray,this.railGlow.uniforms.uA.value=(.32+Y.uBeat.value*.18+Y.uIntensity.value*.2)*n.dim,Y.uDanger.value>0){let e=.5+.5*Math.sin(performance.now()/140);this.rails.color.copy(this.glow).lerp(new W(`#ff4a6a`),Y.uDanger.value*e)}else this.rails.color.copy(this.glow);let r=this.gems;r.begin();let i=this.winFlash;for(let e=20;e<40;e++)for(let n=0;n<10;n++){let a=t.cell(n,e);a&&(nv(n,e,this.p),r.add(this.p.x,this.p.y,0,X_,ev[a],Math.max(this.flash[e*10+n],i),1))}let a=t.active;if(this.ghosts.begin(),a&&!n.hidePiece){let e=t.lockProgress();for(let[n,i]of t.cellsOf(a))i<20-$_||(nv(n,i,this.p),r.add(this.p.x,this.p.y,0,X_,tv[a.type],e*.3,1.6));if(n.ghost){let e=t.ghostY();if(e!==a.y){for(let[n,r]of t.cellsOf(a,e))r<20||(nv(n,r,this.p),this.ghosts.add(this.p.x,this.p.y,0,X_,tv[a.type]));this.ghosts.material.uniforms.uColor.value.copy(tv[a.type]),this.ghosts.material.uniforms.uAlpha.value=n.dim}}}this.ghosts.end();let o=Z_/2+.15,s=Q_/2-.07;t.hold&&this.piece(t.hold,-o,s,Y_*.72,t.holdUsed?.35:1);let c=s;t.queue.forEach((e,t)=>{let n=t===0?Y_*.78:Y_*.6;this.piece(e,o,c,n,t===0?1:.8),c-=n*2+.045}),r.end();for(let t of this.fades)t.mesh.visible&&(t.t+=e/t.dur,t.t>=1?t.mesh.visible=!1:(t.mat.uniforms.uA.value=(1-t.t)*(1-t.t)*1.6,t.mesh.scale.x=t.mesh.userData.w*(1+t.t*(t.grow-1))))}piece(e,t,n,r,i){let a=ze[e][0],o=a.map(([e])=>e),s=a.map(([,e])=>e),c=(Math.min(...o)+Math.max(...o))/2,l=(Math.min(...s)+Math.max(...s))/2,u=tv[e].clone().multiplyScalar(i);for(let[e,o]of a)this.gems.add(t+(e-c)*r,n-(o-l)*r,0,r*.92,u,0,i)}shiftFlash(e){let t=new Float32Array(400),n=39;for(let r=39;r>=0;r--)e.includes(r)||(t.set(this.flash.subarray(r*10,r*10+10),n*10),n--);this.flash=t}dropTrails(e,t,n){let r=new Map;for(let[t,n]of e){let e=r.get(t)??{top:n,bottom:n};e.top=Math.min(e.top,n),r.set(t,e)}for(let[e,n]of t){let t=r.get(e);t&&(t.bottom=Math.max(t.bottom,n))}for(let[e,t]of r){let r=Math.max(t.top,20);if(t.bottom-r<1)continue;let i=nv(e,r),a=nv(e,t.bottom),o=i.clone().add(a).multiplyScalar(.5);this.fade(o,Y_*.9,i.y-a.y+Y_,n,.28,.1,1)}}fade(e,t,n,r,i,a,o){let s=this.fades.find(e=>!e.mesh.visible);if(!s){if(this.fades.length>=24)s=this.fades[0];else{let e=new K({vertexShader:iv,fragmentShader:rv,uniforms:{uColor:{value:new W},uA:{value:0}},transparent:!0,depthWrite:!1,blending:2}),t=new G(this.fadeGeo,e);t.renderOrder=12,this.group.add(t),s={mesh:t,mat:e,t:0,dur:1,grow:1},this.fades.push(s)}}s.mesh.position.set(e.x,e.y,a*Y_),s.mesh.scale.set(t,n,1),s.mesh.userData.w=t,s.mat.uniforms.uColor.value.copy(r),s.t=0,s.dur=i,s.grow=o,s.mesh.visible=!0}},ov=[``,` single`,` double`,` triple`],sv=class{panel=new Bm(.32,.6,1e3);key=``;shown=0;constructor(){this.panel.mesh.position.set(-(Z_/2+.2),Q_/2-.5,0)}reset(){this.shown=0,this.key=``}update(e,t,n,r){this.shown+=(t.score-this.shown)*(1-Math.exp(-e*10)),Math.abs(t.score-this.shown)<1&&(this.shown=t.score);let i=n===`sprint`?{label:`Time`,value:he(t.time)}:{label:`Score`,value:Se(this.shown)},a=[];if(n===`sprint`)a.push([`Lines left`,String(Math.max(0,40-t.lines)),M.text]),a.push([`Pieces/s`,t.time>0?(t.stats.pieces/(t.time/1e3)).toFixed(2):`0.00`,M.text]),r!==null&&a.push([`Best`,he(r),M.muted]);else if(n===`ultra`){let e=oe-t.time;a.push([`Time left`,he(e,!1),e<1e4?M.danger:M.text]),a.push([`Lines`,String(t.lines),M.text]),r!==null&&a.push([`Best`,Se(r),M.muted])}else a.push([`Level`,String(t.level),M.text]),a.push([`Lines`,String(t.lines),M.text]),a.push([`Time`,he(t.time,!1),M.text]),r!==null&&a.push([`Best`,Se(r),M.muted]);let o=i.value+a.map(e=>e.join()).join(`|`);o===this.key||this.panel.tooSoon()||(this.key=o,this.panel.draw((e,t)=>{let n=t-16;Q(e,i.label,n,44,34,{align:`right`,color:`#b9b0d6`,weight:700}),Q(e,i.value,n,112,64,{align:`right`,display:!0,weight:600});let r=186;for(let[t,i,o]of a)Q(e,t,n,r,30,{align:`right`,color:`#b9b0d6`,weight:700}),Q(e,i,n,r+50,44,{align:`right`,color:o,display:!0,weight:500}),r+=100}))}},cv={top:Q_/2+.16,mid:.1,low:-.2};function lv(e,t){let n=[];t.perfect&&n.push({text:`Perfect clear`,size:.075,color:M.gold,display:!0}),t.tspin===`full`?n.push({text:`T-spin${ov[t.lines]}`,size:.07,color:M.spin,display:!0}):t.tspin===`mini`?n.push({text:`Mini T-spin${ov[t.lines]}`,size:.055,color:M.spin,display:!0}):t.lines===4&&n.push({text:`Quad`,size:.1,color:ue.I,display:!0}),t.b2b&&n.push({text:`Back-to-back`,size:.036,color:M.text,display:!1}),t.combo>=2&&n.push({text:`${t.combo} combo`,size:.048,color:M.text,display:!0}),n.length&&t.points>0&&n.push({text:`+${Se(t.points)}`,size:.036,color:M.muted,display:!1}),n.length&&e.show(n)}var uv=1e3/240,dv=[`.........I`,`T......OOI`,`TT..ZZ.OOI`,`TJ...ZZLLI`,`JJJSS.LL..`],fv=`Fit the falling pieces together to fill rows. Full rows clear. Clearing four at once is a Quad; twisting a T piece into a tight slot is a T-spin. Both score big, and chaining them back-to-back scores bigger.`,pv=le.map(e=>new W(e));function mv(e,t){return t?e===`sprint`?he(t.time):Se(t.score):`No score yet`}var hv=class{host;root=new ti;board=new av;stats=new sv;popups=new V_(cv);menu=A_();target;showcase;engine=null;controller;bindings=new J_;intensity=new fe;phase=`title`;view=`main`;mode=`marathon`;daily=!1;best=null;announcedBest=!1;lastHardDrop=!1;stageIdx=0;acc=0;countdownLeft=0;endAt=0;nextHeartbeat=0;freezeUntil=0;lastSlowmo=-1e9;unmuffleAt=0;results=null;menuDim=1;cleanups=[];tmp=new V;constructor(e){this.host=e,this.root.add(this.board.group,this.stats.panel.mesh,this.popups.group,this.menu.mesh),this.menu.mesh.position.set(0,-.02,.24),this.menu.onHover=()=>this.drawMenu(),this.target={panel:this.menu,onClick:e=>this.click(e)},this.showcase=new Ve({mode:`marathon`,seed:2026}),this.showcase.loadRows(dv),this.showcase.hold=`T`,this.showcase.events.length=0,this.controller=new Fe(()=>this.engine,()=>j.get()),this.cleanups.push(A(()=>j.get(),{down:e=>this.actionDown(e),up:e=>this.controller.release(e),suspended:()=>this.phase===`title`||this.phase===`results`})),this.cleanups.push(se.subscribe(()=>this.view===`settings`&&this.drawMenu())),this.showTitle()}destroy(){this.cleanups.forEach(e=>e()),N.setMusicWanted(!1),this.root.removeFromParent()}targets(){return[this.target]}pointing(){return this.menu.mesh.visible}needsControllers(){return this.phase!==`title`&&this.phase!==`results`}pad(e){for(let{action:t,down:n}of this.bindings.map(e))n?this.actionDown(t):this.controller.release(t)}actionDown(e){N.unlock();let t=this.phase;e===`pause`?t===`playing`||t===`countdown`?this.pause():t===`paused`&&this.view===`main`&&this.resume():e===`restart`?(t===`results`||this.mode!==`marathon`&&t!==`title`)&&this.start(this.mode,this.daily):t===`playing`?this.controller.press(e):t===`countdown`&&this.controller.press(e,!1)}autoPause(){this.controller.releaseAll(),this.bindings.reset(),(this.phase===`playing`||this.phase===`countdown`)&&this.pause()}click(e){if(N.unlock(),N.tone({freq:N.chordTone(4,1),dur:.08,gain:.12,type:`triangle`}),e.startsWith(`mode:`)){let t=e.slice(5);t===`daily`?this.start(`sprint`,!0):this.start(t)}else if(z_(e))this.drawMenu(),(e.startsWith(`set:distance`)||e.startsWith(`set:height`))&&this.host.recenter();else switch(e){case`game:ghost`:j.update({ghost:!j.get().ghost}),this.drawMenu();return;case`game:grid`:j.update({grid:!j.get().grid}),this.drawMenu();return;case`level-down`:this.changeLevel(-1);return;case`level-up`:this.changeLevel(1);return;case`settings`:this.view=`settings`,this.drawMenu();return;case`help`:this.view=`help`,this.drawMenu();return;case`back`:this.view=`main`,this.drawMenu();return;case`exit`:this.host.exit();return;case`resume`:this.resume();return;case`restart`:case`again`:this.start(this.mode,this.daily);return;case`quit`:case`menu`:this.showTitle();return}}changeLevel(e){j.update({startLevel:Math.min(15,Math.max(1,j.get().startLevel+e))}),this.drawMenu()}showTitle(){this.phase=`title`,this.view=`main`,this.engine=null,this.results=null,this.controller.releaseAll(),this.board.reset(),this.popups.reset(),this.setStage(0,!1,!0),this.host.reveal(!1),N.setMusicWanted(!0),N.music?.setMuffled(!1),this.drawMenu()}start(e,t=!1){this.mode=e,this.daily=t,this.best=Ee(e),this.announcedBest=!1;let n=j.get(),r=t?E(`stacks`):Number(new URLSearchParams(location.search).get(`seed`))||void 0;this.engine=new Ve({mode:e,seed:r,startLevel:n.startLevel}),this.engine.setSoftDropFactor(n.sdf===0?1/0:n.sdf),this.engine.events.length=0,this.controller.releaseAll(),this.board.reset(),this.popups.reset(),this.stats.reset(),this.intensity.reset(),this.results=null,this.freezeUntil=0,this.setStage(0,!1),this.host.recenter(),this.host.reveal(!0),N.unlock(),N.setMusicWanted(!0),N.music?.setMuffled(!1),this.phase=`countdown`,this.countdownLeft=900,this.popups.show([{text:`Ready`,size:.11,color:M.text,display:!0}],850),N.countdown(!1),this.drawMenu()}beginPlay(){this.phase=`playing`,this.acc=0,this.popups.show([{text:`Go`,size:.14,color:M.gold,display:!0}],600),N.countdown(!0),this.controller.resume()}pause(){this.engine&&(this.phase=`paused`,this.view=`main`,this.controller.releaseAll(),this.engine.setSoftDrop(!1),N.music?.setMuffled(!0),this.drawMenu())}resume(){N.music?.setMuffled(!1),this.phase=`countdown`,this.countdownLeft=600,this.popups.show([{text:`Ready`,size:.11,color:M.text,display:!0}],550),N.countdown(!1),this.drawMenu()}setStage(e,t,n=t){this.stageIdx=e;let r=Ie(e);this.host.world.set(r.id,n),this.board.setGlow(Om(r).glow,!t),N.music?.setTheme(r),t&&this.popups.show([{text:Om(r).name,size:.1,color:Om(r).glow,display:!0},{text:`Stage ${e+1}`,size:.04,color:M.muted,display:!1}],2400,`top`),this.host.world.prepare(Ie(e+1).id)}showResults(){let e=this.engine,t=e.state===`finished`,n=this.best,r={score:e.score,lines:e.lines,level:e.level,time:e.time,pieces:e.stats.pieces,date:Date.now()},a=this.mode!==`sprint`||t,o=a?pe(this.mode,r):-1,s=this.daily?w(`stacks`,a?e.time:null,`low`):null;this.phase=`results`,this.view=`main`,this.host.reveal(!1),N.music?.setMuffled(!0);let c=Ne.find(e=>e.id===this.mode),l=t||o===0&&!!n,u=`Game over`;this.mode===`sprint`&&(u=t?`Sprint complete`:`Topped out`),this.mode===`ultra`&&(u=t?`Time's up`:`Topped out`);let d=this.mode===`sprint`&&t,f=this.mode===`sprint`?t?e.time:e.lines:e.score,p=e=>this.mode===`sprint`?t?he(e):`${Math.round(e)} / 40 lines`:Se(e),m=null;if(this.mode===`sprint`&&!t)m={progress:e.lines/40,text:`${40-e.lines} lines to go`};else if(n&&a){if(d){let t=e.time-n.time;m={progress:n.time/e.time,text:t<0?`${he(-t)} faster than your best`:`${he(t)} slower than your best (${he(n.time)})`}}else{let t=n.score-e.score;m={progress:e.score/n.score,text:t<0?`Beat your best by ${Se(-t)}`:`${Se(t)} short of your best (${Se(n.score)})`}}}let h=null;o===0&&n?h=`New personal best`:o===0?h=`First score on the board`:o>0&&(h=`#${o+1} on your board`);let g=e.time>0?(e.stats.pieces/(e.time/1e3)).toFixed(2):`0.00`,_=performance.now();this.results={modeLabel:this.daily?`${c.name}, today's challenge`:c.name,heading:u,won:l,value:p(0),compare:m,badge:h,dailyLine:s?s.best===null?`Today's challenge played. ${i().days}-day streak.`:`Today's challenge. Best today: ${he(s.best)}. ${i().days}-day streak.`:null,stats:[[`Lines`,String(e.lines)],[`Time`,he(e.time)],[`Pieces/sec`,g],[`Quads`,String(e.stats.quads)],[`T-spins`,String(e.stats.tspins)],[`Best combo`,String(Math.max(0,e.stats.maxCombo))],...this.mode===`sprint`?[]:[[`Level`,String(e.level)]],[`Pieces`,String(e.stats.pieces)]],color:c.color,buttonsEnabled:!1,showExtras:!1,target:f,format:p,start:_,enableAt:_+650,pb:o===0&&!!n},this.drawMenu()}drawMenu(){let e=this.phase===`title`||this.phase===`paused`||this.phase===`results`;if(this.menu.mesh.visible=e,!e)return;if(this.view===`settings`){let e=j.get();R_(this.menu,[{id:`game:ghost`,label:`Ghost piece`,value:e.ghost?`On`:`Off`},{id:`game:grid`,label:`Grid`,value:e.grid?`On`:`Off`}]);return}if(this.view===`help`){B_(this.menu,`How to play`,fv,q_);return}if(this.phase===`paused`){P_(this.menu);return}if(this.phase===`results`&&this.results){F_(this.menu,this.results);return}let t=Be(`stacks`),n=i();j_(this.menu,{title:`Stacks`,lede:`Clear lines, chase your best.`,modes:Ne.map(e=>({id:e.id,name:e.name,desc:e.desc,best:mv(e.id,Ee(e.id)),color:e.color})),daily:{id:`daily`,name:`Today's challenge`,desc:`Sprint with today's pieces. ${t?t.value===null?`Played today`:`Best ${he(t.value)}`:`Not played yet`}.`,best:n.days>0?`${n.days}-day streak`:`Start a streak`,color:M.gold},level:{label:`Marathon starts at level`,value:j.get().startLevel},canExit:!0})}update(e,t){let n=e*1e3,r=this.engine;if(this.phase===`countdown`)this.countdownLeft-=n,this.controller.tick(n,!1),this.countdownLeft<=0&&this.beginPlay();else if(this.phase===`playing`&&r)for(this.acc+=Math.min(n,100);this.acc>=uv;)this.controller.tick(uv),r.update(uv),this.acc-=uv;else this.phase===`ending`&&t>=this.endAt&&this.showResults();r&&this.processEvents(r);let i=r&&this.phase!==`results`,a=this.intensity.update(n,i?{mode:this.mode,level:r.level,lines:r.lines,time:r.time,stackHeight:r.stackHeight()}:null);N.music?.setIntensity(this.phase===`ending`||this.phase===`results`?.1:a);let o=r&&this.phase===`playing`?Math.max(0,(r.stackHeight()-.65)/.35):0;if(Y.uIntensity.value=a,Y.uDanger.value+=(o-Y.uDanger.value)*Math.min(1,e*6),this.phase===`playing`&&r){let e=Math.max(0,(r.stackHeight()-.6)/.4);e>0&&t>=this.nextHeartbeat&&(N.heartbeat(Math.min(1,e)),this.host.haptics(U_(e)),this.nextHeartbeat=t+1050-450*Math.min(1,e))}this.updateResults(t),this.unmuffleAt&&t>=this.unmuffleAt&&(this.unmuffleAt=0,(this.phase===`playing`||this.phase===`countdown`)&&(N.music?.setMuffled(!1),this.host.flare(1)));let s=this.menu.mesh.visible;if(this.menuDim+=((s&&this.phase!==`title`?.35:s?.55:1)-this.menuDim)*(1-Math.exp(-e*8)),t>=this.freezeUntil){let t=j.get();this.board.update(e,r??this.showcase,{ghost:t.ghost,grid:t.grid,hidePiece:!r,dim:this.menuDim})}this.stats.panel.mesh.visible=!!r&&!s,r&&this.stats.update(e,r,this.mode,this.best?this.mode===`sprint`?this.best.time:this.best.score:null),this.popups.update(e)}updateResults(e){let t=this.results;if(!t||this.phase!==`results`)return;let n=Math.min(1,(e-t.start)/1200),r=1-(1-n)**3,i=t.format(t.target*(se.get().effects===`off`?1:r)),a=!1;i!==t.value&&(n>=1||!this.menu.tooSoon())&&(t.value=i,a=!0,n<1&&Math.floor((e-t.start)/70)!==Math.floor((e-t.start-16)/70)&&N.tick(Math.floor((e-t.start)/70))),!t.buttonsEnabled&&e>=t.enableAt&&(t.buttonsEnabled=!0,a=!0),n>=1&&!t.showExtras&&(t.showExtras=!0,a=!0,t.pb&&(N.stamp(),this.host.flare(.8)),N.setMusicWanted(!0),N.music?.setMuffled(!0)),a&&this.view===`main`&&this.drawMenu()}processEvents(e){if(!e.events.length)return;let t=this.host.fx();for(let n of e.events)switch(this.board.onEvent(n,t),this.host.haptics(H_(n,this.lastHardDrop)),n.type){case`move`:N.move();break;case`rotate`:N.rotate();break;case`hold`:N.hold();break;case`hardDrop`:N.hardDrop(n.distance),this.lastHardDrop=!0,this.dropSparks(n,t);break;case`lock`:this.lastHardDrop||N.lock(),this.lastHardDrop=!1;break;case`clear`:{N.clear(n.lines,n.combo,n.tspin,n.b2b),n.perfect&&N.perfect(),this.intensity.bump(n.lines*.1+(n.tspin===`none`?0:.25)+(n.b2b?.1:0)+Math.max(0,n.combo)*.05),lv(this.popups,n),this.clearBurst(n,t);let r=re(e.lines);r!==this.stageIdx&&e.state===`playing`&&this.setStage(r,!0);break}case`levelUp`:N.levelUp(),this.popups.show([{text:`Level ${n.level}`,size:.07,color:M.text,display:!0}],1300,`low`);break;case`gameOver`:N.setMusicWanted(!1),N.gameOver(),this.freezeUntil=performance.now()+200,this.board.endFail(),this.popups.show([{text:`Topped out`,size:.1,color:`#ff8fa3`,display:!0},{text:this.mode===`sprint`?`${e.lines} of 40 lines`:Se(e.score),size:.05,color:M.text,display:!1}],2600),this.endGame(2700);break;case`finish`:N.setMusicWanted(!1),N.finish(),this.board.endWin(),this.popups.show([{text:this.mode===`sprint`?`Complete`:`Time's up`,size:.1,color:M.gold,display:!0},{text:this.mode===`sprint`?he(e.time):Se(e.score),size:.05,color:M.text,display:!1}],2800),t!==`off`&&this.celebrate(),this.endGame(2900)}e.events.length=0,!this.announcedBest&&this.best&&this.mode!==`sprint`&&e.score>this.best.score&&e.state===`playing`&&(this.announcedBest=!0,this.popups.show([{text:`New best`,size:.08,color:M.gold,display:!0}],1600,`top`),N.newBest(),t!==`off`&&this.host.flare(.6))}endGame(e){this.phase=`ending`,this.controller.releaseAll(),this.endAt=performance.now()+e}clearBurst(e,t){if(t===`off`)return;let n=this.host.head(),r=e.lines>=4||e.perfect||e.tspin===`full`&&e.lines>=2,i=t===`full`;e.rows.forEach((t,a)=>{let o=e.rowData[a];for(let e=0;e<o.length;e++){let a=this.board.cellWorld(e,t,new V),s=pv[o[e]]??pv[1],c=this.tmp.copy(n).sub(a).normalize();if(i){let t=new V(c.z,0,-c.x).multiplyScalar((e-4.5)*.06);this.host.bursts.spawn({at:a,color:s,count:r?9:5,dir:c.clone().add(t).normalize(),spread:r?.5:.38,speed:r?[3,7]:[2,4.6],life:[1,1.9],size:[.012,r?.04:.03],drag:.35,jitter:.02})}this.host.bursts.spawn({at:a,color:s,count:i?3:2,dir:new V((e-4.5)/4.5,.4,-.6).normalize(),spread:.6,speed:[1.2,3.5],life:[1.2,2.4],size:[.015,.035],drag:.25,gravity:-.15})}});let a=this.board.cellWorld(4.5,e.rows.length?e.rows[Math.floor(e.rows.length/2)]:30,new V);if(e.tspin!==`none`&&e.lines===0&&this.host.bursts.spawn({at:a,color:new W(M.spin),count:60,dir:new V(0,1,0),spread:1.4,speed:[.6,1.8],life:[.8,1.5],size:[.01,.025],drag:1}),e.perfect&&this.host.bursts.spawn({at:a,color:new W(M.gold),count:i?600:200,dir:new V(0,0,1),spread:1.5,speed:[2,6],life:[1.5,3],size:[.015,.045],drag:.3}),r){let t=new W(e.perfect?M.gold:e.tspin===`none`?ue.I:M.spin);this.host.shock.fire(this.board.group.getWorldPosition(new V),t),this.host.flare(1),i&&this.host.shock.fire(this.board.group.getWorldPosition(new V),t,60,3.2,.6)}else e.lines>0&&this.host.flare(.15+e.lines*.1);let o=performance.now();(e.perfect||e.lines>=4&&e.b2b||e.tspin===`full`&&e.lines>=3||e.combo>=5)&&i&&Jh.get().slowmo&&o-this.lastSlowmo>2e4&&(this.lastSlowmo=o,this.host.slowmo(),N.music?.setMuffled(!0),this.unmuffleAt=o+750)}dropSparks(e,t){if(t===`off`||e.distance<2)return;let n=new W(ue[e.piece]),r=Math.max(...e.to.map(([,e])=>e));for(let[i,a]of e.to){if(a!==r)continue;let o=this.board.cellWorld(i,a,new V);o.y-=.025,this.host.bursts.spawn({at:o,color:n,count:t===`full`?5:2,dir:new V(0,.5,1).normalize(),spread:1.2,speed:[.3,.9+e.distance*.04],life:[.35,.7],size:[.008,.018],gravity:2.5,drag:1.5})}}celebrate(){let e=this.board.group.getWorldPosition(new V);e.y+=Q_*.3;for(let t of[M.gold,`#ff8fb1`,`#5ee0f0`,`#c38bff`])this.host.bursts.spawn({at:e,color:new W(t),count:120,dir:new V(0,.6,1).normalize(),spread:1.3,speed:[1.5,5],life:[1.5,3.2],size:[.012,.04],gravity:.8,drag:.4});this.host.shock.fire(this.board.group.getWorldPosition(new V),new W(M.gold)),this.host.flare(1)}debugState(){let e=this.engine;return{game:`stacks`,phase:this.phase,view:this.view,mode:this.mode,score:e?.score??0,lines:e?.lines??0,stage:this.stageIdx,active:e?.active?{...e.active}:null,menu:this.menu.mesh.visible,buttons:this.menu.hits.map(e=>e.id)}}debugTools(){return{click:e=>this.click(e),loadRows:e=>this.engine?.loadRows(e),place:(e,t,n,r)=>this.engine?.placeActive(e,t,n,r),stage:e=>this.setStage(e,!0),setLines:e=>{this.engine&&(this.engine.lines=e)},press:e=>this.actionDown(e),release:e=>this.controller.release(e)}}},gv={stacks:e=>new hv(e),gridline:e=>new G_(e,de,e=>new ch(e)),pulse:e=>new G_(e,g,e=>new lg(e)),orbs:e=>new G_(e,He,e=>new Gh(e)),twenty48:e=>new G_(e,Ce,e=>new D_(e)),slither:e=>new G_(e,C,e=>new Bg(e))},_v=4.5,vv=e=>e*e*(3-2*e),yv=class{factories;root=new ti;envs=new Map;current=null;incoming=null;t=0;constructor(e){this.factories=e,se.subscribe(e=>{for(let t of this.envs.values())Rp(t.group,e.effects)})}get id(){return(this.incoming??this.current)?.id??null}prepare(e){this.get(e)}set(e,t=!0){if(this.id===e)return;let n=this.get(e);if(n){if(!t||!this.current){for(let e of this.envs.values())this.show(e,+(e===n));this.current=n,this.incoming=null,n.sky.renderOrder=-100}else this.incoming&&n===this.current?(this.show(this.incoming,0),this.incoming=null,this.show(n,1),n.sky.renderOrder=-100):(this.incoming&&(this.t>.5?(this.show(this.current,0),this.current=this.incoming):this.show(this.incoming,0),this.show(this.current,1)),this.incoming=n,this.t=0,this.current.sky.renderOrder=-100,n.sky.renderOrder=-90,this.show(n,1e-4))}}update(e){if(this.incoming&&this.current){this.t=Math.min(1,this.t+e/_v);let t=vv(this.t);this.incoming.mix.value=t,this.incoming.skyMix.value=t,this.current.mix.value=1-t*.999,this.current.skyMix.value=1,this.t>=1&&(this.show(this.current,0),this.current=this.incoming,this.incoming=null,this.current.sky.renderOrder=-100)}for(let t of this.envs.values())t.group.visible&&t.update(e)}show(e,t){e.mix.value=t,e.skyMix.value=t,e.group.visible=t>0}get(e){let t=this.envs.get(e);if(t)return t;let n=this.factories[e];return n?(t=n(),Rp(t.group,se.get().effects),t.group.visible=!1,this.envs.set(e,t),this.root.add(t.group),t):null}},bv=[[0,`trigger`,`trigger`],[1,`grip`,`grip`],[3,`stick`,`stick`],[4,`x`,`a`],[5,`y`,`b`]];function xv(e,t,n){if(n){let r=n===`stick-left`?-e:n===`stick-right`?e:n===`stick-up`?-t:t,i=Math.abs(n===`stick-left`||n===`stick-right`?t:e);if(r>=.35&&!(i>=.6&&i>r))return n}let r=Math.abs(e),i=Math.abs(t);return Math.max(r,i)<.6?null:r>=i?e<0?`stick-left`:`stick-right`:t<0?`stick-up`:`stick-down`}var Sv=class{state={left:{buttons:new Set,stick:null},right:{buttons:new Set,stick:null}};update(e){let t=[],n=new Set;for(let r of e){n.add(r.hand);let e=this.state[r.hand];for(let[n,i,a]of bv){let o=r.hand===`left`?i:a,s=!!r.pressed[n];s&&!e.buttons.has(o)?(e.buttons.add(o),t.push({hand:r.hand,control:o,down:!0})):!s&&e.buttons.has(o)&&(e.buttons.delete(o),t.push({hand:r.hand,control:o,down:!1}))}let i=xv(r.axes[2]??0,r.axes[3]??0,e.stick);i!==e.stick&&(e.stick&&t.push({hand:r.hand,control:e.stick,down:!1}),i&&t.push({hand:r.hand,control:i,down:!0}),e.stick=i)}for(let e of[`left`,`right`])n.has(e)||t.push(...this.releaseHand(e));return t}releaseAll(){return[...this.releaseHand(`left`),...this.releaseHand(`right`)]}releaseHand(e){let t=this.state[e],n=[...t.buttons].map(t=>({hand:e,control:t,down:!1}));return t.stick&&n.push({hand:e,control:t.stick,down:!1}),t.buttons.clear(),t.stick=null,n}},Cv=[`thumb`,`index-finger`,`middle-finger`,`ring-finger`,`pinky-finger`],wv={thumb:[`metacarpal`,`phalanx-proximal`,`phalanx-distal`,`tip`],default:[`metacarpal`,`phalanx-proximal`,`phalanx-intermediate`,`phalanx-distal`,`tip`]};function Tv(){let e=[`wrist`],t=[];for(let n of Cv){let r=0;for(let i of wv[n]??wv.default){e.push(`${n}-${i}`);let a=e.length-1;t.push([r,a]),r=a}}return{joints:e,bones:t}}var Ev=Tv(),Dv=`
  attribute float aTip;
  varying float vTip;
  varying vec3 vN;
  varying vec3 vView;
  void main() {
    vTip = aTip;
    vec4 world = modelMatrix * instanceMatrix * vec4(position, 1.0);
    vN = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * normal);
    vView = normalize(cameraPosition - world.xyz);
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`,Ov=class{hand;group=new ti;beads;lines;linePos;m=new U;p=new V;q=new ar;s=new V;pts=Ev.joints.map(()=>new V);constructor(e,t){this.hand=e;let n=Ev.joints.length,r=new cc(1,10,8),i=new Float32Array(n);Ev.joints.forEach((e,t)=>i[t]=+!!e.endsWith(`tip`)),r.setAttribute(`aTip`,new Qa(i,1));let a=new K({vertexShader:Dv,fragmentShader:`
        ${xp}
        uniform vec3 uColor;
        varying float vTip;
        varying vec3 vN;
        varying vec3 vView;
        void main() {
          float facing = max(dot(normalize(vN), normalize(vView)), 0.0);
          float a = (0.35 + 0.65 * pow(facing, 2.0)) * (0.75 + vTip * 0.5 + uBeat * 0.25);
          vec3 c = mix(uColor, vec3(1.0), 0.35 + vTip * 0.35);
          gl_FragColor = vec4(c * a, a);
          #include <colorspace_fragment>
        }
      `,uniforms:{...Y,uColor:{value:t}},transparent:!0,depthWrite:!1,blending:2});this.beads=new oo(r,a,n),this.beads.frustumCulled=!1,this.beads.renderOrder=25,this.linePos=new Float32Array(Ev.bones.length*6);let o=new ca;o.setAttribute(`position`,new qi(this.linePos,3).setUsage(bn)),this.lines=new wo(o,new fo({color:t,transparent:!0,opacity:.55,blending:2,depthWrite:!1})),this.lines.frustumCulled=!1,this.lines.renderOrder=24,this.group.add(this.beads,this.lines),this.group.visible=!1}update(){let e=this.hand.joints,t=e.wrist,n=!!t&&t.visible;this.group.visible=n,n&&(Ev.joints.forEach((t,n)=>{let r=e[t];if(!r)return;r.getWorldPosition(this.pts[n]);let i=Math.max(.004,(r.jointRadius??.008)*(t.endsWith(`tip`)?.9:.6));this.p.copy(this.pts[n]),this.s.setScalar(i),this.m.compose(this.p,this.q,this.s),this.beads.setMatrixAt(n,this.m)}),this.beads.instanceMatrix.needsUpdate=!0,Ev.bones.forEach(([e,t],n)=>{this.pts[e].toArray(this.linePos,n*6),this.pts[t].toArray(this.linePos,n*6+3)}),this.lines.geometry.getAttribute(`position`).needsUpdate=!0)}},kv=class{group=new ti;hands;constructor(e){this.hands=[0,1].map(t=>{let n=e.xr.getHand(t),r=new Ov(n,new W(t===0?`#7affc8`:`#5ee0f0`));return this.group.add(n,r.group),r})}update(){for(let e of this.hands)e.update()}};function Av(e){let t=new Map,n=new Map,r=e.clone();return jv(e,r,function(e,r){t.set(r,e),n.set(e,r)}),r.traverse(function(e){if(!e.isSkinnedMesh)return;let r=e,i=t.get(e),a=i.skeleton.bones;r.skeleton=i.skeleton.clone(),r.bindMatrix.copy(i.bindMatrix),r.skeleton.bones=a.map(function(e){return n.get(e)}),r.bind(r.skeleton,r.bindMatrix)}),r}function jv(e,t,n){n(e,t);for(let r=0;r<e.children.length;r++)jv(e.children[r],t.children[r],n)}var Mv=class extends Xc{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new zv(e)}),this.register(function(e){return new Bv(e)}),this.register(function(e){return new Yv(e)}),this.register(function(e){return new Xv(e)}),this.register(function(e){return new Zv(e)}),this.register(function(e){return new Hv(e)}),this.register(function(e){return new Uv(e)}),this.register(function(e){return new Wv(e)}),this.register(function(e){return new Gv(e)}),this.register(function(e){return new Rv(e)}),this.register(function(e){return new Kv(e)}),this.register(function(e){return new Vv(e)}),this.register(function(e){return new Jv(e)}),this.register(function(e){return new qv(e)}),this.register(function(e){return new Iv(e)}),this.register(function(e){return new Qv(e,Fv.EXT_MESHOPT_COMPRESSION)}),this.register(function(e){return new Qv(e,Fv.KHR_MESHOPT_COMPRESSION)}),this.register(function(e){return new $v(e)})}load(e,t,n,r){let i=this,a;if(this.resourcePath!==``)a=this.resourcePath;else if(this.path!==``){let t=Cl.extractUrlBase(e);a=Cl.resolveURL(t,this.path)}else a=Cl.extractUrlBase(e);this.manager.itemStart(e);let o=function(t){r?r(t):console.error(t),i.manager.itemError(e),i.manager.itemEnd(e)},s=new $c(this.manager);s.setPath(this.path),s.setResponseType(`arraybuffer`),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(n){try{i.parse(n,a,function(n){t(n),i.manager.itemEnd(e)},o)}catch(e){o(e)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let i,a={},o={},s=new TextDecoder;if(typeof e==`string`)i=JSON.parse(e);else if(e instanceof ArrayBuffer){if(s.decode(new Uint8Array(e,0,4))===ey){try{a[Fv.KHR_BINARY_GLTF]=new ry(e)}catch(e){r&&r(e);return}i=JSON.parse(a[Fv.KHR_BINARY_GLTF].content)}else i=JSON.parse(s.decode(e))}else i=e;if(i.asset===void 0||i.asset.version[0]<2){r&&r(Error(`THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.`));return}let c=new ky(i,{path:t||this.resourcePath||``,crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let e=0;e<this.pluginCallbacks.length;e++){let t=this.pluginCallbacks[e](c);t.name||console.error(`THREE.GLTFLoader: Invalid plugin found: missing name`),o[t.name]=t,a[t.name]=!0}if(i.extensionsUsed)for(let e=0;e<i.extensionsUsed.length;++e){let t=i.extensionsUsed[e],n=i.extensionsRequired||[];switch(t){case Fv.KHR_MATERIALS_UNLIT:a[t]=new Lv;break;case Fv.KHR_DRACO_MESH_COMPRESSION:a[t]=new iy(i,this.dracoLoader);break;case Fv.KHR_TEXTURE_TRANSFORM:a[t]=new ay;break;case Fv.KHR_MESH_QUANTIZATION:a[t]=new oy;break;default:n.indexOf(t)>=0&&o[t]===void 0&&console.warn(`THREE.GLTFLoader: Unknown extension "`+t+`".`)}}c.setExtensions(a),c.setPlugins(o),c.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,i){n.parse(e,t,r,i)})}};function Nv(){let e={};return{get:function(t){return e[t]},add:function(t,n){e[t]=n},remove:function(t){delete e[t]},removeAll:function(){e={}}}}function Pv(e,t,n){let r=e.json.materials[t];return r.extensions&&r.extensions[n]?r.extensions[n]:null}var Fv={KHR_BINARY_GLTF:`KHR_binary_glTF`,KHR_DRACO_MESH_COMPRESSION:`KHR_draco_mesh_compression`,KHR_LIGHTS_PUNCTUAL:`KHR_lights_punctual`,KHR_MATERIALS_CLEARCOAT:`KHR_materials_clearcoat`,KHR_MATERIALS_DISPERSION:`KHR_materials_dispersion`,KHR_MATERIALS_IOR:`KHR_materials_ior`,KHR_MATERIALS_SHEEN:`KHR_materials_sheen`,KHR_MATERIALS_SPECULAR:`KHR_materials_specular`,KHR_MATERIALS_TRANSMISSION:`KHR_materials_transmission`,KHR_MATERIALS_IRIDESCENCE:`KHR_materials_iridescence`,KHR_MATERIALS_ANISOTROPY:`KHR_materials_anisotropy`,KHR_MATERIALS_UNLIT:`KHR_materials_unlit`,KHR_MATERIALS_VOLUME:`KHR_materials_volume`,KHR_TEXTURE_BASISU:`KHR_texture_basisu`,KHR_TEXTURE_TRANSFORM:`KHR_texture_transform`,KHR_MESH_QUANTIZATION:`KHR_mesh_quantization`,KHR_MATERIALS_EMISSIVE_STRENGTH:`KHR_materials_emissive_strength`,EXT_MATERIALS_BUMP:`EXT_materials_bump`,EXT_TEXTURE_WEBP:`EXT_texture_webp`,EXT_TEXTURE_AVIF:`EXT_texture_avif`,EXT_MESHOPT_COMPRESSION:`EXT_meshopt_compression`,KHR_MESHOPT_COMPRESSION:`KHR_meshopt_compression`,EXT_MESH_GPU_INSTANCING:`EXT_mesh_gpu_instancing`},Iv=class{constructor(e){this.parser=e,this.name=Fv.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n=`light:`+e,r=t.cache.get(n);if(r)return r;let i=t.json,a=((i.extensions&&i.extensions[this.name]||{}).lights||[])[e],o,s=new W(16777215);a.color!==void 0&&s.setRGB(a.color[0],a.color[1],a.color[2],hn);let c=a.range===void 0?0:a.range;switch(a.type){case`directional`:o=new Sl(s),o.target.position.set(0,0,-1),o.add(o.target);break;case`point`:o=new yl(s),o.distance=c;break;case`spot`:o=new _l(s),o.distance=c,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle===void 0?0:a.spot.innerConeAngle,a.spot.outerConeAngle=a.spot.outerConeAngle===void 0?Math.PI/4:a.spot.outerConeAngle,o.angle=a.spot.outerConeAngle,o.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,o.target.position.set(0,0,-1),o.add(o.target);break;default:throw Error(`THREE.GLTFLoader: Unexpected light type: `+a.type)}return o.position.set(0,0,0),xy(o,a),a.intensity!==void 0&&(o.intensity=a.intensity),o.name=t.createUniqueName(a.name||`light_`+e),r=Promise.resolve(o),t.cache.add(n,r),r}getDependency(e,t){if(e===`light`)return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],i=(r.extensions&&r.extensions[this.name]||{}).light;return i===void 0?null:this._loadLight(i).then(function(e){return n._getNodeRef(t.cache,i,e)})}},Lv=class{constructor(){this.name=Fv.KHR_MATERIALS_UNLIT}getMaterialType(){return Ca}extendParams(e,t,n){let r=[];e.color=new W(1,1,1),e.opacity=1;let i=t.pbrMetallicRoughness;if(i){if(Array.isArray(i.baseColorFactor)){let t=i.baseColorFactor;e.color.setRGB(t[0],t[1],t[2],hn),e.opacity=t[3]}i.baseColorTexture!==void 0&&r.push(n.assignTexture(e,`map`,i.baseColorTexture,mn))}return Promise.all(r)}},Rv=class{constructor(e){this.parser=e,this.name=Fv.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Pv(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},zv=class{constructor(e){this.parser=e,this.name=Fv.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Pv(this.parser,e,this.name)===null?null:yc}extendMaterialParams(e,t){let n=Pv(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,`clearcoatMap`,n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,`clearcoatRoughnessMap`,n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,`clearcoatNormalMap`,n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let e=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new B(e,e)}return Promise.all(r)}},Bv=class{constructor(e){this.parser=e,this.name=Fv.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Pv(this.parser,e,this.name)===null?null:yc}extendMaterialParams(e,t){let n=Pv(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion===void 0?0:n.dispersion),Promise.resolve()}},Vv=class{constructor(e){this.parser=e,this.name=Fv.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Pv(this.parser,e,this.name)===null?null:yc}extendMaterialParams(e,t){let n=Pv(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,`iridescenceMap`,n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,`iridescenceThicknessMap`,n.iridescenceThicknessTexture)),Promise.all(r)}},Hv=class{constructor(e){this.parser=e,this.name=Fv.KHR_MATERIALS_SHEEN}getMaterialType(e){return Pv(this.parser,e,this.name)===null?null:yc}extendMaterialParams(e,t){let n=Pv(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(t.sheenColor=new W(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let e=n.sheenColorFactor;t.sheenColor.setRGB(e[0],e[1],e[2],hn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,`sheenColorMap`,n.sheenColorTexture,mn)),n.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,`sheenRoughnessMap`,n.sheenRoughnessTexture)),Promise.all(r)}},Uv=class{constructor(e){this.parser=e,this.name=Fv.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Pv(this.parser,e,this.name)===null?null:yc}extendMaterialParams(e,t){let n=Pv(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,`transmissionMap`,n.transmissionTexture)),Promise.all(r)}},Wv=class{constructor(e){this.parser=e,this.name=Fv.KHR_MATERIALS_VOLUME}getMaterialType(e){return Pv(this.parser,e,this.name)===null?null:yc}extendMaterialParams(e,t){let n=Pv(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.thickness=n.thicknessFactor===void 0?0:n.thicknessFactor,n.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,`thicknessMap`,n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let i=n.attenuationColor||[1,1,1];return t.attenuationColor=new W().setRGB(i[0],i[1],i[2],hn),Promise.all(r)}},Gv=class{constructor(e){this.parser=e,this.name=Fv.KHR_MATERIALS_IOR}getMaterialType(e){return Pv(this.parser,e,this.name)===null?null:yc}extendMaterialParams(e,t){let n=Pv(this.parser,e,this.name);return n===null||(t.ior=n.ior===void 0?1.5:n.ior,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Kv=class{constructor(e){this.parser=e,this.name=Fv.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Pv(this.parser,e,this.name)===null?null:yc}extendMaterialParams(e,t){let n=Pv(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.specularIntensity=n.specularFactor===void 0?1:n.specularFactor,n.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,`specularIntensityMap`,n.specularTexture));let i=n.specularColorFactor||[1,1,1];return t.specularColor=new W().setRGB(i[0],i[1],i[2],hn),n.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,`specularColorMap`,n.specularColorTexture,mn)),Promise.all(r)}},qv=class{constructor(e){this.parser=e,this.name=Fv.EXT_MATERIALS_BUMP}getMaterialType(e){return Pv(this.parser,e,this.name)===null?null:yc}extendMaterialParams(e,t){let n=Pv(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return t.bumpScale=n.bumpFactor===void 0?1:n.bumpFactor,n.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,`bumpMap`,n.bumpTexture)),Promise.all(r)}},Jv=class{constructor(e){this.parser=e,this.name=Fv.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Pv(this.parser,e,this.name)===null?null:yc}extendMaterialParams(e,t){let n=Pv(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,`anisotropyMap`,n.anisotropyTexture)),Promise.all(r)}},Yv=class{constructor(e){this.parser=e,this.name=Fv.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let i=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures`);return null}return t.loadTextureImage(e,i.source,a)}},Xv=class{constructor(e){this.parser=e,this.name=Fv.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return n.loadTextureImage(e,a.source,s)}},Zv=class{constructor(e){this.parser=e,this.name=Fv.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return n.loadTextureImage(e,a.source,s)}},Qv=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let e=n.extensions[this.name],r=this.parser.getDependency(`buffer`,e.buffer),i=this.parser.options.meshoptDecoder;if(!i||!i.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files`);return null}return r.then(function(t){let n=e.byteOffset||0,r=e.byteLength||0,a=e.count,o=e.byteStride,s=new Uint8Array(t,n,r);return i.decodeGltfBufferAsync?i.decodeGltfBufferAsync(a,o,s,e.mode,e.filter).then(function(e){return e.buffer}):i.ready.then(function(){let t=new ArrayBuffer(a*o);return i.decodeGltfBuffer(new Uint8Array(t),a,o,s,e.mode,e.filter),t})})}return null}},$v=class{constructor(e){this.name=Fv.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let e of r.primitives)if(e.mode!==uy.TRIANGLES&&e.mode!==uy.TRIANGLE_STRIP&&e.mode!==uy.TRIANGLE_FAN&&e.mode!==void 0)return null;let i=n.extensions[this.name].attributes,a=[],o={};for(let e in i)a.push(this.parser.getDependency(`accessor`,i[e]).then(t=>(o[e]=t,o[e])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(e=>{let t=e.pop(),n=t.isGroup?t.children:[t],r=e[0].count,i=[];for(let e of n){let t=new U,n=new V,a=new ar,s=new V(1,1,1),c=new oo(e.geometry,e.material,r);for(let e=0;e<r;e++)o.TRANSLATION&&n.fromBufferAttribute(o.TRANSLATION,e),o.ROTATION&&a.fromBufferAttribute(o.ROTATION,e),o.SCALE&&s.fromBufferAttribute(o.SCALE,e),c.setMatrixAt(e,t.compose(n,a,s));let l=null;for(let e in o)if(e===`_COLOR_0`){let t=o[e];c.instanceColor=new Qa(t.array,t.itemSize,t.normalized)}else if(e!==`TRANSLATION`&&e!==`ROTATION`&&e!==`SCALE`){if(l===null){let e=c.geometry;l=new ca,l.name=e.name;for(let t in e.attributes)l.setAttribute(t,e.attributes[t]);for(let t in e.morphAttributes)l.morphAttributes[t]=e.morphAttributes[t];e.index!==null&&l.setIndex(e.index),l.morphTargetsRelative=e.morphTargetsRelative;for(let t of e.groups)l.addGroup(t.start,t.count,t.materialIndex);e.boundingBox!==null&&(l.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(l.boundingSphere=e.boundingSphere.clone()),l.drawRange.start=e.drawRange.start,l.drawRange.count=e.drawRange.count,l.userData=Object.assign({},e.userData),c.geometry=l}let t=o[e];l.setAttribute(e,new Qa(t.array,t.itemSize,t.normalized))}ei.prototype.copy.call(c,e),this.parser.assignFinalMaterial(c),i.push(c)}return t.isGroup?(t.clear(),t.add(...i),t):i[0]}))}},ey=`glTF`,ty=12,ny={JSON:1313821514,BIN:5130562},ry=class{constructor(e){this.name=Fv.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ty),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ey)throw Error(`THREE.GLTFLoader: Unsupported glTF-Binary header.`);if(this.header.version<2)throw Error(`THREE.GLTFLoader: Legacy binary file detected.`);let r=this.header.length-ty,i=new DataView(e,ty),a=0;for(;a<r;){let t=i.getUint32(a,!0);a+=4;let r=i.getUint32(a,!0);if(a+=4,r===ny.JSON){let r=new Uint8Array(e,ty+a,t);this.content=n.decode(r)}else if(r===ny.BIN){let n=ty+a;this.body=e.slice(n,n+t)}a+=t}if(this.content===null)throw Error(`THREE.GLTFLoader: JSON content not found.`)}},iy=class{constructor(e,t){if(!t)throw Error(`THREE.GLTFLoader: No DRACOLoader instance provided.`);this.name=Fv.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,i=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},s={},c={};for(let e in a){let t=hy[e]||e.toLowerCase();o[t]=a[e]}for(let t in e.attributes){let r=hy[t]||t.toLowerCase();if(a[t]!==void 0){let i=n.accessors[e.attributes[t]];c[r]=dy[i.componentType].name,s[r]=i.normalized===!0}}return t.getDependency(`bufferView`,i).then(function(e){return new Promise(function(t,n){r.decodeDracoFile(e,function(e){for(let t in e.attributes){let n=e.attributes[t],r=s[t];r!==void 0&&(n.normalized=r)}t(e)},o,c,hn,n)})})}},ay=class{constructor(){this.name=Fv.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let t=Math.cos(e.rotation),n=Math.sin(e.rotation);e.matrix.set(e.repeat.x*t,e.repeat.y*n,e.offset.x,-e.repeat.x*n,e.repeat.y*t,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},oy=class{constructor(){this.name=Fv.KHR_MESH_QUANTIZATION}},sy=class extends Dc{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r*3+r;for(let e=0;e!==r;e++)t[e]=n[i+e];return t}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=o*2,c=o*3,l=r-t,u=(n-t)/l,d=u*u,f=d*u,p=e*c,m=p-c,h=-2*f+3*d,g=f-d,_=1-h,v=g-d+u;for(let e=0;e!==o;e++){let t=a[m+e+o],n=a[m+e+s]*l,r=a[p+e+o],c=a[p+e]*l;i[e]=_*t+v*n+h*r+g*c}return i}},cy=new ar,ly=class extends sy{interpolate_(e,t,n,r){let i=super.interpolate_(e,t,n,r);return cy.fromArray(i).normalize().toArray(i),i}},uy={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},dy={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},fy={9728:qe,9729:Xe,9984:Je,9985:Ze,9986:Ye,9987:Qe},py={33071:Ge,33648:Ke,10497:We},my={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},hy={POSITION:`position`,NORMAL:`normal`,TANGENT:`tangent`,TEXCOORD_0:`uv`,TEXCOORD_1:`uv1`,TEXCOORD_2:`uv2`,TEXCOORD_3:`uv3`,COLOR_0:`color`,WEIGHTS_0:`skinWeight`,JOINTS_0:`skinIndex`},gy={scale:`scale`,translation:`position`,rotation:`quaternion`,weights:`morphTargetInfluences`},_y={CUBICSPLINE:void 0,LINEAR:on,STEP:an},vy={OPAQUE:`OPAQUE`,MASK:`MASK`,BLEND:`BLEND`};function yy(e){return e.DefaultMaterial===void 0&&(e.DefaultMaterial=new vc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),e.DefaultMaterial}function by(e,t,n){for(let r in n.extensions)e[r]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[r]=n.extensions[r])}function xy(e,t){t.extras!==void 0&&(typeof t.extras==`object`?Object.assign(e.userData,t.extras):console.warn(`THREE.GLTFLoader: Ignoring primitive type .extras, `+t.extras))}function Sy(e,t,n){let r=!1,i=!1,a=!1;for(let e=0,n=t.length;e<n;e++){let n=t[e];if(n.POSITION!==void 0&&(r=!0),n.NORMAL!==void 0&&(i=!0),n.COLOR_0!==void 0&&(a=!0),r&&i&&a)break}if(!r&&!i&&!a)return Promise.resolve(e);let o=[],s=[],c=[];for(let l=0,u=t.length;l<u;l++){let u=t[l];if(r){let t=u.POSITION===void 0?e.attributes.position:n.getDependency(`accessor`,u.POSITION);o.push(t)}if(i){let t=u.NORMAL===void 0?e.attributes.normal:n.getDependency(`accessor`,u.NORMAL);s.push(t)}if(a){let t=u.COLOR_0===void 0?e.attributes.color:n.getDependency(`accessor`,u.COLOR_0);c.push(t)}}return Promise.all([Promise.all(o),Promise.all(s),Promise.all(c)]).then(function(t){let n=t[0],o=t[1],s=t[2];return r&&(e.morphAttributes.position=n),i&&(e.morphAttributes.normal=o),a&&(e.morphAttributes.color=s),e.morphTargetsRelative=!0,e})}function Cy(e,t){if(e.updateMorphTargets(),t.weights!==void 0)for(let n=0,r=t.weights.length;n<r;n++)e.morphTargetInfluences[n]=t.weights[n];if(t.extras&&Array.isArray(t.extras.targetNames)){let n=t.extras.targetNames;if(e.morphTargetInfluences.length===n.length){e.morphTargetDictionary={};for(let t=0,r=n.length;t<r;t++)e.morphTargetDictionary[n[t]]=t}else console.warn(`THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.`)}}function wy(e){let t,n=e.extensions&&e.extensions[Fv.KHR_DRACO_MESH_COMPRESSION];if(t=n?`draco:`+n.bufferView+`:`+n.indices+`:`+Ty(n.attributes):e.indices+`:`+Ty(e.attributes)+`:`+e.mode,e.targets!==void 0)for(let n=0,r=e.targets.length;n<r;n++)t+=`:`+Ty(e.targets[n]);return t}function Ty(e){let t=``,n=Object.keys(e).sort();for(let r=0,i=n.length;r<i;r++)t+=n[r]+`:`+e[n[r]]+`;`;return t}function Ey(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw Error(`THREE.GLTFLoader: Unsupported normalized accessor component type.`)}}function Dy(e){return e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0?`image/jpeg`:e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0?`image/webp`:e.search(/\.ktx2($|\?)/i)>0||e.search(/^data\:image\/ktx2/)===0?`image/ktx2`:`image/png`}var Oy=new U,ky=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Nv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,i=!1,a=-1;if(typeof navigator<`u`&&navigator.userAgent!==void 0){let e=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(e)===!0;let t=e.match(/Version\/(\d+)/);r=n&&t?parseInt(t[1],10):-1,i=e.indexOf(`Firefox`)>-1,a=i?e.match(/Firefox\/([0-9]+)\./)[1]:-1}this.textureLoader=typeof createImageBitmap>`u`||n&&r<17||i&&a<98?new nl(this.options.manager):new El(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new $c(this.options.manager),this.fileLoader.setResponseType(`arraybuffer`),this.options.crossOrigin===`use-credentials`&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,i=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(e){return e._markDefs&&e._markDefs()}),Promise.all(this._invokeAll(function(e){return e.beforeRoot&&e.beforeRoot()})).then(function(){return Promise.all([n.getDependencies(`scene`),n.getDependencies(`animation`),n.getDependencies(`camera`)])}).then(function(t){let a={scene:t[0][r.scene||0],scenes:t[0],animations:t[1],cameras:t[2],asset:r.asset,parser:n,userData:{}};return by(i,a,r),xy(a,r),Promise.all(n._invokeAll(function(e){return e.afterRoot&&e.afterRoot(a)})).then(function(){for(let e of a.scenes)e.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n].joints;for(let t=0,n=r.length;t<n;t++)e[r[t]].isBone=!0}for(let t=0,r=e.length;t<r;t++){let r=e[t];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),i=(e,t)=>{let n=this.associations.get(e);n!=null&&this.associations.set(t,n);for(let[n,r]of e.children.entries())i(r,t.children[n])};return i(n,r),r.name+=`_instance_`+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let i=e(t[r]);i&&n.push(i)}return n}getDependency(e,t){let n=e+`:`+t,r=this.cache.get(n);if(!r){switch(e){case`scene`:r=this.loadScene(t);break;case`node`:r=this._invokeOne(function(e){return e.loadNode&&e.loadNode(t)});break;case`mesh`:r=this._invokeOne(function(e){return e.loadMesh&&e.loadMesh(t)});break;case`accessor`:r=this.loadAccessor(t);break;case`bufferView`:r=this._invokeOne(function(e){return e.loadBufferView&&e.loadBufferView(t)});break;case`buffer`:r=this.loadBuffer(t);break;case`material`:r=this._invokeOne(function(e){return e.loadMaterial&&e.loadMaterial(t)});break;case`texture`:r=this._invokeOne(function(e){return e.loadTexture&&e.loadTexture(t)});break;case`skin`:r=this.loadSkin(t);break;case`animation`:r=this._invokeOne(function(e){return e.loadAnimation&&e.loadAnimation(t)});break;case`camera`:r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(n){return n!=this&&n.getDependency&&n.getDependency(e,t)}),!r)throw Error(`Unknown type: `+e)}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e===`mesh`?`es`:`s`)]||[];t=Promise.all(r.map(function(t,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!==`arraybuffer`)throw Error(`THREE.GLTFLoader: `+t.type+` buffer type is not supported.`);if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Fv.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(e,i){n.load(Cl.resolveURL(t.uri,r.path),e,void 0,function(){i(Error(`THREE.GLTFLoader: Failed to load buffer "`+t.uri+`".`))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency(`buffer`,t.buffer).then(function(e){let n=t.byteLength||0,r=t.byteOffset||0;return e.slice(r,r+n)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let e=my[r.type],t=dy[r.componentType],n=r.normalized===!0,i=new t(r.count*e);return Promise.resolve(new qi(i,e,n))}let i=[];return r.bufferView===void 0?i.push(null):i.push(this.getDependency(`bufferView`,r.bufferView)),r.sparse!==void 0&&(i.push(this.getDependency(`bufferView`,r.sparse.indices.bufferView)),i.push(this.getDependency(`bufferView`,r.sparse.values.bufferView))),Promise.all(i).then(function(e){let i=e[0],a=my[r.type],o=dy[r.componentType],s=o.BYTES_PER_ELEMENT,c=s*a,l=r.byteOffset||0,u=r.bufferView===void 0?void 0:n.bufferViews[r.bufferView].byteStride,d=r.normalized===!0,f,p;if(u&&u!==c){let e=Math.floor(l/u),n=`InterleavedBuffer:`+r.bufferView+`:`+r.componentType+`:`+e+`:`+r.count,c=t.cache.get(n);c||(f=new o(i,e*u,r.count*u/s),c=new la(f,u/s),t.cache.add(n,c)),p=new da(c,a,l%u/s,d)}else f=i===null?new o(r.count*a):new o(i,l,r.count*a),p=new qi(f,a,d);if(r.sparse!==void 0){let t=my.SCALAR,n=dy[r.sparse.indices.componentType],s=r.sparse.indices.byteOffset||0,c=r.sparse.values.byteOffset||0,l=new n(e[1],s,r.sparse.count*t),u=new o(e[2],c,r.sparse.count*a);i!==null&&(p=new qi(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let e=0,t=l.length;e<t;e++){let t=l[e];if(p.setX(t,u[e*a]),a>=2&&p.setY(t,u[e*a+1]),a>=3&&p.setZ(t,u[e*a+2]),a>=4&&p.setW(t,u[e*a+3]),a>=5)throw Error(`THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.`)}p.normalized=d}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,i=t.images[r],a=this.textureLoader;if(i.uri){let e=n.manager.getHandler(i.uri);e!==null&&(a=e)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let r=this,i=this.json,a=i.textures[e],o=i.images[t],s=(o.uri||o.bufferView)+`:`+a.sampler;if(this.textureCache[s])return this.textureCache[s];let c=this.loadImageSource(t,n).then(function(t){t.flipY=!1,t.name=a.name||o.name||``,t.name===``&&typeof o.uri==`string`&&o.uri.startsWith(`data:image/`)===!1&&(t.name=o.uri);let n=(i.samplers||{})[a.sampler]||{};return t.magFilter=fy[n.magFilter]||1006,t.minFilter=fy[n.minFilter]||1008,t.wrapS=py[n.wrapS]||1e3,t.wrapT=py[n.wrapT]||1e3,t.generateMipmaps=!t.isCompressedTexture&&t.minFilter!==1003&&t.minFilter!==1006,r.associations.set(t,{textures:e}),t}).catch(function(){return null});return this.textureCache[s]=c,c}loadImageSource(e,t){let n=this,r=this.json,i=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(e=>e.clone());let a=r.images[e],o=self.URL||self.webkitURL,s=a.uri||``,c=!1;if(a.bufferView!==void 0)s=n.getDependency(`bufferView`,a.bufferView).then(function(e){c=!0;let t=new Blob([e],{type:a.mimeType});return s=o.createObjectURL(t),s});else if(a.uri===void 0)throw Error(`THREE.GLTFLoader: Image `+e+` is missing URI and bufferView`);let l=Promise.resolve(s).then(function(e){return new Promise(function(n,r){let a=n;t.isImageBitmapLoader===!0&&(a=function(e){let t=new Sr(e);t.needsUpdate=!0,n(t)}),t.load(Cl.resolveURL(e,i.path),a,void 0,r)})}).then(function(e){return c===!0&&o.revokeObjectURL(s),xy(e,a),e.userData.mimeType=a.mimeType||Dy(a.uri),e}).catch(function(e){throw console.error(`THREE.GLTFLoader: Couldn't load texture`,s),e});return this.sourceCache[e]=l,l}assignTexture(e,t,n,r){let i=this;return this.getDependency(`texture`,n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),i.extensions[Fv.KHR_TEXTURE_TRANSFORM]){let e=n.extensions===void 0?void 0:n.extensions[Fv.KHR_TEXTURE_TRANSFORM];if(e){let t=i.associations.get(a);a=i.extensions[Fv.KHR_TEXTURE_TRANSFORM].extendTexture(a,e),i.associations.set(a,t)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,i=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let e=`PointsMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new Eo,_a.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,t.sizeAttenuation=!1,this.cache.add(e,t)),n=t}else if(e.isLine){let e=`LineBasicMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new fo,_a.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,this.cache.add(e,t)),n=t}if(r||i||a){let e=`ClonedMaterial:`+n.uuid+`:`;r&&(e+=`derivative-tangents:`),i&&(e+=`vertex-colors:`),a&&(e+=`flat-shading:`);let t=this.cache.get(e);t||(t=n.clone(),i&&(t.vertexColors=!0),a&&(t.flatShading=!0),r&&(t.normalScale&&(t.normalScale.y*=-1),t.clearcoatNormalScale&&(t.clearcoatNormalScale.y*=-1)),this.cache.add(e,t),this.associations.set(t,this.associations.get(n))),n=t}e.material=n}getMaterialType(){return vc}loadMaterial(e){let t=this,n=this.json,r=this.extensions,i=n.materials[e],a,o={},s=i.extensions||{},c=[];if(s[Fv.KHR_MATERIALS_UNLIT]){let e=r[Fv.KHR_MATERIALS_UNLIT];a=e.getMaterialType(),c.push(e.extendParams(o,i,t))}else{let n=i.pbrMetallicRoughness||{};if(o.color=new W(1,1,1),o.opacity=1,Array.isArray(n.baseColorFactor)){let e=n.baseColorFactor;o.color.setRGB(e[0],e[1],e[2],hn),o.opacity=e[3]}n.baseColorTexture!==void 0&&c.push(t.assignTexture(o,`map`,n.baseColorTexture,mn)),o.metalness=n.metallicFactor===void 0?1:n.metallicFactor,o.roughness=n.roughnessFactor===void 0?1:n.roughnessFactor,n.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,`metalnessMap`,n.metallicRoughnessTexture)),c.push(t.assignTexture(o,`roughnessMap`,n.metallicRoughnessTexture))),a=this._invokeOne(function(t){return t.getMaterialType&&t.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(t){return t.extendMaterialParams&&t.extendMaterialParams(e,o)})))}i.doubleSided===!0&&(o.side=2);let l=i.alphaMode||vy.OPAQUE;if(l===vy.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,l===vy.MASK&&(o.alphaTest=i.alphaCutoff===void 0?.5:i.alphaCutoff)),i.normalTexture!==void 0&&a!==Ca&&(c.push(t.assignTexture(o,`normalMap`,i.normalTexture)),o.normalScale=new B(1,1),i.normalTexture.scale!==void 0)){let e=i.normalTexture.scale;o.normalScale.set(e,e)}if(i.occlusionTexture!==void 0&&a!==Ca&&(c.push(t.assignTexture(o,`aoMap`,i.occlusionTexture)),i.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=i.occlusionTexture.strength)),i.emissiveFactor!==void 0&&a!==Ca){let e=i.emissiveFactor;o.emissive=new W().setRGB(e[0],e[1],e[2],hn)}return i.emissiveTexture!==void 0&&a!==Ca&&c.push(t.assignTexture(o,`emissiveMap`,i.emissiveTexture,mn)),Promise.all(c).then(function(){let n=new a(o);return i.name&&(n.name=i.name),xy(n,i),t.associations.set(n,{materials:e}),i.extensions&&by(r,n,i),n})}createUniqueName(e){let t=Hl.sanitizeNodeName(e||``);return t in this.nodeNamesUsed?t+`_`+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function i(e){return n[Fv.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e,t).then(function(n){return jy(n,e,t)})}let a=[];for(let n=0,o=e.length;n<o;n++){let o=e[n],s=wy(o),c=r[s];if(c)a.push(c.promise);else{let e;e=o.extensions&&o.extensions[Fv.KHR_DRACO_MESH_COMPRESSION]?i(o):jy(new ca,o,t),o.mode===uy.TRIANGLE_STRIP?e=e.then(e=>Jp(e,1)):o.mode===uy.TRIANGLE_FAN&&(e=e.then(e=>Jp(e,2))),r[s]={primitive:o,promise:e},a.push(e)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,r=this.extensions,i=n.meshes[e],a=i.primitives,o=[];for(let e=0,t=a.length;e<t;e++){let t=a[e].material===void 0?yy(this.cache):this.getDependency(`material`,a[e].material);o.push(t)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(n){let o=n.slice(0,n.length-1),s=n[n.length-1],c=[];for(let n=0,l=s.length;n<l;n++){let l=s[n],u=a[n],d,f=o[n];if(u.mode===uy.TRIANGLES||u.mode===uy.TRIANGLE_STRIP||u.mode===uy.TRIANGLE_FAN||u.mode===void 0){let e=i.isSkinnedMesh===!0,t=l.hasAttribute(`skinIndex`)&&l.hasAttribute(`skinWeight`);e&&t===!1&&console.warn(`THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled.`),d=e&&t?new Ka(l,f):new G(l,f),d.isSkinnedMesh===!0&&d.normalizeSkinWeights()}else if(u.mode===uy.LINES)d=new wo(l,f);else if(u.mode===uy.LINE_STRIP)d=new bo(l,f);else if(u.mode===uy.LINE_LOOP)d=new To(l,f);else if(u.mode===uy.POINTS)d=new jo(l,f);else throw Error(`THREE.GLTFLoader: Primitive mode unsupported: `+u.mode);Object.keys(d.geometry.morphAttributes).length>0&&Cy(d,i),d.name=t.createUniqueName(i.name||`mesh_`+e),xy(d,i),u.extensions&&by(r,d,u),t.assignFinalMaterial(d),c.push(d)}for(let n=0,r=c.length;n<r;n++)t.associations.set(c[n],{meshes:e,primitives:n});if(c.length===1)return i.extensions&&by(r,c[0],i),c[0];let l=new ti;i.extensions&&by(r,l,i),t.associations.set(l,{meshes:e});for(let e=0,t=c.length;e<t;e++)l.add(c[e]);return l})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r)console.warn(`THREE.GLTFLoader: Missing camera parameters.`);else return n.type===`perspective`?t=new hl(ir.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type===`orthographic`&&(t=new bl(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),xy(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let e=0,r=t.joints.length;e<r;e++)n.push(this._loadNodeShallow(t.joints[e]));return t.inverseBindMatrices===void 0?n.push(null):n.push(this.getDependency(`accessor`,t.inverseBindMatrices)),Promise.all(n).then(function(e){let n=e.pop(),r=e,i=[],a=[];for(let e=0,o=r.length;e<o;e++){let o=r[e];if(o){i.push(o);let t=new U;n!==null&&t.fromArray(n.array,e*16),a.push(t)}else console.warn(`THREE.GLTFLoader: Joint "%s" could not be found.`,t.joints[e])}return new Za(i,a)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],i=r.name?r.name:`animation_`+e,a=[],o=[],s=[],c=[],l=[];for(let e=0,t=r.channels.length;e<t;e++){let t=r.channels[e],n=r.samplers[t.sampler],i=t.target,u=i.node,d=r.parameters===void 0?n.input:r.parameters[n.input],f=r.parameters===void 0?n.output:r.parameters[n.output];i.node!==void 0&&(a.push(this.getDependency(`node`,u)),o.push(this.getDependency(`accessor`,d)),s.push(this.getDependency(`accessor`,f)),c.push(n),l.push(i))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(s),Promise.all(c),Promise.all(l)]).then(function(e){let t=e[0],a=e[1],o=e[2],s=e[3],c=e[4],l=[];for(let e=0,r=t.length;e<r;e++){let r=t[e],i=a[e],u=o[e],d=s[e],f=c[e];if(r===void 0)continue;r.updateMatrix&&r.updateMatrix();let p=n._createAnimationTracks(r,i,u,d,f);if(p)for(let e=0;e<p.length;e++)l.push(p[e])}let u=new Wc(i,void 0,l);return xy(u,r),u})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency(`mesh`,r.mesh).then(function(e){let t=n._getNodeRef(n.meshCache,r.mesh,e);return r.weights!==void 0&&t.traverse(function(e){if(e.isMesh)for(let t=0,n=r.weights.length;t<n;t++)e.morphTargetInfluences[t]=r.weights[t]}),t})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],i=n._loadNodeShallow(e),a=[],o=r.children||[];for(let e=0,t=o.length;e<t;e++)a.push(n.getDependency(`node`,o[e]));let s=r.skin===void 0?Promise.resolve(null):n.getDependency(`skin`,r.skin);return Promise.all([i,Promise.all(a),s]).then(function(e){let t=e[0],n=e[1],r=e[2];r!==null&&t.traverse(function(e){e.isSkinnedMesh&&e.bind(r,Oy)});for(let e=0,r=n.length;e<r;e++)t.add(n[e]);if(t.userData.pivot!==void 0&&n.length>0){let e=t.userData.pivot,r=n[0];t.pivot=new V().fromArray(e),t.position.x-=e[0],t.position.y-=e[1],t.position.z-=e[2],r.position.set(0,0,0),delete t.userData.pivot}return t})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let i=t.nodes[e],a=i.name?r.createUniqueName(i.name):``,o=[],s=r._invokeOne(function(t){return t.createNodeMesh&&t.createNodeMesh(e)});return s&&o.push(s),i.camera!==void 0&&o.push(r.getDependency(`camera`,i.camera).then(function(e){return r._getNodeRef(r.cameraCache,i.camera,e)})),r._invokeAll(function(t){return t.createNodeAttachment&&t.createNodeAttachment(e)}).forEach(function(e){o.push(e)}),this.nodeCache[e]=Promise.all(o).then(function(t){let o;if(o=i.isBone===!0?new qa:t.length>1?new ti:t.length===1?t[0]:new ei,o!==t[0])for(let e=0,n=t.length;e<n;e++)o.add(t[e]);if(i.name&&(o.userData.name=i.name,o.name=a),xy(o,i),i.extensions&&by(n,o,i),i.matrix!==void 0){let e=new U;e.fromArray(i.matrix),o.applyMatrix4(e)}else i.translation!==void 0&&o.position.fromArray(i.translation),i.rotation!==void 0&&o.quaternion.fromArray(i.rotation),i.scale!==void 0&&o.scale.fromArray(i.scale);if(!r.associations.has(o))r.associations.set(o,{});else if(i.mesh!==void 0&&r.meshCache.refs[i.mesh]>1){let e=r.associations.get(o);r.associations.set(o,{...e})}return r.associations.get(o).nodes=e,o}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,i=new ti;n.name&&(i.name=r.createUniqueName(n.name)),xy(i,n),n.extensions&&by(t,i,n);let a=n.nodes||[],o=[];for(let e=0,t=a.length;e<t;e++)o.push(r.getDependency(`node`,a[e]));return Promise.all(o).then(function(e){for(let t=0,n=e.length;t<n;t++){let n=e[t];n.parent===null?i.add(n):i.add(Av(n))}return r.associations=(e=>{let t=new Map;for(let[e,n]of r.associations)(e instanceof _a||e instanceof Sr)&&t.set(e,n);return e.traverse(e=>{let n=r.associations.get(e);n!=null&&t.set(e,n)}),t})(i),i})}_createAnimationTracks(e,t,n,r,i){let a=[],o=e.name?e.name:e.uuid,s=[];function c(e){e.morphTargetInfluences&&s.push(e.name?e.name:e.uuid)}gy[i.path]===gy.weights?(c(e),e.isGroup&&e.children.forEach(c)):s.push(o);let l;switch(gy[i.path]){case gy.weights:l=zc;break;case gy.rotation:l=Vc;break;case gy.translation:case gy.scale:l=Uc;break;default:switch(n.itemSize){case 1:l=zc;break;default:l=Uc}}let u=r.interpolation===void 0?on:_y[r.interpolation],d=this._getArrayFromAccessor(n);for(let e=0,n=s.length;e<n;e++){let n=new l(s[e]+`.`+gy[i.path],t.array,d,u);r.interpolation===`CUBICSPLINE`&&this._createCubicSplineTrackInterpolant(n),a.push(n)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let e=Ey(t.constructor),n=new Float32Array(t.length);for(let r=0,i=t.length;r<i;r++)n[r]=t[r]*e;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(e){return new(this instanceof Vc?ly:sy)(this.times,this.values,this.getValueSize()/3,e)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Ay(e,t,n){let r=t.attributes,i=new wi;if(r.POSITION!==void 0){let e=n.json.accessors[r.POSITION],t=e.min,a=e.max;if(t!==void 0&&a!==void 0){if(i.set(new V(t[0],t[1],t[2]),new V(a[0],a[1],a[2])),e.normalized){let t=Ey(dy[e.componentType]);i.min.multiplyScalar(t),i.max.multiplyScalar(t)}}else{console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`);return}}else return;let a=t.targets;if(a!==void 0){let e=new V,t=new V;for(let r=0,i=a.length;r<i;r++){let i=a[r];if(i.POSITION!==void 0){let r=n.json.accessors[i.POSITION],a=r.min,o=r.max;if(a!==void 0&&o!==void 0){if(t.setX(Math.max(Math.abs(a[0]),Math.abs(o[0]))),t.setY(Math.max(Math.abs(a[1]),Math.abs(o[1]))),t.setZ(Math.max(Math.abs(a[2]),Math.abs(o[2]))),r.normalized){let e=Ey(dy[r.componentType]);t.multiplyScalar(e)}e.max(t)}else console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`)}}i.expandByVector(e)}e.boundingBox=i;let o=new ea;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,e.boundingSphere=o}function jy(e,t,n){let r=t.attributes,i=[];function a(t,r){return n.getDependency(`accessor`,t).then(function(t){e.setAttribute(r,t)})}for(let t in r){let n=hy[t]||t.toLowerCase();n in e.attributes||i.push(a(r[t],n))}if(t.indices!==void 0&&!e.index){let r=n.getDependency(`accessor`,t.indices).then(function(t){e.setIndex(t)});i.push(r)}return fr.workingColorSpace!==`srgb-linear`&&`COLOR_0`in r&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${fr.workingColorSpace}" not supported.`),xy(e,t),Ay(e,t,n),Promise.all(i).then(function(){return t.targets===void 0?e:Sy(e,t.targets,n)})}var My={Handedness:Object.freeze({NONE:`none`,LEFT:`left`,RIGHT:`right`}),ComponentState:Object.freeze({DEFAULT:`default`,TOUCHED:`touched`,PRESSED:`pressed`}),ComponentProperty:Object.freeze({BUTTON:`button`,X_AXIS:`xAxis`,Y_AXIS:`yAxis`,STATE:`state`}),ComponentType:Object.freeze({TRIGGER:`trigger`,SQUEEZE:`squeeze`,TOUCHPAD:`touchpad`,THUMBSTICK:`thumbstick`,BUTTON:`button`}),ButtonTouchThreshold:.05,AxisTouchThreshold:.1,VisualResponseProperty:Object.freeze({TRANSFORM:`transform`,VISIBILITY:`visibility`})};async function Ny(e){let t=await fetch(e);if(t.ok)return t.json();throw Error(t.statusText)}async function Py(e){if(!e)throw Error(`No basePath supplied`);return await Ny(`${e}/profilesList.json`)}async function Fy(e,t,n=null,r=!0){if(!e)throw Error(`No xrInputSource supplied`);if(!t)throw Error(`No basePath supplied`);let i=await Py(t),a;if(e.profiles.some(e=>{let n=i[e];return n&&(a={profileId:e,profilePath:`${t}/${n.path}`,deprecated:!!n.deprecated}),!!a}),!a){if(!n)throw Error(`No matching profile name found`);let e=i[n];if(!e)throw Error(`No matching profile name found and default profile "${n}" missing.`);a={profileId:n,profilePath:`${t}/${e.path}`,deprecated:!!e.deprecated}}let o=await Ny(a.profilePath),s;if(r){let t;if(t=e.handedness===`any`?o.layouts[Object.keys(o.layouts)[0]]:o.layouts[e.handedness],!t)throw Error(`No matching handedness, ${e.handedness}, in profile ${a.profileId}`);t.assetPath&&(s=a.profilePath.replace(`profile.json`,t.assetPath))}return{profile:o,assetPath:s}}var Iy={xAxis:0,yAxis:0,button:0,state:My.ComponentState.DEFAULT};function Ly(e=0,t=0){let n=e,r=t;if(Math.sqrt(e*e+t*t)>1){let i=Math.atan2(t,e);n=Math.cos(i),r=Math.sin(i)}return{normalizedXAxis:n*.5+.5,normalizedYAxis:r*.5+.5}}var Ry=class{constructor(e){this.componentProperty=e.componentProperty,this.states=e.states,this.valueNodeName=e.valueNodeName,this.valueNodeProperty=e.valueNodeProperty,this.valueNodeProperty===My.VisualResponseProperty.TRANSFORM&&(this.minNodeName=e.minNodeName,this.maxNodeName=e.maxNodeName),this.value=0,this.updateFromComponent(Iy)}updateFromComponent({xAxis:e,yAxis:t,button:n,state:r}){let{normalizedXAxis:i,normalizedYAxis:a}=Ly(e,t);switch(this.componentProperty){case My.ComponentProperty.X_AXIS:this.value=this.states.includes(r)?i:.5;break;case My.ComponentProperty.Y_AXIS:this.value=this.states.includes(r)?a:.5;break;case My.ComponentProperty.BUTTON:this.value=this.states.includes(r)?n:0;break;case My.ComponentProperty.STATE:this.value=this.valueNodeProperty===My.VisualResponseProperty.VISIBILITY?this.states.includes(r):+!!this.states.includes(r);break;default:throw Error(`Unexpected visualResponse componentProperty ${this.componentProperty}`)}}},zy=class{constructor(e,t){if(!e||!t||!t.visualResponses||!t.gamepadIndices||Object.keys(t.gamepadIndices).length===0)throw Error(`Invalid arguments supplied`);this.id=e,this.type=t.type,this.rootNodeName=t.rootNodeName,this.touchPointNodeName=t.touchPointNodeName,this.visualResponses={},Object.keys(t.visualResponses).forEach(e=>{let n=new Ry(t.visualResponses[e]);this.visualResponses[e]=n}),this.gamepadIndices=Object.assign({},t.gamepadIndices),this.values={state:My.ComponentState.DEFAULT,button:this.gamepadIndices.button===void 0?void 0:0,xAxis:this.gamepadIndices.xAxis===void 0?void 0:0,yAxis:this.gamepadIndices.yAxis===void 0?void 0:0}}get data(){return{id:this.id,...this.values}}updateFromGamepad(e){if(this.values.state=My.ComponentState.DEFAULT,this.gamepadIndices.button!==void 0&&e.buttons.length>this.gamepadIndices.button){let t=e.buttons[this.gamepadIndices.button];this.values.button=t.value,this.values.button=this.values.button<0?0:this.values.button,this.values.button=this.values.button>1?1:this.values.button,t.pressed||this.values.button===1?this.values.state=My.ComponentState.PRESSED:(t.touched||this.values.button>My.ButtonTouchThreshold)&&(this.values.state=My.ComponentState.TOUCHED)}this.gamepadIndices.xAxis!==void 0&&e.axes.length>this.gamepadIndices.xAxis&&(this.values.xAxis=e.axes[this.gamepadIndices.xAxis],this.values.xAxis=this.values.xAxis<-1?-1:this.values.xAxis,this.values.xAxis=this.values.xAxis>1?1:this.values.xAxis,this.values.state===My.ComponentState.DEFAULT&&Math.abs(this.values.xAxis)>My.AxisTouchThreshold&&(this.values.state=My.ComponentState.TOUCHED)),this.gamepadIndices.yAxis!==void 0&&e.axes.length>this.gamepadIndices.yAxis&&(this.values.yAxis=e.axes[this.gamepadIndices.yAxis],this.values.yAxis=this.values.yAxis<-1?-1:this.values.yAxis,this.values.yAxis=this.values.yAxis>1?1:this.values.yAxis,this.values.state===My.ComponentState.DEFAULT&&Math.abs(this.values.yAxis)>My.AxisTouchThreshold&&(this.values.state=My.ComponentState.TOUCHED)),Object.values(this.visualResponses).forEach(e=>{e.updateFromComponent(this.values)})}},By=class{constructor(e,t,n){if(!e)throw Error(`No xrInputSource supplied`);if(!t)throw Error(`No profile supplied`);this.xrInputSource=e,this.assetUrl=n,this.id=t.profileId,this.layoutDescription=t.layouts[e.handedness],this.components={},Object.keys(this.layoutDescription.components).forEach(e=>{let t=this.layoutDescription.components[e];this.components[e]=new zy(e,t)}),this.updateFromGamepad()}get gripSpace(){return this.xrInputSource.gripSpace}get targetRaySpace(){return this.xrInputSource.targetRaySpace}get data(){let e=[];return Object.values(this.components).forEach(t=>{e.push(t.data)}),e}updateFromGamepad(){Object.values(this.components).forEach(e=>{e.updateFromGamepad(this.xrInputSource.gamepad)})}},Vy=`https://cdn.jsdelivr.net/npm/@webxr-input-profiles/assets@1.0/dist/profiles`,Hy=`generic-trigger`,Uy=class extends ei{constructor(){super(),this.motionController=null,this.envMap=null}setEnvironmentMap(e){return this.envMap==e||(this.envMap=e,this.traverse(e=>{e.isMesh&&(e.material.envMap=this.envMap,e.material.needsUpdate=!0)})),this}updateMatrixWorld(e){super.updateMatrixWorld(e),this.motionController&&(this.motionController.updateFromGamepad(),Object.values(this.motionController.components).forEach(e=>{Object.values(e.visualResponses).forEach(e=>{let{valueNode:t,minNode:n,maxNode:r,value:i,valueNodeProperty:a}=e;t&&(a===My.VisualResponseProperty.VISIBILITY?t.visible=i:a===My.VisualResponseProperty.TRANSFORM&&(t.quaternion.slerpQuaternions(n.quaternion,r.quaternion,i),t.position.lerpVectors(n.position,r.position,i)))})}))}};function Wy(e,t){Object.values(e.components).forEach(e=>{let{type:n,touchPointNodeName:r,visualResponses:i}=e;if(n===My.ComponentType.TOUCHPAD){if(e.touchPointNode=t.getObjectByName(r),e.touchPointNode){let t=new G(new cc(.001),new Ca({color:255}));e.touchPointNode.add(t)}else console.warn(`Could not find touch dot, ${e.touchPointNodeName}, in touchpad component ${e.id}`)}Object.values(i).forEach(e=>{let{valueNodeName:n,minNodeName:r,maxNodeName:i,valueNodeProperty:a}=e;if(a===My.VisualResponseProperty.TRANSFORM){if(e.minNode=t.getObjectByName(r),e.maxNode=t.getObjectByName(i),!e.minNode){console.warn(`Could not find ${r} in the model`);return}if(!e.maxNode){console.warn(`Could not find ${i} in the model`);return}}e.valueNode=t.getObjectByName(n),e.valueNode||console.warn(`Could not find ${n} in the model`)})})}function Gy(e,t){Wy(e.motionController,t),e.envMap&&t.traverse(t=>{t.isMesh&&(t.material.envMap=e.envMap,t.material.needsUpdate=!0)}),e.add(t)}var Ky=class{constructor(e=null,t=null){this.gltfLoader=e,this.path=Vy,this._assetCache={},this.onLoad=t,this.gltfLoader||=new Mv}setPath(e){return this.path=e,this}createControllerModel(e){let t=new Uy,n=null,r=0;return e.addEventListener(`connected`,e=>{let i=e.data;if(i.targetRayMode!==`tracked-pointer`||!i.gamepad||i.hand)return;let a=++r;Fy(i,this.path,Hy).then(({profile:e,assetPath:o})=>{if(a!==r)return;t.motionController=new By(i,e,o);let s=t.motionController.assetUrl,c=this._assetCache[s];if(c)n=c.scene.clone(),Gy(t,n),this.onLoad&&this.onLoad(n);else{if(!this.gltfLoader)throw Error(`THREE.XRControllerModelFactory: GLTFLoader not set.`);this.gltfLoader.setPath(``),this.gltfLoader.load(s,e=>{this._assetCache[s]=e,a===r&&(n=e.scene.clone(),Gy(t,n),this.onLoad&&this.onLoad(n))},null,()=>{throw Error(`THREE.XRControllerModelFactory: Asset ${s} missing or malformed.`)})}}).catch(e=>{console.warn(e)})}),e.addEventListener(`disconnected`,()=>{r++,t.motionController=null,t.remove(n),n=null}),t}},qy=class{renderer;camera;rays=[];raycaster=new Wl;targets=[];mouse=new B;mouseActive=!1;tmpMat=new U;pointing=!1;lastHand=`right`;handEvents=[];constructor(e,t,n){this.renderer=e,this.camera=n;let r=new Ky;for(let n=0;n<2;n++){let i=e.xr.getController(n),a=new bo(new ca().setFromPoints([new V(0,0,0),new V(0,0,-1)]),new fo({color:14207231,transparent:!0,opacity:.7}));a.visible=!1,i.add(a);let o=new G(new cc(.008,12,8),new Ca({color:16777215}));o.visible=!1,t.add(o);let s={controller:i,line:a,dot:o,hand:null,source:null};i.addEventListener(`connected`,e=>{let t=e.data;s.source=t,s.hand=t.handedness===`left`?`left`:`right`}),i.addEventListener(`disconnected`,()=>{s.source=null,s.hand=null}),i.addEventListener(`selectstart`,()=>{s.hand&&(this.lastHand=s.hand),s.source?.hand&&s.hand&&this.handEvents.push({hand:s.hand,control:`trigger`,down:!0}),this.select(s)}),i.addEventListener(`selectend`,()=>{s.source?.hand&&s.hand&&this.handEvents.push({hand:s.hand,control:`trigger`,down:!1})}),t.add(i),this.rays.push(s);let c=e.xr.getControllerGrip(n);c.add(r.createControllerModel(c)),t.add(c)}let i=e.domElement;i.addEventListener(`pointermove`,e=>{let t=i.getBoundingClientRect();this.mouse.set((e.clientX-t.left)/t.width*2-1,-((e.clientY-t.top)/t.height)*2+1),this.mouseActive=!0}),i.addEventListener(`pointerleave`,()=>this.mouseActive=!1),i.addEventListener(`click`,()=>{if(this.renderer.xr.isPresenting)return;let e=this.hitFromMouse();e&&this.click(e.target,e.id)})}setTargets(e){this.targets=e}mouseOverUi(){return!!this.hitFromMouse()}aim(){if(!this.renderer.xr.isPresenting)return this.mouseActive?(this.raycaster.setFromCamera(this.mouse,this.camera),this.raycaster.ray.clone()):null;let e=this.rays.filter(e=>e.source?.targetRayMode===`tracked-pointer`),t=e.find(e=>e.hand===this.lastHand)??e[0];return t?(t.controller.updateMatrixWorld(),this.tmpMat.identity().extractRotation(t.controller.matrixWorld),new Sa(new V().setFromMatrixPosition(t.controller.matrixWorld),new V(0,0,-1).applyMatrix4(this.tmpMat))):null}takeHandEvents(){let e=this.handEvents;return this.handEvents=[],e}handsOnly(){let e=this.renderer.xr.getSession();if(!e)return!1;let t=!1;for(let n of e.inputSources)if(n.hand)t=!0;else if(n.gamepad)return!1;return t}pads(){let e=this.renderer.xr.getSession();if(!e)return[];let t=[];for(let n of e.inputSources){let e=n.gamepad;!e||n.hand||n.handedness!==`left`&&n.handedness!==`right`||t.push({hand:n.handedness,pressed:e.buttons.map(e=>e.pressed),axes:[...e.axes]})}return t}haptics(e){if(!e.length||!se.get().haptics)return;let t=this.renderer.xr.getSession();if(t)for(let n of e){let e=()=>{for(let e of t.inputSources){if(n.hand!==`both`&&e.handedness!==n.hand)continue;let t=e.gamepad;try{let e=t?.hapticActuators?.[0];e?e.pulse(n.intensity,n.ms):t?.vibrationActuator?.playEffect(`dual-rumble`,{duration:n.ms,strongMagnitude:n.intensity,weakMagnitude:n.intensity})}catch{}}};n.delay?setTimeout(e,n.delay):e()}}update(){if(!this.renderer.xr.isPresenting){this.hover(this.mouseActive&&this.pointing?this.hitFromMouse():null);return}let e=null;for(let t of this.rays){let n=this.pointing&&!!t.source&&t.source.targetRayMode===`tracked-pointer`;if(t.line.visible=n,t.dot.visible=!1,!n)continue;let r=this.hitFromObject(t.controller);t.line.scale.z=r?r.distance:2.5,r&&(t.dot.position.copy(r.point),t.dot.visible=!0,(!e||t.hand===this.lastHand)&&(e={hit:r,hand:t.hand}))}this.hover(e?.hit??null)}lastHover=null;hover(e){let t=e?.target.panel??null,n=e?.id??null;this.lastHover&&(this.lastHover.panel!==t||this.lastHover.id!==n)&&this.lastHover.panel.hover===this.lastHover.id&&(this.lastHover.panel.hover=null,this.lastHover.panel.onHover?.()),t&&t.hover!==n&&(t.hover=n,t.onHover?.()),this.lastHover=t?{panel:t,id:n}:null}select(e){if(!this.pointing)return;let t=this.hitFromObject(e.controller);t&&(this.click(t.target,t.id),this.haptics([{hand:e.hand??`right`,intensity:.25,ms:12}]))}click(e,t){e.onClick(t)}hitFromObject(e){return this.tmpMat.identity().extractRotation(e.matrixWorld),this.raycaster.ray.origin.setFromMatrixPosition(e.matrixWorld),this.raycaster.ray.direction.set(0,0,-1).applyMatrix4(this.tmpMat),this.cast()}hitFromMouse(){return this.pointing?(this.raycaster.setFromCamera(this.mouse,this.camera),this.cast()):null}cast(){let e=this.targets.filter(e=>e.panel.mesh.visible).map(e=>e.panel.mesh);if(!e.length)return null;let t=this.raycaster.intersectObjects(e,!1);for(let e of t){let t=this.targets.find(t=>t.panel.mesh===e.object);if(!t||!e.uv)continue;let n=t.panel.hitAt(e.uv);return n&&!n.disabled?{target:t,id:n.id,point:e.point,distance:e.distance}:null}return null}},Jy=1.6,Yy=class{renderer;scene=new li;camera;world;bursts=new Pp;shock=new Fp;stage=new ti;input;hands;handHint=new Bm(.7,.16,1e3);handHintShown=!1;mapper=new Sv;activity=null;makeHome;last=0;slowT=1;revealTarget=1;recenterIn=0;session=null;kind=null;headPos=new V(0,1.6,0);look={yaw:0,pitch:-.05,dragging:!1,x:0,y:0};frames=[];xrFrames=0;onSessionEnd=null;constructor(e,t,n){this.renderer=new fp({antialias:!0,alpha:!0,powerPreference:`high-performance`}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.setClearColor(328714,1),this.renderer.xr.enabled=!0,this.renderer.xr.setReferenceSpaceType(`local-floor`),this.renderer.xr.setFramebufferScaleFactor(1),e.appendChild(this.renderer.domElement),this.camera=new hl(70,e.clientWidth/e.clientHeight,.05,400),this.camera.position.set(0,1.6,0),this.scene.add(this.camera),this.world=new yv(t),this.scene.add(this.world.root,this.stage,this.bursts.points,this.shock.group),this.input=new qy(this.renderer,this.scene,this.camera),this.hands=new kv(this.renderer),this.scene.add(this.hands.group),this.handHint.draw((e,t,n)=>{e.fillStyle=`rgba(12, 8, 26, 0.85)`,e.beginPath(),e.roundRect(4,4,t-8,n-8,40),e.fill(),Q(e,`Pick up your controllers to play`,t/2,n*.47,46,{align:`center`,display:!0,weight:600}),Q(e,`Pinch works for menus and Gridline`,t/2,n*.8,30,{align:`center`,color:`#b9b0d6`})}),this.handHint.mesh.position.set(0,.42,.3),this.handHint.mesh.renderOrder=50,this.handHint.mesh.visible=!1,this.stage.add(this.handHint.mesh),window.addEventListener(`resize`,()=>{this.renderer.xr.isPresenting||(this.camera.aspect=e.clientWidth/e.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(e.clientWidth,e.clientHeight))}),this.bindDesktopLook(),document.addEventListener(`visibilitychange`,()=>{this.renderer.xr.isPresenting||(document.hidden?(this.activity?.autoPause(),N.suspend()):N.unlock())}),Jh.subscribe(()=>this.recenter()),this.makeHome=()=>n(this),this.recenter(),this.setActivity(this.makeHome()),this.renderer.setAnimationLoop(e=>this.frame(e))}get roomMode(){return this.kind===`ar`}setActivity(e){this.activity?.destroy(),this.mapper.releaseAll(),this.activity=e,this.stage.add(e.root)}exit(){this.setActivity(this.makeHome())}aim(){return this.input.aim()}play(e){this.setActivity(e(this))}head(){return this.headPos}fx(){return se.get().effects}haptics(e){this.input.haptics(e)}flare(e){this.fx()!==`off`&&(Y.uFlare.value=Math.min(1.2,Math.max(Y.uFlare.value,e*(this.fx()===`full`?1:.5))))}slowmo(){Jh.get().slowmo&&this.fx()===`full`&&(this.slowT=0)}reveal(e){this.revealTarget=this.roomMode?+!!e:1}recenter(){let e=this.viewCamera();e.updateMatrixWorld();let t=new V().setFromMatrixPosition(e.matrixWorld),n=new V(0,0,-1).applyQuaternion(new ar().setFromRotationMatrix(e.matrixWorld));n.y=0,n.lengthSq()<1e-4&&n.set(0,0,-1),n.normalize();let r=Math.atan2(-n.x,-n.z),i=Jh.get();this.stage.position.copy(t).addScaledVector(n,i.distance),this.stage.position.y=Math.max(.6,t.y+i.height),this.stage.rotation.set(0,r,0),this.world.root.position.set(t.x,0,t.z),this.world.root.rotation.set(0,r,0),Y.uRevealDir.value.copy(n)}async enter(e){if(!navigator.xr||this.session)return;N.unlock();let t=e===`ar`?`immersive-ar`:`immersive-vr`,n=[{requiredFeatures:[`local-floor`],optionalFeatures:[`hand-tracking`]},{optionalFeatures:[`local-floor`,`hand-tracking`]},{}],r=null,i=null;for(let e of n)try{r=await navigator.xr.requestSession(t,e);break}catch(n){if(i=n,console.warn(`[vr] ${t} with ${JSON.stringify(e)} failed:`,n.message),n.name!==`NotSupportedError`)break}if(!r)throw i;await this.adopt(r,e)}async adopt(e,t){if(this.session)return;N.unlock();let n=t===`ar`?`immersive-ar`:`immersive-vr`,r=e.enabledFeatures,i=!r||r.includes(`local-floor`);if(this.renderer.xr.setReferenceSpaceType(i?`local-floor`:`local`),this.kind=t,this.session=e,this.renderer.setClearColor(0,t===`ar`?0:1),Y.uReveal.value=t===`ar`?0:1,this.revealTarget=Y.uReveal.value,e.addEventListener(`visibilitychange`,()=>{e.visibilityState!==`visible`&&(this.activity?.autoPause(),this.activity?.pad(this.mapper.releaseAll()))}),e.addEventListener(`end`,()=>{this.session=null,this.kind=null,this.renderer.setClearColor(328714,1),Y.uReveal.value=1,this.revealTarget=1,this.activity?.autoPause(),this.camera.position.set(0,1.6,0),this.recenter(),this.onSessionEnd?.()}),await this.renderer.xr.setSession(e),!i){let e=this.renderer.xr.getReferenceSpace();e&&this.renderer.xr.setReferenceSpace(e.getOffsetReferenceSpace(new XRRigidTransform({x:0,y:-1.6,z:0})))}console.info(`[vr] ${n} started (${i?`floor`:`standing height assumed`})`),this.renderer.xr.setFoveation(.6),this.recenterIn=6}viewCamera(){return this.camera}frame(e){let t=this.last?Math.min(.1,(e-this.last)/1e3):1/72;this.last=e,this.renderer.xr.isPresenting&&this.xrFrames++,this.frames.push(t),this.frames.length>120&&this.frames.shift(),this.renderer.xr.isPresenting||this.applyDesktopLook(),this.viewCamera().getWorldPosition(this.headPos),Y.uHead.value.copy(this.headPos),this.recenterIn>0&&--this.recenterIn===0&&this.recenter();let n=1;this.slowT<1&&(this.slowT=Math.min(1,this.slowT+t/Jy),n=.15+.85*this.slowT**2.2);let r=t*n;Y.uTime.value+=t,Y.uFxTime.value+=r;let i=N.music?.beat()??null,a=i===null?0:Math.exp(-(i%1)*5),o=this.fx(),s=o===`off`?0:a*(o===`full`?1:.5);Y.uBeat.value+=(s-Y.uBeat.value)*Math.min(1,t*30),Y.uFlare.value*=Math.exp(-t*2.2),Y.uReveal.value+=Math.sign(this.revealTarget-Y.uReveal.value)*Math.min(Math.abs(this.revealTarget-Y.uReveal.value),t/2.8),this.updatePointScale();let c=this.activity;if(c){this.renderer.xr.isPresenting&&c.pad([...this.mapper.update(this.input.pads()),...this.input.takeHandEvents()]);let e=this.renderer.xr.isPresenting&&this.input.handsOnly()&&!!c.needsControllers?.();e&&!this.handHintShown&&c.autoPause(),this.handHintShown=e,this.handHint.mesh.visible=e,this.input.pointing=c.pointing(),this.input.setTargets(c.targets())}this.input.update(),this.hands.update(),this.world.update(r),this.bursts.update(r),this.shock.update(r),c?.update(t,performance.now()),this.renderer.render(this.scene,this.camera)}updatePointScale(){if(this.renderer.xr.isPresenting){let e=this.renderer.xr.getCamera().cameras[0],t=e.viewport;e&&t&&(Ep.value=e.projectionMatrix.elements[5]*t.w*.5)}else{let e=this.renderer.getDrawingBufferSize(new B);Ep.value=this.camera.projectionMatrix.elements[5]*e.y*.5}}bindDesktopLook(){let e=this.renderer.domElement;e.addEventListener(`pointerdown`,t=>{this.renderer.xr.isPresenting||this.input.mouseOverUi()||(this.activity?.capturesMouse?.()?this.activity.mouse?.(!0):(this.look.dragging=!0,this.look.x=t.clientX,this.look.y=t.clientY,e.setPointerCapture(t.pointerId)))}),e.addEventListener(`pointermove`,e=>{this.look.dragging&&(this.look.yaw-=(e.clientX-this.look.x)*.004,this.look.pitch=Math.max(-1.2,Math.min(1.2,this.look.pitch-(e.clientY-this.look.y)*.004)),this.look.x=e.clientX,this.look.y=e.clientY)}),e.addEventListener(`pointerup`,()=>{this.look.dragging=!1,this.renderer.xr.isPresenting||this.activity?.mouse?.(!1)})}applyDesktopLook(){this.camera.position.set(0,1.6,0),this.camera.rotation.set(this.look.pitch,this.look.yaw,0,`YXZ`)}frameStats(){let e=this.frames.reduce((e,t)=>e+t,0)/Math.max(1,this.frames.length);return{fps:Math.round(1/e),worstMs:Math.round(Math.max(...this.frames)*1e3)}}debugState(){return{presenting:this.renderer.xr.isPresenting,session:this.kind,world:this.world.id,sparks:this.bursts.count,reveal:Y.uReveal.value,...this.frameStats(),activity:this.activity?.debugState?.()??null}}debugTools(){return{...this.activity?.debugTools?.()??{},look:(e,t=0)=>{this.look.yaw=e,this.look.pitch=t},world:e=>this.world.set(e,!0),stage:e=>this.stage.visible=e,screenAt:e=>{let t=new V(...e).project(this.camera),n=this.renderer.domElement.getBoundingClientRect();return{x:n.left+(t.x+1)/2*n.width,y:n.top+(1-t.y)/2*n.height}},screenOf:e=>{this.scene.updateMatrixWorld();for(let t of this.activity?.targets()??[]){let n=t.panel.hits.find(t=>t.id===e);if(!n||!t.panel.mesh.visible)continue;let{width:r,height:i}=t.panel.mesh.geometry.parameters,a=new V(((n.x+n.w/2)/t.panel.width-.5)*r,(.5-(n.y+n.h/2)/t.panel.height)*i,0),o=t.panel.mesh.localToWorld(a).project(this.camera),s=this.renderer.domElement.getBoundingClientRect();return{x:s.left+(o.x+1)/2*s.width,y:s.top+(1-o.y)/2*s.height}}return null},slowmo:()=>this.slowmo(),bench:(e=12)=>{let t=this.renderer.getContext(),n={},r=this.world.id??`lobby`;for(let r of[`lobby`,`dusk`,`tide`,`aurora`,`ember`,`cosmos`]){this.world.set(r,!1),this.renderer.render(this.scene,this.camera),t.finish();let i=performance.now();for(let t=0;t<e;t++)Y.uTime.value+=.016,this.renderer.render(this.scene,this.camera);t.finish(),n[r]=+((performance.now()-i)/e).toFixed(2)}this.world.set(r,!1),this.shock.fire(this.headPos,new W(`#ffffff`),5,.2),this.bursts.spawn({at:this.headPos.clone().add(new V(0,0,-2)),color:new W(`#ffffff`),count:10,dir:new V(0,1,0),spread:1,speed:[.1,.2],life:[.1,.2],size:[.01,.02]}),this.renderer.render(this.scene,this.camera);let i=this.renderer.getDrawingBufferSize(new B);return{msPerFrame:n,size:`${i.x}x${i.y}`,programs:this.renderer.info.programs?.length??0}},play:e=>{let t=gv[e];return t&&this.play(t),this.renderer.render(this.scene,this.camera),!!t},reveal:e=>{this.revealTarget=e,Y.uReveal.value=e},flare:e=>this.flare(e)}}},Xy={stacks:`#c38bff`,gridline:`#5ee0f0`,pulse:`#ff8fb1`,twenty48:`#ffd166`,orbs:`#7ee08a`,slither:`#6b9bff`},Zy=.44,Qy=.6,$y=1.7,eb=`
  uniform vec3 uColor;
  uniform float uA;
  varying vec2 vUv;
  void main() {
    vec2 p = abs(vUv - 0.5) * 2.0;
    float box = max(p.x * 1.0, p.y);
    float a = uA * (1.0 - smoothstep(0.55, 1.0, box)) * smoothstep(0.2, 0.7, box);
    gl_FragColor = vec4(uColor * a, a);
    #include <colorspace_fragment>
  }
`,tb=class{host;root=new ti;doors=[];title=new Bm(1.2,.28,900);menu=A_();settingsBtn=new Bm(.36,.09,1100);leaving=null;t=0;constructor(e){this.host=e,e.world.set(`lobby`,!0),e.reveal(!1),N.setMusicWanted(!0),N.music?.setMuffled(!1);let t=Jh.get(),n=new V(0,-t.height,t.distance),r=[`orbs`,`gridline`,`stacks`,`pulse`,`twenty48`,`slither`],i=e=>r.includes(e)?r.indexOf(e):r.length,a=[...je].sort((e,t)=>i(e.id)-i(t.id)).map(e=>({id:e.id,title:e.title,tagline:e.tagline,game:e})),o=a.findIndex(e=>e.id===`stacks`);a.forEach((e,t)=>{let r=(t-o)*.3,i=new ti;i.position.set(n.x+Math.sin(r)*$y,n.y+.02,n.z-Math.cos(r)*$y),i.lookAt(n.x,i.position.y,n.z);let a=Xy[e.id]??`#c38bff`,s=new G(new ic(Zy*1.6,Qy*1.45),new K({vertexShader:`varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:eb,uniforms:{uColor:{value:new W(a)},uA:{value:.4}},transparent:!0,depthWrite:!1,blending:2}));s.position.z=-.02,i.add(s);let c=new Bm(Zy,Qy,1e3);i.add(c.mesh);let l=document.createElement(`canvas`);l.style.cssText=`position:absolute;left:-9999px;width:360px;height:220px`,document.body.appendChild(l),e.game.preview(l),l.remove();let u={id:e.id,title:e.title,tagline:e.tagline,playable:!!gv[e.id],accent:a,panel:c,glow:s,group:i,preview:l,lift:0};c.onHover=()=>this.drawDoor(u),this.drawDoor(u),this.root.add(i),this.doors.push(u)}),this.title.mesh.position.set(n.x,n.y+.62,n.z-$y-.1),this.title.mesh.lookAt(n),this.root.add(this.title.mesh),this.drawTitle(),this.settingsBtn.mesh.position.set(n.x,n.y-.52,n.z-$y+.1),this.settingsBtn.mesh.lookAt(n),this.settingsBtn.onHover=()=>this.drawSettingsBtn(),this.root.add(this.settingsBtn.mesh),this.drawSettingsBtn(),this.menu.mesh.position.set(0,0,.1),this.menu.mesh.visible=!1,this.menu.onHover=()=>R_(this.menu),this.root.add(this.menu.mesh)}drawTitle(){let e=i();this.title.draw((t,n,r)=>{t.save(),t.shadowColor=`#c38bff`,t.shadowBlur=30,Q(t,`Lunchbreak`,n/2,r*.52,120,{align:`center`,display:!0,weight:700}),t.restore(),Q(t,e.days>0?`${e.days}-day streak${e.playedToday?``:` — play a challenge to keep it`}`:`Point at a game and pull the trigger`,n/2,r*.86,38,{align:`center`,color:M.muted,weight:600})})}drawSettingsBtn(){this.settingsBtn.draw((e,t,n)=>{Um(this.settingsBtn,`settings`,`Settings`,4,4,t-8,n-8)})}drawDoor(e){let t=e.panel.hover===`door:${e.id}`;e.panel.draw((n,r,i)=>{Wm(n,r,i,e.accent,t?.92:.8);let a=r-80,o=a*(e.preview.height/e.preview.width);Hm(n,40,50,a,o,24),n.save(),n.clip(),n.fillStyle=`rgba(0,0,0,0.25)`,n.fillRect(40,50,a,o),n.globalAlpha=e.playable?1:.45,n.drawImage(e.preview,40,50,a,o),n.restore(),Q(n,e.title,r/2,50+o+82,62,{align:`center`,display:!0,weight:700,color:e.playable?M.text:`#8a82a6`});let s=e.tagline.split(` `),c=Math.ceil(s.length/2);Q(n,s.slice(0,c).join(` `),r/2,50+o+132,27,{align:`center`,color:M.muted,weight:500,maxWidth:r-60}),Q(n,s.slice(c).join(` `),r/2,50+o+166,27,{align:`center`,color:M.muted,weight:500,maxWidth:r-60});let l=e.playable?`Play`:`Coming to VR`,u=e.playable?200:260;Hm(n,(r-u)/2,i-110,u,66,33),n.fillStyle=e.playable?t?`#ffffff`:Gm(e.accent,.9):`rgba(255,255,255,0.08)`,n.fill(),Q(n,l,r/2,i-66,30,{align:`center`,weight:700,color:e.playable?`#1a1030`:`#8a82a6`})}),e.panel.addHit({id:`door:${e.id}`,x:0,y:0,w:e.panel.width,h:e.panel.height,disabled:!e.playable})}targets(){return this.menu.mesh.visible?[{panel:this.menu,onClick:e=>this.menuClick(e)}]:[...this.doors.map(e=>({panel:e.panel,onClick:()=>this.enter(e)})),{panel:this.settingsBtn,onClick:()=>this.openSettings()}]}pointing(){return!this.leaving}pad(e){}autoPause(){}openSettings(){N.unlock(),this.menu.mesh.visible=!0,R_(this.menu);for(let e of this.doors)e.group.visible=!1}menuClick(e){if(N.tone({freq:N.chordTone(4,1),dur:.08,gain:.12,type:`triangle`}),z_(e))R_(this.menu);else if(e===`back`){this.menu.mesh.visible=!1;for(let e of this.doors)e.group.visible=!0}}enter(e){e.playable&&!this.leaving&&(N.unlock(),N.whoosh(!0),this.host.flare(.9),this.host.haptics([{hand:`both`,intensity:.5,ms:40}]),this.leaving={id:e.id,at:performance.now()+450})}update(e,t){this.t+=e;for(let[t,n]of this.doors.entries()){let r=n.panel.hover===`door:${n.id}`&&n.playable?1:0;n.lift+=(r-n.lift)*(1-Math.exp(-e*10)),n.panel.mesh.position.y=Math.sin(this.t*.8+t)*.008+n.lift*.02,n.panel.mesh.position.z=n.lift*.04,n.glow.material.uniforms.uA.value=(n.playable?.35:.12)+n.lift*.5+Y.uBeat.value*.08,this.leaving?.id===n.id&&(n.glow.material.uniforms.uA.value=1.4)}if(this.leaving&&t>=this.leaving.at){let e=gv[this.leaving.id];this.leaving=null,e&&this.host.play(e)}}destroy(){this.root.removeFromParent()}debugState(){return{game:`lobby`,phase:this.menu.mesh.visible?`settings`:`lobby`,doors:this.doors.map(e=>({id:e.id,playable:e.playable})),menu:this.menu.mesh.visible,buttons:this.targets().flatMap(e=>e.panel.hits.filter(e=>!e.disabled).map(e=>e.id))}}debugTools(){return{enter:e=>{let t=this.doors.find(t=>t.id===e);t&&this.enter(t)}}}},nb=document.getElementById(`vr`);nb.insertAdjacentHTML(`beforeend`,`
  <div class="vr-entry">
    <div class="vr-card">
      <h1>Lunchbreak VR</h1>
      <p>The arcade, all around you.</p>
      <div class="vr-actions">
        <button type="button" class="vr-btn primary" data-enter="vr">Enter VR</button>
        <button type="button" class="vr-btn" data-enter="ar" hidden>Play in your room<small>Starts in passthrough; the world grows around you</small></button>
        <button type="button" class="vr-btn" data-preview>Preview on this screen</button>
      </div>
      <p class="vr-note" data-note></p>
      <p class="vr-note"><a href="./">Back to the arcade</a></p>
    </div>
  </div>
  <button type="button" class="vr-back" data-back hidden>Menu</button>`);var rb=nb.querySelector(`.vr-entry`),ib=nb.querySelector(`[data-back]`),ab=nb.querySelector(`[data-note]`),ob=nb.querySelector(`[data-enter="vr"]`),sb=nb.querySelector(`[data-enter="ar"]`),cb=new URLSearchParams(location.search).has(`app`)&&navigator.xr?navigator.xr.requestSession(`immersive-vr`,{optionalFeatures:[`local-floor`,`hand-tracking`]}):null;cb?.catch(e=>console.warn(`[vr] app launch session failed`,e));async function lb(){await Promise.all([document.fonts.load(`700 40px ${Pe}`),document.fonts.load(`600 40px ${xe}`)]).catch(()=>void 0),Yh();let e=new Yy(nb,Em,e=>new tb(e));nb.insertBefore(e.renderer.domElement,nb.firstChild),e.onSessionEnd=()=>rb.hidden=!1;let t=navigator.xr,[n,r]=t?await Promise.all([t.isSessionSupported(`immersive-vr`).catch(()=>!1),t.isSessionSupported(`immersive-ar`).catch(()=>!1)]):[!1,!1];ob.disabled=!n,sb.hidden=!r,n||(ab.textContent=`Open this page in the Quest browser to play in VR.`);let i=async t=>{try{rb.hidden=!0,ib.hidden=!0,await e.enter(t)}catch(e){rb.hidden=!1,ab.textContent=`Couldn't start ${t===`ar`?`room mode`:`VR`}: ${e.message}`,console.error(`[vr] enter failed`,t,e)}};if(ob.addEventListener(`click`,()=>void i(`vr`)),sb.addEventListener(`click`,()=>void i(`ar`)),nb.querySelector(`[data-preview]`).addEventListener(`click`,()=>{rb.hidden=!0,ib.hidden=!1}),ib.addEventListener(`click`,()=>{rb.hidden=!1,ib.hidden=!0}),cb){rb.hidden=!0;let t=async(n,r)=>{await e.adopt(n,`vr`);let i=e.xrFrames;if(await new Promise(e=>setTimeout(e,4e3)),e.xrFrames>i||r===0)return;console.warn(`[vr] no frames from the headset; restarting the session`),await n.end().catch(()=>void 0),rb.hidden=!0;let a=await navigator.xr.requestSession(`immersive-vr`,{optionalFeatures:[`local-floor`,`hand-tracking`]});await t(a,r-1)};cb.then(e=>t(e,2)).catch(()=>{rb.hidden=!1})}else{let r=t?.offerSession;n&&r&&r.call(t,`immersive-vr`,{optionalFeatures:[`local-floor`,`hand-tracking`]}).then(t=>(rb.hidden=!0,ib.hidden=!0,e.adopt(t,`vr`))).catch(()=>void 0)}`serviceWorker`in navigator&&navigator.serviceWorker.register(`./sw.js`).catch(()=>void 0);let a=window;a.__vr=()=>e.debugState(),new URLSearchParams(location.search).has(`debug`)&&(a.__vrDebug=new Proxy({},{get:(t,n)=>e.debugTools()[n]}),a.__vrEnter=e=>i(e))}lb();