import React from 'react'

function ChildComp() {

  console.log('Chlid comp render!!');

  return (
    <div>ChilComp</div>
  )
}

export default React.memo(ChildComp)