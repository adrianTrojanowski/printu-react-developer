import * as React from 'react';
import { IProjectItemModel } from '@common/models/Project/ProjectItemModel';

interface IProps {
  item: IProjectItemModel;
}

const ProjectViewContentItem = ({ item }: IProps): React.ReactElement => {
  return (
    <g>
      <rect
        fill={item.color}
        data-x={item.x}
        data-y={item.y}
        width={item.width}
        height={item.height}
        transform={`translate(${item.x}, ${item.y}) rotate(6) translate(-${item.width / 2}, -${item.height / 2})`}
      />
      <circle fill="#FFFFFF" cx={item.x} cy={item.y} r="4" />
      <text x={item.x + 5} y={item.y} fill="#FFFFFF">
        <tspan>{item.rotation}°</tspan>
      </text>
      {/*<rect*/}
      {/*  fill="none"*/}
      {/*  strokeWidth="2"*/}
      {/*  strokeOpacity="0.4"*/}
      {/*  stroke="#FF0000"*/}
      {/*  height={*/}
      {/*    item.width * Math.cos(item.rotation * (Math.PI / 180)) +*/}
      {/*    item.height * Math.sin(item.rotation * (Math.PI / 180))*/}
      {/*  }*/}
      {/*  width={*/}
      {/*    item.width * Math.sin(item.rotation * (Math.PI / 180)) +*/}
      {/*    item.height * Math.cos(item.rotation * (Math.PI / 180))*/}
      {/*  }*/}
      {/*  transform={`translate(${item.x - item.width / 2}, ${item.y - item.height / 2})`}*/}
      {/*/>*/}
    </g>
  );
};

export default ProjectViewContentItem;
