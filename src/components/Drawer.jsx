import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Drawer = ({ slideIn, toggleDrawer }) => {
  const { notes, setNotes } = useContext(AppContext);
  const drawerStyles = {
    position: "fixed",
    bottom: 0,
    right: slideIn + "%",
    backgroundColor: "white",
    height: "calc(100% - 60px)",
    width: "25%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "start",
    paddingLeft: "10px",
    zIndex: 10,
    transition: `right 0.2s ease-in-out`,
  };
  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedNotes = Array.from(notes);
    const [removed] = reorderedNotes.splice(result.source.index, 1);
    reorderedNotes.splice(result.destination.index, 0, removed);

    setNotes(reorderedNotes);
  };
  return (
    <div
      style={drawerStyles}
      className="transition-transform duration-200 transform"
    >
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="note-list" type="NOTE">
          {(provided) => (
            <div
              className="flex flex-col gap-6 w-full p-4"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <div>
                {notes.map((note, index) => (
                  <Draggable
                    key={`note-${note.id}`}
                    draggableId={`note-${note.id}-${index}`}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        className="bg-amber-200 mx-auto mt-6 w-full p-4"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <p>{note}</p>
                      </div>
                    )}
                  </Draggable>
                ))}
              </div>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

<></>;
export default Drawer;
