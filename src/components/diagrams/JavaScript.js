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
    { id: 'toolingmisc-eslint', source: 'toolingmisc', target: 'eslint', sourceHandle: 'd', targetHandle: 'a', type: 'smooth', arrowHeadType: 'arrowclosed', label: 'Linters', style: { stroke: '#23a5f7' } },
    { id: 'toolingmisc-prettier', source: 'toolingmisc', target: 'prettier', sourceHandle: 'd', targetHandle: 'a', type: 'smooth', arrowHeadType: 'arrowclosed', label: 'Code Formatters', style: { stroke: '#23a5f7' } },
    { id: 'toolingmisc-webpack', source: 'toolingmisc', target: 'webpack', sourceHandle: 'd', targetHandle: 'a', type: 'smooth', arrowHeadType: 'arrowclosed', label: '', style: { stroke: '#23a5f7' } },
    { id: 'toolingmisc-rollup', source: 'toolingmisc', target: 'rollup', sourceHandle: 'd', targetHandle: 'a', type: 'straight', arrowHeadType: 'arrowclosed', label: 'Bundlers', style: { stroke: '#23a5f7' } },
    { id: 'toolingmisc-parcel', source: 'toolingmisc', target: 'parcel', sourceHandle: 'd', targetHandle: 'a', type: 'smooth', arrowHeadType: 'arrowclosed', label: '', style: { stroke: '#23a5f7' } },
    { id: 'toolingmisc-nextsteps', source: 'toolingmisc', target: 'nextsteps', sourceHandle: 'd', targetHandle: 'a', type: 'smooth', arrowHeadType: 'arrowclosed', label: '', style: { stroke: '#23a5f7' } },
    { id: 'toolingmisc-typescript', source: 'toolingmisc', target: 'typescript', sourceHandle: 'd', targetHandle: 'a', type: 'smooth', arrowHeadType: 'arrowclosed', label: '', style: { stroke: '#23a5f7' } },
   
    {
      id: 'eslint',
      type: 'leftCustom',
      data: {
        text: 'eslint',
      },
      position: { x: 400, y: -430 },
    },
    {
      id: 'prettier',
      type: 'leftCustom',
      data: {
        text: 'Prettier',
      },
      position: { x: 400, y: -360 },
    },
    {
      id: 'webpack',
      type: 'leftCustom',
      data: {
        text: 'Webpack',
      },
      position: { x: 400, y: -300 },
    },
    {
      id: 'rollup',
      type: 'leftCustom',
      data: {
        text: 'Rollup',
      },
      position: { x: 400, y: -270 },
    },
    {
      id: 'parcel',
      type: 'leftCustom',
      data: {
        text: 'Parcel',
      },
      position: { x: 400, y: -240 },
    },
    {
      id: 'typescript',
      type: 'leftCustom',
      data: {
        text: 'TypeScript',
      },
      position: { x: 400, y: -170 },
    },
    {
      id: 'nextsteps',
      type: 'leftCustom',
      data: {
        text: 'Next Steps',
      },
      position: { x: 400, y: -100 },
    },

    {
      id: 'advanced',
      type: 'advancedCustom',
      data: {
        text: <strong>Advanced</strong>,
      },
      position: { x: 83, y: 200 },
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
      position: { x: -400, y: -57 },
    },
    {
      id: 'xhr-fetch',
      type: 'rightCustom',
      data: {
        text: 'XHR & Fetch',
      },
      position: { x: -400, y: -24 },
    },
    {
      id: 'storage',
      type: 'rightCustom',
      data: {
        text: 'Storage',
      },
      position: { x: -400, y: 9 },
    },
    {
      id: 'video-audio',
      type: 'rightCustom',
      data: {
        text: 'Video & Audio',
      },
      position: { x: -400, y: 40 },
    },
    {
      id: 'drawing-graphics',
      type: 'rightCustom',
      data: {
        text: 'Drawing Graphics',
      },
      position: { x: -400, y: 72 },
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

  const leftCustomNode = ({ data }) => {
    return (
      <div style={toolingNode}>
        <Handle id='a' type="target" position="left" style={{ opacity: '0' }} />
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
    leftCustom: leftCustomNode,
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