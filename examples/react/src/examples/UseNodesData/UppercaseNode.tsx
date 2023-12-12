import { memo, useEffect } from 'react';
import { Position, NodeProps, useSetNodeData, Handle, useHandleConnections, useNodesData } from '@xyflow/react';

function UppercaseNode({ id }: NodeProps) {
  const connections = useHandleConnections({
    type: 'target',
  });
  const nodeData = useNodesData(connections[0]?.source);
  const setNodeData = useSetNodeData();

  useEffect(() => {
    setNodeData(id, { text: nodeData?.text.toUpperCase() });
  }, [nodeData]);

  return (
    <div style={{ background: '#eee', color: '#222', padding: 10, fontSize: 12, borderRadius: 10 }}>
      <Handle type="target" position={Position.Left} isConnectable={connections.length === 0} />
      <div>uppercase transform</div>
      <Handle type="source" position={Position.Right} />
    </div>
  );
}

export default memo(UppercaseNode);
