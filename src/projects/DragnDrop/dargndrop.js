import React, { useState } from "react";
import DDCCS from './dragndrop.module.css'
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from '../scroll'


import uuid from "uuid/v4";

const itemsFromBackend = [
  { id: uuid(), content: "First task", name: "Sam James", src: "https://i.ibb.co/LpN2Zz1/img1.webp"},
  { id: uuid(), content: "Second task", name: "James Husky", src: "https://i.ibb.co/9Nb4shS/img2.png" },
  { id: uuid(), content: "Third task", name: "Ronland Tiff", src: "https://i.ibb.co/86RgYz1/img3.png" },
  { id: uuid(), content: "Fourth task", name: "Nicole Ann",  src: "https://i.ibb.co/yYgsbW1/img4.png" },
  { id: uuid(), content: "Fifth task", name: "Dann Kim", src: "https://i.ibb.co/G5B7XhM/img5.png"},
  { id: uuid(), content: "Sixth task", name: "Vlad Suravov", src: "https://i.ibb.co/DbrtqLv/img6.webp" },
  { id: uuid(), content: "Seventh task", name: "Nick Tito", src: "https://i.ibb.co/cJbqJ1x/img7.webp" },
  
];

const columnsFromBackend = {
  [uuid()]: {
    name: "Requested",
    items: itemsFromBackend
  },
  [uuid()]: {
    name: "To do",
    items: []
  },
  [uuid()]: {
    name: "In Review",
    items: []
  },
  [uuid()]: {
    name: "Done",
    items: []
  }
};

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    });
  }
};

function DnD() {
  const [columns, setColumns] = useState(columnsFromBackend);
  return (
    <div> 
       <BrowserRouter>
        <ScrollToTop>
        <h1 className={DDCCS.h1}> Simply Drag and Drop the Tasks </h1>
    <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
      <DragDropContext
        onDragEnd={result => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}key={columnId}>
              <h1>{column.name}</h1>
              <div style={{ margin: 10 }}>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          background: snapshot.isDraggingOver
                            ? "lightgreen"
                            : "lightgrey",
                          padding: 4,
                          width: 250,
                          minHeight: 500
                        }}
                      >
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      userSelect: "none",
                                      padding: 16,
                                      margin: "0 0 8px 0",
                                      minHeight: "50px",
                                      backgroundColor: snapshot.isDragging
                                        ? "#99d3f2"
                                        : "#456C86",
                                      color: "white",
                                      ...provided.draggableProps.style,
                                      fontSize: "26px"
                                    }}
                                  >
                                    {item.content }

                                     
                                        <br />
                                        <br />
                                    <img src={item.src} width="50" height="50"/>
                                   <div
                                      style={{
                                        color: "#fce89d",
                                        paddingTop: "20px",
                                        fontSize: "20px",
                                        fontWeight: "bold",
                                      }}>
                                       {"name: "} {item.name}

                                      </div>

                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            </div>
          );
        })}
      </DragDropContext>

    </div>
  
        
    </ScrollToTop>
      </BrowserRouter>
        
    </div>

    
    
  );
}

export default DnD;
