// meta={"simUrl":"https://trg-arcade.userpxt.io/v2.0.59/---simulator","cdnUrl":"https://cdn.makecode.com","version":"0.1.0","target":"arcade","targetVersion":"2.0.59","repo":"killercraft-thecoder/random-testing"}
// total=3365 new=34.53% cached=0.00% other=65.47%
(function (ectx) {
'use strict';
const runtime = ectx.runtime;
const oops = ectx.oops;
const doNothing = ectx.doNothing;
const pxsim = ectx.pxsim;
const globals = ectx.globals;
const maybeYield = ectx.maybeYield;
const setupDebugger = ectx.setupDebugger;
const isBreakFrame = ectx.isBreakFrame;
const breakpoint = ectx.breakpoint;
const trace = ectx.trace;
const checkStack = ectx.checkStack;
const leave = ectx.leave;
const checkResumeConsumed = ectx.checkResumeConsumed;
const setupResume = ectx.setupResume;
const setupLambda = ectx.setupLambda;
const checkSubtype = ectx.checkSubtype;
const failedCast = ectx.failedCast;
const buildResume = ectx.buildResume;
const mkVTable = ectx.mkVTable;
const bind = ectx.bind;
const leaveAccessor = ectx.leaveAccessor;
const __this = runtime;
const pxtrt = pxsim.pxtrt;
let yieldSteps = 1;
ectx.setupYield(function() { yieldSteps = 100; })
pxsim.setTitle("core-modifed");
pxsim.setConfigData({}, {});
pxtrt.mapKeyNames = [
 ""
];
__this.setupPerfCounters([]);
const pxsim_Array__getAt = pxsim.Array_.getAt;
const pxsim_Array__length = pxsim.Array_.length;
const pxsim_Array__mk = pxsim.Array_.mk;
const pxsim_Array__push = pxsim.Array_.push;
const pxsim_Boolean__bang = pxsim.Boolean_.bang;
const pxsim_String__concat = pxsim.String_.concat;
const pxsim_String__stringConv = pxsim.String_.stringConv;
const pxsim_numops_toBool = pxsim.numops.toBool;
const pxsim_numops_toBoolDecr = pxsim.numops.toBoolDecr;
const pxsim_pxtcore_mkAction = pxsim.pxtcore.mkAction;
const pxsim_pxtcore_mkClassInstance = pxsim.pxtcore.mkClassInstance;
const pxsim_pxtrt_ldlocRef = pxsim.pxtrt.ldlocRef;
const pxsim_pxtrt_mapGetByString = pxsim.pxtrt.mapGetByString;
const pxsim_pxtrt_stclo = pxsim.pxtrt.stclo;
const pxsim_pxtrt_stlocRef = pxsim.pxtrt.stlocRef;
const pxsim_Boolean_ = pxsim.Boolean_;
const pxsim_pxtcore = pxsim.pxtcore;
const pxsim_String_ = pxsim.String_;
const pxsim_ImageMethods = pxsim.ImageMethods;
const pxsim_Array_ = pxsim.Array_;
const pxsim_pxtrt = pxsim.pxtrt;
const pxsim_numops = pxsim.numops;


function _main___P154783(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    globals._intervals___154090 = (undefined);
    globals._pollEventQueue___154099 = (undefined);
    globals.i___154032 = (1);
    globals.f___154033 = (0.5);
    r0 = (globals.i___154032 + globals.f___154033);
    globals.plus___154034 = (r0);
    r0 = (globals.i___154032 - globals.f___154033);
    globals.minus___154035 = (r0);
    r0 = pxsim.Math_.random();
    globals.r___154036 = (r0);
    r0 = pxsim.Math_.randomRange(5, 10);
    globals.ri___154037 = (r0);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
_main___P154783.info = {"start":0,"length":0,"line":0,"column":0,"endLine":0,"endColumn":0,"fileName":"test.ts","functionName":"<main>","argumentNames":[]}
_main___P154783.continuations = [  ]

function _main___P154783_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: _main___P154783, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
} }





const breakpoints = setupDebugger(1, ["plus___154034","i___154032","f___154033","minus___154035","r___154036","ri___154037"])

return _main___P154783
})
