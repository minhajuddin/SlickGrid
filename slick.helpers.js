function slickHelper(){
  //////////////////////////////////////////////////////////////////////////////////////////////
  // Custom functions for our grid

  // add rows to the grid through javascript
  // accepts a javascript object and adds it to the grid
  return {
addRow:function (obj){
         gridData.push(obj);
         grid.updateRowCount();
         grid.render();
       }
  };
}
