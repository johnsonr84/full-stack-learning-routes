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
      position: { x: 400, y: 0 },
    },

    {
      id: 'toolingmisc',
      type: 'toolingmiscCustom',
      data: {
        text: <strong>Tooling & Misc</strong>,
      },
      position: { x: 68, y: -200 },
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

  const nodeTypes = {
    jsCustom: jsCustomNode,
    fundamentalsCustom: fundamentalsCustomNode,
    toolingmiscCustom: toolingmiscCustomNode,
    advancedCustom: advancedCustomNode,
    webapisCustom: webapisCustomNode,
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