import { useState } from "react";
import IconCard from "../iconCard/IconCard";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { styled } from '@mui/system';

// fake data generator
const getItems = (count) =>
  Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `aaa-item-${k}`,
    content: <IconCard />
  }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const getListStyle = () => ({
  margin: "80px auto 0 auto",
  display: "flex",
  width: "80%",
  textAlign: "center",
});

export const DragContainer = styled("div")({
  width: "80%"
  //backgroundColor: "red",
});

const DraggableList = () => {
  const [items, setItems] = useState(getItems(3));

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

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
    return (
      <div style={{ height: 200 }}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable" direction="horizontal">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={getListStyle(
                  snapshot.isDraggingOver,
                  items.length
                )}
                {...provided.droppableProps}
              >
                {items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <DragContainer
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {item.content}
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
