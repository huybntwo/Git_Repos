import React from 'react'

function ChildComponent() {
    console.log('child components')
  return (
    <div>ChildComponent</div>
  )
}
// (prevProps, nextProps ) => {return prevProps.name === nextProps;
//if is true, then no re-render and in constrast
// export default React.memo(ChildComponent,(prevProps, nextProps ) => {
//     return prevProps.name === nextProps;
// })

export default ChildComponent;
