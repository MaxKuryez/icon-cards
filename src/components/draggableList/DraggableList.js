import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import IconCard from "../iconCard/IconCard";
import ExportButton from "../exportButton/ExportButton";
import { slideItems } from "../../mockData/slideList";
import { reorder } from "./utils";
import EditText from "../editText/EditText";
import { ListContainer, DragContainer } from "./draggableList.styled";

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
      <div id="export-list">
        <ExportButton />
        <DragDropContext onDragEnd={onDragEnd} >
        <EditText big/>
          <Droppable droppableId="droppable" direction="horizontal">
            {(provided) => (
              <ListContainer
                ref={provided.innerRef}
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
              </ListContainer>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    );
};

export default DraggableList;
