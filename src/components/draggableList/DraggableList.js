import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import IconCard from "../iconCard/IconCard";
import ExportButton from "../exportButton/ExportButton";
import { slideItems } from "../../mockData/slideList";
import { reorder } from "./utils";
import { styled } from '@mui/system';

const getListStyle ={
  margin: "80px auto 0 auto",
  display: "flex",
  width: "80%",
  textAlign: "center",
};

export const DragContainer = styled("div")({
  width: "80%"
  //backgroundColor: "red",
});

const DraggableList = () => {
  const [items, setItems] = useState(slideItems);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const newItems = reorder(
      items,
      result.source.index,
      result.destination.index
    );
    setItems(newItems);
  }

    return (
      <div style={{ height: 200 }} id="export-list">
        <ExportButton />
        <DragDropContext onDragEnd={onDragEnd} >
          <Droppable droppableId="droppable" direction="horizontal">
            {(provided) => (
              <div
                ref={provided.innerRef}
                style={getListStyle}
                {...provided.droppableProps}
              >
                {items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <DragContainer
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <IconCard />
                      </DragContainer>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    );
};

export default DraggableList;
