import React from 'react'
import Suggestion from './Suggestion/Suggestion'
import product6 from '../../../../assets/product-1.png'
import product2 from '../../../../assets/product-2.png'
import product3 from '../../../../assets/product-3.png'
import product4 from '../../../../assets/product-4.png'
import product5 from '../../../../assets/product-5.png'
import product1 from '../../../../assets/product-6.png'
import category1 from '../../../../assets/category-1.png'
import category2 from '../../../../assets/category-2.png'
import category3 from '../../../../assets/category-3.png'
import category4 from '../../../../assets/category-4.png'
import category5 from '../../../../assets/category-5.png'

import './styles.css'

const Menu = () => {
  const product_data = {
    title: "Bạn đã chọn được món ăn chưa?",
    subtitle: "Dưới đây là một số món bán chạy của Food Town mà bạn có thể muốn ăn",
    type: "product",
    productData: [
      {
        name: "Suất ăn số 1",
        description: "Cơm, thịt gà và rau bắp cải",
        rate: 5,
        price: 10000,
        image: product1
      },
      {
        name: "Suất ăn số 2",
        description: "Cơm, thịt bò và kim chi",
        rate: 5,
        price: 10000,
        image: product2
      },
      {
        name: "Suất ăn số 3",
        description: "Cơm, tôm và rau muống",
        rate: 4,
        price: 10000,
        image: product3
      },
      {
        name: "Suất ăn số 4",
        description: "Cơm, ức gà sốt cay và rau củ",
        rate: 4,
        price: 10000,
        image: product4
      },
      {
        name: "Suất ăn số 5",
        description: "Cơm, thịt gà đùi và rau củ",
        rate: 4,
        price: 10000,
        image: product5
      },
      {
        name: "Suất ăn số 6",
        description: "Cơm, thịt gà và rau bắp cải",
        rate: 4.5,
        price: 10000,
        image: product6
      },
      {
        name: "Suất ăn số 7",
        description: "Cơm, thịt gà và rau bắp cải",
        rate: 4.5,
        price: 10000,
        image: product3
      },
      {
        name: "Suất ăn số 8",
        description: "Cơm, thịt gà và rau bắp cải",
        rate: 4.5,
        price: 10000,
        image: product2
      },
      {
        name: "Suất ăn số 9",
        description: "Cơm, thịt gà và rau bắp cải",
        rate: 4.5,
        price: 10000,
        image: product1
      },
      {
        name: "Suất ăn số 10",
        description: "Cơm, thịt gà và rau bắp cải",
        rate: 4.5,
        price: 10000,
        image: product4
      },
      {
        name: "Suất ăn số 11",
        description: "Cơm, thịt gà và rau bắp cải",
        rate: 4.5,
        price: 10000,
        image: product2
      },
      {
        name: "Suất ăn số 12",
        description: "Cơm, thịt gà và rau bắp cải",
        rate: 4.5,
        price: 10000,
        image: product5
      },
      {
        name: "Suất ăn số 13",
        description: "Cơm, thịt gà và rau bắp cải",
        rate: 4.5,
        price: 10000,
        image: product4
      },
      {
        name: "Suất ăn số 14",
        description: "Cơm, thịt gà và rau bắp cải",
        rate: 4.5,
        price: 10000,
        image: product3
      },
      {
        name: "Suất ăn số 15",
        description: "Cơm, thịt gà và rau bắp cải",
        rate: 4.5,
        price: 10000,
        image: product1
      },
    ]
  }

  const category_data = {
    title: "Hay bạn vẫn chưa biết là mình muốn ăn loại đồ ăn gì ngày hôm nay?",
    subtitle: "Dưới dây là một số các danh mục thực phẩm mà Food Town có thể đem đến cho bạn",
    type: "category",
    productData: [
      {
        name: "Thịt bò",
        size: 12,
        image: category1
      },
      {
        name: "Thịt gà",
        size: 15,
        image: category2
      },
      {
        name: "Cá",
        size: 12,
        image: category3
      },
      {
        name: "Tôm",
        size: 12,
        image: category4
      },
      {
        name: "Thịt lợn",
        size: 12,
        image: category5
      },
    ]
  }

  return (
    <div className='menu-container container' id='menu'>
        <p className='menu-title'>Thực đơn</p>
        <Suggestion data={product_data}/>
        <Suggestion data={category_data}/>
    </div>
  )
}

export default Menu