import React from 'react'
import members from "../../../../assets/ft-members.jpeg"
import './styles.css'

const About = () => {
  const content = "Một nhóm gồm 7 các bạn trẻ tràn trề nhiệt huyết và năng lượng tập hợp lại với nhau với mong muốn đóng góp một phần công sức của mình để giảm thiểu các tác động tiêu cực của đồ ăn thừa tới môi trường và giải quyết vấn đề thiếu lương thực, thực phẩm trong xã hội hiện nay"
  return (
    <div className='about-container container' id="about">
      <div className='about-left'>
        <p className='about-title'>Về chúng tôi</p>
        <p className='about-content'>{content}</p>
      </div>
      <div className='about-right'>
        <img src={members} alt="members" className='about-image'/>
      </div>
    </div>
  )
}

export default About