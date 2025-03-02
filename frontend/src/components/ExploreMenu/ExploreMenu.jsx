import React, { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';
import './ExploreMenu.css';

const ExploreMenu = ({ category, setCategory }) => {

  const { menu_list } = useContext(StoreContext);

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Discover a World of Flavors</h1>
      <p className='explore-menu-text'>Delight in a diverse collection of recipes from around the globe. Whether you're craving the rich spices of Nepali and Newari cuisine, the bold flavors of Chinese dishes, or the comforting taste of homemade meals, we have something for every foodie. Start your culinary journey today!</p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className='explore-menu-list-item'>
              <img src={item.menu_image} className={category === item.menu_name ? "active" : ""} alt="" />
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
