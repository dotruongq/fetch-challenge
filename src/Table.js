import React from 'react'
import Row from './Row'
const Table   = ({items,loading}) => {
  return (
    <main>
        {!loading && items  ?(
        <div className='table-container'>
            <table>
                <tbody>
                {items.map((item) =>(
                    <Row key={item.id} item={item}></Row>
                ))}

                </tbody>
            </table>

        </div>):(<div>List is Loading</div>)
        }
     

    </main>
  )
}

export default Table