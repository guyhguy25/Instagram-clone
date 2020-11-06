import React from 'react'
// import Stories from 'react-insta-stories';
import './story.css'

function Story() {
    // const stories = [
    //     {
    //         url:'https://unsplash.it/220/220',
    //         duration: 5000,
    //         header: {
    //             heading: 'Mohit Karekar',
    //             subheading: 'Posted 30m ago',
    //             // profileImage: userimage,
    //         }
    //     },
    //     {
    //         url:'https://unsplash.it/210/210',
    //         duration: 5000,
    //         header: {
    //             heading: 'Mohit Karekar',
    //             subheading: 'Posted 30m ago',
    //             // profileImage: userimage
    //         }
    //     },
    //     {
    //         url:'https://unsplash.it/200/200',
    //         duration: 5000,
    //         header: {
    //             heading: 'Mohit Karekar',
    //             subheading: 'Posted 30m ago',
    //             // profileImage: userimage
    //         }
    //     }
    // ];
    // const stories = [
    //     {
    //         content: (props) => (
    //             <div style={{ backgroundImage: "url('https://www.w3schools.com/w3css/img_lights.jpg')", backgroundSize: "cover" , backgroundRepeat: "no-repeat", padding: 20 }}>
    //                 <h1 style={{ marginTop: '100%', marginBottom: 0 }}>🌝</h1>
    //                 <h1 style={{ marginTop: 5 }}>A custom title can go here.</h1>
    //             </div>
    //         ),
    //     },
    // ];
    return (
        // <Stories stories={stories} />
        <div className="main_story">
            <section className="stories">
                <div className="stories__item stories__item--active">
                    <button>
                        <div className="stories__item-picture">
                        <img src="https://randomuser.me/api/portraits/women/90.jpg" alt="" />
                        </div>
                        <span className="stories__item-username">gail_pena</span>
                    </button>
                </div>
                <div className="stories__item">
                <button>
                    <div className="stories__item-picture">
                        <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="" />
                    </div>
                    <span className="stories__item-username">louis_larson</span>
                </button>
                </div>
            </section>
        </div>
    )
}
export default Story