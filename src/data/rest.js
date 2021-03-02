import React from 'react';
import data from './project.json';
// import image1 from "../data/images/image1.png"

const Rest = () => {
    const listItems = data.map(item =>
        <div style={{backgroundColor: `whitesmoke`}}>
              <a href={item.webUrl} style={{width: 350}}>
                  <img className="img-fluid" 
                        src={require(`../data/images/image1.png`)}
                        style={{width: 350, height: `100%`}}
                        alt={item.title} />
                   <p>{item.repo}</p>
                </a>
           </div>
      );
    return (  
        <div>
            {listItems}
        </div>
    );
}
 
export default Rest;