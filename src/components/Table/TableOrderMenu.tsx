import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { Button, Checkbox, Menu, MenuItem } from "@mui/material";
import { FC, useContext } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { TableContext } from ".";

const TableOrderMenu: FC<Props> = ({ menuAnchorEl, setMenuAnchorEl }) => {
  const { setColumnOrder, allColumns } = useContext(TableContext);

  const filteredColumns = allColumns.filter(
    (column) => column.id !== "actions" && column.id !== "selection"
  );

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const newItems = reorder(
      filteredColumns,
      result.source.index,
      result.destination.index
    );
    if (allColumns[0].id === "selection") {
      newItems.unshift(allColumns[0]);
    }
    if (allColumns[allColumns.length - 1].id === "actions") {
      newItems.push(allColumns[allColumns.length - 1]);
    }
    setColumnOrder(newItems.map((item: any) => item.id) as any);
  };

  return (
    <Menu
      id="menu-order"
      anchorEl={menuAnchorEl}
      keepMounted
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      open={Boolean(menuAnchorEl)}
      onClose={() => setMenuAnchorEl(null)}
    >
      <div>
        <Button
          style={{ margin: "0 auto", display: "table" }}
          onClick={async () => {
            window.location.reload();
          }}
        >
          Reset
        </Button>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="columnOrder">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {filteredColumns.map((column, index) => {
                  console.log(column.getToggleHiddenProps());
                  return (
                    <Draggable
                      key={column.id}
                      draggableId={column.id}
                      index={index}
                    >
                      {(provided) => (
                        <MenuItem
                          key={column.id}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <DragIndicatorIcon style={{ cursor: "ns-resize" }} />
                          <Checkbox {...column.getToggleHiddenProps()} />
                          {column.Header}
                        </MenuItem>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </Menu>
  );
};

export default TableOrderMenu;

interface Props {
  menuAnchorEl: any;
  setMenuAnchorEl: any;
}
