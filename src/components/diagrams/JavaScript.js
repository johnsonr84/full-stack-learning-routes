import React, { useState } from 'react';

import ReactFlow, {
  removeElements,
  addEdge,
  MiniMap,
  Controls,
  Background,
  Handle,
} from 'react-flow-renderer';

const onLoad = (reactFlowInstance) => {
  console.log('flow loaded:', reactFlowInstance);
  reactFlowInstance.fitView();
};

const JavaScript = () => {
  const [elements, setElements] = useState();
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params) => setElements((els) => addEdge(params, els));

const jsElements = [
    {
      id: 'javascript',
      type: 'jsCustom',
      data: {
        text: <strong>Modern JavaScript Learning Routes</strong>,
      },
      position: { x: 0, y: 0 },
    },
    { id: 'javascript-fundamentals', source: 'javascript', target: 'fundamentals', sourceHandle: 'b', targetHandle: 'a', type: 'straight', arrowHeadType: 'arrowclosed', label: '', style: { stroke: '#a8f047' }, animated: true, },
    { id: 'javascript-toolingmisc', source: 'javascript', target: 'toolingmisc', sourceHandle: 'a', targetHandle: 'a', type: 'straight', arrowHeadType: 'arrowclosed', label: '', style: { stroke: '#23a5f7' }, animated: true, },
    { id: 'javascript-advanced', source: 'javascript', target: 'advanced', sourceHandle: 'c', targetHandle: 'a', type: 'straight', arrowHeadType: 'arrowclosed', label: '', style: { stroke: '#f79501' }, animated: true, },
    { id: 'javascript-webapis', source: 'javascript', target: 'webapis', sourceHandle: 'd', targetHandle: 'a', type: 'straight', arrowHeadType: 'arrowclosed', label: '', style: { stroke: '#35e0d2' }, animated: true, },

    {
      id: 'fundamentals',
      type: 'fundamentalsCustom',
      data: {
        text: <strong>Fundamentals</strong>,
      },
      position: { x: 600, y: 0 },
    },
    {
      id: 'toolingmisc',
      type: 'toolingmiscCustom',
      data: {
        text: <strong>Tooling & Misc</strong>,
      },
      position: { x: 68, y: -270 },
    },
    { id: 'toolingmisc-eslinte', source: 'toolingmisc', target: 'eslint', sourceHandle: 'b', targetHandle: 'a', type: 'smooth', arrowHeadType: 'arrowclosed', label: 'Linters', style: { stroke: '#23a5f7' }, labelBgStyle: { fill: '#23a5f7', color: '#23a5f7', fillOpacity: 0, fontWeight: 700 }, style: { stroke: '#23a5f7' }, labelStyle: { fill: '#23a5f7', fontWeight: 700 } },
    { id: 'toolingmisc-prettier', source: 'toolingmisc', target: 'prettier', sourceHandle: 'd', targetHandle: 'a', type: 'smooth', arrowHeadType: 'arrowclosed', label: 'Formatters', style: { stroke: '#23a5f7' }, labelBgStyle: { fill: '#23a5f7', color: '#23a5f7', fillOpacity: 0, fontWeight: 700 }, style: { stroke: '#23a5f7' }, labelStyle: { fill: '#23a5f7', fontWeight: 700 } },
    { id: 'toolingmisc-bundlers', source: 'toolingmisc', target: 'bundlers', sourceHandle: 'd', targetHandle: 'a', type: 'smooth', arrowHeadType: 'arrowclosed', label: '', style: { stroke: '#23a5f7' } },
    { id: 'bundlers-webpack', source: 'bundlers', target: 'webpack', sourceHandle: 'b', targetHandle: 'a', type: 'smooth', arrowHeadType: 'arrowclosed', style: { stroke: '#23a5f7' } },
    { id: 'bundlers-rollup', source: 'bundlers', target: 'rollup', sourceHandle: 'b', targetHandle: 'a', type: 'straight', arrowHeadType: 'arrowclosed', style: { stroke: '#23a5f7' } },
    { id: 'bundlers-parcel', source: 'bundlers', target: 'parcel', sourceHandle: 'b', targetHandle: 'a', type: 'smooth', arrowHeadType: 'arrowclosed', label: '', style: { stroke: '#23a5f7' } },
    { id: 'toolingmisc-typescript', source: 'toolingmisc', target: 'typescript', sourceHandle: 'd', targetHandle: 'a', type: 'smooth', arrowHeadType: 'arrowclosed', label: '', style: { stroke: '#23a5f7' } },
    { id: 'toolingmisc-nextsteps', source: 'toolingmisc', target: 'nextsteps', sourceHandle: 'd', targetHandle: 'a', type: 'smooth', arrowHeadType: 'arrowclosed', label: '', style: { stroke: '#23a5f7' } },

    {
      id: 'eslint',
      type: 'leftToolingCustom',
      data: {
        text: 'eslint',
      },
      position: { x: 300, y: -380 },
    },
    // {
    //   id: 'linters',
    //   type: 'autoCustom',
    //   data: {
    //     text: 'Linters',
    //   },
    //   position: { x: 257, y: -400 },
    // },
    // {
    //   id: 'formatters',
    //   type: 'autoCustom',
    //   data: {
    //     text: 'Formatters',
    //   },
    //   position: { x: 257, y: -360 },
    // },
    {
      id: 'prettier',
      type: 'leftToolingCustom',
      data: {
        text: 'Prettier',
      },
      position: { x: 350, y: -340 },
    },
    {
      id: 'webpack',
      type: 'leftToolingCustom',
      data: {
        text: 'Webpack',
      },
      position: { x: 400, y: -290 },
    },
    {
      id: 'rollup',
      type: 'leftToolingCustom',
      data: {
        text: 'Rollup',
      },
      position: { x: 400, y: -262 },
    },
    {
      id: 'bundlers',
      type: 'autoToolingCustom',
      data: {
        text: 'Bundlers',
      },
      position: { x: 300, y: -262 },
    },
    {
      id: 'parcel',
      type: 'leftToolingCustom',
      data: {
        text: 'Parcel',
      },
      position: { x: 400, y: -233 },
    },
    {
      id: 'typescript',
      type: 'leftToolingCustom',
      data: {
        text: 'TypeScript',
      },
      position: { x: 350, y: -180 },
    },
    {
      id: 'nextsteps',
      type: 'leftToolingCustom',
      data: {
        text: 'Next Steps',
      },
      position: { x: 300, y: -140 },
    },

    {
      id: 'advanced',
      type: 'advancedCustom',
      data: {
        text: <strong>Advanced</strong>,
      },
      position: { x: 83, y: 350 },
    },
    { id: 'advanced-advancedscope', source: 'advanced', target: 'advancedscope', sourceHandle: 'b', targetHandle: 'a', type: 'smooth', arrowHeadType: 'arrowclosed', style: { stroke: '#f79501' } },
    { id: 'advanced-closure', source: 'advanced', target: 'closure', sourceHandle: 'b', targetHandle: 'a', type: 'smooth', arrowHeadType: 'arrowclosed', style: { stroke: '#f79501' } },
    { id: 'advanced-currying', source: 'advanced', target: 'currying', sourceHandle: 'b', targetHandle: 'a', type: 'smooth', arrowHeadType: 'arrowclosed', style: { stroke: '#f79501' } },
    { id: 'advanced-this', source: 'advanced', target: 'this', sourceHandle: 'b', targetHandle: 'a', type: 'smooth', arrowHeadType: 'arrowclosed', style: { stroke: '#f79501' } },
    { id: 'advanced-asynchronousjavascript', source: 'advanced', target: 'asynchronousjavascript', sourceHandle: 'b', targetHandle: 'a', type: 'smooth', arrowHeadType: 'arrowclosed', style: { stroke: '#f79501' } },
    { id: 'advanced-prototype', source: 'advanced', target: 'prototype', sourceHandle: 'b', targetHandle: 'a', type: 'smooth', arrowHeadType: 'arrowclosed', style: { stroke: '#f79501' } },
    { id: 'advanced-prototypeinheritance', source: 'advanced', target: 'prototypeinheritance', sourceHandle: 'b', targetHandle: 'a', type: 'smooth', arrowHeadType: 'arrowclosed', style: { stroke: '#f79501' } },
    { id: 'advanced-class', source: 'advanced', target: 'class', sourceHandle: 'b', targetHandle: 'a', type: 'smooth', arrowHeadType: 'arrowclosed', style: { stroke: '#f79501' } },
    { id: 'advanced-iterators', source: 'advanced', target: 'iterators', sourceHandle: 'b', targetHandle: 'a', type: 'smooth', arrowHeadType: 'arrowclosed', style: { stroke: '#f79501' } },
    { id: 'advanced-generators', source: 'advanced', target: 'generators', sourceHandle: 'b', targetHandle: 'a', type: 'smooth', arrowHeadType: 'arrowclosed', style: { stroke: '#f79501' } },
    { id: 'advanced-eventloop', source: 'advanced', target: 'eventloop', sourceHandle: 'b', targetHandle: 'a', type: 'smooth', arrowHeadType: 'arrowclosed', style: { stroke: '#f79501' } },

    {
      id: 'advancedscope',
      type: 'leftAdvancedCustom',
      data: {
        text: 'Advanced Scope',
      },
      position: { x: 300, y: 90 },
    },
    {
      id: 'closure',
      type: 'leftAdvancedCustom',
      data: {
        text: 'Closure',
      },
      position: { x: 300, y: 140 },
    },
    {
      id: 'this',
      type: 'leftAdvancedCustom',
      data: {
        text: 'this',
      },
      position: { x: 300, y: 190 },
    },
    { id: 'this-implicitbinding', source: 'this', target: 'implicitbinding', sourceHandle: 'b', targetHandle: 'a', type: 'smooth', arrowHeadType: 'arrowclosed', style: { stroke: '#f79501' } },
    { id: 'this-explicitbinding', source: 'this', target: 'explicitbinding', sourceHandle: 'b', targetHandle: 'a', type: 'smooth', arrowHeadType: 'arrowclosed', style: { stroke: '#f79501' } },
    { id: 'this-newbinding', source: 'this', target: 'newbinding', sourceHandle: 'b', targetHandle: 'a', type: 'smooth', arrowHeadType: 'arrowclosed', style: { stroke: '#f79501' } },
    { id: 'this-lexicalbinding', source: 'this', target: 'lexicalbinding', sourceHandle: 'b', targetHandle: 'a', type: 'smooth', arrowHeadType: 'arrowclosed', style: { stroke: '#f79501' } },
    { id: 'this-defaultbinding', source: 'this', target: 'defaultbinding', sourceHandle: 'b', targetHandle: 'a', type: 'smooth', arrowHeadType: 'arrowclosed', style: { stroke: '#f79501' } },

    {
      id: 'currying',
      type: 'leftAdvancedCustom',
      data: {
        text: 'Currying',
      },
      position: { x: 300, y: 240 },
    },
    {
      id: 'implicitbinding',
      type: 'leftAdvancedCustom',
      data: {
        text: 'Implicit Binding',
      },
      position: { x: 475, y: 120 },
    },
    {
      id: 'explicitbinding',
      type: 'leftAdvancedCustom',
      data: {
        text: 'Explicit Binding',
      },
      position: { x: 475, y: 155 },
    },
    {
      id: 'newbinding',
      type: 'leftAdvancedCustom',
      data: {
        text: 'New Binding',
      },
      position: { x: 475, y: 190 },
    },
    {
      id: 'lexicalbinding',
      type: 'leftAdvancedCustom',
      data: {
        text: 'Lexical Binding',
      },
      position: { x: 475, y: 225 },
    },
    {
      id: 'defaultbinding',
      type: 'leftAdvancedCustom',
      data: {
        text: 'Default Binding',
      },
      position: { x: 475, y: 265 },
    },
    {
      id: 'prototype',
      type: 'leftAdvancedCustom',
      data: {
        text: 'Prototype',
      },
      position: { x: 300, y: 280 },
    },
    {
      id: 'prototypeinheritance',
      type: 'leftAdvancedCustom',
      data: {
        text: 'Prototype Inheritance',
      },
      position: { x: 300, y: 320 },
    },
    {
      id: 'class',
      type: 'leftAdvancedCustom',
      data: {
        text: 'Class',
      },
      position: { x: 300, y: 380 },
    },
    {
      id: 'asynchronousjavascript',
      type: 'leftAdvancedCustom',
      data: {
        text: 'Asynchronous JavaScript',
      },
      position: { x: 300, y: 430 },
    },
    { id: 'asynchronousjavascript-settimeout', source: 'asynchronousjavascript', target: 'settimeout', sourceHandle: 'b', targetHandle: 'a', type: 'smooth', arrowHeadType: 'arrowclosed', style: { stroke: '#f79501' } },
    { id: 'asynchronousjavascript-setInterval', source: 'asynchronousjavascript', target: 'setInterval', sourceHandle: 'b', targetHandle: 'a', type: 'smooth', arrowHeadType: 'arrowclosed', style: { stroke: '#f79501' } },
    { id: 'asynchronousjavascript-callbacks', source: 'asynchronousjavascript', target: 'callbacks', sourceHandle: 'b', targetHandle: 'a', type: 'smooth', arrowHeadType: 'arrowclosed', style: { stroke: '#f79501' } },
    { id: 'asynchronousjavascript-promises', source: 'asynchronousjavascript', target: 'promises', sourceHandle: 'b', targetHandle: 'a', type: 'smooth', arrowHeadType: 'arrowclosed', style: { stroke: '#f79501' } },
    { id: 'asynchronousjavascript-asyncawait', source: 'asynchronousjavascript', target: 'asyncawait', sourceHandle: 'b', targetHandle: 'a', type: 'smooth', arrowHeadType: 'arrowclosed', style: { stroke: '#f79501' } },

    {
      id: 'settimeout',
      type: 'leftAdvancedCustom',
      data: {
        text: 'setTimeout',
      },
      position: { x: 475, y: 360 },
    },
    {
      id: 'setInterval',
      type: 'leftAdvancedCustom',
      data: {
        text: 'setInterval',
      },
      position: { x: 475, y: 400 },
    },
    {
      id: 'callbacks',
      type: 'leftAdvancedCustom',
      data: {
        text: 'callback',
      },
      position: { x: 475, y: 440 },
    },
    {
      id: 'promises',
      type: 'leftAdvancedCustom',
      data: {
        text: 'Promises',
      },
      position: { x: 475, y: 480 },
    },
    {
      id: 'asyncawait',
      type: 'leftAdvancedCustom',
      data: {
        text: 'async awaite',
      },
      position: { x: 475, y: 520 },
    },

    {
      id: 'iterators',
      type: 'leftAdvancedCustom',
      data: {
        text: 'Iterators',
      },
      position: { x: 300, y: 490 },
    },
    {
      id: 'generators',
      type: 'leftAdvancedCustom',
      data: {
        text: 'Generators',
      },
      position: { x: 300, y: 550 },
    },
    {
      id: 'eventloop',
      type: 'leftAdvancedCustom',
      data: {
        text: 'Event Loop',
      },
      position: { x: 300, y: 610 },
    },
    {
      id: 'modulesystem',
      type: 'leftAdvancedCustom',
      data: {
        text: 'Module System',
      },
      position: { x: 300, y: 670 },
    },
    { id: 'modulesystem-cjs', source: 'modulesystem', target: 'cjs', sourceHandle: 'b', targetHandle: 'a', type: 'smooth', arrowHeadType: 'arrowclosed', style: { stroke: '#f79501' } },
    { id: 'modulesystem-esm', source: 'modulesystem', target: 'esm', sourceHandle: 'b', targetHandle: 'a', type: 'smooth', arrowHeadType: 'arrowclosed', style: { stroke: '#f79501' } },
    { id: 'modulesystem-importexport', source: 'modulesystem', target: 'importexport', sourceHandle: 'b', targetHandle: 'a', type: 'smooth', arrowHeadType: 'arrowclosed', style: { stroke: '#f79501' } },
    { id: 'modulesystem-defaultnamedexports', source: 'modulesystem', target: 'defaultnamedexports', sourceHandle: 'b', targetHandle: 'a', type: 'smooth', arrowHeadType: 'arrowclosed', style: { stroke: '#f79501' } },


    {
      id: 'cjs',
      type: 'leftAdvancedCustom',
      data: {
        text: 'CJS',
      },
      position: { x: 475, y: 610 },
    },
    {
      id: 'esm',
      type: 'leftAdvancedCustom',
      data: {
        text: 'ESM',
      },
      position: { x: 475, y: 650 },
    },
    {
      id: 'importexport',
      type: 'leftAdvancedCustom',
      data: {
        text: 'Import/Export',
      },
      position: { x: 475, y: 690 },
    },
    {
      id: 'defaultnamedexports',
      type: 'leftAdvancedCustom',
      data: {
        text: 'Default/ Named Exports',
      },
      position: { x: 475, y: 730 },
    },

    {
      id: 'webapis',
      type: 'webapisCustom',
      data: {
        text: <strong>Web APIs</strong>,
      },
      position: { x: -240, y: 0 },
    },
    { id: 'webapis-dom', source: 'webapis', target: 'dom', sourceHandle: 'b', targetHandle: 'a', type: 'smooth', arrowHeadType: 'arrowclosed', label: '', style: { stroke: '#35e0d2' } },
    { id: 'webapis-xhr-fetch', source: 'webapis', target: 'xhr-fetch', sourceHandle: 'b', targetHandle: 'a', type: 'smooth', arrowHeadType: 'arrowclosed', label: '', style: { stroke: '#35e0d2' } },
    { id: 'webapis-storage', source: 'webapis', target: 'storage', sourceHandle: 'b', targetHandle: 'a', type: 'smooth', arrowHeadType: 'arrowclosed', label: '', style: { stroke: '#35e0d2' } },
    { id: 'webapis-video-audio', source: 'webapis', target: 'video-audio', sourceHandle: 'b', targetHandle: 'a', type: 'smooth', arrowHeadType: 'arrowclosed', label: '', style: { stroke: '#35e0d2' } },
    { id: 'webapis-drawing-graphics', source: 'webapis', target: 'drawing-graphics', sourceHandle: 'b', targetHandle: 'a', type: 'smooth', arrowHeadType: 'arrowclosed', label: '', style: { stroke: '#35e0d2' } },

    {
      id: 'dom',
      type: 'rightCustom',
      data: {
        text: 'DOM',
      },
      position: { x: -410, y: -57 },
    },
    {
      id: 'xhr-fetch',
      type: 'rightCustom',
      data: {
        text: 'XHR & Fetch',
      },
      position: { x: -410, y: -24 },
    },
    {
      id: 'storage',
      type: 'rightCustom',
      data: {
        text: 'Storage',
      },
      position: { x: -410, y: 9 },
    },
    {
      id: 'video-audio',
      type: 'rightCustom',
      data: {
        text: 'Video & Audio',
      },
      position: { x: -410, y: 40 },
    },
    {
      id: 'drawing-graphics',
      type: 'rightCustom',
      data: {
        text: 'Drawing Graphics',
      },
      position: { x: -410, y: 72 },
    },
    
  ];

  const jsNode = {
    color: 'black',
    // border: '1px solid black',
    backgroundColor: '#EFD81D',
    borderRadius: '2px',
    padding: '10px',
    fontSize: 'small',
    textAlign: 'center',
    width: 'auto',
  }

  const fundamentalsNode = {
    color: 'black',
    // border: '1px solid black',
    backgroundColor: '#a8f047',
    borderRadius: '2px',
    padding: '10px',
    fontSize: 'small',
    textAlign: 'center',
    width: 'auto',
  }

  const toolingmiscNode = {
    color: 'black',
    // border: '1px solid black',
    backgroundColor: '#23a5f7',
    borderRadius: '2px',
    padding: '10px',
    fontSize: 'small',
    textAlign: 'center',
    width: 'auto',
  }

  const advancedNode = {
    color: 'black',
    // border: '1px solid black',
    backgroundColor: '#f79501',
    borderRadius: '2px',
    padding: '10px',
    fontSize: 'small',
    textAlign: 'center',
    width: 'auto',
  }

  const webapisNode = {
    color: 'black',
    // border: '1px solid black',
    backgroundColor: '#35e0d2',
    borderRadius: '2px',
    padding: '10px',
    fontSize: 'small',
    textAlign: 'center',
    width: 'auto',
  }

  const apiNode = {
    color: 'black',
    // border: '1px solid black',
    backgroundColor: '#35e0d2',
    borderRadius: '2px',
    padding: '2px',
    fontSize: 'small',
    textAlign: 'center',
    width: '120px',
  }

  const toolingNode = {
    color: 'black',
    // border: '1px solid black',
    backgroundColor: '#23a5f7',
    borderRadius: '2px',
    padding: '2px',
    fontSize: 'small',
    textAlign: 'center',
    width: '120px',
  }
  const adSubNode = {
    color: 'black',
    // border: '1px solid black',
    backgroundColor: '#f79501',
    borderRadius: '2px',
    padding: '2px',
    fontSize: 'small',
    textAlign: 'center',
    width: '120px',
  }
  const autoToolingNode = {
    color: 'black',
    // border: '1px solid black',
    backgroundColor: '#23a5f7',
    borderRadius: '2px',
    padding: '2px',
    fontSize: 'small',
    textAlign: 'center',
    width: 'auto',
  }

  const autoAdvancedNode = {
    color: 'black',
    // border: '1px solid black',
    backgroundColor: '#f79501',
    borderRadius: '2px',
    padding: '2px',
    fontSize: 'small',
    textAlign: 'center',
    width: 'auto',
  }

  const jsCustomNode = ({ data }) => {
    return (
      <div style={jsNode}>
        <Handle id='a' type="source" position="top" style={{ opacity: '0' }} />
        <Handle id='b' type="source" position="right" style={{ opacity: '0' }} />
        <Handle id='c' type="source" position="bottom" style={{ opacity: '0' }} />
        <Handle id='d' type="source" position="left" style={{ opacity: '0' }} />
        <div>{data.text}</div>
      </div>
    )
  }
  const fundamentalsCustomNode = ({ data }) => {
    return (
      <div style={fundamentalsNode}>
        <Handle id='a' type="target" position="left" style={{ opacity: '0' }} />
        <Handle id='b' type="source" position="right" style={{ opacity: '0' }} />
        <div>{data.text}</div>
      </div>
    )
  }

  const toolingmiscCustomNode = ({ data }) => {
    return (
      <div style={toolingmiscNode}>
        <Handle id='a' type="target" position="bottom" style={{ opacity: '0' }} />
        <Handle id='b' type="source" position="right" style={{ opacity: '0' }} />
        <div>{data.text}</div>
      </div>
    )
  }

  const advancedCustomNode = ({ data }) => {
    return (
      <div style={advancedNode}>
        <Handle id='a' type="target" position="top" style={{ opacity: '0' }} />
        <Handle id='b' type="source" position="right" style={{ opacity: '0' }} />
        <div>{data.text}</div>
      </div>
    )
  }

  const webapisCustomNode = ({ data }) => {
    return (
      <div style={webapisNode}>
        <Handle id='a' type="target" position="right" style={{ opacity: '0' }} />
        <Handle id='b' type="source" position="left" style={{ opacity: '0' }} />
        <div>{data.text}</div>
      </div>
    )
  }

  const rightCustomNode = ({ data }) => {
    return (
      <div style={apiNode}>
        <Handle id='a' type="target" position="right" style={{ opacity: '0' }} />
        <div>{data.text}</div>
      </div>
    )
  }

  const leftToolingCustomNode = ({ data }) => {
    return (
      <div style={toolingNode}>
        <Handle id='a' type="target" position="left" style={{ opacity: '0' }} />
        <div>{data.text}</div>
      </div>
    )
  }
  const leftAdvancedCustomNode = ({ data }) => {
    return (
      <div style={adSubNode}>
        <Handle id='a' type="target" position="left" style={{ opacity: '0' }} />
        <Handle id='b' type="source" position="right" style={{ opacity: '0' }} />
        <div>{data.text}</div>
      </div>
    )
  }
  const autoToolingCustomNode = ({ data }) => {
    return (
      <div style={autoToolingNode}>
        <Handle id='a' type="target" position="left" style={{ opacity: '0' }} />
        <Handle id='b' type="source" position="right" style={{ opacity: '0' }} />
        <div>{data.text}</div>
      </div>
    )
  }
  const autoAdvancedCustomNode = ({ data }) => {
    return (
      <div style={autoAdvancedNode}>
        <Handle id='a' type="target" position="left" style={{ opacity: '0' }} />
        <Handle id='b' type="source" position="right" style={{ opacity: '0' }} />
        <div>{data.text}</div>
      </div>
    )
  }

  const nodeTypes = {
    jsCustom: jsCustomNode,
    fundamentalsCustom: fundamentalsCustomNode,
    toolingmiscCustom: toolingmiscCustomNode,
    advancedCustom: advancedCustomNode,
    webapisCustom: webapisCustomNode,
    rightCustom: rightCustomNode,
    leftToolingCustom: leftToolingCustomNode,
    leftAdvancedCustom: leftAdvancedCustomNode,
    autoToolingCustom: autoToolingCustomNode,
    autoAdvancedCustom: autoAdvancedCustomNode,
  }

  return (
    <ReactFlow
      elements={jsElements}
      onElementsRemove={onElementsRemove}
      onConnect={onConnect}
      onLoad={onLoad}
      snapToGrid={true}
      snapGrid={[15, 15]}
      nodeTypes={nodeTypes}
    >
      <MiniMap
        nodeStrokeColor={(n) => {
          if (n.style?.background) return n.style.background;
          if (n.type === 'input') return '#0041d0';
          if (n.type === 'output') return '#ff0072';
          if (n.type === 'default') return '#1a192b';

          return '#eee';
        }}
        nodeColor={(n) => {
          if (n.style?.background) return n.style.background;

          return '#fff';
        }}
        nodeBorderRadius={2}
      />
      <Controls />
      <Background color="#EFD81D" gap={16} />
    </ReactFlow>
  );
};

export default JavaScript;