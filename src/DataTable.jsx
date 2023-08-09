import { useState } from 'react'

function DataTable() {
  const [data, setData] = useState([
    {
      id: 1,
      name: '珍珠奶茶',
      description: '香濃奶茶搭配QQ珍珠',
      price: 50,
      stock: 20
    },
    {
      id: 2,
      name: '冬瓜檸檬',
      description: '清新冬瓜配上新鮮檸檬',
      price: 45,
      stock: 18
    },
    {
      id: 3,
      name: '翡翠檸檬',
      description: '綠茶與檸檬的完美結合',
      price: 55,
      stock: 34
    },
    {
      id: 4,
      name: '四季春茶',
      description: '香醇四季春茶，回甘無比',
      price: 45,
      stock: 10
    },
    {
      id: 5,
      name: '阿薩姆奶茶',
      description: '阿薩姆紅茶搭配香醇鮮奶',
      price: 50,
      stock: 25
    },
    {
      id: 6,
      name: '檸檬冰茶',
      description: '檸檬與冰茶的清新組合',
      price: 45,
      stock: 20
    },
    {
      id: 7,
      name: '芒果綠茶',
      description: '芒果與綠茶的獨特風味',
      price: 55,
      stock: 18
    },
    {
      id: 8,
      name: '抹茶拿鐵',
      description: '抹茶與鮮奶的絕配',
      price: 60,
      stock: 20
    }
  ])

  const handleEditShow = (show, id) => {
    const newData = data.map(newItem => {
      return newItem.id === id ? { ...newItem, edit: show } : { ...newItem, edit: show ? !show : show }
    })

    setData(newData)
  }

  return (
    <table>
      <thead>
        <tr>
          <th scope='col'>操作</th>
          <th scope='col'>品項</th>
          <th scope='col'>描述</th>
          <th scope='col'>價格</th>
          <th scope='col'>庫存</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => {
          return (
            <tr key={item.id}>
              <td>
                <button onClick={() => handleEditShow(true, item.id)}>編輯</button>
              </td>
              <td>
                {item.edit ? (
                  <>
                    <input
                      type='text'
                      onChange={event => {
                        const newData = data.map(newItem => {
                          return newItem.id === item.id ? { ...newItem, name: event.target.value } : newItem
                        })

                        setData(newData)
                      }}
                      value={item.name}
                    />
                    <button onClick={() => handleEditShow(false, item.id)}>完成</button>
                  </>
                ) : (
                  item.name
                )}
              </td>
              <td>
                <small>{item.description}</small>
              </td>
              <td>{item.price}</td>
              <td>
                <button
                  onClick={() => {
                    const newData = data.map(newItem => {
                      return newItem.id === item.id ? { ...newItem, stock: newItem.stock ? newItem.stock - 1 : 0 } : newItem
                    })

                    setData(newData)
                  }}
                >
                  -
                </button>
                {item.stock}
                <button
                  onClick={() => {
                    const newData = data.map(newItem => {
                      return newItem.id === item.id ? { ...newItem, stock: newItem.stock + 1 } : newItem
                    })

                    setData(newData)
                  }}
                >
                  +
                </button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default DataTable
